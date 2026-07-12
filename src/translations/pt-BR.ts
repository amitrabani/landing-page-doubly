const ptBR = {
  // Shared
  common: {
    tryInDoubly: 'Experimente no Doubly',
    socialProof: (count: number) => `Junte-se a ${count.toLocaleString('pt-BR')} pessoas com TDAH`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
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
};

export default ptBR;
