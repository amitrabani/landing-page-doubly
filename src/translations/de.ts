const de = {
  // Shared
  common: {
    tryInDoubly: 'Probier es in Doubly aus',
    changeLanguage: 'Sprache ändern',
    socialProof: (count: number) =>
      `Schließ dich ${count.toLocaleString('de-DE')} Menschen mit ADHS an`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    tools: 'Tools',
    howItWorks: 'So funktioniert es',
    features: 'Funktionen',
    testimonials: 'Erfahrungsberichte',
    faq: 'FAQ',
    cta: 'Doubly holen',
    toggleMenu: 'Menü umschalten',
  },

  // Hero
  hero: {
    badge: 'Gemacht für ADHS-Gehirne',
    titlePrefix: 'Wenn dein Gehirn ',
    titleHighlight: '47 Tabs offen hat',
    subtitle: 'Verwandle das Chaos in weniger als einer Minute in einen klaren nächsten Schritt.',
    cta: 'Im App Store laden',
    secondaryCta: 'Sieh zu, wie es eine Aufgabe aufteilt ↓',
    android: {
      prompt: 'Nutzt du Android?',
      placeholder: 'du@email.com',
      submit: 'Benachrichtige mich',
      success: 'Du bist auf der Liste. Wir schreiben dir eine E-Mail, sobald Doubly für Android da ist.',
      invalid: 'Bitte gib eine gültige E-Mail-Adresse ein.',
      error: 'Etwas ist schiefgelaufen. Bitte versuch es erneut.',
    },
    floatingCards: {
      brainDump: 'Brain Dump',
      habits: 'Gewohnheiten',
      accountability: 'Verbindlichkeit',
    },
    phone: {
      screenAlt: 'Die Doubly-App zeigt deine Gewohnheiten mit täglichen Streaks und Fortschrittsrastern',
    },
  },

  // Problem
  problem: {
    title: 'ADHS heißt nicht einfach nur unorganisiert zu sein',
    titleHighlight: 'unorganisiert',
    subtitle:
      'Es ist ein täglicher Kampf mit einem Gehirn, das bei deinen eigenen Vorsätzen nicht mitspielt.',
    cards: [
      {
        type: 'External',
        title: 'Zu viele Aufgaben. Zu viele Gedanken.',
        body: 'Kein klarer Anfang.',
      },
      {
        type: 'Internal',
        title: 'Du weißt, was zu tun ist, und kommst trotzdem nicht in Gang.',
        body: 'Das ist keine Faulheit. Das ist Startwiderstand.',
      },
      {
        type: 'Philosophical',
        title: 'Anfangen sollte nicht so schwer sein.',
        body: 'Dein Gehirn tickt anders. Deine Tools sollten das auch.',
      },
      {
        type: 'Stakes',
        title: 'Und es kostet dich mehr als nur Zeit.',
        body: 'Dinge stapeln sich. Du fällst zurück. Du fängst an, das Vertrauen in dich selbst zu verlieren.',
      },
    ],
  },

  // VisualProblem
  visualProblem: {
    cards: [
      { image: '/problem-1.jpg', alt: 'Zu viele Aufgaben. Zu viele Gedanken.' },
      { image: '/problem-2.jpg', alt: 'Du weißt, was zu tun ist, und kommst trotzdem nicht in Gang.' },
      { image: '/problem-4.jpg', alt: 'Normale Dinge anzufangen sollte nicht so schwer sein.' },
      { image: '/problem-3.jpg', alt: 'Und es kostet dich mehr als nur Zeit.' },
    ],
  },

  // Guide
  guide: {
    title: 'Speziell für ADHS-Gehirne gemacht, denen das Anfangen schwerfällt',
    subtitle:
      'Die meisten Produktivitäts-Apps setzen voraus, dass dein Gehirn bereit zum Planen ist. Doubly ist für den Moment gemacht, in dem du überfordert bist, feststeckst oder etwas vor dir herschiebst, basierend darauf, wie ADHS wirklich funktioniert.',
    proofPoints: [
      'Gemacht für ADHS-Hürden, nicht für generische Produktivität',
      'Hilft, den Startwiderstand zu verringern',
      'Gibt Struktur, ohne dich zu überfordern',
    ],
    mockup: {
      brainDump: 'Brain Dump',
      items: ['Zahnarzt anrufen', 'Lebensmittel kaufen', 'Chef antworten', 'Wäsche', 'warum bin ich so müde'],
      yourNextStep: 'Dein nächster Schritt',
      nextStepTask: 'Wäsche in die Maschine geben',
      nextStepMeta: '~5 Min. · wenig Energie',
      accountability: 'Verbindlichkeit',
      accountabilityText: 'Sarah meldet sich um 15 Uhr',
    },
  },

  // BrainDumpDemo
  brainDumpDemo: {
    title: 'Kipp das Chaos raus. Behalt die Aufgaben.',
    titleHighlight: 'Behalt die Aufgaben.',
    replayDemo: 'Demo erneut abspielen',
    subtitle:
      'Kopf voll? Tipp 20 Sekunden drauflos. Doubly zieht das Machbare raus und wirft den Ballast weg.',
    dumpText:
      'Ich klappe meinen Laptop auf, um produktiv zu sein, und innerhalb von fünf Sekunden macht mein Gehirn so: beantworte diese Nachricht, bestell Vitamine, putz das Waschbecken, finde das Ladekabel, iss etwas, und denk auch an die super wichtige Aufgabe, die du garantiert nicht vergessen wolltest. Die ich sofort vergessen habe.',
    brainDumpLabel: 'Brain Dump',
    brainDumpPlaceholder: 'Lass es einfach raus...',
    extractedTasksLabel: 'Herausgezogene Aufgaben',
    listening: 'Höre zu...',
    tasksFound: (count: number) => `${count} Aufgabe${count > 1 ? 'n' : ''} gefunden`,
    filterNote: 'Nicht umsetzbare Gedanken wurden herausgefiltert. Nur echte Aufgaben bleiben übrig.',
    tasks: [
      { text: '💊 Vitamine bestellen', phrase: 'bestell Vitamine' },
      { text: '🧽 Waschbecken putzen', phrase: 'putz das Waschbecken' },
      { text: '🔌 Ladekabel finden', phrase: 'finde das Ladekabel' },
      { text: '🍽️ Etwas essen', phrase: 'iss etwas' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: 'So kommst du wieder ins Tun',
    titleHighlight: 'ins Tun',
    subtitle: 'Vier einfache Schritte. Kein kompliziertes Setup. Keine Lernkurve.',
    stepLabel: 'SCHRITT',
    steps: [
      {
        number: '01',
        title: 'Leer deinen Kopf',
        body: 'Halt Gedanken, Aufgaben und mentalen Ballast schnell fest. Kein Sortieren nötig. Bring es einfach raus.',
      },
      {
        number: '02',
        title: 'Erhalte einen klaren nächsten Schritt',
        body: 'Doubly macht aus Überforderung etwas, mit dem du wirklich anfangen kannst. Nicht zehn Prioritäten. Eine.',
      },
      {
        number: '03',
        title: 'Bleib in Bewegung',
        body: 'Nutz Verbindlichkeit, Timer und Fortschritts-Tools, um dranzubleiben, auch wenn die Motivation nachlässt.',
      },
      {
        number: '04',
        title: 'Werde verbindlich',
        body: 'Teile mit Freunden im Doubly-Feed. Echte Verbindlichkeit entsteht, wenn jemand für dich mitfiebert.',
      },
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: 'Tipp eine Aufgabe. Sieh zu, wie sie sich aufteilt.',
    titleHighlight: 'aufteilt.',
    subtitle:
      'Große Aufgaben fühlen sich unmöglich an. Doubly zerlegt sie in 2–5-Minuten-Schritte, damit du einfach loslegen kannst.',
    customInputPlaceholder: 'Oder tipp deine eigene Aufgabe...',
    splitButton: 'Aufteilen',
    taskLabel: 'Aufgabe',
    aiThinking: 'Die KI zerlegt sie...',
    errorMessage: 'Die KI ist gerade nicht erreichbar. Probier oben eine Vorlage oder versuch es erneut.',
    tryAgain: 'Erneut versuchen',
    stepsDone: (done: number, total: number) => `${done}/${total} Schritte erledigt`,
    minTotal: (min: number) => `~${min} Min. gesamt`,
    urgencySuffix: 'Dringlichkeit',
    urgencyLabels: { low: 'Geringe Dringlichkeit', medium: 'Mittlere Dringlichkeit', high: 'Hohe Dringlichkeit' },
    allDoneMessage: 'Alles erledigt. War doch gar nicht so schwer, oder?',
    allDoneDescription:
      'Doubly macht das mit jeder Aufgabe, die du ihm gibst. Kein Anstarren einer riesigen To-do-Liste mehr.',
    allDoneCta: 'Jetzt wieder ins Tun kommen',
    presets: [
      { label: 'Küche putzen', icon: '🍳' },
      { label: 'Wäsche waschen', icon: '🧰' },
      { label: 'Abendessen kochen', icon: '🍲' },
      { label: 'Bad putzen', icon: '🚿' },
      { label: 'Schlafzimmer aufräumen', icon: '🛏️' },
      { label: 'Lebensmittel einkaufen', icon: '🛒' },
    ],
    presetResults: {
      'Küche putzen': {
        title: '🍳 Küche putzen',
        subtasks: [
          { text: 'Arbeitsflächen frei räumen und Sachen wegräumen', duration: '3 Minuten' },
          { text: 'Schmutziges Geschirr in die Spülmaschine räumen', duration: '5 Minuten' },
          { text: 'Arbeitsflächen und Herd abwischen', duration: '4 Minuten' },
          { text: 'Das Spülbecken schrubben', duration: '2 Minuten' },
          { text: 'Den Boden fegen', duration: '3 Minuten' },
          { text: 'Den Müll rausbringen', duration: '2 Minuten' },
        ],
        urgency: 'medium',
      },
      'Wäsche waschen': {
        title: '🧰 Wäsche waschen',
        subtasks: [
          { text: 'Schmutzige Wäsche im ganzen Haus einsammeln', duration: '5 Minuten' },
          { text: 'Nach Weiß, Buntem und Feinwäsche sortieren', duration: '3 Minuten' },
          { text: 'Erste Ladung in die Waschmaschine geben', duration: '2 Minuten' },
          { text: 'Trockene Wäsche der letzten Ladung aufhängen oder falten', duration: '10 Minuten' },
          { text: 'Gefaltete Wäsche in Schränke/Schubladen räumen', duration: '5 Minuten' },
        ],
        urgency: null,
      },
      'Abendessen kochen': {
        title: '🍲 Abendessen kochen',
        subtasks: [
          { text: 'Entscheiden, was es gibt, und Zutaten prüfen', duration: '3 Minuten' },
          { text: 'Gemüse waschen und vorbereiten', duration: '8 Minuten' },
          { text: 'Mit dem Hauptgericht beginnen', duration: '15 Minuten' },
          { text: 'Beilage oder Salat zubereiten', duration: '7 Minuten' },
          { text: 'Den Tisch decken', duration: '2 Minuten' },
          { text: 'Anrichten und servieren', duration: '2 Minuten' },
        ],
        urgency: 'low',
      },
      'Bad putzen': {
        title: '🚿 Bad putzen',
        subtasks: [
          { text: 'Reiniger auf Dusche, Waschbecken und Toilette sprühen', duration: '2 Minuten' },
          { text: 'Die Toilettenschüssel schrubben und den Deckel abwischen', duration: '3 Minuten' },
          { text: 'Waschbecken und Armatur reinigen', duration: '2 Minuten' },
          { text: 'Den Spiegel abwischen', duration: '1 Minute' },
          { text: 'Dusche/Badewanne schrubben', duration: '5 Minuten' },
          { text: 'Den Boden wischen', duration: '3 Minuten' },
          { text: 'Handtücher wechseln und Toilettenpapier nachfüllen', duration: '2 Minuten' },
        ],
        urgency: 'medium',
      },
      'Schlafzimmer aufräumen': {
        title: '🛏️ Schlafzimmer aufräumen',
        subtasks: [
          { text: 'Das Bett machen und Kissen aufschütteln', duration: '3 Minuten' },
          { text: 'Kleidung vom Boden und den Stühlen aufheben', duration: '4 Minuten' },
          { text: 'Schmutzige Wäsche in den Korb, saubere wegräumen', duration: '5 Minuten' },
          { text: 'Den Nachttisch frei räumen und ordnen', duration: '3 Minuten' },
          { text: 'Oberflächen abstauben', duration: '3 Minuten' },
          { text: 'Den Boden saugen oder fegen', duration: '4 Minuten' },
        ],
        urgency: 'low',
      },
      'Lebensmittel einkaufen': {
        title: '🛒 Lebensmittel einkaufen',
        subtasks: [
          { text: 'Kühlschrank und Vorratsschrank auf Bedarf prüfen', duration: '5 Minuten' },
          { text: 'Eine nach Gängen sortierte Liste schreiben', duration: '5 Minuten' },
          { text: 'Mehrwegtaschen einpacken', duration: '1 Minute' },
          { text: 'Einkaufen und Artikel abhaken', duration: '30 Minuten' },
          { text: 'Einkäufe auspacken und einräumen', duration: '10 Minuten' },
        ],
        urgency: null,
      },
    },
  },

  // TwoQuestions
  twoQuestions: {
    title: 'Kommt dir das bekannt vor?',
    titleHighlight: 'bekannt vor?',
    subtitle: 'Du bist nicht faul. Dein Gehirn braucht nur einen anderen Startpunkt.',
    withoutDoubly: 'Ohne Doubly',
    withDoubly: 'Mit Doubly',
    rows: [
      {
        without: 'Ich erstarre und weiß nicht, wo ich anfangen soll',
        with: 'Brain Dump → ein klarer nächster Schritt erscheint',
      },
      {
        without: 'Ich erledige stattdessen kleinere, zufällige Aufgaben',
        with: 'Doubly zeigt zuerst, was wirklich zählt',
      },
      {
        without: 'Ich fange 5 Dinge gleichzeitig an',
        with: 'Eine Aufgabe auf dem Bildschirm. Fertig machen, dann die nächste.',
      },
      {
        without: 'Ich zerdenke den perfekten Plan',
        with: 'Kipp alles raus, Doubly wählt den ersten Schritt',
      },
      {
        without: 'Ich schieb es auf, bis es dringend wird, dann Panik',
        with: 'Du fängst an, bevor die Panik zuschlägt',
      },
      {
        without: 'Ich arbeite allein und verliere schnell den Schwung',
        with: 'Body Doubling und Verbindlichkeitspartner halten dich am Ball',
      },
    ],
    questionTitle: 'Was brauchst du in diesem Moment am meisten?',
    options: [
      'Ein Brain Dump',
      'Ein winziger nächster Schritt',
      'Verbindlichkeit',
      'Ein Timer / Fokus-Schub',
      'Ein Neustart, wenn ich hinterherhänge',
    ],
    responseIntro: 'Genau da hilft Doubly.',
    responses: {
      'Ein Brain Dump': {
        title: 'Brain Dump → Sofortige Klarheit',
        description:
          'Tipp das Chaos raus. Doubly zieht das Machbare heraus und wirft den Ballast weg.',
      },
      'Ein winziger nächster Schritt': {
        title: 'Der nächste Schritt, immer bereit',
        description:
          'Doubly zerlegt große Aufgaben und gibt dir nur den nächsten kleinen Schritt. Keine Überforderung.',
      },
      Verbindlichkeit: {
        title: 'Verbindlichkeits-Check-ins',
        description:
          'Sanfte Erinnerungen und soziale Verbindlichkeit helfen dir, dranzubleiben, ohne schlechtes Gewissen.',
      },
      'Ein Timer / Fokus-Schub': {
        title: 'Fokus-Modus',
        description:
          'Eine Aufgabe auf dem Bildschirm, ein laufender Timer, keine Ablenkungen. Nur du und die Arbeit.',
      },
      'Ein Neustart, wenn ich hinterherhänge': {
        title: 'Neustart, kein schlechtes Gewissen',
        description:
          'Rausgekommen? Doubly stellt deinen Plan um, damit du weitermachen kannst, ohne in die Schamspirale zu geraten.',
      },
    },
    mockupNextStep: 'Dein nächster Schritt ist bereit',
    mockupTask: 'Fang mit einer kleinen Sache an',
    mockupCta: 'Doubly ausprobieren',
  },


  // HabitDemo
  habitDemo: {
    title: 'Bau Gewohnheiten auf, die wirklich bleiben',
    subtitle:
      'Keine Streaks, die reißen können. Kein schlechtes Gewissen. Tipp einfach, wenn du es tust. Doubly erfasst das Muster, damit du deinen Fortschritt siehst.',
    todayLabel: 'Heute',
    yourHabits: 'Deine Gewohnheiten',
    weeksLabel: '12 Wochen',
    lessLabel: 'Weniger',
    moreLabel: 'Mehr',
    currentStreak: 'Aktuelle Serie',
    bestStreak: 'Beste Serie',
    completion: 'Abschlussquote',
    allDoneMessage: 'Alle Gewohnheiten für heute erledigt!',
    allDoneDescription: 'Stell dir das jeden Tag vor. Doubly macht es leicht, dranzubleiben.',
    allDoneCta: 'Jetzt wieder ins Tun kommen',
    habits: [
      { id: 'walk', name: 'Spazieren gehen', icon: '🚶' },
      { id: 'read', name: '10 Seiten lesen', icon: '📖' },
      { id: 'journal', name: 'Tagebuch schreiben', icon: '✏️' },
      { id: 'tidy', name: '10 Minuten aufräumen', icon: '🧹' },
    ],
  },

  // Success
  success: {
    title: 'Tausch Doomscrolling gegen einen Feed, der dich in Bewegung bringt.',
    imageAlt: 'Doubly-Post mit einer erledigten Aufgabe samt Reaktionen und Kommentaren aus der Community',
    subtitle: 'Tausch Doomscrolling gegen einen Feed, der dich in Bewegung bringt.',
    outcomes: [
      'Aufgaben anfangen, ohne den inneren Kampf',
      'Durchziehen, was du dir vorgenommen hast',
      'Zurück auf Kurs kommen, ohne abzudriften',
      'Dir selbst vertrauen, Dinge wirklich zu tun',
    ],
  },

  // Stakes
  stakes: {
    title: 'Weil Feststecken einen Preis hat',
    body: 'Wenn Anfangen so schwer fällt, rutscht einem einiges durch. Fristen werden verpasst, Chancen ziehen vorbei, und du fühlst dich in einer Schleife aus Vermeidung und schlechtem Gewissen gefangen. Doubly hilft dir, diesen Kreislauf zu durchbrechen, bevor noch eine Woche verschwindet.',
  },

  // Testimonials
  testimonials: {
    title: 'Menschen brauchen nicht noch mehr Produktivitätsdruck',
    subtitle: 'Sie brauchen Hilfe beim Anfangen.',
    items: [
      // Real App Store reviews, quoted verbatim. Only add entries that are actual
      // published reviews AND whose reviewer gave permission (Apple's rule; ask by
      // replying to the review in App Store Connect). The grid auto-adapts up to 3.
      {
        quote:
          'This app is the only one that actually got me to do things. I have very strong ADHD, and it made me concentrate on my tasks one by one to always know what’s coming ahead and make order in my day. Love it so much! Hope to see awesome upgrades soon 🙏🏻',
        name: 'Liorcic',
        label: 'App-Store-Rezension',
      },
      {
        quote:
          'This has really helped me manage my workload, I haven’t seen anything like it. The walkthrough and set up is very intuitive, and the features make it worth it!',
        name: 'MinecraftrNinja',
        label: 'App-Store-Rezension',
      },
      // Slot 3 — next permitted review goes here.
    ],
  },

  // FAQ
  // ToolsSection
  toolsSection: {
    title: 'Kostenlose ADHS-Tools, die du sofort nutzen kannst',
    subtitle: 'Keine Anmeldung, keine Pop-ups. Öffne eines direkt im Browser, sobald du feststeckst.',
    hot: 'Beliebt',
    openTool: 'Tool öffnen',
    browseAll: 'Alle kostenlosen ADHS-Tools ansehen',
  },

  faq: {
    title: 'Fragen',
    items: [
      {
        q: 'Ist Doubly nur für Menschen mit ADHS-Diagnose?',
        a: 'Nein. Doubly ist für alle, die mit dem Anfangen, mit Überforderung oder mentalem Ballast kämpfen. Du brauchst keine Diagnose, nur ein Gehirn, das manchmal erstarrt, wenn zu viel zu tun ist.',
      },
      {
        q: 'Wie unterscheidet sich das von einer normalen To-do-App?',
        a: 'To-do-Apps helfen dir, Dinge aufzulisten. Doubly hilft dir, sie wirklich anzufangen. Wir konzentrieren uns darauf, den Startwiderstand zu verringern, also die Lücke zwischen Wissen und Tun, mit Brain Dumps, Klarheit für einen Schritt und Verbindlichkeit.',
      },
      {
        q: 'Hilft es speziell beim Anfangen von Aufgaben?',
        a: 'Ja. Das ist unser Kernfokus. Der Brain Dump räumt mentalen Ballast beiseite, die Nächster-Schritt-Klarheit wählt eine machbare Handlung, und die Verbindlichkeits-Tools helfen dir, dranzubleiben. Jede Funktion ist um diesen ersten Schritt herum gebaut.',
      },
      {
        q: 'Was ist an der Verbindlichkeit hier anders?',
        a: 'Es geht nicht ums Nörgeln oder um Streaks, die dir ein schlechtes Gewissen machen. Doubly setzt auf sanfte soziale Check-ins mit echten Menschen, denen dein Fortschritt wichtig ist, so hast du jemanden an deiner Seite, keinen Roboter, der dich beschämt.',
      },
      {
        q: 'Ersetzt es Gewohnheits-Tracker oder Planer?',
        a: 'Das kann es. Aber Doubly will kein Schweizer Taschenmesser sein. Es ist voll darauf ausgerichtet, dich vom Feststecken ins Loslegen zu bringen. Wenn du detaillierte Projektplanung brauchst, kombinier es mit deinen bestehenden Tools.',
      },
      {
        q: 'Ist es gut, wenn ich mich leicht überfordert fühle?',
        a: 'Gerade dann. Doubly zeigt dir nie alles auf einmal. Du siehst einen nächsten Schritt, keine Wand aus Aufgaben. Die gesamte Bedienung ist für Gehirne gemacht, die schnell überladen sind.',
      },
    ],
  },

  // FinalCTA
  finalCta: {
    title: 'Dein Gehirn braucht nicht noch mehr Druck',
    highlight: 'Es braucht einen Weg, anzufangen.',
    subtitle: 'Für ADHS-Köpfe, die genug haben vom Zerdenken, Aufschieben und Hinterherhängen.',
    cta: 'Im App Store laden',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    freeTools: 'Kostenlose ADHS-Tools',
    tools: 'Tools',
    learn: 'Wissen',
    privacy: 'Datenschutz',
    terms: 'AGB',
    support: 'Support',
    copyright: (year: number) => `© ${year} Doubly. Für ADHS-Gehirne gemacht.`,
  },

  // StickyBar
  stickyBar: {
    cta: 'Jetzt wieder ins Tun kommen',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | Die ADHS-App, die dir beim Anfangen hilft',
    description:
      'Kipp das Chaos per Brain Dump raus, erhalte einen klaren nächsten Schritt und nutz Verbindlichkeit, um wirklich dranzubleiben. Gemacht für ADHS-Köpfe, die Hilfe beim Anfangen brauchen, nicht nur beim Planen.',
    keywords: ['ADHS', 'Produktivität', 'Brain Dump', 'Aufgabenverwaltung', 'Verbindlichkeit', 'Fokus'],
    ogTitle: 'Doubly | Die ADHS-App, die dir beim Anfangen hilft',
    ogDescription:
      'Kipp das Chaos per Brain Dump raus, erhalte einen klaren nächsten Schritt und nutz Verbindlichkeit, um wirklich dranzubleiben.',
  },
  // Tool library card copy (title + description per tool).
  // Mirrors content/tools-i18n/${locale}/_index.json cards[] so the homepage grid and
  // the footer speak the visitor's language; kept in sync by scripts/check-tool-cards.mjs.
  toolCards: {
    'task-splitter': {
      title: 'Tool zum Aufteilen von Aufgaben',
      description:
        'Tipp eine Aufgabe ein, die du nicht anfangen kannst. Die KI zerlegt sie in kleine, machbare Schritte mit Zeitschätzung. Gemacht für ADHS-Gehirne.',
    },
    'brain-dump': {
      title: 'Brain-Dump-Tool',
      description:
        'Kipp alles aus dem Kopf, die KI zieht nur die machbaren Aufgaben heraus. Ohne Anmeldung, nichts wird gespeichert.',
    },
    'pick-one': {
      title: 'Pick One: eine Aufgabe wählen',
      description:
        'Füg deine chaotische To-do-Liste ein und bekomm eine einzige Aufgabe zum Anfangen. Die kleinste, die unangenehmste oder eine zufällige. Für den Moment, in dem sich zehn Aufgaben wie ein einziger Klotz anfühlen, den du nicht anpacken kannst.',
    },
    'eisenhower-matrix': {
      title: 'Eisenhower-Matrix (ADHS-Edition)',
      description:
        'Zieh Aufgaben in Quadranten wie „langweilig, aber wichtig“ statt in Lehrbuch-Kategorien. Die Matrix, die endlich zu einem ADHS-Gehirn passt. Wird lokal gespeichert.',
    },
    'pomodoro': {
      title: 'ADHS-Pomodoro-Timer',
      description:
        '25 Minuten arbeiten, 5 Minuten Pause - die Fokusmethode, die endlich zu einem ADHS-Gehirn passt. Kostenlos, ohne Anmeldung, funktioniert offline.',
    },
    'visual-timer': {
      title: 'Visueller Timer / Zeitblindheits-Uhr',
      description:
        'Ein schrumpfendes Tortenstück, damit du Zeit vergehen siehst, statt Ziffern zu lesen. Funktioniert auch als Zeitblindheits-Uhr für Erwachsene mit ADHS.',
    },
    'brown-noise': {
      title: 'Generator für Hintergrundgeräusche',
      description:
        'Kostenloser Geräuschgenerator direkt im Browser. Brown Noise plus Pink und White Noise. Gleichmäßiger Klangteppich, der ein unruhiges ADHS-Gehirn beruhigt. Mit Sleep-Timer, funktioniert offline.',
    },
    'body-doubling-room': {
      title: 'Body-Doubling-Raum',
      description:
        'Kostenloser Fokusraum für zwei. Link teilen, per Peer-to-Peer-Video nebeneinander arbeiten, gemeinsamen Timer laufen lassen. Ohne Anmeldung, ohne Installation.',
    },
    'hyperfocus-timer': {
      title: 'Hyperfokus-Timer mit Check-ins',
      description:
        'Wiederkehrende gesprochene Check-ins alle X Minuten, dazu ein optionaler harter Stopp, damit eine ADHS-Hyperfokus-Session nicht deinen ganzen Nachmittag auffrisst.',
    },
  },

  toolWidgets: {
    taskSplitter: {
      inputLabel: 'Welche Aufgabe kannst du nicht anfangen?',
      inputPlaceholder: 'z. B. Reisekostenabrechnung einreichen',
      submit: 'Aufteilen',
      submitting: 'Wird aufgeteilt…',
      privacyNote: 'Privat. Nichts wird auf unserem Server gespeichert.',
      charactersLeft: (count: number) => `Noch ${count} Zeichen`,
      presetsIntro: 'Oder probier eines davon:',
      presets: {
        cleanKitchen: 'Küche putzen',
        doLaundry: 'Wäsche waschen',
        replyInbox: 'E-Mails beantworten',
        planWeekendTrip: 'Wochenendtrip planen',
        fileTaxes: 'Steuererklärung machen',
        cleanBathroom: 'Bad putzen',
      },
      loading: 'Wird in Schritte zerlegt…',
      errorRateLimit: 'Du bist schnell unterwegs. Warte kurz und versuch es erneut.',
      errorGeneric: 'Das konnte gerade nicht aufgeteilt werden. Versuch es in ein paar Sekunden erneut.',
      tryAgain: 'Erneut versuchen',
      taskLabel: 'Aufgabe',
      urgencyLabels: {
        low: 'Geringe Dringlichkeit',
        medium: 'Mittlere Dringlichkeit',
        high: 'Hohe Dringlichkeit',
      },
      stepsDone: (done: number, total: number) => `${done}/${total} Schritte erledigt`,
      minTotal: (min: number) => `~${min} Min. gesamt`,
      allDoneMessage: 'Erledigt. War doch gar nicht so schlimm, oder?',
      emptyState:
        'Dafür ließen sich keine klaren Teilschritte finden. Formulier es als Handlung, zum Beispiel „Den Projektplan schreiben“ oder „Die Garage aufräumen“.',
    },
    brainDump: {
      label: 'Kipp alles raus, was in deinem Kopf ist. Es muss nicht sortiert sein.',
      placeholder:
        'Ich vergesse ständig, beim Zahnarzt anzurufen, und die Küche ist ein Chaos.\nDas Projekt auf der Arbeit überfordert mich. Ich muss noch Lebensmittel\nfür heute Abend kaufen und auf Sarahs E-Mail von letzter Woche antworten.',
      privacy: 'Privat. Nichts wird auf unserem Server gespeichert.',
      charactersLeft: (remaining: number) => `Noch ${remaining} Zeichen.`,
      clear: 'Leeren',
      submit: 'Aufgaben herausziehen',
      submitting: 'Aufgaben werden herausgezogen…',
      loading: 'Wir lesen deinen Dump und ziehen das Machbare heraus…',
      errorRateLimited: 'Du bist schnell unterwegs. Warte kurz und versuch es erneut.',
      errorGeneric:
        'Die Aufgaben konnten gerade nicht herausgezogen werden. Versuch es in ein paar Sekunden erneut.',
      tryAgain: 'Erneut versuchen',
      empty:
        'Wir haben darin nichts gefunden, was nach einer konkreten Aufgabe aussieht. Das kann ein gutes Zeichen sein. Wenn du dir einfach Luft gemacht hast, zählt das auch. Wolltest du To-dos auflisten, dann werd etwas konkreter („Sarah eine E-Mail schreiben“ statt „Sarah-Kram“).',
      resultsTitle: 'Machbare Aufgaben',
      doneCount: (done: number, total: number) => `${done}/${total} erledigt`,
      footer: 'Wähl eine. Nur eine. Mach sie jetzt, dann komm für die nächste zurück.',
    },
    pickOne: {
      inputLabel: 'Füg deine Liste ein. Eine pro Zeile oder chaotisch mit Kommas. Egal.',
      inputPlaceholder:
        'Mama antworten\nZahnarzttermin buchen\nSpesen abrechnen\nPräsentation fertig machen\nPflanzen gießen',
      itemsDetected: (count: number) => `${count} ${count === 1 ? 'Eintrag' : 'Einträge'} erkannt`,
      itemsDetectedWithLeft: (count: number, left: number) =>
        `${count} ${count === 1 ? 'Eintrag' : 'Einträge'} erkannt, ${left} übrig`,
      clearEverything: 'Alles leeren',
      modeLegend: 'Wie sollen wir wählen?',
      modes: {
        smallest: {
          label: 'Kleinste',
          reason: 'Der kürzeste Eintrag auf der Liste. Klein anfangen, Schwung aufbauen.',
        },
        scariest: {
          label: 'Unangenehmste',
          reason: 'Die, die du am liebsten übersiehst. Zuerst erledigt, ist der Tag frei.',
          // Wird gezeigt, wenn kein Eintrag ein Dread-Wort trifft. Nach Länge zu
          // sortieren wäre gelogen, also sagen wir, was wirklich passiert ist.
          noSignalReason:
            'Nichts hier klingt wirklich unangenehm, das ist doch auch mal eine gute Nachricht. Wir haben zufällig gewählt.',
        },
        random: {
          label: 'Einfach eine',
          reason: 'Kein Abwägen. Die Liste hat entschieden. Fang einfach an.',
        },
      },
      // Dread-Wörter für den Modus „Unangenehmste“. Werden als Substring gegen den
      // kleingeschriebenen Eintrag geprüft, deshalb schlagen Stämme ganze Wörter:
      // „steuer“ trifft auch „Steuererklärung“ und „Steuern“, „zahnarzt“ trifft
      // „Zahnarzttermin“. Alles klein, sonst kann es nie treffen.
      scaryWords: [
        'steuer',
        'finanzamt',
        'elster',
        'rechnung',
        'mahnung',
        'bußgeld',
        'schulden',
        'kredit',
        'miete',
        'vermieter',
        'versicherung',
        'krankenkasse',
        'rundfunkbeitrag',
        'behörde',
        'bürgeramt',
        'antrag',
        'formular',
        'papierkram',
        'kündig',
        'vertrag',
        'anwalt',
        'zahnarzt',
        'hausarzt',
        'anruf',
        'rückruf',
        'antworten',
        'absag',
        'entschuldig',
        'chef',
        'konflikt',
        'streit',
        'beschwerde',
        'frist',
        'deadline',
        'überfällig',
        'vergessen',
        'aufgeschoben',
        'hergeschoben',
        'längst',
        'bewerbung',
        'prüfung',
      ],
      pickCta: 'Wähl eine für mich',
      pickAnotherCta: 'Eine andere wählen',
      emptyHint: 'Füg mindestens einen Eintrag hinzu und tipp dann auf Wählen.',
      readyHint: 'Bereit. Tipp auf „Wähl eine für mich“, wenn du dich nicht entscheiden kannst.',
      allDoneTitle: 'Liste erledigt.',
      allDoneBody:
        'Jeder Eintrag ist erledigt oder übersprungen. Du kannst die Liste leeren oder sie zurücksetzen, um übersprungene Einträge zurückzuholen.',
      bringSkippedBack: 'Übersprungene zurückholen',
      startFreshList: 'Neue Liste starten',
      pickedEyebrow: 'Fang hiermit an',
      didIt: 'Erledigt',
      notThisOne: 'Nicht diese',
      pickAgain: 'Nochmal wählen',
      progress: (done: number, skipped: number, left: number) =>
        `${done} erledigt, ${skipped} übersprungen, ${left} übrig`,
    },
    eisenhower: {
      inputLabel: 'Aufgabe hinzufügen',
      inputPlaceholder:
        'Aufgabe eintippen und Enter drücken (oder mehrere durch Zeilenumbrüche getrennt einfügen)',
      addButton: 'Hinzufügen',
      totals: (total: number, unsorted: number) =>
        `${total} ${total === 1 ? 'Aufgabe' : 'Aufgaben'} gesamt, ${unsorted} unsortiert`,
      clearAll: 'Alles leeren',
      unsortedHeading: (count: number) => `Unsortiert (${count})`,
      unsortedListLabel: 'Unsortierte Aufgaben',
      removeTask: (text: string) => `${text} entfernen`,
      placeHint: 'Tipp jetzt auf einen Quadranten, um sie abzulegen.',
      placeHintDesktop: 'Oder per Drag-and-drop am Desktop.',
      quadrantRegionLabel: (label: string) => `Quadrant ${label}`,
      quadrantCountLabel: (count: number, label: string) => `${count} Aufgaben in ${label}`,
      dropHere: 'Hier ablegen',
      sendBackToUnsorted: 'Zurück zu Unsortiert',
      moveBackToUnsorted: (text: string) => `${text} zurück zu Unsortiert verschieben`,
      empty: 'Leer',
      emptyState:
        'Füg oben eine Aufgabe hinzu, um loszulegen. Alles wird in deinem Browser gespeichert, nichts auf unserem Server.',
      hintLabel: 'Doubly-Tipp:',
      hintBody:
        'Der Stapel „langweilig, aber wichtig“ ist der, den die meisten überspringen und am meisten bereuen. Wenn du heute nur eine Sache machst, nimm eine von dort.',
      quadrants: {
        fire: {
          label: 'Brennt',
          sub: 'Heute erledigen, nicht morgen.',
          textbook: 'Wichtig + dringend',
        },
        boring: {
          label: 'Langweilig, aber wichtig',
          sub: 'Die echten Erfolge. Plan sie ein, überspring sie nicht.',
          textbook: 'Wichtig + nicht dringend',
        },
        noisy: {
          label: 'Laut, aber verzichtbar',
          sub: 'Laut, aber nicht dein Problem. Abgeben, verschieben, ignorieren.',
          textbook: 'Dringend + nicht wichtig',
        },
        drop: {
          label: 'Weglassen',
          sub: 'Das ist erlaubt. Die Liste muss nicht abgearbeitet werden.',
          textbook: 'Nicht wichtig + nicht dringend',
        },
      },
    },
    pomodoro: {
      timerLabel: 'Pomodoro-Timer',
      modeTablistLabel: 'Timer-Modus',
      modes: {
        work: 'Fokus',
        'short-break': 'Kurze Pause',
        'long-break': 'Lange Pause',
      },
      dialLabel: (mode: string, time: string) => `Timer ${mode}. Noch ${time}.`,
      sessionsToday: (count: number) => `Heute abgeschlossene Sessions: ${count}`,
      soundToggle: 'Ton am Ende der Session',
      customizeDurations: 'Dauer anpassen',
      hideSettings: 'Einstellungen ausblenden',
      focusMinutes: 'Fokus (Min.)',
      shortBreakMinutes: 'Kurze Pause (Min.)',
      longBreakMinutes: 'Lange Pause (Min.)',
      documentTitle: (time: string, mode: string) => `${time} | ${mode} | Doubly`,
    },
    visualTimer: {
      ariaLabel: 'Visueller Countdown-Timer',
      dialAriaLabel: (remaining: string) => `Visuelle Timer-Scheibe. Noch ${remaining}.`,
      seconds: (s: number) => `${s} Sekunden`,
      minutes: (m: number) => `${m} ${m === 1 ? 'Minute' : 'Minuten'}`,
      minutesAndSeconds: (m: number, s: number) =>
        `${m} ${m === 1 ? 'Minute' : 'Minuten'} ${s} Sekunden`,
      documentTitle: (time: string) => `${time} | Doubly`,
      countingDown: (minutes: number) => `Countdown von ${minutes} Min.`,
      setFor: (minutes: number) => `Auf ${minutes} Min. gestellt`,
      paused: 'Pausiert',
      timeIsUp: 'Zeit ist um',
      presetsLabel: 'Dauer-Vorgaben',
      presetMinutes: (minutes: number) => `${minutes} Min.`,
      custom: 'Eigene',
      minutesLabel: 'Minuten',
      set: 'Setzen',
      soundWhenDone: 'Ton, wenn die Zeit um ist',
    },
    brownNoise: {
      play: (sound: string) => `${sound} abspielen`,
      pause: (sound: string) => `${sound} pausieren`,
      documentTitle: (sound: string) => `▶ ${sound} · Doubly`,
      chooseSound: 'Wähl ein Hintergrundgeräusch',
      soundGroupLabel: 'Hintergrundgeräusch',
      volume: 'Lautstärke',
      volumePercent: (percent: number) => `${percent} %`,
      sleepTimer: 'Sleep-Timer',
      sleepOff: 'Aus',
      sleepMinutes: (minutes: number) => `${minutes} Min.`,
      privacyNote: 'Läuft in deinem Browser. Nichts wird aufgezeichnet, nichts hochgeladen.',
      sounds: {
        brown: {
          name: 'Braun',
          description: 'Tief und grollend. Wie ein ferner Wasserfall. Das aus TikTok.',
        },
        pink: {
          name: 'Rosa',
          description: 'Weicher als Weiß, weniger bassig als Braun. Ausgewogen.',
        },
        white: {
          name: 'Weiß',
          description: 'Das Rauschen eines alten Fernsehers. Hell und gleichmäßig.',
        },
      },
    },
    hyperfocus: {
      ariaLabel: 'Hyperfokus-Unterbrechungs-Timer',

      // Dauern. Jede Formulierung steht hier, damit jede Sprache eigene
      // Pluralformen, Einheiten und Wortstellung wählen kann.
      minutesShort: (minutes: number) => `${minutes} Min.`,
      hoursShort: (hours: number) => `${hours} Std.`,
      hoursMinutesShort: (hours: number, minutes: number) => `${hours} Std. ${minutes} Min.`,
      durationLong: (hours: number, minutes: number) => {
        if (hours === 0 && minutes === 0) return 'weniger als eine Minute';
        const parts: string[] = [];
        if (hours > 0) parts.push(`${hours} ${hours === 1 ? 'Stunde' : 'Stunden'}`);
        if (minutes > 0) parts.push(`${minutes} ${minutes === 1 ? 'Minute' : 'Minuten'}`);
        return parts.join(' und ');
      },

      // Session-Leiste. Text in ** wird hervorgehoben dargestellt.
      stripNoCap: (interval: string) => `Check-in alle ${interval}, kein harter Stopp`,
      stripWithCap: (interval: string, cap: string) =>
        `Check-in alle ${interval}, harter Stopp bei ${cap}`,
      summaryNoCap: (interval: string) => `Check-in alle **${interval}**, ohne harten Stopp.`,
      summaryWithCap: (interval: string, cap: string) =>
        `Check-in alle **${interval}**, mit hartem Stopp bei **${cap}**.`,

      // Setup
      intervalHeading: 'Check-in alle',
      custom: 'Eigene',
      minutes: 'Minuten',
      set: 'Setzen',
      jitterNote:
        'Die Check-ins schwanken um etwa zehn Prozent, damit dein Gehirn sie nicht schon vorher abhaken kann.',
      moreOptions: 'Mehr Optionen',
      hideOptions: 'Optionen ausblenden',
      taskLabel: 'Woran arbeitest du gerade? (optional)',
      taskPlaceholder: 'z. B. Steuerunterlagen, Design-Review, das Skript',
      taskHint:
        'Wird in den gesprochenen Check-ins genannt, damit du hörst, wofür du dich hingesetzt hast.',
      hardStopHeading: 'Harter Stopp nach',
      hardStopHint:
        'Beim Limit kommt ein lauterer Alarm, damit dir keine sechsstündige Spirale durchrutscht.',
      capOff: 'Aus',
      capHours: (hours: number) => `${hours} Std.`,
      noHardStop: 'kein harter Stopp',
      alertsHeading: 'Alarme',
      chime: 'Ton',
      voice: 'Stimme',
      notify: 'Mitteilung',
      alertsHint:
        'Der Ton wird lauter, wenn ein Check-in ignoriert wird. Die Stimme sagt Uhrzeit und vergangene Zeit an. Die Mitteilung erscheint als Browser-Benachrichtigung, wenn der Tab im Hintergrund ist.',
      notificationsBlocked:
        'Benachrichtigungen sind in diesem Browser blockiert. Aktivier sie in den Website-Einstellungen, um das zu nutzen.',
      notificationsUnsupported: 'Dein Browser unterstützt keine Web-Benachrichtigungen.',
      startSession: 'Session starten',

      // Laufende Session
      statElapsed: 'Vergangen',
      statNextCheckIn: 'Nächster Check-in',
      statCap: 'Limit',
      statusNow: 'Jetzt',
      statusPaused: 'Pausiert',
      statusCapHit: 'Limit erreicht',
      statusOff: 'Aus',
      workingOn: (task: string) => `Du arbeitest an **${task}**`,
      checkInHeading: 'Kurzer Check-in',
      checkInBody: (clock: string, elapsed: string) =>
        `Es ist ${clock} und du bist seit ${elapsed} dran. Bist du noch bei der Aufgabe, mit der du angefangen hast, oder ist es Zeit aufzutauchen?`,
      stillGoing: 'Weitermachen',
      takeABreak: 'Pause machen',
      stopSession: 'Session beenden',
      capHeading: 'Session-Limit erreicht',
      capBody: (minutes: number) =>
        `Du hast einen harten Stopp bei ${minutes} Minuten gesetzt. Steh auf, trink Wasser, iss etwas. Die Arbeit ist danach noch da.`,
      pause: 'Pause',
      resume: 'Weiter',
      endSession: 'Session beenden',
      checkInLog: 'Check-in-Protokoll',
      logContinue: 'weitergemacht',
      logBreak: 'Pause gemacht',
      logStop: 'aufgehört',

      // Tab-Titel im Browser, während ein Check-in im Hintergrund-Tab wartet.
      tabAlert: '⚠ Check-in | Doubly',

      // Wird vorgelesen (SpeechSynthesis) und als Systembenachrichtigung gesendet.
      checkInSpeech: (clock: string, elapsed: string, task: string) =>
        task
          ? `Check-in. Es ist ${clock}. Du arbeitest seit ${elapsed} an ${task}.`
          : `Check-in. Es ist ${clock}. Du arbeitest seit ${elapsed}.`,
      capSpeech: (clock: string, elapsed: string) =>
        `Session-Limit erreicht. Es ist ${clock}. Du bist seit ${elapsed} dran. Zeit aufzuhören.`,
      notificationCheckInTitle: 'Hyperfokus-Check-in',
      notificationCheckInBody: (clock: string, elapsed: string) =>
        `Es ist ${clock}. Du bist seit ${elapsed} dran.`,
      notificationCapTitle: 'Hyperfokus-Limit erreicht',
      notificationCapBody: (clock: string, elapsed: string) =>
        `Es ist ${clock}. Du bist seit ${elapsed} dran. Zeit aufzuhören.`,
    },
    shared: {
      start: 'Starten',
      pause: 'Pause',
      resume: 'Weiter',
      done: 'Fertig',
      reset: 'Zurücksetzen',
      skip: 'Überspringen',
      skipAria: 'Zur nächsten Session springen',
      startSession: 'Fokus-Session starten',
      creatingRoom: 'Raum wird erstellt...',
    },
    chrome: {
      tryInApp: 'Probier es in der App aus',
      appStoreAria: (label: string) => `${label} im App Store`,
      breadcrumbAria: 'Navigationspfad',
    },
  },

  // Der Live-Body-Doubling-Raum unter /r/[id].
  //
  // Die Sprache wird hier NICHT über die URL gewählt, sondern pro Person aus
  // ihrer eigenen Accept-Language. Derselbe Raum kann für die eine Person auf
  // Deutsch und für die andere auf Hebräisch laufen. Nichts hier darf annehmen,
  // dass beide dieselbe Sprache lesen.
  room: {
    join: {
      titleFirst: 'Fokus-Session starten',
      titleJoin: 'Der Fokus-Session beitreten',
      subtitleFirst:
        'Wähl deinen Namen und die Länge. Den Einladungslink teilst du, sobald du drin bist.',
      subtitleJoin: 'Wähl deinen Namen und komm dazu. Den Timer hat der Host schon gestellt.',
      nameLabel: 'Dein Name',
      // Ein kurzer, alltäglicher Vorname. Platzhalter, keine Marke.
      namePlaceholder: 'Lena',
      avatarLabel: 'Avatar wählen',
      avatarChooseAria: (emoji: string) => `Avatar ${emoji} wählen`,
      durationLabel: 'Länge der Session',
      minutes: (n: number) => `${n} Min.`,
      permissionNote:
        'Gleich fragt der Browser nach Kamera und Mikrofon. Beides ist freiwillig. Ohne kommst du als Geister-Kachel rein, und die andere Person sieht trotzdem, dass du da bist.',
      createCta: 'Raum erstellen',
      joinCta: 'Raum betreten',
    },
    header: {
      eyebrow: 'Body-Doubling-Raum',
      withPeer: (name: string) => `Du und ${name}`,
      waiting: 'Warten auf dein Gegenüber',
      copyInvite: 'Einladungslink kopieren',
      linkCopied: 'Link kopiert',
    },
    full: {
      title: 'Raum ist voll',
      body: 'In einen Body-Doubling-Raum passen zwei Leute. Die gute Nachricht: Ein neuer ist einen Klick entfernt.',
      cta: 'Neuen Raum starten',
    },
    phases: {
      waiting: {
        eyebrow: 'Schritt 0 von 3',
        title: 'Teil deinen Link',
        body: 'Schick die Adresse dieser Seite an eine Person. Sobald sie da ist, geht es los.',
      },
      intro: {
        eyebrow: 'Schritt 1 von 3 · Intro',
        title: 'Kurz winken und sagen, was du gleich machst',
        titleWithPeer: (name: string) => `Winke ${name} zu`,
        body: 'Nimm dir 60 Sekunden. Kamera an, ein Satz pro Person. Das Ziel laut zu sagen, ist der ganze Trick.',
        cta: 'Fokus starten',
      },
      focus: {
        eyebrow: 'Schritt 2 von 3 · Fokus',
        title: 'Kopf runter. Ihr arbeitet zusammen, in Ruhe.',
        body: 'Mikro an oder aus, beides okay. Es geht darum, dass die andere Person da ist.',
        cta: 'Fokus früher beenden',
      },
      wrapUp: {
        eyebrow: 'Schritt 3 von 3 · Abschluss',
        title: 'Erzählt euch einen Erfolg und eine Stolperstelle',
        body: 'Kurz laut zu reflektieren, verankert das Geschaffte und macht den nächsten Start leichter.',
        cta: 'Session beenden',
      },
      done: {
        eyebrow: 'Session geschafft',
        title: 'Stark. Du warst da.',
        body: 'Das zählt. Bleib für eine weitere Runde oder mach den Tab zu und tu dir etwas Gutes.',
        runAnother: 'Noch eine Runde',
      },
    },
    tiles: {
      you: (name: string) => `${name} (du)`,
      peerFallbackName: 'Warten',
      waitingForPartner: 'Warten auf dein Gegenüber...',
      micMuted: 'Mikrofon stumm',
      goalPlaceholderIntro: 'Woran ich gleich arbeite...',
      goalPlaceholderFocus: 'Woran ich arbeite',
      reflectionPlaceholder: 'Ein Erfolg oder ein Haken...',
      peerNoGoal: 'Noch kein Ziel',
      peerNoReflection: 'Warten auf den Abschluss',
      empty: '—',
    },
    controls: {
      muteMic: 'Mikro stumm',
      unmuteMic: 'Mikro an',
      micUnavailable: 'Mikro nicht verfügbar',
      muteTitle: 'Stumm',
      unmuteTitle: 'Ton an',
      micBlockedTitle: 'Mikro blockiert oder nicht verfügbar',
      camOff: 'Kamera aus',
      camOn: 'Kamera an',
      camUnavailable: 'Kamera nicht verfügbar',
      stopVideoTitle: 'Video stoppen',
      startVideoTitle: 'Video starten',
      camBlockedTitle: 'Kamera blockiert oder nicht verfügbar',
      startTimer: 'Timer starten',
      pauseTimer: 'Timer pausieren',
      leave: 'Verlassen',
      retry: 'Erneut versuchen',
    },
    reactions: {
      groupAria: 'Reaktion senden',
      sendAria: (emoji: string) => `Reaktion ${emoji} senden`,
    },
    status: {
      peerLeft: 'Dein Gegenüber hat den Raum verlassen.',
      shareToUnlock:
        'Teil den Einladungslink, damit jemand dazukommt. Sobald die Person da ist, geht es los.',
      upNext: (minutes: number) => `Als Nächstes: ${minutes} Min. Fokusblock`,
      planOnArrival: (minutes: number) =>
        `Plan: ${minutes} Min. Fokusblock, sobald dein Gegenüber da ist`,
      wrapUpBreath: 'Durchatmen. Der Timer ist pausiert.',
      timerAria: (remaining: string) => `Timer, ${remaining} übrig`,
    },
    errors: {
      p2pBlocked:
        'Keine Verbindung. Dein Netzwerk blockiert vielleicht Peer-to-Peer-Verbindungen. Probier ein anderes Netzwerk.',
      mediaUnavailable: 'Kamera und Mikrofon nicht verfügbar.',
    },
  },

};

export default de;
