const it = {
  // Shared
  common: {
    tryInDoubly: 'Provalo in Doubly',
    changeLanguage: 'Cambia lingua',
    socialProof: (count: number) => `Unisciti a ${count.toLocaleString('it-IT')} persone con ADHD`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    tools: 'Strumenti',
    howItWorks: 'Come funziona',
    features: 'Funzionalità',
    testimonials: 'Recensioni',
    faq: 'FAQ',
    cta: 'Scarica Doubly',
    toggleMenu: 'Apri/chiudi menu',
  },

  // Hero
  hero: {
    badge: 'Fatto per menti ADHD',
    titlePrefix: 'Quando il tuo cervello ha ',
    titleHighlight: '47 schede aperte',
    subtitle: 'Trasforma il caos in un unico passo chiaro in meno di un minuto.',
    cta: 'Scarica sull’App Store',
    secondaryCta: 'Guardalo dividere un’attività ↓',
    android: {
      prompt: 'Usi Android?',
      placeholder: 'tu@email.com',
      submit: 'Avvisami',
      success: 'Sei in lista. Ti scriveremo quando Doubly arriverà su Android.',
      invalid: 'Inserisci un’email valida.',
      error: 'Qualcosa è andato storto. Riprova.',
    },
    floatingCards: {
      brainDump: 'Svuota-cervello',
      habits: 'Abitudini',
      accountability: 'Responsabilità',
    },
    phone: {
      screenAlt: 'L’app Doubly che mostra le tue abitudini con serie giornaliere e griglie di progressi',
    },
  },

  // Problem
  problem: {
    title: 'L’ADHD non è solo essere disorganizzati',
    titleHighlight: 'disorganizzati',
    subtitle:
      'È una battaglia quotidiana con un cervello che non collabora con le tue stesse intenzioni.',
    cards: [
      {
        type: 'External',
        title: 'Troppe attività. Troppi pensieri.',
        body: 'Nessun punto chiaro da cui partire.',
      },
      {
        type: 'Internal',
        title: 'Sai cosa fare, ma non riesci comunque a iniziare.',
        body: 'Non è pigrizia. È resistenza all’avvio.',
      },
      {
        type: 'Philosophical',
        title: 'Non dovrebbe essere così difficile iniziare.',
        body: 'Il tuo cervello funziona in modo diverso. Anche i tuoi strumenti dovrebbero.',
      },
      {
        type: 'Stakes',
        title: 'E ti sta costando più del tempo.',
        body: 'Le cose si accumulano. Rimani indietro. Inizi a perdere fiducia in te stesso.',
      },
    ],
  },

  // VisualProblem
  visualProblem: {
    cards: [
      { image: '/problem-1.jpg', alt: 'Troppe attività. Troppi pensieri.' },
      { image: '/problem-2.jpg', alt: 'Sai cosa fare, ma non riesci comunque a iniziare.' },
      { image: '/problem-4.jpg', alt: 'Non dovrebbe essere così difficile iniziare le cose normali.' },
      { image: '/problem-3.jpg', alt: 'E ti sta costando più del tempo.' },
    ],
  },

  // Guide
  guide: {
    title: 'Creato apposta per le menti ADHD che faticano a iniziare',
    subtitle:
      'La maggior parte delle app di produttività dà per scontato che il tuo cervello sia pronto a pianificare. Doubly è pensata per il momento in cui sei sopraffatto, bloccato o in fuga, in base a come funziona davvero l’ADHD.',
    proofPoints: [
      'Fatto per l’attrito dell’ADHD, non per la produttività generica',
      'Aiuta a ridurre la resistenza all’avvio',
      'Dà struttura senza sopraffarti',
    ],
    mockup: {
      brainDump: 'Svuota-cervello',
      items: ['chiamare il dentista', 'fare la spesa', 'rispondere al capo', 'bucato', 'perché sono così stanco'],
      yourNextStep: 'Il tuo prossimo passo',
      nextStepTask: 'Mettere il bucato in lavatrice',
      nextStepMeta: '~5 min · poca energia',
      accountability: 'Responsabilità',
      accountabilityText: 'Sarah ti controlla alle 15',
    },
  },

  // BrainDumpDemo
  brainDumpDemo: {
    title: 'Svuota il caos. Tieni le attività.',
    titleHighlight: 'Tieni le attività.',
    replayDemo: 'Rivedi la demo',
    subtitle:
      'Testa piena? Scrivi per 20 secondi. Doubly tira fuori le cose concrete e butta via il rumore.',
    dumpText:
      'Apro il portatile per essere produttivo e nel giro di cinque secondi il mio cervello fa: rispondi a quel messaggio, ordina le vitamine, pulisci il lavandino, trova il caricabatterie, mangia qualcosa, e ricordati anche quel compito super importante che di sicuro non avresti dimenticato. Che ovviamente ho dimenticato subito.',
    brainDumpLabel: 'Svuota-cervello',
    brainDumpPlaceholder: 'Lascia andare tutto...',
    extractedTasksLabel: 'Attività estratte',
    listening: 'In ascolto...',
    tasksFound: (count: number) => `${count} attività trovat${count > 1 ? 'e' : 'a'}`,
    filterNote: 'Pensieri non concreti filtrati. Tenute solo le attività reali.',
    tasks: [
      { text: '💊 Ordina le vitamine', phrase: 'ordina le vitamine' },
      { text: '🧽 Pulisci il lavandino', phrase: 'pulisci il lavandino' },
      { text: '🔌 Trova il caricabatterie', phrase: 'trova il caricabatterie' },
      { text: '🍽️ Mangia qualcosa', phrase: 'mangia qualcosa' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: 'Ecco come ti sblocchi',
    titleHighlight: 'ti sblocchi',
    subtitle: 'Quattro semplici passi. Nessuna configurazione complessa. Nessuna curva di apprendimento.',
    stepLabel: 'PASSO',
    steps: [
      {
        number: '01',
        title: 'Svuota la mente',
        body: 'Cattura pensieri, attività e disordine mentale in fretta. Nessuna organizzazione richiesta. Basta tirarli fuori.',
      },
      {
        number: '02',
        title: 'Ottieni un unico passo chiaro',
        body: 'Doubly trasforma il sovraccarico in qualcosa che puoi davvero iniziare. Non dieci priorità. Una.',
      },
      {
        number: '03',
        title: 'Resta in movimento',
        body: 'Usa responsabilità, timer e strumenti di progresso per andare avanti, anche quando la motivazione svanisce.',
      },
      {
        number: '04',
        title: 'Renditi responsabile',
        body: 'Condividi con gli amici nel feed di Doubly. La vera responsabilità nasce quando qualcuno fa il tifo per te.',
      },
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: 'Scrivi un’attività. Guardala dividersi.',
    titleHighlight: 'dividersi.',
    subtitle:
      'Le grandi attività sembrano impossibili. Doubly le divide in passi da 2–5 minuti così puoi semplicemente iniziare.',
    customInputPlaceholder: 'Oppure scrivi la tua attività...',
    splitButton: 'Dividila',
    taskLabel: 'Attività',
    aiThinking: 'L’IA la sta scomponendo...',
    errorMessage: 'Non riesco a raggiungere l’IA in questo momento. Prova un preset qui sopra o riprova.',
    tryAgain: 'Riprova',
    stepsDone: (done: number, total: number) => `${done}/${total} passaggi completati`,
    minTotal: (min: number) => `~${min} min in totale`,
    urgencySuffix: 'urgenza',
    urgencyLabels: { low: 'Urgenza bassa', medium: 'Urgenza media', high: 'Urgenza alta' },
    allDoneMessage: 'Fatto. Non è stato così difficile, vero?',
    allDoneDescription:
      'Doubly fa questo per ogni attività che gli lanci. Basta fissare una lista infinita di cose da fare.',
    allDoneCta: 'Sbloccati ora',
    presets: [
      { label: 'Pulire la cucina', icon: '🍳' },
      { label: 'Fare il bucato', icon: '🧰' },
      { label: 'Preparare la cena', icon: '🍲' },
      { label: 'Pulire il bagno', icon: '🚿' },
      { label: 'Sistemare la camera', icon: '🛏️' },
      { label: 'Fare la spesa', icon: '🛒' },
    ],
    presetResults: {
      'Pulire la cucina': {
        title: '🍳 Pulire la cucina',
        subtasks: [
          { text: 'Libera i piani e metti via le cose', duration: '3 minuti' },
          { text: 'Metti i piatti sporchi in lavastoviglie', duration: '5 minuti' },
          { text: 'Pulisci i piani e i fornelli', duration: '4 minuti' },
          { text: 'Strofina il lavandino', duration: '2 minuti' },
          { text: 'Spazza il pavimento', duration: '3 minuti' },
          { text: 'Porta fuori la spazzatura', duration: '2 minuti' },
        ],
        urgency: 'medium',
      },
      'Fare il bucato': {
        title: '🧰 Fare il bucato',
        subtasks: [
          { text: 'Raccogli i vestiti sporchi in giro per casa', duration: '5 minuti' },
          { text: 'Dividi in bianchi, colorati e delicati', duration: '3 minuti' },
          { text: 'Carica il primo carico in lavatrice', duration: '2 minuti' },
          { text: 'Stendi o piega i vestiti asciutti del carico precedente', duration: '10 minuti' },
          { text: 'Riponi i vestiti piegati nei cassetti/armadio', duration: '5 minuti' },
        ],
        urgency: null,
      },
      'Preparare la cena': {
        title: '🍲 Preparare la cena',
        subtasks: [
          { text: 'Decidi cosa fare e controlla gli ingredienti', duration: '3 minuti' },
          { text: 'Lava e prepara le verdure', duration: '8 minuti' },
          { text: 'Inizia a cucinare il piatto principale', duration: '15 minuti' },
          { text: 'Prepara un contorno o un’insalata', duration: '7 minuti' },
          { text: 'Apparecchia la tavola', duration: '2 minuti' },
          { text: 'Impiatta e servi', duration: '2 minuti' },
        ],
        urgency: 'low',
      },
      'Pulire il bagno': {
        title: '🚿 Pulire il bagno',
        subtasks: [
          { text: 'Spruzza il detergente su doccia, lavandino e water', duration: '2 minuti' },
          { text: 'Strofina la tazza del water e pulisci l’asse', duration: '3 minuti' },
          { text: 'Pulisci il lavandino e il rubinetto', duration: '2 minuti' },
          { text: 'Pulisci lo specchio', duration: '1 minuto' },
          { text: 'Strofina la doccia/vasca', duration: '5 minuti' },
          { text: 'Lava o pulisci il pavimento', duration: '3 minuti' },
          { text: 'Cambia gli asciugamani e rifornisci la carta igienica', duration: '2 minuti' },
        ],
        urgency: 'medium',
      },
      'Sistemare la camera': {
        title: '🛏️ Sistemare la camera',
        subtasks: [
          { text: 'Rifai il letto e sistema i cuscini', duration: '3 minuti' },
          { text: 'Raccogli i vestiti da pavimento e sedie', duration: '4 minuti' },
          { text: 'Metti i vestiti sporchi nel cesto, quelli puliti a posto', duration: '5 minuti' },
          { text: 'Libera e organizza il comodino', duration: '3 minuti' },
          { text: 'Spolvera le superfici', duration: '3 minuti' },
          { text: 'Passa l’aspirapolvere o la scopa', duration: '4 minuti' },
        ],
        urgency: 'low',
      },
      'Fare la spesa': {
        title: '🛒 Fare la spesa',
        subtasks: [
          { text: 'Controlla frigo e dispensa per ciò che ti serve', duration: '5 minuti' },
          { text: 'Scrivi una lista divisa per reparto', duration: '5 minuti' },
          { text: 'Prendi le borse riutilizzabili', duration: '1 minuto' },
          { text: 'Fai la spesa e spunta gli articoli', duration: '30 minuti' },
          { text: 'Scarica e metti via la spesa', duration: '10 minuti' },
        ],
        urgency: null,
      },
    },
  },

  // TwoQuestions
  twoQuestions: {
    title: 'Ti suona familiare?',
    titleHighlight: 'familiare?',
    subtitle: 'Non sei pigro. Il tuo cervello ha solo bisogno di un punto di partenza diverso.',
    withoutDoubly: 'Senza Doubly',
    withDoubly: 'Con Doubly',
    rows: [
      {
        without: 'Mi blocco e non so da dove iniziare',
        with: 'Svuota-cervello → appare un unico passo chiaro',
      },
      {
        without: 'Faccio invece piccole attività a caso',
        with: 'Doubly fa emergere ciò che conta davvero, prima',
      },
      {
        without: 'Inizio 5 cose insieme',
        with: 'Un’attività sullo schermo. Finiscila, poi la prossima.',
      },
      {
        without: 'Rimugino sul piano perfetto',
        with: 'Butta giù tutto, Doubly sceglie il primo passo',
      },
      {
        without: 'La evito finché non diventa urgente, poi vado in panico',
        with: 'Inizi prima che arrivi il panico',
      },
      {
        without: 'Lavoro da solo e perdo lo slancio in fretta',
        with: 'Il body doubling e i partner di responsabilità ti tengono in moto',
      },
    ],
    questionTitle: 'Di cosa hai più bisogno in quel momento?',
    options: [
      'Uno svuota-cervello',
      'Un piccolo passo successivo',
      'Responsabilizzazione',
      'Un timer / spinta alla concentrazione',
      'Un reset quando rimango indietro',
    ],
    responseIntro: 'È esattamente lì che Doubly aiuta.',
    responses: {
      'Uno svuota-cervello': {
        title: 'Svuota-cervello → chiarezza istantanea',
        description:
          'Scrivi il caos. Doubly estrae ciò che è concreto e butta via il rumore.',
      },
      'Un piccolo passo successivo': {
        title: 'Il prossimo passo, sempre pronto',
        description:
          'Doubly scompone le grandi attività e ti serve solo la prossima piccola mossa. Nessun sovraccarico.',
      },
      'Responsabilizzazione': {
        title: 'Controlli di responsabilità',
        description:
          'Spinte gentili e responsabilità sociale ti aiutano a restare in carreggiata senza sensi di colpa.',
      },
      'Un timer / spinta alla concentrazione': {
        title: 'Modalità concentrazione',
        description:
          'Un’attività sullo schermo, un timer che scorre, distrazioni sparite. Solo tu e il lavoro.',
      },
      'Un reset quando rimango indietro': {
        title: 'Ripartenza, senza sensi di colpa',
        description:
          'Sei caduto? Doubly rimescola il tuo piano così puoi riprendere senza la spirale della vergogna.',
      },
    },
    mockupNextStep: 'Il tuo prossimo passo è pronto',
    mockupTask: 'Inizia con una piccola cosa',
    mockupCta: 'Prova Doubly',
  },


  // HabitDemo
  habitDemo: {
    title: 'Costruisci abitudini che restano davvero',
    subtitle:
      'Nessuna serie da spezzare. Nessun senso di colpa. Tocca solo quando fai la cosa. Doubly traccia lo schema così puoi vedere i progressi.',
    todayLabel: 'Oggi',
    yourHabits: 'Le tue abitudini',
    weeksLabel: '12 settimane',
    lessLabel: 'Meno',
    moreLabel: 'Più',
    currentStreak: 'Serie attuale',
    bestStreak: 'Serie migliore',
    completion: 'Completamento',
    allDoneMessage: 'Tutte le abitudini fatte per oggi!',
    allDoneDescription: 'Immagina questo ogni giorno. Doubly rende facile andare avanti.',
    allDoneCta: 'Sbloccati ora',
    habits: [
      { id: 'walk', name: 'Fai una passeggiata', icon: '🚶' },
      { id: 'read', name: 'Leggi 10 pagine', icon: '📖' },
      { id: 'journal', name: 'Scrivi il diario', icon: '✏️' },
      { id: 'tidy', name: 'Riordino di 10 min', icon: '🧹' },
    ],
  },

  // Success
  success: {
    title: 'Scambia il doomscrolling con un feed che ti mette in moto.',
    imageAlt: 'Dettaglio di un post di Doubly che mostra un’attività completata con reazioni e commenti della community',
    subtitle: 'Scambia il doomscrolling con un feed che ti mette in moto.',
    outcomes: [
      'Inizia le attività senza la lotta mentale',
      'Porta a termine ciò che avevi pianificato',
      'Torna in carreggiata senza andare in spirale',
      'Fidati di te stesso per fare davvero le cose',
    ],
  },

  // Stakes
  stakes: {
    title: 'Perché restare bloccati ha un costo',
    body: 'Quando iniziare è così difficile, le cose sfuggono. Le scadenze saltano, le occasioni passano, e inizi a sentirti intrappolato in un ciclo di rinvii e sensi di colpa. Doubly ti aiuta a spezzare quel ciclo prima che sparisca un’altra settimana.',
  },

  // Testimonials
  testimonials: {
    title: 'Le persone non hanno bisogno di più pressione sulla produttività',
    subtitle: 'Hanno bisogno di aiuto per iniziare.',
    items: [
      // Real App Store reviews, quoted verbatim. Only add entries that are actual
      // published reviews AND whose reviewer gave permission (Apple's rule; ask by
      // replying to the review in App Store Connect). The grid auto-adapts up to 3.
      {
        quote:
          'This app is the only one that actually got me to do things. I have very strong ADHD, and it made me concentrate on my tasks one by one to always know what’s coming ahead and make order in my day. Love it so much! Hope to see awesome upgrades soon 🙏🏻',
        name: 'Liorcic',
        label: 'Recensione App Store',
      },
      {
        quote:
          'This has really helped me manage my workload, I haven’t seen anything like it. The walkthrough and set up is very intuitive, and the features make it worth it!',
        name: 'MinecraftrNinja',
        label: 'Recensione App Store',
      },
      // Slot 3 — next permitted review goes here.
    ],
  },

  // FAQ
  // ToolsSection
  toolsSection: {
    title: 'Strumenti ADHD gratuiti da usare subito',
    subtitle: 'Nessuna registrazione, nessun pop-up. Aprine uno nel browser appena ti blocchi.',
    hot: 'Popolare',
    openTool: 'Apri lo strumento',
    browseAll: 'Scopri tutti gli strumenti ADHD gratuiti',
  },

  faq: {
    title: 'Domande',
    items: [
      {
        q: 'Doubly è solo per chi ha una diagnosi di ADHD?',
        a: 'No. Doubly è per chiunque fatichi a iniziare, si senta sopraffatto o abbia la mente ingombra. Non serve una diagnosi, basta un cervello che a volte si blocca quando c’è troppo da fare.',
      },
      {
        q: 'In cosa è diverso da una normale app di to-do?',
        a: 'Le app di to-do ti aiutano a elencare le cose. Doubly ti aiuta a iniziarle davvero. Ci concentriamo sul ridurre la resistenza all’avvio, il divario tra sapere cosa fare e farlo, con svuota-cervello, chiarezza in un solo passo e responsabilità.',
      },
      {
        q: 'Aiuta nello specifico ad avviare le attività?',
        a: 'Sì. È il nostro obiettivo principale. Lo svuota-cervello libera la mente ingombra, la chiarezza sul prossimo passo sceglie un’azione fattibile e gli strumenti di responsabilità ti aiutano a portare a termine. Ogni funzione è costruita attorno a quel primo passo.',
      },
      {
        q: 'Cosa rende diversa la responsabilità qui?',
        a: 'Non è assillare né serie che ti fanno sentire in colpa. Doubly usa gentili controlli sociali con persone reali a cui importano i tuoi progressi, così hai qualcuno dalla tua parte, non un robot che ti fa vergognare.',
      },
      {
        q: 'Sostituisce i tracker di abitudini o le agende?',
        a: 'Può farlo. Ma Doubly non cerca di essere un coltellino svizzero. È tutto concentrato sull’aiutarti a passare dal bloccato all’avviato. Se ti serve una pianificazione dettagliata dei progetti, abbinalo ai tuoi strumenti esistenti.',
      },
      {
        q: 'Va bene se mi sento facilmente sopraffatto?',
        a: 'Soprattutto allora. Doubly non ti mostra mai tutto insieme. Vedi un solo passo successivo, non un muro di attività. Tutta l’esperienza è pensata per i cervelli che vanno in sovraccarico in fretta.',
      },
    ],
  },

  // FinalCTA
  finalCta: {
    title: 'Il tuo cervello non ha bisogno di più pressione',
    highlight: 'Ha bisogno di un modo per iniziare.',
    subtitle: 'Per le menti ADHD stanche di rimuginare, rinviare e restare indietro.',
    cta: 'Scarica sull’App Store',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    freeTools: 'Strumenti ADHD gratuiti',
    tools: 'Strumenti',
    learn: 'Risorse',
    privacy: 'Privacy',
    terms: 'Termini',
    support: 'Supporto',
    copyright: (year: number) => `© ${year} Doubly. Creato per menti ADHD.`,
  },

  // StickyBar
  stickyBar: {
    cta: 'Sbloccati ora',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | L’app ADHD che ti aiuta a iniziare',
    description:
      'Svuota il caos, ottieni un unico passo chiaro e usa la responsabilità per portare davvero a termine. Fatto per le menti ADHD che hanno bisogno di aiuto per iniziare, non solo per pianificare.',
    keywords: ['ADHD', 'produttività', 'svuota-cervello', 'gestione attività', 'responsabilità', 'concentrazione'],
    ogTitle: 'Doubly | L’app ADHD che ti aiuta a iniziare',
    ogDescription:
      'Svuota il caos, ottieni un unico passo chiaro e usa la responsabilità per portare davvero a termine.',
  },
  // Tool library card copy (title + description per tool).
  // Mirrors content/tools-i18n/${locale}/_index.json cards[] so the homepage grid and
  // the footer speak the visitor's language; kept in sync by scripts/check-tool-cards.mjs.
  toolCards: {
    'task-splitter': {
      title: 'Strumento per scomporre le attività',
      description:
        'Scrivi un’attività che non riesci a iniziare. L’IA la divide in piccoli passi fattibili con stime di tempo. Fatto per le menti ADHD.',
    },
    'brain-dump': {
      title: 'Strumento svuota-cervello',
      description:
        'Butta giù tutto ciò che hai in testa, l’IA estrae solo le attività concrete. Senza registrazione, niente viene salvato.',
    },
    'pick-one': {
      title: 'Strumento «scegline una»',
      description:
        'Incolla la tua lista disordinata e ottieni una cosa sola da cui partire. La più piccola, la più spaventosa o a caso. Fatto per quando dieci attività sembrano un unico blocco impossibile da iniziare.',
    },
    'eisenhower-matrix': {
      title: 'Matrice di Eisenhower (edizione ADHD)',
      description:
        'Trascina le attività in quadranti come «noioso ma importante», al posto delle etichette da manuale. La matrice che finalmente si adatta a una mente ADHD. Si salva in locale.',
    },
    'pomodoro': {
      title: 'Timer Pomodoro per l’ADHD',
      description:
        '25 minuti di lavoro, 5 di pausa: il metodo di concentrazione che finalmente si adatta a una mente ADHD. Gratis, senza registrazione, funziona offline.',
    },
    'visual-timer': {
      title: 'Timer visivo / orologio per la cecità temporale',
      description:
        'Uno spicchio che si riduce: vedi il tempo che passa invece di leggere dei numeri. Funziona anche come orologio per la cecità temporale negli adulti con ADHD.',
    },
    'brown-noise': {
      title: 'Generatore di suoni ambientali',
      description:
        'Generatore di suoni ambientali gratuito, direttamente nel browser. Rumore marrone, rosa e bianco. Un sottofondo costante per calmare una mente ADHD sempre accesa. Con timer di spegnimento, funziona offline.',
    },
    'body-doubling-room': {
      title: 'Stanza di body doubling',
      description:
        'Stanza di concentrazione gratuita per due. Condividi un link e lavorate fianco a fianco in video peer-to-peer, con un timer condiviso. Senza registrazione, niente da installare.',
    },
    'hyperfocus-timer': {
      title: 'Timer per interrompere l’iperfocus',
      description:
        'Ogni X minuti una voce ti richiama, più un limite massimo facoltativo, così una sessione di iperfocus ADHD non si mangia tutto il pomeriggio.',
    },
  },

  toolWidgets: {
    taskSplitter: {
      inputLabel: 'Qual è l’attività che non riesci a iniziare?',
      inputPlaceholder: 'es. Compilare la nota spese',
      submit: 'Dividila',
      submitting: 'La sto dividendo…',
      privacyNote: 'Privato. Non salviamo nulla sul nostro server.',
      charactersLeft: (count: number) => `${count} caratteri rimasti`,
      presetsIntro: 'Oppure prova una di queste:',
      presets: {
        cleanKitchen: 'Pulire la cucina',
        doLaundry: 'Fare il bucato',
        replyInbox: 'Rispondere alle email',
        planWeekendTrip: 'Organizzare un weekend',
        fileTaxes: 'Fare la dichiarazione dei redditi',
        cleanBathroom: 'Pulire il bagno',
      },
      loading: 'La sto dividendo in passaggi…',
      errorRateLimit: 'Stai andando veloce. Aspetta un attimo e riprova.',
      errorGeneric: 'Non riesco a dividerla adesso. Riprova tra qualche secondo.',
      tryAgain: 'Riprova',
      taskLabel: 'Attività',
      urgencyLabels: { low: 'Urgenza bassa', medium: 'Urgenza media', high: 'Urgenza alta' },
      stepsDone: (done: number, total: number) => `${done}/${total} passaggi completati`,
      minTotal: (min: number) => `~${min} min in totale`,
      allDoneMessage: 'Fatto. Non è stato così difficile, vero?',
      emptyState:
        'Non ho trovato passaggi chiari per questa. Prova a riformularla come un’azione, tipo «Scrivere il piano del progetto» o «Pulire il garage».',
    },
    brainDump: {
      label: 'Butta fuori tutto quello che hai in testa. Non serve che sia ordinato.',
      placeholder:
        'Continuo a dimenticare di chiamare il dentista e la cucina è un disastro.\nMi sento sopraffatto dal progetto al lavoro. Devo fare la spesa per la\ncena di stasera e rispondere all’email di Sara della settimana scorsa.',
      privacy: 'Privato. Non salviamo nulla sul nostro server.',
      charactersLeft: (remaining: number) => `${remaining} caratteri rimasti.`,
      clear: 'Svuota',
      submit: 'Tira fuori le attività',
      submitting: 'Sto tirando fuori le attività…',
      loading: 'Sto leggendo il tuo sfogo e tiro fuori le cose concrete…',
      errorRateLimited: 'Stai andando veloce. Aspetta un attimo e riprova.',
      errorGeneric: 'Non riesco a estrarre le attività adesso. Riprova tra qualche secondo.',
      tryAgain: 'Riprova',
      empty:
        'Non abbiamo trovato niente che somigliasse a un’attività concreta. Può essere un buon segno. Se ti stavi sfogando, vale lo stesso. Se volevi elencare cose da fare, prova a essere un po’ più specifico («scrivere a Sara» invece di «cose di Sara»).',
      resultsTitle: 'Attività concrete',
      doneCount: (done: number, total: number) => `${done}/${total} fatte`,
      footer: 'Scegline una. Solo una. Falla adesso, poi torna per la prossima.',
    },
    pickOne: {
      inputLabel: 'Incolla la tua lista. Una per riga, o alla rinfusa con le virgole. Come ti pare.',
      inputPlaceholder:
        'rispondere a mamma\nprenotare il dentista\nfare la nota spese\nfinire le slide\nannaffiare le piante',
      itemsDetected: (count: number) =>
        `${count} element${count === 1 ? 'o rilevato' : 'i rilevati'}`,
      itemsDetectedWithLeft: (count: number, left: number) =>
        `${count} element${count === 1 ? 'o rilevato' : 'i rilevati'}, ${left} rimast${left === 1 ? 'o' : 'i'}`,
      clearEverything: 'Svuota tutto',
      modeLegend: 'Come scegliamo?',
      modes: {
        smallest: {
          label: 'La più piccola',
          reason: 'L’elemento più corto della lista. Inizia in piccolo, prendi slancio.',
        },
        scariest: {
          label: 'La più spaventosa',
          reason: 'Quella che preferiresti non guardare. Farla per prima ti libera la giornata.',
        },
        random: {
          label: 'Scegli e basta',
          reason: 'Niente ragionamenti. Ha scelto la lista. Tu inizia e basta.',
        },
      },
      pickCta: 'Scegline una per me',
      pickAnotherCta: 'Scegline un’altra',
      emptyHint: 'Aggiungi almeno un elemento, poi tocca scegli.',
      readyHint: 'Pronto. Tocca «Scegline una per me» quando non riesci a decidere.',
      allDoneTitle: 'Lista sistemata.',
      allDoneBody:
        'Ogni elemento è fatto o saltato. Puoi svuotare la lista, oppure azzerarla per rimettere in gioco quelli saltati.',
      bringSkippedBack: 'Rimetti i saltati',
      startFreshList: 'Inizia una nuova lista',
      pickedEyebrow: 'Inizia da questa',
      didIt: 'Fatta',
      notThisOne: 'Non questa',
      pickAgain: 'Scegli di nuovo',
      progress: (done: number, skipped: number, left: number) =>
        `${done} fatte, ${skipped} saltate, ${left} rimaste`,
    },
    eisenhower: {
      inputLabel: 'Aggiungi un’attività',
      inputPlaceholder: 'Aggiungi un’attività e premi invio (o incollane tante separate da a capo)',
      addButton: 'Aggiungi',
      totals: (total: number, unsorted: number) =>
        `${total} attività in totale, ${unsorted} da smistare`,
      clearAll: 'Svuota tutto',
      unsortedHeading: (count: number) => `Da smistare (${count})`,
      unsortedListLabel: 'Attività da smistare',
      removeTask: (text: string) => `Rimuovi ${text}`,
      placeHint: 'Ora tocca un quadrante per posizionarla.',
      placeHintDesktop: 'Oppure trascinala, da computer.',
      quadrantRegionLabel: (label: string) => `Quadrante ${label}`,
      quadrantCountLabel: (count: number, label: string) => `${count} attività in ${label}`,
      dropHere: 'Trascina qui',
      sendBackToUnsorted: 'Rimetti da smistare',
      moveBackToUnsorted: (text: string) => `Rimetti ${text} tra le attività da smistare`,
      empty: 'Vuoto',
      emptyState:
        'Aggiungi un’attività qui sopra per iniziare. Tutto si salva nel tuo browser, niente sul nostro server.',
      hintLabel: 'Suggerimento Doubly:',
      hintBody:
        'Il mucchio noioso ma importante è quello che quasi tutti saltano e che quasi tutti rimpiangono di aver saltato. Se oggi fai una cosa sola, prendila da lì.',
      quadrants: {
        fire: {
          label: 'In fiamme',
          sub: 'Da fare oggi, non domani.',
          textbook: 'Importante + Urgente',
        },
        boring: {
          label: 'Noioso ma importante',
          sub: 'Le vere vittorie. Mettile in agenda, non saltarle.',
          textbook: 'Importante + Non urgente',
        },
        noisy: {
          label: 'Rumoroso ma saltabile',
          sub: 'Fa rumore, ma non è un tuo problema. Delega, rimanda, ignora.',
          textbook: 'Urgente + Non importante',
        },
        drop: {
          label: 'Lascia perdere',
          sub: 'È permesso. Non serve finire la lista.',
          textbook: 'Non importante + Non urgente',
        },
      },
    },
    pomodoro: {
      timerLabel: 'Timer Pomodoro',
      modeTablistLabel: 'Modalità del timer',
      modes: {
        work: 'Concentrazione',
        'short-break': 'Pausa breve',
        'long-break': 'Pausa lunga',
      },
      dialLabel: (mode: string, time: string) => `Timer ${mode}. ${time} rimanenti.`,
      sessionsToday: (count: number) => `Sessioni completate oggi: ${count}`,
      soundToggle: 'Suono a fine sessione',
      customizeDurations: 'Personalizza le durate',
      hideSettings: 'Nascondi impostazioni',
      focusMinutes: 'Concentrazione (min)',
      shortBreakMinutes: 'Pausa breve (min)',
      longBreakMinutes: 'Pausa lunga (min)',
      documentTitle: (time: string, mode: string) => `${time} | ${mode} | Doubly`,
    },
    visualTimer: {
      ariaLabel: 'Timer visivo con conto alla rovescia',
      dialAriaLabel: (remaining: string) => `Quadrante del timer visivo. ${remaining} rimanenti.`,
      seconds: (s: number) => `${s} second${s === 1 ? 'o' : 'i'}`,
      minutes: (m: number) => `${m} minut${m === 1 ? 'o' : 'i'}`,
      minutesAndSeconds: (m: number, s: number) =>
        `${m} minut${m === 1 ? 'o' : 'i'} e ${s} second${s === 1 ? 'o' : 'i'}`,
      documentTitle: (time: string) => `${time} | Doubly`,
      countingDown: (minutes: number) => `Conto alla rovescia da ${minutes} min`,
      setFor: (minutes: number) => `Impostato su ${minutes} min`,
      paused: 'In pausa',
      timeIsUp: 'Tempo scaduto',
      presetsLabel: 'Durate predefinite',
      presetMinutes: (minutes: number) => `${minutes} min`,
      custom: 'Personalizza',
      minutesLabel: 'Minuti',
      set: 'Imposta',
      soundWhenDone: 'Suono a tempo scaduto',
    },
    brownNoise: {
      play: (sound: string) => `Riproduci ${sound}`,
      pause: (sound: string) => `Metti in pausa ${sound}`,
      documentTitle: (sound: string) => `▶ ${sound} · Doubly`,
      chooseSound: 'Scegli un suono ambientale',
      soundGroupLabel: 'Suono ambientale',
      volume: 'Volume',
      volumePercent: (percent: number) => `${percent}%`,
      sleepTimer: 'Timer di spegnimento',
      sleepOff: 'Off',
      sleepMinutes: (minutes: number) => `${minutes} min`,
      privacyNote: 'Funziona nel tuo browser. Niente viene registrato, niente viene caricato.',
      sounds: {
        brown: {
          name: 'Marrone',
          description: 'Profondo, rimbombante. Come una cascata lontana. Quello di TikTok.',
        },
        pink: {
          name: 'Rosa',
          description: 'Più morbido del bianco, meno basso del marrone. Equilibrato.',
        },
        white: {
          name: 'Bianco',
          description: 'Il fruscio di una vecchia TV. Brillante e uniforme.',
        },
      },
    },
    hyperfocus: {
      ariaLabel: 'Timer per interrompere l’iperfocus',

      // Durate. Ogni formulazione sta qui, così ogni lingua sceglie i suoi
      // plurali, le sue unità e il suo ordine delle parole.
      minutesShort: (minutes: number) => `${minutes} min`,
      hoursShort: (hours: number) => `${hours} h`,
      hoursMinutesShort: (hours: number, minutes: number) => `${hours} h ${minutes} min`,
      durationLong: (hours: number, minutes: number) => {
        if (hours === 0 && minutes === 0) return 'meno di un minuto';
        const parts: string[] = [];
        if (hours > 0) parts.push(`${hours} or${hours === 1 ? 'a' : 'e'}`);
        if (minutes > 0) parts.push(`${minutes} minut${minutes === 1 ? 'o' : 'i'}`);
        return parts.join(' e ');
      },

      // Riga della sessione. Il testo tra ** viene evidenziato.
      stripNoCap: (interval: string) => `Controllo ogni ${interval}, senza limite massimo`,
      stripWithCap: (interval: string, cap: string) =>
        `Controllo ogni ${interval}, stop obbligatorio a ${cap}`,
      summaryNoCap: (interval: string) => `Ti richiamo ogni **${interval}**, senza limite massimo.`,
      summaryWithCap: (interval: string, cap: string) =>
        `Ti richiamo ogni **${interval}**, con stop obbligatorio a **${cap}**.`,

      // Configurazione
      intervalHeading: 'Controlla ogni',
      custom: 'Personalizza',
      minutes: 'Minuti',
      set: 'Imposta',
      jitterNote:
        'I controlli variano di circa il dieci percento, così il cervello non riesce a ignorarli in anticipo.',
      moreOptions: 'Altre opzioni',
      hideOptions: 'Nascondi opzioni',
      taskLabel: 'A cosa stai lavorando? (facoltativo)',
      taskPlaceholder: 'es. la dichiarazione, la revisione del design, il copione',
      taskHint: 'Usato nei controlli vocali, così senti cosa ti eri messo a fare.',
      hardStopHeading: 'Stop obbligatorio dopo',
      hardStopHint:
        'Al limite parte un avviso più forte, così una spirale da sei ore non ti passa sotto il naso.',
      capOff: 'Off',
      capHours: (hours: number) => `${hours}h`,
      noHardStop: 'senza limite',
      alertsHeading: 'Avvisi',
      chime: 'Suono',
      voice: 'Voce',
      notify: 'Notifica',
      alertsHint:
        'Il suono si alza se ignori un controllo. La voce dice l’ora e da quanto stai lavorando. La notifica arriva dal browser quando la scheda è in secondo piano.',
      notificationsBlocked:
        'Le notifiche sono bloccate in questo browser. Attivale nelle impostazioni del sito per usarle.',
      notificationsUnsupported: 'Il tuo browser non supporta le notifiche web.',
      startSession: 'Inizia la sessione',

      // Sessione in corso
      statElapsed: 'Trascorso',
      statNextCheckIn: 'Prossimo controllo',
      statCap: 'Limite',
      statusNow: 'Adesso',
      statusPaused: 'In pausa',
      statusCapHit: 'Limite raggiunto',
      statusOff: 'Off',
      workingOn: (task: string) => `Stai lavorando su **${task}**`,
      checkInHeading: 'Controllo veloce',
      checkInBody: (clock: string, elapsed: string) =>
        `Sono le ${clock} e ci stai lavorando da ${elapsed}. Sei ancora sull’attività che avevi iniziato o è ora di riemergere?`,
      stillGoing: 'Vado avanti',
      takeABreak: 'Faccio una pausa',
      stopSession: 'Chiudi la sessione',
      capHeading: 'Limite di sessione raggiunto',
      capBody: (minutes: number) =>
        `Avevi messo uno stop obbligatorio a ${minutes} minuti. Alzati, bevi acqua, mangia qualcosa. Il lavoro resta qui.`,
      pause: 'Pausa',
      resume: 'Riprendi',
      endSession: 'Termina sessione',
      checkInLog: 'Registro dei controlli',
      logContinue: 'hai continuato',
      logBreak: 'hai fatto una pausa',
      logStop: 'hai smesso',

      // Titolo della scheda del browser quando un controllo aspetta in secondo piano.
      tabAlert: '⚠ Controllo | Doubly',

      // Letto ad alta voce (SpeechSynthesis) e inviato come notifica di sistema.
      checkInSpeech: (clock: string, elapsed: string, task: string) =>
        task
          ? `Controllo. Sono le ${clock}. Stai lavorando su ${task} da ${elapsed}.`
          : `Controllo. Sono le ${clock}. Stai lavorando da ${elapsed}.`,
      capSpeech: (clock: string, elapsed: string) =>
        `Limite di sessione raggiunto. Sono le ${clock}. Ci stai lavorando da ${elapsed}. È ora di fermarti.`,
      notificationCheckInTitle: 'Controllo iperfocus',
      notificationCheckInBody: (clock: string, elapsed: string) =>
        `Sono le ${clock}. Ci stai lavorando da ${elapsed}.`,
      notificationCapTitle: 'Limite di iperfocus raggiunto',
      notificationCapBody: (clock: string, elapsed: string) =>
        `Sono le ${clock}. Ci stai lavorando da ${elapsed}. È ora di fermarti.`,
    },
    shared: {
      start: 'Avvia',
      pause: 'Pausa',
      resume: 'Riprendi',
      done: 'Fatto',
      reset: 'Azzera',
      skip: 'Salta',
      skipAria: 'Salta alla sessione successiva',
      startSession: 'Inizia una sessione di concentrazione',
      creatingRoom: 'Creazione della stanza...',
    },
    chrome: {
      tryInApp: 'Provalo nell’app',
      appStoreAria: (label: string) => `${label} sull’App Store`,
      breadcrumbAria: 'Percorso di navigazione',
    },
  },
};

export default it;
