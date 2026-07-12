const nl = {
  // Shared
  common: {
    tryInDoubly: 'Probeer het in Doubly',
    changeLanguage: 'Taal wijzigen',
    socialProof: (count: number) => `Sluit je aan bij ${count.toLocaleString('nl-NL')} ADHD'ers`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    tools: 'Tools',
    howItWorks: 'Hoe het werkt',
    features: 'Functies',
    testimonials: 'Ervaringen',
    faq: 'FAQ',
    cta: 'Download Doubly',
    toggleMenu: 'Menu wisselen',
  },

  // Hero
  hero: {
    badge: 'Gemaakt voor ADHD-breinen',
    titlePrefix: 'Als je brein ',
    titleHighlight: '47 tabbladen open heeft',
    subtitle: 'Zet de chaos in minder dan een minuut om in één duidelijke volgende stap.',
    cta: 'Download in de App Store',
    secondaryCta: 'Zie hoe het een taak opsplitst ↓',
    android: {
      prompt: 'Gebruik je Android?',
      placeholder: 'jij@email.com',
      submit: 'Houd me op de hoogte',
      success: 'Je staat op de lijst. We mailen je zodra Doubly op Android verschijnt.',
      invalid: 'Voer een geldig e-mailadres in.',
      error: 'Er ging iets mis. Probeer het opnieuw.',
    },
    floatingCards: {
      brainDump: 'Brain Dump',
      habits: 'Gewoontes',
      accountability: 'Verantwoording',
    },
    phone: {
      screenAlt: 'Doubly-app die je gewoontes toont met dagelijkse streaks en voortgangsroosters',
    },
  },

  // Problem
  problem: {
    title: 'ADHD is niet zomaar ongeorganiseerd zijn',
    titleHighlight: 'ongeorganiseerd',
    subtitle:
      'Het is een dagelijkse strijd met een brein dat niet wil meewerken aan je eigen bedoelingen.',
    cards: [
      {
        type: 'External',
        title: 'Te veel taken. Te veel gedachten.',
        body: 'Geen duidelijke plek om te beginnen.',
      },
      {
        type: 'Internal',
        title: 'Je weet wat je moet doen, maar toch kun je niet beginnen.',
        body: 'Het is geen luiheid. Het is startweerstand.',
      },
      {
        type: 'Philosophical',
        title: 'Beginnen zou niet zo moeilijk moeten zijn.',
        body: 'Jouw brein werkt anders. Je hulpmiddelen zouden dat ook moeten doen.',
      },
      {
        type: 'Stakes',
        title: 'En het kost je meer dan alleen tijd.',
        body: 'Dingen stapelen zich op. Je raakt achterop. Je begint jezelf minder te vertrouwen.',
      },
    ],
  },

  // VisualProblem
  visualProblem: {
    cards: [
      { image: '/problem-1.jpg', alt: 'Te veel taken. Te veel gedachten.' },
      { image: '/problem-2.jpg', alt: 'Je weet wat je moet doen, maar toch kun je niet beginnen.' },
      { image: '/problem-4.jpg', alt: 'Beginnen aan normale dingen zou niet zo moeilijk moeten zijn.' },
      { image: '/problem-3.jpg', alt: 'En het kost je meer dan alleen tijd.' },
    ],
  },

  // Guide
  guide: {
    title: 'Speciaal gemaakt voor ADHD-breinen die moeite hebben met beginnen',
    subtitle:
      'De meeste productiviteitsapps gaan ervan uit dat je brein klaar is om te plannen. Doubly is gemaakt voor het moment dat je overweldigd, vastgelopen of aan het vermijden bent — gebaseerd op hoe ADHD echt werkt.',
    proofPoints: [
      'Gemaakt voor ADHD-frictie, niet generieke productiviteit',
      'Helpt startweerstand te verminderen',
      'Geeft structuur zonder je te overweldigen',
    ],
    mockup: {
      brainDump: 'Brain Dump',
      items: ['tandarts bellen', 'boodschappen doen', 'baas beantwoorden', 'de was', 'waarom ben ik zo moe'],
      yourNextStep: 'Jouw volgende stap',
      nextStepTask: 'Was in de machine doen',
      nextStepMeta: '~5 min · weinig energie',
      accountability: 'Verantwoording',
      accountabilityText: 'Sarah checkt in om 15:00',
    },
  },

  // BrainDumpDemo
  brainDumpDemo: {
    title: 'Dump de chaos. Houd de taken over.',
    titleHighlight: 'Houd de taken over.',
    replayDemo: 'Demo opnieuw afspelen',
    subtitle:
      'Hoofd vol? Typ 20 seconden. Doubly haalt eruit wat je echt kunt doen en gooit de ruis weg.',
    dumpText:
      'Ik open mijn laptop om productief te zijn en binnen vijf seconden roept mijn brein: beantwoord dat bericht, bestel vitamines, maak de gootsteen schoon, zoek de oplader, eet iets, en vergeet ook niet die superbelangrijke taak die je echt niet zou vergeten. Die ik meteen vergat.',
    brainDumpLabel: 'Brain Dump',
    brainDumpPlaceholder: 'Laat het gewoon los...',
    extractedTasksLabel: 'Gevonden taken',
    listening: 'Aan het luisteren...',
    tasksFound: (count: number) => `${count} ${count === 1 ? 'taak' : 'taken'} gevonden`,
    filterNote: 'Niet-actiegerichte gedachten weggefilterd. Alleen echte taken behouden.',
    tasks: [
      { text: '💊 Vitamines bestellen', phrase: 'bestel vitamines' },
      { text: '🧽 Gootsteen schoonmaken', phrase: 'maak de gootsteen schoon' },
      { text: '🔌 Oplader zoeken', phrase: 'zoek de oplader' },
      { text: '🍽️ Iets eten', phrase: 'eet iets' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: 'Zo kom je weer op gang',
    titleHighlight: 'weer op gang',
    subtitle: 'Vier simpele stappen. Geen ingewikkelde setup. Geen leercurve.',
    stepLabel: 'STAP',
    steps: [
      {
        number: '01',
        title: 'Maak je hoofd leeg',
        body: 'Leg gedachten, taken en mentale rommel snel vast. Geen ordening nodig. Gooi het er gewoon uit.',
      },
      {
        number: '02',
        title: 'Krijg één duidelijke volgende stap',
        body: 'Doubly verandert overweldiging in iets waar je echt aan kunt beginnen. Geen tien prioriteiten. Eén.',
      },
      {
        number: '03',
        title: 'Blijf in beweging',
        body: 'Gebruik verantwoording, timers en voortgangstools om door te gaan, ook als de motivatie wegzakt.',
      },
      {
        number: '04',
        title: 'Leg verantwoording af',
        body: 'Deel met vrienden in de Doubly-feed. Echte verantwoording ontstaat als iemand voor je duimt.',
      },
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: 'Typ een taak. Zie hem splitsen.',
    titleHighlight: 'splitsen.',
    subtitle:
      'Grote taken voelen onmogelijk. Doubly hakt ze in stappen van 2–5 minuten zodat je gewoon kunt beginnen.',
    customInputPlaceholder: 'Of typ je eigen taak...',
    splitButton: 'Splits het',
    taskLabel: 'Taak',
    aiThinking: 'AI hakt het in stukken...',
    errorMessage: 'Kon de AI nu niet bereiken. Probeer een voorbeeld hierboven of probeer het opnieuw.',
    tryAgain: 'Opnieuw proberen',
    stepsDone: (done: number, total: number) => `${done}/${total} stappen klaar`,
    minTotal: (min: number) => `~${min} min totaal`,
    urgencySuffix: 'urgentie',
    urgencyLabels: { low: 'Lage urgentie', medium: 'Gemiddelde urgentie', high: 'Hoge urgentie' },
    allDoneMessage: 'Helemaal klaar. Dat viel best mee, toch?',
    allDoneDescription:
      'Doubly doet dit voor elke taak die je erin gooit. Geen eindeloze to-dolijst meer om naar te staren.',
    allDoneCta: 'Kom nu op gang',
    presets: [
      { label: 'De keuken schoonmaken', icon: '🍳' },
      { label: 'De was doen', icon: '🧰' },
      { label: 'Avondeten koken', icon: '🍲' },
      { label: 'De badkamer schoonmaken', icon: '🚿' },
      { label: 'De slaapkamer opruimen', icon: '🛏️' },
      { label: 'Boodschappen doen', icon: '🛒' },
    ],
    presetResults: {
      'De keuken schoonmaken': {
        title: '🍳 De keuken schoonmaken',
        subtasks: [
          { text: 'Werkbladen leegmaken en spullen opbergen', duration: '3 minuten' },
          { text: 'Vuile vaat in de vaatwasser laden', duration: '5 minuten' },
          { text: 'Werkbladen en fornuis afnemen', duration: '4 minuten' },
          { text: 'De gootsteen schrobben', duration: '2 minuten' },
          { text: 'De vloer vegen', duration: '3 minuten' },
          { text: 'Het vuilnis buitenzetten', duration: '2 minuten' },
        ],
        urgency: 'medium',
      },
      'De was doen': {
        title: '🧰 De was doen',
        subtasks: [
          { text: 'Vuile kleren door het hele huis verzamelen', duration: '5 minuten' },
          { text: 'Sorteren in wit, bont en fijne was', duration: '3 minuten' },
          { text: 'Eerste lading in de wasmachine doen', duration: '2 minuten' },
          { text: 'Droge kleren van de vorige lading ophangen of opvouwen', duration: '10 minuten' },
          { text: 'Opgevouwen kleren in laden/kast opbergen', duration: '5 minuten' },
        ],
        urgency: null,
      },
      'Avondeten koken': {
        title: '🍲 Avondeten koken',
        subtasks: [
          { text: 'Bedenk wat je maakt en check de ingrediënten', duration: '3 minuten' },
          { text: 'Groenten wassen en voorbereiden', duration: '8 minuten' },
          { text: 'Begin met het hoofdgerecht koken', duration: '15 minuten' },
          { text: 'Bijgerecht of salade maken', duration: '7 minuten' },
          { text: 'De tafel dekken', duration: '2 minuten' },
          { text: 'Opscheppen en serveren', duration: '2 minuten' },
        ],
        urgency: 'low',
      },
      'De badkamer schoonmaken': {
        title: '🚿 De badkamer schoonmaken',
        subtasks: [
          { text: 'Reiniger op douche, wastafel en wc sproeien', duration: '2 minuten' },
          { text: 'De wc-pot schrobben en de bril schoonvegen', duration: '3 minuten' },
          { text: 'De wastafel en kraan schoonmaken', duration: '2 minuten' },
          { text: 'De spiegel schoonvegen', duration: '1 minuut' },
          { text: 'De douche/bad schrobben', duration: '5 minuten' },
          { text: 'De vloer dweilen of afnemen', duration: '3 minuten' },
          { text: 'Handdoeken vervangen en wc-papier aanvullen', duration: '2 minuten' },
        ],
        urgency: 'medium',
      },
      'De slaapkamer opruimen': {
        title: '🛏️ De slaapkamer opruimen',
        subtasks: [
          { text: 'Het bed opmaken en de kussens rechtleggen', duration: '3 minuten' },
          { text: 'Kleren van de vloer en stoelen oprapen', duration: '4 minuten' },
          { text: 'Vuile kleren in de wasmand, schone opbergen', duration: '5 minuten' },
          { text: 'Het nachtkastje opruimen en ordenen', duration: '3 minuten' },
          { text: 'Oppervlakken afstoffen', duration: '3 minuten' },
          { text: 'De vloer stofzuigen of vegen', duration: '4 minuten' },
        ],
        urgency: 'low',
      },
      'Boodschappen doen': {
        title: '🛒 Boodschappen doen',
        subtasks: [
          { text: 'Check de koelkast en voorraadkast op wat je nodig hebt', duration: '5 minuten' },
          { text: 'Een lijst schrijven, gegroepeerd per gangpad', duration: '5 minuten' },
          { text: 'Herbruikbare tassen pakken', duration: '1 minuut' },
          { text: 'Winkelen en items afvinken', duration: '30 minuten' },
          { text: 'Uitpakken en boodschappen opbergen', duration: '10 minuten' },
        ],
        urgency: null,
      },
    },
  },

  // TwoQuestions
  twoQuestions: {
    title: 'Komt dit bekend voor?',
    titleHighlight: 'bekend voor?',
    subtitle: 'Je bent niet lui. Je brein heeft gewoon een ander startpunt nodig.',
    withoutDoubly: 'Zonder Doubly',
    withDoubly: 'Met Doubly',
    rows: [
      {
        without: 'Ik verstijf en weet niet waar ik moet beginnen',
        with: 'Brain dump → één duidelijke volgende stap verschijnt',
      },
      {
        without: 'Ik doe in plaats daarvan kleinere willekeurige taakjes',
        with: 'Doubly laat zien wat er echt eerst toe doet',
      },
      {
        without: 'Ik begin aan 5 dingen tegelijk',
        with: 'Eén taak op je scherm. Maak hem af, dan de volgende.',
      },
      {
        without: 'Ik denk te lang na over het perfecte plan',
        with: 'Dump alles, Doubly kiest de eerste stap',
      },
      {
        without: 'Ik stel het uit tot het dringend wordt — en dan paniek',
        with: 'Je begint voordat de paniek toeslaat',
      },
      {
        without: 'Ik werk alleen en verlies snel mijn momentum',
        with: 'Body doubling en accountability-partners houden je op gang',
      },
    ],
    questionTitle: 'Wat heb je op dat moment het meest nodig?',
    options: [
      'Een brain dump',
      'Eén kleine volgende stap',
      'Verantwoording',
      'Een timer / focus-zetje',
      'Een reset als ik achterop raak',
    ],
    responseIntro: 'Precies daar helpt Doubly.',
    responses: {
      'Een brain dump': {
        title: 'Brain Dump → Directe helderheid',
        description:
          'Typ de chaos eruit. Doubly haalt eruit wat je kunt doen en gooit de ruis weg.',
      },
      'Eén kleine volgende stap': {
        title: 'Volgende stap, altijd klaar',
        description:
          'Doubly hakt grote taken op en geeft je precies de volgende kleine zet. Geen overweldiging.',
      },
      'Verantwoording': {
        title: 'Verantwoording-check-ins',
        description:
          'Zachte duwtjes en sociale verantwoording houden je op koers, zonder schuldgevoel.',
      },
      'Een timer / focus-zetje': {
        title: 'Focusmodus',
        description:
          'Eén taak op je scherm, een timer die loopt, afleiding weg. Alleen jij en het werk.',
      },
      'Een reset als ik achterop raak': {
        title: 'Frisse start, geen schuldgevoel',
        description:
          'Afgehaakt? Doubly schudt je plan opnieuw zodat je weer kunt oppakken zonder schaamtespiraal.',
      },
    },
    mockupNextStep: 'Je volgende stap staat klaar',
    mockupTask: 'Begin met één klein ding',
    mockupCta: 'Probeer Doubly',
  },


  // HabitDemo
  habitDemo: {
    title: 'Bouw gewoontes die echt beklijven',
    subtitle:
      'Geen streaks om te breken. Geen schuldgevoel. Tik gewoon wanneer je het doet. Doubly volgt het patroon zodat je vooruitgang ziet.',
    todayLabel: 'Vandaag',
    yourHabits: 'Jouw gewoontes',
    weeksLabel: '12 weken',
    lessLabel: 'Minder',
    moreLabel: 'Meer',
    currentStreak: 'Huidige streak',
    bestStreak: 'Beste streak',
    completion: 'Voltooiing',
    allDoneMessage: 'Alle gewoontes voor vandaag gedaan!',
    allDoneDescription: 'Stel je dit elke dag voor. Doubly maakt het makkelijk om door te gaan.',
    allDoneCta: 'Kom nu op gang',
    habits: [
      { id: 'walk', name: 'Ga wandelen', icon: '🚶' },
      { id: 'read', name: 'Lees 10 pagina’s', icon: '📖' },
      { id: 'journal', name: 'Dagboek bijhouden', icon: '✏️' },
      { id: 'tidy', name: '10 min opruimen', icon: '🧹' },
    ],
  },

  // Success
  success: {
    title: 'Ruil doomscrollen in voor een feed die je in beweging brengt.',
    imageAlt: 'Doubly-post die een afgeronde taak toont, met reacties en opmerkingen van de community',
    subtitle: 'Ruil doomscrollen in voor een feed die je in beweging brengt.',
    outcomes: [
      'Begin aan taken zonder de mentale strijd',
      'Maak af wat je van plan was',
      'Kom weer op koers zonder te spiralen',
      'Vertrouw erop dat je dingen echt doet',
    ],
  },

  // Stakes
  stakes: {
    title: 'Want vastzitten heeft een prijs',
    body: 'Als beginnen zo moeilijk voelt, glippen dingen weg. Deadlines worden gemist, kansen gaan voorbij, en je begint je gevangen te voelen in een lus van vermijding en schuldgevoel. Doubly helpt je die cyclus te doorbreken voordat er weer een week verdwijnt.',
  },

  // Testimonials
  testimonials: {
    title: 'Mensen hebben geen extra productiviteitsdruk nodig',
    subtitle: 'Ze hebben hulp nodig om te beginnen.',
    items: [
      // Real App Store reviews, quoted verbatim. Only add entries that are actual
      // published reviews AND whose reviewer gave permission (Apple's rule; ask by
      // replying to the review in App Store Connect). The grid auto-adapts up to 3.
      {
        quote:
          'This app is the only one that actually got me to do things. I have very strong ADHD, and it made me concentrate on my tasks one by one to always know what’s coming ahead and make order in my day. Love it so much! Hope to see awesome upgrades soon 🙏🏻',
        name: 'Liorcic',
        label: 'App Store-review',
      },
      {
        quote:
          'This has really helped me manage my workload, I haven’t seen anything like it. The walkthrough and set up is very intuitive, and the features make it worth it!',
        name: 'MinecraftrNinja',
        label: 'App Store-review',
      },
      // Slot 3 — next permitted review goes here.
    ],
  },

  // FAQ
  // ToolsSection
  toolsSection: {
    title: 'Gratis ADHD-tools die je meteen kunt gebruiken',
    subtitle: 'Geen registratie, geen pop-ups. Open er een in je browser zodra je vastloopt.',
    hot: 'Populair',
    openTool: 'Tool openen',
    browseAll: 'Bekijk alle gratis ADHD-tools',
  },

  faq: {
    title: 'Vragen',
    items: [
      {
        q: 'Is Doubly alleen voor mensen met een ADHD-diagnose?',
        a: 'Nee. Doubly is voor iedereen die worstelt met beginnen, overweldiging of mentale rommel. Je hebt geen diagnose nodig, alleen een brein dat soms vastloopt als er te veel te doen is.',
      },
      {
        q: 'Hoe verschilt dit van een gewone to-do-app?',
        a: 'To-do-apps helpen je dingen op een lijst te zetten. Doubly helpt je er echt aan te beginnen. Wij richten ons op het verminderen van startweerstand, de kloof tussen weten wat je moet doen en het doen, met brain dumps, één-stap-helderheid en verantwoording.',
      },
      {
        q: 'Helpt het specifiek bij het beginnen aan taken?',
        a: 'Ja. Dat is onze kernfocus. Brain dump ruimt mentale rommel op, volgende-stap-helderheid kiest één haalbare actie, en verantwoordingstools helpen je het door te zetten. Elke functie is gebouwd rond die eerste stap.',
      },
      {
        q: 'Wat maakt verantwoording hier anders?',
        a: 'Het is geen gezeur of streaks die je schuldig laten voelen. Doubly gebruikt zachte sociale check-ins met echte mensen die om je vooruitgang geven, zodat je iemand aan je zijde hebt, geen robot die je beschaamt.',
      },
      {
        q: 'Vervangt het habit-trackers of planners?',
        a: 'Dat kan. Maar Doubly probeert geen zwitsers zakmes te zijn. Het is laser-gefocust op je helpen van vastzitten naar beginnen. Als je gedetailleerde projectplanning nodig hebt, combineer het dan met je bestaande tools.',
      },
      {
        q: 'Is het goed als ik snel overweldigd raak?',
        a: 'Juist dan. Doubly laat je nooit alles tegelijk zien. Je ziet één volgende stap, geen muur van taken. De hele UX is ontworpen voor breinen die snel overbelast raken.',
      },
    ],
  },

  // FinalCTA
  finalCta: {
    title: 'Je brein heeft geen extra druk nodig',
    highlight: 'Het heeft een manier nodig om te beginnen.',
    subtitle: 'Voor ADHD-breinen die moe zijn van overdenken, vermijden en achterop raken.',
    cta: 'Download in de App Store',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    freeTools: 'Gratis ADHD-tools',
    tools: 'Tools',
    learn: 'Leren',
    privacy: 'Privacy',
    terms: 'Voorwaarden',
    support: 'Support',
    copyright: (year: number) => `© ${year} Doubly. Gemaakt voor ADHD-breinen.`,
  },

  // StickyBar
  stickyBar: {
    cta: 'Kom nu op gang',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | De ADHD-app die je helpt te beginnen',
    description:
      'Dump de chaos uit je hoofd, krijg één duidelijke volgende stap, en gebruik verantwoording om echt door te zetten. Gemaakt voor ADHD-breinen die hulp nodig hebben bij beginnen, niet alleen bij plannen.',
    keywords: ['ADHD', 'productiviteit', 'brain dump', 'takenbeheer', 'verantwoording', 'focus'],
    ogTitle: 'Doubly | De ADHD-app die je helpt te beginnen',
    ogDescription:
      'Dump de chaos uit je hoofd, krijg één duidelijke volgende stap, en gebruik verantwoording om echt door te zetten.',
  },
};

export default nl;
