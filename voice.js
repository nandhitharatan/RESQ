// ─── voice.js ─────────────────────────────────────────────
// Voice input (Web Speech API) and Read Aloud functionality
// Fixed: TTS fallback for Telugu/Hindi + reliable voice loading
// ─────────────────────────────────────────────────────────

let recognition = null;

// Voice keyword → injury index map (expanded to all 20 injuries)
const voiceKeywords = {
  // EN
  burns:0, fire:0, hot:0, burnt:0,
  cuts:1, bleeding:1, cut:1, blood:1,
  fracture:2, broken:2, bone:2,
  chok:3, throat:3, breath:3,
  fever:4, temperature:4,
  sting:5, insect:5, bee:5,
  nose:6, nosebleed:6,
  head:7, fall:7, concussion:7,
  cardiac:8, cpr:8, pulse:8,
  severe:9, tourniquet:9,
  stroke:10, fast:10, slurred:10,
  anaphylaxis:11, epipen:11,
  heart:12, chest:12, jaw:12,
  seizure:13, convulsion:13, epilepsy:13,
  snake:14, venom:14, cobra:14,
  heat:15, sunstroke:15, heatstroke:15,
  pregnant:16, labor:16, labour:16,
  febrile:17, child:17, baby:17,
  poison:18, overdose:18, toxic:18,
  faint:19, fainted:19, collapsed:19,
  // Telugu
  'కాలిన':0,'మంట':0,'కోత':1,'రక్తస్రావ':1,
  'ఎముక':2,'గొంతు':3,'జ్వరం':4,'కీటక':5,
  'ముక్కు':6,'తల':7,'గుండె':8,'స్ట్రోక్':10,
  'మూర్ఛ':13,'పాము':14,'హీట్':15,'విషం':18,
  'స్పృహ':19,
  // Hindi
  'जलन':0,'जला':0,'कट':1,'खून':1,
  'हड्डी':2,'गला':3,'बुखार':4,'कीड़':5,
  'नाक':6,'सिर':7,'दिल':8,'स्ट्रोक':10,
  'दौरा':13,'सांप':14,'लू':15,'जहर':18,
  'बेहोश':19
};

function toggleVoice() {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    alert('Voice input needs Chrome browser.');
    return;
  }
  if (recognition) {
    recognition.stop();
    recognition = null;
    resetVoiceBtn();
    return;
  }

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SR();
  recognition.lang = lang === 'te' ? 'te-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN';
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;

  recognition.onstart = () => {
    document.getElementById('voiceBtn').classList.add('listening');
    document.getElementById('voiceBtnText').textContent = '🔴 Listening...';
  };

  recognition.onresult = (e) => {
    let matched = false;
    for (let alt = 0; alt < e.results[0].length; alt++) {
      const text = e.results[0][alt].transcript.toLowerCase();
      for (const [keyword, idx] of Object.entries(voiceKeywords)) {
        if (text.includes(keyword.toLowerCase())) {
          startInjury(idx);
          matched = true;
          break;
        }
      }
      if (matched) break;
    }
    if (!matched) {
      const label = document.getElementById('voiceBtnText');
      if (label) label.textContent = '🎙️ Not recognised';
      setTimeout(resetVoiceBtn, 2000);
      return;
    }
    resetVoiceBtn();
  };

  recognition.onerror = (e) => {
    const label = document.getElementById('voiceBtnText');
    if (e.error === 'not-allowed') {
      if (label) label.textContent = '🎙️ Mic blocked';
    } else if (e.error === 'network') {
      if (label) label.textContent = '🎙️ Network error';
    } else {
      if (label) label.textContent = '🎙️ Try again';
    }
    setTimeout(resetVoiceBtn, 2000);
  };

  recognition.onend = () => resetVoiceBtn();
  recognition.start();
}

function resetVoiceBtn() {
  recognition = null;
  const btn = document.getElementById('voiceBtn');
  const label = document.getElementById('voiceBtnText');
  if (btn) btn.classList.remove('listening');
  if (label) label.textContent = T[lang] ? T[lang].tapSpeak : 'Tap to Speak';
}

// ── Read Aloud ─────────────────────────────────────────────
function speakStep() {
  if (!window.speechSynthesis) return;
  if (!currentInjury || !currentInjury.steps[currentStep]) return;

  window.speechSynthesis.cancel();

  const step = currentInjury.steps[currentStep];
  const text = step.instruction + '. ' + step.normal + '. ' + step.remedy;

  function _speak() {
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.85;
    utter.pitch = 0.9;

    const voices = window.speechSynthesis.getVoices();

    if (lang === 'te') {
      // te-IN is almost never available on desktop Chrome
      // Falls back to hi-IN (still reads the text), then en-IN
      const voice =
        voices.find(v => v.lang === 'te-IN') ||
        voices.find(v => v.lang.startsWith('te')) ||
        voices.find(v => v.lang === 'hi-IN') ||
        voices.find(v => v.lang.startsWith('hi')) ||
        voices.find(v => v.lang === 'en-IN') ||
        voices.find(v => v.lang.startsWith('en')) ||
        null;
      if (voice) { utter.voice = voice; utter.lang = voice.lang; }
      else { utter.lang = 'hi-IN'; }

    } else if (lang === 'hi') {
      const voice =
        voices.find(v => v.lang === 'hi-IN') ||
        voices.find(v => v.lang.startsWith('hi')) ||
        voices.find(v => v.lang === 'en-IN') ||
        voices.find(v => v.lang.startsWith('en')) ||
        null;
      if (voice) { utter.voice = voice; utter.lang = voice.lang; }
      else { utter.lang = 'hi-IN'; }

    } else {
      const voice =
        voices.find(v => v.lang === 'en-IN') ||
        voices.find(v => v.lang === 'en-GB') ||
        voices.find(v => v.lang === 'en-US') ||
        voices.find(v => v.lang.startsWith('en')) ||
        null;
      if (voice) { utter.voice = voice; utter.lang = voice.lang; }
      else { utter.lang = 'en-IN'; }
    }

    window.speechSynthesis.speak(utter);
  }

  // Poll every 100ms — more reliable than onvoiceschanged
  const existing = window.speechSynthesis.getVoices();
  if (existing.length > 0) {
    _speak();
  } else {
    let attempts = 0;
    const poll = setInterval(() => {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0 || attempts > 15) {
        clearInterval(poll);
        _speak();
      }
      attempts++;
    }, 100);
  }
}