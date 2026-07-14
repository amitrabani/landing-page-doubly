const ptBR = {
  // Shared
  common: {
    tryInDoubly: 'Experimente no Doubly',
    changeLanguage: 'Mudar idioma',
    socialProof: (count: number) => `Junte-se a ${count.toLocaleString('pt-BR')} pessoas com TDAH`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    tools: 'Ferramentas',
    howItWorks: 'Como funciona',
    features: 'Recursos',
    testimonials: 'Depoimentos',
    faq: 'FAQ',
    cta: 'Baixar o Doubly',
    toggleMenu: 'Alternar menu',
  },

  // Hero
  hero: {
    badge: 'Feito para cérebros com TDAH',
    titlePrefix: 'Quando seu cérebro tem ',
    titleHighlight: '47 abas abertas',
    subtitle: 'Transforme o caos em um próximo passo claro em menos de um minuto.',
    cta: 'Baixar na App Store',
    secondaryCta: 'Veja ele dividir uma tarefa ↓',
    android: {
      prompt: 'Usa Android?',
      placeholder: 'voce@email.com',
      submit: 'Me avise',
      success: 'Você está na lista. Vamos te avisar por e-mail quando o Doubly chegar no Android.',
      invalid: 'Digite um e-mail válido.',
      error: 'Algo deu errado. Tente novamente.',
    },
    floatingCards: {
      brainDump: 'Despejo mental',
      habits: 'Hábitos',
      accountability: 'Cobrança',
    },
    phone: {
      screenAlt: 'App Doubly mostrando seus hábitos com sequências diárias e grades de progresso',
    },
  },

  // Problem
  problem: {
    title: 'TDAH não é só ser desorganizado',
    titleHighlight: 'desorganizado',
    subtitle:
      'É uma batalha diária com um cérebro que não coopera com as suas próprias intenções.',
    cards: [
      {
        type: 'External',
        title: 'Tarefas demais. Pensamentos demais.',
        body: 'Nenhum lugar claro para começar.',
      },
      {
        type: 'Internal',
        title: 'Você sabe o que fazer, mas ainda assim não consegue começar.',
        body: 'Não é preguiça. É resistência para iniciar.',
      },
      {
        type: 'Philosophical',
        title: 'Não deveria ser tão difícil começar.',
        body: 'Seu cérebro funciona de um jeito diferente. Suas ferramentas também deveriam.',
      },
      {
        type: 'Stakes',
        title: 'E isso está te custando mais do que tempo.',
        body: 'As coisas se acumulam. Você fica para trás. E começa a perder a confiança em si mesmo.',
      },
    ],
  },

  // VisualProblem
  visualProblem: {
    cards: [
      { image: '/problem-1.jpg', alt: 'Tarefas demais. Pensamentos demais.' },
      { image: '/problem-2.jpg', alt: 'Você sabe o que fazer, mas ainda assim não consegue começar.' },
      { image: '/problem-4.jpg', alt: 'Não deveria ser tão difícil começar coisas normais.' },
      { image: '/problem-3.jpg', alt: 'E isso está te custando mais do que tempo.' },
    ],
  },

  // Guide
  guide: {
    title: 'Feito especialmente para cérebros com TDAH que têm dificuldade de começar',
    subtitle:
      'A maioria dos apps de produtividade parte do princípio de que seu cérebro está pronto para planejar. O Doubly é feito para o momento em que você está sobrecarregado, travado ou fugindo, com base em como o TDAH realmente funciona.',
    proofPoints: [
      'Feito para o atrito do TDAH, não para produtividade genérica',
      'Ajuda a reduzir a resistência para iniciar',
      'Dá estrutura sem te sobrecarregar',
    ],
    mockup: {
      brainDump: 'Despejo mental',
      items: ['ligar pro dentista', 'fazer compras', 'responder o chefe', 'lavar roupa', 'por que estou tão cansado'],
      yourNextStep: 'Seu próximo passo',
      nextStepTask: 'Colocar a roupa na máquina',
      nextStepMeta: '~5 min · pouca energia',
      accountability: 'Cobrança',
      accountabilityText: 'Sarah dá um alô às 15h',
    },
  },

  // BrainDumpDemo
  brainDumpDemo: {
    title: 'Despeje o caos. Fique com as tarefas.',
    titleHighlight: 'Fique com as tarefas.',
    replayDemo: 'Repetir demo',
    subtitle:
      'Cabeça cheia? Digite por 20 segundos. O Doubly separa o que dá para fazer e joga fora o resto.',
    dumpText:
      'Abro o notebook para ser produtivo e em cinco segundos meu cérebro já dispara: responder aquela mensagem, pedir vitaminas, limpar a pia, achar o carregador, comer alguma coisa e também lembrar daquela tarefa super importante que você com certeza não ia esquecer. Que eu esqueci na hora.',
    brainDumpLabel: 'Despejo mental',
    brainDumpPlaceholder: 'Solta tudo aqui...',
    extractedTasksLabel: 'Tarefas extraídas',
    listening: 'Ouvindo...',
    tasksFound: (count: number) => `${count} tarefa${count > 1 ? 's' : ''} encontrada${count > 1 ? 's' : ''}`,
    filterNote: 'Pensamentos que não viram ação foram filtrados. Só as tarefas reais ficaram.',
    tasks: [
      { text: '💊 Pedir vitaminas', phrase: 'pedir vitaminas' },
      { text: '🧽 Limpar a pia', phrase: 'limpar a pia' },
      { text: '🔌 Achar o carregador', phrase: 'achar o carregador' },
      { text: '🍽️ Comer alguma coisa', phrase: 'comer alguma coisa' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: 'É assim que você destrava',
    titleHighlight: 'destrava',
    subtitle: 'Quatro passos simples. Sem configuração complicada. Sem curva de aprendizado.',
    stepLabel: 'PASSO',
    steps: [
      {
        number: '01',
        title: 'Esvazie a mente',
        body: 'Capture pensamentos, tarefas e a bagunça mental rapidinho. Sem precisar organizar. É só colocar para fora.',
      },
      {
        number: '02',
        title: 'Receba um próximo passo claro',
        body: 'O Doubly transforma a sobrecarga em algo que você realmente consegue começar. Não são dez prioridades. É uma.',
      },
      {
        number: '03',
        title: 'Continue em movimento',
        body: 'Use cobrança, timers e ferramentas de progresso para seguir em frente, mesmo quando a motivação some.',
      },
      {
        number: '04',
        title: 'Tenha quem te cobre',
        body: 'Compartilhe com amigos no feed do Doubly. A cobrança de verdade acontece quando alguém está torcendo por você.',
      },
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: 'Digite uma tarefa. Veja ela se dividir.',
    titleHighlight: 'se dividir.',
    subtitle:
      'Tarefas grandes parecem impossíveis. O Doubly divide elas em passos de 2 a 5 minutos para você simplesmente começar.',
    customInputPlaceholder: 'Ou digite sua própria tarefa...',
    splitButton: 'Dividir',
    taskLabel: 'Tarefa',
    aiThinking: 'A IA está dividindo em passos...',
    errorMessage: 'Não deu para falar com a IA agora. Tente um exemplo acima ou tente de novo.',
    tryAgain: 'Tentar de novo',
    stepsDone: (done: number, total: number) => `${done}/${total} passos concluídos`,
    minTotal: (min: number) => `~${min} min no total`,
    urgencySuffix: 'de urgência',
    urgencyLabels: { low: 'Urgência baixa', medium: 'Urgência média', high: 'Urgência alta' },
    allDoneMessage: 'Tudo pronto. Não foi tão difícil, né?',
    allDoneDescription:
      'O Doubly faz isso com toda tarefa que você jogar nele. Chega de encarar uma lista gigante de afazeres.',
    allDoneCta: 'Destrave agora',
    presets: [
      { label: 'Limpar a cozinha', icon: '🍳' },
      { label: 'Lavar a roupa', icon: '🧰' },
      { label: 'Fazer o jantar', icon: '🍲' },
      { label: 'Limpar o banheiro', icon: '🚿' },
      { label: 'Organizar o quarto', icon: '🛏️' },
      { label: 'Fazer compras no mercado', icon: '🛒' },
    ],
    presetResults: {
      'Limpar a cozinha': {
        title: '🍳 Limpar a cozinha',
        subtasks: [
          { text: 'Limpar as bancadas e guardar os itens', duration: '3 minutos' },
          { text: 'Colocar a louça suja na máquina', duration: '5 minutos' },
          { text: 'Passar um pano nas bancadas e no fogão', duration: '4 minutos' },
          { text: 'Esfregar a pia', duration: '2 minutos' },
          { text: 'Varrer o chão', duration: '3 minutos' },
          { text: 'Tirar o lixo', duration: '2 minutos' },
        ],
        urgency: 'medium',
      },
      'Lavar a roupa': {
        title: '🧰 Lavar a roupa',
        subtasks: [
          { text: 'Juntar a roupa suja pela casa', duration: '5 minutos' },
          { text: 'Separar em brancas, coloridas e delicadas', duration: '3 minutos' },
          { text: 'Colocar a primeira leva na máquina', duration: '2 minutos' },
          { text: 'Pendurar ou dobrar a roupa seca da última leva', duration: '10 minutos' },
          { text: 'Guardar a roupa dobrada nas gavetas/armário', duration: '5 minutos' },
        ],
        urgency: null,
      },
      'Fazer o jantar': {
        title: '🍲 Fazer o jantar',
        subtasks: [
          { text: 'Decidir o que fazer e conferir os ingredientes', duration: '3 minutos' },
          { text: 'Lavar e preparar os legumes', duration: '8 minutos' },
          { text: 'Começar a fazer o prato principal', duration: '15 minutos' },
          { text: 'Preparar o acompanhamento ou a salada', duration: '7 minutos' },
          { text: 'Pôr a mesa', duration: '2 minutos' },
          { text: 'Empratar e servir', duration: '2 minutos' },
        ],
        urgency: 'low',
      },
      'Limpar o banheiro': {
        title: '🚿 Limpar o banheiro',
        subtasks: [
          { text: 'Borrifar produto no box, na pia e no vaso', duration: '2 minutos' },
          { text: 'Esfregar o vaso e limpar o assento', duration: '3 minutos' },
          { text: 'Limpar a pia e a torneira', duration: '2 minutos' },
          { text: 'Passar um pano no espelho', duration: '1 minuto' },
          { text: 'Esfregar o box/banheira', duration: '5 minutos' },
          { text: 'Passar pano ou esfregão no chão', duration: '3 minutos' },
          { text: 'Trocar as toalhas e repor o papel higiênico', duration: '2 minutos' },
        ],
        urgency: 'medium',
      },
      'Organizar o quarto': {
        title: '🛏️ Organizar o quarto',
        subtasks: [
          { text: 'Arrumar a cama e ajeitar os travesseiros', duration: '3 minutos' },
          { text: 'Recolher as roupas do chão e das cadeiras', duration: '4 minutos' },
          { text: 'Pôr a roupa suja no cesto e guardar a limpa', duration: '5 minutos' },
          { text: 'Esvaziar e organizar o criado-mudo', duration: '3 minutos' },
          { text: 'Tirar o pó das superfícies', duration: '3 minutos' },
          { text: 'Aspirar ou varrer o chão', duration: '4 minutos' },
        ],
        urgency: 'low',
      },
      'Fazer compras no mercado': {
        title: '🛒 Fazer compras no mercado',
        subtasks: [
          { text: 'Conferir a geladeira e a despensa para ver o que falta', duration: '5 minutos' },
          { text: 'Fazer uma lista organizada por corredor', duration: '5 minutos' },
          { text: 'Pegar as sacolas reutilizáveis', duration: '1 minuto' },
          { text: 'Comprar e ir marcando os itens', duration: '30 minutos' },
          { text: 'Guardar as compras', duration: '10 minutos' },
        ],
        urgency: null,
      },
    },
  },

  // TwoQuestions
  twoQuestions: {
    title: 'Isso soa familiar?',
    titleHighlight: 'familiar?',
    subtitle: 'Você não é preguiçoso. Seu cérebro só precisa de um ponto de partida diferente.',
    withoutDoubly: 'Sem o Doubly',
    withDoubly: 'Com o Doubly',
    rows: [
      {
        without: 'Eu travo e não sei por onde começar',
        with: 'Despejo mental → aparece um próximo passo claro',
      },
      {
        without: 'Eu faço tarefas menores e aleatórias no lugar',
        with: 'O Doubly mostra o que realmente importa primeiro',
      },
      {
        without: 'Eu começo 5 coisas ao mesmo tempo',
        with: 'Uma tarefa na tela. Termine ela e vá para a próxima.',
      },
      {
        without: 'Eu fico pensando demais no plano perfeito',
        with: 'Despeje tudo, o Doubly escolhe o primeiro passo',
      },
      {
        without: 'Eu adio até virar urgência, e aí entro em pânico',
        with: 'Você começa antes de o pânico bater',
      },
      {
        without: 'Eu trabalho sozinho e perco o ritmo rápido',
        with: 'Body doubling e parceiros de cobrança te mantêm no ritmo',
      },
    ],
    questionTitle: 'O que você mais precisa nesse momento?',
    options: [
      'Um despejo mental',
      'Um próximo passo bem pequeno',
      'Cobrança',
      'Um timer / empurrão de foco',
      'Um recomeço quando fico para trás',
    ],
    responseIntro: 'É exatamente aí que o Doubly ajuda.',
    responses: {
      'Um despejo mental': {
        title: 'Despejo mental → Clareza na hora',
        description:
          'Digite o caos. O Doubly extrai o que dá para fazer e joga fora o resto.',
      },
      'Um próximo passo bem pequeno': {
        title: 'O próximo passo, sempre pronto',
        description:
          'O Doubly divide as tarefas grandes e te entrega só o próximo pequeno passo. Sem sobrecarga.',
      },
      'Cobrança': {
        title: 'Check-ins de cobrança',
        description:
          'Lembretes gentis e cobrança social te ajudam a manter o ritmo sem culpa.',
      },
      'Um timer / empurrão de foco': {
        title: 'Modo Foco',
        description:
          'Uma tarefa na tela, um timer rodando, distrações fora. Só você e o trabalho.',
      },
      'Um recomeço quando fico para trás': {
        title: 'Recomeço, sem culpa',
        description:
          'Saiu dos trilhos? O Doubly reorganiza seu plano para você retomar sem a espiral de vergonha.',
      },
    },
    mockupNextStep: 'Seu próximo passo está pronto',
    mockupTask: 'Comece por uma coisa pequena',
    mockupCta: 'Experimentar o Doubly',
  },


  // HabitDemo
  habitDemo: {
    title: 'Crie hábitos que realmente pegam',
    subtitle:
      'Sem sequências para quebrar. Sem culpa. É só tocar quando você fizer a coisa. O Doubly acompanha o padrão para você ver o progresso.',
    todayLabel: 'Hoje',
    yourHabits: 'Seus hábitos',
    weeksLabel: '12 semanas',
    lessLabel: 'Menos',
    moreLabel: 'Mais',
    currentStreak: 'Sequência atual',
    bestStreak: 'Melhor sequência',
    completion: 'Conclusão',
    allDoneMessage: 'Todos os hábitos de hoje concluídos!',
    allDoneDescription: 'Imagine isso todo dia. O Doubly deixa fácil continuar.',
    allDoneCta: 'Destrave agora',
    habits: [
      { id: 'walk', name: 'Dar uma caminhada', icon: '🚶' },
      { id: 'read', name: 'Ler 10 páginas', icon: '📖' },
      { id: 'journal', name: 'Escrever no diário', icon: '✏️' },
      { id: 'tidy', name: 'Arrumação de 10 min', icon: '🧹' },
    ],
  },

  // Success
  success: {
    title: 'Troque o doomscrolling por um feed que te coloca em movimento.',
    imageAlt: 'Detalhe de um post no Doubly mostrando uma tarefa concluída com reações e comentários da comunidade',
    subtitle: 'Troque o doomscrolling por um feed que te coloca em movimento.',
    outcomes: [
      'Comece tarefas sem a briga mental',
      'Vá até o fim com o que você planejou',
      'Volte aos trilhos sem entrar em espiral',
      'Confie em si mesmo para realmente fazer as coisas',
    ],
  },

  // Stakes
  stakes: {
    title: 'Porque ficar travado tem um custo',
    body: 'Quando começar é tão difícil, as coisas escapam. Prazos são perdidos, oportunidades passam, e você começa a se sentir preso num ciclo de fuga e culpa. O Doubly te ajuda a quebrar esse ciclo antes que mais uma semana desapareça.',
  },

  // Testimonials
  testimonials: {
    title: 'As pessoas não precisam de mais pressão por produtividade',
    subtitle: 'Elas precisam de ajuda para começar.',
    items: [
      // Real App Store reviews, quoted verbatim. Only add entries that are actual
      // published reviews AND whose reviewer gave permission (Apple's rule; ask by
      // replying to the review in App Store Connect). The grid auto-adapts up to 3.
      {
        quote:
          'This app is the only one that actually got me to do things. I have very strong ADHD, and it made me concentrate on my tasks one by one to always know what’s coming ahead and make order in my day. Love it so much! Hope to see awesome upgrades soon 🙏🏻',
        name: 'Liorcic',
        label: 'Avaliação na App Store',
      },
      {
        quote:
          'This has really helped me manage my workload, I haven’t seen anything like it. The walkthrough and set up is very intuitive, and the features make it worth it!',
        name: 'MinecraftrNinja',
        label: 'Avaliação na App Store',
      },
      // Slot 3 — next permitted review goes here.
    ],
  },

  // FAQ
  // ToolsSection
  toolsSection: {
    title: 'Ferramentas gratuitas para TDAH que você pode usar agora mesmo',
    subtitle: 'Sem cadastro, sem pop-ups. Abra uma no navegador assim que você travar.',
    hot: 'Em alta',
    openTool: 'Abrir ferramenta',
    browseAll: 'Ver todas as ferramentas gratuitas para TDAH',
  },

  faq: {
    title: 'Perguntas',
    items: [
      {
        q: 'O Doubly é só para quem tem diagnóstico de TDAH?',
        a: 'Não. O Doubly é para qualquer pessoa que tem dificuldade de começar, se sente sobrecarregada ou vive com a mente bagunçada. Você não precisa de um diagnóstico, só de um cérebro que às vezes trava quando tem coisa demais para fazer.',
      },
      {
        q: 'Como isso é diferente de um app de tarefas comum?',
        a: 'Apps de tarefas ajudam você a listar coisas. O Doubly ajuda você a realmente começá-las. A gente foca em reduzir a resistência para iniciar, aquela distância entre saber o que fazer e fazer, com despejo mental, clareza de um passo só e cobrança.',
      },
      {
        q: 'Ele ajuda especificamente a iniciar tarefas?',
        a: 'Sim. Esse é o nosso foco principal. O despejo mental limpa a bagunça da cabeça, a clareza do próximo passo escolhe uma ação possível, e as ferramentas de cobrança te ajudam a ir até o fim. Cada recurso é construído em torno desse primeiro passo.',
      },
      {
        q: 'O que torna a cobrança diferente aqui?',
        a: 'Não é ficar no seu pé nem sequências que te fazem sentir culpa. O Doubly usa check-ins sociais gentis com pessoas reais que se importam com o seu progresso, então você tem alguém do seu lado, não um robô te envergonhando.',
      },
      {
        q: 'Ele substitui rastreadores de hábitos ou agendas?',
        a: 'Pode substituir. Mas o Doubly não tenta ser um canivete suíço. Ele é focado a laser em te ajudar a sair do travado para o começado. Se você precisa de um planejamento detalhado de projetos, combine ele com as ferramentas que você já usa.',
      },
      {
        q: 'Ele é bom se eu me sobrecarrego fácil?',
        a: 'Ainda mais nesse caso. O Doubly nunca mostra tudo de uma vez. Você vê um próximo passo, não uma parede de tarefas. Toda a experiência é feita para cérebros que sobrecarregam rápido.',
      },
    ],
  },

  // FinalCTA
  finalCta: {
    title: 'Seu cérebro não precisa de mais pressão',
    highlight: 'Ele precisa de um jeito de começar.',
    subtitle: 'Para mentes com TDAH que estão cansadas de pensar demais, fugir e ficar para trás.',
    cta: 'Baixar na App Store',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    freeTools: 'Ferramentas gratuitas para TDAH',
    tools: 'Ferramentas',
    learn: 'Aprender',
    privacy: 'Privacidade',
    terms: 'Termos',
    support: 'Suporte',
    copyright: (year: number) => `© ${year} Doubly. Feito para cérebros com TDAH.`,
  },

  // StickyBar
  stickyBar: {
    cta: 'Destrave agora',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | O app de TDAH que te ajuda a começar',
    description:
      'Despeje o caos, receba um próximo passo claro e use a cobrança para realmente ir até o fim. Feito para mentes com TDAH que precisam de ajuda para começar, não só para planejar.',
    keywords: ['TDAH', 'produtividade', 'despejo mental', 'gestão de tarefas', 'cobrança', 'foco'],
    ogTitle: 'Doubly | O app de TDAH que te ajuda a começar',
    ogDescription:
      'Despeje o caos, receba um próximo passo claro e use a cobrança para realmente ir até o fim.',
  },
  // Tool library card copy (title + description per tool).
  // Mirrors content/tools-i18n/${locale}/_index.json cards[] so the homepage grid and
  // the footer speak the visitor's language; kept in sync by scripts/check-tool-cards.mjs.
  toolCards: {
    'task-splitter': {
      title: 'Ferramenta para dividir tarefas',
      description:
        'Digite uma tarefa que você não consegue começar. A IA divide ela em passos pequenos e fáceis de fazer, com tempo estimado. Feita para cérebros com TDAH.',
    },
    'brain-dump': {
      title: 'Ferramenta de despejo mental',
      description:
        'Solte tudo que está na sua cabeça e a IA separa só as tarefas em que dá para agir. Sem cadastro, nada é guardado.',
    },
    'pick-one': {
      title: 'Escolha uma tarefa',
      description:
        'Cole uma lista de tarefas bagunçada e receba uma coisa por onde começar. A menor, a mais assustadora ou aleatória. Feita para a hora em que dez tarefas viram uma única coisa gigante e impossível de começar.',
    },
    'eisenhower-matrix': {
      title: 'Matriz de Eisenhower (edição TDAH)',
      description:
        'Arraste as tarefas para quadrantes tipo "chato mas importante", nada de rótulos de manual. A matriz que finalmente serve para um cérebro com TDAH. Salva no seu navegador.',
    },
    'pomodoro': {
      title: 'Timer pomodoro para TDAH',
      description:
        '25 minutos de trabalho, 5 de pausa - o método de foco que finalmente serve para um cérebro com TDAH. Grátis, sem cadastro, funciona offline.',
    },
    'visual-timer': {
      title: 'Timer visual / relógio de cegueira temporal',
      description:
        'Uma fatia que encolhe para você ver o tempo passar em vez de ler números. Também funciona como relógio de cegueira temporal para adultos com TDAH.',
    },
    'brown-noise': {
      title: 'Gerador de som ambiente',
      description:
        'Gerador de som ambiente grátis que roda no navegador. Ruído marrom, rosa e branco. Um som de fundo constante para acalmar um cérebro agitado com TDAH. Com timer de desligamento e funciona offline.',
    },
    'body-doubling-room': {
      title: 'Sala de body doubling',
      description:
        'Sala de foco grátis para duas pessoas. Compartilhe um link e trabalhem lado a lado por vídeo ponto a ponto, com um timer em comum. Sem cadastro, sem instalar nada.',
    },
    'hyperfocus-timer': {
      title: 'Timer para interromper o hiperfoco',
      description:
        'Check-ins falados a cada X minutos e um limite máximo opcional, para que o hiperfoco do TDAH não engula a sua tarde inteira.',
    },
  },

  toolWidgets: {
    taskSplitter: {
      inputLabel: 'Qual é a tarefa que você não consegue começar?',
      inputPlaceholder: 'ex.: Enviar meu relatório de despesas',
      submit: 'Dividir em passos',
      submitting: 'Dividindo…',
      privacyNote: 'Privado. Nada é salvo no nosso servidor.',
      charactersLeft: (count: number) =>
        `${count} caractere${count === 1 ? '' : 's'} restante${count === 1 ? '' : 's'}`,
      presetsIntro: 'Ou experimente uma destas:',
      presets: {
        cleanKitchen: 'Limpar a cozinha',
        doLaundry: 'Lavar a roupa',
        replyInbox: 'Responder os e-mails',
        planWeekendTrip: 'Planejar uma viagem de fim de semana',
        fileTaxes: 'Declarar o imposto de renda',
        cleanBathroom: 'Limpar o banheiro',
      },
      loading: 'Dividindo em passos…',
      errorRateLimit: 'Calma, muito rápido. Espere um instante e tente de novo.',
      errorGeneric: 'Não deu para dividir agora. Tente de novo em alguns segundos.',
      tryAgain: 'Tentar de novo',
      taskLabel: 'Tarefa',
      urgencyLabels: { low: 'Urgência baixa', medium: 'Urgência média', high: 'Urgência alta' },
      stepsDone: (done: number, total: number) => `${done}/${total} passos concluídos`,
      minTotal: (min: number) => `~${min} min no total`,
      allDoneMessage: 'Pronto. Não foi tão assustador quanto parecia, né?',
      emptyState:
        'Não achamos passos claros para essa. Tente reescrever como uma ação, tipo “Escrever o plano do projeto” ou “Limpar a garagem.”',
    },
    brainDump: {
      label: 'Despeje tudo o que está na sua cabeça. Não precisa estar organizado.',
      placeholder:
        'Vivo esquecendo de ligar pro dentista e a cozinha está uma bagunça.\nEstou sobrecarregado com o projeto do trabalho. Preciso fazer compras\npara o jantar de hoje e responder o e-mail da Sarah da semana passada.',
      privacy: 'Privado. Nada é salvo no nosso servidor.',
      charactersLeft: (remaining: number) =>
        `${remaining} caractere${remaining === 1 ? '' : 's'} restante${remaining === 1 ? '' : 's'}.`,
      clear: 'Limpar',
      submit: 'Extrair as tarefas',
      submitting: 'Extraindo tarefas…',
      loading: 'Lendo seu despejo e separando o que dá para fazer…',
      errorRateLimited: 'Calma, muito rápido. Espere um instante e tente de novo.',
      errorGeneric: 'Não deu para extrair as tarefas agora. Tente de novo em alguns segundos.',
      tryAgain: 'Tentar de novo',
      empty:
        'Não encontramos nada que parecesse uma tarefa concreta aí. Isso pode ser um bom sinal. Se você estava desabafando, isso vale. Se a ideia era listar coisas para fazer, tente ser um pouco mais específico (“mandar e-mail para a Sarah” em vez de “coisas da Sarah”).',
      resultsTitle: 'Tarefas em que dá para agir',
      doneCount: (done: number, total: number) => `${done}/${total} concluídas`,
      footer: 'Escolha uma. Só uma. Faça agora e volte para a próxima.',
    },
    pickOne: {
      inputLabel: 'Cole sua lista. Uma por linha, ou bagunçada com vírgulas. Tanto faz.',
      inputPlaceholder:
        'responder a mãe\nmarcar o dentista\nenviar as despesas\nterminar a apresentação\nregar as plantas',
      itemsDetected: (count: number) => `${count} ${count === 1 ? 'item detectado' : 'itens detectados'}`,
      itemsDetectedWithLeft: (count: number, left: number) =>
        `${count} ${count === 1 ? 'item detectado' : 'itens detectados'}, ${left} restante${left === 1 ? '' : 's'}`,
      clearEverything: 'Limpar tudo',
      modeLegend: 'Como a gente escolhe?',
      modes: {
        smallest: {
          label: 'A menor',
          reason: 'O item mais curto da lista. Comece pequeno e ganhe embalo.',
        },
        scariest: {
          label: 'A mais assustadora',
          reason: 'Aquela que você prefere nem olhar. Fazer ela primeiro libera o dia.',
        },
        random: {
          label: 'Qualquer uma',
          reason: 'Sem pensar demais. A lista escolheu sozinha. É só começar.',
        },
      },
      pickCta: 'Escolha uma para mim',
      pickAnotherCta: 'Escolher outra',
      emptyHint: 'Adicione pelo menos um item e toque em escolher.',
      readyHint: 'Pronto. Toque em “Escolha uma para mim” quando não conseguir decidir.',
      allDoneTitle: 'Lista resolvida.',
      allDoneBody:
        'Todos os itens estão feitos ou pulados. Você pode limpar a lista ou reiniciar para trazer os pulados de volta.',
      bringSkippedBack: 'Trazer os pulados de volta',
      startFreshList: 'Começar uma lista nova',
      pickedEyebrow: 'Comece por esta',
      didIt: 'Fiz',
      notThisOne: 'Essa não',
      pickAgain: 'Escolher de novo',
      progress: (done: number, skipped: number, left: number) =>
        `${done} feita${done === 1 ? '' : 's'}, ${skipped} pulada${skipped === 1 ? '' : 's'}, ${left} restante${left === 1 ? '' : 's'}`,
    },
    eisenhower: {
      inputLabel: 'Adicionar uma tarefa',
      inputPlaceholder: 'Adicione uma tarefa e aperte enter (ou cole várias separadas por quebras de linha)',
      addButton: 'Adicionar',
      totals: (total: number, unsorted: number) =>
        `${total} tarefa${total === 1 ? '' : 's'} no total, ${unsorted} sem classificar`,
      clearAll: 'Limpar tudo',
      unsortedHeading: (count: number) => `Sem classificar (${count})`,
      unsortedListLabel: 'Tarefas sem classificar',
      removeTask: (text: string) => `Remover ${text}`,
      placeHint: 'Agora toque em um quadrante para colocar ela lá.',
      placeHintDesktop: 'Ou arraste e solte no computador.',
      quadrantRegionLabel: (label: string) => `Quadrante ${label}`,
      quadrantCountLabel: (count: number, label: string) =>
        `${count} tarefa${count === 1 ? '' : 's'} em ${label}`,
      dropHere: 'Solte aqui',
      sendBackToUnsorted: 'Voltar para sem classificar',
      moveBackToUnsorted: (text: string) => `Mover ${text} de volta para sem classificar`,
      empty: 'Vazio',
      emptyState:
        'Adicione uma tarefa acima para começar. Tudo fica salvo no seu navegador, nada no nosso servidor.',
      hintLabel: 'Dica do Doubly:',
      hintBody:
        'A pilha do chato mas importante é a que quase todo mundo pula e a que mais dá arrependimento. Se você for fazer só uma coisa hoje, escolha dali.',
      quadrants: {
        fire: {
          label: 'Pegando fogo',
          sub: 'Faça hoje, não amanhã.',
          textbook: 'Importante + Urgente',
        },
        boring: {
          label: 'Chato mas importante',
          sub: 'É aqui que estão as vitórias de verdade. Agende, não pule.',
          textbook: 'Importante + Não urgente',
        },
        noisy: {
          label: 'Barulhento mas dispensável',
          sub: 'Faz barulho, mas não é problema seu. Delegue, adie, ignore.',
          textbook: 'Urgente + Não importante',
        },
        drop: {
          label: 'Largue essas',
          sub: 'Pode largar. A lista não precisa acabar.',
          textbook: 'Não importante + Não urgente',
        },
      },
    },
    pomodoro: {
      timerLabel: 'Timer pomodoro',
      modeTablistLabel: 'Modo do timer',
      modes: {
        work: 'Foco',
        'short-break': 'Pausa curta',
        'long-break': 'Pausa longa',
      },
      dialLabel: (mode: string, time: string) => `Timer de ${mode}. Faltam ${time}.`,
      sessionsToday: (count: number) => `Sessões concluídas hoje: ${count}`,
      soundToggle: 'Som no fim da sessão',
      customizeDurations: 'Personalizar durações',
      hideSettings: 'Ocultar ajustes',
      focusMinutes: 'Foco (min)',
      shortBreakMinutes: 'Pausa curta (min)',
      longBreakMinutes: 'Pausa longa (min)',
      documentTitle: (time: string, mode: string) => `${time} | ${mode} | Doubly`,
    },
    visualTimer: {
      ariaLabel: 'Timer visual de contagem regressiva',
      dialAriaLabel: (remaining: string) => `Mostrador do timer visual. Faltam ${remaining}.`,
      seconds: (s: number) => `${s} segundo${s === 1 ? '' : 's'}`,
      minutes: (m: number) => `${m} minuto${m === 1 ? '' : 's'}`,
      minutesAndSeconds: (m: number, s: number) =>
        `${m} minuto${m === 1 ? '' : 's'} e ${s} segundo${s === 1 ? '' : 's'}`,
      documentTitle: (time: string) => `${time} | Doubly`,
      countingDown: (minutes: number) => `Contando a partir de ${minutes} min`,
      setFor: (minutes: number) => `Definido para ${minutes} min`,
      paused: 'Pausado',
      timeIsUp: 'Acabou o tempo',
      presetsLabel: 'Durações prontas',
      presetMinutes: (minutes: number) => `${minutes} min`,
      custom: 'Personalizado',
      minutesLabel: 'Minutos',
      set: 'Definir',
      soundWhenDone: 'Som quando o tempo acabar',
    },
    brownNoise: {
      play: (sound: string) => `Tocar ${sound}`,
      pause: (sound: string) => `Pausar ${sound}`,
      documentTitle: (sound: string) => `▶ ${sound} · Doubly`,
      chooseSound: 'Escolha um som ambiente',
      soundGroupLabel: 'Som ambiente',
      volume: 'Volume',
      volumePercent: (percent: number) => `${percent}%`,
      sleepTimer: 'Timer de desligamento',
      sleepOff: 'Desligado',
      sleepMinutes: (minutes: number) => `${minutes} min`,
      privacyNote: 'Roda no seu navegador. Nada é gravado, nada é enviado.',
      sounds: {
        brown: {
          name: 'Marrom',
          description: 'Grave e encorpado. Tipo uma cachoeira distante. O do TikTok.',
        },
        pink: {
          name: 'Rosa',
          description: 'Mais suave que o branco, menos grave que o marrom. Equilibrado.',
        },
        white: {
          name: 'Branco',
          description: 'O chiado de uma TV antiga. Agudo e constante.',
        },
      },
    },
    hyperfocus: {
      ariaLabel: 'Timer para interromper o hiperfoco',

      // Durações. Toda a formulação fica aqui para cada idioma escolher
      // seus plurais, unidades e ordem das palavras.
      minutesShort: (minutes: number) => `${minutes} min`,
      hoursShort: (hours: number) => `${hours} h`,
      hoursMinutesShort: (hours: number, minutes: number) => `${hours} h ${minutes} min`,
      durationLong: (hours: number, minutes: number) => {
        if (hours === 0 && minutes === 0) return 'menos de um minuto';
        const parts: string[] = [];
        if (hours > 0) parts.push(`${hours} hora${hours === 1 ? '' : 's'}`);
        if (minutes > 0) parts.push(`${minutes} minuto${minutes === 1 ? '' : 's'}`);
        return parts.join(' e ');
      },

      // Faixa da sessão. O texto entre ** aparece destacado.
      stripNoCap: (interval: string) => `Check-in a cada ${interval}, sem limite máximo`,
      stripWithCap: (interval: string, cap: string) =>
        `Check-in a cada ${interval}, limite máximo em ${cap}`,
      summaryNoCap: (interval: string) => `Check-in a cada **${interval}**, sem limite máximo.`,
      summaryWithCap: (interval: string, cap: string) =>
        `Check-in a cada **${interval}**, com limite máximo em **${cap}**.`,

      // Configuração
      intervalHeading: 'Fazer check-in a cada',
      custom: 'Personalizado',
      minutes: 'Minutos',
      set: 'Definir',
      jitterNote:
        'Os check-ins variam uns dez por cento no horário, para o cérebro não conseguir ignorar antes de acontecer.',
      moreOptions: 'Mais opções',
      hideOptions: 'Ocultar opções',
      taskLabel: 'No que você está trabalhando? (opcional)',
      taskPlaceholder: 'ex.: imposto de renda, revisão de design, o roteiro',
      taskHint: 'Usado nos check-ins falados, para você ouvir o que sentou para fazer.',
      hardStopHeading: 'Limite máximo depois de',
      hardStopHint:
        'Um alerta mais alto dispara quando o limite chega, para uma espiral de seis horas não passar batido.',
      capOff: 'Desligado',
      capHours: (hours: number) => `${hours}h`,
      noHardStop: 'sem limite máximo',
      alertsHeading: 'Alertas',
      chime: 'Som',
      voice: 'Voz',
      notify: 'Notificar',
      alertsHint:
        'O som fica mais alto se você ignorar um check-in. A voz fala a hora e quanto tempo já passou. A notificação aparece no navegador quando a aba está em segundo plano.',
      notificationsBlocked:
        'As notificações estão bloqueadas neste navegador. Libere nas configurações do site para usar.',
      notificationsUnsupported: 'Seu navegador não suporta notificações web.',
      startSession: 'Começar sessão',

      // Sessão em andamento
      statElapsed: 'Decorrido',
      statNextCheckIn: 'Próximo check-in',
      statCap: 'Limite',
      statusNow: 'Agora',
      statusPaused: 'Pausado',
      statusCapHit: 'Limite atingido',
      statusOff: 'Desligado',
      workingOn: (task: string) => `Trabalhando em **${task}**`,
      checkInHeading: 'Check-in rápido',
      checkInBody: (clock: string, elapsed: string) =>
        `São ${clock} e você está nisso há ${elapsed}. Ainda está na tarefa que começou, ou já é hora de voltar à superfície?`,
      stillGoing: 'Continuar',
      takeABreak: 'Fazer uma pausa',
      stopSession: 'Parar a sessão',
      capHeading: 'Limite da sessão atingido',
      capBody: (minutes: number) =>
        `Você definiu um limite máximo de ${minutes} minutos. Levante, beba água, coma alguma coisa. O trabalho continua aqui.`,
      pause: 'Pausar',
      resume: 'Retomar',
      endSession: 'Encerrar sessão',
      checkInLog: 'Histórico de check-ins',
      logContinue: 'continuou',
      logBreak: 'fez uma pausa',
      logStop: 'parou',

      // Título da aba enquanto um check-in espera em segundo plano.
      tabAlert: '⚠ Check-in | Doubly',

      // Falado em voz alta (SpeechSynthesis) e enviado como notificação do sistema.
      checkInSpeech: (clock: string, elapsed: string, task: string) =>
        task
          ? `Check-in. São ${clock}. Você está trabalhando em ${task} há ${elapsed}.`
          : `Check-in. São ${clock}. Você está trabalhando há ${elapsed}.`,
      capSpeech: (clock: string, elapsed: string) =>
        `Limite da sessão atingido. São ${clock}. Você está nisso há ${elapsed}. Hora de parar.`,
      notificationCheckInTitle: 'Check-in do hiperfoco',
      notificationCheckInBody: (clock: string, elapsed: string) =>
        `São ${clock}. Você está nisso há ${elapsed}.`,
      notificationCapTitle: 'Limite do hiperfoco atingido',
      notificationCapBody: (clock: string, elapsed: string) =>
        `São ${clock}. Você está nisso há ${elapsed}. Hora de parar.`,
    },
    shared: {
      start: 'Começar',
      pause: 'Pausar',
      resume: 'Retomar',
      done: 'Pronto',
      reset: 'Reiniciar',
      skip: 'Pular',
      skipAria: 'Pular para a próxima sessão',
      startSession: 'Começar uma sessão de foco',
      creatingRoom: 'Criando a sala...',
    },
    chrome: {
      tryInApp: 'Experimente no app',
      appStoreAria: (label: string) => `${label} na App Store`,
      breadcrumbAria: 'Trilha de navegação',
    },
  },

};

export default ptBR;
