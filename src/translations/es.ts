const es = {
  // Shared
  common: {
    tryInDoubly: 'Pruébalo en Doubly',
    changeLanguage: 'Cambiar idioma',
    socialProof: (count: number) => `Únete a ${count.toLocaleString('es-ES')} personas con ADHD`,
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
    badge: 'Hecho para cerebros con ADHD',
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
    title: 'El ADHD no es solo ser desorganizado',
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
    title: 'Hecho específicamente para cerebros con ADHD a los que les cuesta empezar',
    subtitle:
      'La mayoría de las apps de productividad asumen que tu cerebro está listo para planear. Doubly está hecha para el momento en que estás abrumado, bloqueado o evitando, basándose en cómo funciona realmente el ADHD.',
    proofPoints: [
      'Hecho para la fricción del ADHD, no para la productividad genérica',
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
    title: 'Herramientas gratis para el ADHD que puedes usar ahora mismo',
    subtitle: 'Sin registro ni ventanas emergentes. Abre una en tu navegador en cuanto te quedes bloqueado.',
    hot: 'Popular',
    openTool: 'Abrir herramienta',
    browseAll: 'Ver todas las herramientas gratis para el ADHD',
  },

  faq: {
    title: 'Preguntas',
    items: [
      {
        q: '¿Doubly es solo para personas diagnosticadas con ADHD?',
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
    subtitle: 'Para mentes con ADHD cansadas de darle vueltas a todo, evitar y quedarse atrás.',
    cta: 'Descárgala en la App Store',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    freeTools: 'Herramientas gratis para el ADHD',
    tools: 'Herramientas',
    learn: 'Aprender',
    privacy: 'Privacidad',
    terms: 'Términos',
    support: 'Soporte',
    copyright: (year: number) => `© ${year} Doubly. Hecho para cerebros con ADHD.`,
  },

  // StickyBar
  stickyBar: {
    cta: 'Desbloquéate ahora',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | La app de ADHD que te ayuda a empezar',
    description:
      'Suelta el caos en un volcado mental, consigue un siguiente paso claro y usa la responsabilidad compartida para cumplir de verdad. Hecho para mentes con ADHD que necesitan ayuda para empezar, no solo para planear.',
    keywords: ['ADHD', 'productividad', 'volcado mental', 'gestión de tareas', 'responsabilidad compartida', 'enfoque'],
    ogTitle: 'Doubly | La app de ADHD que te ayuda a empezar',
    ogDescription:
      'Suelta el caos en un volcado mental, consigue un siguiente paso claro y usa la responsabilidad compartida para cumplir de verdad.',
  },
};

export default es;
