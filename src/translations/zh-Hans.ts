const zhHans = {
  // Shared
  common: {
    tryInDoubly: '在 Doubly 里试试',
    changeLanguage: '切换语言',
    socialProof: (count: number) => `加入 ${count.toLocaleString('zh-CN')} 位 ADHD 伙伴`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    tools: '工具',
    howItWorks: '如何运作',
    features: '功能',
    testimonials: '用户评价',
    faq: '常见问题',
    cta: '获取 Doubly',
    toggleMenu: '切换菜单',
  },

  // Hero
  hero: {
    badge: '为 ADHD 大脑打造',
    titlePrefix: '当你的大脑同时开着 ',
    titleHighlight: '47 个标签页',
    subtitle: '不到一分钟,把混乱变成一个清晰的下一步。',
    cta: '在 App Store 下载',
    secondaryCta: '看它拆解一个任务 ↓',
    android: {
      prompt: '在用安卓?',
      placeholder: '你的邮箱地址',
      submit: '通知我',
      success: '已加入等候名单。Doubly 登陆安卓时,我们会邮件通知你。',
      invalid: '请输入有效的邮箱地址。',
      error: '出了点问题,请重试。',
    },
    floatingCards: {
      brainDump: '大脑清空',
      habits: '习惯',
      accountability: '监督陪伴',
    },
    phone: {
      screenAlt: 'Doubly 应用展示你的习惯,包括每日连续记录和进度网格',
    },
  },

  // Problem
  problem: {
    title: 'ADHD 不只是不够有条理',
    titleHighlight: '不够有条理',
    subtitle:
      '这是一场每天都要打的仗:你的大脑就是不肯配合你自己的意愿。',
    cards: [
      {
        type: 'External',
        title: '任务太多。念头太多。',
        body: '找不到一个明确的起点。',
      },
      {
        type: 'Internal',
        title: '你知道该做什么,却还是开不了头。',
        body: '这不是懒。这是启动阻力。',
      },
      {
        type: 'Philosophical',
        title: '开个头,本不该这么难。',
        body: '你的大脑运作方式不同,你的工具也该如此。',
      },
      {
        type: 'Stakes',
        title: '而它让你付出的,远不止时间。',
        body: '事情越积越多。你越落越远。你开始不再相信自己。',
      },
    ],
  },

  // VisualProblem
  visualProblem: {
    cards: [
      { image: '/problem-1.jpg', alt: '任务太多。念头太多。' },
      { image: '/problem-2.jpg', alt: '你知道该做什么,却还是开不了头。' },
      { image: '/problem-4.jpg', alt: '做些平常的事,本不该这么难。' },
      { image: '/problem-3.jpg', alt: '而它让你付出的,远不止时间。' },
    ],
  },

  // Guide
  guide: {
    title: '专为难以起步的 ADHD 大脑打造',
    subtitle:
      '大多数效率应用都假设你的大脑已经准备好做计划。Doubly 却是为你不知所措、卡住、或一再逃避的那一刻打造的,它基于 ADHD 真实的运作方式。',
    proofPoints: [
      '为 ADHD 的卡点而设计,而不是泛泛的效率工具',
      '帮你减轻启动阻力',
      '给你结构,又不会把你压垮',
    ],
    mockup: {
      brainDump: '大脑清空',
      items: ['打给牙医', '买菜', '回复老板', '洗衣服', '我怎么这么累'],
      yourNextStep: '你的下一步',
      nextStepTask: '把衣服放进洗衣机',
      nextStepMeta: '约 5 分钟 · 低能量',
      accountability: '监督陪伴',
      accountabilityText: 'Sarah 下午 3 点来查看进度',
    },
  },

  // BrainDumpDemo
  brainDumpDemo: {
    title: '倒出混乱,留下任务。',
    titleHighlight: '留下任务。',
    replayDemo: '重新播放演示',
    subtitle:
      '脑子塞满了?打字 20 秒。Doubly 会挑出能落地的事,把噪音丢掉。',
    dumpText:
      '我打开笔记本电脑想干点正事,结果不到五秒钟,我的大脑就开始了:回那条消息、买维生素、洗水槽、找充电器、吃点东西,对了还要记住那个你绝对不会忘记的超级重要的任务。然后我立刻就忘了。',
    brainDumpLabel: '大脑清空',
    brainDumpPlaceholder: '尽管倒出来……',
    extractedTasksLabel: '提取出的任务',
    listening: '正在聆听……',
    tasksFound: (count: number) => `找到 ${count} 个任务`,
    filterNote: '无法执行的念头已被过滤,只留下真正的任务。',
    tasks: [
      { text: '💊 买维生素', phrase: '买维生素' },
      { text: '🧽 洗水槽', phrase: '洗水槽' },
      { text: '🔌 找充电器', phrase: '找充电器' },
      { text: '🍽️ 吃点东西', phrase: '吃点东西' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: '你就是这样摆脱卡顿的',
    titleHighlight: '摆脱卡顿',
    subtitle: '四个简单步骤。无需复杂设置。没有学习成本。',
    stepLabel: '步骤',
    steps: [
      {
        number: '01',
        title: '清空你的大脑',
        body: '快速记下想法、任务和脑中的杂乱。无需整理,先倒出来就好。',
      },
      {
        number: '02',
        title: '得到一个清晰的下一步',
        body: 'Doubly 把不知所措变成你真正能开始的事。不是十个优先级,而是一个。',
      },
      {
        number: '03',
        title: '保持前进',
        body: '用监督、计时器和进度工具持续推进,哪怕动力消退也不停。',
      },
      {
        number: '04',
        title: '找人一起监督',
        body: '在 Doubly 动态里和朋友分享。当有人为你加油时,真正的监督才会发生。',
      },
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: '输入一个任务,看它被拆开。',
    titleHighlight: '拆开。',
    subtitle:
      '大任务让人觉得不可能。Doubly 把它们拆成 2 到 5 分钟的小步,让你直接就能开始。',
    customInputPlaceholder: '或者输入你自己的任务……',
    splitButton: '拆解它',
    taskLabel: '任务',
    aiThinking: 'AI 正在拆解……',
    errorMessage: '暂时连不上 AI。试试上面的预设,或稍后再试。',
    tryAgain: '重试',
    stepsDone: (done: number, total: number) => `已完成 ${done}/${total} 步`,
    minTotal: (min: number) => `共约 ${min} 分钟`,
    urgencySuffix: '紧急度',
    urgencyLabels: { low: '紧急度低', medium: '紧急度中', high: '紧急度高' },
    allDoneMessage: '全部搞定。没那么难吧?',
    allDoneDescription:
      '你丢给 Doubly 的每个任务,它都会这样处理。再也不用盯着一长串待办发呆。',
    allDoneCta: '立刻摆脱卡顿',
    presets: [
      { label: '打扫厨房', icon: '🍳' },
      { label: '洗衣服', icon: '🧰' },
      { label: '做晚饭', icon: '🍲' },
      { label: '打扫浴室', icon: '🚿' },
      { label: '整理卧室', icon: '🛏️' },
      { label: '买菜', icon: '🛒' },
    ],
    presetResults: {
      '打扫厨房': {
        title: '🍳 打扫厨房',
        subtasks: [
          { text: '清空台面,把东西归位', duration: '3 分钟' },
          { text: '把脏碗碟放进洗碗机', duration: '5 分钟' },
          { text: '擦净台面和灶台', duration: '4 分钟' },
          { text: '刷洗水槽', duration: '2 分钟' },
          { text: '扫地', duration: '3 分钟' },
          { text: '倒垃圾', duration: '2 分钟' },
        ],
        urgency: 'medium',
      },
      '洗衣服': {
        title: '🧰 洗衣服',
        subtasks: [
          { text: '把家里各处的脏衣服收集起来', duration: '5 分钟' },
          { text: '分成白色、彩色和需轻柔洗的衣物', duration: '3 分钟' },
          { text: '把第一批放进洗衣机', duration: '2 分钟' },
          { text: '把上一批洗好的衣服晾起来或叠好', duration: '10 分钟' },
          { text: '把叠好的衣服放进抽屉或衣柜', duration: '5 分钟' },
        ],
        urgency: null,
      },
      '做晚饭': {
        title: '🍲 做晚饭',
        subtasks: [
          { text: '决定做什么并检查食材', duration: '3 分钟' },
          { text: '洗菜、备菜', duration: '8 分钟' },
          { text: '开始做主菜', duration: '15 分钟' },
          { text: '准备配菜或沙拉', duration: '7 分钟' },
          { text: '摆好餐桌', duration: '2 分钟' },
          { text: '装盘上桌', duration: '2 分钟' },
        ],
        urgency: 'low',
      },
      '打扫浴室': {
        title: '🚿 打扫浴室',
        subtasks: [
          { text: '在淋浴间、洗手池和马桶上喷清洁剂', duration: '2 分钟' },
          { text: '刷马桶内壁,擦净马桶圈', duration: '3 分钟' },
          { text: '清洁洗手池和水龙头', duration: '2 分钟' },
          { text: '擦净镜子', duration: '1 分钟' },
          { text: '刷洗淋浴间或浴缸', duration: '5 分钟' },
          { text: '拖地或擦地', duration: '3 分钟' },
          { text: '换毛巾,补充卫生纸', duration: '2 分钟' },
        ],
        urgency: 'medium',
      },
      '整理卧室': {
        title: '🛏️ 整理卧室',
        subtasks: [
          { text: '铺好床,摆正枕头', duration: '3 分钟' },
          { text: '把地上和椅子上的衣服收起来', duration: '4 分钟' },
          { text: '把脏衣服放进洗衣篮,干净的收好', duration: '5 分钟' },
          { text: '清理并整理床头柜', duration: '3 分钟' },
          { text: '擦去表面灰尘', duration: '3 分钟' },
          { text: '吸尘或扫地', duration: '4 分钟' },
        ],
        urgency: 'low',
      },
      '买菜': {
        title: '🛒 买菜',
        subtasks: [
          { text: '看看冰箱和储物柜,列出需要买的', duration: '5 分钟' },
          { text: '按货架分区写好购物清单', duration: '5 分钟' },
          { text: '拿上环保购物袋', duration: '1 分钟' },
          { text: '逐一采购并打勾', duration: '30 分钟' },
          { text: '把买回的东西归置好', duration: '10 分钟' },
        ],
        urgency: null,
      },
    },
  },

  // TwoQuestions
  twoQuestions: {
    title: '这些是不是很眼熟?',
    titleHighlight: '很眼熟',
    subtitle: '你不是懒。你的大脑只是需要一个不同的起点。',
    withoutDoubly: '没有 Doubly',
    withDoubly: '有了 Doubly',
    rows: [
      {
        without: '我僵住了,不知道从哪开始',
        with: '大脑清空 → 一个清晰的下一步出现了',
      },
      {
        without: '我转头去做些零碎的小事',
        with: 'Doubly 先把真正重要的事挑出来',
      },
      {
        without: '我一次同时开始五件事',
        with: '屏幕上只有一个任务。做完它,再做下一个。',
      },
      {
        without: '我为了完美的计划想太多',
        with: '把一切倒出来,Doubly 帮你挑出第一步',
      },
      {
        without: '我一直拖到火烧眉毛,然后慌了神',
        with: '你在慌乱来临之前就开始了',
      },
      {
        without: '我一个人做,很快就没了劲头',
        with: '身旁陪伴和监督伙伴让你持续前进',
      },
    ],
    questionTitle: '在那一刻,你最需要什么?',
    options: [
      '来个大脑清空',
      '一个小小的下一步',
      '监督陪伴',
      '计时器 / 专注推力',
      '落后时重新开始',
    ],
    responseIntro: '这正是 Doubly 能帮上忙的地方。',
    responses: {
      '来个大脑清空': {
        title: '大脑清空 → 立刻清晰',
        description:
          '把混乱打出来。Doubly 会提取能执行的部分,丢掉噪音。',
      },
      '一个小小的下一步': {
        title: '下一步,随时就绪',
        description:
          'Doubly 把大任务拆开,只给你下一个小小的动作。不再压垮你。',
      },
      '监督陪伴': {
        title: '监督式进度查看',
        description:
          '温和的提醒和来自他人的监督,帮你保持在轨,而不带负罪感。',
      },
      '计时器 / 专注推力': {
        title: '专注模式',
        description:
          '屏幕上只有一个任务,计时器在走,干扰消失。只剩你和这件事。',
      },
      '落后时重新开始': {
        title: '重新开始,没有负罪感',
        description:
          '掉队了?Doubly 会重新安排你的计划,让你重新拾起,而不陷入自责的漩涡。',
      },
    },
    mockupNextStep: '你的下一步准备好了',
    mockupTask: '从一件小事开始',
    mockupCta: '试试 Doubly',
  },


  // HabitDemo
  habitDemo: {
    title: '养成真正能坚持的习惯',
    subtitle:
      '没有会中断的连续记录。没有负罪感。做了就点一下。Doubly 会记录规律,让你看得见进步。',
    todayLabel: '今天',
    yourHabits: '你的习惯',
    weeksLabel: '12 周',
    lessLabel: '更少',
    moreLabel: '更多',
    currentStreak: '当前连续',
    bestStreak: '最佳连续',
    completion: '完成率',
    allDoneMessage: '今天的习惯全部完成!',
    allDoneDescription: '想象一下每天都这样。Doubly 让坚持变得轻松。',
    allDoneCta: '立刻摆脱卡顿',
    habits: [
      { id: 'walk', name: '去散步', icon: '🚶' },
      { id: 'read', name: '读 10 页书', icon: '📖' },
      { id: 'journal', name: '写日记', icon: '✏️' },
      { id: 'tidy', name: '整理 10 分钟', icon: '🧹' },
    ],
  },

  // Success
  success: {
    title: '别再刷手机刷到心累,换一个让你动起来的动态。',
    imageAlt: 'Doubly 应用的帖子详情,显示已完成的任务以及社区的点赞和评论',
    subtitle: '别再刷手机刷到心累,换一个让你动起来的动态。',
    outcomes: [
      '开始任务时不必再和自己较劲',
      '把计划好的事真正做完',
      '重回正轨,而不陷入恶性循环',
      '重新相信自己真的能把事做成',
    ],
  },

  // Stakes
  stakes: {
    title: '因为一直卡着是有代价的',
    body: '当开始变得这么难,事情就会溜走。截止日期错过,机会流走,你开始觉得自己困在逃避和内疚的循环里。Doubly 帮你在又一周消失之前打破这个循环。',
  },

  // Testimonials
  testimonials: {
    title: '人们不需要更多的效率压力',
    subtitle: '他们需要的是开始的助力。',
    items: [
      // Real App Store reviews, quoted verbatim. Only add entries that are actual
      // published reviews AND whose reviewer gave permission (Apple's rule; ask by
      // replying to the review in App Store Connect). The grid auto-adapts up to 3.
      {
        quote:
          'This app is the only one that actually got me to do things. I have very strong ADHD, and it made me concentrate on my tasks one by one to always know what’s coming ahead and make order in my day. Love it so much! Hope to see awesome upgrades soon 🙏🏻',
        name: 'Liorcic',
        label: 'App Store 评价',
      },
      {
        quote:
          'This has really helped me manage my workload, I haven’t seen anything like it. The walkthrough and set up is very intuitive, and the features make it worth it!',
        name: 'MinecraftrNinja',
        label: 'App Store 评价',
      },
      // Slot 3 — next permitted review goes here.
    ],
  },

  // FAQ
  // ToolsSection
  toolsSection: {
    title: '现在就能用的免费 ADHD 工具',
    subtitle: '无需注册,没有弹窗。卡住的那一刻,在浏览器里直接打开一个。',
    hot: '热门',
    openTool: '打开工具',
    browseAll: '浏览所有免费 ADHD 工具',
  },

  faq: {
    title: '常见问题',
    items: [
      {
        q: 'Doubly 只适合被确诊为 ADHD 的人吗?',
        a: '不。Doubly 适合任何在起步、不知所措或思绪杂乱上挣扎的人。你不需要确诊,只要有一个在事情太多时偶尔会卡住的大脑。',
      },
      {
        q: '这和普通的待办应用有什么不同?',
        a: '待办应用帮你把事情列出来,Doubly 帮你真正开始去做。我们专注于减轻启动阻力,也就是「知道该做」和「真的去做」之间的那道鸿沟,靠的是大脑清空、单步清晰和监督陪伴。',
      },
      {
        q: '它专门帮助任务启动吗?',
        a: '是的,这正是我们的核心。大脑清空扫除思绪杂乱,下一步清晰挑出一个可执行的动作,监督工具帮你坚持到底。每一个功能都围绕着那第一步而设计。',
      },
      {
        q: '这里的监督陪伴有什么不同?',
        a: '它不是唠叨,也不是让你内疚的连续打卡记录。Doubly 用的是温和的社交式进度查看,来自真正关心你进展的人,让你身边有人支持,而不是一个让你羞愧的机器人。',
      },
      {
        q: '它能取代习惯打卡工具或计划本吗?',
        a: '可以。但 Doubly 并不想做一把瑞士军刀。它极度专注于帮你从「卡住」走向「开始」。如果你需要详细的项目规划,把它和你现有的工具搭配使用。',
      },
      {
        q: '如果我很容易不知所措,它合适吗?',
        a: '尤其合适。Doubly 从不会一次把所有东西都摆在你面前。你看到的是一个下一步,而不是一整墙的任务。整个体验都是为容易过载的大脑设计的。',
      },
    ],
  },

  // FinalCTA
  finalCta: {
    title: '你的大脑不需要更多压力',
    highlight: '它需要的是一个开始的方法。',
    subtitle: '献给那些厌倦了想太多、逃避和落后的 ADHD 心灵。',
    cta: '在 App Store 下载',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    freeTools: '免费 ADHD 工具',
    tools: '工具',
    learn: '学习资源',
    privacy: '隐私',
    terms: '条款',
    support: '支持',
    copyright: (year: number) => `© ${year} Doubly. 为 ADHD 大脑打造。`,
  },

  // StickyBar
  stickyBar: {
    cta: '立刻摆脱卡顿',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | 帮你开始行动的 ADHD 应用',
    description:
      '把混乱一键清空,得到一个清晰的下一步,再靠监督陪伴真正坚持到底。为需要开始助力、而不只是做计划的 ADHD 心灵打造。',
    keywords: ['ADHD', '效率', '大脑清空', '任务管理', '监督陪伴', '专注'],
    ogTitle: 'Doubly | 帮你开始行动的 ADHD 应用',
    ogDescription:
      '把混乱一键清空,得到一个清晰的下一步,再靠监督陪伴真正坚持到底。',
  },
};

export default zhHans;
