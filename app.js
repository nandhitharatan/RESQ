// ─── app.js ───────────────────────────────────────────────
// Main app logic: screen management, language, rendering,
// injury steps, severity screen, and utility functions
// ─────────────────────────────────────────────────────────

let lang = 'en';
let currentInjury = null;
let currentStep = 0;
let sevAnswers = [];
let currentSevQs = [];

// Helper: get injuries for current language
function injuries() {
  return injuriesData[lang];
}

// ── Screen Management ──────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  // Only show floating voice button on home screen
  const fab = document.getElementById('voiceFabWrap');
  if (fab) fab.style.display = id === 'homeScreen' ? 'flex' : 'none';
}

// ── Language Setup ─────────────────────────────────────────
function setLang(l) {
  lang = l;
  const t = T[l];

  // Update all UI text
  document.getElementById('homeWelcome').textContent = t.welcome;
  document.getElementById('homeSub').textContent = t.sub;
  document.getElementById('injuryLabel').textContent = t.injuryLabel;
  document.getElementById('voiceBtnText').textContent = t.tapSpeak;
  document.getElementById('ttsLabel').textContent = t.readAloud;
  document.getElementById('sevTitle').textContent = t.sevTitle;
  document.getElementById('sevSub').textContent = t.sevSub;
  document.getElementById('doneTitle').textContent = t.doneTitle;
  document.getElementById('doneSub').textContent = t.doneSub;

  // Update active language button
  ['btnEn', 'btnTe', 'btnHi'].forEach(id => document.getElementById(id).classList.remove('active-lang'));
  document.getElementById(l === 'en' ? 'btnEn' : l === 'te' ? 'btnTe' : 'btnHi').classList.add('active-lang');

  renderInjuries();
  updateSearchPlaceholder();
  showScreen('homeScreen');
}

// ── Injury List Rendering ──────────────────────────────────
function renderInjuries() {
  const list = document.getElementById('injuryList');
  list.innerHTML = '';

  injuries().forEach((inj, i) => {
    const el = document.createElement('div');
    el.className = 'injury-item';
    el.innerHTML = `
      <span class="injury-icon">${inj.icon}</span>
      <div>
        <div class="injury-name">${inj.name}</div>
        <div class="injury-desc">${inj.desc}</div>
      </div>
      <span class="injury-arrow">›</span>
    `;
    el.onclick = () => startInjury(i);
    list.appendChild(el);
  });
}

// ── Injury Steps ───────────────────────────────────────────
function startInjury(i) {
  // Guard: invalid index or missing data
  const list = injuries();
  if (!list || i < 0 || i >= list.length || !list[i]) {
    console.warn('startInjury: invalid index', i);
    return;
  }
  currentInjury = list[i];
  currentStep = 0;
  document.getElementById('stepInjuryName').textContent = currentInjury.icon + ' ' + currentInjury.name;
  renderStep();
  showScreen('stepScreen');
}

function renderStep() {
  const steps = currentInjury.steps;
  const step = steps[currentStep];
  const total = steps.length;
  const t = T[lang];

  // Progress
  document.getElementById('progressText').textContent = `Step ${currentStep + 1} of ${total}`;
  document.getElementById('progressPct').textContent = Math.round((currentStep / total) * 100) + '% done ✓';

  // Dots
  const dots = document.getElementById('dotsRow');
  dots.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i < currentStep ? ' done' : i === currentStep ? ' current' : '');
    dots.appendChild(d);
  }

  // Step content
  document.getElementById('stepBadge').textContent = `STEP ${currentStep + 1}`;
  document.getElementById('bigInstruction').textContent = step.instruction;
  document.getElementById('normalTreatment').textContent = step.normal;
  document.getElementById('homeTreatment').textContent = step.remedy;
  document.getElementById('nextBtnText').textContent = currentStep === total - 1 ? t.allDone : t.nextStep;

  // Show severity button only on last step
  const sevBtn = document.getElementById('sevInlineBtn');
  document.getElementById('sevInlineBtnText').textContent = t.sevCheck;
  sevBtn.classList.toggle('visible', currentStep === total - 1);
}

function nextStep() {
  if (currentStep < currentInjury.steps.length - 1) {
    currentStep++;
    renderStep();
  } else {
    showScreen('doneScreen');
  }
}

function goHome() {
  showScreen('homeScreen');
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

// ── Severity Screen ────────────────────────────────────────
function showSeverity() {
  const sevQs = getSevQs(currentInjury.name, lang);
  currentSevQs = sevQs;
  sevAnswers = new Array(sevQs.length).fill(null);

  const container = document.getElementById('sevQuestions');
  container.innerHTML = '';
  container.style.display = 'block';

  sevQs.forEach((q, qi) => {
    const block = document.createElement('div');
    block.className = 'sev-question';
    block.innerHTML = `<div class="sev-q-text">${qi + 1}. ${q.q}</div>`;

    const opts = document.createElement('div');
    opts.className = 'sev-options';

    q.opts.forEach((opt, oi) => {
      const btn = document.createElement('button');
      btn.className = 'sev-opt';
      btn.textContent = opt;
      btn.onclick = () => {
        sevAnswers[qi] = q.scores[oi];
        block.querySelectorAll('.sev-opt').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        if (sevAnswers.every(a => a !== null)) {
          document.getElementById('sevSubmitBtn').style.display = 'block';
        }
      };
      opts.appendChild(btn);
    });

    block.appendChild(opts);
    container.appendChild(block);
  });

  document.getElementById('sevResult').className = 'sev-result';
  document.getElementById('sevSubmitBtn').style.display = 'none';
  showScreen('severityScreen');
}

function calcSeverity() {
  const { level, cls, msg, hospital, sl } = calcSeverityLevel(sevAnswers, currentSevQs.length, lang);
  const result = document.getElementById('sevResult');
  result.innerHTML = `
    <div class="sev-badge ${cls}">${level}</div>
    <div class="sev-result-title">${sl.rec}</div>
    <div class="sev-result-text">${msg}</div>
    ${hospital ? `<button class="hospital-btn btn btn-danger" onclick="openMaps()">${sl.findHosp}</button>` : ''}
    <button class="back-home-btn btn" onclick="goHome()">${sl.backHome}</button>
  `;
  result.className = 'sev-result show';
  document.getElementById('sevSubmitBtn').style.display = 'none';
  document.getElementById('sevQuestions').style.display = 'none';
  result.scrollIntoView({ behavior: 'smooth' });
}

// ── Utility ────────────────────────────────────────────────
function call108() { window.location.href = 'tel:108'; }
function openMaps() {
  try {
    const w = window.open('https://www.google.com/maps/search/hospitals+near+me', '_blank');
    if (!w) throw new Error('Popup blocked');
  } catch (e) {
    // Fallback: navigate in same tab if popup blocked
    window.location.href = 'https://www.google.com/maps/search/hospitals+near+me';
  }
}

// ── Init ───────────────────────────────────────────────────
renderInjuries();
document.getElementById('voiceFabWrap').style.display = 'flex';
