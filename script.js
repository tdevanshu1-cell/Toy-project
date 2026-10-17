/* script.js — JSLearn main application logic */

/* ── TOPIC ORDER (for prev/next nav) ──────── */
const TOPIC_ORDER = [
  'intro', 'setup', 'variables', 'datatypes', 'operators',
  'strings', 'numbers', 'conditionals', 'switch', 'loops',
  'functions', 'scope', 'arrow', 'arrays', 'objects',
  'dom', 'events'
];

/* ── SEARCH INDEX ─────────────────────────── */
const SEARCH_INDEX = [
  { id: 'intro',        label: 'Introduction',         keywords: 'what is javascript browser history' },
  { id: 'setup',        label: 'Setup & Hello World',  keywords: 'setup script console log hello world' },
  { id: 'variables',    label: 'Variables',            keywords: 'var let const variable declare assign' },
  { id: 'datatypes',    label: 'Data Types',           keywords: 'string number boolean null undefined typeof' },
  { id: 'operators',    label: 'Operators',            keywords: 'arithmetic comparison logical operator plus minus' },
  { id: 'strings',      label: 'Strings',              keywords: 'text string template literal method length' },
  { id: 'numbers',      label: 'Numbers',              keywords: 'math number NaN infinity parseInt parseFloat' },
  { id: 'conditionals', label: 'If / Else',            keywords: 'if else condition ternary truthy falsy' },
  { id: 'switch',       label: 'Switch Statement',     keywords: 'switch case break default' },
  { id: 'loops',        label: 'Loops',                keywords: 'for while do loop iteration break continue' },
  { id: 'functions',    label: 'Functions',            keywords: 'function return parameter argument default' },
  { id: 'scope',        label: 'Scope',                keywords: 'scope global local block closure' },
  { id: 'arrow',        label: 'Arrow Functions',      keywords: 'arrow function => es6 short syntax' },
  { id: 'arrays',       label: 'Arrays',               keywords: 'array list push pop map filter slice index' },
  { id: 'objects',      label: 'Objects',              keywords: 'object property key value method destructure' },
  { id: 'dom',          label: 'DOM Basics',           keywords: 'DOM document getElementById querySelector select' },
  { id: 'events',       label: 'Events',               keywords: 'event click addEventListener keydown submit' },
  { id: 'playground',   label: 'JS Playground',        keywords: 'playground editor run code try' },
];

/* ── STATE ────────────────────────────────── */
let currentTopic = 'home';
let sidebarCollapsed = false;
let clickCounter = 0;

/* ── INIT ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Detect mobile
  if (window.innerWidth <= 768) {
    sidebarCollapsed = true;
  }
  loadTopic('home');
  initSearch();
  initSidebarToggle();
  initKeyboardNav();
});

/* ── TOPIC LOADER ─────────────────────────── */
function loadTopic(id) {
  // Reset code block counter for fresh render
  codeBlockCounter = 0;
  quizCounter = 0;

  if (!TOPICS[id]) { id = 'home'; }
  currentTopic = id;

  const topic = TOPICS[id];
  const container = document.getElementById('content-inner');

  // Build nav buttons
  const idx = TOPIC_ORDER.indexOf(id);
  let navHtml = '';
  if (idx !== -1) {
    const prevId = idx > 0 ? TOPIC_ORDER[idx - 1] : null;
    const nextId = idx < TOPIC_ORDER.length - 1 ? TOPIC_ORDER[idx + 1] : null;
    navHtml = `<div class="topic-nav">
      ${prevId ? `<button class="topic-nav-btn" onclick="loadTopic('${prevId}')">&larr; ${TOPICS[prevId].title}</button>` : '<span></span>'}
      ${nextId ? `<button class="topic-nav-btn next" onclick="loadTopic('${nextId}')">${TOPICS[nextId].title} &rarr;</button>` : ''}
    </div>`;
  }

  container.innerHTML = '<div class="fade-in">' + topic.render() + navHtml + '</div>';
  container.scrollTop = 0;
  document.getElementById('content-area').scrollTop = 0;
  window.scrollTo(0, 0);

  // Update sidebar active link
  document.querySelectorAll('.sidebar-link').forEach(a => {
    a.classList.toggle('active', a.getAttribute('data-topic') === id);
  });

  // Update page title
  document.title = (id === 'home' ? 'JSLearn — JavaScript for Beginners' : `${topic.title} | JSLearn`);

  // Close sidebar on mobile after navigation
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('mobile-open');
  }
}

/* ── SIDEBAR TOGGLE ───────────────────────── */
function initSidebarToggle() {
  const toggleBtn = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const contentArea = document.getElementById('content-area');
  const footer = document.getElementById('site-footer');

  toggleBtn.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.toggle('mobile-open');
    } else {
      sidebarCollapsed = !sidebarCollapsed;
      sidebar.classList.toggle('collapsed', sidebarCollapsed);
      contentArea.classList.toggle('full-width', sidebarCollapsed);
      footer.classList.toggle('full-width', sidebarCollapsed);
    }
  });
}

/* ── SEARCH ───────────────────────────────── */
function initSearch() {
  const input = document.getElementById('search-input');
  const dropdown = document.getElementById('search-dropdown');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { dropdown.classList.add('hidden'); return; }

    const results = SEARCH_INDEX.filter(item =>
      item.label.toLowerCase().includes(q) ||
      item.keywords.includes(q)
    );

    if (results.length === 0) {
      dropdown.innerHTML = `<div class="search-no-results">No results for "${q}"</div>`;
    } else {
      dropdown.innerHTML = results.map(r => `
        <div class="search-result-item" onclick="loadTopic('${r.id}'); closeSearch();">
          <strong>${r.label}</strong>
          <div style="font-size:11px;color:var(--text-muted);margin-top:2px;">${r.keywords.split(' ').slice(0,4).join(', ')}</div>
        </div>
      `).join('');
    }
    dropdown.classList.remove('hidden');
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      closeSearch();
    }
  });
}

function closeSearch() {
  document.getElementById('search-dropdown').classList.add('hidden');
  document.getElementById('search-input').value = '';
}

/* ── KEYBOARD NAVIGATION ──────────────────── */
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    // Don't interfere with textareas
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
    const idx = TOPIC_ORDER.indexOf(currentTopic);
    if (e.key === 'ArrowRight' && idx < TOPIC_ORDER.length - 1) {
      loadTopic(TOPIC_ORDER[idx + 1]);
    }
    if (e.key === 'ArrowLeft' && idx > 0) {
      loadTopic(TOPIC_ORDER[idx - 1]);
    }
  });
}

/* ── CODE BLOCK: COPY ─────────────────────── */
function copyCode(blockId) {
  const pre = document.querySelector(`#${blockId} pre`);
  if (!pre) return;
  const text = pre.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById(blockId + '-copy');
    if (btn) {
      btn.textContent = '✓ Copied';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 1800);
    }
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  });
}

/* ── CODE BLOCK: RUN ──────────────────────── */
function runCodeBlock(blockId, outputId, expectedOutput) {
  const pre = document.querySelector(`#${blockId} pre`);
  const outputEl = document.getElementById(outputId);
  if (!pre || !outputEl) return;

  const code = pre.textContent;
  const outContent = outputEl.querySelector('.output-content');
  outputEl.classList.add('visible');

  // Use actual code execution for display
  const logs = [];
  const origConsole = window.console;
  const fakeConsole = {
    log: (...args) => logs.push(args.map(formatValue).join(' ')),
    warn: (...args) => logs.push('⚠️ ' + args.join(' ')),
    error: (...args) => logs.push('❌ ' + args.join(' ')),
  };

  try {
    // Replace console temporarily
    window.console = fakeConsole;
    // Intercept alert
    const origAlert = window.alert;
    window.alert = (msg) => logs.push('[alert] ' + msg);

    // eslint-disable-next-line no-new-func
    new Function(code)();

    window.console = origConsole;
    window.alert = origAlert;

    if (logs.length > 0) {
      outContent.textContent = logs.join('\n');
      outContent.classList.remove('error');
    } else {
      outContent.textContent = '(no console output)';
    }
  } catch (err) {
    window.console = origConsole;
    outContent.textContent = '❌ Error: ' + err.message;
    outContent.classList.add('error');
  }
}

/* ── INTERACTIVE EDITOR ───────────────────── */
function runEditor(editorId, outputId) {
  const ta = document.getElementById(editorId);
  const outEl = document.getElementById(outputId);
  if (!ta || !outEl) return;

  const code = ta.value;
  const logs = [];

  outEl.classList.add('visible');
  outEl.classList.remove('error-out');

  const fakeConsole = {
    log: (...args) => logs.push(args.map(formatValue).join(' ')),
    warn: (...args) => logs.push('⚠️ ' + args.join(' ')),
    error: (...args) => logs.push('❌ ' + args.join(' ')),
  };
  const origConsole = window.console;
  const origAlert = window.alert;

  try {
    window.console = fakeConsole;
    window.alert = (msg) => logs.push('[alert] ' + msg);
    // eslint-disable-next-line no-new-func
    new Function(code)();
    window.console = origConsole;
    window.alert = origAlert;
    outEl.textContent = logs.length > 0 ? logs.join('\n') : '(no console output)';
  } catch (err) {
    window.console = origConsole;
    window.alert = origAlert;
    outEl.textContent = '❌ Error: ' + err.message;
    outEl.classList.add('error-out');
  }
}

function clearEditor(editorId, outputId) {
  const outEl = document.getElementById(outputId);
  if (outEl) {
    outEl.textContent = '';
    outEl.classList.remove('visible', 'error-out');
  }
}

/* ── PLAYGROUND ───────────────────────────── */
function runPlayground() {
  const ta = document.getElementById('playground-textarea');
  const outEl = document.getElementById('playground-output');
  if (!ta || !outEl) return;

  const code = ta.value;
  const logs = [];
  const fakeConsole = {
    log:   (...args) => logs.push(args.map(formatValue).join(' ')),
    warn:  (...args) => logs.push('⚠️  ' + args.join(' ')),
    error: (...args) => logs.push('❌  ' + args.join(' ')),
    info:  (...args) => logs.push('ℹ️  ' + args.join(' ')),
    table: (...args) => logs.push('TABLE: ' + JSON.stringify(args[0], null, 2)),
  };
  const origConsole = window.console;
  const origAlert = window.alert;

  try {
    window.console = fakeConsole;
    window.alert = (msg) => logs.push('[alert] ' + msg);
    // eslint-disable-next-line no-new-func
    new Function(code)();
    window.console = origConsole;
    window.alert = origAlert;
    outEl.style.color = '#b0d0b0';
    outEl.textContent = logs.length > 0 ? logs.join('\n') : '(no console output)';
  } catch (err) {
    window.console = origConsole;
    window.alert = origAlert;
    outEl.style.color = '#ff8080';
    outEl.textContent = '❌ Error: ' + err.message;
  }
}

function clearPlayground() {
  const outEl = document.getElementById('playground-output');
  if (outEl) {
    outEl.textContent = '// Output cleared';
    outEl.style.color = '#b0d0b0';
  }
}

function resetPlayground() {
  const ta = document.getElementById('playground-textarea');
  if (ta) {
    ta.value = `// Welcome to the JS Playground!\n// Write any JavaScript below and click Run.\n\nconst greet = (name) => {\n  return \`Hello, \${name}! Welcome to JSLearn.\`;\n};\n\nconsole.log(greet("World"));\nconsole.log(2 ** 10);       // 1024\nconsole.log([1,2,3].map(x => x * x));\n`;
  }
}

function loadSnippet(index) {
  const ta = document.getElementById('playground-textarea');
  if (ta && SNIPPETS[index] !== undefined) {
    ta.value = SNIPPETS[index];
    clearPlayground();
  }
}

/* ── QUIZ LOGIC ───────────────────────────── */
function checkQuiz(id, selectedIdx, isCorrect, el) {
  const optsContainer = document.getElementById(id + '-opts');
  if (!optsContainer) return;

  // Disable all options
  const opts = optsContainer.querySelectorAll('.quiz-option');
  opts.forEach((opt, i) => {
    opt.style.pointerEvents = 'none';
    // We need to check if this is the correct one
    // data comes from onclick, not stored, so we mark by selectedIdx
    if (i === selectedIdx) {
      opt.classList.add(isCorrect ? 'correct' : 'wrong');
    }
    // If wrong, reveal the correct one
    if (!isCorrect) {
      const onclickStr = opt.getAttribute('onclick') || '';
      if (onclickStr.includes(', true,')) opt.classList.add('correct');
    }
  });

  const fb = document.getElementById(id + '-fb');
  const exp = document.getElementById(id + '-exp');
  const retry = document.getElementById(id + '-retry');

  if (fb) {
    fb.textContent = isCorrect ? '✅ Correct! Great job!' : '❌ Not quite — see the correct answer above.';
    fb.className = 'quiz-feedback show ' + (isCorrect ? 'ok' : 'bad');
  }
  if (exp) exp.style.display = 'block';
  if (retry && !isCorrect) retry.classList.add('show');
}

function retryQuiz(id) {
  const optsContainer = document.getElementById(id + '-opts');
  if (!optsContainer) return;

  const opts = optsContainer.querySelectorAll('.quiz-option');
  opts.forEach(opt => {
    opt.style.pointerEvents = '';
    opt.classList.remove('correct', 'wrong');
  });

  const fb = document.getElementById(id + '-fb');
  const exp = document.getElementById(id + '-exp');
  const retry = document.getElementById(id + '-retry');
  if (fb) { fb.textContent = ''; fb.className = 'quiz-feedback'; }
  if (exp) exp.style.display = 'none';
  if (retry) retry.classList.remove('show');
}

/* ── EVENTS PAGE DEMO ─────────────────────── */
function demoEventClick(btn) {
  clickCounter++;
  const counter = document.getElementById('demo-counter');
  if (counter) counter.textContent = 'Clicks: ' + clickCounter;

  // Flash animation
  btn.style.transform = 'scale(0.9)';
  setTimeout(() => btn.style.transform = '', 100);
}

function demoColorClick(btn) {
  const colors = ['#C0152A', '#F5C300', '#2D6A4F', '#1565C0', '#6A1B9A', '#E65100'];
  const randColor = colors[Math.floor(Math.random() * colors.length)];
  btn.style.background = randColor;
  btn.style.color = '#fff';
}

/* ── FORMAT VALUE FOR OUTPUT ──────────────── */
function formatValue(val) {
  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (typeof val === 'string') return val;
  if (typeof val === 'function') return val.toString();
  if (Array.isArray(val)) return '[' + val.map(formatValue).join(',') + ']';
  if (typeof val === 'object') {
    try {
      return JSON.stringify(val);
    } catch {
      return String(val);
    }
  }
  return String(val);
}

/* ── TOPIC CARDS KEYBOARD ─────────────────── */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('topic-card')) {
    const onclick = e.target.getAttribute('onclick');
    if (onclick) eval(onclick);
  }
});
