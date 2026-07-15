const es = {
  // Shared
  common: {
    tryInDoubly: 'Pruébalo en Doubly',
    changeLanguage: 'Cambiar idioma',
    socialProof: (count: number) => `Únete a ${count.toLocaleString('es-ES')} personas con TDAH`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    tools: 'Herramientas',
    howItWorks: 'Cómo funciona',
    features: 'Funciones',
    testimonials: 'Testimonios',
    faq: 'Preguntas',
    cta: 'Consigue Doubly',
    toggleMenu: 'Alternar menú',
  },

  // Hero
  hero: {
    badge: 'Hecho para cerebros con TDAH',
    titlePrefix: 'Cuando tu cerebro tiene ',
    titleHighlight: '47 pestañas abiertas',
    subtitle: 'Convierte el caos en un siguiente paso claro en menos de un minuto.',
    cta: 'Descárgala en la App Store',
    secondaryCta: 'Mira cómo divide una tarea ↓',
    android: {
      prompt: '¿Usas Android?',
      placeholder: 'tu@email.com',
      submit: 'Avísame',
      success: 'Ya estás en la lista. Te enviaremos un correo cuando Doubly llegue a Android.',
      invalid: 'Introduce un correo válido.',
      error: 'Algo salió mal. Inténtalo de nuevo.',
    },
    floatingCards: {
      brainDump: 'Volcado mental',
      habits: 'Hábitos',
      accountability: 'Responsabilidad compartida',
    },
    phone: {
      screenAlt: 'La app Doubly mostrando tus hábitos con rachas diarias y cuadrículas de progreso',
    },
  },

  // Problem
  problem: {
    title: 'El TDAH no es solo ser desorganizado',
    titleHighlight: 'desorganizado',
    subtitle:
      'Es una batalla diaria con un cerebro que no coopera con tus propias intenciones.',
    cards: [
      {
        type: 'External',
        title: 'Demasiadas tareas. Demasiados pensamientos.',
        body: 'Ningún lugar claro por dónde empezar.',
      },
      {
        type: 'Internal',
        title: 'Sabes qué hacer, pero aún así no puedes empezar.',
        body: 'No es pereza. Es resistencia a iniciar.',
      },
      {
        type: 'Philosophical',
        title: 'No debería costar tanto empezar.',
        body: 'Tu cerebro funciona diferente. Tus herramientas también deberían.',
      },
      {
        type: 'Stakes',
        title: 'Y te está costando más que tiempo.',
        body: 'Las cosas se acumulan. Te quedas atrás. Empiezas a perder la confianza en ti mismo.',
      },
    ],
  },

  // VisualProblem
  visualProblem: {
    cards: [
      { image: '/problem-1.jpg', alt: 'Demasiadas tareas. Demasiados pensamientos.' },
      { image: '/problem-2.jpg', alt: 'Sabes qué hacer, pero aún así no puedes empezar.' },
      { image: '/problem-4.jpg', alt: 'No debería costar tanto empezar cosas normales.' },
      { image: '/problem-3.jpg', alt: 'Y te está costando más que tiempo.' },
    ],
  },

  // Guide
  guide: {
    title: 'Hecho específicamente para cerebros con TDAH a los que les cuesta empezar',
    subtitle:
      'La mayoría de las apps de productividad asumen que tu cerebro está listo para planear. Doubly está hecha para el momento en que estás abrumado, bloqueado o evitando, basándose en cómo funciona realmente el TDAH.',
    proofPoints: [
      'Hecho para la fricción del TDAH, no para la productividad genérica',
      'Ayuda a reducir la resistencia a iniciar',
      'Da estructura sin abrumarte',
    ],
    mockup: {
      brainDump: 'Volcado mental',
      items: ['llamar al dentista', 'comprar comida', 'responder al jefe', 'lavar la ropa', 'por qué estoy tan cansado'],
      yourNextStep: 'Tu siguiente paso',
      nextStepTask: 'Meter la ropa en la lavadora',
      nextStepMeta: '~5 min · poca energía',
      accountability: 'Responsabilidad compartida',
      accountabilityText: 'Sarah te escribe a las 3pm',
    },
  },

  // BrainDumpDemo
  brainDumpDemo: {
    title: 'Suelta el caos. Quédate con las tareas.',
    titleHighlight: 'Quédate con las tareas.',
    replayDemo: 'Repetir demo',
    subtitle:
      '¿Cabeza llena? Escribe durante 20 segundos. Doubly extrae lo accionable y descarta el ruido.',
    dumpText:
      'Abro mi portátil para ser productivo y en cinco segundos mi cerebro dice: responde ese mensaje, pide vitaminas, limpia el fregadero, busca el cargador, come algo, y también acuérdate de esa tarea súper importante que definitivamente no ibas a olvidar. Que olvidé de inmediato.',
    brainDumpLabel: 'Volcado mental',
    brainDumpPlaceholder: 'Solo suéltalo todo...',
    extractedTasksLabel: 'Tareas extraídas',
    listening: 'Escuchando...',
    tasksFound: (count: number) => `${count} tarea${count > 1 ? 's' : ''} encontrada${count > 1 ? 's' : ''}`,
    filterNote: 'Pensamientos no accionables filtrados. Solo se quedan las tareas reales.',
    tasks: [
      { text: '💊 Pedir vitaminas', phrase: 'pide vitaminas' },
      { text: '🧽 Limpiar el fregadero', phrase: 'limpia el fregadero' },
      { text: '🔌 Buscar el cargador', phrase: 'busca el cargador' },
      { text: '🍽️ Comer algo', phrase: 'come algo' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: 'Así te desbloqueas',
    titleHighlight: 'te desbloqueas',
    subtitle: 'Cuatro pasos simples. Sin configuración complicada. Sin curva de aprendizaje.',
    stepLabel: 'PASO',
    steps: [
      {
        number: '01',
        title: 'Vacía tu mente',
        body: 'Captura pensamientos, tareas y desorden mental rápido. Sin necesidad de organizar. Solo suéltalo.',
      },
      {
        number: '02',
        title: 'Consigue un siguiente paso claro',
        body: 'Doubly convierte el agobio en algo que sí puedes empezar. No diez prioridades. Una.',
      },
      {
        number: '03',
        title: 'Mantén el impulso',
        body: 'Usa responsabilidad compartida, temporizadores y herramientas de progreso para seguir, incluso cuando la motivación se apaga.',
      },
      {
        number: '04',
        title: 'Hazte responsable',
        body: 'Comparte con amigos en el feed de Doubly. La responsabilidad real ocurre cuando alguien te está animando.',
      },
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: 'Escribe una tarea. Mira cómo se divide.',
    titleHighlight: 'se divide.',
    subtitle:
      'Las tareas grandes parecen imposibles. Doubly las divide en pasos de 2 a 5 minutos para que simplemente empieces.',
    customInputPlaceholder: 'O escribe tu propia tarea...',
    splitButton: 'Divídela',
    taskLabel: 'Tarea',
    aiThinking: 'La IA la está desglosando...',
    errorMessage: 'No se pudo conectar con la IA ahora mismo. Prueba una opción de arriba o inténtalo de nuevo.',
    tryAgain: 'Inténtalo de nuevo',
    stepsDone: (done: number, total: number) => `${done}/${total} pasos hechos`,
    minTotal: (min: number) => `~${min} min en total`,
    urgencySuffix: 'urgencia',
    urgencyLabels: { low: 'Urgencia baja', medium: 'Urgencia media', high: 'Urgencia alta' },
    allDoneMessage: 'Todo listo. No fue tan difícil, ¿verdad?',
    allDoneDescription:
      'Doubly hace esto con cada tarea que le lances. Se acabó mirar fijamente una lista de pendientes gigante.',
    allDoneCta: 'Desbloquéate ahora',
    presets: [
      { label: 'Limpiar la cocina', icon: '🍳' },
      { label: 'Lavar la ropa', icon: '🧰' },
      { label: 'Preparar la cena', icon: '🍲' },
      { label: 'Limpiar el baño', icon: '🚿' },
      { label: 'Organizar el dormitorio', icon: '🛏️' },
      { label: 'Hacer las compras', icon: '🛒' },
    ],
    presetResults: {
      'Limpiar la cocina': {
        title: '🍳 Limpiar la cocina',
        subtasks: [
          { text: 'Despeja las encimeras y guarda las cosas', duration: '3 minutos' },
          { text: 'Mete los platos sucios en el lavavajillas', duration: '5 minutos' },
          { text: 'Limpia las encimeras y los fogones', duration: '4 minutos' },
          { text: 'Friega el fregadero', duration: '2 minutos' },
          { text: 'Barre el suelo', duration: '3 minutos' },
          { text: 'Saca la basura', duration: '2 minutos' },
        ],
        urgency: 'medium',
      },
      'Lavar la ropa': {
        title: '🧰 Lavar la ropa',
        subtasks: [
          { text: 'Reúne la ropa sucia de toda la casa', duration: '5 minutos' },
          { text: 'Sepárala en blancos, colores y delicados', duration: '3 minutos' },
          { text: 'Mete la primera tanda en la lavadora', duration: '2 minutos' },
          { text: 'Tiende o dobla la ropa seca de la última tanda', duration: '10 minutos' },
          { text: 'Guarda la ropa doblada en cajones/armario', duration: '5 minutos' },
        ],
        urgency: null,
      },
      'Preparar la cena': {
        title: '🍲 Preparar la cena',
        subtasks: [
          { text: 'Decide qué preparar y revisa los ingredientes', duration: '3 minutos' },
          { text: 'Lava y prepara las verduras', duration: '8 minutos' },
          { text: 'Empieza a cocinar el plato principal', duration: '15 minutos' },
          { text: 'Prepara la guarnición o ensalada', duration: '7 minutos' },
          { text: 'Pon la mesa', duration: '2 minutos' },
          { text: 'Emplata y sirve', duration: '2 minutos' },
        ],
        urgency: 'low',
      },
      'Limpiar el baño': {
        title: '🚿 Limpiar el baño',
        subtasks: [
          { text: 'Rocía limpiador en la ducha, el lavabo y el inodoro', duration: '2 minutos' },
          { text: 'Friega la taza del inodoro y limpia la tapa', duration: '3 minutos' },
          { text: 'Limpia el lavabo y el grifo', duration: '2 minutos' },
          { text: 'Limpia el espejo', duration: '1 minuto' },
          { text: 'Friega la ducha/bañera', duration: '5 minutos' },
          { text: 'Friega o limpia el suelo', duration: '3 minutos' },
          { text: 'Cambia las toallas y repón el papel higiénico', duration: '2 minutos' },
        ],
        urgency: 'medium',
      },
      'Organizar el dormitorio': {
        title: '🛏️ Organizar el dormitorio',
        subtasks: [
          { text: 'Haz la cama y coloca las almohadas', duration: '3 minutos' },
          { text: 'Recoge la ropa del suelo y las sillas', duration: '4 minutos' },
          { text: 'Pon la ropa sucia en el cesto y guarda la limpia', duration: '5 minutos' },
          { text: 'Despeja y ordena la mesita de noche', duration: '3 minutos' },
          { text: 'Quita el polvo de las superficies', duration: '3 minutos' },
          { text: 'Aspira o barre el suelo', duration: '4 minutos' },
        ],
        urgency: 'low',
      },
      'Hacer las compras': {
        title: '🛒 Hacer las compras',
        subtasks: [
          { text: 'Revisa la nevera y la despensa para ver qué necesitas', duration: '5 minutos' },
          { text: 'Escribe una lista agrupada por pasillo', duration: '5 minutos' },
          { text: 'Coge las bolsas reutilizables', duration: '1 minuto' },
          { text: 'Compra y ve marcando los artículos', duration: '30 minutos' },
          { text: 'Desempaca y guarda la compra', duration: '10 minutos' },
        ],
        urgency: null,
      },
    },
  },

  // TwoQuestions
  twoQuestions: {
    title: '¿Te suena familiar?',
    titleHighlight: 'familiar?',
    subtitle: 'No eres perezoso. Tu cerebro solo necesita un punto de partida diferente.',
    withoutDoubly: 'Sin Doubly',
    withDoubly: 'Con Doubly',
    rows: [
      {
        without: 'Me bloqueo y no sé por dónde empezar',
        with: 'Volcado mental → aparece un siguiente paso claro',
      },
      {
        without: 'Hago tareas pequeñas al azar en su lugar',
        with: 'Doubly saca a la luz lo que de verdad importa primero',
      },
      {
        without: 'Empiezo 5 cosas a la vez',
        with: 'Una tarea en pantalla. Termínala, y luego la siguiente.',
      },
      {
        without: 'Le doy demasiadas vueltas al plan perfecto',
        with: 'Suéltalo todo, Doubly elige el primer paso',
      },
      {
        without: 'Lo evito hasta que se vuelve urgente, y entonces entro en pánico',
        with: 'Empiezas antes de que llegue el pánico',
      },
      {
        without: 'Trabajo solo y pierdo el impulso rápido',
        with: 'El acompañamiento y los compañeros de responsabilidad te mantienen en marcha',
      },
    ],
    questionTitle: '¿Qué es lo que más necesitas en ese momento?',
    options: [
      'Un volcado mental',
      'Un pequeño siguiente paso',
      'Responsabilidad compartida',
      'Un temporizador / empujón de enfoque',
      'Un reinicio cuando me atraso',
    ],
    responseIntro: 'Justo ahí es donde Doubly ayuda.',
    responses: {
      'Un volcado mental': {
        title: 'Volcado mental → claridad instantánea',
        description:
          'Escribe el caos. Doubly extrae lo accionable y descarta el ruido.',
      },
      'Un pequeño siguiente paso': {
        title: 'El siguiente paso, siempre listo',
        description:
          'Doubly desglosa las tareas grandes y te da solo el siguiente pequeño movimiento. Sin agobios.',
      },
      'Responsabilidad compartida': {
        title: 'Seguimientos de responsabilidad',
        description:
          'Recordatorios suaves y responsabilidad social te ayudan a seguir el ritmo sin culpa.',
      },
      'Un temporizador / empujón de enfoque': {
        title: 'Modo enfoque',
        description:
          'Una tarea en pantalla, un temporizador corriendo, sin distracciones. Solo tú y el trabajo.',
      },
      'Un reinicio cuando me atraso': {
        title: 'Empezar de cero, sin culpa',
        description:
          '¿Te desviaste? Doubly reorganiza tu plan para que retomes sin caer en la espiral de vergüenza.',
      },
    },
    mockupNextStep: 'Tu siguiente paso está listo',
    mockupTask: 'Empieza con una cosa pequeña',
    mockupCta: 'Prueba Doubly',
  },


  // HabitDemo
  habitDemo: {
    title: 'Crea hábitos que de verdad se mantienen',
    subtitle:
      'Sin rachas que romper. Sin culpa. Solo toca cuando lo haces. Doubly registra el patrón para que veas tu progreso.',
    todayLabel: 'Hoy',
    yourHabits: 'Tus hábitos',
    weeksLabel: '12 semanas',
    lessLabel: 'Menos',
    moreLabel: 'Más',
    currentStreak: 'Racha actual',
    bestStreak: 'Mejor racha',
    completion: 'Cumplimiento',
    allDoneMessage: '¡Todos los hábitos hechos por hoy!',
    allDoneDescription: 'Imagina esto cada día. Doubly hace fácil seguir adelante.',
    allDoneCta: 'Desbloquéate ahora',
    habits: [
      { id: 'walk', name: 'Salir a caminar', icon: '🚶' },
      { id: 'read', name: 'Leer 10 páginas', icon: '📖' },
      { id: 'journal', name: 'Escribir en el diario', icon: '✏️' },
      { id: 'tidy', name: 'Ordenar 10 min', icon: '🧹' },
    ],
  },

  // Success
  success: {
    title: 'Cambia el doomscrolling por un feed que te pone en marcha.',
    imageAlt: 'Detalle de una publicación en Doubly que muestra una tarea completada con reacciones y comentarios de la comunidad',
    subtitle: 'Cambia el doomscrolling por un feed que te pone en marcha.',
    outcomes: [
      'Empezar tareas sin la lucha mental',
      'Cumplir con lo que planeaste',
      'Retomar el rumbo sin caer en espiral',
      'Confiar en que de verdad harás las cosas',
    ],
  },

  // Stakes
  stakes: {
    title: 'Porque quedarse bloqueado tiene un costo',
    body: 'Cuando empezar cuesta tanto, las cosas se escapan. Se pasan las fechas límite, las oportunidades desaparecen y empiezas a sentirte atrapado en un bucle de evitación y culpa. Doubly te ayuda a romper ese ciclo antes de que se esfume otra semana.',
  },

  // Testimonials
  testimonials: {
    title: 'La gente no necesita más presión de productividad',
    subtitle: 'Necesita ayuda para empezar.',
    items: [
      // Real App Store reviews, quoted verbatim. Only add entries that are actual
      // published reviews AND whose reviewer gave permission (Apple's rule; ask by
      // replying to the review in App Store Connect). The grid auto-adapts up to 3.
      {
        quote:
          'This app is the only one that actually got me to do things. I have very strong ADHD, and it made me concentrate on my tasks one by one to always know what’s coming ahead and make order in my day. Love it so much! Hope to see awesome upgrades soon 🙏🏻',
        name: 'Liorcic',
        label: 'Reseña de la App Store',
      },
      {
        quote:
          'This has really helped me manage my workload, I haven’t seen anything like it. The walkthrough and set up is very intuitive, and the features make it worth it!',
        name: 'MinecraftrNinja',
        label: 'Reseña de la App Store',
      },
      // Slot 3 — next permitted review goes here.
    ],
  },

  // FAQ
  // ToolsSection
  toolsSection: {
    title: 'Herramientas gratis para el TDAH que puedes usar ahora mismo',
    subtitle: 'Sin registro ni ventanas emergentes. Abre una en tu navegador en cuanto te quedes bloqueado.',
    hot: 'Popular',
    openTool: 'Abrir herramienta',
    browseAll: 'Ver todas las herramientas gratis para el TDAH',
  },

  faq: {
    title: 'Preguntas',
    items: [
      {
        q: '¿Doubly es solo para personas diagnosticadas con TDAH?',
        a: 'No. Doubly es para cualquiera que tenga problemas para empezar, se sienta abrumado o tenga desorden mental. No necesitas un diagnóstico, solo un cerebro que a veces se bloquea cuando hay demasiado que hacer.',
      },
      {
        q: '¿En qué se diferencia de una app de tareas normal?',
        a: 'Las apps de tareas te ayudan a hacer listas. Doubly te ayuda a empezarlas de verdad. Nos enfocamos en reducir la resistencia a iniciar, esa brecha entre saber qué hacer y hacerlo, con volcados mentales, claridad de un solo paso y responsabilidad compartida.',
      },
      {
        q: '¿Ayuda específicamente con el inicio de tareas?',
        a: 'Sí. Ese es nuestro foco principal. El volcado mental despeja el desorden mental, la claridad del siguiente paso elige una acción realizable y las herramientas de responsabilidad te ayudan a cumplir. Cada función está construida en torno a ese primer paso.',
      },
      {
        q: '¿Qué hace diferente la responsabilidad compartida aquí?',
        a: 'No son regaños ni rachas que te hacen sentir culpable. Doubly usa seguimientos sociales suaves con personas reales que se preocupan por tu progreso, así tienes a alguien de tu lado, no a un robot avergonzándote.',
      },
      {
        q: '¿Reemplaza a los registradores de hábitos o las agendas?',
        a: 'Puede hacerlo. Pero Doubly no intenta ser una navaja suiza. Está totalmente enfocada en ayudarte a pasar de bloqueado a en marcha. Si necesitas planificación detallada de proyectos, combínala con tus herramientas actuales.',
      },
      {
        q: '¿Es buena si me abrumo con facilidad?',
        a: 'Especialmente entonces. Doubly nunca te muestra todo a la vez. Ves un solo siguiente paso, no un muro de tareas. Toda la experiencia está diseñada para cerebros que se sobrecargan rápido.',
      },
    ],
  },

  // FinalCTA
  finalCta: {
    title: 'Tu cerebro no necesita más presión',
    highlight: 'Necesita una forma de empezar.',
    subtitle: 'Para mentes con TDAH cansadas de darle vueltas a todo, evitar y quedarse atrás.',
    cta: 'Descárgala en la App Store',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    freeTools: 'Herramientas gratis para el TDAH',
    tools: 'Herramientas',
    learn: 'Aprender',
    privacy: 'Privacidad',
    terms: 'Términos',
    support: 'Soporte',
    copyright: (year: number) => `© ${year} Doubly. Hecho para cerebros con TDAH.`,
  },

  // StickyBar
  stickyBar: {
    cta: 'Desbloquéate ahora',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | La app para el TDAH que te ayuda a empezar',
    description:
      'Suelta el caos en un volcado mental, consigue un siguiente paso claro y usa la responsabilidad compartida para cumplir de verdad. Hecho para mentes con TDAH que necesitan ayuda para empezar, no solo para planear.',
    keywords: ['TDAH', 'productividad', 'volcado mental', 'gestión de tareas', 'responsabilidad compartida', 'enfoque'],
    ogTitle: 'Doubly | La app para el TDAH que te ayuda a empezar',
    ogDescription:
      'Suelta el caos en un volcado mental, consigue un siguiente paso claro y usa la responsabilidad compartida para cumplir de verdad.',
  },
  // Tool library card copy (title + description per tool).
  // Mirrors content/tools-i18n/${locale}/_index.json cards[] so the homepage grid and
  // the footer speak the visitor's language; kept in sync by scripts/check-tool-cards.mjs.
  toolCards: {
    'task-splitter': {
      title: 'Herramienta para dividir tareas',
      description:
        'Escribe una tarea que no consigues empezar. La IA la divide en pasos pequeños y abordables, con su tiempo estimado. Hecha para cerebros con TDAH.',
    },
    'brain-dump': {
      title: 'Herramienta de volcado mental',
      description:
        'Suelta todo lo que tienes en la cabeza y la IA extrae solo las tareas accionables. Sin registro, no se guarda nada.',
    },
    'pick-one': {
      title: 'Herramienta para elegir una tarea',
      description:
        'Pega una lista de pendientes caótica y te devuelve una sola cosa con la que empezar. La más pequeña, la que más miedo da o una al azar. Hecha para cuando diez tareas se convierten en un único bloque gigante imposible de empezar.',
    },
    'eisenhower-matrix': {
      title: 'Matriz de Eisenhower (edición TDAH)',
      description:
        'Arrastra las tareas a cuadrantes como «aburrido pero importante» en vez de etiquetas de manual. La matriz que por fin encaja con un cerebro con TDAH. Se guarda en tu navegador.',
    },
    'pomodoro': {
      title: 'Temporizador Pomodoro para el TDAH',
      description:
        '25 minutos de trabajo, 5 de descanso: el método de concentración que por fin encaja con un cerebro con TDAH. Gratis, sin registro, funciona sin conexión.',
    },
    'visual-timer': {
      title: 'Temporizador visual / reloj para la ceguera al tiempo',
      description:
        'Una porción de tarta que se encoge para que veas pasar el tiempo en vez de leer números. Sirve también como reloj contra la ceguera al tiempo en adultos con TDAH.',
    },
    'brown-noise': {
      title: 'Generador de sonido ambiental',
      description:
        'Generador de sonido ambiental gratis en el navegador. Ruido marrón, rosa y blanco. Un fondo sonoro constante para calmar un cerebro con TDAH que no para. Incluye temporizador para dormir y funciona sin conexión.',
    },
    'body-doubling-room': {
      title: 'Sala de body doubling',
      description:
        'Sala de concentración gratis para dos personas. Comparte un enlace, trabaja codo con codo por videollamada P2P y pon en marcha un temporizador compartido. Sin registro, sin instalar nada.',
    },
    'hyperfocus-timer': {
      title: 'Temporizador para interrumpir la hiperconcentración',
      description:
        'Avisos hablados que se repiten cada X minutos y un tope definitivo opcional, para que una sesión de hiperconcentración con TDAH no se te coma la tarde entera.',
    },
  },

  toolWidgets: {
    taskSplitter: {
      inputLabel: '¿Qué tarea no consigues empezar?',
      inputPlaceholder: 'p. ej. Entregar el informe de gastos',
      submit: 'Divídela',
      submitting: 'Dividiéndola…',
      privacyNote: 'Privado. No guardamos nada en nuestro servidor.',
      charactersLeft: (count: number) => `Quedan ${count} caracteres`,
      presetsIntro: 'O prueba una de estas:',
      presets: {
        cleanKitchen: 'Limpiar la cocina',
        doLaundry: 'Lavar la ropa',
        replyInbox: 'Responder los correos',
        planWeekendTrip: 'Planear una escapada',
        fileTaxes: 'Hacer la declaración',
        cleanBathroom: 'Limpiar el baño',
      },
      loading: 'Dividiéndola en pasos…',
      errorRateLimit: 'Vas muy rápido. Espera un momento e inténtalo de nuevo.',
      errorGeneric: 'No se pudo dividir ahora mismo. Inténtalo de nuevo en unos segundos.',
      tryAgain: 'Inténtalo de nuevo',
      taskLabel: 'Tarea',
      urgencyLabels: { low: 'Urgencia baja', medium: 'Urgencia media', high: 'Urgencia alta' },
      stepsDone: (done: number, total: number) => `${done}/${total} pasos hechos`,
      minTotal: (min: number) => `~${min} min en total`,
      allDoneMessage: 'Todo listo. No fue tan difícil, ¿verdad?',
      emptyState:
        'No encontramos subpasos claros para eso. Prueba a plantearlo como una acción, tipo «Escribir el plan del proyecto» o «Limpiar el garaje».',
    },
    brainDump: {
      label: 'Suelta todo lo que tienes en la cabeza. No hace falta que esté ordenado.',
      placeholder:
        'Siempre se me olvida llamar al dentista y la cocina es un desastre.\nEstoy agobiado con el proyecto del trabajo. Tengo que comprar comida\npara la cena de hoy y responder al correo de Sara de la semana pasada.',
      privacy: 'Privado. No guardamos nada en nuestro servidor.',
      charactersLeft: (remaining: number) => `Quedan ${remaining} caracteres.`,
      clear: 'Borrar',
      submit: 'Extraer las tareas',
      submitting: 'Extrayendo las tareas…',
      loading: 'Leyendo tu volcado y sacando lo accionable…',
      errorRateLimited: 'Vas muy rápido. Espera un momento e inténtalo de nuevo.',
      errorGeneric:
        'No se pudieron extraer las tareas ahora mismo. Inténtalo de nuevo en unos segundos.',
      tryAgain: 'Inténtalo de nuevo',
      empty:
        'No encontramos ahí dentro nada que pareciera una tarea concreta. Puede ser buena señal. Si te estabas desahogando, también cuenta. Si querías listar cosas por hacer, prueba a ser un poco más concreto («escribir a Sara» en vez de «tema Sara»).',
      resultsTitle: 'Tareas accionables',
      doneCount: (done: number, total: number) => `${done}/${total} hechas`,
      footer: 'Elige una. Solo una. Hazla ahora y vuelve luego a por la siguiente.',
    },
    pickOne: {
      inputLabel: 'Pega tu lista. Una por línea, o un lío con comas. Da igual.',
      inputPlaceholder:
        'responder a mamá\npedir cita con el dentista\npasar los gastos\nterminar la presentación\nregar las plantas',
      itemsDetected: (count: number) =>
        `${count} elemento${count === 1 ? '' : 's'} detectado${count === 1 ? '' : 's'}`,
      itemsDetectedWithLeft: (count: number, left: number) =>
        `${count} elemento${count === 1 ? '' : 's'} detectado${count === 1 ? '' : 's'}, ${left} pendiente${left === 1 ? '' : 's'}`,
      clearEverything: 'Borrar todo',
      modeLegend: '¿Cómo elegimos?',
      modes: {
        smallest: {
          label: 'La más pequeña',
          reason: 'Lo más corto de la lista. Empieza mínimo y coge impulso.',
        },
        scariest: {
          label: 'La que más miedo da',
          reason: 'Esa que prefieres ni mirar. Hacerla primero te libera el día.',
          noSignalReason:
            'Aquí nada da miedo de verdad, y eso ya es una buena noticia. He elegido una al azar.',
        },
        random: {
          label: 'Elige una y ya',
          reason: 'Sin darle vueltas. La lista ha elegido sola. Solo empieza.',
        },
      },
      // Palabras de temor para el modo «La que más miedo da». Se comparan como
      // subcadenas contra el elemento en minúsculas, así que las raíces ganan a
      // las palabras completas: «impuest» también atrapa «impuestos».
      scaryWords: [
        'hacienda',
        'impuest',
        'irpf',
        'renta',
        'seguridad social',
        'autónom',
        'gestor',
        'papeleo',
        'trámite',
        'cita previa',
        'multa',
        'factura',
        'alquiler',
        'hipoteca',
        'deuda',
        'seguro',
        'abogad',
        'juzgado',
        'reclamac',
        'médic',
        'doctor',
        'dentist',
        'responder',
        'contestar',
        'llamar',
        'jefe',
        'hablar con',
        'disculp',
        'cancel',
        'dar de baja',
        'confront',
        'plazo',
        'atrasad',
        'olvid',
        'pospon',
        'pendiente desde',
        'llevo meses',
      ],
      pickCta: 'Elige una por mí',
      pickAnotherCta: 'Elige otra',
      emptyHint: 'Añade al menos un elemento y luego toca elegir.',
      readyHint: 'Listo. Toca «Elige una por mí» cuando no puedas decidirte.',
      allDoneTitle: 'Lista resuelta.',
      allDoneBody:
        'Cada elemento está hecho o saltado. Puedes borrar la lista o reiniciarla para devolver los saltados al montón.',
      bringSkippedBack: 'Recuperar los saltados',
      startFreshList: 'Empezar una lista nueva',
      pickedEyebrow: 'Empieza por esta',
      didIt: 'Hecha',
      notThisOne: 'Esta no',
      pickAgain: 'Elegir otra vez',
      progress: (done: number, skipped: number, left: number) =>
        `${done} hecha${done === 1 ? '' : 's'}, ${skipped} saltada${skipped === 1 ? '' : 's'}, ${left} pendiente${left === 1 ? '' : 's'}`,
    },
    eisenhower: {
      inputLabel: 'Añade una tarea',
      inputPlaceholder:
        'Añade una tarea y pulsa Enter (o pega varias separadas por saltos de línea)',
      addButton: 'Añadir',
      totals: (total: number, unsorted: number) =>
        `${total} tarea${total === 1 ? '' : 's'} en total, ${unsorted} sin clasificar`,
      clearAll: 'Borrar todo',
      unsortedHeading: (count: number) => `Sin clasificar (${count})`,
      unsortedListLabel: 'Tareas sin clasificar',
      removeTask: (text: string) => `Quitar ${text}`,
      placeHint: 'Ahora toca un cuadrante para colocarla.',
      placeHintDesktop: 'O arrástrala y suéltala en el ordenador.',
      quadrantRegionLabel: (label: string) => `Cuadrante ${label}`,
      quadrantCountLabel: (count: number, label: string) => `${count} tareas en ${label}`,
      dropHere: 'Suéltala aquí',
      sendBackToUnsorted: 'Devolver a sin clasificar',
      moveBackToUnsorted: (text: string) => `Devolver ${text} a sin clasificar`,
      empty: 'Vacío',
      emptyState:
        'Añade una tarea arriba para empezar. Todo se guarda en tu navegador, nada en nuestro servidor.',
      hintLabel: 'Consejo de Doubly:',
      hintBody:
        'El montón de lo aburrido pero importante es el que casi todo el mundo se salta y el que más se acaba lamentando. Si hoy solo haces una cosa, elígela de ahí.',
      quadrants: {
        fire: {
          label: 'Ardiendo',
          sub: 'Hazlo hoy, no mañana.',
          textbook: 'Importante + Urgente',
        },
        boring: {
          label: 'Aburrido pero importante',
          sub: 'Aquí están las victorias de verdad. Prográmalo, no lo saltes.',
          textbook: 'Importante + No urgente',
        },
        noisy: {
          label: 'Ruidoso pero prescindible',
          sub: 'Hace mucho ruido, pero no es tu problema. Delega, aplaza, ignora.',
          textbook: 'Urgente + No importante',
        },
        drop: {
          label: 'Suéltalas',
          sub: 'Está permitido. La lista no tiene por qué terminarse.',
          textbook: 'No importante + No urgente',
        },
      },
    },
    pomodoro: {
      timerLabel: 'Temporizador Pomodoro',
      modeTablistLabel: 'Modo del temporizador',
      modes: {
        work: 'Enfoque',
        'short-break': 'Descanso corto',
        'long-break': 'Descanso largo',
      },
      dialLabel: (mode: string, time: string) => `Temporizador de ${mode}. Quedan ${time}.`,
      sessionsToday: (count: number) => `Sesiones completadas hoy: ${count}`,
      soundToggle: 'Sonido al terminar la sesión',
      customizeDurations: 'Personalizar duraciones',
      hideSettings: 'Ocultar ajustes',
      focusMinutes: 'Enfoque (min)',
      shortBreakMinutes: 'Descanso corto (min)',
      longBreakMinutes: 'Descanso largo (min)',
      documentTitle: (time: string, mode: string) => `${time} | ${mode} | Doubly`,
    },
    visualTimer: {
      ariaLabel: 'Temporizador visual de cuenta atrás',
      dialAriaLabel: (remaining: string) => `Esfera del temporizador visual. Quedan ${remaining}.`,
      seconds: (s: number) => `${s} segundos`,
      minutes: (m: number) => `${m} minuto${m === 1 ? '' : 's'}`,
      minutesAndSeconds: (m: number, s: number) =>
        `${m} minuto${m === 1 ? '' : 's'} y ${s} segundos`,
      documentTitle: (time: string) => `${time} | Doubly`,
      countingDown: (minutes: number) => `Cuenta atrás desde ${minutes} min`,
      setFor: (minutes: number) => `Ajustado a ${minutes} min`,
      paused: 'En pausa',
      timeIsUp: 'Se acabó el tiempo',
      presetsLabel: 'Duraciones predefinidas',
      presetMinutes: (minutes: number) => `${minutes} min`,
      custom: 'Personalizado',
      minutesLabel: 'Minutos',
      set: 'Ajustar',
      soundWhenDone: 'Sonido al acabar el tiempo',
    },
    brownNoise: {
      play: (sound: string) => `Reproducir ${sound}`,
      pause: (sound: string) => `Pausar ${sound}`,
      documentTitle: (sound: string) => `▶ ${sound} · Doubly`,
      chooseSound: 'Elige un sonido ambiental',
      soundGroupLabel: 'Sonido ambiental',
      volume: 'Volumen',
      volumePercent: (percent: number) => `${percent}%`,
      sleepTimer: 'Temporizador para dormir',
      sleepOff: 'Apagado',
      sleepMinutes: (minutes: number) => `${minutes} min`,
      privacyNote: 'Funciona en tu navegador. No se graba nada, no se sube nada.',
      sounds: {
        brown: {
          name: 'Marrón',
          description: 'Grave y retumbante. Como una cascada lejana. El famoso de TikTok.',
        },
        pink: {
          name: 'Rosa',
          description: 'Más suave que el blanco, menos grave que el marrón. Equilibrado.',
        },
        white: {
          name: 'Blanco',
          description: 'El siseo de una tele antigua. Brillante y uniforme.',
        },
      },
    },
    hyperfocus: {
      ariaLabel: 'Temporizador para interrumpir la hiperconcentración',

      // Durations. Every phrasing lives here so a language can pick its own
      // plural forms, units and word order.
      minutesShort: (minutes: number) => `${minutes} min`,
      hoursShort: (hours: number) => `${hours} h`,
      hoursMinutesShort: (hours: number, minutes: number) => `${hours} h ${minutes} min`,
      durationLong: (hours: number, minutes: number) => {
        if (hours === 0 && minutes === 0) return 'menos de un minuto';
        const parts: string[] = [];
        if (hours > 0) parts.push(`${hours} hora${hours === 1 ? '' : 's'}`);
        if (minutes > 0) parts.push(`${minutes} minuto${minutes === 1 ? '' : 's'}`);
        return parts.join(' y ');
      },

      // Session strip. Text wrapped in ** is rendered emphasized.
      stripNoCap: (interval: string) => `Aviso cada ${interval}, sin parada obligatoria`,
      stripWithCap: (interval: string, cap: string) =>
        `Aviso cada ${interval}, parada obligatoria tras ${cap}`,
      summaryNoCap: (interval: string) => `Te avisamos cada **${interval}**, sin parada obligatoria.`,
      summaryWithCap: (interval: string, cap: string) =>
        `Te avisamos cada **${interval}**, con parada obligatoria tras **${cap}**.`,

      // Setup
      intervalHeading: 'Avísame cada',
      custom: 'Personalizado',
      minutes: 'Minutos',
      set: 'Ajustar',
      jitterNote:
        'Los avisos se desplazan un diez por ciento más o menos para que el cerebro no pueda descartarlos de antemano.',
      moreOptions: 'Más opciones',
      hideOptions: 'Ocultar opciones',
      taskLabel: '¿En qué estás trabajando? (opcional)',
      taskPlaceholder: 'p. ej. la declaración, la revisión de diseño, el guion',
      taskHint: 'Se usa en los avisos hablados, para que oigas a qué te sentaste.',
      hardStopHeading: 'Parada obligatoria tras',
      hardStopHint:
        'Al llegar al tope suena una alerta más fuerte, para que no se te cuele una espiral de seis horas.',
      capOff: 'Sin tope',
      capHours: (hours: number) => `${hours} h`,
      noHardStop: 'sin parada obligatoria',
      alertsHeading: 'Alertas',
      chime: 'Campana',
      voice: 'Voz',
      notify: 'Notificar',
      alertsHint:
        'La campana suena más fuerte si ignoras un aviso. La voz dice la hora y el tiempo que llevas. Notificar lanza una notificación del navegador cuando la pestaña está en segundo plano.',
      notificationsBlocked:
        'Las notificaciones están bloqueadas en este navegador. Actívalas en los ajustes del sitio para usar esto.',
      notificationsUnsupported: 'Tu navegador no admite notificaciones web.',
      startSession: 'Empezar sesión',

      // Live session
      statElapsed: 'Transcurrido',
      statNextCheckIn: 'Próximo aviso',
      statCap: 'Tope',
      statusNow: 'Ahora',
      statusPaused: 'En pausa',
      statusCapHit: 'Tope alcanzado',
      statusOff: 'Ninguno',
      workingOn: (task: string) => `Trabajando en **${task}**`,
      checkInHeading: 'Aviso rápido',
      checkInBody: (clock: string, elapsed: string) =>
        `Son las ${clock} y llevas ${elapsed} con esto. ¿Sigues en la tarea que empezaste o toca salir a la superficie?`,
      stillGoing: 'Sigo con ello',
      takeABreak: 'Tomar un descanso',
      stopSession: 'Parar la sesión',
      capHeading: 'Has llegado al tope de la sesión',
      capBody: (minutes: number) =>
        `Pusiste una parada obligatoria a los ${minutes} minutos. Levántate, bebe agua, come algo. El trabajo va a seguir aquí.`,
      pause: 'Pausar',
      resume: 'Reanudar',
      endSession: 'Terminar sesión',
      checkInLog: 'Registro de avisos',
      logContinue: 'seguiste',
      logBreak: 'descansaste',
      logStop: 'paraste',

      // Browser tab title while a check-in is waiting in a background tab.
      tabAlert: '⚠ Aviso | Doubly',

      // Spoken aloud (SpeechSynthesis) and pushed as OS notifications.
      checkInSpeech: (clock: string, elapsed: string, task: string) =>
        task
          ? `Un aviso. Son las ${clock}. Llevas ${elapsed} trabajando en ${task}.`
          : `Un aviso. Son las ${clock}. Llevas ${elapsed} trabajando.`,
      capSpeech: (clock: string, elapsed: string) =>
        `Has llegado al tope de la sesión. Son las ${clock}. Llevas ${elapsed} con esto. Hora de parar.`,
      notificationCheckInTitle: 'Aviso de hiperconcentración',
      notificationCheckInBody: (clock: string, elapsed: string) =>
        `Son las ${clock}. Llevas ${elapsed} con esto.`,
      notificationCapTitle: 'Has llegado al tope de hiperconcentración',
      notificationCapBody: (clock: string, elapsed: string) =>
        `Son las ${clock}. Llevas ${elapsed} con esto. Hora de parar.`,
    },
    shared: {
      start: 'Empezar',
      pause: 'Pausar',
      resume: 'Reanudar',
      done: 'Hecho',
      reset: 'Reiniciar',
      skip: 'Saltar',
      skipAria: 'Saltar a la siguiente sesión',
      startSession: 'Empezar una sesión de enfoque',
      creatingRoom: 'Creando la sala...',
    },
    chrome: {
      tryInApp: 'Pruébalo en la app',
      appStoreAria: (label: string) => `${label} en la App Store`,
      breadcrumbAria: 'Ruta de navegación',
    },
  },

  // La sala de body doubling en directo, en /r/[id]. El idioma se resuelve por
  // persona, así que las dos personas de una sala pueden estar leyendo idiomas
  // distintos: nunca escribas copy que dé por hecho que comparten uno.
  room: {
    join: {
      titleFirst: 'Empieza una sesión de enfoque',
      titleJoin: 'Únete a la sesión de enfoque',
      subtitleFirst:
        'Elige tu nombre y la duración. Podrás compartir el enlace de invitación en cuanto entres.',
      subtitleJoin: 'Elige tu nombre y entra. El temporizador ya está puesto.',
      nameLabel: 'Tu nombre',
      namePlaceholder: 'Lucía',
      avatarLabel: 'Elige un avatar',
      avatarChooseAria: (emoji: string) => `Elegir el avatar ${emoji}`,
      durationLabel: 'Duración de la sesión',
      minutes: (n: number) => `${n} min`,
      permissionNote:
        'En la siguiente pantalla se te pedirá acceso a la cámara y al micrófono. Los dos son opcionales. Si los saltas, entrarás con un recuadro fantasma y la otra persona seguirá viendo que estás ahí.',
      createCta: 'Crear la sala',
      joinCta: 'Entrar en la sala',
    },
    header: {
      eyebrow: 'Sala de body doubling',
      withPeer: (name: string) => `Tú y ${name}`,
      waiting: 'Esperando a la otra persona',
      copyInvite: 'Copiar el enlace',
      linkCopied: 'Enlace copiado',
    },
    full: {
      title: 'La sala está llena',
      body: 'Una sala de body doubling es para dos personas. La buena noticia: abrir otra es un clic.',
      cta: 'Abrir una sala nueva',
    },
    phases: {
      waiting: {
        eyebrow: 'Paso 0 de 3',
        title: 'Comparte tu enlace',
        body: 'Envía la dirección de esta página a una persona. La sesión empieza en cuanto entre.',
      },
      intro: {
        eyebrow: 'Paso 1 de 3 · Presentación',
        title: 'Saluda y di qué vas a hacer',
        titleWithPeer: (name: string) => `Saluda a ${name}`,
        body: 'Tómate 60 segundos. Cámara encendida, una frase cada uno. Decir el objetivo en voz alta es lo que lo fija.',
        cta: 'Empezar el enfoque',
      },
      focus: {
        eyebrow: 'Paso 2 de 3 · Enfoque',
        title: 'A trabajar. En silencio, pero acompañado.',
        body: 'Con micro o sin micro, las dos cosas valen. Lo que cuenta es que la otra persona esté ahí.',
        cta: 'Terminar antes',
      },
      wrapUp: {
        eyebrow: 'Paso 3 de 3 · Cierre',
        title: 'Cuenta una victoria y algo que se te atragantó',
        body: 'Una reflexión corta en voz alta fija lo que acabas de hacer y hace que la próxima sesión cueste menos.',
        cta: 'Terminar la sesión',
      },
      done: {
        eyebrow: 'Sesión completada',
        title: 'Bien hecho. Has aparecido.',
        body: 'Eso cuenta. Quédate y haz otra, o cierra la pestaña y date algo bueno.',
        runAnother: 'Hacer otra',
      },
    },
    tiles: {
      you: (name: string) => `${name} (tú)`,
      peerFallbackName: 'Esperando',
      waitingForPartner: 'Esperando a la otra persona...',
      micMuted: 'Micrófono silenciado',
      goalPlaceholderIntro: 'En lo que voy a trabajar...',
      goalPlaceholderFocus: 'En lo que estoy trabajando',
      reflectionPlaceholder: 'Una victoria o un atasco...',
      peerNoGoal: 'Aún sin objetivo',
      peerNoReflection: 'Esperando su cierre',
      empty: '—',
    },
    controls: {
      muteMic: 'Silenciar el micro',
      unmuteMic: 'Activar el micro',
      micUnavailable: 'Micro no disponible',
      muteTitle: 'Silenciar',
      unmuteTitle: 'Activar',
      micBlockedTitle: 'Micro bloqueado o no disponible',
      camOff: 'Apagar la cámara',
      camOn: 'Encender la cámara',
      camUnavailable: 'Cámara no disponible',
      stopVideoTitle: 'Parar el vídeo',
      startVideoTitle: 'Iniciar el vídeo',
      camBlockedTitle: 'Cámara bloqueada o no disponible',
      startTimer: 'Iniciar el temporizador',
      pauseTimer: 'Pausar el temporizador',
      leave: 'Salir',
      retry: 'Reintentar',
    },
    reactions: {
      groupAria: 'Enviar una reacción',
      sendAria: (emoji: string) => `Enviar la reacción ${emoji}`,
    },
    status: {
      peerLeft: 'La otra persona ha salido de la sala.',
      shareToUnlock:
        'Comparte el enlace para que entre alguien. La sesión se abre cuando llegue.',
      upNext: (minutes: number) => `Ahora toca: bloque de enfoque de ${minutes} min`,
      planOnArrival: (minutes: number) =>
        `Plan: bloque de enfoque de ${minutes} min cuando llegue la otra persona`,
      wrapUpBreath: 'Respira. El temporizador está en pausa.',
      timerAria: (remaining: string) => `Temporizador, quedan ${remaining}`,
    },
    errors: {
      p2pBlocked:
        'No se puede conectar. Puede que tu red bloquee las conexiones directas entre pares. Prueba con otra red.',
      mediaUnavailable: 'Cámara y micrófono no disponibles.',
    },
  },

};

export default es;
