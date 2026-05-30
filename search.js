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
  ]},
  { idx:8, terms:[
    'cardiac arrest','heart stopped','no pulse','cpr','not breathing','unresponsive','collapsed','heart failure',
    'గుండె ఆగింది','నాడి లేదు','స్పందన లేదు','సిపిఆర్',
    'कार्डियक अरेस्ट','दिल रुक गया','नब्ज़ नहीं','बेहोश गिरा','सीपीआर'
  ]},
  { idx:9, terms:[
    'severe bleeding','heavy bleeding','arterial bleed','blood spurting','blood soaking','uncontrolled bleeding','blood wont stop','tourniquet',
    'తీవ్ర రక్తస్రావం','రక్తం ఆగట్లేదు','భారీ రక్తస్రావం',
    'गंभीर खून','खून नहीं रुक रहा','भारी रक्तस्राव','खून बह रहा'
  ]},
  { idx:10, terms:[
    'stroke','face drooping','arm weak','slurred speech','fast test','sudden numbness','confusion suddenly','brain attack',
    'స్ట్రోక్','ముఖం వంగింది','చేయి బలహీనం','మాట అస్పష్టం',
    'स्ट्रोक','चेहरा झुक','बांह कमज़ोर','बोली अस्पष्ट','ब्रेन अटैक'
  ]},
  { idx:11, terms:[
    'anaphylaxis','allergic reaction','throat swelling','throat closing','epipen','severe allergy','hives swelling','can\'t breathe allergy',
    'అనాఫైలాక్సిస్','గొంతు వాపు','తీవ్ర అలర్జీ','ఎపిపెన్',
    'एनाफिलेक्सिस','गला सूज','गंभीर एलर्जी','एपिपेन','गले में सूजन'
  ]},
  { idx:12, terms:[
    'heart attack','chest pain','left arm pain','jaw pain','chest tightness','heart pain','cardiac','myocardial',
    'గుండె పోటు','ఛాతీ నొప్పి','ఎడమ చేయి నొప్పి',
    'हार्ट अटैक','दिल का दौरा','सीने में दर्द','बांह में दर्द','जबड़े में दर्द'
  ]},
  { idx:13, terms:[
    'seizure','epilepsy','convulsion','shaking','fit','fits','twitching','jerking','epileptic',
    'మూర్ఛ','మూర్ఛపోవడం','కంపనాలు','పడిపోవడం',
    'दौरा','मिर्गी','ऐंठन','कंपकंपी','झटके'
  ]},
  { idx:14, terms:[
    'snake bite','snakebite','snake','bitten by snake','cobra','viper','krait','venom snake','snake attack',
    'పాము కాటు','పాము','కాటు','విషపాము',
    'सांप','सांप का काटना','नाग','सांप ने काटा','विष सांप'
  ]},
  { idx:15, terms:[
    'heat stroke','heatstroke','sunstroke','overheating','too hot','no sweating','hot confused','heat exhaustion','summer heat',
    'హీట్ స్ట్రోక్','ఎండ దెబ్బ','అధిక వేడి','చెమట రాకపోవడం',
    'हीट स्ट्रोक','लू','गर्मी','लू लगना','धूप में बेहोश'
  ]},
  { idx:16, terms:[
    'pregnancy emergency','labor','labour','pregnant bleeding','pregnant pain','water broke','contractions','maternal',
    'గర్భకాల అత్యవసరం','ప్రసవం','గర్భిణీ రక్తస్రావం','సంకోచాలు',
    'गर्भावस्था','प्रसव','गर्भ में खून','संकुचन','महिला प्रसव'
  ]},
  { idx:17, terms:[
    'febrile seizure','child seizure','baby seizure','toddler convulsion','child fever fit','infant convulsion',
    'పిల్లల జ్వర మూర్ఛ','పిల్లలకు మూర్ఛ','బాల మూర్ఛ',
    'बच्चे को दौरा','ज्वर दौरा','बच्चे की मिर्गी','बुखार में दौरा'
  ]},
  { idx:18, terms:[
    'poison','poisoning','overdose','swallowed chemical','ate something','food poisoning','toxic','ingested','accidental ingestion',
    'విషప్రయోగం','విషం తిన్నారు','అధిక మోతాదు','ఫుడ్ పాయిజనింగ్',
    'ज़हर','जहर खाना','ओवरडोज़','ज़हर निगला','खाद्य विषाक्तता'
  ]},
  { idx:19, terms:[
    'fainted','fainting','passed out','lost consciousness','collapsed','syncope','dizzy fell','blackout',
    'స్పృహ తప్పింది','పడిపోయారు','స్పృహ కోల్పోవడం','తల తిరిగి పడ్డారు',
    'बेहोश','बेहोशी','होश खोया','चक्कर आकर गिरा','मूर्छा'
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
