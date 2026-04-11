// quiz.js
// Upload → quiz → results.
//
// MC:  click an option → immediate reveal, Next → unlocks
// SA:  write answer → "Reveal Answer" → sample answer + mark buttons appear
//      → pick mark → Next → unlocks

'use strict';

let questions  = [];
let current    = 0;
let answered   = false;   // true after MC option clicked OR SA answer revealed
let selfMarked = false;   // true after SA mark selected
let answers    = [];


// --- History (localStorage) ---

const HISTORY_KEY = 'nkquiz_history';
const HISTORY_MAX = 10;

let activeHistoryId = null;

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); }
  catch (_) { return []; }
}

function saveHistory(entries) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(entries));
}

function contentHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(31, h) + str.charCodeAt(i) | 0;
  }
  return h.toString(36);
}

function saveQuizToHistory(content, name) {
  const id = contentHash(content);
  activeHistoryId = id;
  const history = loadHistory();
  const idx = history.findIndex(e => e.id === id);

  if (idx !== -1) {
    const existing = history.splice(idx, 1)[0];
    existing.lastPlayed = new Date().toISOString();
    existing.playCount++;
    history.unshift(existing);
  } else {
    history.unshift({
      id, name, content,
      savedAt:    new Date().toISOString(),
      lastPlayed: new Date().toISOString(),
      playCount:  1,
      lastScore:  null,
    });
    if (history.length > HISTORY_MAX) history.length = HISTORY_MAX;
  }

  saveHistory(history);
}

function updateHistoryScore(earned, total, pct, gradeText) {
  if (!activeHistoryId) return;
  const history = loadHistory();
  const entry = history.find(e => e.id === activeHistoryId);
  if (entry) {
    entry.lastScore = { earned, total, pct, grade: gradeText };
    saveHistory(history);
  }
  renderHistorySection();
}

function removeFromHistory(id) {
  saveHistory(loadHistory().filter(e => e.id !== id));
  renderHistorySection();
}

function loadQuizFromHistory(entry) {
  mdInput.value           = entry.content;
  chromeTitle.textContent = entry.name;
  uploadZone.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function historyDate(iso) {
  const d    = new Date(iso);
  const diff = Date.now() - d;
  if (diff < 60000)    return 'just now';
  if (diff < 3600000)  return `${Math.floor(diff / 60000)}m ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
  if (diff < 604800000) return `${Math.floor(diff / 86400000)}d ago`;
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function renderHistorySection() {
  const section = document.getElementById('history-section');
  const list    = document.getElementById('history-list');
  const history = loadHistory();

  if (history.length === 0) { section.hidden = true; return; }
  section.hidden = false;
  list.innerHTML = '';

  history.forEach(entry => {
    const row = document.createElement('div');
    row.className = 'history-row';

    const scorePart = entry.lastScore
      ? `${entry.lastScore.earned}/${entry.lastScore.total} &nbsp;·&nbsp; ${escapeHTML(entry.lastScore.grade)}`
      : '<span class="history-unseen">not yet completed</span>';
    const plays = entry.playCount === 1 ? '1 play' : `${entry.playCount} plays`;

    row.innerHTML = `
      <div class="history-main">
        <span class="history-name">${escapeHTML(entry.name)}</span>
        <span class="history-meta">${scorePart} &nbsp;·&nbsp; ${historyDate(entry.lastPlayed)} &nbsp;·&nbsp; ${escapeHTML(plays)}</span>
      </div>
      <button class="history-remove" title="Remove from history">×</button>
    `;

    row.querySelector('.history-main').addEventListener('click', () => loadQuizFromHistory(entry));
    row.querySelector('.history-remove').addEventListener('click', (e) => {
      e.stopPropagation();
      removeFromHistory(entry.id);
    });

    list.appendChild(row);
  });
}

// Upload
const uploadScreen  = document.getElementById('upload-screen');
const fileInput     = document.getElementById('file-input');
const mdInput       = document.getElementById('md-input');
const startBtn      = document.getElementById('start-btn');
const shuffleToggle = document.getElementById('shuffle-toggle');
const shuffleLabel  = document.getElementById('shuffle-label');
const parseError    = document.getElementById('parse-error');
const uploadZone    = document.getElementById('upload-zone');

shuffleToggle.addEventListener('change', () => {
  shuffleLabel.classList.toggle('active', shuffleToggle.checked);
});

// Chrome
const chromeTitle   = document.getElementById('chrome-title');
const chromeCounter = document.getElementById('chrome-counter');

// Quiz
const quizScreen      = document.getElementById('quiz-screen');
const questionSection = document.getElementById('question-section');
const questionCounter = document.getElementById('question-counter');
const scoreTracker    = document.getElementById('score-tracker');
const progressFill    = document.getElementById('progress-fill');
const ghostNumber     = document.getElementById('ghost-number');
const qTypeTag        = document.getElementById('q-type-tag');
const questionText    = document.getElementById('question-text');
const mcOptions       = document.getElementById('mc-options');
const saInputArea     = document.getElementById('sa-input-area');
const saInput         = document.getElementById('sa-input');
const feedbackArea    = document.getElementById('feedback-area');
const feedbackMsg     = document.getElementById('feedback-msg');
const feedbackText    = document.getElementById('feedback-text');
const saMarkArea      = document.getElementById('sa-mark-area');
const saMarkButtons   = document.getElementById('sa-mark-buttons');
const nextBtn         = document.getElementById('next-btn');

// Results
const resultsScreen = document.getElementById('results-screen');
const resultsScore  = document.getElementById('results-score');
const gradeBadge    = document.getElementById('grade-badge');
const resultsReview = document.getElementById('results-review');
const restartBtn    = document.getElementById('restart-btn');
const newQuizBtn    = document.getElementById('new-quiz-btn');


// --- Upload ---

uploadZone.addEventListener('dragover', (e) => { e.preventDefault(); uploadZone.classList.add('drag-over'); });
uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('drag-over'));
uploadZone.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadZone.classList.remove('drag-over');
  loadFile(e.dataTransfer.files[0]);
});
fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

function loadFile(file) {
  if (!file) return;
  chromeTitle.textContent = file.name;
  const reader = new FileReader();
  reader.onload = (ev) => { mdInput.value = ev.target.result; };
  reader.readAsText(file);
}

startBtn.addEventListener('click', () => {
  const content = mdInput.value.trim();
  if (!content) { showError('Please paste or upload a quiz file first.'); return; }

  try {
    const { questions: parsed, bankSize } = parseQuizFile(content);

    let pool = bankSize !== null
      ? shuffleArray([...parsed]).slice(0, bankSize)
      : [...parsed];

    if (shuffleToggle.checked) pool = shuffleArray(pool);

    questions  = pool;
    current    = 0;
    answered   = false;
    selfMarked = false;
    answers    = [];
    parseError.hidden = true;

    const quizName = (chromeTitle.textContent && chromeTitle.textContent !== 'nkquiz')
      ? chromeTitle.textContent
      : 'Pasted quiz';
    saveQuizToHistory(content, quizName);

    showScreen('quiz');
    renderQuestion();
  } catch (err) {
    showError(err.message);
  }
});


// --- MC: click option to reveal ---

function handleOptionClick(btn) {
  if (answered) return;

  const q             = questions[current];
  const selectedLabel = btn.dataset.label;
  const correctOption = q.options.find(o => o.isCorrect);
  const isCorrect     = selectedLabel === correctOption.label;

  mcOptions.querySelectorAll('.option').forEach(b => {
    const opt = q.options.find(o => o.label === b.dataset.label);
    if (opt.isCorrect) {
      b.dataset.state = 'correct';
      b.querySelector('.opt-key').textContent = '✓';
    } else if (b.dataset.label === selectedLabel && !isCorrect) {
      b.dataset.state = 'wrong';
      b.querySelector('.opt-key').textContent = '✗';
    } else {
      b.dataset.state = 'dim';
    }
    b.style.pointerEvents = 'none';
  });

  showFeedback(isCorrect ? 'ok' : 'bad', isCorrect ? 'correct' : 'incorrect', `answer: ${correctOption.text}`);

  answers.push({
    type:        'MC',
    question:    q.question,
    userAnswer:  selectedLabel,
    correct:     correctOption.label,
    correctText: correctOption.text,
    isCorrect,
    marksEarned: isCorrect ? 1 : 0,
    marksTotal:  1,
  });

  answered = true;
  nextBtn.hidden      = false;
  nextBtn.textContent = isLastQuestion() ? 'Finish →' : 'Next →';
  updateScoreTracker();
}


// --- Next / Reveal button ---

nextBtn.addEventListener('click', () => {
  const q = questions[current];

  // SA phase 1: reveal the sample answer
  if (q.type === 'SA' && !answered) {
    saInput.disabled = true;
    answered = true;
    showFeedback('ok', 'sample answer', q.answer);
    buildMarkButtons(q);
    saMarkArea.hidden = false;
    nextBtn.hidden = true;  // re-shown after mark is picked
    return;
  }

  // Advance
  if (!isLastQuestion()) {
    current++;
    answered   = false;
    selfMarked = false;
    renderQuestion();
  } else {
    showResults();
  }
});

function isLastQuestion() {
  return current === questions.length - 1;
}


// --- SA self-mark buttons ---

function buildMarkButtons(q) {
  saMarkButtons.innerHTML = '';

  for (let m = 0; m <= q.marks; m++) {
    const btn = document.createElement('button');
    btn.className   = 'mark-btn';
    btn.textContent = m;

    btn.addEventListener('click', () => {
      if (selfMarked) return;
      selfMarked = true;

      saMarkButtons.querySelectorAll('.mark-btn').forEach(b => {
        b.classList.toggle('selected', b === btn);
        b.disabled = true;
      });

      answers.push({
        type:         'SA',
        question:     q.question,
        userAnswer:   saInput.value.trim() || '—',
        sampleAnswer: q.answer,
        marksEarned:  m,
        marksTotal:   q.marks,
      });

      nextBtn.hidden      = false;
      nextBtn.textContent = isLastQuestion() ? 'Finish →' : 'Next →';
      updateScoreTracker();
    });

    saMarkButtons.appendChild(btn);
  }
}


// --- Render question ---

function renderQuestion() {
  const q    = questions[current];
  const isMC = q.type === 'MC';
  const pad  = (n) => String(n).padStart(2, '0');

  questionSection.className = `question-section ${isMC ? 'q-mc' : 'q-sa'}`;

  questionCounter.textContent = `${pad(current + 1)} / ${pad(questions.length)}`;
  chromeCounter.textContent   = `${pad(current + 1)} / ${pad(questions.length)}`;
  ghostNumber.textContent     = pad(current + 1);
  qTypeTag.textContent        = isMC ? 'MC' : 'SA';

  progressFill.style.width = `${((current + 1) / questions.length) * 100}%`;
  updateScoreTracker();

  questionText.innerHTML = renderInlineContent(q.question);
  renderMath(questionText);

  // Reset shared UI
  feedbackArea.hidden = true;
  saMarkArea.hidden   = true;

  if (isMC) {
    nextBtn.hidden     = true;
    mcOptions.hidden   = false;
    saInputArea.hidden = true;
    mcOptions.innerHTML = '';

    for (const opt of q.options) {
      const btn = document.createElement('button');
      btn.className     = 'option';
      btn.dataset.label = opt.label;
      btn.innerHTML     = `<span class="opt-key">${opt.label}</span>`
                        + `<span class="opt-text">${renderInlineContent(opt.text)}</span>`;
      renderMath(btn);
      btn.addEventListener('click', () => handleOptionClick(btn));
      mcOptions.appendChild(btn);
    }

  } else {
    mcOptions.hidden    = true;
    saInputArea.hidden  = false;
    saInput.value       = '';
    saInput.disabled    = false;

    nextBtn.hidden      = false;
    nextBtn.textContent = 'Reveal Answer';

    saInput.focus();
  }
}

function updateScoreTracker() {
  const earned = answers.reduce((s, a) => s + a.marksEarned, 0);
  const total  = answers.reduce((s, a) => s + a.marksTotal, 0);
  scoreTracker.textContent = total > 0 ? `${earned} / ${total} marks` : '';
}

function showFeedback(state, label, detail) {
  feedbackArea.className  = `feedback ${state}`;
  feedbackMsg.className   = `feedback-msg ${state}`;
  feedbackMsg.textContent = label;
  feedbackArea.hidden     = false;

  if (detail) {
    feedbackText.innerHTML = renderInlineContent(detail);
    renderMath(feedbackText);
    feedbackText.hidden = false;
  } else {
    feedbackText.hidden = true;
  }
}


// --- Results ---

function showResults() {
  showScreen('results');
  chromeCounter.textContent = '';

  const earned      = answers.reduce((s, a) => s + a.marksEarned, 0);
  const maxPossible = answers.reduce((s, a) => s + a.marksTotal, 0);
  const pct         = maxPossible > 0 ? Math.round((earned / maxPossible) * 100) : 0;

  resultsScore.textContent = `${earned}/${maxPossible}`;
  const gradeText          = grade(pct);
  gradeBadge.textContent   = gradeText;
  updateHistoryScore(earned, maxPossible, pct, gradeText);

  resultsReview.innerHTML = '';
  answers.forEach((a, i) => {
    const div = document.createElement('div');
    div.className = 'review-item';

    if (a.type === 'MC') {
      div.classList.add(a.isCorrect ? 'review-correct' : 'review-wrong');
      div.innerHTML = `
        <div class="review-q"><strong>Q${i + 1} · MC</strong> &nbsp;<span>${renderInlineContent(a.question)}</span></div>
        <div class="review-answer">your answer: <em>${escapeHTML(a.userAnswer)}</em>${!a.isCorrect ? ` — correct: <em>${escapeHTML(a.correct)}</em>` : ''}</div>
        <div class="review-marks">${a.marksEarned} / ${a.marksTotal} mark</div>
      `;
    } else {
      const cls = a.marksEarned === a.marksTotal ? 'review-correct'
                : a.marksEarned === 0            ? 'review-wrong'
                :                                  'review-partial';
      div.classList.add(cls);
      div.innerHTML = `
        <div class="review-q"><strong>Q${i + 1} · SA</strong> &nbsp;<span>${renderInlineContent(a.question)}</span></div>
        <div class="review-answer">your answer: <em>${escapeHTML(a.userAnswer)}</em></div>
        <div class="review-answer">sample answer: <em>${renderInlineContent(a.sampleAnswer)}</em></div>
        <div class="review-marks">${a.marksEarned} / ${a.marksTotal} marks</div>
      `;
    }

    renderMath(div);
    resultsReview.appendChild(div);
  });
}

function grade(pct) {
  if (pct >= 90) return 'distinction';
  if (pct >= 70) return 'merit';
  if (pct >= 50) return 'pass';
  return 'needs work';
}

restartBtn.addEventListener('click', () => startBtn.click());

newQuizBtn.addEventListener('click', () => {
  mdInput.value             = '';
  fileInput.value           = '';
  chromeTitle.textContent   = 'nkquiz';
  chromeCounter.textContent = '';
  showScreen('upload');
});


// --- Utilities ---

function showScreen(name) {
  uploadScreen.hidden  = name !== 'upload';
  quizScreen.hidden    = name !== 'quiz';
  resultsScreen.hidden = name !== 'results';
}

function showError(msg) {
  parseError.textContent = msg;
  parseError.hidden      = false;
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderInlineContent(text) {
  return text.replace(/\{img:([^}]+)\}/g, (_, src) => {
    return `<img src="${escapeAttr(src)}" alt="question image" class="question-img">`;
  });
}

function renderMath(element) {
  if (typeof renderMathInElement === 'undefined') return;
  renderMathInElement(element, {
    delimiters: [
      { left: '$$', right: '$$', display: true  },
      { left: '$',  right: '$',  display: false },
    ],
    throwOnError: false,
  });
}

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Initialise history on page load
renderHistorySection();
