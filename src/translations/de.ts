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
};

export default de;
