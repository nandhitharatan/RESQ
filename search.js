// ─── search.js ────────────────────────────────────────────
// Smart NLP keyword search for injury filtering
// ─────────────────────────────────────────────────────────

// Maps keyword patterns → injury index (same order as injuriesData)
// 0=Burns, 1=Cuts, 2=Fracture, 3=Choking, 4=Fever, 5=Insect Sting, 6=Nosebleed, 7=Head Injury
const nlpKeywords = [
  { idx:0, terms:[
    'burn','burnt','burning','fire','flame','hot','heat','scald','blister','smoke','charred','boiling','hot liquid','hot oil','sunburn',
    'కాలిన','మంట','వేడి','అగ్ని','నిప్పు','కాలిపోయింది','బొబ్బ',
    'जलन','जला','जली','आग','गर्म','छाला','झुलसना'
  ]},
  { idx:1, terms:[
    'cut','cuts','bleed','bleeding','blood','wound','scratch','gash','slice','knife','glass','laceration','finger cut','open wound',
    'కోత','రక్తస్రావ','రక్తం','గాయం','గీత','కత్తి',
    'कट','खून','रक्त','घाव','खरोंच','कट गया'
  ]},
  { idx:2, terms:[
    'fracture','broken','bone','crack','snap','twisted','arm broke','leg broke','swollen bone','broken arm',
    'ఎముక','విరుపు','విరిగిన','కదపలేను',
    'हड्डी','टूटी','फ्रैक्चर','टूट गई'
  ]},
  { idx:3, terms:[
    'chok','choking','cant breathe','cannot breathe','no breath','blocked throat','food stuck','swallowed','gasping','suffocating',
    'గొంతు','శ్వాస','అడ్డు పడటం','ఊపిరి రాలేదు',
    'गला','सांस नहीं','गला घुट','दम घुट'
  ]},
  { idx:4, terms:[
    'fever','temperature','hot body','chills','shiver','high temp','feverish','flu','malaria',
    'జ్వరం','వేడి','చలి','అధిక జ్వరం',
    'बुखार','तापमान','ठंड लग','तेज बुखार'
  ]},
  { idx:5, terms:[
    'sting','stung','bee','wasp','ant','insect','bug bite','mosquito','spider','scorpion','bite','bitten','venom',
    'కుట్టు','తేనెటీగ','కందిరీగ','కీటక','కాటు',
    'काटना','डंक','मधुमक्खी','कीड़ा','काट लिया'
  ]},
  { idx:6, terms:[
    'nosebleed','nose bleed','bleeding nose','nose blood','blood from nose','bloody nose','nostril',
    'ముక్కు','ముక్కు రక్తస్రావం','ముక్కు రక్తం',
    'नाक','नाक से खून','नकसीर'
  ]},
  { idx:7, terms:[
    'head','head injury','concussion','fell','fallen','knocked head','hit head','bump head','skull','dizzy after fall','unconscious','fainted',
    'తల','తల గాయం','పడటం','స్పృహ కోల్పోయింది',
    'सिर','सिर की चोट','गिरना','बेहोश','सिर में चोट'
  ]}
];

// Find injury index from a natural language query
function matchInjuryIndex(query) {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  for (const group of nlpKeywords) {
    for (const term of group.terms) {
      if (q.includes(term.toLowerCase())) return group.idx;
    }
  }
  return null;
}

// Filter injury list in real time
function filterInjuries(query) {
  const clearBtn = document.getElementById('searchClear');
  const noResults = document.getElementById('noResults');
  if (clearBtn) clearBtn.style.display = query.length > 0 ? 'flex' : 'none';

  const list = document.getElementById('injuryList');
  const items = list.querySelectorAll('.injury-item');

  if (!query.trim()) {
    items.forEach(el => el.classList.remove('hidden'));
    if (noResults) noResults.style.display = 'none';
    return;
  }

  const matchedIdx = matchInjuryIndex(query);
  let anyVisible = false;

  items.forEach((el, i) => {
    const text = el.textContent.toLowerCase();
    const directMatch = text.includes(query.toLowerCase());
    const nlpMatch = matchedIdx !== null && i === matchedIdx;

    if (nlpMatch || directMatch) {
      el.classList.remove('hidden');
      anyVisible = true;
    } else {
      el.classList.add('hidden');
    }
  });

  if (noResults) noResults.style.display = anyVisible ? 'none' : 'block';
}

// Clear search bar
function clearSearch() {
  const input = document.getElementById('smartSearch');
  if (input) {
    input.value = '';
    filterInjuries('');
    input.focus();
  }
}

// Update placeholder text based on selected language
function updateSearchPlaceholder() {
  const placeholders = {
    en: "e.g. burnt my hand, can't breathe...",
    te: "ఉదా: చేయి కాలింది, శ్వాస రావడం లేదు...",
    hi: "जैसे: हाथ जल गया, सांस नहीं आ रही..."
  };
  const input = document.getElementById('smartSearch');
  if (input) input.placeholder = placeholders[lang] || placeholders.en;
  clearSearch();
}
