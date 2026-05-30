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
    ]}
  ]
};

// UI Text translations
const T = {
  en:{ welcome:"What happened?", sub:"Select your injury below. We'll guide you step by step, calmly.", injuryLabel:"Select Injury", tapSpeak:"Tap to Speak", readAloud:"Read aloud", nextStep:"Done → Next Step", allDone:"✅ All Done!", sevTitle:"How bad is it?", sevSub:"Answer these quick questions so we can guide you.", sevCheck:"Check Severity", doneTitle:"You handled it! 💪", doneSub:"You completed all first aid steps. You did great under pressure. If symptoms worsen, visit a hospital.", mapTitle:"Nearby Hospitals", mapSearching:"Finding hospitals near you...", mapError:"Could not get your location. Please enable GPS.", mapNone:"No hospitals found within 5km.", mapBack:"← Back to Home" },
  te:{ welcome:"ఏమి జరిగింది?", sub:"దిగువ మీ గాయాన్ని ఎంచుకోండి. మేము దశ దశగా మీకు సహాయం చేస్తాము.", injuryLabel:"గాయాన్ని ఎంచుకోండి", tapSpeak:"మాట్లాడటానికి నొక్కండి", readAloud:"చదివి వినిపించు", nextStep:"తదుపరి దశ →", allDone:"✅ అన్నీ పూర్తయ్యాయి!", sevTitle:"ఎంత తీవ్రంగా ఉంది?", sevSub:"మేము మీకు సహాయం చేయడానికి కొన్ని ప్రశ్నలు అడుగుతాము.", sevCheck:"తీవ్రత తనిఖీ చేయండి", doneTitle:"మీరు చేశారు! 💪", doneSub:"అన్ని ప్రాథమిక చికిత్స దశలు పూర్తయ్యాయి. లక్షణాలు తీవ్రమైతే వైద్యుడిని సంప్రదించండి.", mapTitle:"దగ్గరలోని ఆసుపత్రులు", mapSearching:"మీ దగ్గర ఆసుపత్రులు వెతుకుతున్నాము...", mapError:"మీ లొకేషన్ తెలుసుకోలేకపోయాము. GPS ఆన్ చేయండి.", mapNone:"5km లోపల ఆసుపత్రులు కనుగొనబడలేదు.", mapBack:"← హోమ్‌కు తిరిగి వెళ్ళు" },
  hi:{ welcome:"क्या हुआ?", sub:"नीचे अपनी चोट चुनें। हम आपको कदम दर कदम मार्गदर्शन करेंगे।", injuryLabel:"चोट चुनें", tapSpeak:"बोलने के लिए टैप करें", readAloud:"ज़ोर से पढ़ें", nextStep:"हो गया → अगला", allDone:"✅ सब हो गया!", sevTitle:"कितनी गंभीर है?", sevSub:"हम आपकी मदद के लिए कुछ सवाल पूछेंगे।", sevCheck:"गंभीरता जांचें", doneTitle:"आपने कर दिया! 💪", doneSub:"सभी प्राथमिक चिकित्सा चरण पूरे हो गए। यदि लक्षण बिगड़ें तो डॉक्टर से मिलें।", mapTitle:"नज़दीकी अस्पताल", mapSearching:"आपके पास अस्पताल ढूंढ रहे हैं...", mapError:"आपकी लोकेशन नहीं मिली। GPS चालू करें।", mapNone:"5km के अंदर कोई अस्पताल नहीं मिला।", mapBack:"← होम पर वापस जाएं" }
};
