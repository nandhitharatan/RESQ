// ─── data.js ─────────────────────────────────────────────
// All injury data (EN / TE / HI) and UI text translations
// ─────────────────────────────────────────────────────────

const injuriesData = {
  en:[
    { icon:"🔥", name:"Burns", desc:"Heat, fire, hot liquid", steps:[
      { instruction:"Cool the burn", normal:"Hold under cool running water for 10 minutes. Never use ice or butter.", remedy:"After cooling, apply fresh aloe vera gel gently on the burn area." },
      { instruction:"Remove jewelry", normal:"Gently remove rings or bracelets near the burn before swelling starts.", remedy:"No remedy for this step — act quickly before swelling." },
      { instruction:"Cover loosely", normal:"Use a clean non-fluffy cloth or cling film. Never use cotton wool.", remedy:"A clean banana leaf can work as a natural cover in emergencies." },
      { instruction:"Don't burst blisters", normal:"Leave blisters intact — bursting them increases infection risk.", remedy:"Apply diluted turmeric paste around (not on) blisters for mild burns only." },
      { instruction:"Monitor and rest", normal:"If skin looks white, black or burned deep — go to hospital immediately.", remedy:"Drink warm tulsi water to calm nerves and stay hydrated." }
    ]},
    { icon:"🩸", name:"Cuts", desc:"Bleeding wounds, scratches", steps:[
      { instruction:"Apply pressure", normal:"Press firmly with a clean cloth for 5–10 minutes without lifting.", remedy:"A pinch of turmeric powder on the wound acts as a natural antiseptic." },
      { instruction:"Clean the wound", normal:"Rinse gently under clean running water. Remove visible dirt carefully.", remedy:"Neem water (boiled cooled neem leaves) is a natural antiseptic rinse." },
      { instruction:"Cover with bandage", normal:"Use a sterile bandage or clean cloth. Change it daily.", remedy:"Apply a thin layer of honey before bandaging — it has antibacterial properties." },
      { instruction:"Watch for infection", normal:"If redness, swelling or pus appears after 24 hrs — see a doctor.", remedy:"Apply neem paste around (not inside) the wound if mild redness appears." }
    ]},
    { icon:"🦴", name:"Fracture", desc:"Broken bones, severe pain", steps:[
      { instruction:"Don't move it", normal:"Keep the injured area completely still. Movement causes more damage.", remedy:"No home remedy here — stillness is the most important step." },
      { instruction:"Splint gently", normal:"Use a rolled newspaper or straight stick tied loosely above and below the injury.", remedy:"No home remedy — focus entirely on immobilization." },
      { instruction:"Apply cold compress", normal:"Wrap ice in cloth and apply to reduce swelling. Never ice directly on skin.", remedy:"Cold neem water compress can slightly reduce inflammation." },
      { instruction:"Call 108 now", normal:"Fractures need an X-ray and proper medical care. Do not delay.", remedy:"No home remedy — get to hospital immediately." }
    ]},
    { icon:"😮", name:"Choking", desc:"Cannot breathe, blocked throat", steps:[
      { instruction:"Let them cough", normal:"If they can cough — encourage it. Do not interfere. Coughing is best.", remedy:"No remedy — let the natural reflex work first." },
      { instruction:"5 back blows", normal:"Lean them forward. Give 5 firm blows between shoulder blades with heel of hand.", remedy:"No home remedy — speed is everything here." },
      { instruction:"5 abdominal thrusts", normal:"Stand behind, fist above navel, pull sharply inward and upward 5 times.", remedy:"No remedy — repeat until the object clears." },
      { instruction:"Call 108 now", normal:"If unconscious or not improving — call 108 immediately.", remedy:"No home remedy for severe choking — emergency action only." }
    ]},
    { icon:"🌡️", name:"Fever", desc:"High temperature, chills", steps:[
      { instruction:"Check temperature", normal:"Use thermometer. Above 38.5°C (101°F) needs attention.", remedy:"Tulsi and ginger tea helps reduce mild fever naturally." },
      { instruction:"Stay hydrated", normal:"Drink plenty of water, ORS or coconut water to prevent dehydration.", remedy:"Coconut water with a pinch of salt replenishes electrolytes naturally." },
      { instruction:"Cool compress", normal:"Apply a cool damp cloth to forehead, neck and wrists.", remedy:"Add a few drops of neem oil to the compress water for extra relief." },
      { instruction:"Rest and monitor", normal:"If fever exceeds 40°C or lasts more than 3 days — visit a doctor.", remedy:"Warm water with honey and black pepper before sleeping helps recovery." }
    ]},
    { icon:"🐝", name:"Insect Sting", desc:"Bee, wasp, ant bite", steps:[
      { instruction:"Remove stinger", normal:"Scrape out with a card edge. Don't squeeze — it releases more venom.", remedy:"No remedy until stinger is fully removed." },
      { instruction:"Wash the area", normal:"Clean with soap and water gently for 2 minutes.", remedy:"Neem water is a great natural antiseptic wash for insect bites." },
      { instruction:"Apply cold", normal:"Wrap ice in cloth, apply for 10 minutes to reduce pain and swelling.", remedy:"Fresh crushed neem leaves paste applied on the sting reduces inflammation." },
      { instruction:"Watch for allergy", normal:"Breathing difficulty or facial swelling — call 108 immediately.", remedy:"Drink tulsi tea to help calm mild allergic reactions." }
    ]},
    { icon:"💧", name:"Nosebleed", desc:"Bleeding from nose", steps:[
      { instruction:"Lean forward", normal:"Sit upright, lean slightly forward. Do NOT tilt head back.", remedy:"No remedy for positioning — this step is critical." },
      { instruction:"Pinch your nose", normal:"Pinch soft part below bridge. Hold for 10–15 minutes without releasing.", remedy:"No home remedy — just hold firm and steady." },
      { instruction:"Cold compress", normal:"Place cold cloth on bridge of nose to help constrict blood vessels.", remedy:"Cold water with a little neem extract can help reduce blood flow." },
      { instruction:"If heavy, seek help", normal:"If bleeding doesn't stop after 20 min or follows head injury — hospital.", remedy:"No home remedy if bleeding is heavy — go immediately." }
    ]},
    { icon:"🤕", name:"Head Injury", desc:"Fall, knock, concussion", steps:[
      { instruction:"Keep them still", normal:"Do not move the person, especially head and neck area.", remedy:"No remedy — stillness is everything here." },
      { instruction:"Check consciousness", normal:"Ask their name and where they are. Note if confused or unresponsive.", remedy:"No remedy — monitor responses closely." },
      { instruction:"Control bleeding", normal:"Apply gentle pressure with a clean cloth on the wound.", remedy:"No home remedy for head wounds — use clean cloth only." },
      { instruction:"Call 108 now", normal:"Head injuries can be serious. Always get emergency medical evaluation.", remedy:"No home remedy — call immediately without delay." }
    ]},
    { icon:"❤️", name:"Cardiac Arrest", desc:"Heart stopped, no pulse, unconscious", steps:[
      { instruction:"Check responsiveness", normal:"Tap shoulders firmly and shout. If no response and no breathing — begin CPR immediately.", remedy:"No home remedy — every second counts. Start CPR without delay." },
      { instruction:"Call 108 now", normal:"Shout for help and have someone call 108 while you begin CPR. Speaker mode if alone.", remedy:"No remedy — calling 108 is equally urgent as CPR." },
      { instruction:"Start chest compressions", normal:"Place heel of hand on center of chest. Push hard and fast — 30 compressions at 100–120 per minute, at least 5 cm deep.", remedy:"No home remedy — correct technique is all that matters." },
      { instruction:"Give rescue breaths", normal:"Tilt head, lift chin, pinch nose, give 2 slow breaths (1 second each). Watch chest rise. Ratio: 30 compressions : 2 breaths.", remedy:"No remedy — keep cycling compressions and breaths until help arrives." },
      { instruction:"Use AED if available", normal:"If an Automated Defibrillator is nearby, switch it on and follow its voice instructions immediately.", remedy:"No home remedy — continue CPR until 108 paramedics take over." }
    ]},
    { icon:"🩸", name:"Severe Bleeding", desc:"Heavy uncontrolled blood loss", steps:[
      { instruction:"Apply firm pressure", normal:"Press hard with the cleanest available cloth. Do not lift it — add more cloth on top if soaked.", remedy:"A thick folded piece of clean cotton saree cloth works well for firm pressure." },
      { instruction:"Elevate the limb", normal:"If bleeding is from an arm or leg, raise it above heart level while maintaining pressure.", remedy:"No home remedy — elevation plus pressure is the key combination." },
      { instruction:"Pack deep wounds", normal:"For gaping wounds, gently pack clean cloth inside the wound and press firmly.", remedy:"No remedy for this step — hospital-grade gauze is ideal; use the cleanest cloth available." },
      { instruction:"Tourniquet if needed", normal:"If limb bleeding is life-threatening and won't stop, tie a tourniquet 5 cm above the wound. Note the time.", remedy:"No home remedy — a tourniquet is a last resort, not first response." },
      { instruction:"Call 108 immediately", normal:"Severe bleeding can cause death within minutes. Get emergency help without delay.", remedy:"No home remedy — rush to hospital or call 108 now." }
    ]},
    { icon:"🧠", name:"Stroke", desc:"FAST: Face, Arm, Speech, Time", steps:[
      { instruction:"Do the FAST test", normal:"Face drooping? Arm weakness? Speech slurred? Time to call 108. Even one sign = act now.", remedy:"No home remedy — recognition speed saves brain cells." },
      { instruction:"Call 108 immediately", normal:"Stroke treatment works only within hours of onset. Do not drive yourself — call 108.", remedy:"No remedy — time lost is brain lost. Call immediately." },
      { instruction:"Keep them calm and still", normal:"Help them sit or lie down safely. Do not give food, water or any medicine by mouth.", remedy:"No home remedy — keep them still and warm until help arrives." },
      { instruction:"Note the time", normal:"Note exact time symptoms started. This is critical information for doctors at the hospital.", remedy:"No remedy — accurate timing helps doctors choose the right treatment." },
      { instruction:"Do not leave them alone", normal:"Stay with them, reassure them, and monitor breathing until the ambulance arrives.", remedy:"Gentle reassurance and stillness is the best you can offer right now." }
    ]},
    { icon:"💉", name:"Anaphylaxis", desc:"Severe allergic reaction, throat swelling", steps:[
      { instruction:"Use epinephrine if available", normal:"If the person has an EpiPen (adrenaline auto-injector), use it on the outer thigh immediately.", remedy:"No home remedy can substitute adrenaline — this is life-threatening." },
      { instruction:"Call 108 now", normal:"Anaphylaxis can kill within minutes. Call 108 while giving first aid.", remedy:"No remedy — emergency medical care is mandatory even after EpiPen." },
      { instruction:"Lay them flat", normal:"Have them lie down with legs raised (unless breathing is difficult — then sit up slightly). Do not let them stand.", remedy:"No home remedy — positioning reduces shock risk." },
      { instruction:"Loosen tight clothing", normal:"Loosen collar, belt or any tight clothing to ease breathing and circulation.", remedy:"No remedy — ensure maximum comfort while waiting for help." },
      { instruction:"Second EpiPen dose", normal:"If no improvement after 5–10 minutes and a second EpiPen is available, administer it.", remedy:"No home remedy — keep monitoring breathing until paramedics arrive." }
    ]},
    { icon:"💔", name:"Heart Attack", desc:"Chest pain, arm pain, sweating", steps:[
      { instruction:"Recognize the signs", normal:"Crushing chest pain, pain spreading to left arm or jaw, sweating, nausea, shortness of breath — even in women these signs can be subtler.", remedy:"Chew 1 aspirin (325mg) only if not allergic, not vomiting, and conscious — it can reduce clotting." },
      { instruction:"Call 108 immediately", normal:"Do not drive to hospital. Call 108 and describe symptoms clearly. Stay on the line.", remedy:"No home remedy — aspirin and rest while help arrives." },
      { instruction:"Sit them down calmly", normal:"Help them sit in a comfortable position (half-sitting is ideal). Loosen tight clothing.", remedy:"Staying calm reduces the heart's oxygen demand — reassure them gently." },
      { instruction:"Give aspirin if appropriate", normal:"A single 325mg aspirin chewed (not swallowed whole) can help if they are conscious and not allergic.", remedy:"No other home remedy — do not give food, water or any other drug." },
      { instruction:"Be ready for CPR", normal:"If they become unresponsive and stop breathing, begin CPR immediately as you wait for 108.", remedy:"No home remedy — swift CPR can be the difference between life and death." }
    ]},
    { icon:"⚡", name:"Seizure", desc:"Convulsions, shaking, loss of control", steps:[
      { instruction:"Keep them safe", normal:"Clear hard or sharp objects away. Cushion their head with something soft. Do not restrain them.", remedy:"No home remedy — protecting from injury is the only goal during a seizure." },
      { instruction:"Time the seizure", normal:"Note when it started. If it lasts more than 5 minutes or they have two back-to-back seizures — call 108.", remedy:"No remedy — timing guides the medical response." },
      { instruction:"Recovery position", normal:"Once shaking stops, gently roll them onto their side (recovery position) to prevent choking on saliva or vomit.", remedy:"No home remedy — the recovery position is the single most important post-seizure action." },
      { instruction:"Do NOT put anything in their mouth", normal:"Never put fingers, spoons or anything in their mouth. They cannot swallow their tongue — this is a myth.", remedy:"No remedy — just keep the airway clear and the person safe." },
      { instruction:"Call 108 if needed", normal:"Call if: first seizure ever, lasts over 5 min, injury occurred, they are pregnant, diabetic, or don't regain consciousness.", remedy:"Offer tulsi water or warm water only after they are fully conscious and calm." }
    ]},
    { icon:"🐍", name:"Snake Bite", desc:"Bite wound, swelling, dizziness", steps:[
      { instruction:"Keep them still", normal:"Immobilize the bitten limb immediately. Movement spreads venom faster through the lymphatic system.", remedy:"No home remedy — stillness is the single most effective first aid for snakebite." },
      { instruction:"Call 108 immediately", normal:"Snake bites can be fatal within hours. Call 108 and describe the snake if safely possible.", remedy:"No traditional home remedies — sucking, cutting or tourniquet are all dangerous myths." },
      { instruction:"Remove jewelry and tight items", normal:"Remove rings, watches, bangles near the bite site before swelling starts.", remedy:"No home remedy — swelling can make removal impossible later." },
      { instruction:"Mark the swelling", normal:"Draw a circle around the edge of swelling with a pen and note the time. Helps doctors track venom spread.", remedy:"No home remedy — tracking progression helps hospital teams." },
      { instruction:"Keep calm and wait", normal:"Lay them flat. Keep the bitten limb at or below heart level. Do not give food, water, or alcohol.", remedy:"No home remedy — anti-venom at hospital is the only treatment. Get there fast." }
    ]},
    { icon:"🌞", name:"Heat Stroke", desc:"Hot dry skin, confusion, no sweating", steps:[
      { instruction:"Move to shade immediately", normal:"Get them out of the sun or heat into a cool, shaded or air-conditioned space right away.", remedy:"Fan vigorously while sprinkling cool water — evaporation cools the body quickly." },
      { instruction:"Cool the body fast", normal:"Apply cool (not ice cold) wet cloths to neck, armpits, groin and forehead. These are major blood vessel areas.", remedy:"Wet cotton cloth soaked in cool water on forehead, wrists and neck — traditional and effective." },
      { instruction:"Call 108", normal:"Heat stroke (body temp above 40°C, confusion, no sweating) is a medical emergency. Call 108 now.", remedy:"Offer cool water or ORS sips only if they are fully conscious and able to swallow." },
      { instruction:"Hydrate if conscious", normal:"Give sips of cool water or ORS (oral rehydration salts) if they are awake and not vomiting.", remedy:"Tender coconut water with a pinch of rock salt is the best natural ORS available in India." },
      { instruction:"Monitor breathing", normal:"Heat stroke can cause unconsciousness. If unresponsive, place in recovery position and stay close until help arrives.", remedy:"No home remedy if unconscious — call 108 and wait with them." }
    ]},
    { icon:"🤰", name:"Pregnancy Emergency", desc:"Bleeding, labor, severe pain", steps:[
      { instruction:"Call 108 immediately", normal:"Any heavy vaginal bleeding during pregnancy, sudden severe pain, or signs of labor before term — call 108 at once.", remedy:"No home remedy — maternal emergencies require hospital care urgently." },
      { instruction:"Lay her on her left side", normal:"Help her lie on her left side. This improves blood flow to the baby and reduces pressure on major blood vessels.", remedy:"No home remedy — position on the left side is medically important." },
      { instruction:"If labor is imminent", normal:"If baby is coming and 108 hasn't arrived: keep her calm, wash your hands, and prepare clean cloths to receive the baby.", remedy:"Warm clean cloths and calm reassurance are the best tools available." },
      { instruction:"Do not remove anything", normal:"If there is visible tissue or umbilical cord at the birth canal, do not pull or push it. Wait for medical help.", remedy:"No home remedy — do not attempt to intervene beyond keeping her calm and clean." },
      { instruction:"Keep her warm and calm", normal:"Cover her with a blanket, stay beside her, and keep reassuring until paramedics arrive.", remedy:"Warm ginger and honey water can be offered only if she is fully conscious and not in active labor." }
    ]},
    { icon:"👶", name:"Child Febrile Seizure", desc:"Seizure from high fever in children", steps:[
      { instruction:"Stay calm and protect", normal:"Place the child on a soft flat surface. Clear the area. Cushion their head. Do not hold them down.", remedy:"No home remedy during the seizure — protecting the child is the only task." },
      { instruction:"Time the episode", normal:"Note when it starts. Most febrile seizures stop on their own within 1–3 minutes.", remedy:"No remedy — timing is critical medical information." },
      { instruction:"Cool the fever gently after", normal:"Once seizure stops, remove excess clothing. Apply a cool damp cloth to forehead. Give paracetamol as directed.", remedy:"Tulsi and ginger in warm water (after seizure stops and child is alert) can help bring fever down gently." },
      { instruction:"Recovery position", normal:"After shaking stops, turn child on their side to prevent choking. Check breathing.", remedy:"No home remedy — keep airway clear." },
      { instruction:"See a doctor", normal:"Always see a doctor after a febrile seizure, even if brief. If it lasts over 5 minutes — call 108 immediately.", remedy:"Coconut water given in small sips once the child is fully alert helps with rehydration." }
    ]},
    { icon:"☠️", name:"Poisoning", desc:"Food poisoning, chemical, medicine overdose", steps:[
      { instruction:"Identify what was taken", normal:"Find out what was swallowed, when, and how much. Keep the container if available to show the doctor.", remedy:"No home remedy — knowing what was taken is the most important first step." },
      { instruction:"Call 108 or Poison Control", normal:"Call 108 immediately. India Poison Control: 1800-11-6117 (free). Describe the substance clearly.", remedy:"No home remedy — do not delay calling for help." },
      { instruction:"Do NOT induce vomiting", normal:"Unless specifically told by poison control — do not induce vomiting. For corrosives or petroleum products it causes more damage.", remedy:"No home remedy — inducing vomiting for the wrong poison can be fatal." },
      { instruction:"If chemical on skin or eyes", normal:"Flush skin or eyes with large amounts of clean water for 15–20 minutes. Remove contaminated clothing.", remedy:"Plain running water is the best and only safe rinse — do not add any substance to it." },
      { instruction:"Keep them monitored", normal:"Watch breathing and consciousness. If unconscious and breathing, place in recovery position. Begin CPR if breathing stops.", remedy:"No home remedy — stay on the phone with 108 until help arrives." }
    ]},
    { icon:"😵", name:"Fainting", desc:"Sudden collapse, loss of consciousness", steps:[
      { instruction:"Lower them safely", normal:"If you see them going faint, guide them down gently to prevent a fall injury. Lay them flat.", remedy:"No home remedy during the fall — preventing injury is everything." },
      { instruction:"Raise their legs", normal:"Elevate their legs 20–30 cm above heart level. This sends blood back to the brain quickly.", remedy:"No home remedy — gravity is doing the work here; keep legs elevated for 2–3 minutes." },
      { instruction:"Loosen tight clothing", normal:"Loosen collar, belt or anything tight. Ensure fresh air by opening windows or fanning.", remedy:"Sprinkling a few drops of water on the face can help stimulate recovery mildly." },
      { instruction:"Check breathing", normal:"Once conscious, check they are breathing normally. Ask simple questions — name, where they are.", remedy:"Offer small sips of water or diluted ORS once they are fully alert and sitting up." },
      { instruction:"Seek medical care", normal:"First-time fainting, fainting after chest pain, or not recovering within 1–2 minutes — call 108 immediately.", remedy:"Tulsi or ginger water sipped slowly helps with mild post-faint weakness once fully conscious." }
    ]}
  ],

  te:[
    { icon:"🔥", name:"కాలిన గాయాలు", desc:"వేడి, మంట, వేడి నీళ్ళు", steps:[
      { instruction:"కాలిన చోటిని చల్లబరచండి", normal:"10 నిమిషాలు చల్లటి నీళ్ళు పోయండి. మంచు లేదా వెన్న వాడకూడదు.", remedy:"చల్లబరచిన తర్వాత అలోవెరా జెల్ మెత్తగా పూయండి." },
      { instruction:"నగలు తీసివేయండి", normal:"వాపు రాకముందే దగ్గర ఉన్న ఉంగరాలు లేదా గాజులు తీసివేయండి.", remedy:"ఈ దశలో ఏ నివారణ లేదు — త్వరగా చేయండి." },
      { instruction:"తేలికగా కప్పండి", normal:"శుభ్రమైన, అతుక్కోని గుడ్డ లేదా క్లింగ్ ఫిల్మ్ వాడండి. పత్తి వాడకూడదు.", remedy:"అత్యవసర పరిస్థితిలో శుభ్రమైన అరటి ఆకు సహజ కవరింగ్‌గా పనిచేస్తుంది." },
      { instruction:"బొబ్బలు పగలగొట్టకండి", normal:"బొబ్బలు చెక్కుచెదరకుండా ఉంచండి — పగలగొడితే ఇన్ఫెక్షన్ వస్తుంది.", remedy:"తేలికపాటి కాలిన గాయాలకు పలుచన పసుపు పేస్ట్ బొబ్బల చుట్టూ పూయవచ్చు." },
      { instruction:"పరిస్థితి గమనించండి", normal:"చర్మం తెల్లగా, నల్లగా లేదా లోతుగా కాలినట్టు ఉంటే — వెంటనే ఆసుపత్రికి వెళ్ళండి.", remedy:"నరాలు శాంతించడానికి వేడి తులసి నీళ్ళు తాగండి." }
    ]},
    { icon:"🩸", name:"కోతలు", desc:"రక్తస్రావ గాయాలు, గీతలు", steps:[
      { instruction:"ఒత్తిడి పెట్టండి", normal:"శుభ్రమైన గుడ్డతో 5–10 నిమిషాలు గట్టిగా అదిమి పట్టుకోండి.", remedy:"గాయంపై కొంచెం పసుపు చల్లితే సహజ పూతిమందుగా పనిచేస్తుంది." },
      { instruction:"గాయాన్ని శుభ్రం చేయండి", normal:"శుభ్రమైన నీళ్ళతో మెల్లగా కడగండి. కనిపించే మురికి జాగ్రత్తగా తీసివేయండి.", remedy:"వేప నీళ్ళు సహజ పూతిమందు కడుగు." },
      { instruction:"కట్టు కట్టండి", normal:"స్టెరైల్ కట్టు లేదా శుభ్రమైన గుడ్డ వాడండి. రోజూ మార్చండి.", remedy:"కట్టు కట్టే ముందు తేనె పూయండి — దానికి బ్యాక్టీరియా నిరోధక గుణాలు ఉంటాయి." },
      { instruction:"ఇన్ఫెక్షన్ జాగ్రత్త", normal:"24 గంటల తర్వాత ఎరుపు, వాపు లేదా చీము వస్తే — వైద్యుడిని చూడండి.", remedy:"తేలికపాటి ఎరుపు వస్తే గాయం చుట్టూ వేప పేస్ట్ పూయండి." }
    ]},
    { icon:"🦴", name:"ఎముక విరుపు", desc:"విరిగిన ఎముకలు, తీవ్రమైన నొప్పి", steps:[
      { instruction:"కదిలించకండి", normal:"గాయపడిన ప్రాంతాన్ని పూర్తిగా స్థిరంగా ఉంచండి.", remedy:"ఇక్కడ ఇంటి నివారణ లేదు — స్థిరత్వమే ముఖ్యం." },
      { instruction:"స్ప్లింట్ పెట్టండి", normal:"చుట్టిన వార్తాపత్రిక లేదా నేరుగా ఉన్న కర్రను గాయం పైన కింద వదులుగా కట్టండి.", remedy:"ఇంటి నివారణ లేదు — పూర్తిగా స్థిరీకరణపై దృష్టి పెట్టండి." },
      { instruction:"చల్లటి కాంప్రెస్ పెట్టండి", normal:"గుడ్డలో మంచు చుట్టి వాపు తగ్గించడానికి పెట్టండి.", remedy:"చల్లటి వేప నీళ్ళ కాంప్రెస్ వాపును కొంచెం తగ్గిస్తుంది." },
      { instruction:"ఇప్పుడే 108 కి కాల్ చేయండి", normal:"విరిగిన ఎముకలకు ఎక్స్-రే మరియు సరైన వైద్య చికిత్స అవసరం.", remedy:"ఇంటి నివారణ లేదు — వెంటనే ఆసుపత్రికి వెళ్ళండి." }
    ]},
    { icon:"😮", name:"గొంతు అడ్డు పడటం", desc:"శ్వాస తీసుకోలేకపోవడం", steps:[
      { instruction:"దగ్గు రానివ్వండి", normal:"దగ్గు వస్తే — ప్రోత్సహించండి. ఆపకండి.", remedy:"నివారణ లేదు — ముందు సహజ ప్రతిచర్య పని చేయనివ్వండి." },
      { instruction:"5 వీపు దెబ్బలు", normal:"ముందుకు వంచండి. అరచేతి మొదటితో భుజాల మధ్య 5 గట్టి దెబ్బలు కొట్టండి.", remedy:"ఇంటి నివారణ లేదు — వేగమే అన్నీ." },
      { instruction:"5 కడుపు థ్రస్ట్‌లు", normal:"వెనక నిలబడి, నాభి పైన పిడికిలి పెట్టి, లోపలికి పైకి గట్టిగా 5 సార్లు లాగండి.", remedy:"నివారణ లేదు — అడ్డంకి తొలగేంతవరకు పునరావృతం చేయండి." },
      { instruction:"ఇప్పుడే 108 కి కాల్ చేయండి", normal:"స్పృహ లేకపోతే లేదా మెరుగుపడకపోతే — వెంటనే 108 కాల్ చేయండి.", remedy:"తీవ్రమైన గొంతు అడ్డు పడటానికి ఇంటి నివారణ లేదు." }
    ]},
    { icon:"🌡️", name:"జ్వరం", desc:"అధిక జ్వరం, చలి", steps:[
      { instruction:"జ్వరం కొలవండి", normal:"థర్మామీటర్ వాడండి. 38.5°C పైన అయితే దృష్టి అవసరం.", remedy:"తులసి మరియు అల్లం టీ తేలికపాటి జ్వరాన్ని సహజంగా తగ్గిస్తుంది." },
      { instruction:"నీళ్ళు తాగండి", normal:"నిర్జలీకరణం నివారించడానికి నీళ్ళు, ORS లేదా కొబ్బరి నీళ్ళు తాగండి.", remedy:"కొంచెం ఉప్పు వేసిన కొబ్బరి నీళ్ళు ఎలెక్ట్రోలైట్లు సహజంగా తిరిగి నింపుతాయి." },
      { instruction:"చల్లటి కాంప్రెస్", normal:"నొసట్లో, మెడ మరియు మణికట్టుపై చల్లటి తడి గుడ్డ పెట్టండి.", remedy:"అదనపు ఉపశమనానికి కాంప్రెస్ నీళ్ళకు కొన్ని నిమ్మకాయి చుక్కలు కలపండి." },
      { instruction:"విశ్రాంతి తీసుకోండి", normal:"జ్వరం 40°C కంటే ఎక్కువైతే లేదా 3 రోజులకంటే ఎక్కువ ఉంటే — వైద్యుడిని చూడండి.", remedy:"పడుకునే ముందు తేనె మరియు నల్లమిరియాలతో వేడి నీళ్ళు త్రాగడం కోలుకోవడానికి సహాయపడుతుంది." }
    ]},
    { icon:"🐝", name:"కీటక కుట్టు", desc:"తేనెటీగ, కందిరీగ, చీమ కాటు", steps:[
      { instruction:"ముల్లు తీసివేయండి", normal:"కార్డు అంచుతో గీకి తీయండి. పిండకండి — మరింత విషం విడుదల అవుతుంది.", remedy:"ముల్లు పూర్తిగా తీసివేయడానికి ముందు నివారణ వద్దు." },
      { instruction:"ప్రాంతాన్ని కడగండి", normal:"2 నిమిషాలు సబ్బు మరియు నీళ్ళతో మెల్లగా శుభ్రం చేయండి.", remedy:"కీటక కాటులకు వేప నీళ్ళు గొప్ప సహజ పూతిమందు కడుగు." },
      { instruction:"చల్లదనం పెట్టండి", normal:"గుడ్డలో మంచు చుట్టి, నొప్పి మరియు వాపు తగ్గించడానికి 10 నిమిషాలు పెట్టండి.", remedy:"తాజాగా పిసికిన వేప ఆకుల పేస్ట్ వాపును తగ్గిస్తుంది." },
      { instruction:"అలర్జీ జాగ్రత్త", normal:"శ్వాస తీసుకోవడంలో ఇబ్బంది లేదా ముఖ వాపు — వెంటనే 108 కాల్ చేయండి.", remedy:"తేలికపాటి అలర్జీ ప్రతిచర్యలను శాంతపరచడానికి తులసి టీ తాగండి." }
    ]},
    { icon:"💧", name:"ముక్కు రక్తస్రావం", desc:"ముక్కు నుండి రక్తం", steps:[
      { instruction:"ముందుకు వంగండి", normal:"నేరుగా కూర్చుని కొంచెం ముందుకు వంగండి. తల వెనక్కి వాల్చకండి.", remedy:"స్థానానికి నివారణ లేదు — ఈ దశ చాలా ముఖ్యమైనది." },
      { instruction:"ముక్కు పట్టుకోండి", normal:"వంతెన కింద మెత్తని భాగాన్ని పట్టుకోండి. వదలకుండా 10–15 నిమిషాలు పట్టుకోండి.", remedy:"ఇంటి నివారణ లేదు — గట్టిగా స్థిరంగా పట్టుకోండి." },
      { instruction:"చల్లటి కాంప్రెస్", normal:"రక్తనాళాలను సంకోచించేందుకు ముక్కు వంతెనపై చల్లటి గుడ్డ పెట్టండి.", remedy:"చల్లటి నీళ్ళకు కొంచెం వేప సారాన్ని కలపడం రక్తప్రవాహం తగ్గించడంలో సహాయపడుతుంది." },
      { instruction:"అతిగా ఉంటే సహాయం కోరండి", normal:"20 నిమిషాల తర్వాత రక్తస్రావం ఆగకపోతే — ఆసుపత్రి.", remedy:"రక్తస్రావం అతిగా ఉంటే ఇంటి నివారణ లేదు — వెంటనే వెళ్ళండి." }
    ]},
    { icon:"🤕", name:"తల గాయం", desc:"పడటం, తగలడం, కన్‌కషన్", steps:[
      { instruction:"స్థిరంగా ఉంచండి", normal:"వ్యక్తిని కదిలించకండి, ముఖ్యంగా తల మరియు మెడ ప్రాంతాన్ని.", remedy:"నివారణ లేదు — స్థిరత్వమే అన్నీ." },
      { instruction:"స్పృహ తనిఖీ చేయండి", normal:"వారి పేరు మరియు ఎక్కడ ఉన్నారో అడగండి.", remedy:"నివారణ లేదు — స్పందనలు జాగ్రత్తగా పర్యవేక్షించండి." },
      { instruction:"రక్తస్రావం నియంత్రించండి", normal:"గాయంపై శుభ్రమైన గుడ్డతో మెల్లగా ఒత్తిడి పెట్టండి.", remedy:"తల గాయాలకు ఇంటి నివారణ లేదు — శుభ్రమైన గుడ్డ మాత్రమే వాడండి." },
      { instruction:"ఇప్పుడే 108 కి కాల్ చేయండి", normal:"తల గాయాలు తీవ్రంగా ఉండవచ్చు. ఎల్లప్పుడూ అత్యవసర వైద్య మూల్యాంకనం పొందండి.", remedy:"ఇంటి నివారణ లేదు — ఆలస్యం లేకుండా వెంటనే కాల్ చేయండి." }
    ]},
    { icon:"❤️", name:"గుండె ఆగిపోవడం", desc:"గుండె ఆగిపోయింది, స్పృహ లేదు, నాడి లేదు", steps:[
      { instruction:"స్పందన తనిఖీ చేయండి", normal:"భుజాలపై గట్టిగా తట్టి అరవండి. స్పందన లేకుండా శ్వాస లేకపోతే — వెంటనే CPR మొదలు పెట్టండి.", remedy:"ఇంటి నివారణ లేదు — ప్రతి సెకను విలువైనది. ఆలస్యం చేయకండి." },
      { instruction:"108 కి వెంటనే కాల్ చేయండి", normal:"మీరు CPR చేస్తుండగా ఎవరైనా 108 కి కాల్ చేయించండి. ఒంటరిగా ఉంటే స్పీకర్ మోడ్‌లో కాల్ చేయండి.", remedy:"నివారణ లేదు — CPR తో సమానంగా 108 కి కాల్ అవసరం." },
      { instruction:"ఛాతీ పంపింగ్ మొదలు పెట్టండి", normal:"ఛాతీ మధ్యలో అరచేతిని పెట్టి గట్టిగా నిమిషానికి 100–120 సార్లు నొక్కండి. కనీసం 5 సెం.మీ లోతుగా.", remedy:"ఇంటి నివారణ లేదు — సరైన పద్ధతే ముఖ్యం." },
      { instruction:"శ్వాస ఇవ్వండి", normal:"తల వెనక్కి వంచి గడ్డం పైకి లేపి, ముక్కు మూసి 2 సార్లు నోటిలో ఊదండి. 30 పంపింగ్‌లు : 2 శ్వాసలు నిష్పత్తి.", remedy:"నివారణ లేదు — సహాయం వచ్చే వరకు CPR కొనసాగించండి." },
      { instruction:"AED అందుబాటులో ఉంటే వాడండి", normal:"దగ్గర AED ఉంటే ఆన్ చేసి దాని సూచనలు పాటించండి.", remedy:"ఇంటి నివారణ లేదు — 108 వచ్చే వరకు CPR ఆపకండి." }
    ]},
    { icon:"🩸", name:"తీవ్రమైన రక్తస్రావం", desc:"భారీ అనియంత్రిత రక్తస్రావం", steps:[
      { instruction:"గట్టిగా నొక్కండి", normal:"దొరికిన శుభ్రమైన గుడ్డతో గట్టిగా నొక్కండి. తడిసిపోతే పైన మరో గుడ్డ వేయండి — తీయకూడదు.", remedy:"పత్తి చీర ముక్క మడిచి గట్టిగా నొక్కడానికి ఉపయోగించవచ్చు." },
      { instruction:"అవయవాన్ని పైకి లేపండి", normal:"చేయి లేదా కాలు నుండి రక్తం వస్తే గుండె మట్టానికి పైన లేపండి — నొక్కుడు కొనసాగించండి.", remedy:"ఇంటి నివారణ లేదు — ఎత్తి నొక్కుడు కలిపితే పనికొస్తుంది." },
      { instruction:"లోతైన గాయాలు పూరించండి", normal:"తెరుచుకున్న గాయాల్లో శుభ్రమైన గుడ్డ మెల్లగా నింపి గట్టిగా నొక్కండి.", remedy:"నివారణ లేదు — శుభ్రమైన గుడ్డ వాడండి." },
      { instruction:"అవసరమైతే టర్నికేట్ వేయండి", normal:"కాలు లేదా చేయిలో రక్తం ఆగకపోతే గాయానికి 5 సెం.మీ పైన కట్టండి. సమయం గమనించండి.", remedy:"ఇంటి నివారణ లేదు — చివరి పరిష్కారంగా మాత్రమే వాడండి." },
      { instruction:"108 కి వెంటనే కాల్ చేయండి", normal:"తీవ్రమైన రక్తస్రావం నిమిషాల్లో ప్రాణాంతకం. వెంటనే 108 కి కాల్ చేయండి.", remedy:"ఇంటి నివారణ లేదు — ఇప్పుడే 108 కి కాల్ చేయండి." }
    ]},
    { icon:"🧠", name:"స్ట్రోక్", desc:"FAST పరీక్ష: ముఖం, చేయి, మాట, సమయం", steps:[
      { instruction:"FAST పరీక్ష చేయండి", normal:"ముఖం వంగిందా? చేయి బలహీనంగా ఉందా? మాట అస్పష్టంగా ఉందా? అయితే వెంటనే 108 కి కాల్ చేయండి.", remedy:"ఇంటి నివారణ లేదు — గుర్తింపు వేగం మెదడు కణాలను కాపాడుతుంది." },
      { instruction:"108 కి వెంటనే కాల్ చేయండి", normal:"స్ట్రోక్ చికిత్స కొన్ని గంటల్లో మాత్రమే పనిచేస్తుంది. 108 కి కాల్ చేయండి.", remedy:"నివారణ లేదు — సమయం వృథా అయితే మెదడు దెబ్బతింటుంది." },
      { instruction:"వారిని శాంతంగా ఉంచండి", normal:"వారిని కూర్చోబెట్టండి లేదా పడుకోబెట్టండి. నోటి ద్వారా ఆహారం లేదా మందులు ఇవ్వకండి.", remedy:"ఇంటి నివారణ లేదు — సహాయం వచ్చే వరకు శాంతంగా ఉంచండి." },
      { instruction:"సమయం గమనించండి", normal:"లక్షణాలు మొదలైన సరైన సమయం నమోదు చేయండి. ఇది వైద్యులకు చాలా ముఖ్యమైన సమాచారం.", remedy:"నివారణ లేదు — సరైన సమయం సరైన చికిత్స ఎంచుకోవడానికి సహాయపడుతుంది." },
      { instruction:"వారిని వంటరిగా వదలకండి", normal:"వారితోనే ఉండండి, ధైర్యం చెప్పండి, అంబులెన్స్ వచ్చే వరకు శ్వాసపై నిఘా ఉంచండి.", remedy:"శాంతపరచడం మరియు కదలకుండా ఉంచడం ఇప్పుడు చేయగలిగే అత్యుత్తమ సహాయం." }
    ]},
    { icon:"💉", name:"అనాఫైలాక్సిస్", desc:"తీవ్రమైన అలర్జీ, గొంతు వాపు", steps:[
      { instruction:"ఎపినెఫ్రిన్ ఇంజెక్షన్ ఇవ్వండి", normal:"వ్యక్తి దగ్గర EpiPen ఉంటే వెంటనే తొడపై వాడండి.", remedy:"అడ్రినలిన్‌కు ఇంటి నివారణ లేదు — ఇది ప్రాణాంతక పరిస్థితి." },
      { instruction:"108 కి వెంటనే కాల్ చేయండి", normal:"అనాఫైలాక్సిస్ నిమిషాల్లో ప్రాణాంతకం. ప్రాథమిక చికిత్స చేస్తూనే 108 కి కాల్ చేయండి.", remedy:"నివారణ లేదు — EpiPen తర్వాత కూడా ఆసుపత్రి అవసరం." },
      { instruction:"పడుకోబెట్టండి", normal:"కాళ్ళు పైకి లేపి పడుకోబెట్టండి (శ్వాస కష్టంగా ఉంటే కొంచెం లేచి కూర్చోబెట్టండి). నిలబడనివ్వకండి.", remedy:"ఇంటి నివారణ లేదు — సరైన స్థానం షాక్ ప్రమాదాన్ని తగ్గిస్తుంది." },
      { instruction:"బిగుతైన బట్టలు సడలించండి", normal:"కాలర్, బెల్ట్ లేదా ఇతర బిగుతైన బట్టలు సడలించండి.", remedy:"నివారణ లేదు — సహాయం కోసం వేచి ఉండేటప్పుడు గరిష్ట సౌకర్యం ఇవ్వండి." },
      { instruction:"రెండో EpiPen డోస్ ఇవ్వండి", normal:"5–10 నిమిషాల్లో మెరుగుపడకపోతే రెండో EpiPen అందుబాటులో ఉంటే ఇవ్వండి.", remedy:"ఇంటి నివారణ లేదు — వైద్యులు వచ్చే వరకు శ్వాసపై నిఘా ఉంచండి." }
    ]},
    { icon:"💔", name:"గుండె పోటు", desc:"ఛాతీ నొప్పి, చేయి నొప్పి, చెమట", steps:[
      { instruction:"లక్షణాలు గుర్తించండి", normal:"ఛాతీలో నలిపే నొప్పి, ఎడమ చేయి లేదా దవడకు వ్యాపించే నొప్పి, చెమట, వికారం, శ్వాస తీసుకోవడంలో కష్టం.", remedy:"అలర్జీ లేకుండా స్పృహలో ఉంటే ఒక్క అస్పిరిన్ (325mg) నమలవచ్చు — రక్తం గడ్డకట్టడం తగ్గుతుంది." },
      { instruction:"108 కి వెంటనే కాల్ చేయండి", normal:"స్వయంగా ఆసుపత్రికి వెళ్ళకండి. 108 కి కాల్ చేసి లక్షణాలు వివరించండి.", remedy:"ఇంటి నివారణ లేదు — అస్పిరిన్ తీసుకుని సహాయం కోసం వేచి ఉండండి." },
      { instruction:"కూర్చోబెట్టండి", normal:"వారిని సౌకర్యంగా కూర్చోబెట్టండి (సగం నిటారుగా ఉండటం ఉత్తమం). బిగుతైన బట్టలు సడలించండి.", remedy:"శాంతంగా ఉంచడం గుండె ఆక్సిజన్ అవసరాన్ని తగ్గిస్తుంది." },
      { instruction:"అస్పిరిన్ ఇవ్వండి", normal:"స్పృహలో ఉంటే మరియు అలర్జీ లేకుంటే 325mg అస్పిరిన్ నమలించండి.", remedy:"ఇతర ఇంటి నివారణలు లేవు — ఆహారం లేదా ఇతర మందులు ఇవ్వకండి." },
      { instruction:"CPR కి సిద్ధంగా ఉండండి", normal:"స్పందన లేకుండా శ్వాస ఆగిపోతే 108 కోసం వేచి ఉండగా వెంటనే CPR మొదలు పెట్టండి.", remedy:"ఇంటి నివారణ లేదు — వేగంగా CPR చేయడం జీవితం మరియు మరణం మధ్య తేడా చేయవచ్చు." }
    ]},
    { icon:"⚡", name:"మూర్ఛ", desc:"మూర్ఛ పోవడం, కంపనాలు, నియంత్రణ తప్పడం", steps:[
      { instruction:"వారిని సురక్షితంగా ఉంచండి", normal:"దగ్గర ఉన్న గట్టి లేదా పదునైన వస్తువులను తొలగించండి. తలకింద మెత్తటిది ఉంచండి. పట్టుకోకండి.", remedy:"ఇంటి నివారణ లేదు — మూర్ఛ సమయంలో గాయపడకుండా కాపాడడమే లక్ష్యం." },
      { instruction:"సమయం గమనించండి", normal:"ఎప్పుడు మొదలైందో గమనించండి. 5 నిమిషాలు మించితే లేదా రెండు సార్లు వస్తే — 108 కి కాల్ చేయండి.", remedy:"నివారణ లేదు — సమయం వైద్య స్పందనను నిర్దేశిస్తుంది." },
      { instruction:"రికవరీ స్థానంలో ఉంచండి", normal:"కంపనాలు ఆగిన తర్వాత వారిని పక్కకు మెల్లగా తిప్పండి — ఉమ్మడి లేదా వాంతి మింగకుండా నివారించడానికి.", remedy:"ఇంటి నివారణ లేదు — గాలి మార్గం స్వచ్ఛంగా ఉంచడమే ముఖ్యం." },
      { instruction:"నోట్లో ఏమీ పెట్టకండి", normal:"వేళ్ళు, చెంచా లేదా ఏ వస్తువూ నోట్లో పెట్టకండి. నాలుక మింగడం అసాధ్యం — ఇది మూఢనమ్మకం.", remedy:"నివారణ లేదు — గాలి మార్గం స్వచ్ఛంగా ఉంచి వ్యక్తిని సురక్షితంగా ఉంచండి." },
      { instruction:"అవసరమైతే 108 కి కాల్ చేయండి", normal:"మొదటిసారి మూర్ఛ, 5 నిమిషాలు మించితే, గాయపడితే, గర్భిణీ అయినా, మధుమేహి అయినా లేదా స్పృహ రాకపోతే — 108 కి కాల్ చేయండి.", remedy:"పూర్తిగా స్పృహలోకి వచ్చాక తులసి లేదా గోరువెచ్చటి నీళ్ళు ఇవ్వొచ్చు." }
    ]},
    { icon:"🐍", name:"పాము కాటు", desc:"కాటు గాయం, వాపు, తల తిరగడం", steps:[
      { instruction:"కదలకుండా ఉండండి", normal:"కాటు వేసిన అవయవాన్ని వెంటనే కదలకుండా ఉంచండి. కదలడం విషాన్ని వేగంగా వ్యాపింపజేస్తుంది.", remedy:"ఇంటి నివారణ లేదు — కదలకుండా ఉండటమే పాము కాటుకు అత్యంత ప్రభావవంతమైన ప్రాథమిక చికిత్స." },
      { instruction:"108 కి వెంటనే కాల్ చేయండి", normal:"పాము కాటు గంటల్లో ప్రాణాంతకం. 108 కి కాల్ చేసి సాధ్యమైతే పాముని వర్ణించండి.", remedy:"సాంప్రదాయ నివారణలు లేవు — పీల్చడం, కోయడం, టర్నికేట్ అన్నీ ప్రమాదకరమైన మూఢనమ్మకాలు." },
      { instruction:"నగలు తీసివేయండి", normal:"వాపు రాకముందే కాటు దగ్గర ఉన్న ఉంగరాలు, గడియారాలు, గాజులు తీసివేయండి.", remedy:"ఇంటి నివారణ లేదు — వాపు తర్వాత తొలగించడం అసాధ్యమవుతుంది." },
      { instruction:"వాపు గుర్తించండి", normal:"వాపు అంచు చుట్టూ పెన్నుతో వలయం గీసి సమయం రాయండి. విషం వ్యాపింపు ట్రాక్ చేయడానికి సహాయపడుతుంది.", remedy:"ఇంటి నివారణ లేదు — పురోగతి ట్రాకింగ్ ఆసుపత్రి బృందాలకు సహాయపడుతుంది." },
      { instruction:"శాంతంగా ఉండి వేచి ఉండండి", normal:"పడుకోబెట్టండి. కాటు వేసిన అవయవం గుండె మట్టానికి సమానంగా లేదా కింద ఉంచండి. ఆహారం, నీళ్ళు, మద్యం ఇవ్వకండి.", remedy:"ఇంటి నివారణ లేదు — యాంటీ వెనమ్ మాత్రమే చికిత్స. వేగంగా ఆసుపత్రికి వెళ్ళండి." }
    ]},
    { icon:"🌞", name:"హీట్ స్ట్రోక్", desc:"వేడి, గందరగోళం, చెమట రాకపోవడం", steps:[
      { instruction:"వెంటనే నీడకు తీసుకెళ్ళండి", normal:"వారిని సూర్యకాంతి లేదా వేడి నుండి చల్లని, నీడగల లేదా AC గల స్థలానికి తీసుకెళ్ళండి.", remedy:"చల్లటి నీళ్ళు చల్లుతూ విసనకర్రతో విసరండి — ఆవిరివడటం శరీరాన్ని చల్లబరుస్తుంది." },
      { instruction:"శరీరాన్ని త్వరగా చల్లబరచండి", normal:"మెడ, బగల్కింద, తొడల మడతలు మరియు నుదిటిపై చల్లటి తడి గుడ్డలు ఉంచండి.", remedy:"నుదిటి, మణికట్టు మరియు మెడపై చల్లటి నీటిలో తడిపిన పత్తి గుడ్డ — సాంప్రదాయ మరియు ప్రభావవంతం." },
      { instruction:"108 కి కాల్ చేయండి", normal:"శరీర ఉష్ణోగ్రత 40°C పైన, గందరగోళం, చెమట రాకపోవడం — వైద్య అత్యవసర పరిస్థితి. ఇప్పుడే 108 కి కాల్ చేయండి.", remedy:"పూర్తిగా స్పృహలో ఉంటే చల్లటి నీళ్ళు లేదా ORS సిప్పులు ఇవ్వండి." },
      { instruction:"స్పృహలో ఉంటే నీళ్ళు ఇవ్వండి", normal:"మేలుకొని ఉంటే మరియు వాంతి కాకుంటే చల్లటి నీళ్ళు లేదా ORS సిప్పులు ఇవ్వండి.", remedy:"రాతి ఉప్పు కలిపిన లేత కొబ్బరి నీళ్ళు — భారతదేశంలో అందుబాటులో ఉన్న అత్యుత్తమ సహజ ORS." },
      { instruction:"శ్వాస పర్యవేక్షించండి", normal:"హీట్ స్ట్రోక్ స్పృహ తప్పించవచ్చు. స్పందన లేకుంటే రికవరీ స్థానంలో ఉంచి సహాయం వచ్చే వరకు దగ్గరలో ఉండండి.", remedy:"స్పృహ లేకుంటే ఇంటి నివారణ లేదు — 108 కి కాల్ చేసి వారితో ఉండండి." }
    ]},
    { icon:"🤰", name:"గర్భకాల అత్యవసరం", desc:"రక్తస్రావం, ప్రసవం, తీవ్ర నొప్పి", steps:[
      { instruction:"108 కి వెంటనే కాల్ చేయండి", normal:"గర్భ సమయంలో భారీ రక్తస్రావం, తీవ్ర నొప్పి లేదా ముందుగా ప్రసవం లక్షణాలు కనిపిస్తే — వెంటనే 108 కి కాల్ చేయండి.", remedy:"ఇంటి నివారణ లేదు — మాతా అత్యవసరాలకు వెంటనే ఆసుపత్రి అవసరం." },
      { instruction:"ఎడమ వైపు పడుకోబెట్టండి", normal:"ఆమెను ఎడమ వైపు పడుకోబెట్టండి. ఇది శిశువుకు రక్త ప్రవాహాన్ని మెరుగుపరుస్తుంది.", remedy:"ఇంటి నివారణ లేదు — ఎడమ వైపు స్థానం వైద్యపరంగా ముఖ్యం." },
      { instruction:"ప్రసవం ముందున్నట్లు అనిపిస్తే", normal:"108 రాకముందే శిశువు రానున్నట్లు అనిపిస్తే: ఆమెను శాంతంగా ఉంచండి, చేతులు కడుక్కోండి, శుభ్రమైన గుడ్డలు సిద్ధం చేయండి.", remedy:"వెచ్చటి శుభ్రమైన గుడ్డలు మరియు శాంత భరోసా — ఇప్పుడు అందుబాటులో ఉన్న అత్యుత్తమ సాధనాలు." },
      { instruction:"ఏదీ తొలగించకండి", normal:"జన్మనాళంలో కణజాలం లేదా నాభినాళం కనిపిస్తే — దాన్ని లాగకండి లేదా నెట్టకండి. వైద్య సహాయం కోసం వేచి ఉండండి.", remedy:"ఇంటి నివారణ లేదు — ఆమెను శాంతంగా మరియు శుభ్రంగా ఉంచండి." },
      { instruction:"వెచ్చగా మరియు శాంతంగా ఉంచండి", normal:"దుప్పటి కప్పి, పక్కన ఉండి, వైద్యులు వచ్చే వరకు ధైర్యం చెప్పండి.", remedy:"పూర్తిగా స్పృహలో ఉంటే మరియు చురుకుగా ప్రసవంలో లేకుంటే మాత్రమే అల్లం, తేనె వెచ్చటి నీళ్ళు ఇవ్వొచ్చు." }
    ]},
    { icon:"👶", name:"పిల్లల జ్వర మూర్ఛ", desc:"పిల్లల్లో జ్వరం వల్ల మూర్ఛ", steps:[
      { instruction:"శాంతంగా ఉండి రక్షించండి", normal:"పిల్లవాడిని మెత్తటి చదునైన స్థలంలో ఉంచండి. ప్రాంతం క్లియర్ చేయండి. తలకింద మెత్తటిది ఉంచండి. పట్టుకోకండి.", remedy:"ఇంటి నివారణ లేదు — పిల్లవాడిని గాయపడకుండా కాపాడడమే ఏకైక పని." },
      { instruction:"సమయం గమనించండి", normal:"ఎప్పుడు మొదలైందో గమనించండి. చాలా జ్వర మూర్ఛలు 1–3 నిమిషాల్లో తనంతట తానే ఆగిపోతాయి.", remedy:"నివారణ లేదు — సమయం కీలకమైన వైద్య సమాచారం." },
      { instruction:"తర్వాత జ్వరాన్ని చల్లబరచండి", normal:"మూర్ఛ ఆగిన తర్వాత అదనపు బట్టలు తీసివేయండి. నుదిటిపై చల్లటి తడి గుడ్డ ఉంచండి. నిర్దేశించిన విధంగా పారాసిటమాల్ ఇవ్వండి.", remedy:"మూర్ఛ ఆగి పిల్లవాడు మేలుకొన్న తర్వాత వెచ్చటి నీటిలో తులసి మరియు అల్లం జ్వరాన్ని మెల్లగా తగ్గించడంలో సహాయపడుతుంది." },
      { instruction:"రికవరీ స్థానంలో ఉంచండి", normal:"కంపనాలు ఆగిన తర్వాత పిల్లవాడిని పక్కకు తిప్పండి. శ్వాస తనిఖీ చేయండి.", remedy:"ఇంటి నివారణ లేదు — గాలి మార్గం స్వచ్ఛంగా ఉంచండి." },
      { instruction:"వైద్యుడిని చూడండి", normal:"జ్వర మూర్ఛ తర్వాత ఎల్లప్పుడూ వైద్యుడిని చూడండి. 5 నిమిషాలు మించితే — వెంటనే 108 కి కాల్ చేయండి.", remedy:"పిల్లవాడు పూర్తిగా మేలుకొన్న తర్వాత చిన్న సిప్పులలో కొబ్బరి నీళ్ళు ఇవ్వడం నిర్జలీకరణకు సహాయపడుతుంది." }
    ]},
    { icon:"☠️", name:"విషప్రయోగం", desc:"ఆహార విషం, రసాయనం, మందు అధిక మోతాదు", steps:[
      { instruction:"ఏమి తీసుకున్నారో గుర్తించండి", normal:"ఏమి మింగారో, ఎప్పుడు మరియు ఎంత మోతాదో తెలుసుకోండి. కంటైనర్ అందుబాటులో ఉంటే వైద్యులకు చూపించడానికి ఉంచండి.", remedy:"ఇంటి నివారణ లేదు — ఏమి తీసుకున్నారో తెలుసుకోవడమే అత్యంత ముఖ్యమైన మొదటి అడుగు." },
      { instruction:"108 లేదా విష నియంత్రణకు కాల్ చేయండి", normal:"వెంటనే 108 కి కాల్ చేయండి. భారత విష నియంత్రణ: 1800-11-6117 (ఉచితం). పదార్థం స్పష్టంగా వివరించండి.", remedy:"ఇంటి నివారణ లేదు — సహాయం కోసం కాల్ చేయడం ఆలస్యం చేయకండి." },
      { instruction:"వాంతి చేయించకండి", normal:"విష నియంత్రణ నిపుణులు చెప్పకుండా వాంతి చేయించకండి. కారక లేదా పెట్రోలియం పదార్థాలకు అది మరింత హాని చేస్తుంది.", remedy:"ఇంటి నివారణ లేదు — తప్పు విషానికి వాంతి చేయించడం ప్రాణాంతకం." },
      { instruction:"చర్మం లేదా కళ్ళపై రసాయనం పడితే", normal:"15–20 నిమిషాలు పుష్కలంగా నీళ్ళతో చర్మం లేదా కళ్ళు కడగండి. కలుషితమైన బట్టలు తీసివేయండి.", remedy:"సాదా నీళ్ళు మాత్రమే సురక్షితమైన కడగడం — దానికి ఏ పదార్థం కలపకండి." },
      { instruction:"పర్యవేక్షిస్తూ ఉండండి", normal:"శ్వాస మరియు స్పృహ గమనించండి. స్పృహ లేకుంటే మరియు శ్వాస ఉంటే రికవరీ స్థానంలో ఉంచండి. శ్వాస ఆగితే CPR మొదలు పెట్టండి.", remedy:"ఇంటి నివారణ లేదు — సహాయం వచ్చే వరకు 108 తో ఫోన్‌లో ఉండండి." }
    ]},
    { icon:"😵", name:"స్పృహ తప్పడం", desc:"అకస్మాత్తుగా పడిపోవడం, స్పృహ కోల్పోవడం", steps:[
      { instruction:"సురక్షితంగా కింద పడేలా చేయండి", normal:"స్పృహ తప్పుతున్నట్లు కనిపిస్తే మెల్లగా కింద పడేలా సహాయం చేయండి. చదునైన ఉపరితలంపై పడుకోబెట్టండి.", remedy:"పడే సమయంలో ఇంటి నివారణ లేదు — గాయపడకుండా కాపాడడమే ముఖ్యం." },
      { instruction:"కాళ్ళు పైకి లేపండి", normal:"కాళ్ళను గుండె మట్టానికి 20–30 సెం.మీ పైన లేపండి. ఇది మెదడుకు రక్తాన్ని వేగంగా పంపుతుంది.", remedy:"ఇంటి నివారణ లేదు — 2–3 నిమిషాలు కాళ్ళు పైన ఉంచండి." },
      { instruction:"బిగుతైన బట్టలు సడలించండి", normal:"కాలర్, బెల్ట్ లేదా బిగుతైన ఏ వస్తువైనా సడలించండి. కిటికీలు తెరిచి తాజా గాలి ఇవ్వండి.", remedy:"ముఖంపై కొన్ని నీళ్ళ చుక్కలు చల్లడం మిల్దుగా రికవరీని ప్రేరేపించవచ్చు." },
      { instruction:"శ్వాస తనిఖీ చేయండి", normal:"స్పృహలోకి వచ్చాక శ్వాస సాధారణంగా ఉందో తనిఖీ చేయండి. సులభమైన ప్రశ్నలు అడగండి — పేరు, వారు ఎక్కడ ఉన్నారో.", remedy:"పూర్తిగా మేలుకొని కూర్చున్న తర్వాత చల్లటి నీళ్ళు లేదా ORS సిప్పులు ఇవ్వండి." },
      { instruction:"వైద్యసహాయం తీసుకోండి", normal:"మొదటిసారి స్పృహ తప్పడం, ఛాతీ నొప్పి తర్వాత స్పృహ తప్పడం, లేదా 1–2 నిమిషాల్లో కోలుకోకపోతే — 108 కి కాల్ చేయండి.", remedy:"పూర్తిగా స్పృహలోకి వచ్చాక తులసి లేదా అల్లం నీళ్ళు నెమ్మదిగా సిప్పుల్లో తాగితే తేలికపాటి బలహీనతకు సహాయపడుతుంది." }
    ]}
  ],

  hi:[
    { icon:"🔥", name:"जलना", desc:"गर्मी, आग, गर्म तरल", steps:[
      { instruction:"जले हुए हिस्से को ठंडा करें", normal:"10 मिनट तक ठंडे बहते पानी में रखें। बर्फ या मक्खन का उपयोग कभी न करें।", remedy:"ठंडा करने के बाद ताज़ा एलोवेरा जेल धीरे से लगाएं।" },
      { instruction:"गहने हटाएं", normal:"सूजन आने से पहले जले हुए हिस्से के पास के छल्ले या कड़े धीरे से हटाएं।", remedy:"इस चरण के लिए कोई उपाय नहीं — सूजन आने से पहले जल्दी करें।" },
      { instruction:"हल्के से ढकें", normal:"साफ, बिना रुई वाला कपड़ा या क्लिंग फिल्म उपयोग करें।", remedy:"आपातकाल में साफ केले का पत्ता प्राकृतिक ढकने के रूप में काम करता है।" },
      { instruction:"छाले न फोड़ें", normal:"छाले बिना फोड़े छोड़ें — फोड़ने से संक्रमण का खतरा बढ़ता है।", remedy:"हल्के जलने पर केवल छालों के आसपास हल्दी का पतला लेप लगाएं।" },
      { instruction:"निगरानी करें और आराम करें", normal:"अगर त्वचा सफेद, काली या गहरी जली दिखे — तुरंत अस्पताल जाएं।", remedy:"नसें शांत करने के लिए गर्म तुलसी का पानी पिएं।" }
    ]},
    { icon:"🩸", name:"कट लगना", desc:"खून बहने वाले घाव, खरोंच", steps:[
      { instruction:"दबाव लगाएं", normal:"बिना उठाए 5–10 मिनट साफ कपड़े से मजबूती से दबाएं।", remedy:"घाव पर एक चुटकी हल्दी पाउडर डालने से प्राकृतिक एंटीसेप्टिक का काम होता है।" },
      { instruction:"घाव साफ करें", normal:"साफ बहते पानी से धीरे से धोएं। दिखाई देने वाली गंदगी ध्यान से हटाएं।", remedy:"नीम का पानी प्राकृतिक एंटीसेप्टिक धुलाई है।" },
      { instruction:"पट्टी बांधें", normal:"स्टेरइल पट्टी या साफ कपड़ा उपयोग करें। रोज बदलें।", remedy:"पट्टी बांधने से पहले शहद की पतली परत लगाएं।" },
      { instruction:"संक्रमण देखें", normal:"24 घंटे बाद लालिमा, सूजन या मवाद दिखे तो — डॉक्टर से मिलें।", remedy:"हल्की लालिमा आने पर घाव के आसपास नीम का लेप लगाएं।" }
    ]},
    { icon:"🦴", name:"हड्डी टूटना", desc:"टूटी हड्डियां, तेज दर्द", steps:[
      { instruction:"हिलाएं नहीं", normal:"घायल हिस्से को पूरी तरह स्थिर रखें। हिलाने से अधिक नुकसान होता है।", remedy:"यहां कोई घरेलू उपाय नहीं — स्थिरता ही सबसे ज़रूरी कदम है।" },
      { instruction:"हल्का स्प्लिंट लगाएं", normal:"मुड़ा अखबार या सीधी छड़ी चोट के ऊपर-नीचे ढीले से बांधें।", remedy:"कोई घरेलू उपाय नहीं — पूरी तरह स्थिरीकरण पर ध्यान दें।" },
      { instruction:"ठंडी सिकाई करें", normal:"कपड़े में बर्फ लपेटकर सूजन कम करने के लिए लगाएं।", remedy:"ठंडे नीम के पानी की सिकाई से थोड़ी सूजन कम हो सकती है।" },
      { instruction:"अभी 108 पर कॉल करें", normal:"टूटी हड्डियों के लिए X-ray और सही चिकित्सा देखभाल जरूरी है।", remedy:"कोई घरेलू उपाय नहीं — तुरंत अस्पताल जाएं।" }
    ]},
    { icon:"😮", name:"गला घुटना", desc:"सांस नहीं आना, गला अवरुद्ध", steps:[
      { instruction:"खांसने दें", normal:"अगर खांसी आ रही है — प्रोत्साहित करें। दखल न दें।", remedy:"कोई उपाय नहीं — पहले प्राकृतिक प्रतिक्रिया को काम करने दें।" },
      { instruction:"5 पीठ पर थपकियां", normal:"आगे झुकाएं। हथेली की एड़ी से कंधों के बीच 5 मजबूत थपकियां दें।", remedy:"कोई घरेलू उपाय नहीं — यहां गति ही सब कुछ है।" },
      { instruction:"5 पेट का दबाव", normal:"पीछे खड़े हों, नाभि के ऊपर मुट्ठी रखें, तेजी से अंदर-ऊपर की ओर 5 बार खींचें।", remedy:"कोई उपाय नहीं — अवरोध दूर होने तक दोहराएं।" },
      { instruction:"अभी 108 पर कॉल करें", normal:"बेहोश हों या सुधार न हो — तुरंत 108 पर कॉल करें।", remedy:"गंभीर गला घुटने के लिए कोई घरेलू उपाय नहीं।" }
    ]},
    { icon:"🌡️", name:"बुखार", desc:"तेज़ बुखार, ठंड लगना", steps:[
      { instruction:"तापमान जांचें", normal:"थर्मामीटर से जांचें। 38.5°C से ऊपर ध्यान देना जरूरी है।", remedy:"तुलसी और अदरक की चाय हल्के बुखार को स्वाभाविक रूप से कम करती है।" },
      { instruction:"पानी पीते रहें", normal:"निर्जलीकरण से बचने के लिए खूब पानी, ORS या नारियल पानी पिएं।", remedy:"थोड़ा नमक डला नारियल पानी प्राकृतिक रूप से इलेक्ट्रोलाइट्स फिर भरता है।" },
      { instruction:"ठंडी सिकाई", normal:"माथे, गर्दन और कलाईयों पर ठंडा गीला कपड़ा लगाएं।", remedy:"सिकाई के पानी में नीम के तेल की कुछ बूंदें डालने से अतिरिक्त राहत मिलती है।" },
      { instruction:"आराम करें और देखते रहें", normal:"बुखार 40°C से ज़्यादा हो या 3 दिन से अधिक रहे — डॉक्टर के पास जाएं।", remedy:"सोने से पहले शहद और काली मिर्च के साथ गर्म पानी पीने से ठीक होने में मदद मिलती है।" }
    ]},
    { icon:"🐝", name:"कीड़े का काटना", desc:"मधुमक्खी, ततैया, चींटी का डंक", steps:[
      { instruction:"डंक निकालें", normal:"कार्ड के किनारे से खुरचकर निकालें। दबाएं नहीं — इससे और जहर निकलता है।", remedy:"डंक पूरी तरह निकलने तक कोई उपाय नहीं।" },
      { instruction:"जगह धोएं", normal:"2 मिनट साबुन और पानी से धीरे-धीरे साफ करें।", remedy:"कीड़े के काटने के लिए नीम का पानी एक बेहतरीन प्राकृतिक एंटीसेप्टिक है।" },
      { instruction:"ठंडक लगाएं", normal:"कपड़े में बर्फ लपेटकर दर्द और सूजन कम करने के लिए 10 मिनट लगाएं।", remedy:"ताजे कुचले नीम के पत्तों का लेप लगाने से सूजन कम होती है।" },
      { instruction:"एलर्जी देखें", normal:"सांस लेने में कठिनाई या चेहरे पर सूजन — तुरंत 108 पर कॉल करें।", remedy:"हल्की एलर्जी प्रतिक्रिया शांत करने के लिए तुलसी की चाय पिएं।" }
    ]},
    { icon:"💧", name:"नाक से खून", desc:"नाक से रक्तस्राव", steps:[
      { instruction:"आगे झुकें", normal:"सीधे बैठें, थोड़ा आगे झुकें। सिर पीछे न झुकाएं।", remedy:"स्थिति के लिए कोई उपाय नहीं — यह कदम बहुत ज़रूरी है।" },
      { instruction:"नाक दबाएं", normal:"नाक का नरम हिस्सा दबाएं। बिना छोड़े 10–15 मिनट रोकें।", remedy:"कोई घरेलू उपाय नहीं — बस मजबूती से पकड़े रहें।" },
      { instruction:"ठंडी सिकाई", normal:"रक्त वाहिकाओं को सिकोड़ने के लिए नाक की हड्डी पर ठंडा कपड़ा रखें।", remedy:"ठंडे पानी में थोड़ा नीम का अर्क मिलाने से खून का बहाव कम होने में मदद मिल सकती है।" },
      { instruction:"अधिक हो तो मदद लें", normal:"20 मिनट बाद भी खून न रुके या सिर की चोट के बाद हो — अस्पताल जाएं।", remedy:"अधिक खून बहने पर कोई घरेलू उपाय नहीं — तुरंत जाएं।" }
    ]},
    { icon:"🤕", name:"सिर की चोट", desc:"गिरना, टकराना, कन्कशन", steps:[
      { instruction:"स्थिर रखें", normal:"व्यक्ति को न हिलाएं, खासकर सिर और गर्दन का हिस्सा।", remedy:"कोई उपाय नहीं — स्थिरता ही सब कुछ है।" },
      { instruction:"होश जांचें", normal:"उनका नाम और वे कहां हैं पूछें। भ्रम या बेहोशी पर ध्यान दें।", remedy:"कोई उपाय नहीं — प्रतिक्रियाओं पर ध्यान से नज़र रखें।" },
      { instruction:"खून रोकें", normal:"घाव पर साफ कपड़े से धीरे से दबाव लगाएं।", remedy:"सिर के घावों के लिए कोई घरेलू उपाय नहीं — केवल साफ कपड़ा।" },
      { instruction:"अभी 108 पर कॉल करें", normal:"सिर की चोटें गंभीर हो सकती हैं। हमेशा आपातकालीन चिकित्सा मूल्यांकन कराएं।", remedy:"कोई घरेलू उपाय नहीं — बिना देर किए तुरंत कॉल करें।" }
    ]},
    { icon:"❤️", name:"कार्डियक अरेस्ट", desc:"दिल रुक गया, बेहोश, नब्ज़ नहीं", steps:[
      { instruction:"प्रतिक्रिया जांचें", normal:"कंधों पर थपथपाएं और ज़ोर से पुकारें। अगर कोई प्रतिक्रिया और सांस नहीं — तुरंत CPR शुरू करें।", remedy:"कोई घरेलू उपाय नहीं — हर सेकंड कीमती है। देर न करें।" },
      { instruction:"अभी 108 पर कॉल करें", normal:"CPR करते हुए किसी से 108 पर कॉल करवाएं। अकेले हों तो स्पीकर पर कॉल करें।", remedy:"कोई उपाय नहीं — 108 पर कॉल CPR जितना ही ज़रूरी है।" },
      { instruction:"छाती दबाना शुरू करें", normal:"छाती के बीच में हथेली रखें। प्रति मिनट 100–120 बार तेज़ और गहरा दबाएं — कम से कम 5 सेमी गहरा।", remedy:"कोई घरेलू उपाय नहीं — सही तकनीक ही सब कुछ है।" },
      { instruction:"सांस दें", normal:"सिर पीछे झुकाएं, ठोड़ी ऊपर करें, नाक बंद करें, 2 धीमी सांसें दें। 30 दबाव : 2 सांसें का अनुपात।", remedy:"कोई उपाय नहीं — मदद आने तक CPR जारी रखें।" },
      { instruction:"AED उपलब्ध हो तो इस्तेमाल करें", normal:"पास में AED हो तो चालू करें और उसके निर्देशों का पालन करें।", remedy:"कोई घरेलू उपाय नहीं — 108 आने तक CPR न रोकें।" }
    ]},
    { icon:"🩸", name:"गंभीर रक्तस्राव", desc:"भारी अनियंत्रित खून बहना", steps:[
      { instruction:"मज़बूत दबाव दें", normal:"जो भी साफ कपड़ा मिले उससे ज़ोर से दबाएं। भीग जाए तो ऊपर और कपड़ा लगाएं — हटाएं नहीं।", remedy:"मोटा मुड़ा हुआ सूती कपड़ा मज़बूत दबाव के लिए काम आता है।" },
      { instruction:"अंग को ऊपर उठाएं", normal:"हाथ या पैर से खून आ रहा हो तो दिल के स्तर से ऊपर उठाएं — दबाव बनाए रखें।", remedy:"कोई घरेलू उपाय नहीं — ऊपर उठाना और दबाना साथ करें।" },
      { instruction:"गहरे घाव भरें", normal:"खुले घाव में साफ कपड़ा धीरे से भरें और मज़बूती से दबाएं।", remedy:"कोई उपाय नहीं — साफ कपड़ा इस्तेमाल करें।" },
      { instruction:"ज़रूरत हो तो टूर्निकेट लगाएं", normal:"जानलेवा रक्तस्राव न रुके तो घाव से 5 सेमी ऊपर बांधें। समय नोट करें।", remedy:"कोई घरेलू उपाय नहीं — यह अंतिम उपाय है, पहला नहीं।" },
      { instruction:"तुरंत 108 पर कॉल करें", normal:"गंभीर रक्तस्राव मिनटों में जानलेवा हो सकता है। तुरंत 108 पर कॉल करें।", remedy:"कोई घरेलू उपाय नहीं — अभी 108 पर कॉल करें।" }
    ]},
    { icon:"🧠", name:"स्ट्रोक", desc:"FAST परीक्षण: चेहरा, बांह, बोली, समय", steps:[
      { instruction:"FAST परीक्षण करें", normal:"चेहरा झुका है? बांह कमज़ोर है? बोली अस्पष्ट है? तो तुरंत 108 पर कॉल करें।", remedy:"कोई घरेलू उपाय नहीं — पहचान की गति मस्तिष्क की कोशिकाएं बचाती है।" },
      { instruction:"तुरंत 108 पर कॉल करें", normal:"स्ट्रोक का इलाज केवल कुछ घंटों में काम करता है। खुद न जाएं — 108 पर कॉल करें।", remedy:"कोई उपाय नहीं — समय बर्बाद करना दिमाग को नुकसान पहुंचाता है।" },
      { instruction:"उन्हें शांत रखें", normal:"उन्हें बैठाएं या लिटाएं। मुंह से कुछ भी खाने-पीने या दवा देने से बचें।", remedy:"कोई घरेलू उपाय नहीं — मदद आने तक स्थिर रखें।" },
      { instruction:"समय नोट करें", normal:"लक्षण शुरू होने का सटीक समय नोट करें। यह डॉक्टरों के लिए बेहद ज़रूरी है।", remedy:"कोई उपाय नहीं — सही समय सही इलाज चुनने में मदद करता है।" },
      { instruction:"उन्हें अकेला न छोड़ें", normal:"उनके साथ रहें, ढांढस बंधाएं, एम्बुलेंस आने तक सांस की निगरानी करें।", remedy:"शांत रखना और हिलने न देना अभी सबसे बेहतरीन मदद है।" }
    ]},
    { icon:"💉", name:"एनाफिलेक्सिस", desc:"गंभीर एलर्जी, गले में सूजन", steps:[
      { instruction:"एपिनेफ्रिन दें", normal:"अगर EpiPen है तो तुरंत जांघ पर इस्तेमाल करें।", remedy:"एड्रेनालिन का कोई घरेलू विकल्प नहीं — यह जानलेवा स्थिति है।" },
      { instruction:"तुरंत 108 पर कॉल करें", normal:"एनाफिलेक्सिस मिनटों में जानलेवा है। प्राथमिक चिकित्सा करते हुए 108 पर कॉल करें।", remedy:"कोई उपाय नहीं — EpiPen के बाद भी अस्पताल ज़रूरी है।" },
      { instruction:"लिटाएं", normal:"पैर ऊपर करके लिटाएं (सांस में दिक्कत हो तो थोड़ा बैठाएं)। खड़ा न होने दें।", remedy:"कोई घरेलू उपाय नहीं — सही स्थिति शॉक का खतरा कम करती है।" },
      { instruction:"तंग कपड़े ढीले करें", normal:"कॉलर, बेल्ट या तंग कपड़े ढीले करें।", remedy:"कोई उपाय नहीं — मदद का इंतज़ार करते हुए अधिकतम आराम दें।" },
      { instruction:"दूसरी EpiPen दें", normal:"5–10 मिनट में सुधार न हो और दूसरी EpiPen हो तो दें।", remedy:"कोई घरेलू उपाय नहीं — डॉक्टर आने तक सांस की निगरानी करें।" }
    ]},
    { icon:"💔", name:"हार्ट अटैक", desc:"सीने में दर्द, बांह में दर्द, पसीना", steps:[
      { instruction:"लक्षण पहचानें", normal:"सीने में दबाव जैसा दर्द, बाईं बांह या जबड़े में दर्द, पसीना, मतली, सांस लेने में तकलीफ।", remedy:"एलर्जी न हो और होश में हो तो एक एस्पिरिन (325mg) चबाएं — खून के थक्के कम होते हैं।" },
      { instruction:"तुरंत 108 पर कॉल करें", normal:"खुद अस्पताल न जाएं। 108 पर कॉल करें और लक्षण स्पष्ट बताएं।", remedy:"कोई घरेलू उपाय नहीं — एस्पिरिन लेकर मदद का इंतज़ार करें।" },
      { instruction:"बैठाएं", normal:"उन्हें आरामदायक स्थिति में बैठाएं (थोड़ा झुककर बैठना बेहतर है)। तंग कपड़े ढीले करें।", remedy:"शांत रखने से दिल की ऑक्सीजन की ज़रूरत कम होती है।" },
      { instruction:"एस्पिरिन दें", normal:"होश में हों और एलर्जी न हो तो 325mg एस्पिरिन चबाएं (निगलें नहीं)।", remedy:"कोई और घरेलू उपाय नहीं — खाना, पानी या अन्य दवाएं न दें।" },
      { instruction:"CPR के लिए तैयार रहें", normal:"बेहोश हो जाएं और सांस बंद हो तो 108 का इंतज़ार करते हुए तुरंत CPR शुरू करें।", remedy:"कोई घरेलू उपाय नहीं — तेज़ CPR जीवन और मृत्यु का फ़र्क कर सकती है।" }
    ]},
    { icon:"⚡", name:"दौरा", desc:"मिर्गी, कंपकंपी, नियंत्रण खोना", steps:[
      { instruction:"उन्हें सुरक्षित रखें", normal:"पास की कठोर या नुकीली चीज़ें हटाएं। सिर के नीचे कुछ नरम रखें। पकड़ें नहीं।", remedy:"कोई घरेलू उपाय नहीं — दौरे के दौरान चोट से बचाना ही लक्ष्य है।" },
      { instruction:"समय नोट करें", normal:"शुरुआत का समय देखें। 5 मिनट से ज़्यादा हो या दो बार आए — 108 पर कॉल करें।", remedy:"कोई उपाय नहीं — समय चिकित्सा प्रतिक्रिया निर्देशित करता है।" },
      { instruction:"रिकवरी पोज़िशन में रखें", normal:"कंपकंपी रुकने के बाद धीरे से करवट दिलाएं — लार या उल्टी से दम घुटने से बचाने के लिए।", remedy:"कोई घरेलू उपाय नहीं — वायुमार्ग साफ रखना ज़रूरी है।" },
      { instruction:"मुंह में कुछ न डालें", normal:"उंगलियां, चम्मच या कुछ भी मुंह में न डालें। जीभ निगलना असंभव है — यह भ्रामक धारणा है।", remedy:"कोई उपाय नहीं — वायुमार्ग साफ रखें और व्यक्ति को सुरक्षित रखें।" },
      { instruction:"ज़रूरत हो तो 108 पर कॉल करें", normal:"पहला दौरा, 5 मिनट से ज़्यादा, चोट लगे, गर्भवती, मधुमेह हो, या होश न आए — 108 पर कॉल करें।", remedy:"पूरी तरह होश आने पर तुलसी या गुनगुना पानी दें।" }
    ]},
    { icon:"🐍", name:"सांप का काटना", desc:"काटने का घाव, सूजन, चक्कर", steps:[
      { instruction:"हिलें नहीं", normal:"काटे हुए अंग को तुरंत स्थिर करें। हिलने से ज़हर तेज़ी से फैलता है।", remedy:"कोई घरेलू उपाय नहीं — स्थिर रहना सांप के काटने की सबसे प्रभावी प्राथमिक चिकित्सा है।" },
      { instruction:"तुरंत 108 पर कॉल करें", normal:"सांप का काटना घंटों में जानलेवा हो सकता है। 108 पर कॉल करें और सांप का विवरण दें।", remedy:"पारंपरिक उपाय नहीं — चूसना, काटना, टूर्निकेट सब खतरनाक अंधविश्वास हैं।" },
      { instruction:"गहने हटाएं", normal:"सूजन आने से पहले काटने वाली जगह के पास के छल्ले, घड़ी, कड़े हटाएं।", remedy:"कोई घरेलू उपाय नहीं — सूजन के बाद हटाना असंभव हो जाता है।" },
      { instruction:"सूजन चिह्नित करें", normal:"सूजन के किनारे पर पेन से घेरा बनाएं और समय लिखें। ज़हर फैलाव ट्रैक करने में मदद करता है।", remedy:"कोई घरेलू उपाय नहीं — प्रगति ट्रैकिंग अस्पताल टीमों की मदद करती है।" },
      { instruction:"शांत रहें और प्रतीक्षा करें", normal:"लिटाएं। काटे हुए अंग को दिल के स्तर पर या नीचे रखें। खाना, पानी, शराब न दें।", remedy:"कोई घरेलू उपाय नहीं — एंटी-वेनम ही इलाज है। जल्दी अस्पताल जाएं।" }
    ]},
    { icon:"🌞", name:"हीट स्ट्रोक", desc:"गर्मी, भ्रम, पसीना न आना", steps:[
      { instruction:"तुरंत छाया में ले जाएं", normal:"उन्हें धूप या गर्मी से हटाकर ठंडी, छायादार या AC वाली जगह ले जाएं।", remedy:"ठंडा पानी छिड़कते हुए पंखे से हवा करें — वाष्पीकरण शरीर को जल्दी ठंडा करता है।" },
      { instruction:"शरीर जल्दी ठंडा करें", normal:"गर्दन, बगल, जांघ की तह और माथे पर ठंडे गीले कपड़े लगाएं — ये मुख्य रक्तवाहिका क्षेत्र हैं।", remedy:"माथे, कलाई और गर्दन पर ठंडे पानी में भीगा कपड़ा — पारंपरिक और प्रभावी।" },
      { instruction:"108 पर कॉल करें", normal:"शरीर का तापमान 40°C से ऊपर, भ्रम, पसीना न आना — चिकित्सा आपातकाल। अभी 108 पर कॉल करें।", remedy:"पूरी तरह होश में हों तो ठंडा पानी या ORS के घूंट दें।" },
      { instruction:"होश में हों तो पानी दें", normal:"जाग रहे हों और उल्टी न हो रही हो तो ठंडा पानी या ORS के घूंट दें।", remedy:"काला नमक डला नारियल पानी — भारत में उपलब्ध सबसे अच्छा प्राकृतिक ORS।" },
      { instruction:"सांस की निगरानी करें", normal:"हीट स्ट्रोक बेहोशी ला सकता है। प्रतिक्रिया न हो तो रिकवरी पोज़िशन में रखें और मदद आने तक पास रहें।", remedy:"बेहोश हों तो कोई घरेलू उपाय नहीं — 108 पर कॉल करके साथ रहें।" }
    ]},
    { icon:"🤰", name:"गर्भावस्था आपातकाल", desc:"रक्तस्राव, प्रसव, तेज़ दर्द", steps:[
      { instruction:"तुरंत 108 पर कॉल करें", normal:"गर्भावस्था में भारी रक्तस्राव, अचानक तेज़ दर्द, या समय से पहले प्रसव के लक्षण — तुरंत 108 पर कॉल करें।", remedy:"कोई घरेलू उपाय नहीं — मातृ आपातकाल में तुरंत अस्पताल ज़रूरी है।" },
      { instruction:"बाईं करवट लिटाएं", normal:"उन्हें बाईं करवट लिटाएं। यह शिशु को रक्त प्रवाह बेहतर करता है और मुख्य रक्तवाहिकाओं पर दबाव कम करता है।", remedy:"कोई घरेलू उपाय नहीं — बाईं करवट चिकित्सीय रूप से महत्वपूर्ण है।" },
      { instruction:"प्रसव तुरंत हो तो", normal:"108 आने से पहले शिशु आने वाला लगे तो: उन्हें शांत करें, हाथ धोएं, शिशु को लेने के लिए साफ कपड़े तैयार करें।", remedy:"गर्म साफ कपड़े और शांत आश्वासन — अभी उपलब्ध सबसे अच्छे साधन।" },
      { instruction:"कुछ न हटाएं", normal:"जन्म नाल में कोई ऊतक या गर्भनाल दिखे — खींचें या धकेलें नहीं। चिकित्सा सहायता का इंतज़ार करें।", remedy:"कोई घरेलू उपाय नहीं — उन्हें शांत और साफ रखें।" },
      { instruction:"गर्म और शांत रखें", normal:"कंबल ओढ़ाएं, पास रहें, डॉक्टर आने तक ढांढस बंधाते रहें।", remedy:"पूरी तरह होश में हों और सक्रिय प्रसव न हो तभी अदरक-शहद का गुनगुना पानी दें।" }
    ]},
    { icon:"👶", name:"बच्चे को ज्वर दौरा", desc:"बुखार से बच्चे को दौरा पड़ना", steps:[
      { instruction:"शांत रहें और बचाएं", normal:"बच्चे को नरम समतल जगह पर रखें। आसपास साफ करें। सिर के नीचे नरम चीज़ रखें। पकड़ें नहीं।", remedy:"कोई घरेलू उपाय नहीं — बच्चे को चोट से बचाना ही एकमात्र काम है।" },
      { instruction:"समय नोट करें", normal:"शुरुआत का समय देखें। अधिकांश ज्वर दौरे 1–3 मिनट में खुद ही रुक जाते हैं।", remedy:"कोई उपाय नहीं — समय महत्वपूर्ण चिकित्सा जानकारी है।" },
      { instruction:"बुखार ठंडा करें", normal:"दौरा रुकने के बाद अतिरिक्त कपड़े उतारें। माथे पर ठंडा गीला कपड़ा रखें। निर्देशानुसार पैरासिटामॉल दें।", remedy:"दौरा रुकने और बच्चे के होश में आने के बाद गुनगुने पानी में तुलसी और अदरक बुखार धीरे कम करता है।" },
      { instruction:"रिकवरी पोज़िशन में रखें", normal:"कंपकंपी रुकने के बाद बच्चे को करवट दिलाएं। सांस जांचें।", remedy:"कोई घरेलू उपाय नहीं — वायुमार्ग साफ रखें।" },
      { instruction:"डॉक्टर से मिलें", normal:"ज्वर दौरे के बाद हमेशा डॉक्टर से मिलें। 5 मिनट से ज़्यादा हो — तुरंत 108 पर कॉल करें।", remedy:"बच्चे के पूरी तरह होश में आने के बाद छोटे-छोटे घूंट में नारियल पानी निर्जलीकरण में मदद करता है।" }
    ]},
    { icon:"☠️", name:"ज़हर खाना", desc:"खाद्य विषाक्तता, रसायन, दवा ओवरडोज़", steps:[
      { instruction:"क्या खाया पहचानें", normal:"क्या निगला, कब और कितना — पता करें। कंटेनर मिले तो डॉक्टर को दिखाने के लिए रखें।", remedy:"कोई घरेलू उपाय नहीं — क्या खाया यह जानना सबसे ज़रूरी पहला कदम है।" },
      { instruction:"108 या पॉइज़न कंट्रोल पर कॉल करें", normal:"तुरंत 108 पर कॉल करें। भारत पॉइज़न कंट्रोल: 1800-11-6117 (मुफ़्त)। पदार्थ स्पष्ट बताएं।", remedy:"कोई घरेलू उपाय नहीं — मदद के लिए कॉल करने में देरी न करें।" },
      { instruction:"उल्टी न कराएं", normal:"पॉइज़न कंट्रोल के निर्देश के बिना उल्टी न कराएं। संक्षारक या पेट्रोलियम पदार्थों के लिए यह अधिक नुकसान करता है।", remedy:"कोई घरेलू उपाय नहीं — गलत ज़हर के लिए उल्टी कराना जानलेवा हो सकता है।" },
      { instruction:"त्वचा या आंख पर रसायन हो तो", normal:"15–20 मिनट भरपूर साफ पानी से त्वचा या आंखें धोएं। दूषित कपड़े हटाएं।", remedy:"सादा बहता पानी ही सबसे सुरक्षित धुलाई है — इसमें कोई चीज़ न मिलाएं।" },
      { instruction:"निगरानी करते रहें", normal:"सांस और होश देखते रहें। बेहोश हों और सांस हो तो रिकवरी पोज़िशन दें। सांस रुके तो CPR शुरू करें।", remedy:"कोई घरेलू उपाय नहीं — मदद आने तक 108 के साथ फोन पर रहें।" }
    ]},
    { icon:"😵", name:"बेहोशी", desc:"अचानक गिरना, चेतना खोना", steps:[
      { instruction:"सुरक्षित नीचे लाएं", normal:"बेहोशी आती दिखे तो धीरे से नीचे लाएं। समतल जगह पर लिटाएं।", remedy:"गिरते समय कोई घरेलू उपाय नहीं — चोट से बचाना सब कुछ है।" },
      { instruction:"पैर ऊपर उठाएं", normal:"पैरों को दिल के स्तर से 20–30 सेमी ऊपर उठाएं। यह मस्तिष्क में खून तेज़ी से वापस भेजता है।", remedy:"कोई घरेलू उपाय नहीं — 2–3 मिनट पैर ऊपर रखें।" },
      { instruction:"तंग कपड़े ढीले करें", normal:"कॉलर, बेल्ट या तंग चीज़ें ढीली करें। खिड़कियां खोलें या पंखे से ताज़ी हवा दें।", remedy:"चेहरे पर कुछ पानी की बूंदें छिड़कने से हल्की रिकवरी में मदद मिल सकती है।" },
      { instruction:"सांस जांचें", normal:"होश आने पर सांस सामान्य है या नहीं जांचें। सरल सवाल पूछें — नाम, कहां हैं।", remedy:"पूरी तरह होश आने पर बैठकर ठंडा पानी या ORS के घूंट दें।" },
      { instruction:"चिकित्सा सहायता लें", normal:"पहली बार बेहोशी, सीने के दर्द के बाद बेहोशी, या 1–2 मिनट में होश न आए — 108 पर कॉल करें।", remedy:"पूरी तरह होश आने पर तुलसी या अदरक का पानी धीरे-धीरे पीने से हल्की कमज़ोरी में मदद मिलती है।" }
    ]}
  ]
};

// UI Text translations
const T = {
  en:{ welcome:"What happened?", sub:"Select your injury below. We'll guide you step by step, calmly.", injuryLabel:"Select Injury", tapSpeak:"Tap to Speak", readAloud:"Read aloud", nextStep:"Done → Next Step", allDone:"✅ All Done!", sevTitle:"How bad is it?", sevSub:"Answer these quick questions so we can guide you.", sevCheck:"Check Severity", doneTitle:"You handled it! 💪", doneSub:"You completed all first aid steps. You did great under pressure. If symptoms worsen, visit a hospital.", mapTitle:"Nearby Hospitals", mapSearching:"Finding hospitals near you...", mapError:"Could not get your location. Please enable GPS.", mapNone:"No hospitals found within 5km.", mapBack:"← Back to Home" },
  te:{ welcome:"ఏమి జరిగింది?", sub:"దిగువ మీ గాయాన్ని ఎంచుకోండి. మేము దశ దశగా మీకు సహాయం చేస్తాము.", injuryLabel:"గాయాన్ని ఎంచుకోండి", tapSpeak:"మాట్లాడటానికి నొక్కండి", readAloud:"చదివి వినిపించు", nextStep:"తదుపరి దశ →", allDone:"✅ అన్నీ పూర్తయ్యాయి!", sevTitle:"ఎంత తీవ్రంగా ఉంది?", sevSub:"మేము మీకు సహాయం చేయడానికి కొన్ని ప్రశ్నలు అడుగుతాము.", sevCheck:"తీవ్రత తనిఖీ చేయండి", doneTitle:"మీరు చేశారు! 💪", doneSub:"అన్ని ప్రాథమిక చికిత్స దశలు పూర్తయ్యాయి. లక్షణాలు తీవ్రమైతే వైద్యుడిని సంప్రదించండి.", mapTitle:"దగ్గరలోని ఆసుపత్రులు", mapSearching:"మీ దగ్గర ఆసుపత్రులు వెతుకుతున్నాము...", mapError:"మీ లొకేషన్ తెలుసుకోలేకపోయాము. GPS ఆన్ చేయండి.", mapNone:"5km లోపల ఆసుపత్రులు కనుగొనబడలేదు.", mapBack:"← హోమ్‌కు తిరిగి వెళ్ళు" },
  hi:{ welcome:"क्या हुआ?", sub:"नीचे अपनी चोट चुनें। हम आपको कदम दर कदम मार्गदर्शन करेंगे।", injuryLabel:"चोट चुनें", tapSpeak:"बोलने के लिए टैप करें", readAloud:"ज़ोर से पढ़ें", nextStep:"हो गया → अगला", allDone:"✅ सब हो गया!", sevTitle:"कितनी गंभीर है?", sevSub:"हम आपकी मदद के लिए कुछ सवाल पूछेंगे।", sevCheck:"गंभीरता जांचें", doneTitle:"आपने कर दिया! 💪", doneSub:"सभी प्राथमिक चिकित्सा चरण पूरे हो गए। यदि लक्षण बिगड़ें तो डॉक्टर से मिलें।", mapTitle:"नज़दीकी अस्पताल", mapSearching:"आपके पास अस्पताल ढूंढ रहे हैं...", mapError:"आपकी लोकेशन नहीं मिली। GPS चालू करें।", mapNone:"5km के अंदर कोई अस्पताल नहीं मिला।", mapBack:"← होम पर वापस जाएं" }
};
