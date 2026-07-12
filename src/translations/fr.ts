const fr = {
  // Shared
  common: {
    tryInDoubly: 'Essaie-le dans Doubly',
    socialProof: (count: number) => `Rejoins ${count.toLocaleString('fr-FR')} personnes TDAH`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    howItWorks: 'Comment ça marche',
    features: 'Fonctionnalités',
    testimonials: 'Témoignages',
    faq: 'FAQ',
    cta: 'Obtenir Doubly',
    toggleMenu: 'Afficher/masquer le menu',
  },

  // Hero
  hero: {
    badge: 'Conçu pour les cerveaux TDAH',
    titlePrefix: 'Quand ton cerveau a ',
    titleHighlight: '47 onglets ouverts',
    subtitle: 'Transforme le chaos en une seule prochaine étape claire, en moins d’une minute.',
    cta: 'Télécharger sur l’App Store',
    secondaryCta: 'Regarde-le découper une tâche ↓',
    android: {
      prompt: 'Tu es sur Android ?',
      placeholder: 'toi@email.com',
      submit: 'Préviens-moi',
      success: 'Tu es sur la liste. On t’enverra un e-mail dès que Doubly arrive sur Android.',
      invalid: 'Saisis une adresse e-mail valide.',
      error: 'Une erreur s’est produite. Réessaie.',
    },
    floatingCards: {
      brainDump: 'Vide-cerveau',
      habits: 'Habitudes',
      accountability: 'Responsabilisation',
    },
    phone: {
      screenAlt:
        'L’app Doubly montrant tes habitudes avec les séries quotidiennes et les grilles de progression',
    },
  },

  // Problem
  problem: {
    title: 'Le TDAH, ce n’est pas juste être désorganisé',
    subtitle:
      'C’est un combat quotidien avec un cerveau qui refuse de coopérer avec tes propres intentions.',
    cards: [
      {
        type: 'External',
        title: 'Trop de tâches. Trop de pensées.',
        body: 'Aucun endroit clair où commencer.',
      },
      {
        type: 'Internal',
        title: 'Tu sais quoi faire, mais tu n’arrives toujours pas à commencer.',
        body: 'Ce n’est pas de la paresse. C’est une résistance à l’initiation.',
      },
      {
        type: 'Philosophical',
        title: 'Commencer ne devrait pas être aussi difficile.',
        body: 'Ton cerveau fonctionne différemment. Tes outils devraient aussi.',
      },
      {
        type: 'Stakes',
        title: 'Et ça te coûte plus que du temps.',
        body: 'Les choses s’accumulent. Tu prends du retard. Tu commences à perdre confiance en toi.',
      },
    ],
  },

  // VisualProblem
  visualProblem: {
    cards: [
      { image: '/problem-1.jpg', alt: 'Trop de tâches. Trop de pensées.' },
      {
        image: '/problem-2.jpg',
        alt: 'Tu sais quoi faire, mais tu n’arrives toujours pas à commencer.',
      },
      {
        image: '/problem-4.jpg',
        alt: 'Commencer des choses normales ne devrait pas être aussi difficile.',
      },
      { image: '/problem-3.jpg', alt: 'Et ça te coûte plus que du temps.' },
    ],
  },

  // Guide
  guide: {
    title: 'Conçu spécialement pour les cerveaux TDAH qui ont du mal à démarrer',
    subtitle:
      'La plupart des applis de productivité supposent que ton cerveau est prêt à planifier. Doubly est conçu pour le moment où tu es débordé, bloqué ou en évitement — d’après le fonctionnement réel du TDAH.',
    proofPoints: [
      'Pensé pour les frictions du TDAH, pas pour la productivité générique',
      'Aide à réduire la résistance à l’initiation',
      'Apporte de la structure sans te submerger',
    ],
    mockup: {
      brainDump: 'Vide-cerveau',
      items: [
        'appeler le dentiste',
        'faire les courses',
        'répondre au boss',
        'lessive',
        'pourquoi je suis si fatigué',
      ],
      yourNextStep: 'Ta prochaine étape',
      nextStepTask: 'Mettre la lessive dans la machine',
      nextStepMeta: '~5 min · faible énergie',
      accountability: 'Responsabilisation',
      accountabilityText: 'Sarah prend de tes nouvelles à 15 h',
    },
  },

  // BrainDumpDemo
  brainDumpDemo: {
    title: 'Vide le chaos. Garde les tâches.',
    subtitle:
      'Cerveau plein ? Écris pendant 20 secondes. Doubly en extrait le concret et jette le bruit.',
    dumpText:
      'J’ouvre mon ordinateur pour être productif et en cinq secondes mon cerveau part dans tous les sens : répondre à ce message, commander des vitamines, nettoyer l’évier, trouver le chargeur, manger un truc, et aussi ne pas oublier la tâche super importante que tu n’allais surtout pas oublier. Que j’ai immédiatement oubliée.',
    brainDumpLabel: 'Vide-cerveau',
    brainDumpPlaceholder: 'Laisse tout sortir...',
    extractedTasksLabel: 'Tâches extraites',
    listening: 'À l’écoute...',
    tasksFound: (count: number) => `${count} tâche${count > 1 ? 's' : ''} trouvée${count > 1 ? 's' : ''}`,
    filterNote: 'Les pensées non actionnables sont filtrées. Seules les vraies tâches sont gardées.',
    tasks: [
      { text: '💊 Commander des vitamines', phrase: 'commander des vitamines' },
      { text: '🧽 Nettoyer l’évier', phrase: 'nettoyer l’évier' },
      { text: '🔌 Trouver le chargeur', phrase: 'trouver le chargeur' },
      { text: '🍽️ Manger un truc', phrase: 'manger un truc' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: 'Voici comment tu te débloques',
    subtitle: 'Quatre étapes simples. Aucune configuration compliquée. Aucune courbe d’apprentissage.',
    stepLabel: 'ÉTAPE',
    steps: [
      {
        number: '01',
        title: 'Vide ta tête',
        body: 'Capture tes pensées, tâches et fouillis mental en un instant. Aucun rangement requis. Sors-le, c’est tout.',
      },
      {
        number: '02',
        title: 'Obtiens une seule prochaine étape claire',
        body: 'Doubly transforme le trop-plein en quelque chose que tu peux vraiment commencer. Pas dix priorités. Une seule.',
      },
      {
        number: '03',
        title: 'Reste en mouvement',
        body: 'Utilise la responsabilisation, les minuteurs et les outils de progression pour continuer, même quand la motivation s’essouffle.',
      },
      {
        number: '04',
        title: 'Rends-toi responsable',
        body: 'Partage avec tes amis dans le fil Doubly. La vraie responsabilisation naît quand quelqu’un t’encourage.',
      },
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: 'Écris une tâche. Regarde-la se découper.',
    subtitle:
      'Les grosses tâches semblent impossibles. Doubly les découpe en étapes de 2 à 5 minutes pour que tu puisses simplement commencer.',
    customInputPlaceholder: 'Ou écris ta propre tâche...',
    splitButton: 'Découper',
    taskLabel: 'Tâche',
    aiThinking: 'L’IA la décompose...',
    errorMessage: 'Impossible de joindre l’IA pour le moment. Essaie un exemple ci-dessus ou réessaie.',
    tryAgain: 'Réessayer',
    stepsDone: (done: number, total: number) => `${done}/${total} étapes faites`,
    minTotal: (min: number) => `~${min} min au total`,
    urgencySuffix: 'urgence',
    urgencyLabels: { low: 'Urgence faible', medium: 'Urgence moyenne', high: 'Urgence élevée' },
    allDoneMessage: 'Et voilà. Ce n’était pas si dur, hein ?',
    allDoneDescription:
      'Doubly fait ça pour chaque tâche que tu lui donnes. Fini de fixer une liste de tâches interminable.',
    allDoneCta: 'Débloque-toi maintenant',
    presets: [
      { label: 'Nettoyer la cuisine', icon: '🍳' },
      { label: 'Faire la lessive', icon: '🧰' },
      { label: 'Préparer le dîner', icon: '🍲' },
      { label: 'Nettoyer la salle de bain', icon: '🚿' },
      { label: 'Ranger la chambre', icon: '🛏️' },
      { label: 'Faire les courses', icon: '🛒' },
    ],
    presetResults: {
      'Nettoyer la cuisine': {
        title: '🍳 Nettoyer la cuisine',
        subtasks: [
          { text: 'Dégager les plans de travail et ranger les objets', duration: '3 minutes' },
          { text: 'Mettre la vaisselle sale au lave-vaisselle', duration: '5 minutes' },
          { text: 'Essuyer les plans de travail et la plaque de cuisson', duration: '4 minutes' },
          { text: 'Récurer l’évier', duration: '2 minutes' },
          { text: 'Balayer le sol', duration: '3 minutes' },
          { text: 'Sortir les poubelles', duration: '2 minutes' },
        ],
        urgency: 'medium',
      },
      'Faire la lessive': {
        title: '🧰 Faire la lessive',
        subtasks: [
          { text: 'Rassembler le linge sale dans toute la maison', duration: '5 minutes' },
          { text: 'Trier le blanc, les couleurs et le délicat', duration: '3 minutes' },
          { text: 'Charger la première fournée dans la machine', duration: '2 minutes' },
          { text: 'Étendre ou plier le linge sec de la fournée précédente', duration: '10 minutes' },
          { text: 'Ranger le linge plié dans les tiroirs/l’armoire', duration: '5 minutes' },
        ],
        urgency: null,
      },
      'Préparer le dîner': {
        title: '🍲 Préparer le dîner',
        subtasks: [
          { text: 'Décider quoi préparer et vérifier les ingrédients', duration: '3 minutes' },
          { text: 'Laver et préparer les légumes', duration: '8 minutes' },
          { text: 'Commencer à cuire le plat principal', duration: '15 minutes' },
          { text: 'Préparer un accompagnement ou une salade', duration: '7 minutes' },
          { text: 'Mettre la table', duration: '2 minutes' },
          { text: 'Dresser et servir', duration: '2 minutes' },
        ],
        urgency: 'low',
      },
      'Nettoyer la salle de bain': {
        title: '🚿 Nettoyer la salle de bain',
        subtasks: [
          { text: 'Vaporiser du nettoyant sur la douche, le lavabo et les toilettes', duration: '2 minutes' },
          { text: 'Récurer la cuvette et essuyer la lunette', duration: '3 minutes' },
          { text: 'Nettoyer le lavabo et le robinet', duration: '2 minutes' },
          { text: 'Essuyer le miroir', duration: '1 minute' },
          { text: 'Récurer la douche/la baignoire', duration: '5 minutes' },
          { text: 'Passer la serpillière ou essuyer le sol', duration: '3 minutes' },
          { text: 'Changer les serviettes et remettre du papier toilette', duration: '2 minutes' },
        ],
        urgency: 'medium',
      },
      'Ranger la chambre': {
        title: '🛏️ Ranger la chambre',
        subtasks: [
          { text: 'Faire le lit et remettre les oreillers en place', duration: '3 minutes' },
          { text: 'Ramasser les vêtements par terre et sur les chaises', duration: '4 minutes' },
          { text: 'Mettre le linge sale au panier, ranger le propre', duration: '5 minutes' },
          { text: 'Dégager et organiser la table de chevet', duration: '3 minutes' },
          { text: 'Dépoussiérer les surfaces', duration: '3 minutes' },
          { text: 'Passer l’aspirateur ou balayer le sol', duration: '4 minutes' },
        ],
        urgency: 'low',
      },
      'Faire les courses': {
        title: '🛒 Faire les courses',
        subtasks: [
          { text: 'Vérifier le frigo et les placards pour voir ce qu’il manque', duration: '5 minutes' },
          { text: 'Écrire une liste regroupée par rayon', duration: '5 minutes' },
          { text: 'Prendre des sacs réutilisables', duration: '1 minute' },
          { text: 'Faire les achats et cocher les articles', duration: '30 minutes' },
          { text: 'Déballer et ranger les courses', duration: '10 minutes' },
        ],
        urgency: null,
      },
    },
  },

  // TwoQuestions
  twoQuestions: {
    title: 'Ça te parle ?',
    subtitle: 'Tu n’es pas paresseux. Ton cerveau a juste besoin d’un point de départ différent.',
    withoutDoubly: 'Sans Doubly',
    withDoubly: 'Avec Doubly',
    rows: [
      {
        without: 'Je me fige et je ne sais pas par où commencer',
        with: 'Vide-cerveau → une prochaine étape claire apparaît',
      },
      {
        without: 'Je fais plutôt de petites tâches au hasard',
        with: 'Doubly fait remonter ce qui compte vraiment en premier',
      },
      {
        without: 'Je commence 5 choses en même temps',
        with: 'Une seule tâche à l’écran. Termine-la, puis la suivante.',
      },
      {
        without: 'Je me prends la tête pour trouver le plan parfait',
        with: 'Vide tout, Doubly choisit la première étape',
      },
      {
        without: 'Je repousse jusqu’à ce que ce soit urgent — puis je panique',
        with: 'Tu commences avant que la panique arrive',
      },
      {
        without: 'Je travaille seul et je perds vite mon élan',
        with: 'Le body doubling et des partenaires de responsabilisation te font avancer',
      },
    ],
    questionTitle: 'De quoi as-tu le plus besoin à ce moment-là ?',
    options: [
      'Un vide-cerveau',
      'Une petite prochaine étape',
      'De la responsabilisation',
      'Un minuteur / un coup de focus',
      'Un nouveau départ quand je décroche',
    ],
    responseIntro: 'C’est exactement là que Doubly aide.',
    responses: {
      'Un vide-cerveau': {
        title: 'Vide-cerveau → clarté immédiate',
        description:
          'Écris le chaos. Doubly en extrait le concret et jette le bruit.',
      },
      'Une petite prochaine étape': {
        title: 'La prochaine étape, toujours prête',
        description:
          'Doubly découpe les grosses tâches et te sert juste le prochain petit pas. Sans trop-plein.',
      },
      'De la responsabilisation': {
        title: 'Points de suivi',
        description:
          'De petits rappels bienveillants et la responsabilisation sociale t’aident à rester sur les rails, sans culpabilité.',
      },
      'Un minuteur / un coup de focus': {
        title: 'Mode focus',
        description:
          'Une seule tâche à l’écran, un minuteur qui tourne, les distractions disparues. Juste toi et le travail.',
      },
      'Un nouveau départ quand je décroche': {
        title: 'Nouveau départ, sans culpabilité',
        description:
          'Tu as décroché ? Doubly réorganise ton plan pour que tu puisses reprendre sans spirale de honte.',
      },
    },
    mockupNextStep: 'Ta prochaine étape est prête',
    mockupTask: 'Commence par une petite chose',
    mockupCta: 'Essayer Doubly',
  },


  // HabitDemo
  habitDemo: {
    title: 'Crée des habitudes qui tiennent vraiment',
    subtitle:
      'Aucune série à casser. Aucune culpabilité. Tape simplement quand tu fais la chose. Doubly suit le rythme pour que tu voies tes progrès.',
    todayLabel: 'Aujourd’hui',
    yourHabits: 'Tes habitudes',
    weeksLabel: '12 semaines',
    lessLabel: 'Moins',
    moreLabel: 'Plus',
    currentStreak: 'Série actuelle',
    bestStreak: 'Meilleure série',
    completion: 'Taux de réussite',
    allDoneMessage: 'Toutes les habitudes faites pour aujourd’hui !',
    allDoneDescription: 'Imagine ça chaque jour. Doubly te facilite la tâche pour continuer.',
    allDoneCta: 'Débloque-toi maintenant',
    habits: [
      { id: 'walk', name: 'Aller marcher', icon: '🚶' },
      { id: 'read', name: 'Lire 10 pages', icon: '📖' },
      { id: 'journal', name: 'Journal', icon: '✏️' },
      { id: 'tidy', name: 'Rangement de 10 min', icon: '🧹' },
    ],
  },

  // Success
  success: {
    title: 'Troque le doomscrolling contre un fil qui te met en mouvement.',
    subtitle: 'Troque le doomscrolling contre un fil qui te met en mouvement.',
    outcomes: [
      'Commencer des tâches sans le combat mental',
      'Aller au bout de ce que tu as prévu',
      'Revenir sur les rails sans partir en vrille',
      'Te faire confiance pour vraiment faire les choses',
    ],
  },

  // Stakes
  stakes: {
    title: 'Parce que rester bloqué a un coût',
    body: 'Quand commencer est aussi difficile, les choses dérapent. Des échéances sont manquées, des opportunités passent, et tu commences à te sentir coincé dans une boucle d’évitement et de culpabilité. Doubly t’aide à briser ce cycle avant qu’une semaine de plus ne disparaisse.',
  },

  // Testimonials
  testimonials: {
    title: 'Les gens n’ont pas besoin de plus de pression sur la productivité',
    subtitle: 'Ils ont besoin d’aide pour se lancer.',
    items: [
      // Real App Store reviews, quoted verbatim. Only add entries that are actual
      // published reviews AND whose reviewer gave permission (Apple's rule; ask by
      // replying to the review in App Store Connect). The grid auto-adapts up to 3.
      {
        quote:
          'This app is the only one that actually got me to do things. I have very strong ADHD, and it made me concentrate on my tasks one by one to always know what’s coming ahead and make order in my day. Love it so much! Hope to see awesome upgrades soon 🙏🏻',
        name: 'Liorcic',
        label: 'Avis App Store',
      },
      {
        quote:
          'This has really helped me manage my workload, I haven’t seen anything like it. The walkthrough and set up is very intuitive, and the features make it worth it!',
        name: 'MinecraftrNinja',
        label: 'Avis App Store',
      },
      // Slot 3 — next permitted review goes here.
    ],
  },

  // FAQ
  faq: {
    title: 'Questions',
    items: [
      {
        q: 'Doubly, c’est seulement pour les personnes diagnostiquées TDAH ?',
        a: 'Non. Doubly est pour quiconque a du mal à démarrer, se sent débordé ou a l’esprit encombré. Tu n’as pas besoin d’un diagnostic, juste d’un cerveau qui se fige parfois quand il y a trop à faire.',
      },
      {
        q: 'En quoi est-ce différent d’une appli de to-do classique ?',
        a: 'Les applis de to-do t’aident à lister les choses. Doubly t’aide à vraiment les commencer. On se concentre sur la réduction de la résistance à l’initiation, cet écart entre savoir quoi faire et le faire, grâce aux vide-cerveaux, à la clarté d’une seule étape et à la responsabilisation.',
      },
      {
        q: 'Est-ce que ça aide spécifiquement à démarrer les tâches ?',
        a: 'Oui. C’est notre cœur de métier. Le vide-cerveau libère l’esprit encombré, la clarté de la prochaine étape choisit une action faisable, et les outils de responsabilisation t’aident à aller au bout. Chaque fonctionnalité est bâtie autour de ce premier pas.',
      },
      {
        q: 'Qu’est-ce qui rend la responsabilisation différente ici ?',
        a: 'Ce n’est pas du harcèlement ni des séries qui te font culpabiliser. Doubly utilise de doux points de suivi sociaux avec de vraies personnes qui tiennent à tes progrès, pour que tu aies quelqu’un dans ton camp, pas un robot qui te fait honte.',
      },
      {
        q: 'Est-ce que ça remplace les suivis d’habitudes ou les agendas ?',
        a: 'Ça peut. Mais Doubly ne cherche pas à être un couteau suisse. Il se concentre à fond sur une chose : t’aider à passer de bloqué à démarré. Si tu as besoin de planification de projet détaillée, associe-le à tes outils existants.',
      },
      {
        q: 'Est-ce que c’est bien si je me sens vite débordé ?',
        a: 'Surtout dans ce cas. Doubly ne te montre jamais tout d’un coup. Tu vois une seule prochaine étape, pas un mur de tâches. Toute l’expérience est pensée pour les cerveaux qui saturent vite.',
      },
    ],
  },

  // FinalCTA
  finalCta: {
    title: 'Ton cerveau n’a pas besoin de plus de pression',
    highlight: 'Il a besoin d’un moyen de commencer.',
    subtitle: 'Pour les esprits TDAH fatigués de trop réfléchir, d’éviter et de prendre du retard.',
    cta: 'Télécharger sur l’App Store',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    support: 'Assistance',
    copyright: (year: number) => `© ${year} Doubly. Conçu pour les cerveaux TDAH.`,
  },

  // StickyBar
  stickyBar: {
    cta: 'Débloque-toi maintenant',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | L’appli TDAH qui t’aide à commencer',
    description:
      'Vide le chaos, obtiens une seule prochaine étape claire, et utilise la responsabilisation pour vraiment aller au bout. Conçu pour les esprits TDAH qui ont besoin d’aide pour commencer, pas seulement pour planifier.',
    keywords: ['TDAH', 'productivité', 'vide-cerveau', 'gestion des tâches', 'responsabilisation', 'concentration'],
    ogTitle: 'Doubly | L’appli TDAH qui t’aide à commencer',
    ogDescription:
      'Vide le chaos, obtiens une seule prochaine étape claire, et utilise la responsabilisation pour vraiment aller au bout.',
  },
};

export default fr;
