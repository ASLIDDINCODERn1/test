const TEST_DURATION_SECONDS = 60 * 60;
const SETTINGS_KEY = 'liking_disliking_test_settings_v1';

const QUESTION_BANK = [
  {
    id: 1,
    type: 'mcq',
    prompt: 'Which word shows the strongest positive feeling?',
    options: ['Like', 'Enjoy', 'Adore', 'Prefer'],
    answer: 'Adore'
  },
  {
    id: 2,
    type: 'text',
    prompt: 'Complete: She is keen ___ learning English.',
    answers: ['on']
  },
  {
    id: 3,
    type: 'mcq',
    prompt: "Which informal phrase means 'to be very interested in' something?",
    options: ['Be fond of', 'Be into', 'Prefer', 'Dislike'],
    answer: 'Be into'
  },
  {
    id: 4,
    type: 'text',
    prompt: "Complete: I can't ___ loud noise.",
    answers: ['stand']
  },
  {
    id: 5,
    type: 'mcq',
    prompt: 'Which is the most polite way to say you do not like something very much?',
    options: ['I hate it', "I'm not a fan of it", 'I detest it', 'I loathe it'],
    answer: "I'm not a fan of it"
  },
  {
    id: 6,
    type: 'text',
    prompt: 'Complete: He is crazy ___ football.',
    answers: ['about']
  },
  {
    id: 7,
    type: 'mcq',
    prompt: "Which verb is closest in meaning to 'hate' and very strong?",
    options: ['Prefer', 'Enjoy', 'Loathe', 'Like'],
    answer: 'Loathe'
  },
  {
    id: 8,
    type: 'text',
    prompt: 'Complete: They are fond ___ classical music.',
    answers: ['of']
  },
  {
    id: 9,
    type: 'mcq',
    prompt: "What is the opposite of 'enjoy' in this topic?",
    options: ['Adore', 'Dislike', 'Be keen on', 'Prefer'],
    answer: 'Dislike'
  },
  {
    id: 10,
    type: 'text',
    prompt: "Complete: I'm not really ___ spicy food.",
    answers: ['into']
  },
  {
    id: 11,
    type: 'mcq',
    prompt: "Which phrase means you care deeply and strongly about something?",
    options: ['Be passionate about', 'Be not keen on', 'Dislike', 'Can\'t stand'],
    answer: 'Be passionate about'
  },
  {
    id: 12,
    type: 'text',
    prompt: 'Complete: She ___ waking up early.',
    answers: ['detests', 'hates', 'loathes', 'despises']
  },
  {
    id: 13,
    type: 'mcq',
    prompt: 'Choose the best word: I ___ tea to coffee.',
    options: ['detest', 'prefer', 'can\'t stand', 'be into'],
    answer: 'prefer'
  },
  {
    id: 14,
    type: 'text',
    prompt: 'Complete: We ___ spending time at the beach.',
    answers: ['enjoy', 'love', 'adore']
  },
  {
    id: 15,
    type: 'mcq',
    prompt: 'Which sentence expresses a very strong dislike?',
    options: ['He likes lying.', 'He despises lying.', 'He prefers lying.', 'He is fond of lying.'],
    answer: 'He despises lying.'
  },
  {
    id: 16,
    type: 'text',
    prompt: "Complete: I'm not keen ___ horror films.",
    answers: ['on']
  },
  {
    id: 17,
    type: 'mcq',
    prompt: 'Which expression is informal?',
    options: ['Be into', 'Detest', 'Dislike', 'Prefer'],
    answer: 'Be into'
  },
  {
    id: 18,
    type: 'text',
    prompt: 'Complete: She is really ___ on photography these days.',
    answers: ['keen']
  },
  {
    id: 19,
    type: 'mcq',
    prompt: "'Be fond of' is closest in meaning to:",
    options: ['Hate', 'Like', 'Despise', 'Detest'],
    answer: 'Like'
  },
  {
    id: 20,
    type: 'text',
    prompt: 'Complete: I ___ this song; I have played it 20 times.',
    answers: ['adore', 'love', 'enjoy']
  },
  {
    id: 21,
    type: 'mcq',
    prompt: 'Pick the most polite sentence:',
    options: [
      'I hate mushrooms.',
      "I'm not a fan of mushrooms.",
      'I loathe mushrooms.',
      'I despise mushrooms.'
    ],
    answer: "I'm not a fan of mushrooms."
  },
  {
    id: 22,
    type: 'text',
    prompt: "Complete: He can't ___ waiting in long lines.",
    answers: ['stand']
  },
  {
    id: 23,
    type: 'mcq',
    prompt: 'Which verb shows very strong dislike for behavior?',
    options: ['Enjoy', 'Prefer', 'Despise', 'Like'],
    answer: 'Despise'
  },
  {
    id: 24,
    type: 'text',
    prompt: 'Complete: They are passionate ___ helping others.',
    answers: ['about']
  },
  {
    id: 25,
    type: 'mcq',
    prompt: 'Choose the correct sentence:',
    options: [
      'I am keen on learning new languages.',
      'I am keen at learning new languages.',
      'I am keen with learning new languages.',
      'I am keen for learning new languages.'
    ],
    answer: 'I am keen on learning new languages.'
  },
  {
    id: 26,
    type: 'text',
    prompt: "Complete: I am really ___ jazz these days.",
    answers: ['into']
  },
  {
    id: 27,
    type: 'mcq',
    prompt: "Which word means 'to choose one thing over another'?",
    options: ['Prefer', 'Detest', 'Loathe', 'Adore'],
    answer: 'Prefer'
  },
  {
    id: 28,
    type: 'text',
    prompt: 'Complete: She ___ waking up at 5 a.m.; she says it is awful.',
    answers: ['hates', 'detests', 'loathes', 'despises']
  },
  {
    id: 29,
    type: 'mcq',
    prompt: 'Which one is positive but not the strongest?',
    options: ['Enjoy', 'Adore', 'Be crazy about', 'Be passionate about'],
    answer: 'Enjoy'
  },
  {
    id: 30,
    type: 'text',
    prompt: 'Complete: We are very fond ___ our new teacher.',
    answers: ['of']
  },
  {
    id: 31,
    type: 'mcq',
    prompt: 'Which sentence is grammatically correct?',
    options: [
      'I keen on music.',
      'I am keen on music.',
      'I am keen of music.',
      'I am keen with music.'
    ],
    answer: 'I am keen on music.'
  },
  {
    id: 32,
    type: 'text',
    prompt: 'Complete: My brother is ___ on video games.',
    answers: ['keen']
  },
  {
    id: 33,
    type: 'mcq',
    prompt: 'Choose the strongest positive option:',
    options: ['Like', 'Be fond of', 'Be crazy about', 'Enjoy'],
    answer: 'Be crazy about'
  },
  {
    id: 34,
    type: 'text',
    prompt: "Complete: I am not a ___ of crowded places.",
    answers: ['fan']
  },
  {
    id: 35,
    type: 'mcq',
    prompt: "'Can't stand' expresses:",
    options: ['A very strong dislike', 'A neutral feeling', 'A preference', 'A strong positive feeling'],
    answer: 'A very strong dislike'
  },
  {
    id: 36,
    type: 'text',
    prompt: 'Complete: She is passionate ___ environmental issues.',
    answers: ['about']
  },
  {
    id: 37,
    type: 'mcq',
    prompt: "Which expression is milder than 'hate'?",
    options: ['Don\'t like', 'Loathe', 'Detest', 'Despise'],
    answer: "Don't like"
  },
  {
    id: 38,
    type: 'text',
    prompt: 'Complete: They really ___ this cafe; they come every day.',
    answers: ['love', 'adore', 'enjoy']
  },
  {
    id: 39,
    type: 'mcq',
    prompt: 'Which is a very strong negative verb?',
    options: ['Prefer', 'Like', 'Detest', 'Enjoy'],
    answer: 'Detest'
  },
  {
    id: 40,
    type: 'text',
    prompt: 'Complete: I ___ tea to soda.',
    answers: ['prefer']
  },
  {
    id: 41,
    type: 'mcq',
    prompt: 'Which option is informal positive language?',
    options: ['Be into', 'Not keen on', 'Dislike', 'Detest'],
    answer: 'Be into'
  },
  {
    id: 42,
    type: 'text',
    prompt: 'Complete: He is not really ___ on action movies.',
    answers: ['keen']
  },
  {
    id: 43,
    type: 'mcq',
    prompt: "Which sentence means 'I love hiking very much'?",
    options: [
      'I am not keen on hiking.',
      'I am crazy about hiking.',
      'I dislike hiking.',
      'I prefer hiking less.'
    ],
    answer: 'I am crazy about hiking.'
  },
  {
    id: 44,
    type: 'text',
    prompt: 'Complete: We ___ wasting time.',
    answers: ['hate', 'detest', 'despise', 'loathe', "can't stand", 'cannot stand']
  },
  {
    id: 45,
    type: 'mcq',
    prompt: "'Not keen on' means:",
    options: ['Loves very much', 'Does not like very much', 'Is passionate about', 'Is crazy about'],
    answer: 'Does not like very much'
  },
  {
    id: 46,
    type: 'text',
    prompt: 'Complete: She absolutely ___ rude behavior.',
    answers: ['despises', 'loathes', 'detests', 'hates']
  },
  {
    id: 47,
    type: 'mcq',
    prompt: 'Choose the strongest word:',
    options: ['Like', 'Love', 'Adore', 'Enjoy'],
    answer: 'Adore'
  },
  {
    id: 48,
    type: 'text',
    prompt: 'Complete: I am ___ of romantic comedies.',
    answers: ['fond']
  },
  {
    id: 49,
    type: 'mcq',
    prompt: 'Which answer is polite if you do not like spicy food?',
    options: [
      'I despise spicy food.',
      "I am not a fan of spicy food.",
      'I loathe spicy food.',
      'I cannot stand all food.'
    ],
    answer: 'I am not a fan of spicy food.'
  },
  {
    id: 50,
    type: 'text',
    prompt: 'Complete: They ___ cycling to driving in the city.',
    answers: ['prefer']
  }
];

const screenIds = ['setup-screen', 'preview-screen', 'test-screen', 'result-screen'];

const els = {
  settingsTrigger: document.getElementById('settings-trigger'),
  settingsMenu: document.getElementById('settings-menu'),
  settingsClose: document.getElementById('settings-close'),
  themeToggle: document.getElementById('theme-toggle'),
  fontFamily: document.getElementById('font-family'),
  fontSize: document.getElementById('font-size'),
  fontSizeValue: document.getElementById('font-size-value'),
  setupScreen: document.getElementById('setup-screen'),
  previewScreen: document.getElementById('preview-screen'),
  testScreen: document.getElementById('test-screen'),
  resultScreen: document.getElementById('result-screen'),
  username: document.getElementById('username'),
  setupError: document.getElementById('setup-error'),
  previewBtn: document.getElementById('preview-btn'),
  backBtn: document.getElementById('back-btn'),
  startBtn: document.getElementById('start-btn'),
  previewUser: document.getElementById('preview-user'),
  previewList: document.getElementById('preview-list'),
  activeUser: document.getElementById('active-user'),
  answeredCount: document.getElementById('answered-count'),
  timer: document.getElementById('timer'),
  testForm: document.getElementById('test-form'),
  testQuestions: document.getElementById('test-questions'),
  submitBtn: document.getElementById('submit-btn'),
  resultUser: document.getElementById('result-user'),
  resultTime: document.getElementById('result-time'),
  resultCorrect: document.getElementById('result-correct'),
  resultAttempted: document.getElementById('result-attempted'),
  resultPercent: document.getElementById('result-percent'),
  retryBtn: document.getElementById('retry-btn')
};

const state = {
  userName: '',
  questions: [],
  timerId: null,
  endTime: null,
  finished: false
};

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function shuffleArray(items) {
  const list = [...items];
  for (let index = list.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [list[index], list[swapIndex]] = [list[swapIndex], list[index]];
  }
  return list;
}

function showScreen(screenId) {
  screenIds.forEach((id) => {
    const screen = document.getElementById(id);
    screen.classList.toggle('active', id === screenId);
  });

  closeSettingsMenu();
}

function formatTime(secondsLeft) {
  const total = Math.max(0, secondsLeft);
  const hours = String(Math.floor(total / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
  const seconds = String(total % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function loadSettings() {
  const saved = localStorage.getItem(SETTINGS_KEY);
  if (!saved) {
    applySettings({ theme: 'dark', fontSize: 16, fontFamily: "'Manrope', sans-serif" });
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    applySettings(parsed);
  } catch {
    applySettings({ theme: 'dark', fontSize: 16, fontFamily: "'Manrope', sans-serif" });
  }
}

function saveSettings(settings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function applySettings(settings) {
  const theme = settings.theme === 'dark' ? 'dark' : 'light';
  const fontSize = Number(settings.fontSize) || 16;
  const fontFamily = settings.fontFamily || "'Manrope', sans-serif";

  document.body.classList.toggle('theme-dark', theme === 'dark');
  document.body.classList.toggle('theme-light', theme === 'light');
  document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
  document.documentElement.style.setProperty('--app-font', fontFamily);

  els.themeToggle.checked = theme === 'dark';
  els.fontSize.value = String(fontSize);
  els.fontSizeValue.textContent = `${fontSize}px`;
  els.fontFamily.value = fontFamily;

  saveSettings({ theme, fontSize, fontFamily });
}

function getCurrentSettings() {
  return {
    theme: els.themeToggle.checked ? 'dark' : 'light',
    fontSize: Number(els.fontSize.value),
    fontFamily: els.fontFamily.value
  };
}

function setSettingsMenuOpen(open) {
  if (!els.settingsMenu || !els.settingsTrigger) return;

  els.settingsMenu.classList.toggle('open', open);
  els.settingsMenu.setAttribute('aria-hidden', String(!open));
  els.settingsTrigger.setAttribute('aria-expanded', String(open));
}

function closeSettingsMenu() {
  setSettingsMenuOpen(false);
}

function toggleSettingsMenu() {
  if (!els.settingsMenu) return;
  const open = els.settingsMenu.classList.contains('open');
  setSettingsMenuOpen(!open);
}

function buildQuestionSet() {
  return shuffleArray(
    QUESTION_BANK.map((question) => {
      if (question.type === 'mcq') {
        return { ...question, options: shuffleArray(question.options) };
      }
      return { ...question };
    })
  );
}

function renderPreview() {
  const fragment = document.createDocumentFragment();

  state.questions.forEach((question, index) => {
    const card = document.createElement('article');
    card.className = 'question-card';

    const meta = document.createElement('div');
    meta.className = 'question-meta';
    meta.textContent = `${index + 1}. ${question.type === 'mcq' ? 'MCQ' : 'TYPE'}`;

    const title = document.createElement('p');
    title.className = 'question-title';
    title.textContent = question.prompt;

    card.append(meta, title);

    if (question.type === 'mcq') {
      const optionList = document.createElement('div');
      optionList.className = 'options';
      question.options.forEach((option) => {
        const optionText = document.createElement('div');
        optionText.textContent = `- ${option}`;
        optionList.appendChild(optionText);
      });
      card.appendChild(optionList);
    }

    fragment.appendChild(card);
  });

  els.previewList.innerHTML = '';
  els.previewList.appendChild(fragment);
}

function renderTest() {
  const fragment = document.createDocumentFragment();

  state.questions.forEach((question, index) => {
    const card = document.createElement('article');
    card.className = 'question-card';

    const meta = document.createElement('div');
    meta.className = 'question-meta';
    meta.textContent = `${index + 1}. ${question.type === 'mcq' ? 'Select one answer' : 'Type your answer'}`;

    const title = document.createElement('p');
    title.className = 'question-title';
    title.textContent = question.prompt;

    card.append(meta, title);

    if (question.type === 'mcq') {
      const options = document.createElement('div');
      options.className = 'options';

      question.options.forEach((option) => {
        const label = document.createElement('label');
        label.className = 'option';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q-${index}`;
        input.value = option;

        const span = document.createElement('span');
        span.textContent = option;

        label.append(input, span);
        options.appendChild(label);
      });

      card.appendChild(options);
    } else {
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'text-answer';
      input.name = `q-${index}`;
      input.placeholder = 'Type your answer';
      input.autocomplete = 'off';
      card.appendChild(input);
    }

    fragment.appendChild(card);
  });

  els.testQuestions.innerHTML = '';
  els.testQuestions.appendChild(fragment);
  updateAnsweredCount();
}

function updateAnsweredCount() {
  let answered = 0;
  state.questions.forEach((question, index) => {
    if (question.type === 'mcq') {
      const picked = els.testForm.querySelector(`input[name="q-${index}"]:checked`);
      if (picked) answered += 1;
    } else {
      const typed = els.testForm.querySelector(`input[name="q-${index}"]`);
      if (typed && typed.value.trim()) answered += 1;
    }
  });

  els.answeredCount.textContent = String(answered);
}

function gradeTest() {
  let correct = 0;
  let attempted = 0;

  state.questions.forEach((question, index) => {
    if (question.type === 'mcq') {
      const picked = els.testForm.querySelector(`input[name="q-${index}"]:checked`);
      if (picked) {
        attempted += 1;
        if (picked.value === question.answer) {
          correct += 1;
        }
      }
      return;
    }

    const typed = els.testForm.querySelector(`input[name="q-${index}"]`);
    const userValue = typed ? typed.value.trim() : '';
    if (!userValue) return;

    attempted += 1;
    const normalizedUser = normalize(userValue);
    const isCorrect = question.answers.some((answer) => normalize(answer) === normalizedUser);

    if (isCorrect) {
      correct += 1;
    }
  });

  return { correct, attempted };
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function startTimer() {
  stopTimer();

  state.endTime = Date.now() + TEST_DURATION_SECONDS * 1000;
  els.timer.textContent = formatTime(TEST_DURATION_SECONDS);

  state.timerId = setInterval(() => {
    const secondsLeft = Math.round((state.endTime - Date.now()) / 1000);

    if (secondsLeft <= 0) {
      els.timer.textContent = '00:00:00';
      finishTest('timeup');
      return;
    }

    els.timer.textContent = formatTime(secondsLeft);
  }, 1000);
}

function finishTest(reason = 'manual') {
  if (state.finished) return;

  state.finished = true;
  stopTimer();

  const results = gradeTest();
  const percent = ((results.correct / state.questions.length) * 100).toFixed(1);

  els.resultUser.textContent = state.userName;
  els.resultTime.textContent = new Date().toLocaleString();
  els.resultCorrect.textContent = String(results.correct);
  els.resultAttempted.textContent = String(results.attempted);
  els.resultPercent.textContent = percent;

  if (reason === 'timeup') {
    alert('Time is up. Test automatically finished.');
  }

  showScreen('result-screen');
}

function resetToSetup() {
  stopTimer();
  state.finished = false;
  state.questions = [];
  state.endTime = null;

  els.testForm.reset();
  els.answeredCount.textContent = '0';
  els.timer.textContent = '01:00:00';
  els.setupError.textContent = '';

  showScreen('setup-screen');
}

function handlePreview() {
  const typedName = els.username.value.trim();
  if (!typedName) {
    els.setupError.textContent = 'Username kiriting, keyin davom eting.';
    els.username.focus();
    return;
  }

  els.setupError.textContent = '';
  state.userName = typedName;
  state.questions = buildQuestionSet();

  els.previewUser.textContent = `User: ${state.userName}`;
  renderPreview();
  showScreen('preview-screen');
}

function handleStartTest() {
  state.finished = false;
  els.activeUser.textContent = state.userName;
  renderTest();
  showScreen('test-screen');
  startTimer();
}

function bindEvents() {
  els.settingsTrigger.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleSettingsMenu();
  });

  els.settingsClose.addEventListener('click', () => {
    closeSettingsMenu();
  });

  els.settingsMenu.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  document.addEventListener('click', () => {
    closeSettingsMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeSettingsMenu();
    }
  });

  els.previewBtn.addEventListener('click', handlePreview);

  els.backBtn.addEventListener('click', () => {
    showScreen('setup-screen');
  });

  els.startBtn.addEventListener('click', handleStartTest);

  els.testForm.addEventListener('submit', (event) => {
    event.preventDefault();
    finishTest('manual');
  });

  els.testForm.addEventListener('input', updateAnsweredCount);

  els.retryBtn.addEventListener('click', () => {
    resetToSetup();
    els.username.value = state.userName;
  });

  els.themeToggle.addEventListener('change', () => {
    applySettings(getCurrentSettings());
  });

  els.fontFamily.addEventListener('change', () => {
    applySettings(getCurrentSettings());
  });

  els.fontSize.addEventListener('input', () => {
    els.fontSizeValue.textContent = `${els.fontSize.value}px`;
    applySettings(getCurrentSettings());
  });
}

function init() {
  loadSettings();
  bindEvents();
  showScreen('setup-screen');
}

init();
