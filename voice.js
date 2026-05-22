// ─── voice.js ─────────────────────────────────────────────
// Voice input (Web Speech API) and Read Aloud functionality
// ─────────────────────────────────────────────────────────

let recognition = null;

// Voice keyword → injury index map
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
  // Telugu
  'కాలిన':0,'మంట':0,'కోత':1,'రక్తస్రావ':1,
  'ఎముక':2,'జ్వరం':4,'కీటక':5,'ముక్కు':6,'తల':7,
  // Hindi
  'जलन':0,'जला':0,'कट':1,'खून':1,
  'हड्डी':2,'बुखार':4,'कीड़':5,'नाक':6,'सिर':7
};

function toggleVoice() {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    alert('Voice input needs Chrome browser.');
    return;
  }
  // If already listening, stop
  if (recognition) {
    recognition.stop();
    recognition = null;
    resetVoiceBtn();
    return;
  }

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SR();
  recognition.lang = lang === 'te' ? 'te-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN';

  recognition.onstart = () => {
    document.getElementById('voiceBtn').classList.add('listening');
    document.getElementById('voiceBtnText').textContent = '🔴 Listening...';
  };

  recognition.onresult = (e) => {
    const text = e.results[0][0].transcript.toLowerCase();
    for (const [keyword, idx] of Object.entries(voiceKeywords)) {
      if (text.includes(keyword.toLowerCase())) {
        startInjury(idx);
        break;
      }
    }
    resetVoiceBtn();
  };

  recognition.onerror = (e) => {
    // Show user-friendly message for common errors
    const label = document.getElementById('voiceBtnText');
    if (e.error === 'not-allowed') {
      if (label) label.textContent = '🎙️ Mic blocked';
    } else if (e.error === 'network') {
      if (label) label.textContent = '🎙️ Network error';
    }
    // Reset button after 2s so user can try again
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
  if (label) label.textContent = T[lang].tapSpeak;
}

// Read aloud current step — always cancels previous speech first
function speakStep() {
  if (!window.speechSynthesis) return;
  // Guard: no injury loaded
  if (!currentInjury || !currentInjury.steps[currentStep]) return;

  // Always cancel ongoing speech before starting new
  window.speechSynthesis.cancel();

  const step = currentInjury.steps[currentStep];
  const targetLang = lang === 'te' ? 'te-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN';
  const text = step.instruction + '. ' + step.normal + '. ' + step.remedy;

  function _speak() {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = targetLang;
    utter.rate = 0.9;    // Moderate pace
    utter.pitch = 0.95;  // Slightly calm pitch

    // Try to pick a natural-sounding, calm voice
    const voices = window.speechSynthesis.getVoices();
    const preferred =
      voices.find(v => v.lang === targetLang && /natural|samantha|karen|moira|daniel|rishi|veena|lekha|kalpana/i.test(v.name)) ||
      voices.find(v => v.lang === targetLang && !v.name.toLowerCase().includes('compact')) ||
      voices.find(v => v.lang.startsWith(targetLang.split('-')[0])) ||
      null;

    if (preferred) utter.voice = preferred;
    window.speechSynthesis.speak(utter);
  }

  // Voices may not be loaded yet on first call
  if (window.speechSynthesis.getVoices().length > 0) {
    _speak();
  } else {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null;
      _speak();
    };
  }
}
