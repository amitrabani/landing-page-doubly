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
  // Tool library card copy (title + description per tool).
  // Mirrors content/tools-i18n/${locale}/_index.json cards[] so the homepage grid and
  // the footer speak the visitor's language; kept in sync by scripts/check-tool-cards.mjs.
  toolCards: {
    'task-splitter': {
      title: '任务拆解工具',
      description:
        '输入一个你开不了头的任务,AI 会把它拆成一个个能做到的小步骤,还带时间估算。为 ADHD 大脑打造。',
    },
    'brain-dump': {
      title: '大脑清空工具',
      description:
        '把脑子里的一切都倒出来,AI 只把能落地的任务挑出来。无需注册,不留存任何内容。',
    },
    'pick-one': {
      title: '挑一个任务',
      description:
        '粘贴一份乱糟糟的待办清单,只带走一件可以先做的事。最小的、最让你发怵的,或者随机挑一个。专为十件事在眼前糊成一团、根本无从下手的那一刻而做。',
    },
    'eisenhower-matrix': {
      title: '艾森豪威尔矩阵(ADHD 版)',
      description:
        '把任务拖进「无聊却重要」这样的象限,而不是教科书上的标签。这个矩阵,终于是照着 ADHD 大脑做的。数据保存在本地。',
    },
    'pomodoro': {
      title: 'ADHD 番茄钟',
      description:
        '专注 25 分钟,休息 5 分钟,这套专注法终于适合 ADHD 大脑。免费,无需注册,离线也能用。',
    },
    'visual-timer': {
      title: '可视化计时器 / 时间盲视时钟',
      description:
        '一块慢慢变小的扇形,让你亲眼看见时间在流走,而不是去读数字。对 ADHD 成年人来说,它也是一个时间盲视时钟。',
    },
    'brown-noise': {
      title: '环境音生成器',
      description:
        '在浏览器里直接用的免费环境音生成器。棕噪音,外加粉红噪音和白噪音。用稳定的背景声安抚忙个不停的 ADHD 大脑。自带睡眠定时器,离线也能用。',
    },
    'body-doubling-room': {
      title: '身旁陪伴室',
      description:
        '免费的双人专注房间。分享一个链接,通过点对点视频并肩做事,共用一个计时器。无需注册,无需安装。',
    },
    'hyperfocus-timer': {
      title: '超专注中断计时器',
      description:
        '每隔 X 分钟用语音提醒你一次,还能设一个硬性停止时间,免得一场 ADHD 超专注把你一整个下午都耗光。',
    },
  },

  toolWidgets: {
    taskSplitter: {
      inputLabel: '哪个任务你迟迟开不了头?',
      inputPlaceholder: '例如:提交报销单',
      submit: '拆解它',
      submitting: '正在拆解……',
      privacyNote: '私密。我们的服务器不保存任何内容。',
      charactersLeft: (count: number) => `还可以输入 ${count} 字`,
      presetsIntro: '或者试试这些:',
      presets: {
        cleanKitchen: '打扫厨房',
        doLaundry: '洗衣服',
        replyInbox: '回复邮件',
        planWeekendTrip: '计划周末出游',
        fileTaxes: '报税',
        cleanBathroom: '打扫浴室',
      },
      loading: '正在拆成一个个小步……',
      errorRateLimit: '你太快啦。稍等片刻再试。',
      errorGeneric: '暂时拆解不了。几秒后再试一次。',
      tryAgain: '重试',
      taskLabel: '任务',
      urgencyLabels: { low: '紧急度低', medium: '紧急度中', high: '紧急度高' },
      stepsDone: (done: number, total: number) => `已完成 ${done}/${total} 步`,
      minTotal: (min: number) => `共约 ${min} 分钟`,
      allDoneMessage: '搞定。没有看上去那么吓人吧?',
      emptyState:
        '这个没法拆出清晰的小步。换成一个动作试试,比如「写项目计划」或「打扫车库」。',
    },
    brainDump: {
      label: '把脑子里的一切都倒出来。不用整理。',
      placeholder:
        '我总忘记给牙医打电话,厨房也乱成一团。\n工作上那个项目让我喘不过气。今晚要买菜做饭,\n还得回 Sarah 上周发来的邮件。',
      privacy: '私密。我们的服务器不保存任何内容。',
      charactersLeft: (remaining: number) => `还可以输入 ${remaining} 字。`,
      clear: '清空',
      submit: '把任务挑出来',
      submitting: '正在挑出任务……',
      loading: '正在读你倒出来的内容,挑出能落地的部分……',
      errorRateLimited: '你太快啦。稍等片刻再试。',
      errorGeneric: '暂时提取不出任务。几秒后再试一次。',
      tryAgain: '重试',
      empty:
        '这里面没找到像是具体任务的东西。这未必是坏事。如果你只是想倾诉一下,那也算数。如果你本来是想列出要做的事,试着说得具体一点(写「给 Sarah 发邮件」,而不是「Sarah 的事」)。',
      resultsTitle: '能落地的任务',
      doneCount: (done: number, total: number) => `已完成 ${done}/${total} 项`,
      footer: '挑一个。就一个。现在就做,做完再回来拿下一个。',
    },
    pickOne: {
      inputLabel: '把你的清单粘进来。一行一个,或者用逗号乱写一气。随便。',
      inputPlaceholder: '回复妈妈\n预约牙医\n提交报销\n做完幻灯片\n给植物浇水',
      itemsDetected: (count: number) => `识别到 ${count} 项`,
      itemsDetectedWithLeft: (count: number, left: number) =>
        `识别到 ${count} 项,还剩 ${left} 项`,
      clearEverything: '全部清空',
      modeLegend: '要怎么挑?',
      modes: {
        smallest: {
          label: '最小的',
          reason: '清单上最短的一项。从小处起步,攒起势头。',
        },
        scariest: {
          label: '最吓人的',
          reason: '你最不想看的那一项。先干掉它,一整天都轻松了。',
          // Shown when nothing on the list trips a dread word. Ranking by length
          // instead would be a lie, so we say what we actually did.
          noSignalReason: '这里没有一件看着吓人的,这本身就是好消息。那就随手挑了一个。',
        },
        random: {
          label: '随便挑一个',
          reason: '不用纠结。清单自己选好了。开始就行。',
        },
      },
      // Dread words for the "Scariest" mode. Matched as substrings against the
      // lowercased item. Chinese has no spaces, so short stems work naturally:
      // 牙医 catches 「预约牙医」, 回复 catches 「回复邮件」. Prefer 2-character
      // stems; a single character (税, 还, 报) collides with innocent words.
      //
      // This is a localized list, not a translation of the English one: it is
      // what people here actually put off (报税, 社保, 公积金, 物业, 领导, 道歉).
      scaryWords: [
        '报税',
        '个税',
        '社保',
        '公积金',
        '房租',
        '物业',
        '房贷',
        '还款',
        '账单',
        '欠费',
        '保险',
        '银行',
        '签证',
        '律师',
        '法院',
        '投诉',
        '退款',
        '退订',
        '注销',
        '报销',
        '牙医',
        '医院',
        '体检',
        '挂号',
        '回复',
        '电话',
        '道歉',
        '拒绝',
        '领导',
        '老板',
        '面试',
        '分手',
        '逾期',
        '截止',
        '拖着',
        '拖延',
        '忘了',
      ],
      pickCta: '帮我挑一个',
      pickAnotherCta: '再挑一个',
      emptyHint: '至少添加一项,再点挑选。',
      readyHint: '准备好了。拿不定主意时,就点「帮我挑一个」。',
      allDoneTitle: '清单搞定了。',
      allDoneBody:
        '每一项要么做完了,要么跳过了。你可以清空清单,也可以重置一下,把跳过的重新放回来。',
      bringSkippedBack: '把跳过的放回来',
      startFreshList: '开一份新清单',
      pickedEyebrow: '就从这个开始',
      didIt: '做完了',
      notThisOne: '不要这个',
      pickAgain: '重新挑',
      progress: (done: number, skipped: number, left: number) =>
        `已完成 ${done} 项,跳过 ${skipped} 项,还剩 ${left} 项`,
    },
    eisenhower: {
      inputLabel: '添加任务',
      inputPlaceholder: '输入任务后按回车(也可以按行粘贴多条)',
      addButton: '添加',
      totals: (total: number, unsorted: number) =>
        `共 ${total} 项任务,${unsorted} 项待归类`,
      clearAll: '全部清空',
      unsortedHeading: (count: number) => `待归类(${count})`,
      unsortedListLabel: '待归类的任务',
      removeTask: (text: string) => `移除「${text}」`,
      placeHint: '点一个象限,把它放进去。',
      placeHintDesktop: '在电脑上也可以直接拖拽。',
      quadrantRegionLabel: (label: string) => `${label}象限`,
      quadrantCountLabel: (count: number, label: string) => `${label}里有 ${count} 项任务`,
      dropHere: '放到这里',
      sendBackToUnsorted: '退回待归类',
      moveBackToUnsorted: (text: string) => `把「${text}」退回待归类`,
      empty: '空',
      emptyState:
        '在上面添加一个任务就能开始。所有内容都存在你的浏览器里,我们的服务器上什么都没有。',
      hintLabel: 'Doubly 小提示:',
      hintBody:
        '「无聊却重要」那一堆,是大多数人会跳过、事后又最后悔跳过的。今天如果只做一件事,就从那里挑。',
      quadrants: {
        fire: {
          label: '火烧眉毛',
          sub: '今天就做,别拖到明天。',
          textbook: '重要 + 紧急',
        },
        boring: {
          label: '无聊却重要',
          sub: '真正有回报的事。排进日程,别跳过。',
          textbook: '重要 + 不紧急',
        },
        noisy: {
          label: '吵闹但可略过',
          sub: '动静很大,但不是你的问题。交给别人、往后放,或者干脆无视。',
          textbook: '紧急 + 不重要',
        },
        drop: {
          label: '直接放弃',
          sub: '这是允许的。清单不一定非要做完。',
          textbook: '不重要 + 不紧急',
        },
      },
    },
    pomodoro: {
      timerLabel: '番茄钟',
      modeTablistLabel: '计时模式',
      modes: {
        work: '专注',
        'short-break': '短休息',
        'long-break': '长休息',
      },
      dialLabel: (mode: string, time: string) => `${mode}计时。还剩 ${time}。`,
      sessionsToday: (count: number) => `今天已完成 ${count} 轮`,
      soundToggle: '结束时响提示音',
      customizeDurations: '自定义时长',
      hideSettings: '隐藏设置',
      focusMinutes: '专注(分钟)',
      shortBreakMinutes: '短休息(分钟)',
      longBreakMinutes: '长休息(分钟)',
      documentTitle: (time: string, mode: string) => `${time} | ${mode} | Doubly`,
    },
    visualTimer: {
      ariaLabel: '可视化倒计时器',
      dialAriaLabel: (remaining: string) => `可视化计时表盘。还剩 ${remaining}。`,
      seconds: (s: number) => `${s} 秒`,
      minutes: (m: number) => `${m} 分钟`,
      minutesAndSeconds: (m: number, s: number) => `${m} 分 ${s} 秒`,
      documentTitle: (time: string) => `${time} | Doubly`,
      countingDown: (minutes: number) => `正在从 ${minutes} 分钟倒数`,
      setFor: (minutes: number) => `已设为 ${minutes} 分钟`,
      paused: '已暂停',
      timeIsUp: '时间到',
      presetsLabel: '时长预设',
      presetMinutes: (minutes: number) => `${minutes} 分钟`,
      custom: '自定义',
      minutesLabel: '分钟',
      set: '设定',
      soundWhenDone: '时间到时响提示音',
    },
    brownNoise: {
      play: (sound: string) => `播放${sound}`,
      pause: (sound: string) => `暂停${sound}`,
      documentTitle: (sound: string) => `▶ ${sound} · Doubly`,
      chooseSound: '选择一种环境音',
      soundGroupLabel: '环境音',
      volume: '音量',
      volumePercent: (percent: number) => `${percent}%`,
      sleepTimer: '睡眠定时',
      sleepOff: '关闭',
      sleepMinutes: (minutes: number) => `${minutes} 分钟`,
      privacyNote: '在你的浏览器里运行。不录音,不上传。',
      sounds: {
        brown: {
          name: '棕噪音',
          description: '低沉,隆隆作响。像远处的瀑布。TikTok 上很火的那种。',
        },
        pink: {
          name: '粉红噪音',
          description: '比白噪音柔和,低音又没棕噪音那么重。很均衡。',
        },
        white: {
          name: '白噪音',
          description: '像老电视的沙沙声。明亮而均匀。',
        },
      },
    },
    hyperfocus: {
      ariaLabel: '超专注中断计时器',

      // Durations. Every phrasing lives here so a language can pick its own
      // plural forms, units and word order.
      minutesShort: (minutes: number) => `${minutes} 分钟`,
      hoursShort: (hours: number) => `${hours} 小时`,
      hoursMinutesShort: (hours: number, minutes: number) => `${hours} 小时 ${minutes} 分钟`,
      durationLong: (hours: number, minutes: number) => {
        if (hours === 0 && minutes === 0) return '不到一分钟';
        const parts: string[] = [];
        if (hours > 0) parts.push(`${hours} 小时`);
        if (minutes > 0) parts.push(`${minutes} 分钟`);
        return parts.join(' ');
      },

      // Session strip. Text wrapped in ** is rendered emphasized.
      stripNoCap: (interval: string) => `每 ${interval}提醒一次,不设硬性停止`,
      stripWithCap: (interval: string, cap: string) =>
        `每 ${interval}提醒一次,${cap}后硬性停止`,
      summaryNoCap: (interval: string) => `每 **${interval}**提醒你一次,不设硬性停止。`,
      summaryWithCap: (interval: string, cap: string) =>
        `每 **${interval}**提醒你一次,并在 **${cap}**后硬性停止。`,

      // Setup
      intervalHeading: '每隔多久提醒一次',
      custom: '自定义',
      minutes: '分钟',
      set: '设定',
      jitterNote: '提醒时间会有大约百分之十的随机浮动,免得大脑提前就把它无视掉。',
      moreOptions: '更多选项',
      hideOptions: '收起选项',
      taskLabel: '你在做什么?(选填)',
      taskPlaceholder: '例如:报税表、设计评审、那个脚本',
      taskHint: '语音提醒里会念出来,让你听见自己本来坐下要做的事。',
      hardStopHeading: '硬性停止时间',
      hardStopHint:
        '到了上限会响起更大声的提醒,免得一场六小时的沉迷悄悄溜过去。',
      capOff: '关闭',
      capHours: (hours: number) => `${hours} 小时`,
      noHardStop: '不设硬性停止',
      alertsHeading: '提醒方式',
      chime: '提示音',
      voice: '语音',
      notify: '通知',
      alertsHint:
        '提醒被忽略时,提示音会越来越响。语音会念出当前时间和已经过去多久。标签页切到后台时,通知会发送浏览器通知。',
      notificationsBlocked:
        '这个浏览器屏蔽了通知。请在站点设置里允许通知后再使用。',
      notificationsUnsupported: '你的浏览器不支持网页通知。',
      startSession: '开始专注',

      // Live session
      statElapsed: '已用时',
      statNextCheckIn: '下次提醒',
      statCap: '上限',
      statusNow: '现在',
      statusPaused: '已暂停',
      statusCapHit: '已到上限',
      statusOff: '关闭',
      workingOn: (task: string) => `正在做 **${task}**`,
      checkInHeading: '快速确认一下',
      checkInBody: (clock: string, elapsed: string) =>
        `现在是 ${clock},你已经连着做了 ${elapsed}。还在做原本那件事,还是该冒个头了?`,
      stillGoing: '继续做',
      takeABreak: '休息一下',
      stopSession: '结束这一轮',
      capHeading: '已到设定上限',
      capBody: (minutes: number) =>
        `你把硬性停止设在了 ${minutes} 分钟。站起来,喝点水,吃点东西。活儿跑不掉。`,
      pause: '暂停',
      resume: '继续',
      endSession: '结束',
      checkInLog: '提醒记录',
      logContinue: '继续做了',
      logBreak: '休息了一下',
      logStop: '停下了',

      // Browser tab title while a check-in is waiting in a background tab.
      tabAlert: '⚠ 该看一眼了 | Doubly',

      // Spoken aloud (SpeechSynthesis) and pushed as OS notifications.
      checkInSpeech: (clock: string, elapsed: string, task: string) =>
        task
          ? `确认一下。现在是 ${clock}。你在${task}上已经花了 ${elapsed}。`
          : `确认一下。现在是 ${clock}。你已经连着做了 ${elapsed}。`,
      capSpeech: (clock: string, elapsed: string) =>
        `到设定的上限了。现在是 ${clock}。你已经连着做了 ${elapsed}。该停下来了。`,
      notificationCheckInTitle: '超专注提醒',
      notificationCheckInBody: (clock: string, elapsed: string) =>
        `现在是 ${clock}。你已经连着做了 ${elapsed}。`,
      notificationCapTitle: '已到超专注上限',
      notificationCapBody: (clock: string, elapsed: string) =>
        `现在是 ${clock}。你已经连着做了 ${elapsed}。该停下来了。`,
    },
    shared: {
      start: '开始',
      pause: '暂停',
      resume: '继续',
      done: '完成',
      reset: '重置',
      skip: '跳过',
      skipAria: '跳到下一轮',
      startSession: '开始一轮专注',
      creatingRoom: '正在创建房间……',
    },
    chrome: {
      tryInApp: '在应用里试试',
      appStoreAria: (label: string) => `在 App Store 查看${label}`,
      breadcrumbAria: '面包屑导航',
    },
  },

  // The live body-doubling room at /r/[id].
  //
  // The locale is resolved per viewer, so the same room can render in Chinese
  // for one person and in German for the other. Never write copy that assumes
  // the two people read the same language.
  room: {
    join: {
      titleFirst: '开一场专注',
      titleJoin: '加入这场专注',
      subtitleFirst: '选个名字和时长。进去之后再把邀请链接发出去。',
      subtitleJoin: '选个名字就能进。计时发起人已经定好了。',
      nameLabel: '你的名字',
      namePlaceholder: '小明',
      avatarLabel: '选个头像',
      avatarChooseAria: (emoji: string) => `选择 ${emoji} 头像`,
      durationLabel: '专注时长',
      minutes: (n: number) => `${n} 分钟`,
      permissionNote:
        '下一步会请求摄像头和麦克风权限,两个都可以不给。不给也能进,只是显示成一个虚影,房间里的人照样知道你在。',
      createCta: '创建房间',
      joinCta: '加入房间',
    },
    header: {
      eyebrow: '陪伴专注房间',
      withPeer: (name: string) => `你和 ${name}`,
      waiting: '正在等同伴',
      copyInvite: '复制邀请链接',
      linkCopied: '链接已复制',
    },
    full: {
      title: '房间满了',
      body: '一个陪伴专注房间只坐两个人。好消息是,再开一个只要点一下。',
      cta: '开一个新房间',
    },
    phases: {
      waiting: {
        eyebrow: '第 0 步,共 3 步',
        title: '把链接发出去',
        body: '把这个页面的链接发给一个人。对方一进来,这一场就开始。',
      },
      intro: {
        eyebrow: '第 1 步,共 3 步 · 打招呼',
        title: '打个招呼,说说你接下来要做什么',
        titleWithPeer: (name: string) => `跟 ${name} 打个招呼`,
        body: '花 60 秒。开着摄像头,各说一句。把目标说出口,它才算数。',
        cta: '开始专注',
      },
      focus: {
        eyebrow: '第 2 步,共 3 步 · 专注',
        title: '埋头做事。你们一起,安静地做。',
        body: '麦克风开着关着都行。重点是对面有个人在。',
        cta: '提前结束专注',
      },
      wrapUp: {
        eyebrow: '第 3 步,共 3 步 · 收尾',
        title: '说一个进展,和一个卡住你的地方',
        body: '出声说两句,把刚做完的事钉住,下一场也更容易开始。',
        cta: '结束这一场',
      },
      done: {
        eyebrow: '这一场结束了',
        title: '干得漂亮。你出现了。',
        body: '这就算数。留下来再来一场,或者关掉页面,去做点对自己好的事。',
        runAnother: '再来一场',
      },
    },
    tiles: {
      you: (name: string) => `${name}(你)`,
      peerFallbackName: '等待中',
      waitingForPartner: '正在等同伴……',
      micMuted: '麦克风已静音',
      goalPlaceholderIntro: '我接下来要做的是……',
      goalPlaceholderFocus: '我正在做的事',
      reflectionPlaceholder: '一个进展,或者一个坎……',
      peerNoGoal: '还没写目标',
      peerNoReflection: '等对方收尾',
      empty: '—',
    },
    controls: {
      muteMic: '麦克风静音',
      unmuteMic: '取消静音',
      micUnavailable: '麦克风不可用',
      muteTitle: '静音',
      unmuteTitle: '取消静音',
      micBlockedTitle: '麦克风被禁用或不可用',
      camOff: '关闭摄像头',
      camOn: '打开摄像头',
      camUnavailable: '摄像头不可用',
      stopVideoTitle: '关闭视频',
      startVideoTitle: '开启视频',
      camBlockedTitle: '摄像头被禁用或不可用',
      startTimer: '开始计时',
      pauseTimer: '暂停计时',
      leave: '离开',
      retry: '重试',
    },
    reactions: {
      groupAria: '发个表情',
      sendAria: (emoji: string) => `发送 ${emoji} 表情`,
    },
    status: {
      peerLeft: '同伴离开了房间。',
      shareToUnlock: '把邀请链接发出去,叫个人进来。对方一到,这一场就解锁。',
      upNext: (minutes: number) => `接下来:${minutes} 分钟专注`,
      planOnArrival: (minutes: number) => `计划:同伴一到,就开始 ${minutes} 分钟专注`,
      wrapUpBreath: '喘口气。计时已经暂停。',
      timerAria: (remaining: string) => `计时器,还剩 ${remaining}`,
    },
    errors: {
      p2pBlocked: '连不上。你的网络可能屏蔽了点对点连接,换个网络试试。',
      mediaUnavailable: '摄像头和麦克风不可用。',
    },
  },
};

export default zhHans;
