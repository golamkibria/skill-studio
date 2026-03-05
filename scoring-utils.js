function normalizeOptions(options) {
  if (Array.isArray(options)) {
    return options.map((opt) => ({ key: opt.key, text: opt.text }));
  }
  if (options && typeof options === "object") {
    return Object.keys(options)
      .sort()
      .map((key) => ({ key, text: options[key] }));
  }
  return [];
}

function statusText(selected, revealed, isCorrect) {
  if (!selected) return "Not answered";
  if (revealed !== true) return "Selected (not checked)";
  return isCorrect ? "Checked: Correct" : "Checked: Wrong";
}

function calcCounts(questions, state) {
  let ans = 0;
  let cor = 0;
  let wro = 0;
  let rev = 0;

  for (let i = 0; i < questions.length; i++) {
    if (state.selected[i]) ans++;
    if (state.revealed[i] === true) {
      if (state.isCorrect[i] === true) cor++;
      if (state.isCorrect[i] === false) wro++;
    }
    if (state.markedReview[i]) rev++;
  }

  return { ans, cor, wro, rev };
}

function buildWrongIndexes(questions, state) {
  const indexes = [];
  for (let i = 0; i < questions.length; i++) {
    if (!state.selected[i]) continue;
    if (state.isCorrect[i] === false) indexes.push(i);
  }
  return indexes;
}

function finalizeEvaluation(questions, state) {
  for (let i = 0; i < questions.length; i++) {
    const sel = state.selected[i];
    if (!sel) continue;

    state.isCorrect[i] = sel === questions[i].answer;
    state.revealed[i] = true;
  }
}

window.normalizeOptions = normalizeOptions;
window.statusText = statusText;
window.calcCounts = calcCounts;
window.buildWrongIndexes = buildWrongIndexes;
window.finalizeEvaluation = finalizeEvaluation;
