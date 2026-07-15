const fr = {
  // Shared
  common: {
    tryInDoubly: 'Essaie-le dans Doubly',
    changeLanguage: 'Changer de langue',
    socialProof: (count: number) => `Rejoins ${count.toLocaleString('fr-FR')} personnes TDAH`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    tools: 'Outils',
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
    titleHighlight: 'désorganisé',
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
    titleHighlight: 'Garde les tâches.',
    replayDemo: 'Rejouer la démo',
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
    titleHighlight: 'te débloques',
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
    titleHighlight: 'se découper.',
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
    titleHighlight: 'te parle',
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
    imageAlt: 'Détail d’une publication Doubly montrant une tâche terminée avec des réactions et des commentaires de la communauté',
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
  // ToolsSection
  toolsSection: {
    title: 'Des outils TDAH gratuits à utiliser dès maintenant',
    subtitle: 'Pas d’inscription, pas de pop-ups. Ouvres-en un dans ton navigateur dès que tu bloques.',
    hot: 'Populaire',
    openTool: 'Ouvrir l’outil',
    browseAll: 'Voir tous les outils TDAH gratuits',
  },

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
    freeTools: 'Outils TDAH gratuits',
    tools: 'Outils',
    learn: 'Ressources',
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
  // Tool library card copy (title + description per tool).
  // Mirrors content/tools-i18n/${locale}/_index.json cards[] so the homepage grid and
  // the footer speak the visitor's language; kept in sync by scripts/check-tool-cards.mjs.
  toolCards: {
    'task-splitter': {
      title: 'Outil de découpage de tâches',
      description:
        'Écris une tâche que tu n’arrives pas à commencer. L’IA la découpe en petites étapes faisables, avec une durée estimée pour chacune. Pensé pour les cerveaux TDAH.',
    },
    'brain-dump': {
      title: 'Outil de vide-cerveau',
      description:
        'Vide tout ce que tu as en tête, l’IA en extrait uniquement les tâches actionnables. Sans inscription, rien n’est stocké.',
    },
    'pick-one': {
      title: 'Outil Choisis-en une',
      description:
        'Colle ta liste de tâches en vrac, repars avec une seule chose par où commencer. La plus petite, la plus intimidante, ou au hasard. Pour ces moments où dix tâches ressemblent à un seul bloc impossible à attaquer.',
    },
    'eisenhower-matrix': {
      title: 'Matrice d’Eisenhower (édition TDAH)',
      description:
        'Glisse tes tâches dans des quadrants du genre « ennuyeux mais important », au lieu des étiquettes de manuel. La matrice qui colle enfin à un cerveau TDAH. Tout est sauvegardé en local.',
    },
    'pomodoro': {
      title: 'Minuteur Pomodoro TDAH',
      description:
        '25 minutes de travail, 5 minutes de pause - la méthode de focus qui colle enfin à un cerveau TDAH. Gratuit, sans inscription, marche hors ligne.',
    },
    'visual-timer': {
      title: 'Minuteur visuel / horloge de cécité temporelle',
      description:
        'Une part de cadran qui se réduit, pour voir le temps passer au lieu de lire des chiffres. Fait aussi office d’horloge de cécité temporelle pour les adultes TDAH.',
    },
    'brown-noise': {
      title: 'Générateur de sons d’ambiance',
      description:
        'Générateur de sons d’ambiance gratuit, directement dans ton navigateur. Du bruit brun, mais aussi du rose et du blanc. Un fond sonore régulier pour apaiser un cerveau TDAH agité. Minuteur de veille inclus, marche hors ligne.',
    },
    'body-doubling-room': {
      title: 'Salle de body doubling',
      description:
        'Salle de focus gratuite à deux. Partage un lien, travaille côte à côte en vidéo pair-à-pair, avec un minuteur partagé. Sans inscription, sans installation.',
    },
    'hyperfocus-timer': {
      title: 'Minuteur d’interruption d’hyperfocus',
      description:
        'Des points de contrôle annoncés à voix haute toutes les X minutes et un arrêt net en option, pour qu’une session d’hyperfocus TDAH n’engloutisse pas tout ton après-midi.',
    },
  },

  toolWidgets: {
    taskSplitter: {
      inputLabel: 'Quelle tâche n’arrives-tu pas à commencer ?',
      inputPlaceholder: 'ex. Faire ma note de frais',
      submit: 'Découper',
      submitting: 'Découpage…',
      privacyNote: 'Privé. Rien n’est enregistré sur notre serveur.',
      charactersLeft: (count: number) =>
        `${count} caractère${count > 1 ? 's' : ''} restant${count > 1 ? 's' : ''}`,
      presetsIntro: 'Ou essaie l’une de celles-ci :',
      presets: {
        cleanKitchen: 'Nettoyer la cuisine',
        doLaundry: 'Faire la lessive',
        replyInbox: 'Répondre à mes e-mails',
        planWeekendTrip: 'Organiser un week-end',
        fileTaxes: 'Faire ma déclaration d’impôts',
        cleanBathroom: 'Nettoyer la salle de bain',
      },
      loading: 'Découpage en étapes…',
      errorRateLimit: 'Tu vas un peu vite. Attends un instant et réessaie.',
      errorGeneric: 'Impossible de découper ça pour le moment. Réessaie dans quelques secondes.',
      tryAgain: 'Réessayer',
      taskLabel: 'Tâche',
      urgencyLabels: { low: 'Urgence faible', medium: 'Urgence moyenne', high: 'Urgence élevée' },
      stepsDone: (done: number, total: number) => `${done}/${total} étapes faites`,
      minTotal: (min: number) => `~${min} min au total`,
      allDoneMessage: 'Et voilà. Ce n’était pas si terrible, hein ?',
      emptyState:
        'Impossible de trouver des sous-étapes claires pour celle-là. Essaie de la reformuler en action, comme « Écrire le plan du projet » ou « Nettoyer le garage ».',
    },
    brainDump: {
      label: 'Vide tout ce que tu as en tête. Pas besoin que ce soit rangé.',
      placeholder:
        'J’oublie sans arrêt d’appeler le dentiste et la cuisine est un chantier.\nLe projet au boulot me submerge. Je dois acheter de quoi dîner ce soir\net répondre au mail de Sarah de la semaine dernière.',
      privacy: 'Privé. Rien n’est enregistré sur notre serveur.',
      charactersLeft: (remaining: number) =>
        `${remaining} caractère${remaining > 1 ? 's' : ''} restant${remaining > 1 ? 's' : ''}.`,
      clear: 'Effacer',
      submit: 'Extraire les tâches',
      submitting: 'Extraction des tâches…',
      loading: 'Lecture de ton vide-cerveau et extraction du concret…',
      errorRateLimited: 'Tu vas un peu vite. Attends un instant et réessaie.',
      errorGeneric:
        'Impossible d’extraire les tâches pour le moment. Réessaie dans quelques secondes.',
      tryAgain: 'Réessayer',
      empty:
        'On n’a rien trouvé là-dedans qui ressemble à une tâche concrète. Ça peut être bon signe. Si tu vidais ton sac, ça compte. Si tu voulais lister des choses à faire, essaie d’être un peu plus précis (« envoyer un mail à Sarah » plutôt que « le truc de Sarah »).',
      resultsTitle: 'Tâches actionnables',
      doneCount: (done: number, total: number) => `${done}/${total} faites`,
      footer: 'Choisis-en une. Une seule. Fais-la maintenant, puis reviens pour la suivante.',
    },
    pickOne: {
      inputLabel: 'Colle ta liste. Une par ligne, ou en vrac avec des virgules. Peu importe.',
      inputPlaceholder:
        'répondre à maman\nprendre rendez-vous chez le dentiste\nfaire ma note de frais\nfinir la présentation\narroser les plantes',
      itemsDetected: (count: number) =>
        `${count} élément${count > 1 ? 's' : ''} détecté${count > 1 ? 's' : ''}`,
      itemsDetectedWithLeft: (count: number, left: number) =>
        `${count} élément${count > 1 ? 's' : ''} détecté${count > 1 ? 's' : ''}, ${left} restant${left > 1 ? 's' : ''}`,
      clearEverything: 'Tout effacer',
      modeLegend: 'On choisit comment ?',
      modes: {
        smallest: {
          label: 'La plus petite',
          reason: 'L’élément le plus court de la liste. Commence tout petit, prends de l’élan.',
        },
        scariest: {
          label: 'La plus flippante',
          reason:
            'Celle que tu préférerais ne pas regarder. La faire en premier libère ta journée.',
          noSignalReason:
            'Rien ici ne fait vraiment peur, et c’est déjà une bonne nouvelle. On en a pris une au hasard.',
        },
        random: {
          label: 'Choisis, c’est tout',
          reason: 'Zéro délibération. La liste a choisi pour toi. Lance-toi.',
        },
      },
      // Mots de la peur pour le mode « La plus flippante ». Comparés en
      // sous-chaîne à l’élément mis en minuscules : on privilégie donc les
      // racines courtes (« impôt » attrape « impôts », « dentiste » attrape
      // « prendre rendez-vous chez le dentiste »). Ce ne sont PAS les mots
      // anglais traduits : ce sont les institutions et les corvées que les
      // francophones évitent vraiment (urssaf, cpam, paperasse, relances).
      scaryWords: [
        'impôt',
        'impot',
        'urssaf',
        'cpam',
        'ameli',
        'sécu',
        'mutuelle',
        'assurance',
        'facture',
        'loyer',
        'dette',
        'crédit',
        'amende',
        'paperasse',
        'administrat',
        'démarche',
        'note de frais',
        'résili',
        'désabonn',
        'relanc',
        'échéance',
        'retard',
        'oubli',
        'repouss',
        'procrastin',
        'aurais dû',
        'aurais du',
        'dentiste',
        'médecin',
        'notaire',
        'huissier',
        'tribunal',
        'annul',
        'répondre',
        'repondre',
        'appeler',
        'excus',
        'confront',
        'patron',
        'rupture',
      ],
      pickCta: 'Choisis-en une pour moi',
      pickAnotherCta: 'Choisis-en une autre',
      emptyHint: 'Ajoute au moins un élément, puis tape sur choisir.',
      readyHint: 'C’est prêt. Tape « Choisis-en une pour moi » dès que tu n’arrives pas à décider.',
      allDoneTitle: 'Liste réglée.',
      allDoneBody:
        'Chaque élément est soit fait, soit passé. Tu peux effacer la liste, ou la réinitialiser pour remettre les éléments passés dans le lot.',
      bringSkippedBack: 'Remettre les passés',
      startFreshList: 'Repartir d’une liste vide',
      pickedEyebrow: 'Commence par celle-ci',
      didIt: 'C’est fait',
      notThisOne: 'Pas celle-ci',
      pickAgain: 'Rechoisir',
      progress: (done: number, skipped: number, left: number) =>
        `${done} faite${done > 1 ? 's' : ''}, ${skipped} passée${skipped > 1 ? 's' : ''}, ${left} restante${left > 1 ? 's' : ''}`,
    },
    eisenhower: {
      inputLabel: 'Ajouter une tâche',
      inputPlaceholder:
        'Ajoute une tâche et appuie sur entrée (ou colles-en plusieurs séparées par des sauts de ligne)',
      addButton: 'Ajouter',
      totals: (total: number, unsorted: number) =>
        `${total} tâche${total > 1 ? 's' : ''} au total, ${unsorted} non triée${unsorted > 1 ? 's' : ''}`,
      clearAll: 'Tout effacer',
      unsortedHeading: (count: number) => `Non triées (${count})`,
      unsortedListLabel: 'Tâches non triées',
      removeTask: (text: string) => `Supprimer ${text}`,
      placeHint: 'Tape maintenant sur un quadrant pour la placer.',
      placeHintDesktop: 'Ou fais un glisser-déposer sur ordinateur.',
      quadrantRegionLabel: (label: string) => `Quadrant ${label}`,
      quadrantCountLabel: (count: number, label: string) => `${count} tâches dans ${label}`,
      dropHere: 'Dépose ici',
      sendBackToUnsorted: 'Renvoyer dans les non triées',
      moveBackToUnsorted: (text: string) => `Renvoyer ${text} dans les non triées`,
      empty: 'Vide',
      emptyState:
        'Ajoute une tâche ci-dessus pour commencer. Tout est enregistré dans ton navigateur, rien sur notre serveur.',
      hintLabel: 'Astuce Doubly :',
      hintBody:
        'La pile « ennuyeux mais important » est celle que la plupart des gens sautent, et celle qu’ils regrettent le plus d’avoir sautée. Si tu ne fais qu’une seule chose aujourd’hui, prends-la là.',
      quadrants: {
        fire: {
          label: 'Ça brûle',
          sub: 'À faire aujourd’hui, pas demain.',
          textbook: 'Important + Urgent',
        },
        boring: {
          label: 'Ennuyeux mais important',
          sub: 'Les vraies victoires. Planifie-les, ne les saute pas.',
          textbook: 'Important + Non urgent',
        },
        noisy: {
          label: 'Bruyant mais évitable',
          sub: 'Ça fait du bruit, mais ce n’est pas ton problème. Délègue, reporte, ignore.',
          textbook: 'Urgent + Non important',
        },
        drop: {
          label: 'À laisser tomber',
          sub: 'Tu as le droit. La liste n’a pas à être finie.',
          textbook: 'Non important + Non urgent',
        },
      },
    },
    pomodoro: {
      timerLabel: 'Minuteur Pomodoro',
      modeTablistLabel: 'Mode du minuteur',
      modes: {
        work: 'Focus',
        'short-break': 'Pause courte',
        'long-break': 'Pause longue',
      },
      dialLabel: (mode: string, time: string) => `Minuteur ${mode}. Il reste ${time}.`,
      sessionsToday: (count: number) => `Sessions terminées aujourd’hui : ${count}`,
      soundToggle: 'Son en fin de session',
      customizeDurations: 'Personnaliser les durées',
      hideSettings: 'Masquer les réglages',
      focusMinutes: 'Focus (min)',
      shortBreakMinutes: 'Pause courte (min)',
      longBreakMinutes: 'Pause longue (min)',
      documentTitle: (time: string, mode: string) => `${time} | ${mode} | Doubly`,
    },
    visualTimer: {
      ariaLabel: 'Minuteur visuel à rebours',
      dialAriaLabel: (remaining: string) => `Cadran du minuteur visuel. Il reste ${remaining}.`,
      seconds: (s: number) => `${s} seconde${s > 1 ? 's' : ''}`,
      minutes: (m: number) => `${m} minute${m > 1 ? 's' : ''}`,
      minutesAndSeconds: (m: number, s: number) =>
        `${m} minute${m > 1 ? 's' : ''} ${s} seconde${s > 1 ? 's' : ''}`,
      documentTitle: (time: string) => `${time} | Doubly`,
      countingDown: (minutes: number) => `Compte à rebours depuis ${minutes} min`,
      setFor: (minutes: number) => `Réglé sur ${minutes} min`,
      paused: 'En pause',
      timeIsUp: 'Temps écoulé',
      presetsLabel: 'Durées prédéfinies',
      presetMinutes: (minutes: number) => `${minutes} min`,
      custom: 'Perso',
      minutesLabel: 'Minutes',
      set: 'Régler',
      soundWhenDone: 'Son quand le temps est écoulé',
    },
    brownNoise: {
      play: (sound: string) => `Lancer ${sound}`,
      pause: (sound: string) => `Mettre ${sound} en pause`,
      documentTitle: (sound: string) => `▶ ${sound} · Doubly`,
      chooseSound: 'Choisis un son d’ambiance',
      soundGroupLabel: 'Son d’ambiance',
      volume: 'Volume',
      volumePercent: (percent: number) => `${percent} %`,
      sleepTimer: 'Minuteur de veille',
      sleepOff: 'Désactivé',
      sleepMinutes: (minutes: number) => `${minutes} min`,
      privacyNote: 'Tout tourne dans ton navigateur. Rien n’est enregistré, rien n’est envoyé.',
      sounds: {
        brown: {
          name: 'Brun',
          description: 'Grave, sourd. Comme une cascade lointaine. Celui de TikTok.',
        },
        pink: {
          name: 'Rose',
          description: 'Plus doux que le blanc, moins grave que le brun. Équilibré.',
        },
        white: {
          name: 'Blanc',
          description: 'Le souffle d’une vieille télé. Clair et régulier.',
        },
      },
    },
    hyperfocus: {
      ariaLabel: 'Minuteur d’interruption d’hyperfocus',

      // Durées. Chaque formulation vit ici pour que la langue choisisse ses
      // pluriels, ses unités et son ordre des mots.
      minutesShort: (minutes: number) => `${minutes} min`,
      hoursShort: (hours: number) => `${hours} h`,
      hoursMinutesShort: (hours: number, minutes: number) => `${hours} h ${minutes} min`,
      durationLong: (hours: number, minutes: number) => {
        if (hours === 0 && minutes === 0) return 'moins d’une minute';
        const parts: string[] = [];
        if (hours > 0) parts.push(`${hours} heure${hours > 1 ? 's' : ''}`);
        if (minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
        return parts.join(' et ');
      },

      // Bandeau de session. Le texte entre ** est mis en évidence.
      stripNoCap: (interval: string) => `Point toutes les ${interval}, sans arrêt net`,
      stripWithCap: (interval: string, cap: string) =>
        `Point toutes les ${interval}, arrêt net après ${cap}`,
      summaryNoCap: (interval: string) =>
        `Un point de contrôle toutes les **${interval}**, sans arrêt net.`,
      summaryWithCap: (interval: string, cap: string) =>
        `Un point de contrôle toutes les **${interval}**, avec un arrêt net après **${cap}**.`,

      // Réglages
      intervalHeading: 'Point de contrôle toutes les',
      custom: 'Perso',
      minutes: 'Minutes',
      set: 'Régler',
      jitterNote:
        'Les points de contrôle sont décalés d’environ dix pour cent, pour que le cerveau ne puisse pas les balayer d’avance.',
      moreOptions: 'Plus d’options',
      hideOptions: 'Masquer les options',
      taskLabel: 'Sur quoi travailles-tu ? (facultatif)',
      taskPlaceholder: 'ex. la déclaration d’impôts, la revue de design, le script',
      taskHint:
        'Utilisé dans les points de contrôle parlés, pour que tu entendes ce que tu t’étais fixé.',
      hardStopHeading: 'Arrêt net après',
      hardStopHint:
        'Une alerte plus forte se déclenche une fois la limite atteinte, pour qu’une spirale de six heures ne passe pas inaperçue.',
      capOff: 'Désactivé',
      capHours: (hours: number) => `${hours} h`,
      noHardStop: 'sans arrêt net',
      alertsHeading: 'Alertes',
      chime: 'Carillon',
      voice: 'Voix',
      notify: 'Notification',
      alertsHint:
        'Le carillon monte en volume si un point de contrôle est ignoré. La voix annonce l’heure et le temps écoulé. La notification s’affiche dans le navigateur quand l’onglet est en arrière-plan.',
      notificationsBlocked:
        'Les notifications sont bloquées dans ce navigateur. Active-les dans les réglages du site pour t’en servir.',
      notificationsUnsupported: 'Ton navigateur ne prend pas en charge les notifications web.',
      startSession: 'Démarrer la session',

      // Session en cours
      statElapsed: 'Écoulé',
      statNextCheckIn: 'Prochain point',
      statCap: 'Limite',
      statusNow: 'Maintenant',
      statusPaused: 'En pause',
      statusCapHit: 'Limite atteinte',
      statusOff: 'Désactivé',
      workingOn: (task: string) => `Tu travailles sur **${task}**`,
      checkInHeading: 'Petit point de contrôle',
      checkInBody: (clock: string, elapsed: string) =>
        `Il est ${clock} et tu es dessus depuis ${elapsed}. Tu es toujours sur la tâche que tu avais commencée, ou il est temps de refaire surface ?`,
      stillGoing: 'Je continue',
      takeABreak: 'Faire une pause',
      stopSession: 'Arrêter la session',
      capHeading: 'Limite de session atteinte',
      capBody: (minutes: number) =>
        `Tu avais fixé un arrêt net à ${minutes} minutes. Lève-toi, bois de l’eau, mange un truc. Le travail sera toujours là.`,
      pause: 'Pause',
      resume: 'Reprendre',
      endSession: 'Terminer la session',
      checkInLog: 'Journal des points de contrôle',
      logContinue: 'a continué',
      logBreak: 'a fait une pause',
      logStop: 'a arrêté',

      // Titre de l’onglet quand un point de contrôle attend en arrière-plan.
      tabAlert: '⚠ Point de contrôle | Doubly',

      // Lu à voix haute (SpeechSynthesis) et envoyé en notification système.
      checkInSpeech: (clock: string, elapsed: string, task: string) =>
        task
          ? `Petit point. Il est ${clock}. Tu travailles sur ${task} depuis ${elapsed}.`
          : `Petit point. Il est ${clock}. Tu travailles depuis ${elapsed}.`,
      capSpeech: (clock: string, elapsed: string) =>
        `Limite de session atteinte. Il est ${clock}. Tu es dessus depuis ${elapsed}. Il est temps d’arrêter.`,
      notificationCheckInTitle: 'Point de contrôle hyperfocus',
      notificationCheckInBody: (clock: string, elapsed: string) =>
        `Il est ${clock}. Tu es dessus depuis ${elapsed}.`,
      notificationCapTitle: 'Limite d’hyperfocus atteinte',
      notificationCapBody: (clock: string, elapsed: string) =>
        `Il est ${clock}. Tu es dessus depuis ${elapsed}. Il est temps d’arrêter.`,
    },
    shared: {
      start: 'Démarrer',
      pause: 'Pause',
      resume: 'Reprendre',
      done: 'Terminé',
      reset: 'Réinitialiser',
      skip: 'Passer',
      skipAria: 'Passer à la session suivante',
      startSession: 'Démarrer une session de focus',
      creatingRoom: 'Création de la salle...',
    },
    chrome: {
      tryInApp: 'Essaie-le dans l’appli',
      appStoreAria: (label: string) => `${label} sur l’App Store`,
      breadcrumbAria: 'Fil d’Ariane',
    },
  },

  // La salle de body doubling en direct, sur /r/[id].
  //
  // Contrairement au reste du fichier, cette section n’est pas choisie par
  // l’URL : la langue est résolue pour chaque personne à partir de son propre
  // Accept-Language. Les deux participants peuvent donc lire la même salle dans
  // deux langues différentes. Ne jamais écrire une phrase qui suppose le
  // contraire.
  room: {
    join: {
      titleFirst: 'Lance une session de focus',
      titleJoin: 'Rejoins la session de focus',
      subtitleFirst:
        'Choisis ton prénom et la durée. Tu pourras partager le lien d’invitation une fois à l’intérieur.',
      subtitleJoin: 'Choisis ton prénom et entre. Le minuteur est déjà réglé par l’hôte.',
      nameLabel: 'Ton prénom',
      namePlaceholder: 'Camille',
      avatarLabel: 'Choisis un avatar',
      avatarChooseAria: (emoji: string) => `Choisir l’avatar ${emoji}`,
      durationLabel: 'Durée de la session',
      minutes: (n: number) => `${n} min`,
      permissionNote:
        'L’écran suivant demande l’accès à la caméra et au micro. Les deux sont facultatifs. Si tu passes, tu entres avec une tuile fantôme et l’autre personne voit quand même que tu es là.',
      createCta: 'Créer la salle',
      joinCta: 'Rejoindre la salle',
    },
    header: {
      eyebrow: 'Salle de body doubling',
      withPeer: (name: string) => `Toi et ${name}`,
      waiting: 'En attente de ton binôme',
      copyInvite: 'Copier le lien d’invitation',
      linkCopied: 'Lien copié',
    },
    full: {
      title: 'La salle est pleine',
      body: 'Une salle de body doubling accueille deux personnes. Bonne nouvelle : en ouvrir une autre prend un clic.',
      cta: 'Ouvrir une nouvelle salle',
    },
    phases: {
      waiting: {
        eyebrow: 'Étape 0 sur 3',
        title: 'Partage ton lien',
        body: 'Envoie l’adresse de la page à une personne. La session démarre dès qu’elle arrive.',
      },
      intro: {
        eyebrow: 'Étape 1 sur 3 · Intro',
        title: 'Dis bonjour et annonce ce que tu vas faire',
        titleWithPeer: (name: string) => `Fais coucou à ${name}`,
        body: 'Prends 60 secondes. Caméra allumée, une phrase chacun. Dire son objectif à voix haute, c’est ce qui le rend réel.',
        cta: 'Démarrer le focus',
      },
      focus: {
        eyebrow: 'Étape 2 sur 3 · Focus',
        title: 'Tête baissée. Vous travaillez ensemble, en silence.',
        body: 'Micro allumé ou coupé, les deux marchent. Le vrai truc, c’est que l’autre soit là.',
        cta: 'Arrêter le focus maintenant',
      },
      wrapUp: {
        eyebrow: 'Étape 3 sur 3 · Bilan',
        title: 'Partage une victoire et une chose qui a coincé',
        body: 'Un petit bilan à voix haute ancre ce que tu viens de faire et rend la prochaine session plus facile à lancer.',
        cta: 'Terminer la session',
      },
      done: {
        eyebrow: 'Session terminée',
        title: 'Bien joué. Tu étais là.',
        body: 'Ça compte. Reste pour une autre, ou ferme l’onglet et va te faire du bien.',
        runAnother: 'En relancer une',
      },
    },
    tiles: {
      you: (name: string) => `${name} (toi)`,
      peerFallbackName: 'En attente',
      waitingForPartner: 'En attente de ton binôme...',
      micMuted: 'Micro coupé',
      goalPlaceholderIntro: 'Ce sur quoi je vais bosser...',
      goalPlaceholderFocus: 'Ce sur quoi je bosse',
      reflectionPlaceholder: 'Une victoire ou un blocage...',
      peerNoGoal: 'Pas encore d’objectif',
      peerNoReflection: 'En attente de son bilan',
      empty: '—',
    },
    controls: {
      muteMic: 'Couper le micro',
      unmuteMic: 'Activer le micro',
      micUnavailable: 'Micro indisponible',
      muteTitle: 'Couper',
      unmuteTitle: 'Activer',
      micBlockedTitle: 'Micro bloqué ou indisponible',
      camOff: 'Couper la caméra',
      camOn: 'Activer la caméra',
      camUnavailable: 'Caméra indisponible',
      stopVideoTitle: 'Couper la vidéo',
      startVideoTitle: 'Activer la vidéo',
      camBlockedTitle: 'Caméra bloquée ou indisponible',
      startTimer: 'Démarrer le minuteur',
      pauseTimer: 'Mettre le minuteur en pause',
      leave: 'Quitter',
      retry: 'Réessayer',
    },
    reactions: {
      groupAria: 'Envoyer une réaction',
      sendAria: (emoji: string) => `Envoyer la réaction ${emoji}`,
    },
    status: {
      peerLeft: 'Ton binôme a quitté la salle.',
      shareToUnlock:
        'Partage le lien d’invitation pour faire venir quelqu’un. La session démarre dès son arrivée.',
      upNext: (minutes: number) => `Ensuite : ${minutes} min de focus`,
      planOnArrival: (minutes: number) =>
        `Au programme : ${minutes} min de focus dès que ton binôme arrive`,
      wrapUpBreath: 'Respire un coup. Le minuteur est en pause.',
      timerAria: (remaining: string) => `Minuteur, il reste ${remaining}`,
    },
    errors: {
      p2pBlocked:
        'Connexion impossible. Ton réseau bloque peut-être les connexions pair-à-pair. Essaie un autre réseau.',
      mediaUnavailable: 'Caméra et micro indisponibles.',
    },
  },

};

export default fr;
