const ar = {
  // Shared
  common: {
    tryInDoubly: 'جرّبه في Doubly',
    changeLanguage: 'تغيير اللغة',
    socialProof: (count: number) => `انضم إلى ${count.toLocaleString('ar')} من أصحاب ADHD`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    tools: 'الأدوات',
    howItWorks: 'كيف يعمل',
    features: 'المميزات',
    testimonials: 'آراء المستخدمين',
    faq: 'الأسئلة الشائعة',
    cta: 'احصل على Doubly',
    toggleMenu: 'إظهار/إخفاء القائمة',
  },

  // Hero
  hero: {
    badge: 'مصمّم لعقول ADHD',
    titlePrefix: 'عندما يكون في عقلك ',
    titleHighlight: '47 نافذة مفتوحة',
    subtitle: 'حوّل الفوضى إلى خطوة تالية واضحة واحدة في أقل من دقيقة.',
    cta: 'حمّله من App Store',
    secondaryCta: 'شاهده يقسّم مهمة ↓',
    android: {
      prompt: 'تستخدم أندرويد؟',
      placeholder: 'you@email.com',
      submit: 'أبلغني',
      success: 'أنت الآن على القائمة. سنراسلك عبر البريد عندما يصل Doubly إلى أندرويد.',
      invalid: 'يرجى إدخال بريد إلكتروني صحيح.',
      error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
    },
    floatingCards: {
      brainDump: 'تفريغ الدماغ',
      habits: 'العادات',
      accountability: 'المساءلة',
    },
    phone: {
      screenAlt: 'تطبيق Doubly يعرض عاداتك مع سلاسل الإنجاز اليومية وشبكات التقدّم',
    },
  },

  // Problem
  problem: {
    title: 'ADHD ليس مجرّد فوضى في التنظيم',
    titleHighlight: 'فوضى في التنظيم',
    subtitle:
      'إنه صراع يومي مع عقل لا يتعاون مع نواياك الخاصة.',
    cards: [
      {
        type: 'External',
        title: 'مهام كثيرة جداً. أفكار كثيرة جداً.',
        body: 'لا مكان واضح للبدء.',
      },
      {
        type: 'Internal',
        title: 'تعرف ما عليك فعله، لكنك مع ذلك لا تستطيع البدء.',
        body: 'إنه ليس كسلاً. إنها مقاومة البدء.',
      },
      {
        type: 'Philosophical',
        title: 'لا ينبغي أن يكون البدء بهذه الصعوبة.',
        body: 'عقلك يعمل بشكل مختلف. وأدواتك يجب أن تكون كذلك.',
      },
      {
        type: 'Stakes',
        title: 'وهذا يكلّفك أكثر من مجرّد الوقت.',
        body: 'تتراكم الأمور. تتأخّر. وتبدأ تفقد ثقتك بنفسك.',
      },
    ],
  },

  // VisualProblem
  visualProblem: {
    cards: [
      { image: '/problem-1.jpg', alt: 'مهام كثيرة جداً. أفكار كثيرة جداً.' },
      { image: '/problem-2.jpg', alt: 'تعرف ما عليك فعله، لكنك مع ذلك لا تستطيع البدء.' },
      { image: '/problem-4.jpg', alt: 'لا ينبغي أن يكون بدء الأمور العادية بهذه الصعوبة.' },
      { image: '/problem-3.jpg', alt: 'وهذا يكلّفك أكثر من مجرّد الوقت.' },
    ],
  },

  // Guide
  guide: {
    title: 'مصمّم خصيصاً لعقول ADHD التي تكافح من أجل البدء',
    subtitle:
      'معظم تطبيقات الإنتاجية تفترض أن عقلك جاهز للتخطيط. أما Doubly فمصمّم للحظة التي تشعر فيها بالإرهاق أو التعثّر أو التهرّب، بناءً على الطريقة التي يعمل بها ADHD فعلاً.',
    proofPoints: [
      'مصمّم لاحتكاك ADHD، لا للإنتاجية العامة',
      'يساعد على تقليل مقاومة البدء',
      'يمنحك نظاماً دون أن يُرهقك',
    ],
    mockup: {
      brainDump: 'تفريغ الدماغ',
      items: ['اتصل بطبيب الأسنان', 'اشترِ البقالة', 'رُدّ على المدير', 'الغسيل', 'لماذا أنا متعب جداً'],
      yourNextStep: 'خطوتك التالية',
      nextStepTask: 'ضع الغسيل في الغسّالة',
      nextStepMeta: '~5 دقائق · طاقة منخفضة',
      accountability: 'المساءلة',
      accountabilityText: 'سارة ستطمئن عليك الساعة 3 عصراً',
    },
  },

  // BrainDumpDemo
  brainDumpDemo: {
    title: 'فرّغ الفوضى. احتفظ بالمهام.',
    titleHighlight: 'احتفظ بالمهام.',
    replayDemo: 'أعد تشغيل العرض',
    subtitle:
      'عقلك ممتلئ؟ اكتب لمدة 20 ثانية. يستخرج Doubly ما يمكن تنفيذه ويتخلّص من الضجيج.',
    dumpText:
      'أفتح حاسوبي المحمول لكي أكون منتِجاً، وخلال خمس ثوانٍ يصبح عقلي هكذا: رُدّ على تلك الرسالة، اطلب الفيتامينات، نظّف الحوض، ابحث عن الشاحن، تناول شيئاً، وأيضاً تذكّر المهمة المهمة جداً التي كنت متأكداً أنك لن تنساها. والتي نسيتها على الفور.',
    brainDumpLabel: 'تفريغ الدماغ',
    brainDumpPlaceholder: 'دعها تخرج فحسب...',
    extractedTasksLabel: 'المهام المستخرجة',
    listening: 'يستمع...',
    tasksFound: (count: number) => `تم العثور على ${count} ${count >= 3 && count <= 10 ? 'مهام' : 'مهمة'}`,
    filterNote: 'تمّت تصفية الأفكار غير القابلة للتنفيذ. احتُفظ بالمهام الحقيقية فقط.',
    tasks: [
      { text: '💊 اطلب الفيتامينات', phrase: 'اطلب الفيتامينات' },
      { text: '🧽 نظّف الحوض', phrase: 'نظّف الحوض' },
      { text: '🔌 ابحث عن الشاحن', phrase: 'ابحث عن الشاحن' },
      { text: '🍽️ تناول شيئاً', phrase: 'تناول شيئاً' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: 'إليك كيف تتخلّص من التعثّر',
    titleHighlight: 'تتخلّص من التعثّر',
    subtitle: 'أربع خطوات بسيطة. لا إعداد معقّد. لا منحنى تعلّم.',
    stepLabel: 'خطوة',
    steps: [
      {
        number: '01',
        title: 'أفرِغ عقلك',
        body: 'دوّن أفكارك ومهامك وفوضاك الذهنية بسرعة. لا حاجة للتنظيم. فقط أخرجها.',
      },
      {
        number: '02',
        title: 'احصل على خطوة تالية واضحة واحدة',
        body: 'يحوّل Doubly الإرهاق إلى شيء يمكنك البدء به فعلاً. ليست عشر أولويات. بل واحدة.',
      },
      {
        number: '03',
        title: 'ابقَ في حركة',
        body: 'استخدم المساءلة والمؤقّتات وأدوات التقدّم لتستمر، حتى عندما يخفت الحافز.',
      },
      {
        number: '04',
        title: 'كن مسؤولاً',
        body: 'شارك مع الأصدقاء في موجز Doubly. المساءلة الحقيقية تحدث عندما يشجّعك أحدهم.',
      },
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: 'اكتب مهمة. وشاهدها تنقسم.',
    titleHighlight: 'تنقسم.',
    subtitle:
      'المهام الكبيرة تبدو مستحيلة. يقسّمها Doubly إلى خطوات من 2–5 دقائق لتتمكّن من البدء فحسب.',
    customInputPlaceholder: 'أو اكتب مهمتك الخاصة...',
    splitButton: 'قسّمها',
    taskLabel: 'مهمة',
    aiThinking: 'يقوم الذكاء الاصطناعي بتقسيمها...',
    errorMessage: 'تعذّر الوصول إلى الذكاء الاصطناعي الآن. جرّب أحد الخيارات أعلاه أو حاول مرة أخرى.',
    tryAgain: 'حاول مرة أخرى',
    stepsDone: (done: number, total: number) => `${done}/${total} خطوات مكتملة`,
    minTotal: (min: number) => `~${min} دقيقة إجمالاً`,
    urgencySuffix: 'الإلحاح',
    urgencyLabels: { low: 'أولوية منخفضة', medium: 'أولوية متوسطة', high: 'أولوية عالية' },
    allDoneMessage: 'انتهى كل شيء. لم يكن الأمر صعباً، أليس كذلك؟',
    allDoneDescription:
      'يفعل Doubly هذا مع كل مهمة تلقيها عليه. لا مزيد من التحديق في قائمة مهام عملاقة.',
    allDoneCta: 'تخلّص من التعثّر الآن',
    presets: [
      { label: 'نظّف المطبخ', icon: '🍳' },
      { label: 'اغسل الملابس', icon: '🧰' },
      { label: 'اطبخ العشاء', icon: '🍲' },
      { label: 'نظّف الحمّام', icon: '🚿' },
      { label: 'رتّب غرفة النوم', icon: '🛏️' },
      { label: 'تسوّق البقالة', icon: '🛒' },
    ],
    presetResults: {
      'نظّف المطبخ': {
        title: '🍳 نظّف المطبخ',
        subtasks: [
          { text: 'أخلِ أسطح العمل ورتّب الأغراض', duration: '3 دقائق' },
          { text: 'ضع الأطباق المتّسخة في غسّالة الصحون', duration: '5 دقائق' },
          { text: 'امسح أسطح العمل وسطح الموقد', duration: '4 دقائق' },
          { text: 'افرك الحوض', duration: 'دقيقتان' },
          { text: 'اكنس الأرضية', duration: '3 دقائق' },
          { text: 'أخرج القمامة', duration: 'دقيقتان' },
        ],
        urgency: 'medium',
      },
      'اغسل الملابس': {
        title: '🧰 اغسل الملابس',
        subtasks: [
          { text: 'اجمع الملابس المتّسخة من أنحاء المنزل', duration: '5 دقائق' },
          { text: 'افرزها إلى بيضاء وملوّنة وحسّاسة', duration: '3 دقائق' },
          { text: 'ضع الدفعة الأولى في الغسّالة', duration: 'دقيقتان' },
          { text: 'انشر أو اطوِ الملابس الجافة من الغسلة السابقة', duration: '10 دقائق' },
          { text: 'رتّب الملابس المطويّة في الأدراج/الخزانة', duration: '5 دقائق' },
        ],
        urgency: null,
      },
      'اطبخ العشاء': {
        title: '🍲 اطبخ العشاء',
        subtasks: [
          { text: 'قرّر ماذا ستطبخ وتحقّق من المكوّنات', duration: '3 دقائق' },
          { text: 'اغسل الخضار وجهّزها', duration: '8 دقائق' },
          { text: 'ابدأ طهي الطبق الرئيسي', duration: '15 دقيقة' },
          { text: 'حضّر طبقاً جانبياً أو سلطة', duration: '7 دقائق' },
          { text: 'رتّب الطاولة', duration: 'دقيقتان' },
          { text: 'ضع الطعام في الأطباق وقدّمه', duration: 'دقيقتان' },
        ],
        urgency: 'low',
      },
      'نظّف الحمّام': {
        title: '🚿 نظّف الحمّام',
        subtasks: [
          { text: 'رُشّ المنظّف على الدش والحوض والمرحاض', duration: 'دقيقتان' },
          { text: 'افرك وعاء المرحاض وامسح المقعد', duration: '3 دقائق' },
          { text: 'نظّف الحوض والصنبور', duration: 'دقيقتان' },
          { text: 'امسح المرآة', duration: 'دقيقة واحدة' },
          { text: 'افرك الدش/حوض الاستحمام', duration: '5 دقائق' },
          { text: 'امسح الأرضية بالممسحة', duration: '3 دقائق' },
          { text: 'بدّل المناشف وأعد تعبئة ورق المرحاض', duration: 'دقيقتان' },
        ],
        urgency: 'medium',
      },
      'رتّب غرفة النوم': {
        title: '🛏️ رتّب غرفة النوم',
        subtasks: [
          { text: 'رتّب السرير وسوِّ الوسائد', duration: '3 دقائق' },
          { text: 'التقط الملابس من الأرض والكراسي', duration: '4 دقائق' },
          { text: 'ضع الملابس المتّسخة في السلّة ورتّب النظيفة', duration: '5 دقائق' },
          { text: 'أخلِ الطاولة الجانبية ورتّبها', duration: '3 دقائق' },
          { text: 'انفض الغبار عن الأسطح', duration: '3 دقائق' },
          { text: 'اكنس الأرضية أو نظّفها بالمكنسة', duration: '4 دقائق' },
        ],
        urgency: 'low',
      },
      'تسوّق البقالة': {
        title: '🛒 تسوّق البقالة',
        subtasks: [
          { text: 'تفقّد الثلاجة والمؤن لتعرف ما تحتاجه', duration: '5 دقائق' },
          { text: 'اكتب قائمة مرتّبة حسب الممرّات', duration: '5 دقائق' },
          { text: 'أحضر أكياساً قابلة لإعادة الاستخدام', duration: 'دقيقة واحدة' },
          { text: 'تسوّق وأشّر على الأصناف', duration: '30 دقيقة' },
          { text: 'أفرغ المشتريات ورتّبها', duration: '10 دقائق' },
        ],
        urgency: null,
      },
    },
  },

  // TwoQuestions
  twoQuestions: {
    title: 'هل يبدو هذا مألوفاً؟',
    titleHighlight: 'مألوفاً؟',
    subtitle: 'أنت لست كسولاً. عقلك يحتاج فقط إلى نقطة بداية مختلفة.',
    withoutDoubly: 'بدون Doubly',
    withDoubly: 'مع Doubly',
    rows: [
      {
        without: 'أتجمّد ولا أعرف من أين أبدأ',
        with: 'تفريغ الدماغ → تظهر خطوة تالية واضحة واحدة',
      },
      {
        without: 'أقوم بمهام عشوائية أصغر بدلاً من ذلك',
        with: 'يُبرز Doubly ما يهم فعلاً أولاً',
      },
      {
        without: 'أبدأ 5 أشياء دفعة واحدة',
        with: 'مهمة واحدة على الشاشة. أنهِها، ثم انتقل للتالية.',
      },
      {
        without: 'أفرط في التفكير في الخطة المثالية',
        with: 'فرّغ كل شيء، ويختار Doubly الخطوة الأولى',
      },
      {
        without: 'أتهرّب منه حتى يصبح عاجلاً، ثم أُصاب بالذعر',
        with: 'تبدأ قبل أن يداهمك الذعر',
      },
      {
        without: 'أعمل وحدي وأفقد الزخم بسرعة',
        with: 'المرافقة أثناء العمل وشركاء المساءلة يبقونك مستمراً',
      },
    ],
    questionTitle: 'ما الذي تحتاجه أكثر في تلك اللحظة؟',
    options: [
      'تفريغ الدماغ',
      'خطوة تالية صغيرة',
      'المساءلة',
      'مؤقّت / دفعة تركيز',
      'إعادة ضبط عندما أتأخّر',
    ],
    responseIntro: 'هذا بالضبط حيث يساعدك Doubly.',
    responses: {
      'تفريغ الدماغ': {
        title: 'تفريغ الدماغ → وضوح فوري',
        description:
          'اكتب الفوضى. يستخرج Doubly ما يمكن تنفيذه ويتخلّص من الضجيج.',
      },
      'خطوة تالية صغيرة': {
        title: 'الخطوة التالية، جاهزة دائماً',
        description:
          'يقسّم Doubly المهام الكبيرة ويقدّم لك الخطوة الصغيرة التالية فقط. دون إرهاق.',
      },
      'المساءلة': {
        title: 'اطمئنانات المساءلة',
        description:
          'تنبيهات لطيفة ومساءلة اجتماعية تساعدك على البقاء في المسار دون الشعور بالذنب.',
      },
      'مؤقّت / دفعة تركيز': {
        title: 'وضع التركيز',
        description:
          'مهمة واحدة على الشاشة، مؤقّت يعمل، والمشتّتات اختفت. أنت والعمل فقط.',
      },
      'إعادة ضبط عندما أتأخّر': {
        title: 'بداية جديدة، دون ذنب',
        description:
          'تعثّرت؟ يعيد Doubly ترتيب خطتك لتتمكّن من العودة دون الدخول في دوامة الخجل.',
      },
    },
    mockupNextStep: 'خطوتك التالية جاهزة',
    mockupTask: 'ابدأ بشيء صغير واحد',
    mockupCta: 'جرّب Doubly',
  },


  // HabitDemo
  habitDemo: {
    title: 'ابنِ عادات ترسخ فعلاً',
    subtitle:
      'لا سلاسل إنجاز تنكسر. لا شعور بالذنب. فقط اضغط عندما تنجز الأمر. يتتبّع Doubly النمط لترى تقدّمك.',
    todayLabel: 'اليوم',
    yourHabits: 'عاداتك',
    weeksLabel: '12 أسبوعاً',
    lessLabel: 'أقل',
    moreLabel: 'أكثر',
    currentStreak: 'السلسلة الحالية',
    bestStreak: 'أفضل سلسلة',
    completion: 'نسبة الإنجاز',
    allDoneMessage: 'اكتملت كل العادات لهذا اليوم!',
    allDoneDescription: 'تخيّل هذا كل يوم. يسهّل عليك Doubly الاستمرار.',
    allDoneCta: 'تخلّص من التعثّر الآن',
    habits: [
      { id: 'walk', name: 'اذهب في نزهة', icon: '🚶' },
      { id: 'read', name: 'اقرأ 10 صفحات', icon: '📖' },
      { id: 'journal', name: 'دوّن يومياتك', icon: '✏️' },
      { id: 'tidy', name: 'ترتيب لمدة 10 دقائق', icon: '🧹' },
    ],
  },

  // Success
  success: {
    title: 'استبدل التصفّح السلبي بموجز يدفعك للتحرّك.',
    imageAlt: 'تفاصيل منشور في تطبيق Doubly تعرض مهمة مكتملة مع تفاعلات وتعليقات المجتمع',
    subtitle: 'استبدل التصفّح السلبي بموجز يدفعك للتحرّك.',
    outcomes: [
      'ابدأ المهام دون صراع ذهني',
      'أكمل ما خطّطت له',
      'عُد إلى المسار دون أن تنهار',
      'ثق بنفسك أنك ستنجز الأمور فعلاً',
    ],
  },

  // Stakes
  stakes: {
    title: 'لأن البقاء عالقاً له ثمن',
    body: 'عندما يكون البدء بهذه الصعوبة، تفلت الأمور. تفوتك المواعيد النهائية، وتمرّ الفرص، وتبدأ تشعر بأنك عالق في دوّامة من التهرّب والشعور بالذنب. يساعدك Doubly على كسر هذه الحلقة قبل أن يختفي أسبوع آخر.',
  },

  // Testimonials
  testimonials: {
    title: 'الناس لا يحتاجون إلى مزيد من ضغط الإنتاجية',
    subtitle: 'يحتاجون إلى مساعدة على البدء.',
    items: [
      // Real App Store reviews, quoted verbatim. Only add entries that are actual
      // published reviews AND whose reviewer gave permission (Apple's rule; ask by
      // replying to the review in App Store Connect). The grid auto-adapts up to 3.
      {
        quote:
          'This app is the only one that actually got me to do things. I have very strong ADHD, and it made me concentrate on my tasks one by one to always know what’s coming ahead and make order in my day. Love it so much! Hope to see awesome upgrades soon 🙏🏻',
        name: 'Liorcic',
        label: 'تقييم على App Store',
      },
      {
        quote:
          'This has really helped me manage my workload, I haven’t seen anything like it. The walkthrough and set up is very intuitive, and the features make it worth it!',
        name: 'MinecraftrNinja',
        label: 'تقييم على App Store',
      },
      // Slot 3 — next permitted review goes here.
    ],
  },

  // FAQ
  // ToolsSection
  toolsSection: {
    title: 'أدوات ADHD مجانية يمكنك استخدامها الآن',
    subtitle: 'بدون تسجيل وبدون نوافذ منبثقة. افتح أداة في متصفّحك لحظة شعورك بالتعثّر.',
    hot: 'رائج',
    openTool: 'افتح الأداة',
    browseAll: 'تصفّح كل أدوات ADHD المجانية',
  },

  faq: {
    title: 'الأسئلة',
    items: [
      {
        q: 'هل Doubly مخصّص فقط للأشخاص المشخّصين بـ ADHD؟',
        a: 'لا. Doubly لأي شخص يعاني من صعوبة البدء أو الإرهاق أو الفوضى الذهنية. لست بحاجة إلى تشخيص، فقط عقل يتجمّد أحياناً عندما تكثر الأمور.',
      },
      {
        q: 'كيف يختلف هذا عن تطبيق مهام عادي؟',
        a: 'تطبيقات المهام تساعدك على تدوين الأشياء. أما Doubly فيساعدك على البدء بها فعلاً. نركّز على تقليل مقاومة البدء، تلك الفجوة بين معرفة ما يجب فعله وفعله، عبر تفريغ الدماغ ووضوح الخطوة الواحدة والمساءلة.',
      },
      {
        q: 'هل يساعد في بدء المهام تحديداً؟',
        a: 'نعم. هذا محور تركيزنا الأساسي. تفريغ الدماغ يزيل الفوضى الذهنية، ووضوح الخطوة التالية يختار إجراءً واحداً قابلاً للتنفيذ، وأدوات المساءلة تساعدك على الإكمال. كل ميزة مبنيّة حول تلك الخطوة الأولى.',
      },
      {
        q: 'ما الذي يجعل المساءلة مختلفة هنا؟',
        a: 'إنها ليست إلحاحاً أو سلاسل إنجاز تُشعرك بالذنب. يستخدم Doubly اطمئنانات اجتماعية لطيفة من أشخاص حقيقيين يهتمّون بتقدّمك، فيكون لديك من يقف بجانبك، لا روبوت يوبّخك.',
      },
      {
        q: 'هل يحلّ محلّ متتبّعات العادات أو المخطّطات؟',
        a: 'يمكنه ذلك. لكن Doubly لا يحاول أن يكون أداة تفعل كل شيء. إنه مركّز تماماً على مساعدتك على الانتقال من التعثّر إلى البدء. إذا كنت بحاجة إلى تخطيط تفصيلي للمشاريع، فاستخدمه إلى جانب أدواتك الحالية.',
      },
      {
        q: 'هل هو مناسب إذا كنت أُصاب بالإرهاق بسهولة؟',
        a: 'خصوصاً حينها. لا يعرض لك Doubly كل شيء دفعة واحدة أبداً. ترى خطوة تالية واحدة، لا جداراً من المهام. صُمّمت التجربة بالكامل لعقول تُثقَل بسرعة.',
      },
    ],
  },

  // FinalCTA
  finalCta: {
    title: 'عقلك لا يحتاج إلى مزيد من الضغط',
    highlight: 'إنه يحتاج إلى طريقة للبدء.',
    subtitle: 'لعقول ADHD التي سئمت الإفراط في التفكير والتهرّب والتأخّر.',
    cta: 'حمّله من App Store',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    freeTools: 'أدوات ADHD مجانية',
    tools: 'الأدوات',
    learn: 'تعلّم',
    privacy: 'الخصوصية',
    terms: 'الشروط',
    support: 'الدعم',
    copyright: (year: number) => `© ${year} Doubly. صُمّم لعقول ADHD.`,
  },

  // StickyBar
  stickyBar: {
    cta: 'تخلّص من التعثّر الآن',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | تطبيق ADHD الذي يساعدك على البدء',
    description:
      'فرّغ الفوضى من دماغك، واحصل على خطوة تالية واضحة واحدة، واستخدم المساءلة لتُكمل فعلاً. مصمّم لعقول ADHD التي تحتاج مساعدة على البدء، لا على التخطيط فقط.',
    keywords: ['ADHD', 'الإنتاجية', 'تفريغ الدماغ', 'إدارة المهام', 'المساءلة', 'التركيز'],
    ogTitle: 'Doubly | تطبيق ADHD الذي يساعدك على البدء',
    ogDescription:
      'فرّغ الفوضى من دماغك، واحصل على خطوة تالية واضحة واحدة، واستخدم المساءلة لتُكمل فعلاً.',
  },
  // Tool library card copy (title + description per tool).
  // Mirrors content/tools-i18n/${locale}/_index.json cards[] so the homepage grid and
  // the footer speak the visitor's language; kept in sync by scripts/check-tool-cards.mjs.
  toolCards: {
    'task-splitter': {
      title: 'أداة تقسيم المهام',
      description:
        'اكتب مهمة لا تستطيع البدء بها، فيقسّمها الذكاء الاصطناعي إلى خطوات صغيرة قابلة للتنفيذ مع تقدير لوقت كل خطوة. مصمّمة لعقول ADHD.',
    },
    'brain-dump': {
      title: 'أداة تفريغ الدماغ',
      description:
        'أفرِغ كل ما في رأسك، ويستخرج الذكاء الاصطناعي المهام القابلة للتنفيذ فقط. بدون تسجيل، ولا شيء يُحفَظ.',
    },
    'pick-one': {
      title: 'أداة «اختر واحدة»',
      description:
        'الصق قائمة مهام فوضوية، واخرج بمهمة واحدة تبدأ بها: الأصغر، أو الأكثر إخافةً، أو واحدة عشوائية. مصمّمة للحظة التي تتحوّل فيها عشر مهام إلى كتلة واحدة ضخمة يستحيل البدء بها.',
    },
    'eisenhower-matrix': {
      title: 'مصفوفة Eisenhower (نسخة ADHD)',
      description:
        'اسحب المهام إلى مربّعات مثل «مملّة لكنها مهمة» بدل التسميات النظرية الجافة. أخيراً مصفوفة تناسب عقل ADHD. تُحفَظ محلياً.',
    },
    'pomodoro': {
      title: 'مؤقّت Pomodoro لـ ADHD',
      description:
        '25 دقيقة عمل و5 دقائق راحة. أخيراً طريقة تركيز تناسب عقل ADHD. مجاني، بدون تسجيل، ويعمل دون إنترنت.',
    },
    'visual-timer': {
      title: 'المؤقّت المرئي / ساعة عمى الوقت',
      description:
        'شريحة دائرية تتقلّص أمام عينيك، فترى الوقت يمرّ بدل أن تقرأ أرقاماً. تصلح أيضاً كساعة لعمى الوقت لدى البالغين من أصحاب ADHD.',
    },
    'brown-noise': {
      title: 'مولّد أصوات محيطة',
      description:
        'مولّد أصوات محيطة مجاني داخل المتصفّح. ضجيج بنّي، وأيضاً وردي وأبيض. صوت خلفية ثابت يهدّئ عقل ADHD المزدحم. مؤقّت نوم مضمّن، ويعمل دون إنترنت.',
    },
    'body-doubling-room': {
      title: 'غرفة المرافقة أثناء العمل',
      description:
        'غرفة تركيز مجانية لشخصين. شارِك الرابط، واعملا جنباً إلى جنب عبر فيديو مباشر بينكما، مع مؤقّت مشترك. بدون تسجيل ولا تثبيت.',
    },
    'hyperfocus-timer': {
      title: 'مؤقّت مقاطعة فرط التركيز',
      description:
        'اطمئنانات منطوقة تتكرّر كل عدد من الدقائق تختاره، وإيقاف نهائي اختياري، حتى لا تلتهم جلسة فرط تركيز واحدة فترة ما بعد الظهر كلها.',
    },
  },

  // Free ADHD tool widgets.
  // Arabic counts follow the classic agreement rules: 1 = singular, 2 = dual,
  // 3–10 = broken plural, 11+ (and 0) = singular accusative (tamyeez).
  toolWidgets: {
    taskSplitter: {
      inputLabel: 'ما المهمة التي لا تستطيع البدء بها؟',
      inputPlaceholder: 'مثلاً: قدّم تقرير المصروفات',
      submit: 'قسّمها',
      submitting: 'جارٍ تقسيمها…',
      privacyNote: 'خاص. لا شيء يُحفَظ على خادمنا.',
      charactersLeft: (count: number) => {
        if (count === 0) return 'لم يبقَ أي حرف';
        if (count === 1) return 'بقي حرف واحد';
        if (count === 2) return 'بقي حرفان';
        if (count % 100 >= 3 && count % 100 <= 10) return `بقي ${count} أحرف`;
        if (count % 100 >= 11 && count % 100 <= 99) return `بقي ${count} حرفاً`;
        return `بقي ${count} حرف`;
      },
      presetsIntro: 'أو جرّب واحدة من هذه:',
      presets: {
        cleanKitchen: 'نظّف المطبخ',
        doLaundry: 'اغسل الملابس',
        replyInbox: 'رُدّ على البريد',
        planWeekendTrip: 'خطّط لرحلة نهاية الأسبوع',
        fileTaxes: 'قدّم إقراري الضريبي',
        cleanBathroom: 'نظّف الحمّام',
      },
      loading: 'جارٍ تقسيمها إلى خطوات…',
      errorRateLimit: 'أنت تتحرّك بسرعة. انتظر لحظة ثم حاول مرة أخرى.',
      errorGeneric: 'تعذّر تقسيمها الآن. حاول مرة أخرى بعد بضع ثوانٍ.',
      tryAgain: 'حاول مرة أخرى',
      taskLabel: 'مهمة',
      urgencyLabels: { low: 'أولوية منخفضة', medium: 'أولوية متوسطة', high: 'أولوية عالية' },
      stepsDone: (done: number, total: number) => {
        const noun = total % 100 >= 3 && total % 100 <= 10 ? 'خطوات' : 'خطوة';
        return `${done}/${total} ${noun} مكتملة`;
      },
      minTotal: (min: number) => {
        const noun = min % 100 >= 3 && min % 100 <= 10 ? 'دقائق' : 'دقيقة';
        return `~${min} ${noun} إجمالاً`;
      },
      allDoneMessage: 'انتهى. لم يكن مخيفاً بقدر ما بدا، أليس كذلك؟',
      emptyState:
        'لم نجد خطوات فرعية واضحة لهذه المهمة. جرّب صياغتها كإجراء، مثل «اكتب خطة المشروع» أو «نظّف المرآب».',
    },
    brainDump: {
      label: 'أفرِغ كل ما في رأسك. لا حاجة لأن يكون منظّماً.',
      placeholder:
        'أنسى دائماً أن أتصل بطبيب الأسنان، والمطبخ فوضى.\nأشعر بالإرهاق بسبب مشروع العمل. أحتاج شراء البقالة\nلعشاء الليلة والرد على رسالة سارة من الأسبوع الماضي.',
      privacy: 'خاص. لا شيء يُحفَظ على خادمنا.',
      charactersLeft: (remaining: number) => {
        if (remaining === 0) return 'لم يبقَ أي حرف.';
        if (remaining === 1) return 'بقي حرف واحد.';
        if (remaining === 2) return 'بقي حرفان.';
        if (remaining % 100 >= 3 && remaining % 100 <= 10) return `بقي ${remaining} أحرف.`;
        if (remaining % 100 >= 11 && remaining % 100 <= 99) return `بقي ${remaining} حرفاً.`;
        return `بقي ${remaining} حرف.`;
      },
      clear: 'مسح',
      submit: 'استخرج المهام',
      submitting: 'جارٍ استخراج المهام…',
      loading: 'نقرأ ما فرّغته ونستخرج منه ما يمكن تنفيذه…',
      errorRateLimited: 'أنت تتحرّك بسرعة. انتظر لحظة ثم حاول مرة أخرى.',
      errorGeneric: 'تعذّر استخراج المهام الآن. حاول مرة أخرى بعد بضع ثوانٍ.',
      tryAgain: 'حاول مرة أخرى',
      empty:
        'لم نجد هنا شيئاً يشبه مهمة ملموسة. قد تكون هذه علامة جيدة. إذا كنت تُفرّغ ما بداخلك فحسب، فهذا يُحتسب. أمّا إذا قصدت سرد أمور لتفعلها، فحاول أن تكون أكثر تحديداً («راسل سارة» بدل «موضوع سارة»).',
      resultsTitle: 'مهام قابلة للتنفيذ',
      doneCount: (done: number, total: number) => `${done}/${total} مكتملة`,
      footer: 'اختر واحدة. واحدة فقط. نفّذها الآن، ثم عُد للتالية.',
    },
    pickOne: {
      inputLabel: 'الصق قائمتك. واحدة في كل سطر، أو مبعثرة بفواصل. لا يهم.',
      inputPlaceholder:
        'رُدّ على أمي\nاحجز موعد طبيب الأسنان\nقدّم تقرير المصروفات\nأنهِ العرض التقديمي\nاسقِ النباتات',
      itemsDetected: (count: number) => {
        if (count === 0) return 'لم يتم العثور على أي عنصر';
        if (count === 1) return 'تم العثور على عنصر واحد';
        if (count === 2) return 'تم العثور على عنصرين';
        if (count % 100 >= 3 && count % 100 <= 10) return `تم العثور على ${count} عناصر`;
        if (count % 100 >= 11 && count % 100 <= 99) return `تم العثور على ${count} عنصراً`;
        return `تم العثور على ${count} عنصر`;
      },
      itemsDetectedWithLeft: (count: number, left: number) => {
        const found =
          count === 0
            ? 'لم يتم العثور على أي عنصر'
            : count === 1
              ? 'تم العثور على عنصر واحد'
              : count === 2
                ? 'تم العثور على عنصرين'
                : count % 100 >= 3 && count % 100 <= 10
                  ? `تم العثور على ${count} عناصر`
                  : count % 100 >= 11 && count % 100 <= 99
                    ? `تم العثور على ${count} عنصراً`
                    : `تم العثور على ${count} عنصر`;
        return `${found}، بقي منها ${left}`;
      },
      clearEverything: 'امسح كل شيء',
      modeLegend: 'كيف نختار؟',
      modes: {
        smallest: {
          label: 'الأصغر',
          reason: 'أقصر عنصر في القائمة. ابدأ صغيراً واصنع الزخم.',
        },
        scariest: {
          label: 'الأكثر إخافةً',
          reason: 'ذاك الذي تفضّل ألّا تنظر إليه. إنجازه أولاً يحرّر يومك كله.',
          // يظهر حين لا يلامس أي عنصر في القائمة كلمة مخيفة. الترتيب بالطول عندها
          // سيكون كذبة، لذا نقول ما فعلناه حقاً.
          noSignalReason: 'لا شيء هنا يبدو مخيفاً، وهذا خبر جيّد بحدّ ذاته. اخترنا واحدة عشوائياً.',
        },
        random: {
          label: 'اختر واحدة فحسب',
          reason: 'بلا تفكير. القائمة اختارت بنفسها. ابدأ فقط.',
        },
      },
      // كلمات الرهبة لوضع «الأكثر إخافةً». تُطابَق كمقاطع داخل نص العنصر، لذا
      // نستخدم الجذر لا الكلمة الكاملة: «ضريب» تلتقط «الضريبة» و«ضريبية».
      //
      // العربية تلصق «ال» وحروف الجر ببداية الكلمة، والمطابقة حرفية تماماً، لذا
      // نكتب الجذر مجرّداً من «ال» (فـ«الضرائب» تحتوي «ضرائب» والعكس غير صحيح)،
      // ونضيف صيغتَي الهمزة حين يكتب الناس الكلمة بالوجهين («إلغاء» و«الغاء»).
      scaryWords: [
        // مال وبيروقراطية
        'ضريب',
        'ضرائب',
        'فاتور',
        'فواتير',
        'إيجار',
        'ايجار',
        'قرض',
        'تأمين',
        'تامين',
        'البنك',
        'ديون',
        'غرامة',
        'مخالف',
        // بصيغة التعريف عمداً: «محكمة» المجرّدة مقطع داخل «خطة محكمة» ونحوها
        'المحكمة',
        'قضية',
        'محام',
        'جواز',
        'معامل',
        'حكوم',
        // صحة
        'مستشفى',
        'طبيب',
        'أسنان',
        'اسنان',
        // مواقف اجتماعية
        'عتذ',
        'مكالم',
        'اتصال',
        'اتصل',
        'رد على',
        'الرد',
        'مدير',
        'شكوى',
        'إلغاء',
        'الغاء',
        'رفض',
        'مواجهة',
        // علامات التأجيل
        'متأخر',
        'متاخر',
        'تأجيل',
        'أجلت',
        'مؤجل',
        'نسيت',
        'من زمان',
        'مفروض',
      ],
      pickCta: 'اختر لي واحدة',
      pickAnotherCta: 'اختر غيرها',
      emptyHint: 'أضف عنصراً واحداً على الأقل، ثم اضغط على الاختيار.',
      readyHint: 'جاهز. اضغط «اختر لي واحدة» متى عجزت عن الحسم.',
      allDoneTitle: 'انتهت القائمة.',
      allDoneBody:
        'كل عنصر إمّا أُنجز أو تُخطّي. يمكنك مسح القائمة، أو إعادة الضبط لإرجاع العناصر المتخطّاة إلى المجموعة.',
      bringSkippedBack: 'أرجِع المتخطّاة',
      startFreshList: 'ابدأ قائمة جديدة',
      pickedEyebrow: 'ابدأ بهذه',
      didIt: 'أنجزتها',
      notThisOne: 'ليست هذه',
      pickAgain: 'اختر مرة أخرى',
      progress: (done: number, skipped: number, left: number) =>
        `${done} مكتملة، ${skipped} متخطّاة، ${left} متبقّية`,
    },
    eisenhower: {
      inputLabel: 'أضف مهمة',
      inputPlaceholder: 'أضف مهمة واضغط Enter (أو الصق عدّة مهام مفصولة بأسطر)',
      addButton: 'أضف',
      totals: (total: number, unsorted: number) => {
        const tasks =
          total === 0
            ? 'لا مهام'
            : total === 1
              ? 'مهمة واحدة'
              : total === 2
                ? 'مهمتان'
                : total % 100 >= 3 && total % 100 <= 10
                  ? `${total} مهام`
                  : `${total} مهمة`;
        const rest =
          unsorted === 0
            ? 'كلها مصنّفة'
            : unsorted === 1
              ? 'منها واحدة غير مصنّفة'
              : `منها ${unsorted} غير مصنّفة`;
        return `${tasks} إجمالاً، ${rest}`;
      },
      clearAll: 'امسح كل شيء',
      unsortedHeading: (count: number) => `غير مصنّفة (${count})`,
      unsortedListLabel: 'المهام غير المصنّفة',
      removeTask: (text: string) => `احذف ${text}`,
      placeHint: 'الآن اضغط على مربّع لتضعها فيه.',
      placeHintDesktop: 'أو اسحبها وأفلتها على سطح المكتب.',
      quadrantRegionLabel: (label: string) => `مربّع ${label}`,
      quadrantCountLabel: (count: number, label: string) => {
        if (count === 0) return `لا مهام في ${label}`;
        if (count === 1) return `مهمة واحدة في ${label}`;
        if (count === 2) return `مهمتان في ${label}`;
        if (count % 100 >= 3 && count % 100 <= 10) return `${count} مهام في ${label}`;
        return `${count} مهمة في ${label}`;
      },
      dropHere: 'أفلِتها هنا',
      sendBackToUnsorted: 'أعِدها إلى غير المصنّفة',
      moveBackToUnsorted: (text: string) => `أعِد ${text} إلى غير المصنّفة`,
      empty: 'فارغ',
      emptyState:
        'أضف مهمة في الأعلى للبدء. كل شيء يُحفَظ في متصفّحك، ولا شيء على خادمنا.',
      hintLabel: 'تلميح من Doubly:',
      hintBody:
        'كومة «مملّة لكنها مهمة» هي التي يتخطّاها معظم الناس، وهي التي يندمون على تخطّيها أكثر من غيرها. إذا كنت ستفعل شيئاً واحداً اليوم، فاختر منها.',
      quadrants: {
        fire: {
          label: 'مشتعلة',
          sub: 'افعلها اليوم، لا غداً.',
          textbook: 'مهم + عاجل',
        },
        boring: {
          label: 'مملّة لكنها مهمة',
          sub: 'هنا المكاسب الحقيقية. جدولها ولا تتخطّاها.',
          textbook: 'مهم + غير عاجل',
        },
        noisy: {
          label: 'ضجيج يمكن تجاهله',
          sub: 'صاخبة، لكنها ليست مشكلتك. فوّضها أو أجّلها أو تجاهلها.',
          textbook: 'عاجل + غير مهم',
        },
        drop: {
          label: 'اترك هذه',
          sub: 'مسموح لك. القائمة ليست ملزمة بأن تُنجَز كلها.',
          textbook: 'غير مهم + غير عاجل',
        },
      },
    },
    pomodoro: {
      timerLabel: 'مؤقّت Pomodoro',
      modeTablistLabel: 'وضع المؤقّت',
      modes: {
        work: 'تركيز',
        'short-break': 'استراحة قصيرة',
        'long-break': 'استراحة طويلة',
      },
      dialLabel: (mode: string, time: string) => `مؤقّت ${mode}. بقي ${time}.`,
      sessionsToday: (count: number) => `الجلسات المكتملة اليوم: ${count}`,
      soundToggle: 'صوت عند انتهاء الجلسة',
      customizeDurations: 'خصّص المدد',
      hideSettings: 'إخفاء الإعدادات',
      focusMinutes: 'التركيز (دقائق)',
      shortBreakMinutes: 'استراحة قصيرة (دقائق)',
      longBreakMinutes: 'استراحة طويلة (دقائق)',
      documentTitle: (time: string, mode: string) => `${time} | ${mode} | Doubly`,
    },
    visualTimer: {
      ariaLabel: 'مؤقّت تنازلي مرئي',
      dialAriaLabel: (remaining: string) => `قرص المؤقّت المرئي. بقي ${remaining}.`,
      seconds: (s: number) => {
        if (s === 1) return 'ثانية واحدة';
        if (s === 2) return 'ثانيتان';
        if (s % 100 >= 3 && s % 100 <= 10) return `${s} ثوانٍ`;
        return `${s} ثانية`;
      },
      minutes: (m: number) => {
        if (m === 1) return 'دقيقة واحدة';
        if (m === 2) return 'دقيقتان';
        if (m % 100 >= 3 && m % 100 <= 10) return `${m} دقائق`;
        return `${m} دقيقة`;
      },
      minutesAndSeconds: (m: number, s: number) => {
        const minutes =
          m === 1
            ? 'دقيقة واحدة'
            : m === 2
              ? 'دقيقتان'
              : m % 100 >= 3 && m % 100 <= 10
                ? `${m} دقائق`
                : `${m} دقيقة`;
        const seconds =
          s === 1
            ? 'ثانية واحدة'
            : s === 2
              ? 'ثانيتان'
              : s % 100 >= 3 && s % 100 <= 10
                ? `${s} ثوانٍ`
                : `${s} ثانية`;
        return `${minutes} و${seconds}`;
      },
      documentTitle: (time: string) => `${time} | Doubly`,
      // After a preposition (من / على) the dual takes its genitive form: دقيقتين.
      countingDown: (minutes: number) => {
        if (minutes === 1) return 'عدّ تنازلي من دقيقة واحدة';
        if (minutes === 2) return 'عدّ تنازلي من دقيقتين';
        const noun = minutes % 100 >= 3 && minutes % 100 <= 10 ? 'دقائق' : 'دقيقة';
        return `عدّ تنازلي من ${minutes} ${noun}`;
      },
      setFor: (minutes: number) => {
        if (minutes === 1) return 'مضبوط على دقيقة واحدة';
        if (minutes === 2) return 'مضبوط على دقيقتين';
        const noun = minutes % 100 >= 3 && minutes % 100 <= 10 ? 'دقائق' : 'دقيقة';
        return `مضبوط على ${minutes} ${noun}`;
      },
      paused: 'متوقّف مؤقتاً',
      timeIsUp: 'انتهى الوقت',
      presetsLabel: 'مدد جاهزة',
      presetMinutes: (minutes: number) => {
        if (minutes === 1) return 'دقيقة';
        if (minutes === 2) return 'دقيقتان';
        if (minutes % 100 >= 3 && minutes % 100 <= 10) return `${minutes} دقائق`;
        return `${minutes} دقيقة`;
      },
      custom: 'مخصّص',
      minutesLabel: 'الدقائق',
      set: 'اضبط',
      soundWhenDone: 'صوت عند انتهاء الوقت',
    },
    brownNoise: {
      play: (sound: string) => `تشغيل ${sound}`,
      pause: (sound: string) => `إيقاف ${sound}`,
      documentTitle: (sound: string) => `▶ ${sound} · Doubly`,
      chooseSound: 'اختر صوتاً محيطاً',
      soundGroupLabel: 'صوت محيط',
      volume: 'مستوى الصوت',
      volumePercent: (percent: number) => `${percent}%`,
      sleepTimer: 'مؤقّت النوم',
      sleepOff: 'إيقاف',
      sleepMinutes: (minutes: number) => {
        if (minutes === 1) return 'دقيقة';
        if (minutes === 2) return 'دقيقتان';
        if (minutes % 100 >= 3 && minutes % 100 <= 10) return `${minutes} دقائق`;
        return `${minutes} دقيقة`;
      },
      privacyNote: 'يعمل داخل متصفّحك. لا شيء يُسجَّل، ولا شيء يُرفَع.',
      sounds: {
        brown: {
          name: 'ضجيج بنّي',
          description: 'عميق ومدوٍّ. كشلّال بعيد. الصوت المشهور على TikTok.',
        },
        pink: {
          name: 'ضجيج وردي',
          description: 'أنعم من الأبيض، وأقلّ عمقاً من البنّي. متوازن.',
        },
        white: {
          name: 'ضجيج أبيض',
          description: 'أزيز تلفاز قديم. ساطع ومتساوٍ.',
        },
      },
    },
    hyperfocus: {
      ariaLabel: 'مؤقّت مقاطعة فرط التركيز',

      // Durations. Every phrasing lives here so a language can pick its own
      // plural forms, units and word order. These feed “اطمئنان كل …” and
      // “إيقاف نهائي عند …”, so the dual takes its genitive form (ساعتين,
      // دقيقتين), which also reads naturally on a bare chip.
      minutesShort: (minutes: number) => {
        if (minutes === 1) return 'دقيقة';
        if (minutes === 2) return 'دقيقتين';
        if (minutes % 100 >= 3 && minutes % 100 <= 10) return `${minutes} دقائق`;
        return `${minutes} دقيقة`;
      },
      hoursShort: (hours: number) => {
        if (hours === 1) return 'ساعة';
        if (hours === 2) return 'ساعتين';
        if (hours % 100 >= 3 && hours % 100 <= 10) return `${hours} ساعات`;
        return `${hours} ساعة`;
      },
      hoursMinutesShort: (hours: number, minutes: number) => {
        const h =
          hours === 1
            ? 'ساعة'
            : hours === 2
              ? 'ساعتين'
              : hours % 100 >= 3 && hours % 100 <= 10
                ? `${hours} ساعات`
                : `${hours} ساعة`;
        const m =
          minutes === 1
            ? 'دقيقة'
            : minutes === 2
              ? 'دقيقتين'
              : minutes % 100 >= 3 && minutes % 100 <= 10
                ? `${minutes} دقائق`
                : `${minutes} دقيقة`;
        return `${h} و${m}`;
      },
      durationLong: (hours: number, minutes: number) => {
        if (hours === 0 && minutes === 0) return 'أقل من دقيقة';
        const parts: string[] = [];
        if (hours > 0) {
          parts.push(
            hours === 1
              ? 'ساعة واحدة'
              : hours === 2
                ? 'ساعتين'
                : hours % 100 >= 3 && hours % 100 <= 10
                  ? `${hours} ساعات`
                  : `${hours} ساعة`,
          );
        }
        if (minutes > 0) {
          parts.push(
            minutes === 1
              ? 'دقيقة واحدة'
              : minutes === 2
                ? 'دقيقتين'
                : minutes % 100 >= 3 && minutes % 100 <= 10
                  ? `${minutes} دقائق`
                  : `${minutes} دقيقة`,
          );
        }
        return parts.join(' و');
      },

      // Session strip. Text wrapped in ** is rendered emphasized.
      stripNoCap: (interval: string) => `اطمئنان كل ${interval}، بلا إيقاف نهائي`,
      stripWithCap: (interval: string, cap: string) =>
        `اطمئنان كل ${interval}، إيقاف نهائي عند ${cap}`,
      summaryNoCap: (interval: string) => `اطمئنان كل **${interval}** بلا إيقاف نهائي.`,
      summaryWithCap: (interval: string, cap: string) =>
        `اطمئنان كل **${interval}** مع إيقاف نهائي عند **${cap}**.`,

      // Setup
      intervalHeading: 'اطمئنان كل',
      custom: 'مخصّص',
      minutes: 'الدقائق',
      set: 'اضبط',
      jitterNote:
        'تتغيّر مواعيد الاطمئنان عشوائياً بنحو عشرة بالمئة، حتى لا يعتاد عليها عقلك ويتجاهلها مسبقاً.',
      moreOptions: 'خيارات أكثر',
      hideOptions: 'إخفاء الخيارات',
      taskLabel: 'على ماذا تعمل؟ (اختياري)',
      taskPlaceholder: 'مثلاً: الإقرار الضريبي، مراجعة التصميم، النص',
      taskHint: 'يُستخدم في الاطمئنانات المنطوقة لتسمع ما جلست لتفعله.',
      hardStopHeading: 'إيقاف نهائي بعد',
      hardStopHint:
        'ينطلق تنبيه أعلى صوتاً عند بلوغ الحدّ، حتى لا تمرّ عليك دوّامة من ست ساعات دون أن تنتبه.',
      capOff: 'بلا حدّ',
      capHours: (hours: number) => {
        if (hours === 1) return 'ساعة';
        if (hours === 2) return 'ساعتين';
        if (hours % 100 >= 3 && hours % 100 <= 10) return `${hours} ساعات`;
        return `${hours} ساعة`;
      },
      noHardStop: 'بلا إيقاف نهائي',
      alertsHeading: 'التنبيهات',
      chime: 'رنين',
      voice: 'صوت',
      notify: 'إشعار',
      alertsHint:
        'يعلو الرنين إذا تجاهلت الاطمئنان. والصوت ينطق الوقت والمدة المنقضية. والإشعار يظهر في المتصفّح عندما يكون التبويب في الخلفية.',
      notificationsBlocked:
        'الإشعارات محظورة في هذا المتصفّح. فعّلها من إعدادات الموقع لاستخدام هذه الميزة.',
      notificationsUnsupported: 'متصفّحك لا يدعم إشعارات الويب.',
      startSession: 'ابدأ الجلسة',

      // Live session
      statElapsed: 'المنقضي',
      statNextCheckIn: 'الاطمئنان التالي',
      statCap: 'الحدّ',
      statusNow: 'الآن',
      statusPaused: 'متوقّف مؤقتاً',
      statusCapHit: 'بلغت الحدّ',
      statusOff: 'معطّل',
      workingOn: (task: string) => `تعمل على **${task}**`,
      checkInHeading: 'اطمئنان سريع',
      checkInBody: (clock: string, elapsed: string) =>
        `الساعة ${clock}، وأنت منشغل بهذا منذ ${elapsed}. هل ما زلت على المهمة التي بدأتها، أم حان وقت الخروج إلى السطح؟`,
      stillGoing: 'ما زلت مستمراً',
      takeABreak: 'خذ استراحة',
      stopSession: 'أوقف الجلسة',
      capHeading: 'بلغت حدّ الجلسة',
      capBody: (minutes: number) => {
        const noun = minutes % 100 >= 3 && minutes % 100 <= 10 ? 'دقائق' : 'دقيقة';
        return `ضبطت إيقافاً نهائياً عند ${minutes} ${noun}. قف، اشرب ماءً، تناول شيئاً. العمل سيبقى هنا.`;
      },
      pause: 'إيقاف مؤقت',
      resume: 'استئناف',
      endSession: 'أنهِ الجلسة',
      checkInLog: 'سجلّ الاطمئنانات',
      logContinue: 'واصل العمل',
      logBreak: 'أخذ استراحة',
      logStop: 'توقّف',

      // Browser tab title while a check-in is waiting in a background tab.
      tabAlert: '⚠ اطمئنان | Doubly',

      // Spoken aloud (SpeechSynthesis) and pushed as OS notifications.
      checkInSpeech: (clock: string, elapsed: string, task: string) =>
        task
          ? `اطمئنان سريع. الساعة الآن ${clock}. أنت تعمل على ${task} منذ ${elapsed}.`
          : `اطمئنان سريع. الساعة الآن ${clock}. أنت تعمل منذ ${elapsed}.`,
      capSpeech: (clock: string, elapsed: string) =>
        `بلغت حدّ الجلسة. الساعة الآن ${clock}. أنت منشغل بهذا منذ ${elapsed}. حان وقت التوقّف.`,
      notificationCheckInTitle: 'اطمئنان فرط التركيز',
      notificationCheckInBody: (clock: string, elapsed: string) =>
        `الساعة الآن ${clock}. أنت منشغل بهذا منذ ${elapsed}.`,
      notificationCapTitle: 'بلغت حدّ فرط التركيز',
      notificationCapBody: (clock: string, elapsed: string) =>
        `الساعة الآن ${clock}. أنت منشغل بهذا منذ ${elapsed}. حان وقت التوقّف.`,
    },
    shared: {
      start: 'ابدأ',
      pause: 'إيقاف مؤقت',
      resume: 'استئناف',
      done: 'تم',
      reset: 'إعادة ضبط',
      skip: 'تخطَّ',
      skipAria: 'تخطَّ إلى الجلسة التالية',
      startSession: 'ابدأ جلسة تركيز',
      creatingRoom: 'جارٍ إنشاء الغرفة...',
    },
    chrome: {
      tryInApp: 'جرّبه في التطبيق',
      appStoreAria: (label: string) => `${label} على App Store`,
      breadcrumbAria: 'مسار التنقّل',
    },
  },

  // غرفة المرافقة الحيّة على /r/[id].
  //
  // خلافاً لبقية الأقسام، لا يحدّد الرابطُ اللغةَ هنا. الغرفة رابط يتشاركه
  // شخصان، وتُحسم لغة كل طرف من إعدادات متصفّحه: الغرفة نفسها قد تظهر بالعربية
  // لأحدهما وبالألمانية للآخر. لذا لا تفترض أي جملة هنا أن الطرفين يقرآن اللغة
  // نفسها، ولا تبنِ عبارة من نصوص واجهة الطرف الآخر.
  room: {
    join: {
      titleFirst: 'ابدأ جلسة تركيز',
      titleJoin: 'انضم إلى جلسة التركيز',
      subtitleFirst: 'اختر اسمك ومدة الجلسة. يمكنك مشاركة رابط الدعوة بعد الدخول.',
      subtitleJoin: 'اختر اسمك وادخل. المضيف ضبط المؤقّت مسبقاً.',
      nameLabel: 'اسمك',
      // اسم أول شائع وعادي بهذه اللغة. مجرّد نموذج في الحقل، لا علامة تجارية.
      namePlaceholder: 'سارة',
      avatarLabel: 'اختر صورة رمزية',
      avatarChooseAria: (emoji: string) => `اختر الصورة الرمزية ${emoji}`,
      durationLabel: 'مدة الجلسة',
      minutes: (n: number) => {
        const noun = n % 100 >= 3 && n % 100 <= 10 ? 'دقائق' : 'دقيقة';
        return `${n} ${noun}`;
      },
      permissionNote:
        'ستطلب الشاشة التالية إذن الكاميرا والميكروفون. كلاهما اختياري. إن تخطّيتهما، ستدخل بمربّع شبح ويظلّ من في الغرفة يرى أنك هنا.',
      createCta: 'أنشئ غرفة',
      joinCta: 'ادخل الغرفة',
    },
    header: {
      eyebrow: 'غرفة المرافقة أثناء العمل',
      withPeer: (name: string) => `أنت و${name}`,
      waiting: 'بانتظار شريكك',
      copyInvite: 'انسخ رابط الدعوة',
      linkCopied: 'تم نسخ الرابط',
    },
    full: {
      title: 'الغرفة ممتلئة',
      body: 'غرفة المرافقة تتّسع لشخصين. والخبر الجيّد أن فتح غرفة جديدة يحتاج نقرة واحدة.',
      cta: 'ابدأ غرفة جديدة',
    },
    phases: {
      waiting: {
        eyebrow: 'الخطوة 0 من 3',
        title: 'شارك رابطك',
        body: 'أرسل رابط الصفحة إلى شخص واحد. تبدأ الجلسة لحظة دخوله.',
      },
      intro: {
        eyebrow: 'الخطوة 1 من 3 · التعارف',
        title: 'ألقِ التحية وقل ما أنت مقبل عليه',
        titleWithPeer: (name: string) => `ألقِ التحية على ${name}`,
        body: 'خذ 60 ثانية. الكاميرا مفتوحة، وجملة واحدة لكلٍّ منكما. قول الهدف بصوت مسموع هو ما يثبّته.',
        cta: 'ابدأ التركيز',
      },
      focus: {
        eyebrow: 'الخطوة 2 من 3 · التركيز',
        title: 'رأسك في العمل. تعملان معاً في صمت.',
        body: 'الميكروفون مفتوح أو مكتوم، كلاهما جيّد. وجود الآخر معك هو المقصد.',
        cta: 'أنهِ التركيز مبكراً',
      },
      wrapUp: {
        eyebrow: 'الخطوة 3 من 3 · الختام',
        title: 'شارك إنجازاً واحداً وعقبة واحدة',
        body: 'تأمّل قصير بصوت مسموع يثبّت ما أنجزته للتو ويجعل بدء الجلسة القادمة أسهل.',
        cta: 'أنهِ الجلسة',
      },
      done: {
        eyebrow: 'اكتملت الجلسة',
        title: 'أحسنت. لقد حضرت.',
        body: 'وهذا يُحتسب. ابقَ لجلسة أخرى، أو أغلق التبويب وافعل شيئاً لطيفاً لنفسك.',
        runAnother: 'جلسة أخرى',
      },
    },
    tiles: {
      you: (name: string) => `${name} (أنت)`,
      peerFallbackName: 'بانتظار',
      waitingForPartner: 'بانتظار الشريك...',
      micMuted: 'الميكروفون مكتوم',
      goalPlaceholderIntro: 'ما أنا مقبل على العمل عليه...',
      goalPlaceholderFocus: 'ما أعمل عليه',
      reflectionPlaceholder: 'إنجاز واحد أو عقبة واحدة...',
      peerNoGoal: 'لا هدف بعد',
      peerNoReflection: 'بانتظار الخلاصة',
      empty: '—',
    },
    controls: {
      muteMic: 'اكتم الميكروفون',
      unmuteMic: 'ألغِ كتم الميكروفون',
      micUnavailable: 'الميكروفون غير متاح',
      muteTitle: 'كتم',
      unmuteTitle: 'إلغاء الكتم',
      micBlockedTitle: 'الميكروفون محظور أو غير متاح',
      camOff: 'أوقف الكاميرا',
      camOn: 'شغّل الكاميرا',
      camUnavailable: 'الكاميرا غير متاحة',
      stopVideoTitle: 'إيقاف الفيديو',
      startVideoTitle: 'تشغيل الفيديو',
      camBlockedTitle: 'الكاميرا محظورة أو غير متاحة',
      startTimer: 'ابدأ المؤقّت',
      pauseTimer: 'أوقف المؤقّت',
      leave: 'مغادرة',
      retry: 'أعد المحاولة',
    },
    reactions: {
      groupAria: 'أرسل تفاعلاً',
      sendAria: (emoji: string) => `أرسل تفاعل ${emoji}`,
    },
    status: {
      peerLeft: 'شريكك غادر الغرفة.',
      shareToUnlock: 'شارك رابط الدعوة ليأتي أحدهم. تُفتح الجلسة فور وصوله.',
      upNext: (minutes: number) => {
        const noun = minutes % 100 >= 3 && minutes % 100 <= 10 ? 'دقائق' : 'دقيقة';
        return `التالي: جلسة تركيز ${minutes} ${noun}`;
      },
      planOnArrival: (minutes: number) => {
        const noun = minutes % 100 >= 3 && minutes % 100 <= 10 ? 'دقائق' : 'دقيقة';
        return `الخطة: جلسة تركيز ${minutes} ${noun} فور وصول شريكك`;
      },
      wrapUpBreath: 'خذ نفساً. المؤقّت متوقّف.',
      timerAria: (remaining: string) => `المؤقّت، تبقّى ${remaining}`,
    },
    errors: {
      p2pBlocked: 'تعذّر الاتصال. قد تحجب شبكتك الاتصال المباشر بين الأجهزة. جرّب شبكة أخرى.',
      mediaUnavailable: 'الكاميرا والميكروفون غير متاحين.',
    },
  },

};

export default ar;
