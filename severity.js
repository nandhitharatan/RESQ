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
  ],
  "Cardiac Arrest":[
    { q:"Is the person breathing?", opts:["Yes, normally","Gasping only","No breathing at all"], scores:[0,1,2] },
    { q:"Do they have a pulse?", opts:["Yes, clear pulse","Faint or unsure","No pulse felt"], scores:[0,1,2] },
    { q:"Are they conscious?", opts:["Awake and responsive","Confused or drowsy","Completely unresponsive"], scores:[0,1,2] },
    { q:"How long have they been unresponsive?", opts:["Just now","1–3 minutes","More than 3 minutes"], scores:[0,1,2] }
  ],
  "Severe Bleeding":[
    { q:"How heavy is the bleeding?", opts:["Slow drip","Steady flow","Spurting or soaking through fast"], scores:[0,1,2] },
    { q:"Has the bleeding slowed with pressure?", opts:["Yes, mostly stopped","Slowed but still going","No change or getting worse"], scores:[0,1,2] },
    { q:"Where is the wound?", opts:["Limb (arm or leg)","Trunk (chest/abdomen)","Head, neck or groin"], scores:[0,1,2] },
    { q:"Signs of shock? (pale, faint, rapid pulse)", opts:["None","One sign","Two or more signs"], scores:[0,1,2] }
  ],
  "Stroke":[
    { q:"Is their face drooping on one side?", opts:["No","Slightly","Clearly drooping"], scores:[0,1,2] },
    { q:"Can they raise both arms equally?", opts:["Yes","One arm drifts down","Cannot raise one arm"], scores:[0,1,2] },
    { q:"Is their speech slurred or confused?", opts:["Normal","Slightly slurred","Cannot speak or makes no sense"], scores:[0,1,2] },
    { q:"When did symptoms start?", opts:["Within the last hour","1–3 hours ago","Over 3 hours or unknown"], scores:[0,1,2] }
  ],
  "Anaphylaxis":[
    { q:"Is there throat swelling or trouble breathing?", opts:["No","Mild difficulty","Severe — can barely breathe"], scores:[0,1,2] },
    { q:"Is there a rash, hives or skin flushing?", opts:["No","Mild rash","Widespread hives or swelling"], scores:[0,1,2] },
    { q:"Do they feel faint or have a very low BP?", opts:["No","Slightly dizzy","Faint or collapsed"], scores:[0,1,2] },
    { q:"Do they have an EpiPen available?", opts:["Yes, used it","Yes, not used yet","No EpiPen available"], scores:[0,1,2] }
  ],
  "Heart Attack":[
    { q:"How severe is the chest pain?", opts:["Mild discomfort","Moderate pressure","Crushing or unbearable"], scores:[0,1,2] },
    { q:"Is pain spreading to arm, jaw or back?", opts:["No","Mild tingling","Clear radiating pain"], scores:[0,1,2] },
    { q:"Any sweating, nausea or shortness of breath?", opts:["None","One symptom","Two or more symptoms"], scores:[0,1,2] },
    { q:"Is the person conscious and breathing?", opts:["Fully conscious","Confused or drowsy","Unconscious or not breathing"], scores:[0,1,2] }
  ],
  "Seizure":[
    { q:"How long did the seizure last?", opts:["Under 2 minutes","2–5 minutes","Over 5 minutes"], scores:[0,1,2] },
    { q:"Is this their first ever seizure?", opts:["No, known history","Unsure","Yes, first time"], scores:[0,1,2] },
    { q:"Are they fully awake and alert now?", opts:["Yes, back to normal","Groggy but responding","Still unresponsive"], scores:[0,1,2] },
    { q:"Were they injured during the seizure?", opts:["No injury","Minor bruise or cut","Head injury or serious wound"], scores:[0,1,2] }
  ],
  "Snake Bite":[
    { q:"Is the wound swelling or changing color?", opts:["No change","Mild swelling","Rapid swelling or discoloration"], scores:[0,1,2] },
    { q:"Any dizziness, nausea or difficulty breathing?", opts:["None","One symptom","Two or more symptoms"], scores:[0,1,2] },
    { q:"Was the snake identified as venomous?", opts:["Likely non-venomous","Unknown","Known venomous species"], scores:[0,1,2] },
    { q:"How long since the bite?", opts:["Under 30 minutes","30 min – 1 hour","Over 1 hour"], scores:[0,1,2] }
  ],
  "Heat Stroke":[
    { q:"Is the person sweating?", opts:["Yes, sweating normally","Minimal sweating","No sweating at all (dry hot skin)"], scores:[0,1,2] },
    { q:"Are they confused or disoriented?", opts:["Fully alert","Slightly confused","Very confused or unresponsive"], scores:[0,1,2] },
    { q:"What is their estimated body temperature?", opts:["Below 38°C","38–40°C","Above 40°C"], scores:[0,1,2] },
    { q:"How long in the heat without water?", opts:["Under 30 minutes","30 min – 2 hours","Over 2 hours"], scores:[0,1,2] }
  ],
  "Pregnancy Emergency":[
    { q:"How heavy is the vaginal bleeding?", opts:["Light spotting","Moderate flow","Heavy soaking or clots"], scores:[0,1,2] },
    { q:"Is the baby's arrival imminent?", opts:["No contractions","Mild contractions","Strong, frequent contractions"], scores:[0,1,2] },
    { q:"Is the mother conscious and responsive?", opts:["Fully alert","Confused or weak","Unconscious or collapsed"], scores:[0,1,2] },
    { q:"What is the stage of pregnancy?", opts:["After 37 weeks (term)","28–36 weeks","Under 28 weeks"], scores:[0,1,2] }
  ],
  "Child Febrile Seizure":[
    { q:"How long did the seizure last?", opts:["Under 2 minutes","2–5 minutes","Over 5 minutes"], scores:[0,1,2] },
    { q:"Is the child fully awake now?", opts:["Yes, alert and crying","Drowsy but responding","Still unresponsive"], scores:[0,1,2] },
    { q:"What is the child's temperature?", opts:["Below 38.5°C","38.5–40°C","Above 40°C"], scores:[0,1,2] },
    { q:"Has this happened before?", opts:["Yes, known history","Unsure","First time ever"], scores:[0,1,2] }
  ],
  "Poisoning":[
    { q:"What type of substance was taken?", opts:["Food or medicine","Household chemical","Industrial chemical or unknown"], scores:[0,1,2] },
    { q:"How much was ingested?", opts:["Small amount","Moderate amount","Large amount or overdose"], scores:[0,1,2] },
    { q:"Is the person conscious and breathing?", opts:["Fully alert","Drowsy or vomiting","Unconscious or not breathing"], scores:[0,1,2] },
    { q:"How long ago was it taken?", opts:["Under 30 minutes","30 min – 2 hours","Over 2 hours ago"], scores:[0,1,2] }
  ],
  "Fainting":[
    { q:"Have they fully regained consciousness?", opts:["Yes, fully alert","Groggy but responding","Still unresponsive"], scores:[0,1,2] },
    { q:"Did they injure themselves in the fall?", opts:["No","Minor bruise or scrape","Head injury or serious wound"], scores:[0,1,2] },
    { q:"Was there chest pain or palpitations before fainting?", opts:["No","Mild palpitations","Chest pain or pressure"], scores:[0,1,2] },
    { q:"Is this the first time they have fainted?", opts:["No, happened before","Unsure","Yes, first time"], scores:[0,1,2] }
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
  ],
  "గుండె ఆగిపోవడం":[
    { q:"వ్యక్తి శ్వాస తీసుకుంటున్నారా?", opts:["అవును, సాధారణంగా","వేగంగా గుటకలు మింగుతున్నారు","శ్వాస అస్సలు లేదు"], scores:[0,1,2] },
    { q:"నాడి ఉందా?", opts:["అవును, స్పష్టంగా","మందంగా లేదా అనిశ్చితంగా","నాడి అనుభవపడట్లేదు"], scores:[0,1,2] },
    { q:"స్పృహలో ఉన్నారా?", opts:["మేలుకొని స్పందిస్తున్నారు","గందరగోళంగా లేదా నిద్రమత్తుగా","పూర్తిగా స్పందన లేదు"], scores:[0,1,2] },
    { q:"స్పందన లేకుండా ఎంత సేపు అయింది?", opts:["ఇప్పుడే","1–3 నిమిషాలు","3 నిమిషాలకు పైగా"], scores:[0,1,2] }
  ],
  "తీవ్రమైన రక్తస్రావం":[
    { q:"రక్తస్రావం ఎంత తీవ్రంగా ఉంది?", opts:["నెమ్మదిగా చుక్కలు","స్థిరమైన ప్రవాహం","వేగంగా చిమ్ముతోంది"], scores:[0,1,2] },
    { q:"నొక్కుడుతో రక్తస్రావం తగ్గిందా?", opts:["అవును, ఎక్కువగా ఆగింది","తగ్గింది కానీ కొనసాగుతోంది","మార్పు లేదు లేదా మరింత పెరిగింది"], scores:[0,1,2] },
    { q:"గాయం ఎక్కడ ఉంది?", opts:["చేయి లేదా కాలు","ఛాతీ లేదా కడుపు","తల, మెడ లేదా తొడ"], scores:[0,1,2] },
    { q:"షాక్ సంకేతాలు ఉన్నాయా? (పాలిపోవడం, తల తిరగడం, వేగవంతమైన నాడి)", opts:["లేదు","ఒక సంకేతం","రెండు లేదా అంతకంటే ఎక్కువ"], scores:[0,1,2] }
  ],
  "స్ట్రోక్":[
    { q:"ముఖం ఒక వైపు వంగిందా?", opts:["లేదు","కొద్దిగా","స్పష్టంగా వంగింది"], scores:[0,1,2] },
    { q:"రెండు చేతులూ సమానంగా పైకి లేపగలరా?", opts:["అవును","ఒక చేయి క్రిందకు వాలుతోంది","ఒక చేయి అస్సలు లేపలేకపోతున్నారు"], scores:[0,1,2] },
    { q:"మాట అస్పష్టంగా లేదా గందరగోళంగా ఉందా?", opts:["సాధారణంగా ఉంది","కొద్దిగా అస్పష్టంగా","మాట్లాడలేకపోతున్నారు"], scores:[0,1,2] },
    { q:"లక్షణాలు ఎప్పుడు మొదలయ్యాయి?", opts:["గంట లోపు","1–3 గంటల క్రితం","3 గంటలకు పైగా లేదా తెలియదు"], scores:[0,1,2] }
  ],
  "అనాఫైలాక్సిస్":[
    { q:"గొంతు వాపు లేదా శ్వాస తీసుకోవడంలో కష్టం ఉందా?", opts:["లేదు","తేలికపాటి కష్టం","తీవ్రంగా — శ్వాస తీసుకోవడం కష్టంగా ఉంది"], scores:[0,1,2] },
    { q:"దద్దుర్లు, చర్మం ఎర్రబడటం ఉందా?", opts:["లేదు","తేలికపాటి దద్దుర్లు","విస్తృతమైన దద్దుర్లు లేదా వాపు"], scores:[0,1,2] },
    { q:"తల తిరుగుతోందా లేదా రక్తపోటు చాలా తక్కువగా ఉందా?", opts:["లేదు","కొద్దిగా తల తిరగడం","స్పృహ తప్పుతోంది లేదా పడిపోయారు"], scores:[0,1,2] },
    { q:"EpiPen అందుబాటులో ఉందా?", opts:["అవును, వాడారు","అవును, ఇంకా వాడలేదు","EpiPen లేదు"], scores:[0,1,2] }
  ],
  "గుండె పోటు":[
    { q:"ఛాతీ నొప్పి ఎంత తీవ్రంగా ఉంది?", opts:["తేలికపాటి అసౌకర్యం","మధ్యస్థ ఒత్తిడి","నలిపే లేదా తట్టుకోలేనిది"], scores:[0,1,2] },
    { q:"నొప్పి చేయికి, దవడకు లేదా వీపుకు వ్యాపిస్తోందా?", opts:["లేదు","తేలికపాటి జివ్వురు","స్పష్టంగా వ్యాపిస్తున్న నొప్పి"], scores:[0,1,2] },
    { q:"చెమట, వికారం లేదా శ్వాస కష్టం ఉందా?", opts:["ఏమీ లేదు","ఒక లక్షణం","రెండు లేదా అంతకంటే ఎక్కువ లక్షణాలు"], scores:[0,1,2] },
    { q:"వ్యక్తి స్పృహలో మరియు శ్వాస తీసుకుంటున్నారా?", opts:["పూర్తిగా స్పృహలో","గందరగోళంగా లేదా బలహీనంగా","స్పృహ లేదు లేదా శ్వాస లేదు"], scores:[0,1,2] }
  ],
  "మూర్ఛ":[
    { q:"మూర్ఛ ఎంత సేపు ఉంది?", opts:["2 నిమిషాల లోపు","2–5 నిమిషాలు","5 నిమిషాలకు పైగా"], scores:[0,1,2] },
    { q:"ఇది వారికి మొదటి మూర్ఛా?", opts:["లేదు, చరిత్ర ఉంది","తెలియదు","అవును, మొదటిసారి"], scores:[0,1,2] },
    { q:"ఇప్పుడు పూర్తిగా మేలుకొని అప్రమత్తంగా ఉన్నారా?", opts:["అవును, సాధారణంగా","నిద్రమత్తుగా కానీ స్పందిస్తున్నారు","ఇంకా స్పందన లేదు"], scores:[0,1,2] },
    { q:"మూర్ఛ సమయంలో గాయపడ్డారా?", opts:["గాయం లేదు","చిన్న గాయం లేదా కోత","తల గాయం లేదా తీవ్రమైన గాయం"], scores:[0,1,2] }
  ],
  "పాము కాటు":[
    { q:"గాయం వద్ద వాపు లేదా రంగు మారుతోందా?", opts:["మార్పు లేదు","తేలికపాటి వాపు","వేగంగా వాపు లేదా రంగు మారడం"], scores:[0,1,2] },
    { q:"తల తిరగడం, వికారం లేదా శ్వాస కష్టం ఉందా?", opts:["ఏమీ లేదు","ఒక లక్షణం","రెండు లేదా అంతకంటే ఎక్కువ"], scores:[0,1,2] },
    { q:"పాము విషపూరితమైనదని గుర్తింపబడిందా?", opts:["సాధ్యంగా విషపూరితం కాదు","తెలియదు","తెలిసిన విషపూరిత జాతి"], scores:[0,1,2] },
    { q:"కాటు వేసి ఎంత సేపు అయింది?", opts:["30 నిమిషాల లోపు","30 నిమిషాలు – 1 గంట","1 గంటకు పైగా"], scores:[0,1,2] }
  ],
  "హీట్ స్ట్రోక్":[
    { q:"వ్యక్తి చెమట పడుతున్నారా?", opts:["అవును, సాధారణంగా","చాలా తక్కువ చెమట","అస్సలు చెమట లేదు (పొడి వేడి చర్మం)"], scores:[0,1,2] },
    { q:"గందరగోళంగా లేదా దిక్కుతోచకుండా ఉన్నారా?", opts:["పూర్తిగా అప్రమత్తంగా","కొద్దిగా గందరగోళంగా","చాలా గందరగోళంగా లేదా స్పందన లేదు"], scores:[0,1,2] },
    { q:"అంచనా శరీర ఉష్ణోగ్రత ఎంత?", opts:["38°C కంటే తక్కువ","38–40°C","40°C కంటే ఎక్కువ"], scores:[0,1,2] },
    { q:"నీళ్ళు తాగకుండా వేడిలో ఎంత సేపు ఉన్నారు?", opts:["30 నిమిషాల లోపు","30 నిమిషాలు – 2 గంటలు","2 గంటలకు పైగా"], scores:[0,1,2] }
  ],
  "గర్భకాల అత్యవసరం":[
    { q:"యోనిలో రక్తస్రావం ఎంత ఎక్కువగా ఉంది?", opts:["తేలికపాటి మచ్చలు","మధ్యస్థ ప్రవాహం","భారీ రక్తస్రావం లేదా గడ్డలు"], scores:[0,1,2] },
    { q:"శిశువు రాక సమీపంగా ఉందా?", opts:["సంకోచాలు లేవు","తేలికపాటి సంకోచాలు","బలమైన, తరచుగా సంకోచాలు"], scores:[0,1,2] },
    { q:"తల్లి స్పృహలో మరియు స్పందిస్తున్నారా?", opts:["పూర్తిగా అప్రమత్తంగా","గందరగోళంగా లేదా బలహీనంగా","స్పృహ లేదు లేదా పడిపోయారు"], scores:[0,1,2] },
    { q:"గర్భం యొక్క దశ ఏమిటి?", opts:["37 వారాల తర్వాత (పూర్తి కాలం)","28–36 వారాలు","28 వారాల లోపు"], scores:[0,1,2] }
  ],
  "పిల్లల జ్వర మూర్ఛ":[
    { q:"మూర్ఛ ఎంత సేపు ఉంది?", opts:["2 నిమిషాల లోపు","2–5 నిమిషాలు","5 నిమిషాలకు పైగా"], scores:[0,1,2] },
    { q:"పిల్లవాడు ఇప్పుడు పూర్తిగా మేలుకొని ఉన్నారా?", opts:["అవును, అప్రమత్తంగా మరియు ఏడుస్తున్నారు","నిద్రమత్తుగా కానీ స్పందిస్తున్నారు","ఇంకా స్పందన లేదు"], scores:[0,1,2] },
    { q:"పిల్లవాడి ఉష్ణోగ్రత ఎంత?", opts:["38.5°C కంటే తక్కువ","38.5–40°C","40°C కంటే ఎక్కువ"], scores:[0,1,2] },
    { q:"ఇంతకు ముందు ఇలా జరిగిందా?", opts:["అవును, తెలిసిన చరిత్ర","తెలియదు","మొదటిసారి"], scores:[0,1,2] }
  ],
  "విషప్రయోగం":[
    { q:"ఏ రకమైన పదార్థం తీసుకున్నారు?", opts:["ఆహారం లేదా మందు","గృహ రసాయనం","పారిశ్రామిక రసాయనం లేదా తెలియదు"], scores:[0,1,2] },
    { q:"ఎంత పరిమాణం మింగారు?", opts:["చిన్న పరిమాణం","మధ్యస్థ పరిమాణం","పెద్ద పరిమాణం లేదా అధిక మోతాదు"], scores:[0,1,2] },
    { q:"వ్యక్తి స్పృహలో మరియు శ్వాస తీసుకుంటున్నారా?", opts:["పూర్తిగా అప్రమత్తంగా","నిద్రమత్తుగా లేదా వాంతి అవుతున్నారు","స్పృహ లేదు లేదా శ్వాస లేదు"], scores:[0,1,2] },
    { q:"ఎంత సేపటి క్రితం తీసుకున్నారు?", opts:["30 నిమిషాల లోపు","30 నిమిషాలు – 2 గంటలు","2 గంటలకు పైగా"], scores:[0,1,2] }
  ],
  "స్పృహ తప్పడం":[
    { q:"వ్యక్తి పూర్తిగా స్పృహలోకి వచ్చారా?", opts:["అవును, పూర్తిగా అప్రమత్తంగా","నిద్రమత్తుగా కానీ స్పందిస్తున్నారు","ఇంకా స్పందన లేదు"], scores:[0,1,2] },
    { q:"పడిపోవడంలో గాయపడ్డారా?", opts:["లేదు","చిన్న గాయం లేదా కోత","తల గాయం లేదా తీవ్రమైన గాయం"], scores:[0,1,2] },
    { q:"స్పృహ తప్పడానికి ముందు ఛాతీ నొప్పి లేదా గుండె వేగంగా కొట్టుకోవడం ఉందా?", opts:["లేదు","తేలికపాటి గుండె దడ","ఛాతీ నొప్పి లేదా ఒత్తిడి"], scores:[0,1,2] },
    { q:"ఇది వారికి మొదటిసారి స్పృహ తప్పడమా?", opts:["లేదు, ముందు కూడా జరిగింది","తెలియదు","అవును, మొదటిసారి"], scores:[0,1,2] }
  ]
};

const sevQsMap_hi = {
  "जलना":[
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
  ],
  "कार्डियक अरेस्ट":[
    { q:"क्या व्यक्ति सांस ले रहा है?", opts:["हाँ, सामान्य रूप से","केवल हांफ रहे हैं","बिल्कुल सांस नहीं"], scores:[0,1,2] },
    { q:"क्या नब्ज़ है?", opts:["हाँ, स्पष्ट नब्ज़","कमज़ोर या अनिश्चित","कोई नब्ज़ नहीं"], scores:[0,1,2] },
    { q:"क्या वे होश में हैं?", opts:["जाग रहे हैं और जवाब दे रहे हैं","भ्रमित या नींद में","पूरी तरह बेहोश"], scores:[0,1,2] },
    { q:"कितने समय से बेहोश हैं?", opts:["अभी-अभी","1–3 मिनट","3 मिनट से ज़्यादा"], scores:[0,1,2] }
  ],
  "गंभीर रक्तस्राव":[
    { q:"खून बहना कितना तेज़ है?", opts:["धीमी बूंदें","लगातार बहाव","तेज़ धार या जल्दी भीग जाना"], scores:[0,1,2] },
    { q:"दबाने से खून धीमा हुआ?", opts:["हाँ, लगभग बंद हो गया","धीमा हुआ पर जारी है","कोई बदलाव नहीं या और बढ़ गया"], scores:[0,1,2] },
    { q:"घाव कहाँ है?", opts:["हाथ या पैर","छाती या पेट","सिर, गर्दन या जांघ"], scores:[0,1,2] },
    { q:"शॉक के संकेत हैं? (पीलापन, चक्कर, तेज़ नब्ज़)", opts:["कोई नहीं","एक संकेत","दो या ज़्यादा संकेत"], scores:[0,1,2] }
  ],
  "स्ट्रोक":[
    { q:"क्या चेहरा एक तरफ झुक रहा है?", opts:["नहीं","थोड़ा","स्पष्ट रूप से झुका हुआ"], scores:[0,1,2] },
    { q:"क्या वे दोनों बाहें बराबर उठा सकते हैं?", opts:["हाँ","एक बांह नीचे आ जाती है","एक बांह बिल्कुल नहीं उठा सकते"], scores:[0,1,2] },
    { q:"क्या बोली अस्पष्ट या भ्रमित है?", opts:["सामान्य","थोड़ी अस्पष्ट","बोल नहीं सकते या समझ नहीं आता"], scores:[0,1,2] },
    { q:"लक्षण कब शुरू हुए?", opts:["पिछले एक घंटे में","1–3 घंटे पहले","3 घंटे से ज़्यादा या पता नहीं"], scores:[0,1,2] }
  ],
  "एनाफिलेक्सिस":[
    { q:"गले में सूजन या सांस लेने में दिक्कत?", opts:["नहीं","हल्की दिक्कत","गंभीर — मुश्किल से सांस आ रही है"], scores:[0,1,2] },
    { q:"दाने, पित्ती या त्वचा लाल है?", opts:["नहीं","हल्के दाने","व्यापक पित्ती या सूजन"], scores:[0,1,2] },
    { q:"चक्कर आ रहा है या BP बहुत कम है?", opts:["नहीं","हल्का चक्कर","बेहोश हो रहे हैं या गिर पड़े"], scores:[0,1,2] },
    { q:"क्या EpiPen उपलब्ध है?", opts:["हाँ, इस्तेमाल किया","हाँ, अभी तक नहीं किया","EpiPen नहीं है"], scores:[0,1,2] }
  ],
  "हार्ट अटैक":[
    { q:"सीने का दर्द कितना तेज़ है?", opts:["हल्की तकलीफ","मध्यम दबाव","कुचलने जैसा या असहनीय"], scores:[0,1,2] },
    { q:"दर्द बांह, जबड़े या पीठ में फैल रहा है?", opts:["नहीं","हल्की झनझनाहट","स्पष्ट रूप से फैलता दर्द"], scores:[0,1,2] },
    { q:"पसीना, मतली या सांस में तकलीफ?", opts:["कोई नहीं","एक लक्षण","दो या ज़्यादा लक्षण"], scores:[0,1,2] },
    { q:"क्या व्यक्ति होश में और सांस ले रहा है?", opts:["पूरी तरह होश में","भ्रमित या कमज़ोर","बेहोश या सांस नहीं"], scores:[0,1,2] }
  ],
  "दौरा":[
    { q:"दौरा कितने समय तक रहा?", opts:["2 मिनट से कम","2–5 मिनट","5 मिनट से ज़्यादा"], scores:[0,1,2] },
    { q:"क्या यह पहली बार दौरा पड़ा?", opts:["नहीं, पहले भी हुआ है","पता नहीं","हाँ, पहली बार"], scores:[0,1,2] },
    { q:"क्या अब पूरी तरह होश में और सतर्क हैं?", opts:["हाँ, सामान्य","नींद में पर जवाब दे रहे हैं","अभी भी कोई प्रतिक्रिया नहीं"], scores:[0,1,2] },
    { q:"दौरे के दौरान चोट लगी?", opts:["कोई चोट नहीं","मामूली खरोंच या कट","सिर में चोट या गंभीर घाव"], scores:[0,1,2] }
  ],
  "सांप का काटना":[
    { q:"घाव पर सूजन या रंग बदल रहा है?", opts:["कोई बदलाव नहीं","हल्की सूजन","तेज़ सूजन या रंग बदलना"], scores:[0,1,2] },
    { q:"चक्कर, मतली या सांस में दिक्कत?", opts:["कोई नहीं","एक लक्षण","दो या ज़्यादा"], scores:[0,1,2] },
    { q:"क्या सांप ज़हरीला था?", opts:["शायद ज़हरीला नहीं","पता नहीं","ज्ञात ज़हरीली प्रजाति"], scores:[0,1,2] },
    { q:"काटे हुए कितना समय हुआ?", opts:["30 मिनट से कम","30 मिनट – 1 घंटा","1 घंटे से ज़्यादा"], scores:[0,1,2] }
  ],
  "हीट स्ट्रोक":[
    { q:"क्या व्यक्ति को पसीना आ रहा है?", opts:["हाँ, सामान्य रूप से","बहुत कम पसीना","बिल्कुल पसीना नहीं (सूखी गर्म त्वचा)"], scores:[0,1,2] },
    { q:"क्या वे भ्रमित या दिशाहीन हैं?", opts:["पूरी तरह सतर्क","थोड़ा भ्रमित","बहुत भ्रमित या कोई प्रतिक्रिया नहीं"], scores:[0,1,2] },
    { q:"अनुमानित शरीर का तापमान क्या है?", opts:["38°C से कम","38–40°C","40°C से ज़्यादा"], scores:[0,1,2] },
    { q:"पानी पिए बिना गर्मी में कितने समय से हैं?", opts:["30 मिनट से कम","30 मिनट – 2 घंटे","2 घंटे से ज़्यादा"], scores:[0,1,2] }
  ],
  "गर्भावस्था आपातकाल":[
    { q:"योनि से रक्तस्राव कितना भारी है?", opts:["हल्के धब्बे","मध्यम बहाव","भारी खून या थक्के"], scores:[0,1,2] },
    { q:"क्या बच्चे का जन्म तुरंत होने वाला है?", opts:["कोई संकुचन नहीं","हल्के संकुचन","तेज़, बार-बार संकुचन"], scores:[0,1,2] },
    { q:"क्या माँ होश में और जवाब दे रही हैं?", opts:["पूरी तरह सतर्क","भ्रमित या कमज़ोर","बेहोश या गिर पड़ी"], scores:[0,1,2] },
    { q:"गर्भावस्था का चरण क्या है?", opts:["37 हफ्ते के बाद (पूर्ण अवधि)","28–36 हफ्ते","28 हफ्ते से कम"], scores:[0,1,2] }
  ],
  "बच्चे को ज्वर दौरा":[
    { q:"दौरा कितने समय तक रहा?", opts:["2 मिनट से कम","2–5 मिनट","5 मिनट से ज़्यादा"], scores:[0,1,2] },
    { q:"क्या बच्चा अब पूरी तरह जाग रहा है?", opts:["हाँ, सतर्क और रो रहा है","नींद में पर जवाब दे रहा है","अभी भी कोई प्रतिक्रिया नहीं"], scores:[0,1,2] },
    { q:"बच्चे का तापमान क्या है?", opts:["38.5°C से कम","38.5–40°C","40°C से ज़्यादा"], scores:[0,1,2] },
    { q:"क्या पहले भी ऐसा हुआ है?", opts:["हाँ, पहले भी हुआ है","पता नहीं","पहली बार"], scores:[0,1,2] }
  ],
  "ज़हर खाना":[
    { q:"कौन सा पदार्थ लिया गया?", opts:["खाना या दवा","घरेलू रसायन","औद्योगिक रसायन या अज्ञात"], scores:[0,1,2] },
    { q:"कितनी मात्रा निगली गई?", opts:["थोड़ी मात्रा","मध्यम मात्रा","बड़ी मात्रा या ओवरडोज़"], scores:[0,1,2] },
    { q:"क्या व्यक्ति होश में और सांस ले रहा है?", opts:["पूरी तरह सतर्क","नींद में या उल्टी हो रही है","बेहोश या सांस नहीं"], scores:[0,1,2] },
    { q:"कितने समय पहले लिया गया?", opts:["30 मिनट से कम","30 मिनट – 2 घंटे","2 घंटे से ज़्यादा पहले"], scores:[0,1,2] }
  ],
  "बेहोशी":[
    { q:"क्या वे पूरी तरह होश में आ गए?", opts:["हाँ, पूरी तरह सतर्क","नींद में पर जवाब दे रहे हैं","अभी भी कोई प्रतिक्रिया नहीं"], scores:[0,1,2] },
    { q:"क्या गिरने में चोट लगी?", opts:["नहीं","मामूली खरोंच या घाव","सिर में चोट या गंभीर घाव"], scores:[0,1,2] },
    { q:"बेहोश होने से पहले सीने में दर्द या धड़कन तेज़ थी?", opts:["नहीं","हल्की धड़कन","सीने में दर्द या दबाव"], scores:[0,1,2] },
    { q:"क्या यह पहली बार बेहोश हुए हैं?", opts:["नहीं, पहले भी हुआ है","पता नहीं","हाँ, पहली बार"], scores:[0,1,2] }
  ]
};

// Name fallback map (Telugu/Hindi name → English key)
const nameMap = {
  "కాలిన గాయాలు":"Burns","కోతలు":"Cuts","ఎముక విరుపు":"Fracture","గొంతు అడ్డు పడటం":"Choking","జ్వరం":"Fever","కీటక కుట్టు":"Insect Sting","ముక్కు రక్తస్రావం":"Nosebleed","తల గాయం":"Head Injury",
  "గుండె ఆగిపోవడం":"Cardiac Arrest","తీవ్రమైన రక్తస్రావం":"Severe Bleeding","స్ట్రోక్":"Stroke","అనాఫైలాక్సిస్":"Anaphylaxis","గుండె పోటు":"Heart Attack","మూర్ఛ":"Seizure","పాము కాటు":"Snake Bite","హీట్ స్ట్రోక్":"Heat Stroke","గర్భకాల అత్యవసరం":"Pregnancy Emergency","పిల్లల జ్వర మూర్ఛ":"Child Febrile Seizure","విషప్రయోగం":"Poisoning","స్పృహ తప్పడం":"Fainting",
  "जलना":"Burns","कट लगना":"Cuts","हड्डी टूटना":"Fracture","गला घुटना":"Choking","बुखार":"Fever","कीड़े का काटना":"Insect Sting","नाक से खून":"Nosebleed","सिर की चोट":"Head Injury",
  "कार्डियक अरेस्ट":"Cardiac Arrest","गंभीर रक्तस्राव":"Severe Bleeding","स्ट्रोक":"Stroke","एनाफिलेक्सिस":"Anaphylaxis","हार्ट अटैक":"Heart Attack","दौरा":"Seizure","सांप का काटना":"Snake Bite","हीट स्ट्रोक":"Heat Stroke","गर्भावस्था आपातकाल":"Pregnancy Emergency","बच्चे को ज्वर दौरा":"Child Febrile Seizure","ज़हर खाना":"Poisoning","बेहोशी":"Fainting"
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
