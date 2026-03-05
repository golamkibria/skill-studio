const assessmentList = Array.isArray(window.assessments) ? window.assessments : [];
const SESSION_STORAGE_KEY = 'skillStudio.activeSession.v1';

const state = {
  started: false,
  assessmentId: null,
  questions: [],
  settings: {
    shuffleOptions: false,
    useTimedAssessment: false,
    timedMinutes: 0,
    showAnswerDuringAssessment: true
  },
  isPaused: false,
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
const restartBtn = el('restartBtn');
const restartBtn2 = el('restartBtn2');
const backToAssessmentsBtn = el('backToAssessmentsBtn');

const startScreen = el('startScreen');
const questionScreen = el('questionScreen');
const assessmentSelect = el('assessmentSelect');
const assessmentInfo = el('assessmentInfo');
const shuffleOptionsToggle = el('shuffleOptionsToggle');
const showAnswerToggle = el('showAnswerToggle');
const useTimedToggle = el('useTimedToggle');
const timedMinutesRow = el('timedMinutesRow');
const timedMinutesInput = el('timedMinutesInput');

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
const pauseBtn = el('pauseBtn');
const endBtn = el('endBtn');

const navGrid = el('navGrid');
const answeredCount = el('answeredCount');
const correctCount = el('correctCount');
const wrongCount = el('wrongCount');
const reviewCount = el('reviewCount');

const totalTime = el('totalTime');
const qTime = el('qTime');
const timeLeftPill = el('timeLeftPill');
const timeLeft = el('timeLeft');

const toggleGridBtn = el('toggleGridBtn');
const gridWrap = el('gridWrap');
const openFilterDrawerBtn = el('openFilterDrawerBtn');
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

const filterDrawerModal = el('filterDrawerModal');
const closeFilterDrawerBtn = el('closeFilterDrawerBtn');
const filterUnansweredBtn = el('filterUnansweredBtn');
const filterMarkedBtn = el('filterMarkedBtn');
const filterWrongBtn = el('filterWrongBtn');
const filterTopicBtn = el('filterTopicBtn');
const filterTopicRow = el('filterTopicRow');
const filterTopicSelect = el('filterTopicSelect');
const filterHint = el('filterHint');
const filterSummary = el('filterSummary');
const filterResults = el('filterResults');

const wrongReviewState = {
  wrongIndexes: [],
  pos: 0
};

const filterDrawerState = {
  mode: 'unanswered',
  topic: 'all'
};

function clearSavedSession() {
  try {
    localStorage.removeItem(SESSION_STORAGE_KEY);
  } catch (err) {
    console.warn('Unable to clear saved session:', err);
  }
}

function saveSessionState() {
  if (!state.started) {
    clearSavedSession();
    return;
  }

  const payload = {
    started: state.started,
    assessmentId: state.assessmentId,
    shuffleOptions: state.settings.shuffleOptions,
    useTimedAssessment: state.settings.useTimedAssessment,
    timedMinutes: state.settings.timedMinutes,
    showAnswerDuringAssessment: state.settings.showAnswerDuringAssessment,
    isPaused: state.isPaused,
    sessionQuestions: state.questions,
    totalSeconds: state.totalSeconds,
    currentIndex: state.currentIndex,
    perQuestionSeconds: state.perQuestionSeconds,
    selected: state.selected,
    revealed: state.revealed,
    isCorrect: state.isCorrect,
    markedReview: state.markedReview
  };

  try {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.warn('Unable to save session:', err);
  }
}

function restoreSessionState() {
  let raw = null;
  try {
    raw = localStorage.getItem(SESSION_STORAGE_KEY);
  } catch (err) {
    console.warn('Unable to read saved session:', err);
    return false;
  }

  if (!raw) return false;

  let parsed = null;
  try {
    parsed = JSON.parse(raw);
  } catch {
    clearSavedSession();
    return false;
  }

  if (!parsed || parsed.started !== true || typeof parsed.assessmentId !== 'string') {
    clearSavedSession();
    return false;
  }

  const assessment = assessmentList.find((item) => item.id === parsed.assessmentId);
  if (!assessment) {
    clearSavedSession();
    return false;
  }

  const total = assessment.questions.length;
  if (!Array.isArray(parsed.sessionQuestions) || parsed.sessionQuestions.length !== total) {
    clearSavedSession();
    return false;
  }
  try {
    validateQuestions(parsed.sessionQuestions);
  } catch {
    clearSavedSession();
    return false;
  }

  const requiredArrays = ['perQuestionSeconds', 'selected', 'revealed', 'isCorrect', 'markedReview'];
  const hasValidArrays = requiredArrays.every((key) => Array.isArray(parsed[key]) && parsed[key].length === total);
  if (!hasValidArrays) {
    clearSavedSession();
    return false;
  }

  selectAssessment(assessment.id);
  assessmentSelect.value = assessment.id;

  state.started = true;
  state.settings.shuffleOptions = parsed.shuffleOptions === true;
  state.settings.showAnswerDuringAssessment = parsed.showAnswerDuringAssessment !== false;
  state.isPaused = parsed.isPaused === true;
  const restoredTimedMinutes = Number(parsed.timedMinutes);
  const hasValidTimedMinutes = Number.isFinite(restoredTimedMinutes) && restoredTimedMinutes > 0;
  state.settings.useTimedAssessment = parsed.useTimedAssessment === true || (parsed.useTimedAssessment === undefined && hasValidTimedMinutes);
  state.settings.timedMinutes = Number.isFinite(restoredTimedMinutes) && restoredTimedMinutes > 0
    ? Math.floor(restoredTimedMinutes)
    : 0;
  if (shuffleOptionsToggle) {
    shuffleOptionsToggle.checked = state.settings.shuffleOptions;
  }
  if (showAnswerToggle) {
    showAnswerToggle.checked = state.settings.showAnswerDuringAssessment;
  }
  if (useTimedToggle) {
    useTimedToggle.checked = state.settings.useTimedAssessment;
  }
  if (timedMinutesInput) {
    timedMinutesInput.value = state.settings.timedMinutes > 0 ? String(state.settings.timedMinutes) : '';
  }
  updateTimedSettingUI();
  state.questions = parsed.sessionQuestions.map((q) => ({
    ...q,
    options: normalizeOptions(q.options).map((opt) => ({ key: opt.key, text: opt.text }))
  }));
  state.totalSeconds = Number.isFinite(parsed.totalSeconds) ? Math.max(0, Math.floor(parsed.totalSeconds)) : 0;
  state.currentIndex = clamp(Number.isFinite(parsed.currentIndex) ? parsed.currentIndex : 0, 0, total - 1);
  state.perQuestionSeconds = parsed.perQuestionSeconds.slice();
  state.selected = parsed.selected.slice();
  state.revealed = parsed.revealed.slice();
  state.isCorrect = parsed.isCorrect.slice();
  state.markedReview = parsed.markedReview.slice();

  return true;
}

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

function optionLabelByIndex(index) {
  const code = 65 + index; // A=65
  return code <= 90 ? String.fromCharCode(code) : String(index + 1);
}

function shuffleArray(items) {
  const arr = items.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildSessionQuestions(sourceQuestions, shuffleOptionsEnabled) {
  return sourceQuestions.map((q) => {
    // Keep option keys (A/B/C/...) unchanged so answer matching remains key-based after shuffle.
    const options = normalizeOptions(q.options).map((opt) => ({ key: opt.key, text: opt.text }));
    return {
      ...q,
      options: shuffleOptionsEnabled ? shuffleArray(options) : options
    };
  });
}

function getTimedLimitSeconds() {
  if (!state.settings.useTimedAssessment) return 0;
  return state.settings.timedMinutes > 0 ? state.settings.timedMinutes * 60 : 0;
}

function getRemainingSeconds() {
  const limit = getTimedLimitSeconds();
  if (limit <= 0) return null;
  return Math.max(0, limit - state.totalSeconds);
}

function isTimedExpired() {
  const limit = getTimedLimitSeconds();
  return limit > 0 && state.totalSeconds >= limit;
}

function readTimedMinutesInput() {
  if (useTimedToggle && !useTimedToggle.checked) return 0;
  if (!timedMinutesInput) return 0;
  const raw = timedMinutesInput.value.trim();
  if (!raw) return 0;

  const parsed = Number(raw);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return null;
  }

  return Math.floor(parsed);
}

function updateTimedSettingUI() {
  const useTimed = useTimedToggle ? useTimedToggle.checked : false;
  if (timedMinutesRow) {
    timedMinutesRow.style.display = useTimed ? '' : 'none';
  }
  if (!timedMinutesInput) return;
  timedMinutesInput.disabled = !useTimed;
  timedMinutesInput.placeholder = useTimed ? 'Enter minutes' : 'Untimed mode';
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
  const defaultTimedMinutes = Number.isFinite(current.timedMinutes) && current.timedMinutes > 0
    ? Math.floor(current.timedMinutes)
    : 0;
  assessmentInfo.textContent = `${current.description || 'No description'} | ${current.questions.length} questions | Tags: ${tags} | Default timer: ${defaultTimedMinutes > 0 ? `${defaultTimedMinutes} min` : 'Off'}`;

  if (!state.started && timedMinutesInput) {
    if (useTimedToggle) {
      useTimedToggle.checked = defaultTimedMinutes > 0;
    }
    timedMinutesInput.value = defaultTimedMinutes > 0 ? String(defaultTimedMinutes) : '';
    updateTimedSettingUI();
  }
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

function getDisplayLabelForKey(q, key) {
  if (!key) return '';
  const options = normalizeOptions(q.options);
  const idx = options.findIndex((opt) => opt.key === key);
  if (idx < 0) return key;
  return optionLabelByIndex(idx);
}

function updateShowAnswerAvailability() {
  const enabled = state.settings.showAnswerDuringAssessment === true && !state.isPaused;
  showAnswerBtn.style.display = enabled ? '' : 'none';
}

function updatePauseUI() {
  const paused = state.isPaused === true;
  pauseBtn.textContent = paused ? 'Resume' : 'Pause';
  markReviewBtn.disabled = paused;
  clearBtn.disabled = paused;
  jumpFirstBtn.disabled = paused;
  jumpLastBtn.disabled = paused;
  jumpUnansweredBtn.disabled = paused;
  jumpReviewBtn.disabled = paused;
  openFilterDrawerBtn.disabled = paused;
}

function setPaused(paused) {
  if (!state.started) return;

  state.isPaused = paused === true;
  updatePauseUI();
  updateShowAnswerAvailability();

  if (state.isPaused) {
    stopTimers();
    showFeedback('warn', 'Assessment paused', 'Timer is paused. Click Resume to continue.');
  } else {
    hideFeedback();
    if (!summaryModal.classList.contains('show') && !wrongReviewModal.classList.contains('show')) {
      startTimers();
    }
  }

  saveSessionState();
}

function updateStats() {
  const { ans, cor, wro, rev } = calcCounts(state.questions, state);
  answeredCount.textContent = ans;
  correctCount.textContent = cor;
  wrongCount.textContent = wro;
  reviewCount.textContent = rev;
}

function updateEndButtonLabel() {
  if (!state.started || !state.questions.length) {
    endBtn.textContent = 'End Assessment';
    return;
  }

  const unanswered = state.selected.filter((x) => !x).length;
  endBtn.textContent = unanswered > 0 ? 'End Assessment' : 'Finish & View Report';
}

function updateTimersUI() {
  totalTime.textContent = fmtTime(state.totalSeconds);
  const idx = state.currentIndex;
  const qSecs = state.perQuestionSeconds[idx] || 0;
  qTime.textContent = fmtTime(qSecs);

  const remaining = getRemainingSeconds();
  if (remaining === null) {
    timeLeftPill.style.display = 'none';
    timeLeft.textContent = '00:00';
    return;
  }

  timeLeftPill.style.display = '';
  timeLeft.textContent = fmtTime(remaining);
}

function stopTimers() {
  if (state.timers.total) clearInterval(state.timers.total);
  if (state.timers.perQ) clearInterval(state.timers.perQ);
  state.timers.total = null;
  state.timers.perQ = null;
}

function endSessionDueToTime() {
  if (!isTimedExpired()) return;

  stopTimers();
  state.isPaused = false;
  updatePauseUI();
  state.totalSeconds = getTimedLimitSeconds();
  finalizeEvaluation(state.questions, state);
  openSummary();
  saveSessionState();
  alert('Time is up. Assessment ended and the report is now available.');
}

function startTimers() {
  stopTimers();
  if (state.isPaused) return;

  if (isTimedExpired()) {
    endSessionDueToTime();
    return;
  }

  state.timers.total = setInterval(() => {
    state.totalSeconds++;

    if (isTimedExpired()) {
      endSessionDueToTime();
      return;
    }

    updateTimersUI();
    if (state.totalSeconds % 10 === 0) {
      saveSessionState();
    }
  }, 1000);

  state.timers.perQ = setInterval(() => {
    const idx = state.currentIndex;
    state.perQuestionSeconds[idx] = (state.perQuestionSeconds[idx] || 0) + 1;
    updateTimersUI();
  }, 1000);
}

function setMainMode(started) {
  if (!started) {
    modeLabel.textContent = 'Skill Studio';
    mainTitle.textContent = 'Start your assessment';
    startBtn.style.display = '';
    startBtn2.style.display = '';
    restartBtn.style.display = 'none';
    backToAssessmentsBtn.style.display = 'none';
    pauseBtn.style.display = 'none';
    showAnswerBtn.style.display = '';
    return;
  }

  modeLabel.textContent = 'Skill Studio (Active)';
  mainTitle.textContent = 'Answer one question at a time';
  startBtn.style.display = 'none';
  startBtn2.style.display = 'none';
  restartBtn.style.display = '';
  backToAssessmentsBtn.style.display = '';
  pauseBtn.style.display = '';
  updateShowAnswerAvailability();
  updatePauseUI();
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
  optsArray.forEach((opt, optIndex) => {
    const card = document.createElement('div');
    card.className = 'opt';
    if (state.selected[i] === opt.key) card.classList.add('selected');

    const radio = document.createElement('div');
    radio.className = 'radio';
    radio.setAttribute('aria-hidden', 'true');

    const label = document.createElement('div');
    label.className = 'lbl';

    const strong = document.createElement('strong');
    strong.textContent = `${optionLabelByIndex(optIndex)}. `;

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

  prevBtn.disabled = state.isPaused || i === 0;
  nextBtn.disabled = state.isPaused || i === state.questions.length - 1;
  markReviewBtn.textContent = state.markedReview[i] ? 'Unmark Review' : 'Mark for Review';

  noteArea.textContent = [
    `Topic: ${q.topic || 'General'}`,
    `Difficulty: ${q.difficulty || 'Mixed'}`,
    `Time spent on this question: ${fmtTime(state.perQuestionSeconds[i] || 0)}`
  ].join(' | ');

  updateStats();
  updateEndButtonLabel();
  updateTimersUI();
  updateNavGridStyles();
  updateShowAnswerAvailability();
  updatePauseUI();
  saveSessionState();
}

function selectOption(key) {
  if (state.isPaused) return;
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
  const correctKey = q.answer;
  const correctLabel = getDisplayLabelForKey(q, correctKey);
  const correctText = getOptText(q, correctKey);

  if (!sel) {
    showFeedback(
      'warn',
      'Select an option first',
      `Correct answer: ${correctLabel}${correctText ? ` (${correctText})` : ''}`
    );
    return;
  }

  const selectedLabel = getDisplayLabelForKey(q, sel);
  const selectedText = getOptText(q, sel);
  const ok = sel === correctKey;
  showFeedback(
    ok ? 'good' : 'bad',
    ok ? 'Correct' : 'Wrong',
    `Your choice: ${selectedLabel}${selectedText ? ` (${selectedText})` : ''} | Correct answer: ${correctLabel}${correctText ? ` (${correctText})` : ''}`
  );
}

function revealAnswer() {
  if (state.isPaused) {
    showFeedback('warn', 'Assessment paused', 'Resume the assessment to continue.');
    return;
  }
  if (!state.settings.showAnswerDuringAssessment) {
    showFeedback('warn', 'Show Answer disabled', 'Answers will be available after ending the assessment.');
    return;
  }

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
  if (state.isPaused) return;
  const i = state.currentIndex;
  state.markedReview[i] = !state.markedReview[i];
  renderQuestion();
}

function clearSelection() {
  if (state.isPaused) return;
  const i = state.currentIndex;
  state.selected[i] = null;

  if (state.revealed[i] === true) {
    state.isCorrect[i] = null;
  }

  renderQuestion();
}

function goTo(i) {
  if (state.isPaused) return;
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

  const current = getCurrentAssessment();
  if (!current) {
    alert('Selected assessment not found.');
    return;
  }

  stopTimers();
  const timedMinutes = readTimedMinutesInput();
  if (timedMinutes === null) {
    alert('Please enter a valid timed assessment duration in minutes (positive whole number), or leave it blank.');
    return;
  }

  state.settings.shuffleOptions = shuffleOptionsToggle.checked;
  state.settings.showAnswerDuringAssessment = showAnswerToggle ? showAnswerToggle.checked : true;
  state.settings.useTimedAssessment = useTimedToggle ? useTimedToggle.checked : false;
  state.settings.timedMinutes = timedMinutes;
  state.isPaused = false;
  if (showAnswerToggle) {
    showAnswerToggle.checked = state.settings.showAnswerDuringAssessment;
  }
  if (timedMinutesInput) {
    timedMinutesInput.value = timedMinutes > 0 ? String(timedMinutes) : '';
  }
  if (useTimedToggle) {
    useTimedToggle.checked = state.settings.useTimedAssessment;
  }
  updateTimedSettingUI();
  state.questions = buildSessionQuestions(current.questions, state.settings.shuffleOptions);
  state.started = true;
  state.totalSeconds = 0;
  state.currentIndex = 0;
  state.perQuestionSeconds = Array(state.questions.length).fill(0);
  state.selected = Array(state.questions.length).fill(null);
  state.revealed = Array(state.questions.length).fill(false);
  state.isCorrect = Array(state.questions.length).fill(null);
  state.markedReview = Array(state.questions.length).fill(false);

  setMainMode(true);
  if (current) {
    mainTitle.textContent = current.name;
  }
  startScreen.style.display = 'none';
  questionScreen.style.display = '';

  renderNavGrid();
  renderQuestion();
  startTimers();
}

function backToAssessmentSelection() {
  if (!state.started) return;

  const confirmed = confirm('Return to assessment selection? Your current progress will be cleared.');
  if (!confirmed) return;

  stopTimers();
  clearSavedSession();

  state.started = false;
  state.settings.timedMinutes = 0;
  state.settings.useTimedAssessment = false;
  state.settings.showAnswerDuringAssessment = true;
  state.isPaused = false;
  state.totalSeconds = 0;
  state.currentIndex = 0;
  state.questions = getCurrentAssessment()?.questions || [];
  state.perQuestionSeconds = [];
  state.selected = [];
  state.revealed = [];
  state.isCorrect = [];
  state.markedReview = [];

  setMainMode(false);
  startScreen.style.display = '';
  questionScreen.style.display = 'none';
  updateStats();
  updateTimersUI();
  updateEndButtonLabel();
  hideFeedback();
  if (showAnswerToggle) {
    showAnswerToggle.checked = true;
  }
  if (useTimedToggle) {
    useTimedToggle.checked = false;
  }
  updateTimedSettingUI();
  updatePauseUI();
  updateShowAnswerAvailability();
  updateAssessmentInfo();
  renderNavGrid();
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
  saveSessionState();
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
  const timedExpired = isTimedExpired();
  continueBtn.disabled = timedExpired;
  continueBtn.textContent = timedExpired ? 'Time Expired' : 'Resume Assessment';

  summaryModal.classList.add('show');
  summaryModal.setAttribute('aria-hidden', 'false');
}

function closeSummary(force = false) {
  if (!force && isTimedExpired()) return;
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
  const selLabel = getDisplayLabelForKey(q, sel);
  const corLabel = getDisplayLabelForKey(q, correct);

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
      Your answer: <strong>${escapeHtml(selLabel)}</strong> ${selText ? `(${escapeHtml(selText)})` : ''}<br/>
      Correct: <strong>${escapeHtml(corLabel)}</strong> ${corText ? `(${escapeHtml(corText)})` : ''}
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

function getFilteredIndexes() {
  const indexes = [];
  for (let i = 0; i < state.questions.length; i++) {
    const q = state.questions[i];
    const isUnanswered = !state.selected[i];
    const isMarked = state.markedReview[i] === true;
    const isWrong = state.selected[i] && state.isCorrect[i] === false;
    const topic = q.topic || 'General';

    if (filterDrawerState.mode === 'unanswered' && isUnanswered) indexes.push(i);
    if (filterDrawerState.mode === 'marked' && isMarked) indexes.push(i);
    if (filterDrawerState.mode === 'wrong' && isWrong) indexes.push(i);
    if (filterDrawerState.mode === 'topic' && (filterDrawerState.topic === 'all' || filterDrawerState.topic === topic)) {
      indexes.push(i);
    }
  }
  return indexes;
}

function refreshFilterTopics() {
  const topics = [...new Set(state.questions.map((q) => q.topic || 'General'))].sort((a, b) => a.localeCompare(b));
  filterTopicSelect.innerHTML = '';

  const allOpt = document.createElement('option');
  allOpt.value = 'all';
  allOpt.textContent = 'All Topics';
  filterTopicSelect.appendChild(allOpt);

  topics.forEach((topic) => {
    const opt = document.createElement('option');
    opt.value = topic;
    opt.textContent = topic;
    filterTopicSelect.appendChild(opt);
  });

  if (!topics.includes(filterDrawerState.topic)) {
    filterDrawerState.topic = 'all';
  }
  filterTopicSelect.value = filterDrawerState.topic;
}

function setFilterMode(mode) {
  filterDrawerState.mode = mode;
  filterUnansweredBtn.classList.toggle('active', mode === 'unanswered');
  filterMarkedBtn.classList.toggle('active', mode === 'marked');
  filterWrongBtn.classList.toggle('active', mode === 'wrong');
  filterTopicBtn.classList.toggle('active', mode === 'topic');
  filterTopicRow.style.display = mode === 'topic' ? '' : 'none';
  if (mode === 'wrong') {
    filterHint.style.display = '';
    filterHint.textContent = 'Wrong questions appear after Show Answer, or after final evaluation when assessment ends.';
  } else {
    filterHint.style.display = 'none';
    filterHint.textContent = '';
  }
  renderFilterResults();
}

function updateFilterControlsVisibility() {
  const hasEvaluatedAnswers = state.revealed.some((x) => x === true);
  const showWrongFilter = state.settings.showAnswerDuringAssessment || hasEvaluatedAnswers;
  filterWrongBtn.style.display = showWrongFilter ? '' : 'none';

  if (!showWrongFilter && filterDrawerState.mode === 'wrong') {
    filterDrawerState.mode = 'unanswered';
  }
}

function renderFilterResults() {
  const indexes = getFilteredIndexes();
  const labelMap = {
    unanswered: 'Unanswered',
    marked: 'Marked',
    wrong: 'Wrong',
    topic: 'Topic'
  };
  const modeLabel = labelMap[filterDrawerState.mode] || 'Filter';
  filterSummary.textContent = `${modeLabel}: ${indexes.length} question(s)`;

  filterResults.innerHTML = '';
  if (!indexes.length) {
    const empty = document.createElement('div');
    empty.className = 'small';
    empty.textContent = 'No questions match this filter.';
    filterResults.appendChild(empty);
    return;
  }

  indexes.forEach((idx) => {
    const q = state.questions[idx];
    const item = document.createElement('div');
    item.className = 'filterItem';
    const status = statusText(state.selected[idx], state.revealed[idx], state.isCorrect[idx]);
    const topic = q.topic || 'General';
    const questionPreview = q.text.length > 110 ? `${q.text.slice(0, 107)}...` : q.text;

    item.innerHTML = `
      <div class="top">
        <div class="q">Q${idx + 1}</div>
        <div class="meta">${escapeHtml(topic)}</div>
      </div>
      <div class="meta">${escapeHtml(status)}</div>
      <div class="preview">${escapeHtml(questionPreview)}</div>
    `;

    item.addEventListener('click', () => {
      if (state.isPaused) {
        showFeedback('warn', 'Assessment paused', 'Resume the assessment to navigate.');
        return;
      }
      closeFilterDrawer();
      goTo(idx);
    });
    filterResults.appendChild(item);
  });
}

function openFilterDrawer() {
  if (!state.started) return;
  updateFilterControlsVisibility();
  refreshFilterTopics();
  setFilterMode(filterDrawerState.mode);
  filterDrawerModal.classList.add('show');
  filterDrawerModal.setAttribute('aria-hidden', 'false');
}

function closeFilterDrawer() {
  filterDrawerModal.classList.remove('show');
  filterDrawerModal.setAttribute('aria-hidden', 'true');
}

function jumpNextUnanswered() {
  if (state.isPaused) return;
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
  if (state.isPaused) return;
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

restartBtn.addEventListener('click', startSession);
restartBtn2.addEventListener('click', () => {
  closeSummary(true);
  startSession();
});
pauseBtn.addEventListener('click', () => {
  setPaused(!state.isPaused);
});
backToAssessmentsBtn.addEventListener('click', backToAssessmentSelection);

assessmentSelect.addEventListener('change', (e) => {
  selectAssessment(e.target.value);
  if (!state.started) {
    renderNavGrid();
    updateEndButtonLabel();
  }
});
useTimedToggle?.addEventListener('change', () => {
  updateTimedSettingUI();
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

openFilterDrawerBtn.addEventListener('click', openFilterDrawer);
closeFilterDrawerBtn.addEventListener('click', closeFilterDrawer);
filterUnansweredBtn.addEventListener('click', () => setFilterMode('unanswered'));
filterMarkedBtn.addEventListener('click', () => setFilterMode('marked'));
filterWrongBtn.addEventListener('click', () => setFilterMode('wrong'));
filterTopicBtn.addEventListener('click', () => setFilterMode('topic'));
filterTopicSelect.addEventListener('change', (e) => {
  filterDrawerState.topic = e.target.value;
  renderFilterResults();
});

openSummaryBtn.addEventListener('click', openSummary);
closeSummaryBtn.addEventListener('click', closeSummary);
continueBtn.addEventListener('click', () => {
  if (isTimedExpired()) return;
  state.isPaused = false;
  updatePauseUI();
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

filterDrawerModal.addEventListener('click', (e) => {
  if (e.target === filterDrawerModal) closeFilterDrawer();
});

jumpUnansweredBtn.addEventListener('click', jumpNextUnanswered);
jumpReviewBtn.addEventListener('click', jumpNextReview);

document.addEventListener('keydown', (e) => {
  if (!state.started) return;
  if (e.key === 'Escape' && filterDrawerModal.classList.contains('show')) {
    e.preventDefault();
    closeFilterDrawer();
    return;
  }
  if (summaryModal.classList.contains('show') || helpModal.classList.contains('show') || wrongReviewModal.classList.contains('show') || filterDrawerModal.classList.contains('show')) return;

  if (e.key.toLowerCase() === 'p') { e.preventDefault(); setPaused(!state.isPaused); return; }
  if (state.isPaused) return;

  if (e.key.toLowerCase() === 'f') { e.preventDefault(); openFilterDrawer(); return; }
  if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
  if (e.key.toLowerCase() === 's' && state.settings.showAnswerDuringAssessment) { e.preventDefault(); revealAnswer(); }
  if (e.key.toLowerCase() === 'r') { e.preventDefault(); toggleReview(); }
  if (e.key.toLowerCase() === 'c') { e.preventDefault(); clearSelection(); }
  if (e.key.toLowerCase() === 'g') { e.preventDefault(); openSummary(); }
});

window.addEventListener('beforeunload', (e) => {
  if (!state.started) return;

  // Trigger browser-native confirmation to prevent accidental refresh/tab close.
  e.preventDefault();
  e.returnValue = '';
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
    if (shuffleOptionsToggle) {
      shuffleOptionsToggle.checked = false;
    }
    if (showAnswerToggle) {
      showAnswerToggle.checked = true;
    }
    if (useTimedToggle) {
      useTimedToggle.checked = false;
      updateTimedSettingUI();
    }
    const restored = restoreSessionState();

    if (restored) {
      setMainMode(true);
      const current = getCurrentAssessment();
      if (current) {
        mainTitle.textContent = current.name;
      }
      startScreen.style.display = 'none';
      questionScreen.style.display = '';
      renderNavGrid();
      renderQuestion();
      if (!state.isPaused) {
        startTimers();
      } else {
        updatePauseUI();
        showFeedback('warn', 'Assessment paused', 'Resume to continue from your saved state.');
      }
    } else {
      setMainMode(false);
      renderNavGrid();
      updateStats();
      updateTimersUI();
      updateEndButtonLabel();
    }
  } catch (err) {
    console.error(err);
    alert(`Initialization failed: ${err.message}`);
  }
})();
