// ─── severity.js ─────────────────────────────────────────
// Severity questions (EN / TE / HI) and severity calculation
// ─────────────────────────────────────────────────────────

const sevQsMap = {
  "Burns":[
    { q:"How large is the burn?", opts:["Small (coin-sized)","Palm-sized","Larger than palm"], scores:[0,1,2] },
    { q:"What does the skin look like?", opts:["Red and sore","Blistered","White, black or charred"], scores:[0,1,2] },
    { q:"Where is the burn?", opts:["Arm or leg","Chest or back","Face, hands or genitals"], scores:[0,1,2] },
    { q:"Is breathing affected by smoke or fumes?", opts:["No","Slightly","Yes, struggling"], scores:[0,1,2] }
  ],
  "Cuts":[
    { q:"How long or deep is the cut?", opts:["Small scratch","About 1–2 cm","More than 2 cm or deep"], scores:[0,1,2] },
    { q:"Is bleeding controlled?", opts:["Yes, stopped","Slowing down","Won't stop"], scores:[0,1,2] },
    { q:"Can you see tissue inside?", opts:["No","Slightly","Yes clearly"], scores:[0,1,2] },
    { q:"How did it happen?", opts:["Clean blade","Rusty or dirty object","Animal bite or puncture"], scores:[0,1,2] }
  ],
  "Fracture":[
    { q:"Can they move the limb at all?", opts:["Slightly","Very painful to try","Not at all"], scores:[0,1,2] },
    { q:"Is there visible deformity?", opts:["No","Slight swelling only","Bone visible or severe twist"], scores:[0,1,2] },
    { q:"Which bone area?", opts:["Finger or toe","Arm or ankle","Leg, spine or pelvis"], scores:[0,1,2] },
    { q:"Did they hear or feel a crack?", opts:["No","Unsure","Yes, clearly"], scores:[0,1,2] }
  ],
  "Choking":[
    { q:"Can they make any sound?", opts:["Speaking or coughing","Weak sounds only","Silent, no sound"], scores:[0,1,2] },
    { q:"Are they conscious?", opts:["Fully awake","Confused or dizzy","Losing consciousness"], scores:[0,1,2] },
    { q:"Skin color around lips?", opts:["Normal","Pale","Blue or grey"], scores:[0,1,2] },
    { q:"How long have they been choking?", opts:["Under 30 seconds","1–2 minutes","More than 2 minutes"], scores:[0,1,2] }
  ],
  "Fever":[
    { q:"What is the temperature?", opts:["Below 38.5°C","38.5–40°C","Above 40°C"], scores:[0,1,2] },
    { q:"How long has the fever lasted?", opts:["Less than 1 day","1–3 days","More than 3 days"], scores:[0,1,2] },
    { q:"Any other symptoms?", opts:["Just fever","Headache or body ache","Rash, seizure or confusion"], scores:[0,1,2] },
    { q:"Can they drink fluids?", opts:["Yes, normally","With difficulty","No, vomiting everything"], scores:[0,1,2] }
  ],
  "Insect Sting":[
    { q:"Is the stinger fully removed?", opts:["Yes","Partially","Still inside"], scores:[0,1,2] },
    { q:"Any allergic signs?", opts:["None","Mild itching or redness","Swelling, hives or breathing issues"], scores:[0,1,2] },
    { q:"How many stings?", opts:["One","2–5","More than 5"], scores:[0,1,2] },
    { q:"Known insect allergy?", opts:["No","Not sure","Yes"], scores:[0,1,2] }
  ],
  "Nosebleed":[
    { q:"How long has it been bleeding?", opts:["Under 5 minutes","5–20 minutes","More than 20 minutes"], scores:[0,1,2] },
    { q:"How heavy is the flow?", opts:["Light drip","Moderate flow","Heavy or clots"], scores:[0,1,2] },
    { q:"Was there a head injury before this?", opts:["No","Minor bump","Yes, significant hit"], scores:[0,1,2] },
    { q:"Does this happen frequently?", opts:["Rarely","Sometimes","Very often"], scores:[0,1,2] }
  ],
  "Head Injury":[
    { q:"Are they conscious?", opts:["Fully awake","Confused or drowsy","Unconscious"], scores:[0,1,2] },
    { q:"Did they lose consciousness?", opts:["No","Briefly (under 1 min)","Yes, over 1 minute"], scores:[0,1,2] },
    { q:"Any vomiting, seizure or unequal pupils?", opts:["None","One of these","Two or more"], scores:[0,1,2] },
    { q:"How severe was the impact?", opts:["Minor bump","Moderate fall","High speed or hard impact"], scores:[0,1,2] }
  ]
};

const sevQsMap_te = {
  "కాలిన గాయాలు":[
    { q:"కాలిన గాయం ఎంత పెద్దది?", opts:["చిన్నది (నాణెం పరిమాణం)","అరచేయి పరిమాణం","అరచేయి కంటే పెద్దది"], scores:[0,1,2] },
    { q:"చర్మం ఎలా కనిపిస్తుంది?", opts:["ఎర్రగా మరియు నొప్పిగా","బొబ్బలు వచ్చాయి","తెల్లగా, నల్లగా లేదా కాలినట్టు"], scores:[0,1,2] },
    { q:"కాలిన గాయం ఎక్కడ ఉంది?", opts:["చేయి లేదా కాలు","ఛాతీ లేదా వీపు","ముఖం, చేతులు లేదా జననాంగాలు"], scores:[0,1,2] },
    { q:"పొగ లేదా వాయువు వల్ల శ్వాసకు ఇబ్బంది ఉందా?", opts:["లేదు","కొంచెం","అవును, కష్టంగా ఉంది"], scores:[0,1,2] }
  ],
  "కోతలు":[
    { q:"కోత ఎంత పొడవు లేదా లోతు?", opts:["చిన్న గీత","సుమారు 1–2 సెం.మీ","2 సెం.మీ కంటే ఎక్కువ లేదా లోతుగా"], scores:[0,1,2] },
    { q:"రక్తస్రావం ఆగిందా?", opts:["అవును, ఆగింది","నెమ్మదిగా తగ్గుతుంది","ఆగడం లేదు"], scores:[0,1,2] },
    { q:"లోపల కణజాలం కనిపిస్తుందా?", opts:["లేదు","కొంచెం","స్పష్టంగా కనిపిస్తుంది"], scores:[0,1,2] },
    { q:"ఎలా జరిగింది?", opts:["శుభ్రమైన బ్లేడ్","తుప్పు లేదా మురికి వస్తువు","జంతువు కాటు లేదా గుచ్చుకోవడం"], scores:[0,1,2] }
  ],
  "ఎముక విరుపు":[
    { q:"అవయవాన్ని కదపగలరా?", opts:["కొంచెం","ప్రయత్నిస్తే చాలా నొప్పి","అస్సలు కదపలేరు"], scores:[0,1,2] },
    { q:"కనిపించే వికృతి ఉందా?", opts:["లేదు","కొంచెం వాపు మాత్రమే","ఎముక కనిపిస్తుంది లేదా తీవ్రంగా వంగింది"], scores:[0,1,2] },
    { q:"ఏ ఎముక ప్రాంతం?", opts:["వేలు లేదా కాలి వేలు","చేయి లేదా మడమ","కాలు, వెన్నెముక లేదా తొడ"], scores:[0,1,2] },
    { q:"పగిలిన శబ్దం వినిపించిందా?", opts:["లేదు","ఖచ్చితంగా తెలీదు","అవును, స్పష్టంగా"], scores:[0,1,2] }
  ],
  "గొంతు అడ్డు పడటం":[
    { q:"ఏదైనా శబ్దం చేయగలరా?", opts:["మాట్లాడుతున్నారు లేదా దగ్గుతున్నారు","బలహీనమైన శబ్దాలు మాత్రమే","నిశ్శబ్దం, శబ్దం లేదు"], scores:[0,1,2] },
    { q:"స్పృహలో ఉన్నారా?", opts:["పూర్తిగా మెలకువగా","గందరగోళంగా లేదా తలతిరుగుతుంది","స్పృహ కోల్పోతున్నారు"], scores:[0,1,2] },
    { q:"పెదవుల చుట్టూ చర్మ రంగు?", opts:["సాధారణంగా","పాలిపోయినట్టు","నీలం లేదా బూడిద రంగు"], scores:[0,1,2] },
    { q:"ఎంత సేపటి నుండి అడ్డు పడింది?", opts:["30 సెకండ్ల లోపు","1–2 నిమిషాలు","2 నిమిషాలకు మించి"], scores:[0,1,2] }
  ],
  "జ్వరం":[
    { q:"ఉష్ణోగ్రత ఎంత?", opts:["38.5°C కంటే తక్కువ","38.5–40°C","40°C కంటే ఎక్కువ"], scores:[0,1,2] },
    { q:"జ్వరం ఎంత కాలం ఉంది?", opts:["1 రోజు కంటే తక్కువ","1–3 రోజులు","3 రోజులకు మించి"], scores:[0,1,2] },
    { q:"ఇతర లక్షణాలు ఏమైనా ఉన్నాయా?", opts:["జ్వరం మాత్రమే","తలనొప్పి లేదా శరీర నొప్పి","చర్మ దద్దుర్లు, మూర్ఛ లేదా గందరగోళం"], scores:[0,1,2] },
    { q:"నీళ్ళు తాగగలరా?", opts:["అవును, సాధారణంగా","కష్టంగా","లేదు, వాంతి అవుతుంది"], scores:[0,1,2] }
  ],
  "కీటక కుట్టు":[
    { q:"ముల్లు పూర్తిగా తీసివేయబడిందా?", opts:["అవును","పాక్షికంగా","ఇంకా లోపల ఉంది"], scores:[0,1,2] },
    { q:"అలర్జీ సంకేతాలు ఏమైనా ఉన్నాయా?", opts:["ఏమీ లేదు","తేలికపాటి దురద లేదా ఎరుపు","వాపు, దద్దుర్లు లేదా శ్వాస సమస్యలు"], scores:[0,1,2] },
    { q:"ఎన్ని కుట్లు?", opts:["ఒకటి","2–5","5 కంటే ఎక్కువ"], scores:[0,1,2] },
    { q:"కీటక అలర్జీ తెలిసిన చరిత్ర ఉందా?", opts:["లేదు","ఖచ్చితంగా తెలీదు","అవును"], scores:[0,1,2] }
  ],
  "ముక్కు రక్తస్రావం":[
    { q:"ఎంత సేపు రక్తం వస్తుంది?", opts:["5 నిమిషాల లోపు","5–20 నిమిషాలు","20 నిమిషాలకు మించి"], scores:[0,1,2] },
    { q:"ప్రవాహం ఎంత ఎక్కువగా ఉంది?", opts:["తేలికపాటి నీటుగా","మధ్యస్థ ప్రవాహం","అతిగా లేదా గడ్డలు"], scores:[0,1,2] },
    { q:"ముందుగా తల గాయం జరిగిందా?", opts:["లేదు","చిన్న తగలడం","అవును, తీవ్రమైన దెబ్బ"], scores:[0,1,2] },
    { q:"ఇది తరచుగా జరుగుతుందా?", opts:["అరుదుగా","కొన్నిసార్లు","చాలా తరచుగా"], scores:[0,1,2] }
  ],
  "తల గాయం":[
    { q:"స్పృహలో ఉన్నారా?", opts:["పూర్తిగా మెలకువగా","గందరగోళంగా లేదా నిద్రమత్తుగా","స్పృహ లేదు"], scores:[0,1,2] },
    { q:"స్పృహ కోల్పోయారా?", opts:["లేదు","తక్కువ సేపు (1 నిమిషం లోపు)","అవును, 1 నిమిషం కంటే ఎక్కువ"], scores:[0,1,2] },
    { q:"వాంతి, మూర్ఛ లేదా అసమాన కళ్ళు ఉన్నాయా?", opts:["ఏమీ లేదు","వాటిలో ఒకటి","రెండు లేదా అంతకంటే ఎక్కువ"], scores:[0,1,2] },
    { q:"దెబ్బ ఎంత తీవ్రంగా ఉంది?", opts:["చిన్న తగలడం","మధ్యస్థ పడటం","అధిక వేగంతో లేదా తీవ్రమైన దెబ్బ"], scores:[0,1,2] }
  ]
};

const sevQsMap_hi = {
  "జలना":[
    { q:"जला हुआ हिस्सा कितना बड़ा है?", opts:["छोटा (सिक्के जितना)","हथेली जितना","हथेली से बड़ा"], scores:[0,1,2] },
    { q:"त्वचा कैसी दिखती है?", opts:["लाल और दर्दनाक","फफोले पड़ गए हैं","सफेद, काली या जली हुई"], scores:[0,1,2] },
    { q:"जलन कहाँ है?", opts:["हाथ या पैर","छाती या पीठ","चेहरा, हाथ या जननांग"], scores:[0,1,2] },
    { q:"धुएं या गैस से सांस लेने में दिक्कत है?", opts:["नहीं","थोड़ी","हाँ, काफी मुश्किल हो रही है"], scores:[0,1,2] }
  ],
  "कट लगना":[
    { q:"कट कितना लंबा या गहरा है?", opts:["छोटी खरोंच","करीब 1–2 सेमी","2 सेमी से ज़्यादा या गहरा"], scores:[0,1,2] },
    { q:"खून बंद हुआ?", opts:["हाँ, रुक गया","धीरे-धीरे कम हो रहा है","रुक नहीं रहा"], scores:[0,1,2] },
    { q:"अंदर का मांस दिख रहा है?", opts:["नहीं","थोड़ा-सा","हाँ, साफ दिख रहा है"], scores:[0,1,2] },
    { q:"कैसे हुआ?", opts:["साफ ब्लेड से","जंग लगी या गंदी चीज़ से","जानवर का काटना या नुकीली चीज़"], scores:[0,1,2] }
  ],
  "हड्डी टूटना":[
    { q:"क्या वो अंग हिला सकते हैं?", opts:["थोड़ा-सा","कोशिश करने पर बहुत दर्द","बिल्कुल नहीं"], scores:[0,1,2] },
    { q:"कोई दिखाई देने वाली विकृति है?", opts:["नहीं","हल्की सूजन ही","हड्डी दिख रही है या भारी मुड़ाव"], scores:[0,1,2] },
    { q:"कौन सी हड्डी का हिस्सा?", opts:["उंगली या पैर की उंगली","बांह या टखना","टांग, रीढ़ या कमर"], scores:[0,1,2] },
    { q:"क्या कड़क आवाज़ सुनाई या महसूस हुई?", opts:["नहीं","पक्का नहीं","हाँ, साफ"], scores:[0,1,2] }
  ],
  "गला घुटना":[
    { q:"क्या वो कोई आवाज़ निकाल सकते हैं?", opts:["बोल या खांस सकते हैं","कमज़ोर आवाज़ें ही","चुप, कोई आवाज़ नहीं"], scores:[0,1,2] },
    { q:"क्या वो होश में हैं?", opts:["पूरी तरह जाग रहे हैं","भ्रमित या चक्कर आ रहा है","होश खो रहे हैं"], scores:[0,1,2] },
    { q:"होंठों के आसपास की त्वचा का रंग?", opts:["सामान्य","पीला","नीला या स्लेटी"], scores:[0,1,2] },
    { q:"कितने समय से गला घुट रहा है?", opts:["30 सेकंड से कम","1–2 मिनट","2 मिनट से ज़्यादा"], scores:[0,1,2] }
  ],
  "बुखार":[
    { q:"तापमान क्या है?", opts:["38.5°C से कम","38.5–40°C","40°C से ऊपर"], scores:[0,1,2] },
    { q:"बुखार कितने समय से है?", opts:["1 दिन से कम","1–3 दिन","3 दिन से ज़्यादा"], scores:[0,1,2] },
    { q:"कोई और लक्षण हैं?", opts:["सिर्फ बुखार","सिरदर्द या बदनदर्द","चकत्ते, दौरे या भ्रम"], scores:[0,1,2] },
    { q:"क्या वो पानी पी सकते हैं?", opts:["हाँ, सामान्य रूप से","मुश्किल से","नहीं, सब उलटी हो जाता है"], scores:[0,1,2] }
  ],
  "कीड़े का काटना":[
    { q:"क्या डंक पूरी तरह निकल गया?", opts:["हाँ","आधा-अधूरा","अभी भी अंदर है"], scores:[0,1,2] },
    { q:"कोई एलर्जी के संकेत हैं?", opts:["कोई नहीं","हल्की खुजली या लालिमा","सूजन, पित्ती या सांस में दिक्कत"], scores:[0,1,2] },
    { q:"कितने डंक लगे?", opts:["एक","2–5","5 से ज़्यादा"], scores:[0,1,2] },
    { q:"कीड़े से एलर्जी की जानकारी है?", opts:["नहीं","पता नहीं","हाँ"], scores:[0,1,2] }
  ],
  "नाक से खून":[
    { q:"कितने समय से खून आ रहा है?", opts:["5 मिनट से कम","5–20 मिनट","20 मिनट से ज़्यादा"], scores:[0,1,2] },
    { q:"बहाव कितना तेज़ है?", opts:["हल्का टपकना","मध्यम बहाव","तेज़ या थक्के"], scores:[0,1,2] },
    { q:"क्या इससे पहले सिर में चोट लगी थी?", opts:["नहीं","हल्की टक्कर","हाँ, ज़ोरदार चोट"], scores:[0,1,2] },
    { q:"क्या यह अक्सर होता है?", opts:["कभी-कभार","कभी-कभी","बहुत अक्सर"], scores:[0,1,2] }
  ],
  "सिर की चोट":[
    { q:"क्या वो होश में हैं?", opts:["पूरी तरह जाग रहे हैं","भ्रमित या नींद आ रही है","बेहोश हैं"], scores:[0,1,2] },
    { q:"क्या उन्होंने होश खोया?", opts:["नहीं","थोड़ी देर के लिए (1 मिनट से कम)","हाँ, 1 मिनट से ज़्यादा"], scores:[0,1,2] },
    { q:"उल्टी, दौरे या असमान पुतलियाँ हैं?", opts:["कोई नहीं","इनमें से एक","दो या ज़्यादा"], scores:[0,1,2] },
    { q:"चोट कितनी ज़ोरदार थी?", opts:["हल्की टक्कर","मध्यम गिरना","तेज़ रफ़्तार या कड़ी टक्कर"], scores:[0,1,2] }
  ]
};

// Name fallback map (Telugu/Hindi name → English key)
const nameMap = {
  "కాలిన గాయాలు":"Burns","కోతలు":"Cuts","ఎముక విరుపు":"Fracture","గొంతు అడ్డు పడటం":"Choking","జ్వరం":"Fever","కీటక కుట్టు":"Insect Sting","ముక్కు రక్తస్రావం":"Nosebleed","తల గాయం":"Head Injury",
  "जलना":"Burns","कट लगना":"Cuts","हड्डी टूटना":"Fracture","गला घुटना":"Choking","बुखार":"Fever","कीड़े का काटना":"Insect Sting","नाक से खून":"Nosebleed","सिर की चोट":"Head Injury"
};

// Severity result labels in all 3 languages
const sevLabels = {
  en:{ mild:'🟢 Mild', moderate:'🟡 Moderate', severe:'🔴 Severe – Go Now',
       mildMsg:'This seems manageable at home. Follow the first aid steps carefully and monitor for any changes.',
       modMsg:'This needs careful monitoring. Complete the first aid steps and visit a doctor if not improving in a few hours.',
       sevMsg:'This is serious. Please go to a hospital or call 108 immediately. Do not delay.',
       rec:"Here's what we recommend", findHosp:'🏥 Find Nearest Hospital', backHome:'← Back to Home' },
  te:{ mild:'🟢 తేలికపాటి', moderate:'🟡 మధ్యస్థ', severe:'🔴 తీవ్రమైనది – వెంటనే వెళ్ళండి',
       mildMsg:'ఇది ఇంట్లోనే నిర్వహించగలిగేలా ఉంది. ప్రాథమిక చికిత్స దశలు జాగ్రత్తగా పాటించండి.',
       modMsg:'దీనికి జాగ్రత్తగా పర్యవేక్షించడం అవసరం. కొన్ని గంటల్లో మెరుగుపడకపోతే వైద్యుడిని చూడండి.',
       sevMsg:'ఇది తీవ్రమైనది. దయచేసి ఆసుపత్రికి వెళ్ళండి లేదా వెంటనే 108 కాల్ చేయండి.',
       rec:'మేము సిఫారసు చేసేది ఇది', findHosp:'🏥 దగ్గరి ఆసుపత్రి కనుగొనండి', backHome:'← హోమ్‌కు తిరిగి వెళ్ళు' },
  hi:{ mild:'🟢 हल्का', moderate:'🟡 मध्यम', severe:'🔴 गंभीर – अभी जाएं',
       mildMsg:'यह घर पर संभाले जा सकता है। प्राथमिक चिकित्सा के कदम ध्यान से पालन करें।',
       modMsg:'इसकी सावधानी से निगरानी करनी होगी। कुछ घंटों में सुधार न हो तो डॉक्टर से मिलें।',
       sevMsg:'यह गंभीर है। कृपया अस्पताल जाएं या तुरंत 108 पर कॉल करें।',
       rec:'हम यही सुझाव देते हैं', findHosp:'🏥 नज़दीकी अस्पताल खोजें', backHome:'← होम पर वापस जाएं' }
};

// Get the right severity questions for current injury and language
function getSevQs(injuryName, lang) {
  if (lang === 'te') return sevQsMap_te[injuryName] || sevQsMap[nameMap[injuryName]] || sevQsMap["Burns"];
  if (lang === 'hi') return sevQsMap_hi[injuryName] || sevQsMap[nameMap[injuryName]] || sevQsMap["Burns"];
  return sevQsMap[injuryName] || sevQsMap["Burns"];
}

// Calculate severity level from answers
function calcSeverityLevel(answers, totalQuestions, lang) {
  const total = answers.reduce((a, b) => a + b, 0);
  const maxScore = totalQuestions * 2;
  const sl = sevLabels[lang] || sevLabels.en;
  if (total <= Math.floor(maxScore * 0.25)) return { level: sl.mild, cls: 'badge-mild', msg: sl.mildMsg, hospital: false, sl };
  if (total <= Math.floor(maxScore * 0.6))  return { level: sl.moderate, cls: 'badge-moderate', msg: sl.modMsg, hospital: true, sl };
  return { level: sl.severe, cls: 'badge-severe', msg: sl.sevMsg, hospital: true, sl };
}
