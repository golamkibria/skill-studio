const assessmentList = Array.isArray(window.assessments) ? window.assessments : [];

const state = {
  started: false,
  assessmentId: null,
  questions: [],
  totalSeconds: 0,
  currentIndex: 0,
  perQuestionSeconds: [],
  selected: [],
  revealed: [],
  isCorrect: [],
  markedReview: [],
  timers: { total: null, perQ: null }
};

const el = (id) => document.getElementById(id);

const startBtn = el('startBtn');
const startBtn2 = el('startBtn2');
const resumeBtn = el('resumeBtn');
const restartBtn = el('restartBtn');
const restartBtn2 = el('restartBtn2');

const startScreen = el('startScreen');
const questionScreen = el('questionScreen');
const assessmentSelect = el('assessmentSelect');
const assessmentInfo = el('assessmentInfo');

const qIndex = el('qIndex');
const qTotal = el('qTotal');
const qStatus = el('qStatus');
const qReview = el('qReview');

const qText = el('qText');
const optionsWrap = el('options');

const showAnswerBtn = el('showAnswerBtn');
const markReviewBtn = el('markReviewBtn');
const clearBtn = el('clearBtn');

const feedback = el('feedback');
const fbTitle = el('fbTitle');
const fbDetail = el('fbDetail');

const prevBtn = el('prevBtn');
const nextBtn = el('nextBtn');
const jumpFirstBtn = el('jumpFirstBtn');
const jumpLastBtn = el('jumpLastBtn');
const endBtn = el('endBtn');

const navGrid = el('navGrid');
const answeredCount = el('answeredCount');
const correctCount = el('correctCount');
const wrongCount = el('wrongCount');
const reviewCount = el('reviewCount');

const totalTime = el('totalTime');
const qTime = el('qTime');

const toggleGridBtn = el('toggleGridBtn');
const gridWrap = el('gridWrap');
const openSummaryBtn = el('openSummaryBtn');

const summaryModal = el('summaryModal');
const closeSummaryBtn = el('closeSummaryBtn');
const continueBtn = el('continueBtn');

const sumTotal = el('sumTotal');
const sumAnswered = el('sumAnswered');
const sumCorrect = el('sumCorrect');
const sumWrong = el('sumWrong');
const sumReview = el('sumReview');
const sumTime = el('sumTime');
const speedLine = el('speedLine');

const openHelp = el('openHelp');
const helpModal = el('helpModal');
const closeHelpBtn = el('closeHelpBtn');

const modeLabel = el('modeLabel');
const mainTitle = el('mainTitle');
const noteArea = el('noteArea');

const jumpUnansweredBtn = el('jumpUnansweredBtn');
const jumpReviewBtn = el('jumpReviewBtn');

const wrongCountSummary = el('wrongCountSummary');
const reviewWrongBtn = el('reviewWrongBtn');

const wrongReviewModal = el('wrongReviewModal');
const closeWrongReviewBtn = el('closeWrongReviewBtn');
const wrongPos = el('wrongPos');
const wrongTotal = el('wrongTotal');
const wrongCard = el('wrongCard');
const prevWrongBtn = el('prevWrongBtn');
const nextWrongBtn = el('nextWrongBtn');
const gotoWrongBtn = el('gotoWrongBtn');

const wrongReviewState = {
  wrongIndexes: [],
  pos: 0
};

function pad2(n) {
  return String(n).padStart(2, '0');
}

function fmtTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${pad2(m)}:${pad2(s)}`;
}

function clamp(i, min, max) {
  return Math.max(min, Math.min(max, i));
}

function validateQuestions(items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('Questions dataset is empty or invalid.');
  }

  items.forEach((q, idx) => {
    if (!q || typeof q.text !== 'string' || !q.text.trim()) {
      throw new Error(`Invalid question text at index ${idx}.`);
    }
    if (typeof q.answer !== 'string' || !q.answer.trim()) {
      throw new Error(`Invalid answer key at index ${idx}.`);
    }

    const options = normalizeOptions(q.options);
    if (!options.length) {
      throw new Error(`Question ${idx} has no options.`);
    }
    if (!options.some((opt) => opt.key === q.answer)) {
      throw new Error(`Question ${idx} answer does not match options.`);
    }
  });
}

function validateAssessments(items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('No assessments available.');
  }

  items.forEach((assessment, index) => {
    if (!assessment || typeof assessment !== 'object') {
      throw new Error(`Invalid assessment at index ${index}.`);
    }
    if (!assessment.id || !assessment.name) {
      throw new Error(`Assessment ${index} is missing id or name.`);
    }
    validateQuestions(assessment.questions);
  });
}

function getCurrentAssessment() {
  return assessmentList.find((item) => item.id === state.assessmentId) || null;
}

function updateAssessmentInfo() {
  const current = getCurrentAssessment();
  if (!current) {
    assessmentInfo.textContent = 'No assessment selected.';
    return;
  }

  const tags = Array.isArray(current.tags) && current.tags.length ? current.tags.join(', ') : 'none';
  assessmentInfo.textContent = `${current.description || 'No description'} | ${current.questions.length} questions | Tags: ${tags}`;
}

function selectAssessment(assessmentId) {
  const selectedAssessment = assessmentList.find((item) => item.id === assessmentId);
  if (!selectedAssessment) return;
  state.assessmentId = selectedAssessment.id;
  state.questions = selectedAssessment.questions;
  updateAssessmentInfo();
}

function populateAssessmentSelect() {
  assessmentSelect.innerHTML = '';
  assessmentList.forEach((assessment) => {
    const option = document.createElement('option');
    option.value = assessment.id;
    option.textContent = assessment.name;
    assessmentSelect.appendChild(option);
  });

  if (assessmentList.length > 0) {
    assessmentSelect.value = assessmentList[0].id;
    selectAssessment(assessmentList[0].id);
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function getOptText(q, letter) {
  if (!letter) return '';
  const options = normalizeOptions(q.options);
  const found = options.find((opt) => opt.key === letter);
  return found ? found.text : '';
}

function updateStats() {
  const { ans, cor, wro, rev } = calcCounts(state.questions, state);
  answeredCount.textContent = ans;
  correctCount.textContent = cor;
  wrongCount.textContent = wro;
  reviewCount.textContent = rev;
}

function updateTimersUI() {
  totalTime.textContent = fmtTime(state.totalSeconds);
  const idx = state.currentIndex;
  const qSecs = state.perQuestionSeconds[idx] || 0;
  qTime.textContent = fmtTime(qSecs);
}

function stopTimers() {
  if (state.timers.total) clearInterval(state.timers.total);
  if (state.timers.perQ) clearInterval(state.timers.perQ);
  state.timers.total = null;
  state.timers.perQ = null;
}

function startTimers() {
  stopTimers();

  state.timers.total = setInterval(() => {
    state.totalSeconds++;
    totalTime.textContent = fmtTime(state.totalSeconds);
  }, 1000);

  state.timers.perQ = setInterval(() => {
    const idx = state.currentIndex;
    state.perQuestionSeconds[idx] = (state.perQuestionSeconds[idx] || 0) + 1;
    qTime.textContent = fmtTime(state.perQuestionSeconds[idx]);
  }, 1000);
}

function setMainMode(started) {
  if (!started) {
    modeLabel.textContent = 'Skill Studio';
    mainTitle.textContent = 'Start your assessment';
    startBtn.style.display = '';
    startBtn2.style.display = '';
    resumeBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    return;
  }

  modeLabel.textContent = 'Skill Studio (Active)';
  mainTitle.textContent = 'Answer one question at a time';
  startBtn.style.display = 'none';
  startBtn2.style.display = 'none';
  resumeBtn.style.display = '';
  restartBtn.style.display = '';
}

function renderNavGrid() {
  navGrid.innerHTML = '';

  for (let i = 0; i < state.questions.length; i++) {
    const d = document.createElement('div');
    d.className = 'qdot';
    d.textContent = String(i + 1);
    d.addEventListener('click', () => goTo(i));
    navGrid.appendChild(d);
  }

  updateNavGridStyles();
}

function updateNavGridStyles() {
  const children = [...navGrid.children];
  children.forEach((d, i) => {
    d.className = 'qdot';
    if (i === state.currentIndex) d.classList.add('current');
    if (state.selected[i]) d.classList.add('answered');
    if (state.markedReview[i]) d.classList.add('review');
    if (state.revealed[i] === true && state.isCorrect[i] === true) d.classList.add('correct');
    if (state.revealed[i] === true && state.isCorrect[i] === false) d.classList.add('wrong');
  });
}

function renderQuestion() {
  if (!state.questions.length) return;

  const i = state.currentIndex;
  const q = state.questions[i];
  const optsArray = normalizeOptions(q.options);

  qIndex.textContent = String(i + 1);
  qTotal.textContent = String(state.questions.length);
  qText.textContent = q.text;

  qStatus.textContent = statusText(state.selected[i], state.revealed[i], state.isCorrect[i]);
  qReview.textContent = state.markedReview[i] ? 'Yes' : 'No';

  optionsWrap.innerHTML = '';
  optsArray.forEach((opt) => {
    const card = document.createElement('div');
    card.className = 'opt';
    if (state.selected[i] === opt.key) card.classList.add('selected');

    const radio = document.createElement('div');
    radio.className = 'radio';
    radio.setAttribute('aria-hidden', 'true');

    const label = document.createElement('div');
    label.className = 'lbl';

    const strong = document.createElement('strong');
    strong.textContent = `${opt.key}. `;

    label.appendChild(strong);
    label.appendChild(document.createTextNode(String(opt.text)));

    card.appendChild(radio);
    card.appendChild(label);
    card.addEventListener('click', () => selectOption(opt.key));

    optionsWrap.appendChild(card);
  });

  hideFeedback();
  if (state.revealed[i] === true) {
    showFeedbackAfterReveal();
  }

  prevBtn.disabled = i === 0;
  nextBtn.disabled = i === state.questions.length - 1;
  markReviewBtn.textContent = state.markedReview[i] ? 'Unmark Review' : 'Mark for Review';

  noteArea.textContent = [
    `Topic: ${q.topic || 'General'}`,
    `Difficulty: ${q.difficulty || 'Mixed'}`,
    `Time spent on this question: ${fmtTime(state.perQuestionSeconds[i] || 0)}`
  ].join(' | ');

  updateStats();
  updateTimersUI();
  updateNavGridStyles();
}

function selectOption(key) {
  const i = state.currentIndex;
  state.selected[i] = key;

  if (state.revealed[i] === true) {
    state.isCorrect[i] = key === state.questions[i].answer;
    showFeedbackAfterReveal();
  }

  renderQuestion();
}

function hideFeedback() {
  feedback.className = 'feedback';
  feedback.classList.remove('show', 'good', 'bad', 'warn');
  fbTitle.textContent = '';
  fbDetail.textContent = '';
}

function showFeedback(type, title, detail) {
  feedback.className = `feedback show ${type}`;
  fbTitle.textContent = title;
  fbDetail.textContent = detail;
}

function showFeedbackAfterReveal() {
  const i = state.currentIndex;
  const q = state.questions[i];
  const sel = state.selected[i];

  if (!sel) {
    showFeedback('warn', 'Select an option first', `Correct answer: ${q.answer}`);
    return;
  }

  const ok = sel === q.answer;
  showFeedback(ok ? 'good' : 'bad', ok ? 'Correct' : 'Wrong', `Your choice: ${sel} | Correct answer: ${q.answer}`);
}

function revealAnswer() {
  const i = state.currentIndex;

  if (state.revealed[i] === true) {
    showFeedbackAfterReveal();
    return;
  }

  state.revealed[i] = true;
  const sel = state.selected[i];
  state.isCorrect[i] = sel ? (sel === state.questions[i].answer) : null;

  showFeedbackAfterReveal();
  updateStats();
  updateNavGridStyles();
  qStatus.textContent = statusText(state.selected[i], state.revealed[i], state.isCorrect[i]);
}

function toggleReview() {
  const i = state.currentIndex;
  state.markedReview[i] = !state.markedReview[i];
  renderQuestion();
}

function clearSelection() {
  const i = state.currentIndex;
  state.selected[i] = null;

  if (state.revealed[i] === true) {
    state.isCorrect[i] = null;
  }

  renderQuestion();
}

function goTo(i) {
  state.currentIndex = clamp(i, 0, state.questions.length - 1);
  renderQuestion();
}

function next() {
  goTo(state.currentIndex + 1);
}

function prev() {
  goTo(state.currentIndex - 1);
}

function startSession() {
  if (!state.assessmentId) {
    alert('Please select an assessment before starting.');
    return;
  }

  stopTimers();
  state.started = true;
  state.totalSeconds = 0;
  state.currentIndex = 0;
  state.perQuestionSeconds = Array(state.questions.length).fill(0);
  state.selected = Array(state.questions.length).fill(null);
  state.revealed = Array(state.questions.length).fill(false);
  state.isCorrect = Array(state.questions.length).fill(null);
  state.markedReview = Array(state.questions.length).fill(false);

  setMainMode(true);
  const current = getCurrentAssessment();
  if (current) {
    mainTitle.textContent = current.name;
  }
  startScreen.style.display = 'none';
  questionScreen.style.display = '';

  renderNavGrid();
  renderQuestion();
  startTimers();
}

function endSession() {
  stopTimers();

  const unanswered = state.selected.filter((x) => !x).length;
  const answered = state.questions.length - unanswered;

  if (unanswered > 0) {
    const ok = confirm(`You answered ${answered}/${state.questions.length}. End now and see final report?`);
    if (!ok) {
      startTimers();
      return;
    }
  }

  finalizeEvaluation(state.questions, state);
  openSummary();
}

function openSummary() {
  const { ans, cor, wro, rev } = calcCounts(state.questions, state);
  sumTotal.textContent = String(state.questions.length);
  sumAnswered.textContent = String(ans);
  sumCorrect.textContent = String(cor);
  sumWrong.textContent = String(wro);
  sumReview.textContent = String(rev);
  sumTime.textContent = fmtTime(state.totalSeconds);

  const avg = ans ? (state.totalSeconds / ans) : 0;
  speedLine.textContent = `Average time per answered question: ${fmtTime(Math.round(avg))}`;

  const wrongIdxs = buildWrongIndexes(state.questions, state);
  wrongCountSummary.textContent = String(wrongIdxs.length);
  reviewWrongBtn.disabled = wrongIdxs.length === 0;

  summaryModal.classList.add('show');
  summaryModal.setAttribute('aria-hidden', 'false');
}

function closeSummary() {
  summaryModal.classList.remove('show');
  summaryModal.setAttribute('aria-hidden', 'true');
}

function openWrongReview() {
  wrongReviewState.wrongIndexes = buildWrongIndexes(state.questions, state);
  wrongReviewState.pos = 0;

  if (wrongReviewState.wrongIndexes.length === 0) {
    alert('No wrong answers to review.');
    return;
  }

  renderWrongReviewCard();
  wrongReviewModal.classList.add('show');
  wrongReviewModal.setAttribute('aria-hidden', 'false');
}

function closeWrongReview() {
  wrongReviewModal.classList.remove('show');
  wrongReviewModal.setAttribute('aria-hidden', 'true');
}

function renderWrongReviewCard() {
  const total = wrongReviewState.wrongIndexes.length;
  const pos = wrongReviewState.pos;

  const qIdx = wrongReviewState.wrongIndexes[pos];
  const q = state.questions[qIdx];
  const sel = state.selected[qIdx];
  const correct = q.answer;

  wrongPos.textContent = String(pos + 1);
  wrongTotal.textContent = String(total);

  const topic = q.topic || 'General';
  const diff = q.difficulty || 'Mixed';
  const selText = getOptText(q, sel);
  const corText = getOptText(q, correct);

  wrongCard.innerHTML = `
    <div class="top">
      <div class="qno">Q${qIdx + 1}</div>
      <div class="meta">${escapeHtml(topic)} | ${escapeHtml(diff)}</div>
    </div>
    <div class="qt">${escapeHtml(q.text)}</div>
    <div class="ans">
      Your answer: <strong>${escapeHtml(sel)}</strong> ${selText ? `(${escapeHtml(selText)})` : ''}<br/>
      Correct: <strong>${escapeHtml(correct)}</strong> ${corText ? `(${escapeHtml(corText)})` : ''}
    </div>
  `;

  prevWrongBtn.disabled = pos === 0;
  nextWrongBtn.disabled = pos === total - 1;
  gotoWrongBtn.dataset.jump = String(qIdx);
}

function openHelpModal() {
  helpModal.classList.add('show');
  helpModal.setAttribute('aria-hidden', 'false');
}

function closeHelpModal() {
  helpModal.classList.remove('show');
  helpModal.setAttribute('aria-hidden', 'true');
}

function jumpNextUnanswered() {
  for (let i = state.currentIndex + 1; i < state.questions.length; i++) {
    if (!state.selected[i]) {
      goTo(i);
      return;
    }
  }
  for (let i = 0; i <= state.currentIndex; i++) {
    if (!state.selected[i]) {
      goTo(i);
      return;
    }
  }
  showFeedback('good', 'All answered', 'You have selected an option for every question.');
}

function jumpNextReview() {
  for (let i = state.currentIndex + 1; i < state.questions.length; i++) {
    if (state.markedReview[i]) {
      goTo(i);
      return;
    }
  }
  for (let i = 0; i <= state.currentIndex; i++) {
    if (state.markedReview[i]) {
      goTo(i);
      return;
    }
  }
  showFeedback('warn', 'No review-marked question', 'Mark questions for review to use this jump.');
}

startBtn.addEventListener('click', startSession);
startBtn2.addEventListener('click', startSession);

resumeBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  questionScreen.style.display = '';
  startTimers();
  renderQuestion();
});

restartBtn.addEventListener('click', startSession);
restartBtn2.addEventListener('click', () => {
  closeSummary();
  startSession();
});

assessmentSelect.addEventListener('change', (e) => {
  selectAssessment(e.target.value);
});

showAnswerBtn.addEventListener('click', revealAnswer);
markReviewBtn.addEventListener('click', toggleReview);
clearBtn.addEventListener('click', clearSelection);

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
jumpFirstBtn.addEventListener('click', () => goTo(0));
jumpLastBtn.addEventListener('click', () => goTo(state.questions.length - 1));
endBtn.addEventListener('click', endSession);

toggleGridBtn.addEventListener('click', () => {
  gridWrap.style.display = (gridWrap.style.display === 'none') ? '' : 'none';
});

openSummaryBtn.addEventListener('click', openSummary);
closeSummaryBtn.addEventListener('click', closeSummary);
continueBtn.addEventListener('click', () => {
  closeSummary();
  startTimers();
});

openHelp.addEventListener('click', openHelpModal);
closeHelpBtn.addEventListener('click', closeHelpModal);

summaryModal.addEventListener('click', (e) => {
  if (e.target === summaryModal) closeSummary();
});

helpModal.addEventListener('click', (e) => {
  if (e.target === helpModal) closeHelpModal();
});

jumpUnansweredBtn.addEventListener('click', jumpNextUnanswered);
jumpReviewBtn.addEventListener('click', jumpNextReview);

document.addEventListener('keydown', (e) => {
  if (!state.started) return;
  if (summaryModal.classList.contains('show') || helpModal.classList.contains('show')) return;

  if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
  if (e.key.toLowerCase() === 's') { e.preventDefault(); revealAnswer(); }
  if (e.key.toLowerCase() === 'r') { e.preventDefault(); toggleReview(); }
  if (e.key.toLowerCase() === 'c') { e.preventDefault(); clearSelection(); }
  if (e.key.toLowerCase() === 'g') { e.preventDefault(); openSummary(); }
});

reviewWrongBtn.addEventListener('click', () => {
  closeSummary();
  openWrongReview();
});

closeWrongReviewBtn.addEventListener('click', closeWrongReview);

prevWrongBtn.addEventListener('click', () => {
  wrongReviewState.pos = Math.max(0, wrongReviewState.pos - 1);
  renderWrongReviewCard();
});

nextWrongBtn.addEventListener('click', () => {
  wrongReviewState.pos = Math.min(wrongReviewState.wrongIndexes.length - 1, wrongReviewState.pos + 1);
  renderWrongReviewCard();
});

gotoWrongBtn.addEventListener('click', () => {
  const idx = Number(gotoWrongBtn.dataset.jump || '0');
  closeWrongReview();
  goTo(idx);
  startTimers();
});

wrongReviewModal.addEventListener('click', (e) => {
  if (e.target === wrongReviewModal) closeWrongReview();
});

(function init() {
  try {
    validateAssessments(assessmentList);
    populateAssessmentSelect();
    setMainMode(false);
    renderNavGrid();
    updateStats();
    updateTimersUI();
  } catch (err) {
    console.error(err);
    alert(`Initialization failed: ${err.message}`);
  }
})();
