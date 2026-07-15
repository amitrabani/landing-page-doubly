const hi = {
  // Shared
  common: {
    tryInDoubly: 'Doubly में आज़माएँ',
    changeLanguage: 'भाषा बदलें',
    socialProof: (count: number) => `${count.toLocaleString('hi-IN')} ADHDers के साथ जुड़ें`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    tools: 'टूल',
    howItWorks: 'यह कैसे काम करता है',
    features: 'फ़ीचर्स',
    testimonials: 'समीक्षाएँ',
    faq: 'सामान्य सवाल',
    cta: 'Doubly पाएँ',
    toggleMenu: 'मेन्यू टॉगल करें',
  },

  // Hero
  hero: {
    badge: 'ADHD दिमाग़ों के लिए बना',
    titlePrefix: 'जब आपके दिमाग़ में ',
    titleHighlight: '47 टैब खुले हों',
    subtitle: 'एक मिनट से भी कम में अफ़रा-तफ़री को एक साफ़ अगले कदम में बदलें।',
    cta: 'App Store से डाउनलोड करें',
    secondaryCta: 'देखें यह किसी काम को कैसे बाँटता है ↓',
    android: {
      prompt: 'Android इस्तेमाल करते हैं?',
      placeholder: 'you@email.com',
      submit: 'मुझे बताएँ',
      success: 'आप सूची में शामिल हैं। जब Doubly Android पर आएगा, हम आपको ईमेल करेंगे।',
      invalid: 'कृपया एक मान्य ईमेल दर्ज करें।',
      error: 'कुछ गड़बड़ हो गई। कृपया फिर से कोशिश करें।',
    },
    floatingCards: {
      brainDump: 'ब्रेन डंप',
      habits: 'आदतें',
      accountability: 'जवाबदेही',
    },
    phone: {
      screenAlt: 'Doubly ऐप जो आपकी आदतें रोज़ाना की स्ट्रीक और प्रोग्रेस ग्रिड के साथ दिखाता है',
    },
  },

  // Problem
  problem: {
    title: 'ADHD सिर्फ़ अव्यवस्थित होना नहीं है',
    titleHighlight: 'अव्यवस्थित',
    subtitle:
      'यह एक ऐसे दिमाग़ के साथ रोज़ाना की लड़ाई है जो आपके अपने इरादों का साथ नहीं देता।',
    cards: [
      {
        type: 'External',
        title: 'बहुत सारे काम। बहुत सारे ख़्याल।',
        body: 'शुरू करने के लिए कोई साफ़ जगह नहीं।',
      },
      {
        type: 'Internal',
        title: 'आपको पता है क्या करना है, फिर भी शुरू नहीं कर पाते।',
        body: 'यह आलस नहीं है। यह शुरुआत करने की रुकावट है।',
      },
      {
        type: 'Philosophical',
        title: 'शुरू करना इतना मुश्किल नहीं होना चाहिए।',
        body: 'आपका दिमाग़ अलग तरह से काम करता है। आपके औज़ार भी वैसे ही होने चाहिए।',
      },
      {
        type: 'Stakes',
        title: 'और यह आपसे सिर्फ़ समय से ज़्यादा छीन रहा है।',
        body: 'चीज़ें जमा होती जाती हैं। आप पिछड़ जाते हैं। आप ख़ुद पर भरोसा खोने लगते हैं।',
      },
    ],
  },

  // VisualProblem
  visualProblem: {
    cards: [
      { image: '/problem-1.jpg', alt: 'बहुत सारे काम। बहुत सारे ख़्याल।' },
      { image: '/problem-2.jpg', alt: 'आपको पता है क्या करना है, फिर भी शुरू नहीं कर पाते।' },
      { image: '/problem-4.jpg', alt: 'आम चीज़ें शुरू करना इतना मुश्किल नहीं होना चाहिए।' },
      { image: '/problem-3.jpg', alt: 'और यह आपसे सिर्फ़ समय से ज़्यादा छीन रहा है।' },
    ],
  },

  // Guide
  guide: {
    title: 'ख़ास उन ADHD दिमाग़ों के लिए बना जो शुरू करने में जूझते हैं',
    subtitle:
      'ज़्यादातर प्रोडक्टिविटी ऐप्स मान लेते हैं कि आपका दिमाग़ प्लान करने के लिए तैयार है। Doubly उस पल के लिए बना है जब आप घबराए हुए, अटके हुए, या टाल रहे हों — इस आधार पर कि ADHD असल में कैसे काम करता है।',
    proofPoints: [
      'ADHD की रुकावट के लिए बना, आम प्रोडक्टिविटी के लिए नहीं',
      'शुरुआत की रुकावट कम करने में मदद करता है',
      'बिना घबराए एक ढाँचा देता है',
    ],
    mockup: {
      brainDump: 'ब्रेन डंप',
      items: ['डेंटिस्ट को कॉल करना', 'किराना खरीदना', 'बॉस को जवाब देना', 'कपड़े धोना', 'मैं इतना थका क्यों हूँ'],
      yourNextStep: 'आपका अगला कदम',
      nextStepTask: 'कपड़े वॉशर में डालना',
      nextStepMeta: '~5 मिनट · कम ऊर्जा',
      accountability: 'जवाबदेही',
      accountabilityText: 'सारा दोपहर 3 बजे हाल-चाल लेगी',
    },
  },

  // BrainDumpDemo
  brainDumpDemo: {
    title: 'अफ़रा-तफ़री बाहर निकालें। काम रख लें।',
    titleHighlight: 'काम रख लें।',
    replayDemo: 'डेमो फिर से चलाएँ',
    subtitle:
      'दिमाग़ भरा हुआ है? 20 सेकंड टाइप करें। Doubly करने लायक चीज़ें निकाल लेता है और शोर फेंक देता है।',
    dumpText:
      'मैं प्रोडक्टिव बनने के लिए अपना लैपटॉप खोलता हूँ और पाँच सेकंड के अंदर मेरा दिमाग़ कुछ ऐसा हो जाता है: उस मैसेज का जवाब देना, विटामिन ऑर्डर करना, सिंक साफ़ करना, चार्जर ढूँढना, कुछ खाना, और वो बेहद ज़रूरी काम भी याद रखना जिसे तुम बिल्कुल नहीं भूलने वाले थे। जो मैं फ़ौरन भूल गया।',
    brainDumpLabel: 'ब्रेन डंप',
    brainDumpPlaceholder: 'बस सब बाहर निकल जाने दें...',
    extractedTasksLabel: 'निकाले गए काम',
    listening: 'सुन रहे हैं...',
    tasksFound: (count: number) => `${count} काम मिल${count > 1 ? 'े' : 'ा'}`,
    filterNote: 'बिना काम वाले ख़्याल छाँट दिए गए। सिर्फ़ असली काम रखे गए।',
    tasks: [
      { text: '💊 विटामिन ऑर्डर करें', phrase: 'विटामिन ऑर्डर करना' },
      { text: '🧽 सिंक साफ़ करें', phrase: 'सिंक साफ़ करना' },
      { text: '🔌 चार्जर ढूँढें', phrase: 'चार्जर ढूँढना' },
      { text: '🍽️ कुछ खाएँ', phrase: 'कुछ खाना' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: 'अटकन से बाहर निकलने का तरीका यह है',
    titleHighlight: 'अटकन से बाहर निकलने',
    subtitle: 'चार आसान कदम। कोई जटिल सेटअप नहीं। कुछ सीखने की झंझट नहीं।',
    stepLabel: 'कदम',
    steps: [
      {
        number: '01',
        title: 'अपना दिमाग़ ख़ाली करें',
        body: 'ख़्याल, काम और दिमाग़ी उलझन को झटपट लिख लें। कुछ व्यवस्थित करने की ज़रूरत नहीं। बस सब बाहर निकाल दें।',
      },
      {
        number: '02',
        title: 'एक साफ़ अगला कदम पाएँ',
        body: 'Doubly घबराहट को किसी ऐसी चीज़ में बदल देता है जिसे आप सचमुच शुरू कर सकें। दस प्राथमिकताएँ नहीं। एक।',
      },
      {
        number: '03',
        title: 'चलते रहें',
        body: 'जवाबदेही, टाइमर और प्रोग्रेस टूल्स का इस्तेमाल करके चलते रहें, तब भी जब जोश कम पड़ने लगे।',
      },
      {
        number: '04',
        title: 'जवाबदेह बनें',
        body: 'Doubly फ़ीड में दोस्तों के साथ शेयर करें। असली जवाबदेही तब आती है जब कोई आपका हौसला बढ़ा रहा हो।',
      },
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: 'कोई काम टाइप करें। उसे बँटते देखें।',
    titleHighlight: 'बँटते देखें।',
    subtitle:
      'बड़े काम नामुमकिन लगते हैं। Doubly उन्हें 2–5 मिनट के कदमों में बाँट देता है ताकि आप बस शुरू कर सकें।',
    customInputPlaceholder: 'या अपना कोई काम टाइप करें...',
    splitButton: 'इसे बाँटें',
    taskLabel: 'काम',
    aiThinking: 'AI इसे बाँट रहा है...',
    errorMessage: 'अभी AI तक नहीं पहुँच सके। ऊपर से कोई तैयार काम चुनें या फिर से कोशिश करें।',
    tryAgain: 'फिर से कोशिश करें',
    stepsDone: (done: number, total: number) => `${done}/${total} कदम पूरे`,
    minTotal: (min: number) => `कुल ~${min} मिनट`,
    urgencySuffix: 'तात्कालिकता',
    urgencyLabels: { low: 'कम अर्जेंसी', medium: 'मध्यम अर्जेंसी', high: 'ज़्यादा अर्जेंसी' },
    allDoneMessage: 'सब हो गया। इतना मुश्किल भी नहीं था, है ना?',
    allDoneDescription:
      'Doubly हर उस काम के साथ यही करता है जो आप इसे देते हैं। अब किसी विशाल टू-डू लिस्ट को घूरते रहने की ज़रूरत नहीं।',
    allDoneCta: 'अभी अटकन से बाहर निकलें',
    presets: [
      { label: 'रसोई साफ़ करें', icon: '🍳' },
      { label: 'कपड़े धोएँ', icon: '🧰' },
      { label: 'रात का खाना बनाएँ', icon: '🍲' },
      { label: 'बाथरूम साफ़ करें', icon: '🚿' },
      { label: 'बेडरूम व्यवस्थित करें', icon: '🛏️' },
      { label: 'किराने की खरीदारी', icon: '🛒' },
    ],
    presetResults: {
      'रसोई साफ़ करें': {
        title: '🍳 रसोई साफ़ करें',
        subtasks: [
          { text: 'काउंटरटॉप ख़ाली करें और चीज़ें जगह पर रखें', duration: '3 मिनट' },
          { text: 'गंदे बर्तन डिशवॉशर में डालें', duration: '5 मिनट' },
          { text: 'काउंटरटॉप और चूल्हा पोंछें', duration: '4 मिनट' },
          { text: 'सिंक रगड़कर साफ़ करें', duration: '2 मिनट' },
          { text: 'फ़र्श पर झाड़ू लगाएँ', duration: '3 मिनट' },
          { text: 'कचरा बाहर निकालें', duration: '2 मिनट' },
        ],
        urgency: 'medium',
      },
      'कपड़े धोएँ': {
        title: '🧰 कपड़े धोएँ',
        subtasks: [
          { text: 'घर भर से गंदे कपड़े इकट्ठा करें', duration: '5 मिनट' },
          { text: 'सफ़ेद, रंगीन और नाज़ुक कपड़ों में छाँटें', duration: '3 मिनट' },
          { text: 'पहला बैच वॉशिंग मशीन में डालें', duration: '2 मिनट' },
          { text: 'पिछले लोड के सूखे कपड़े टाँगें या तह करें', duration: '10 मिनट' },
          { text: 'तह किए कपड़े दराज़/अलमारी में रखें', duration: '5 मिनट' },
        ],
        urgency: null,
      },
      'रात का खाना बनाएँ': {
        title: '🍲 रात का खाना बनाएँ',
        subtasks: [
          { text: 'तय करें क्या बनाना है और सामग्री जाँचें', duration: '3 मिनट' },
          { text: 'सब्ज़ियाँ धोएँ और तैयार करें', duration: '8 मिनट' },
          { text: 'मुख्य व्यंजन बनाना शुरू करें', duration: '15 मिनट' },
          { text: 'साइड डिश या सलाद तैयार करें', duration: '7 मिनट' },
          { text: 'मेज़ लगाएँ', duration: '2 मिनट' },
          { text: 'परोसें', duration: '2 मिनट' },
        ],
        urgency: 'low',
      },
      'बाथरूम साफ़ करें': {
        title: '🚿 बाथरूम साफ़ करें',
        subtasks: [
          { text: 'शॉवर, सिंक और टॉयलेट पर क्लीनर छिड़कें', duration: '2 मिनट' },
          { text: 'टॉयलेट बाउल रगड़ें और सीट पोंछें', duration: '3 मिनट' },
          { text: 'सिंक और नल साफ़ करें', duration: '2 मिनट' },
          { text: 'आईना पोंछें', duration: '1 मिनट' },
          { text: 'शॉवर/टब रगड़ें', duration: '5 मिनट' },
          { text: 'फ़र्श पोंछें या मॉप करें', duration: '3 मिनट' },
          { text: 'तौलिये बदलें और टॉयलेट पेपर भरें', duration: '2 मिनट' },
        ],
        urgency: 'medium',
      },
      'बेडरूम व्यवस्थित करें': {
        title: '🛏️ बेडरूम व्यवस्थित करें',
        subtasks: [
          { text: 'बिस्तर ठीक करें और तकिए सीधे करें', duration: '3 मिनट' },
          { text: 'फ़र्श और कुर्सियों से कपड़े उठाएँ', duration: '4 मिनट' },
          { text: 'गंदे कपड़े टोकरी में डालें, साफ़ कपड़े जगह पर रखें', duration: '5 मिनट' },
          { text: 'नाइटस्टैंड साफ़ और व्यवस्थित करें', duration: '3 मिनट' },
          { text: 'सतहों की धूल झाड़ें', duration: '3 मिनट' },
          { text: 'फ़र्श पर वैक्यूम या झाड़ू लगाएँ', duration: '4 मिनट' },
        ],
        urgency: 'low',
      },
      'किराने की खरीदारी': {
        title: '🛒 किराने की खरीदारी',
        subtasks: [
          { text: 'फ़्रिज और पैंट्री जाँचें कि क्या चाहिए', duration: '5 मिनट' },
          { text: 'गलियारे के हिसाब से सूची बनाएँ', duration: '5 मिनट' },
          { text: 'दोबारा इस्तेमाल होने वाले थैले लें', duration: '1 मिनट' },
          { text: 'खरीदारी करें और चीज़ें टिक करते जाएँ', duration: '30 मिनट' },
          { text: 'सामान खोलकर किराना जगह पर रखें', duration: '10 मिनट' },
        ],
        urgency: null,
      },
    },
  },

  // TwoQuestions
  twoQuestions: {
    title: 'क्या यह जाना-पहचाना लगता है?',
    titleHighlight: 'जाना-पहचाना',
    subtitle: 'आप आलसी नहीं हैं। आपके दिमाग़ को बस एक अलग शुरुआती बिंदु चाहिए।',
    withoutDoubly: 'Doubly के बिना',
    withDoubly: 'Doubly के साथ',
    rows: [
      {
        without: 'मैं जम जाता हूँ और समझ नहीं आता कहाँ से शुरू करूँ',
        with: 'ब्रेन डंप → एक साफ़ अगला कदम सामने आता है',
      },
      {
        without: 'मैं उसके बजाय छोटे-मोटे बेतरतीब काम करने लगता हूँ',
        with: 'Doubly पहले वही दिखाता है जो सचमुच मायने रखता है',
      },
      {
        without: 'मैं एक साथ 5 चीज़ें शुरू कर देता हूँ',
        with: 'स्क्रीन पर एक काम। उसे पूरा करें, फिर अगला।',
      },
      {
        without: 'मैं परफ़ेक्ट प्लान के बारे में हद से ज़्यादा सोचता हूँ',
        with: 'सब कुछ बाहर निकाल दें, Doubly पहला कदम चुन लेता है',
      },
      {
        without: 'मैं इसे तब तक टालता हूँ जब तक यह ज़रूरी न बन जाए — फिर घबरा जाता हूँ',
        with: 'आप घबराहट आने से पहले ही शुरू कर देते हैं',
      },
      {
        without: 'मैं अकेले काम करता हूँ और जल्दी रफ़्तार खो देता हूँ',
        with: 'बॉडी डबलिंग और जवाबदेही साथी आपको चलते रखते हैं',
      },
    ],
    questionTitle: 'उस पल में आपको सबसे ज़्यादा किसकी ज़रूरत होती है?',
    options: [
      'एक ब्रेन डंप',
      'एक नन्हा अगला कदम',
      'जवाबदेही',
      'एक टाइमर / फ़ोकस का धक्का',
      'पिछड़ने पर एक नई शुरुआत',
    ],
    responseIntro: 'Doubly ठीक यहीं मदद करता है।',
    responses: {
      'एक ब्रेन डंप': {
        title: 'ब्रेन डंप → तुरंत साफ़-सफ़ाई',
        description:
          'अफ़रा-तफ़री टाइप कर दें। Doubly करने लायक चीज़ें निकाल लेता है और शोर फेंक देता है।',
      },
      'एक नन्हा अगला कदम': {
        title: 'अगला कदम, हमेशा तैयार',
        description:
          'Doubly बड़े कामों को बाँट देता है और आपको बस अगला छोटा कदम देता है। कोई घबराहट नहीं।',
      },
      'जवाबदेही': {
        title: 'जवाबदेही चेक-इन',
        description:
          'हल्के इशारे और सामाजिक जवाबदेही आपको बिना ग्लानि के पटरी पर बनाए रखते हैं।',
      },
      'एक टाइमर / फ़ोकस का धक्का': {
        title: 'फ़ोकस मोड',
        description:
          'स्क्रीन पर एक काम, एक टाइमर चलता हुआ, ध्यान भटकाने वाली चीज़ें गायब। बस आप और काम।',
      },
      'पिछड़ने पर एक नई शुरुआत': {
        title: 'नई शुरुआत, कोई ग्लानि नहीं',
        description:
          'पटरी से उतर गए? Doubly आपके प्लान को फिर से जमा देता है ताकि आप शर्मिंदगी के चक्कर में पड़े बिना फिर से शुरू कर सकें।',
      },
    },
    mockupNextStep: 'आपका अगला कदम तैयार है',
    mockupTask: 'एक छोटी चीज़ से शुरू करें',
    mockupCta: 'Doubly आज़माएँ',
  },


  // HabitDemo
  habitDemo: {
    title: 'ऐसी आदतें बनाएँ जो सचमुच टिकें',
    subtitle:
      'कोई स्ट्रीक टूटने का डर नहीं। कोई ग्लानि नहीं। बस जब काम करें तब टैप करें। Doubly पैटर्न को ट्रैक करता है ताकि आप प्रोग्रेस देख सकें।',
    todayLabel: 'आज',
    yourHabits: 'आपकी आदतें',
    weeksLabel: '12 हफ़्ते',
    lessLabel: 'कम',
    moreLabel: 'ज़्यादा',
    currentStreak: 'मौजूदा स्ट्रीक',
    bestStreak: 'सबसे अच्छी स्ट्रीक',
    completion: 'पूर्णता',
    allDoneMessage: 'आज की सारी आदतें पूरी!',
    allDoneDescription: 'हर दिन ऐसा सोचें। Doubly चलते रहना आसान बना देता है।',
    allDoneCta: 'अभी अटकन से बाहर निकलें',
    habits: [
      { id: 'walk', name: 'टहलने जाएँ', icon: '🚶' },
      { id: 'read', name: '10 पन्ने पढ़ें', icon: '📖' },
      { id: 'journal', name: 'डायरी लिखें', icon: '✏️' },
      { id: 'tidy', name: '10 मिनट की सफ़ाई', icon: '🧹' },
    ],
  },

  // Success
  success: {
    title: 'डूमस्क्रोलिंग की जगह ऐसी फ़ीड चुनें जो आपको चलने पर मजबूर कर दे।',
    imageAlt: 'Doubly ऐप की पोस्ट जिसमें पूरा हुआ काम और कम्युनिटी की प्रतिक्रियाएँ व टिप्पणियाँ दिख रही हैं',
    subtitle: 'डूमस्क्रोलिंग की जगह ऐसी फ़ीड चुनें जो आपको चलने पर मजबूर कर दे।',
    outcomes: [
      'दिमाग़ी जद्दोजहद के बिना काम शुरू करें',
      'जो प्लान किया उसे पूरा करें',
      'बिना बिखरे फिर से पटरी पर आएँ',
      'ख़ुद पर भरोसा करें कि आप सचमुच काम करेंगे',
    ],
  },

  // Stakes
  stakes: {
    title: 'क्योंकि अटके रहने की एक कीमत होती है',
    body: 'जब शुरू करना इतना मुश्किल लगे, तो चीज़ें छूटने लगती हैं। डेडलाइन चूक जाती हैं, मौके निकल जाते हैं, और आप टालमटोल और ग्लानि के एक चक्र में फँसा हुआ महसूस करने लगते हैं। Doubly आपको यह चक्र तोड़ने में मदद करता है, इससे पहले कि एक और हफ़्ता गायब हो जाए।',
  },

  // Testimonials
  testimonials: {
    title: 'लोगों को और प्रोडक्टिविटी के दबाव की ज़रूरत नहीं है',
    subtitle: 'उन्हें शुरू करने में मदद चाहिए।',
    items: [
      // Real App Store reviews, quoted verbatim. Only add entries that are actual
      // published reviews AND whose reviewer gave permission (Apple's rule; ask by
      // replying to the review in App Store Connect). The grid auto-adapts up to 3.
      {
        quote:
          'This app is the only one that actually got me to do things. I have very strong ADHD, and it made me concentrate on my tasks one by one to always know what’s coming ahead and make order in my day. Love it so much! Hope to see awesome upgrades soon 🙏🏻',
        name: 'Liorcic',
        label: 'App Store समीक्षा',
      },
      {
        quote:
          'This has really helped me manage my workload, I haven’t seen anything like it. The walkthrough and set up is very intuitive, and the features make it worth it!',
        name: 'MinecraftrNinja',
        label: 'App Store समीक्षा',
      },
      // Slot 3 — next permitted review goes here.
    ],
  },

  // FAQ
  // ToolsSection
  toolsSection: {
    title: 'मुफ़्त ADHD टूल जिन्हें आप अभी इस्तेमाल कर सकते हैं',
    subtitle: 'न साइन-अप, न पॉप-अप। जब भी अटकें, ब्राउज़र में कोई टूल खोल लें।',
    hot: 'लोकप्रिय',
    openTool: 'टूल खोलें',
    browseAll: 'सभी मुफ़्त ADHD टूल देखें',
  },

  faq: {
    title: 'सवाल',
    items: [
      {
        q: 'क्या Doubly सिर्फ़ उन्हीं लोगों के लिए है जिन्हें ADHD का निदान हुआ है?',
        a: 'नहीं। Doubly हर उस इंसान के लिए है जो शुरू करने, घबराहट या दिमाग़ी उलझन से जूझता है। आपको किसी निदान की ज़रूरत नहीं, बस एक ऐसा दिमाग़ चाहिए जो बहुत सारा काम होने पर कभी-कभी जम जाता है।',
      },
      {
        q: 'यह किसी आम टू-डू ऐप से कैसे अलग है?',
        a: 'टू-डू ऐप्स आपको चीज़ें सूचीबद्ध करने में मदद करते हैं। Doubly आपको उन्हें सचमुच शुरू करने में मदद करता है। हम शुरुआत की रुकावट कम करने पर ध्यान देते हैं — यानी क्या करना है यह जानने और उसे करने के बीच की खाई — ब्रेन डंप, एक-कदम की साफ़ी और जवाबदेही के ज़रिए।',
      },
      {
        q: 'क्या यह ख़ास तौर पर काम शुरू करने में मदद करता है?',
        a: 'हाँ। यही हमारा मुख्य फ़ोकस है। ब्रेन डंप दिमाग़ी उलझन साफ़ करता है, अगले-कदम की साफ़ी एक करने लायक काम चुनती है, और जवाबदेही के टूल्स आपको उसे पूरा करने में मदद करते हैं। हर फ़ीचर उसी पहले कदम के इर्द-गिर्द बना है।',
      },
      {
        q: 'यहाँ जवाबदेही को क्या अलग बनाता है?',
        a: 'यह न तो टोकना है, न ही ऐसी स्ट्रीक जो आपको दोषी महसूस कराए। Doubly असली लोगों के साथ हल्के सामाजिक चेक-इन का इस्तेमाल करता है जो आपकी प्रोग्रेस की परवाह करते हैं, ताकि आपके साथ कोई खड़ा हो — कोई रोबोट नहीं जो आपको शर्मिंदा करे।',
      },
      {
        q: 'क्या यह हैबिट ट्रैकर या प्लानर की जगह लेता है?',
        a: 'ले सकता है। लेकिन Doubly हर मर्ज़ का इलाज बनने की कोशिश नहीं कर रहा। यह पूरी तरह आपको अटकन से शुरुआत तक पहुँचाने पर केंद्रित है। अगर आपको विस्तृत प्रोजेक्ट प्लानिंग चाहिए, तो इसे अपने मौजूदा टूल्स के साथ इस्तेमाल करें।',
      },
      {
        q: 'अगर मैं आसानी से घबरा जाता हूँ तो क्या यह अच्छा है?',
        a: 'ख़ासकर तभी। Doubly आपको कभी एक साथ सब कुछ नहीं दिखाता। आप एक अगला कदम देखते हैं, कामों की दीवार नहीं। पूरा UX ऐसे दिमाग़ों के लिए बनाया गया है जो जल्दी ओवरलोड हो जाते हैं।',
      },
    ],
  },

  // FinalCTA
  finalCta: {
    title: 'आपके दिमाग़ को और दबाव की ज़रूरत नहीं',
    highlight: 'उसे शुरू करने का एक रास्ता चाहिए।',
    subtitle: 'उन ADHD दिमाग़ों के लिए जो हद से ज़्यादा सोचने, टालने और पिछड़ने से थक चुके हैं।',
    cta: 'App Store से डाउनलोड करें',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    freeTools: 'मुफ़्त ADHD टूल',
    tools: 'टूल',
    learn: 'सीखें',
    privacy: 'गोपनीयता',
    terms: 'शर्तें',
    support: 'सहायता',
    copyright: (year: number) => `© ${year} Doubly. ADHD दिमाग़ों के लिए बना।`,
  },

  // StickyBar
  stickyBar: {
    cta: 'अभी अटकन से बाहर निकलें',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | वह ADHD ऐप जो आपको शुरू करने में मदद करता है',
    description:
      'अफ़रा-तफ़री को ब्रेन डंप करें, एक साफ़ अगला कदम पाएँ, और सचमुच पूरा करने के लिए जवाबदेही का इस्तेमाल करें। उन ADHD दिमाग़ों के लिए बना जिन्हें सिर्फ़ प्लानिंग नहीं, बल्कि शुरू करने में मदद चाहिए।',
    keywords: ['ADHD', 'प्रोडक्टिविटी', 'ब्रेन डंप', 'टास्क मैनेजमेंट', 'जवाबदेही', 'फ़ोकस'],
    ogTitle: 'Doubly | वह ADHD ऐप जो आपको शुरू करने में मदद करता है',
    ogDescription:
      'अफ़रा-तफ़री को ब्रेन डंप करें, एक साफ़ अगला कदम पाएँ, और सचमुच पूरा करने के लिए जवाबदेही का इस्तेमाल करें।',
  },
  // Tool library card copy (title + description per tool).
  // Mirrors content/tools-i18n/${locale}/_index.json cards[] so the homepage grid and
  // the footer speak the visitor's language; kept in sync by scripts/check-tool-cards.mjs.
  toolCards: {
    'task-splitter': {
      title: 'काम बाँटने वाला टूल',
      description:
        'कोई ऐसा काम टाइप करें जो शुरू ही नहीं हो पा रहा। AI उसे छोटे, करने लायक कदमों में बाँट देता है, हर कदम के लिए अंदाज़न समय के साथ। ADHD दिमाग़ों के लिए बना।',
    },
    'brain-dump': {
      title: 'ब्रेन डंप टूल',
      description:
        'जो भी दिमाग़ में है सब बाहर निकालें, AI उसमें से सिर्फ़ करने लायक काम छाँट लेता है। न साइन-अप, कुछ भी सहेजा नहीं जाता।',
    },
    'pick-one': {
      title: 'एक काम चुनने वाला टूल',
      description:
        'अपनी उलझी हुई टू-डू लिस्ट पेस्ट करें, शुरू करने के लिए एक ही काम पाएँ। सबसे छोटा, सबसे डरावना, या बेतरतीब कोई एक। उस पल के लिए बना जब दस काम मिलकर एक ऐसा पहाड़ लगने लगते हैं जिसे छूने का मन ही नहीं करता।',
    },
    'eisenhower-matrix': {
      title: 'आइज़नहावर मैट्रिक्स (ADHD एडिशन)',
      description:
        'किताबी लेबल के बजाय "उबाऊ लेकिन ज़रूरी" जैसे ख़ानों में काम खींचकर डालें। वह मैट्रिक्स जो आख़िरकार ADHD दिमाग़ के हिसाब से चलता है। सब कुछ आपके ब्राउज़र में ही सेव रहता है।',
    },
    'pomodoro': {
      title: 'ADHD पोमोडोरो टाइमर',
      description:
        '25 मिनट काम, 5 मिनट ब्रेक - फ़ोकस का वह तरीक़ा जो आख़िरकार ADHD दिमाग़ के हिसाब से चलता है। मुफ़्त, न साइन-अप, ऑफ़लाइन भी चलता है।',
    },
    'visual-timer': {
      title: 'विज़ुअल टाइमर / टाइम ब्लाइंडनेस घड़ी',
      description:
        'एक सिकुड़ता हुआ गोल टुकड़ा, ताकि समय अंकों में पढ़ने के बजाय आपको बीतता हुआ दिखे। ADHD वाले वयस्कों के लिए टाइम ब्लाइंडनेस घड़ी का काम भी करता है।',
    },
    'brown-noise': {
      title: 'एंबियंट साउंड जेनरेटर',
      description:
        'मुफ़्त, ब्राउज़र में चलने वाला एंबियंट साउंड जेनरेटर। ब्राउन नॉइज़ के साथ पिंक और व्हाइट भी। बेचैन ADHD दिमाग़ को शांत करने वाली एकसार बैकग्राउंड आवाज़। स्लीप टाइमर शामिल, ऑफ़लाइन भी चलता है।',
    },
    'body-doubling-room': {
      title: 'बॉडी डबलिंग रूम',
      description:
        'दो लोगों का मुफ़्त फ़ोकस रूम। एक लिंक शेयर करें, पीयर-टू-पीयर वीडियो पर साथ बैठकर काम करें, एक साझा टाइमर चलाएँ। न साइन-अप, न इंस्टॉल।',
    },
    'hyperfocus-timer': {
      title: 'हाइपरफ़ोकस इंटरप्ट टाइमर',
      description:
        'हर X मिनट पर बोलकर टोकने वाले चेक-इन, और चाहें तो एक पक्का स्टॉप, ताकि हाइपरफ़ोकस का एक सेशन आपकी पूरी दोपहर न खा जाए।',
    },
  },

  toolWidgets: {
    taskSplitter: {
      inputLabel: 'वह कौन-सा काम है जो आप शुरू नहीं कर पा रहे?',
      inputPlaceholder: 'जैसे: ख़र्च की रिपोर्ट जमा करना',
      submit: 'इसे बाँटें',
      submitting: 'बाँटा जा रहा है…',
      privacyNote: 'निजी। हमारे सर्वर पर कुछ भी सेव नहीं होता।',
      charactersLeft: (count: number) => `${count} अक्षर बचे`,
      presetsIntro: 'या इनमें से कोई आज़माएँ:',
      presets: {
        cleanKitchen: 'रसोई साफ़ करें',
        doLaundry: 'कपड़े धोएँ',
        replyInbox: 'इनबॉक्स के जवाब दें',
        planWeekendTrip: 'वीकेंड ट्रिप प्लान करें',
        fileTaxes: 'टैक्स भरें',
        cleanBathroom: 'बाथरूम साफ़ करें',
      },
      loading: 'इसे कदमों में बाँटा जा रहा है…',
      errorRateLimit: 'आप बहुत तेज़ चल रहे हैं। एक पल रुकें और फिर कोशिश करें।',
      errorGeneric: 'अभी इसे बाँट नहीं सके। कुछ सेकंड बाद फिर कोशिश करें।',
      tryAgain: 'फिर से कोशिश करें',
      taskLabel: 'काम',
      urgencyLabels: { low: 'कम अर्जेंसी', medium: 'मध्यम अर्जेंसी', high: 'ज़्यादा अर्जेंसी' },
      stepsDone: (done: number, total: number) => `${done}/${total} कदम पूरे`,
      minTotal: (min: number) => `कुल ~${min} मिनट`,
      allDoneMessage: 'सब हो गया। इतना मुश्किल भी नहीं था, है ना?',
      emptyState:
        'इसके लिए साफ़ कदम नहीं मिल पाए। इसे किसी काम की तरह लिखकर देखें, जैसे “प्रोजेक्ट प्लान लिखें” या “गैराज साफ़ करें”।',
    },
    brainDump: {
      label: 'दिमाग़ में जो कुछ है सब बाहर निकाल दें। व्यवस्थित होने की ज़रूरत नहीं।',
      placeholder:
        'मैं डेंटिस्ट को कॉल करना भूलता रहता हूँ और रसोई बिखरी पड़ी है।\nऑफ़िस के प्रोजेक्ट को लेकर घबराहट हो रही है। आज रात के खाने के लिए\nकिराना लाना है और सारा के पिछले हफ़्ते वाले ईमेल का जवाब देना है।',
      privacy: 'निजी। हमारे सर्वर पर कुछ भी सेव नहीं होता।',
      charactersLeft: (remaining: number) => `${remaining} अक्षर बचे।`,
      clear: 'साफ़ करें',
      submit: 'काम निकालें',
      submitting: 'काम निकाले जा रहे हैं…',
      loading: 'आपका डंप पढ़कर करने लायक चीज़ें निकाली जा रही हैं…',
      errorRateLimited: 'आप बहुत तेज़ चल रहे हैं। एक पल रुकें और फिर कोशिश करें।',
      errorGeneric: 'अभी काम नहीं निकाल सके। कुछ सेकंड बाद फिर कोशिश करें।',
      tryAgain: 'फिर से कोशिश करें',
      empty:
        'इसमें हमें कोई ठोस काम जैसा कुछ नहीं मिला। यह अच्छी बात भी हो सकती है। अगर आप बस मन हल्का कर रहे थे, तो वह भी मायने रखता है। अगर आप करने की चीज़ें लिखना चाहते थे, तो थोड़ा और साफ़ लिखें (“सारा वाला काम” की जगह “सारा को ईमेल करें”)।',
      resultsTitle: 'करने लायक काम',
      doneCount: (done: number, total: number) => `${done}/${total} पूरे`,
      footer: 'एक चुनें। बस एक। उसे अभी करें, फिर अगले के लिए लौटें।',
    },
    pickOne: {
      inputLabel: 'अपनी लिस्ट पेस्ट करें। हर लाइन में एक, या कॉमा से बिखरी हुई। जैसी भी हो।',
      inputPlaceholder:
        'माँ को जवाब देना\nडेंटिस्ट की अपॉइंटमेंट लेना\nख़र्च की रिपोर्ट जमा करना\nस्लाइड डेक ख़त्म करना\nपौधों को पानी देना',
      itemsDetected: (count: number) => `${count} आइटम मिल${count === 1 ? 'ा' : 'े'}`,
      itemsDetectedWithLeft: (count: number, left: number) =>
        `${count} आइटम मिल${count === 1 ? 'ा' : 'े'}, ${left} बाकी`,
      clearEverything: 'सब कुछ साफ़ करें',
      modeLegend: 'हम कैसे चुनें?',
      modes: {
        smallest: {
          label: 'सबसे छोटा',
          reason: 'लिस्ट का सबसे छोटा काम। नन्हा शुरू करें, रफ़्तार बनाएँ।',
        },
        scariest: {
          label: 'सबसे डरावना',
          reason: 'वह जिसकी तरफ़ देखने का भी मन नहीं। इसे पहले कर लें, पूरा दिन हल्का हो जाएगा।',
          noSignalReason:
            'यहाँ कुछ भी डरावना नहीं लग रहा, और यह अपने आप में अच्छी ख़बर है। हमने यूँ ही कोई एक चुन लिया।',
        },
        random: {
          label: 'बस कोई एक चुनें',
          reason: 'कोई सोच-विचार नहीं। लिस्ट ने ख़ुद चुन लिया। बस शुरू करें।',
        },
      },
      // “सबसे डरावना” मोड के लिए डर वाले शब्द। आइटम में substring की तरह ढूँढ़े जाते हैं,
      // इसलिए छोटे स्टेम बेहतर हैं। हिंदी में लोग रोज़मर्रा में अंग्रेज़ी शब्द भी वैसे ही
      // टाइप करते हैं (“dentist appointment लेना”, “boss को reply करना”), इसलिए दोनों
      // लिपियों के रूप यहाँ रखे गए हैं।
      scaryWords: [
        'टैक्स',
        'tax',
        'itr',
        'ईएमआई',
        'किस्त',
        'लोन',
        'loan',
        'का बिल',
        'बिल भर',
        'bill',
        'किराय',
        'बीमा',
        'insurance',
        'बैंक',
        'आधार',
        'चालान',
        'डेंटिस्ट',
        'dentist',
        'डॉक्टर',
        'doctor',
        'वकील',
        'जवाब',
        'reply',
        'माफ़ी',
        'माफी',
        'sorry',
        'बॉस',
        'boss',
        'कॉल कर',
        'call',
        'कैंसिल',
        'cancel',
        'शिकायत',
        'pending',
        'deadline',
        'टाल रहा',
        'टालमटोल',
        'भूल',
      ],
      pickCta: 'मेरे लिए एक चुनें',
      pickAnotherCta: 'दूसरा चुनें',
      emptyHint: 'कम से कम एक आइटम जोड़ें, फिर चुनें पर टैप करें।',
      readyHint: 'तैयार। जब भी तय न कर पाएँ, “मेरे लिए एक चुनें” पर टैप करें।',
      allDoneTitle: 'लिस्ट निपट गई।',
      allDoneBody:
        'हर आइटम या तो पूरा हो गया है या छोड़ दिया गया। आप लिस्ट साफ़ कर सकते हैं, या रीसेट करके छोड़े गए आइटम वापस ला सकते हैं।',
      bringSkippedBack: 'छोड़े गए वापस लाएँ',
      startFreshList: 'नई लिस्ट शुरू करें',
      pickedEyebrow: 'इसी से शुरू करें',
      didIt: 'कर लिया',
      notThisOne: 'यह नहीं',
      pickAgain: 'फिर से चुनें',
      progress: (done: number, skipped: number, left: number) =>
        `${done} पूरे, ${skipped} छोड़े, ${left} बाकी`,
    },
    eisenhower: {
      inputLabel: 'काम जोड़ें',
      inputPlaceholder: 'काम लिखें और एंटर दबाएँ (या कई काम अलग-अलग लाइनों में पेस्ट करें)',
      addButton: 'जोड़ें',
      totals: (total: number, unsorted: number) => `कुल ${total} काम, ${unsorted} बिना छँटे`,
      clearAll: 'सब कुछ साफ़ करें',
      unsortedHeading: (count: number) => `बिना छँटे (${count})`,
      unsortedListLabel: 'बिना छँटे काम',
      removeTask: (text: string) => `${text} हटाएँ`,
      placeHint: 'अब इसे रखने के लिए किसी ख़ाने पर टैप करें।',
      placeHintDesktop: 'या डेस्कटॉप पर खींचकर छोड़ें।',
      quadrantRegionLabel: (label: string) => `${label} ख़ाना`,
      quadrantCountLabel: (count: number, label: string) => `${label} में ${count} काम`,
      dropHere: 'यहाँ छोड़ें',
      sendBackToUnsorted: 'बिना छँटे में वापस भेजें',
      moveBackToUnsorted: (text: string) => `${text} को बिना छँटे में वापस भेजें`,
      empty: 'ख़ाली',
      emptyState:
        'शुरू करने के लिए ऊपर कोई काम जोड़ें। सब कुछ आपके ब्राउज़र में सेव होता है, हमारे सर्वर पर कुछ नहीं।',
      hintLabel: 'Doubly की सलाह:',
      hintBody:
        'उबाऊ-लेकिन-ज़रूरी वाला ढेर वही है जिसे ज़्यादातर लोग टाल देते हैं और सबसे ज़्यादा पछताते हैं। अगर आज सिर्फ़ एक चीज़ करनी है, तो वहीं से चुनें।',
      quadrants: {
        fire: {
          label: 'आग लगी है',
          sub: 'आज करें, कल नहीं।',
          textbook: 'ज़रूरी + तात्कालिक',
        },
        boring: {
          label: 'उबाऊ लेकिन ज़रूरी',
          sub: 'असली जीत यहीं है। समय तय करें, टालें नहीं।',
          textbook: 'ज़रूरी + तात्कालिक नहीं',
        },
        noisy: {
          label: 'शोर, पर छोड़ने लायक',
          sub: 'शोर बहुत है, पर आपकी समस्या नहीं। किसी और को दें, टालें, या रहने दें।',
          textbook: 'तात्कालिक + ज़रूरी नहीं',
        },
        drop: {
          label: 'इन्हें छोड़ दें',
          sub: 'यह चलता है। पूरी लिस्ट पूरी करना ज़रूरी नहीं।',
          textbook: 'ज़रूरी नहीं + तात्कालिक नहीं',
        },
      },
    },
    pomodoro: {
      timerLabel: 'पोमोडोरो टाइमर',
      modeTablistLabel: 'टाइमर मोड',
      modes: {
        work: 'फ़ोकस',
        'short-break': 'छोटा ब्रेक',
        'long-break': 'लंबा ब्रेक',
      },
      dialLabel: (mode: string, time: string) => `${mode} टाइमर। ${time} बाकी।`,
      sessionsToday: (count: number) => `आज पूरे हुए सेशन: ${count}`,
      soundToggle: 'सेशन ख़त्म होने पर आवाज़',
      customizeDurations: 'अवधि अपने हिसाब से सेट करें',
      hideSettings: 'सेटिंग्स छिपाएँ',
      focusMinutes: 'फ़ोकस (मिनट)',
      shortBreakMinutes: 'छोटा ब्रेक (मिनट)',
      longBreakMinutes: 'लंबा ब्रेक (मिनट)',
      documentTitle: (time: string, mode: string) => `${time} | ${mode} | Doubly`,
    },
    visualTimer: {
      ariaLabel: 'विज़ुअल काउंटडाउन टाइमर',
      dialAriaLabel: (remaining: string) => `विज़ुअल टाइमर डायल। ${remaining} बाकी।`,
      seconds: (s: number) => `${s} सेकंड`,
      minutes: (m: number) => `${m} मिनट`,
      minutesAndSeconds: (m: number, s: number) => `${m} मिनट ${s} सेकंड`,
      documentTitle: (time: string) => `${time} | Doubly`,
      countingDown: (minutes: number) => `${minutes} मिनट से गिनती चल रही है`,
      setFor: (minutes: number) => `${minutes} मिनट के लिए सेट`,
      paused: 'रुका हुआ',
      timeIsUp: 'समय पूरा हुआ',
      presetsLabel: 'तय अवधियाँ',
      presetMinutes: (minutes: number) => `${minutes} मिनट`,
      custom: 'अपनी मर्ज़ी से',
      minutesLabel: 'मिनट',
      set: 'सेट करें',
      soundWhenDone: 'समय पूरा होने पर आवाज़',
    },
    brownNoise: {
      play: (sound: string) => `${sound} चलाएँ`,
      pause: (sound: string) => `${sound} रोकें`,
      documentTitle: (sound: string) => `▶ ${sound} · Doubly`,
      chooseSound: 'कोई एंबियंट साउंड चुनें',
      soundGroupLabel: 'एंबियंट साउंड',
      volume: 'वॉल्यूम',
      volumePercent: (percent: number) => `${percent}%`,
      sleepTimer: 'स्लीप टाइमर',
      sleepOff: 'बंद',
      sleepMinutes: (minutes: number) => `${minutes} मिनट`,
      privacyNote: 'आपके ब्राउज़र में ही चलता है। कुछ रिकॉर्ड नहीं होता, कुछ अपलोड नहीं होता।',
      sounds: {
        brown: {
          name: 'ब्राउन',
          description: 'गहरी, गड़गड़ाती हुई। दूर के झरने जैसी। वही जो TikTok पर छाई है।',
        },
        pink: {
          name: 'पिंक',
          description: 'व्हाइट से नरम, ब्राउन से कम भारी। संतुलित।',
        },
        white: {
          name: 'व्हाइट',
          description: 'पुराने TV की सरसराहट। तीखी और एकसार।',
        },
      },
    },
    hyperfocus: {
      ariaLabel: 'हाइपरफ़ोकस इंटरप्ट टाइमर',

      // Durations. Every phrasing lives here so a language can pick its own
      // plural forms, units and word order.
      minutesShort: (minutes: number) => `${minutes} मिनट`,
      hoursShort: (hours: number) => `${hours} ${hours === 1 ? 'घंटा' : 'घंटे'}`,
      hoursMinutesShort: (hours: number, minutes: number) =>
        `${hours} ${hours === 1 ? 'घंटा' : 'घंटे'} ${minutes} मिनट`,
      durationLong: (hours: number, minutes: number) => {
        if (hours === 0 && minutes === 0) return 'एक मिनट से भी कम';
        const parts: string[] = [];
        if (hours > 0) parts.push(`${hours} ${hours === 1 ? 'घंटा' : 'घंटे'}`);
        if (minutes > 0) parts.push(`${minutes} मिनट`);
        return parts.join(' ');
      },

      // Session strip. Text wrapped in ** is rendered emphasized.
      stripNoCap: (interval: string) => `हर ${interval} में चेक-इन, कोई पक्का स्टॉप नहीं`,
      stripWithCap: (interval: string, cap: string) =>
        `हर ${interval} में चेक-इन, ${cap} पर पक्का स्टॉप`,
      summaryNoCap: (interval: string) => `हर **${interval}** में चेक-इन, कोई पक्का स्टॉप नहीं।`,
      summaryWithCap: (interval: string, cap: string) =>
        `हर **${interval}** में चेक-इन, **${cap}** पर पक्का स्टॉप।`,

      // Setup
      intervalHeading: 'चेक-इन का अंतराल',
      custom: 'अपनी मर्ज़ी से',
      minutes: 'मिनट',
      set: 'सेट करें',
      jitterNote:
        'चेक-इन के समय में करीब दस प्रतिशत का उलट-फेर रहता है, ताकि दिमाग़ उन्हें पहले से अनदेखा करना न सीख ले।',
      moreOptions: 'और विकल्प',
      hideOptions: 'विकल्प छिपाएँ',
      taskLabel: 'आप किस पर काम कर रहे हैं? (वैकल्पिक)',
      taskPlaceholder: 'जैसे: टैक्स के फ़ॉर्म, डिज़ाइन रिव्यू, स्क्रिप्ट',
      taskHint: 'बोलकर होने वाले चेक-इन में इस्तेमाल होता है, ताकि आपको सुनाई दे कि आप बैठे किस काम के लिए थे।',
      hardStopHeading: 'पक्का स्टॉप इतनी देर बाद',
      hardStopHint:
        'सीमा पूरी होते ही एक तेज़ अलर्ट बजता है, ताकि छह घंटे का चक्कर चुपचाप न निकल जाए।',
      capOff: 'बंद',
      capHours: (hours: number) => `${hours}घं`,
      noHardStop: 'कोई पक्का स्टॉप नहीं',
      alertsHeading: 'अलर्ट',
      chime: 'घंटी',
      voice: 'आवाज़',
      notify: 'नोटिफ़िकेशन',
      alertsHint:
        'चेक-इन अनदेखा करने पर घंटी और तेज़ हो जाती है। आवाज़ आपको समय और अब तक बीता वक़्त बोलकर बताती है। टैब बैकग्राउंड में हो तो नोटिफ़िकेशन ब्राउज़र में दिखता है।',
      notificationsBlocked:
        'इस ब्राउज़र में नोटिफ़िकेशन ब्लॉक हैं। इसे इस्तेमाल करने के लिए साइट सेटिंग्स में इन्हें चालू करें।',
      notificationsUnsupported: 'आपका ब्राउज़र वेब नोटिफ़िकेशन सपोर्ट नहीं करता।',
      startSession: 'सेशन शुरू करें',

      // Live session
      statElapsed: 'बीता समय',
      statNextCheckIn: 'अगला चेक-इन',
      statCap: 'सीमा',
      statusNow: 'अभी',
      statusPaused: 'रुका हुआ',
      statusCapHit: 'सीमा पूरी',
      statusOff: 'बंद',
      workingOn: (task: string) => `**${task}** पर काम चल रहा है`,
      checkInHeading: 'छोटा चेक-इन',
      checkInBody: (clock: string, elapsed: string) =>
        `अभी ${clock} बजे हैं और आप ${elapsed} से इसी पर लगे हैं। क्या आप अब भी उसी काम पर हैं जो शुरू किया था, या बाहर निकलने का वक़्त हो गया?`,
      stillGoing: 'अभी जारी है',
      takeABreak: 'ब्रेक लें',
      stopSession: 'सेशन रोकें',
      capHeading: 'सेशन की सीमा पूरी',
      capBody: (minutes: number) =>
        `आपने ${minutes} मिनट पर पक्का स्टॉप लगाया था। उठें, पानी पिएँ, कुछ खा लें। काम यहीं रहेगा।`,
      pause: 'रोकें',
      resume: 'फिर से शुरू करें',
      endSession: 'सेशन ख़त्म करें',
      checkInLog: 'चेक-इन लॉग',
      logContinue: 'जारी रखा',
      logBreak: 'ब्रेक लिया',
      logStop: 'रोक दिया',

      // Browser tab title while a check-in is waiting in a background tab.
      tabAlert: '⚠ चेक-इन | Doubly',

      // Spoken aloud (SpeechSynthesis) and pushed as OS notifications.
      checkInSpeech: (clock: string, elapsed: string, task: string) =>
        task
          ? `चेक-इन। ${clock} बज रहे हैं। आप ${elapsed} से ${task} पर काम कर रहे हैं।`
          : `चेक-इन। ${clock} बज रहे हैं। आप ${elapsed} से काम कर रहे हैं।`,
      capSpeech: (clock: string, elapsed: string) =>
        `सेशन की सीमा पूरी हो गई। ${clock} बज रहे हैं। आप ${elapsed} से इसी पर लगे हैं। अब रुकने का वक़्त है।`,
      notificationCheckInTitle: 'हाइपरफ़ोकस चेक-इन',
      notificationCheckInBody: (clock: string, elapsed: string) =>
        `${clock} बज रहे हैं। आप ${elapsed} से इसी पर लगे हैं।`,
      notificationCapTitle: 'हाइपरफ़ोकस की सीमा पूरी',
      notificationCapBody: (clock: string, elapsed: string) =>
        `${clock} बज रहे हैं। आप ${elapsed} से इसी पर लगे हैं। अब रुकने का वक़्त है।`,
    },
    shared: {
      start: 'शुरू करें',
      pause: 'रोकें',
      resume: 'फिर से शुरू करें',
      done: 'हो गया',
      reset: 'रीसेट करें',
      skip: 'छोड़ें',
      skipAria: 'अगले सेशन पर जाएँ',
      startSession: 'फ़ोकस सेशन शुरू करें',
      creatingRoom: 'रूम बनाया जा रहा है...',
    },
    chrome: {
      tryInApp: 'ऐप में आज़माएँ',
      appStoreAria: (label: string) => `App Store पर ${label}`,
      breadcrumbAria: 'ब्रेडक्रम्ब',
    },
  },

  // /r/[id] वाला लाइव बॉडी डबलिंग रूम। यहाँ की भाषा हर व्यक्ति के अपने ब्राउज़र से तय
  // होती है, इसलिए यह कभी न मानें कि दोनों लोग एक ही भाषा पढ़ रहे हैं।
  room: {
    join: {
      titleFirst: 'फ़ोकस सेशन शुरू करें',
      titleJoin: 'फ़ोकस सेशन में शामिल हों',
      subtitleFirst:
        'अपना नाम और सेशन की लंबाई चुनें। अंदर पहुँचते ही इनवाइट लिंक शेयर कर सकते हैं।',
      subtitleJoin: 'अपना नाम चुनें और शामिल हो जाएँ। टाइमर होस्ट पहले ही सेट कर चुका है।',
      nameLabel: 'आपका नाम',
      namePlaceholder: 'आरव',
      avatarLabel: 'अवतार चुनें',
      avatarChooseAria: (emoji: string) => `${emoji} अवतार चुनें`,
      durationLabel: 'सेशन की लंबाई',
      minutes: (n: number) => `${n} मिनट`,
      permissionNote:
        'अगली स्क्रीन कैमरा और माइक की अनुमति माँगेगी। दोनों वैकल्पिक हैं। छोड़ देंगे तो घोस्ट टाइल के साथ जुड़ेंगे, और रूम में मौजूद लोग फिर भी देख पाएँगे कि आप वहाँ हैं।',
      createCta: 'रूम बनाएँ',
      joinCta: 'रूम में शामिल हों',
    },
    header: {
      eyebrow: 'बॉडी डबलिंग रूम',
      withPeer: (name: string) => `आप और ${name}`,
      waiting: 'साथी का इंतज़ार है',
      copyInvite: 'इनवाइट लिंक कॉपी करें',
      linkCopied: 'लिंक कॉपी हो गया',
    },
    full: {
      title: 'रूम भर गया है',
      body: 'एक बॉडी डबलिंग रूम में दो लोग आते हैं। अच्छी बात यह है कि नया रूम एक क्लिक में बन जाता है।',
      cta: 'नया रूम शुरू करें',
    },
    phases: {
      waiting: {
        eyebrow: 'स्टेप 0/3',
        title: 'अपना लिंक शेयर करें',
        body: 'इस पेज का लिंक किसी एक इंसान को भेजें। वे जुड़ते ही सेशन शुरू हो जाएगा।',
      },
      intro: {
        eyebrow: 'स्टेप 1/3 · परिचय',
        title: 'हाय कहें और बताएँ कि आप अभी क्या करने जा रहे हैं',
        titleWithPeer: (name: string) => `${name} को हाय कहें`,
        body: '60 सेकंड लें। कैमरा ऑन, एक-एक वाक्य। लक्ष्य ज़ोर से बोलना ही उसे टिकाता है।',
        cta: 'फ़ोकस शुरू करें',
      },
      focus: {
        eyebrow: 'स्टेप 2/3 · फ़ोकस',
        title: 'सिर झुकाइए। आप दोनों चुपचाप साथ काम कर रहे हैं।',
        body: 'माइक ऑन हो या ऑफ़, दोनों ठीक। बात बस इतनी है कि दूसरा इंसान वहाँ मौजूद है।',
        cta: 'फ़ोकस जल्दी ख़त्म करें',
      },
      wrapUp: {
        eyebrow: 'स्टेप 3/3 · समापन',
        title: 'एक जीत बताएँ और एक चीज़ जो अटकाती रही',
        body: 'दो मिनट ज़ोर से बोलना जो किया है उसे पक्का कर देता है और अगला सेशन शुरू करना आसान बना देता है।',
        cta: 'सेशन ख़त्म करें',
      },
      done: {
        eyebrow: 'सेशन पूरा',
        title: 'बढ़िया। आप आए, यही बड़ी बात है।',
        body: 'यह मायने रखता है। रुककर एक और कर लें, या टैब बंद करके अपने लिए कुछ अच्छा करें।',
        runAnother: 'एक और करें',
      },
    },
    tiles: {
      you: (name: string) => `${name} (आप)`,
      peerFallbackName: 'इंतज़ार',
      waitingForPartner: 'साथी का इंतज़ार है...',
      micMuted: 'माइक म्यूट है',
      goalPlaceholderIntro: 'अभी किस पर काम करने जा रहे हैं...',
      goalPlaceholderFocus: 'किस पर काम कर रहे हैं',
      reflectionPlaceholder: 'एक जीत या एक अड़चन...',
      peerNoGoal: 'अभी कोई लक्ष्य नहीं',
      peerNoReflection: 'उनके समापन का इंतज़ार',
      empty: '—',
    },
    controls: {
      muteMic: 'माइक म्यूट करें',
      unmuteMic: 'माइक अनम्यूट करें',
      micUnavailable: 'माइक उपलब्ध नहीं',
      muteTitle: 'म्यूट',
      unmuteTitle: 'अनम्यूट',
      micBlockedTitle: 'माइक ब्लॉक है या उपलब्ध नहीं',
      camOff: 'कैमरा बंद करें',
      camOn: 'कैमरा चालू करें',
      camUnavailable: 'कैमरा उपलब्ध नहीं',
      stopVideoTitle: 'वीडियो बंद करें',
      startVideoTitle: 'वीडियो चालू करें',
      camBlockedTitle: 'कैमरा ब्लॉक है या उपलब्ध नहीं',
      startTimer: 'टाइमर शुरू करें',
      pauseTimer: 'टाइमर रोकें',
      leave: 'बाहर निकलें',
      retry: 'फिर कोशिश करें',
    },
    reactions: {
      groupAria: 'रिएक्शन भेजें',
      sendAria: (emoji: string) => `${emoji} रिएक्शन भेजें`,
    },
    status: {
      peerLeft: 'आपका साथी रूम से चला गया।',
      shareToUnlock: 'किसी को बुलाने के लिए इनवाइट लिंक शेयर करें। वे आते ही सेशन खुल जाएगा।',
      upNext: (minutes: number) => `आगे: ${minutes} मिनट का फ़ोकस ब्लॉक`,
      planOnArrival: (minutes: number) => `प्लान: साथी के आते ही ${minutes} मिनट का फ़ोकस ब्लॉक`,
      wrapUpBreath: 'एक साँस लें। टाइमर रुका हुआ है।',
      timerAria: (remaining: string) => `टाइमर, ${remaining} बचे हैं`,
    },
    errors: {
      p2pBlocked:
        'कनेक्ट नहीं हो पा रहा। शायद आपका नेटवर्क पीयर-टू-पीयर कनेक्शन ब्लॉक करता है। कोई दूसरा नेटवर्क आज़माएँ।',
      mediaUnavailable: 'कैमरा और माइक उपलब्ध नहीं हैं।',
    },
  },
};

export default hi;
