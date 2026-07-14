const ja = {
  // Shared
  common: {
    tryInDoubly: 'Doublyで試す',
    changeLanguage: '言語を変更',
    socialProof: (count: number) => `${count.toLocaleString('ja-JP')}人のADHD仲間と一緒に始めよう`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    tools: 'ツール',
    howItWorks: '使い方',
    features: '特徴',
    testimonials: 'レビュー',
    faq: 'よくある質問',
    cta: 'Doublyを入手',
    toggleMenu: 'メニューを開閉',
  },

  // Hero
  hero: {
    badge: 'ADHDの脳のために作られたアプリ',
    titlePrefix: '頭の中で',
    titleHighlight: 'タブが47個開いているとき',
    subtitle: 'その混乱を、1分もかからずに、はっきりとした次の一歩に変えよう。',
    cta: 'App Storeでダウンロード',
    secondaryCta: 'タスクが分解される様子を見る ↓',
    android: {
      prompt: 'Androidをお使いですか？',
      placeholder: 'you@email.com',
      submit: 'お知らせを受け取る',
      success: 'リストに登録しました。DoublyがAndroidに登場したら、メールでお知らせします。',
      invalid: '有効なメールアドレスを入力してください。',
      error: '問題が発生しました。もう一度お試しください。',
    },
    floatingCards: {
      brainDump: 'ブレインダンプ',
      habits: '習慣',
      accountability: 'アカウンタビリティ',
    },
    phone: {
      screenAlt: '毎日のストリークと進捗グリッドで習慣を表示するDoublyアプリ',
    },
  },

  // Problem
  problem: {
    title: 'ADHDは、ただ整理整頓が苦手なだけではありません',
    titleHighlight: '整理整頓が苦手',
    subtitle:
      'それは、自分の意図に協力してくれない脳との、毎日の戦いです。',
    cards: [
      {
        type: 'External',
        title: 'タスクが多すぎる。考えごとも多すぎる。',
        body: 'どこから始めればいいのか、はっきりしない。',
      },
      {
        type: 'Internal',
        title: 'やるべきことは分かっている。でも、始められない。',
        body: 'それは怠けではありません。「始めることへの抵抗」です。',
      },
      {
        type: 'Philosophical',
        title: '始めることが、こんなに難しいはずはない。',
        body: 'あなたの脳は人とは違う働き方をする。だから道具も、違っていていい。',
      },
      {
        type: 'Stakes',
        title: 'そして、それは時間以上のものを奪っていく。',
        body: 'やることが積み上がる。遅れていく。そして、自分への信頼を失っていく。',
      },
    ],
  },

  // VisualProblem
  visualProblem: {
    cards: [
      { image: '/problem-1.jpg', alt: 'タスクが多すぎる。考えごとも多すぎる。' },
      { image: '/problem-2.jpg', alt: 'やるべきことは分かっているのに、始められない。' },
      { image: '/problem-4.jpg', alt: '普通のことを始めるのが、こんなに難しいはずはない。' },
      { image: '/problem-3.jpg', alt: 'そして、それは時間以上のものを奪っていく。' },
    ],
  },

  // Guide
  guide: {
    title: '始めることに苦労するADHDの脳のために、専用に作られました',
    subtitle:
      'ほとんどの生産性アプリは、あなたの脳が計画を立てる準備ができていることを前提にしています。Doublyは、あなたが圧倒され、行き詰まり、あるいは避けてしまう、その瞬間のために作られました。ADHDが実際にどう働くかに基づいて。',
    proofPoints: [
      '一般的な生産性ではなく、ADHD特有のつまずきのために設計',
      '「始めることへの抵抗」を減らす手助け',
      '圧倒することなく、構造を与えてくれる',
    ],
    mockup: {
      brainDump: 'ブレインダンプ',
      items: ['歯医者に電話', '食料品を買う', '上司に返信', '洗濯', 'なんでこんなに疲れてるんだろう'],
      yourNextStep: '次の一歩',
      nextStepTask: '洗濯物を洗濯機に入れる',
      nextStepMeta: '約5分 · 低エネルギー',
      accountability: 'アカウンタビリティ',
      accountabilityText: 'Sarahが午後3時に声かけ',
    },
  },

  // BrainDumpDemo
  brainDumpDemo: {
    title: '混乱を吐き出す。タスクだけ残す。',
    titleHighlight: 'タスクだけ残す。',
    replayDemo: 'デモをもう一度再生',
    subtitle:
      '頭がいっぱい？20秒だけ打ち込んでみて。Doublyが実行できることだけ取り出して、ノイズは捨ててくれます。',
    dumpText:
      '仕事しようとノートパソコンを開いた瞬間、脳が勝手に言い出す。あのメッセージに返信して、ビタミンを注文して、シンクを掃除して、充電器を探して、何か食べて、それから絶対に忘れないつもりだった超重要なあのタスクも思い出して。で、その瞬間に忘れた。',
    brainDumpLabel: 'ブレインダンプ',
    brainDumpPlaceholder: 'とにかく吐き出して...',
    extractedTasksLabel: '抽出されたタスク',
    listening: '聞いています...',
    tasksFound: (count: number) => `${count}件のタスクが見つかりました`,
    filterNote: '実行できない考えは取り除きました。本当のタスクだけを残しています。',
    tasks: [
      { text: '💊 ビタミンを注文', phrase: 'ビタミンを注文' },
      { text: '🧽 シンクを掃除', phrase: 'シンクを掃除' },
      { text: '🔌 充電器を探す', phrase: '充電器を探して' },
      { text: '🍽️ 何か食べる', phrase: '何か食べて' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: '行き詰まりから抜け出す方法',
    titleHighlight: '抜け出す',
    subtitle: 'シンプルな4つのステップ。複雑な設定なし。学習の手間もなし。',
    stepLabel: 'ステップ',
    steps: [
      {
        number: '01',
        title: '頭を空っぽにする',
        body: '考えごと、タスク、頭の中のごちゃごちゃを、素早く書き出す。整理は不要。とにかく出すだけ。',
      },
      {
        number: '02',
        title: 'はっきりした次の一歩を得る',
        body: 'Doublyは、圧倒される状態を、実際に始められることに変えます。10個の優先事項ではなく、1つだけ。',
      },
      {
        number: '03',
        title: '動き続ける',
        body: 'アカウンタビリティ、タイマー、進捗ツールを使って、やる気が薄れても動き続けよう。',
      },
      {
        number: '04',
        title: '仲間と支え合う',
        body: 'Doublyのフィードで友達とシェアしよう。誰かが応援してくれるとき、本当のアカウンタビリティが生まれます。',
      },
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: 'タスクを入力。分解される様子を見よう。',
    titleHighlight: '分解される',
    subtitle:
      '大きなタスクは、不可能に感じる。Doublyはそれを2〜5分のステップに分解するから、すぐに始められます。',
    customInputPlaceholder: 'または自分のタスクを入力...',
    splitButton: '分解する',
    taskLabel: 'タスク',
    aiThinking: 'AIが分解しています...',
    errorMessage: '今はAIに接続できませんでした。上のプリセットを試すか、もう一度お試しください。',
    tryAgain: 'もう一度',
    stepsDone: (done: number, total: number) => `${done}/${total} ステップ完了`,
    minTotal: (min: number) => `合計 約${min}分`,
    urgencySuffix: '緊急度',
    urgencyLabels: { low: '緊急度：低', medium: '緊急度：中', high: '緊急度：高' },
    allDoneMessage: 'ぜんぶ完了。そんなに難しくなかったでしょう？',
    allDoneDescription:
      'Doublyは、あなたが投げかけるどんなタスクにもこれをやってくれます。巨大なToDoリストを眺めて固まることは、もうありません。',
    allDoneCta: '今すぐ動き出す',
    presets: [
      { label: 'キッチンを掃除する', icon: '🍳' },
      { label: '洗濯をする', icon: '🧰' },
      { label: '夕食を作る', icon: '🍲' },
      { label: 'お風呂を掃除する', icon: '🚿' },
      { label: '寝室を片付ける', icon: '🛏️' },
      { label: '食料品の買い物', icon: '🛒' },
    ],
    presetResults: {
      'キッチンを掃除する': {
        title: '🍳 キッチンを掃除する',
        subtasks: [
          { text: 'カウンターの上を片付けて、物をしまう', duration: '3分' },
          { text: '汚れた食器を食洗機に入れる', duration: '5分' },
          { text: 'カウンターとコンロを拭く', duration: '4分' },
          { text: 'シンクを磨く', duration: '2分' },
          { text: '床を掃く', duration: '3分' },
          { text: 'ゴミを出す', duration: '2分' },
        ],
        urgency: 'medium',
      },
      '洗濯をする': {
        title: '🧰 洗濯をする',
        subtasks: [
          { text: '家じゅうの汚れた服を集める', duration: '5分' },
          { text: '白物、色物、デリケートな物に分ける', duration: '3分' },
          { text: '最初のひと束を洗濯機に入れる', duration: '2分' },
          { text: '前回分の乾いた服を干すか、たたむ', duration: '10分' },
          { text: 'たたんだ服を引き出しやクローゼットにしまう', duration: '5分' },
        ],
        urgency: null,
      },
      '夕食を作る': {
        title: '🍲 夕食を作る',
        subtasks: [
          { text: '何を作るか決めて、材料を確認する', duration: '3分' },
          { text: '野菜を洗って下ごしらえする', duration: '8分' },
          { text: 'メイン料理を作り始める', duration: '15分' },
          { text: '副菜かサラダを用意する', duration: '7分' },
          { text: 'テーブルを整える', duration: '2分' },
          { text: '盛り付けて配膳する', duration: '2分' },
        ],
        urgency: 'low',
      },
      'お風呂を掃除する': {
        title: '🚿 お風呂を掃除する',
        subtasks: [
          { text: 'シャワー、洗面台、トイレに洗剤を吹きかける', duration: '2分' },
          { text: '便器を磨いて、便座を拭く', duration: '3分' },
          { text: '洗面台と蛇口を掃除する', duration: '2分' },
          { text: '鏡を拭く', duration: '1分' },
          { text: 'シャワー/浴槽を磨く', duration: '5分' },
          { text: '床をモップがけするか、拭く', duration: '3分' },
          { text: 'タオルを取り替えて、トイレットペーパーを補充する', duration: '2分' },
        ],
        urgency: 'medium',
      },
      '寝室を片付ける': {
        title: '🛏️ 寝室を片付ける',
        subtasks: [
          { text: 'ベッドを整えて、枕をきれいに並べる', duration: '3分' },
          { text: '床や椅子の上の服を拾う', duration: '4分' },
          { text: '汚れた服は洗濯かごへ、きれいな服はしまう', duration: '5分' },
          { text: 'ナイトテーブルを片付けて整理する', duration: '3分' },
          { text: '表面のほこりを払う', duration: '3分' },
          { text: '床に掃除機をかけるか、掃く', duration: '4分' },
        ],
        urgency: 'low',
      },
      '食料品の買い物': {
        title: '🛒 食料品の買い物',
        subtasks: [
          { text: '冷蔵庫とパントリーを見て、必要な物を確認する', duration: '5分' },
          { text: '売り場ごとにまとめたリストを書く', duration: '5分' },
          { text: 'エコバッグを持つ', duration: '1分' },
          { text: '買い物して、リストをチェックしていく', duration: '30分' },
          { text: '荷物を出して、食料品をしまう', duration: '10分' },
        ],
        urgency: null,
      },
    },
  },

  // TwoQuestions
  twoQuestions: {
    title: '心当たり、ありませんか？',
    titleHighlight: '心当たり',
    subtitle: 'あなたは怠けているのではありません。あなたの脳は、ただ違う始め方を必要としているだけです。',
    withoutDoubly: 'Doublyがないとき',
    withDoubly: 'Doublyがあれば',
    rows: [
      {
        without: '固まってしまって、どこから始めればいいのか分からない',
        with: 'ブレインダンプ → はっきりした次の一歩が現れる',
      },
      {
        without: '代わりに、どうでもいい小さなタスクをやってしまう',
        with: 'Doublyが、本当に大事なことを最初に示してくれる',
      },
      {
        without: '一度に5つのことを始めてしまう',
        with: '画面にはタスク1つだけ。終わらせたら、次へ。',
      },
      {
        without: '完璧な計画を考えすぎてしまう',
        with: '全部吐き出せば、Doublyが最初の一歩を選んでくれる',
      },
      {
        without: '緊急になるまで避けて、それからパニックになる',
        with: 'パニックが来る前に、始められる',
      },
      {
        without: '一人でやって、すぐに勢いを失う',
        with: 'ボディダブリングとアカウンタビリティ・パートナーが、動き続けさせてくれる',
      },
    ],
    questionTitle: 'その瞬間、あなたに一番必要なものは？',
    options: [
      'ブレインダンプ',
      '小さな次の一歩',
      'アカウンタビリティ',
      'タイマー / 集中の後押し',
      '遅れたときのリセット',
    ],
    responseIntro: 'まさにそこで、Doublyが役に立ちます。',
    responses: {
      'ブレインダンプ': {
        title: 'ブレインダンプ → 瞬間的な明確さ',
        description:
          '混乱を打ち込むだけ。Doublyが実行できることを取り出して、ノイズは捨てます。',
      },
      '小さな次の一歩': {
        title: '次の一歩は、いつでも準備万端',
        description:
          'Doublyは大きなタスクを分解して、次の小さな一手だけを差し出します。圧倒されることはありません。',
      },
      'アカウンタビリティ': {
        title: 'アカウンタビリティの声かけ',
        description:
          'やさしい後押しと仲間の支えが、罪悪感なしに軌道に乗せてくれます。',
      },
      'タイマー / 集中の後押し': {
        title: '集中モード',
        description:
          '画面にはタスク1つ、タイマーが動き、気を散らすものはなし。あなたと作業だけ。',
      },
      '遅れたときのリセット': {
        title: '仕切り直し、罪悪感なし',
        description:
          'つまずいた？Doublyが計画を組み直すから、自己嫌悪のループに陥らずに、また再開できます。',
      },
    },
    mockupNextStep: '次の一歩の準備ができました',
    mockupTask: '小さなことひとつから始めよう',
    mockupCta: 'Doublyを試す',
  },


  // HabitDemo
  habitDemo: {
    title: '本当に続く習慣をつくる',
    subtitle:
      '途切れて困るストリークもなし。罪悪感もなし。やったときにタップするだけ。Doublyがパターンを記録するから、進歩が見えます。',
    todayLabel: '今日',
    yourHabits: 'あなたの習慣',
    weeksLabel: '12週間',
    lessLabel: '少ない',
    moreLabel: '多い',
    currentStreak: '現在のストリーク',
    bestStreak: '最高のストリーク',
    completion: '達成率',
    allDoneMessage: '今日の習慣、ぜんぶ完了！',
    allDoneDescription: 'これが毎日続くと想像してみて。Doublyなら、続けるのが簡単になります。',
    allDoneCta: '今すぐ動き出す',
    habits: [
      { id: 'walk', name: '散歩に行く', icon: '🚶' },
      { id: 'read', name: '10ページ読む', icon: '📖' },
      { id: 'journal', name: '日記を書く', icon: '✏️' },
      { id: 'tidy', name: '10分だけ片付け', icon: '🧹' },
    ],
  },

  // Success
  success: {
    title: 'ダラダラ見るスクロールを、あなたを動かすフィードに変えよう。',
    imageAlt: '完了したタスクとコミュニティのリアクションやコメントが表示されたDoublyアプリの投稿詳細',
    subtitle: 'ダラダラ見るスクロールを、あなたを動かすフィードに変えよう。',
    outcomes: [
      '心の中の葛藤なしにタスクを始める',
      '計画したことを最後までやり遂げる',
      '落ち込まずに軌道に戻る',
      '自分はちゃんとやれると、自分を信じられる',
    ],
  },

  // Stakes
  stakes: {
    title: '行き詰まったままでいることには、代償があるから',
    body: '始めることがこんなに難しいと、いろいろなことがすり抜けていきます。締め切りを逃し、チャンスは過ぎ去り、回避と罪悪感のループに閉じ込められたように感じ始めます。Doublyは、また一週間が消えてしまう前に、そのサイクルを断ち切る手助けをします。',
  },

  // Testimonials
  testimonials: {
    title: '人に必要なのは、これ以上の生産性のプレッシャーではありません',
    subtitle: '必要なのは、始めるための手助けです。',
    items: [
      // Real App Store reviews, quoted verbatim. Only add entries that are actual
      // published reviews AND whose reviewer gave permission (Apple's rule; ask by
      // replying to the review in App Store Connect). The grid auto-adapts up to 3.
      {
        quote:
          'This app is the only one that actually got me to do things. I have very strong ADHD, and it made me concentrate on my tasks one by one to always know what’s coming ahead and make order in my day. Love it so much! Hope to see awesome upgrades soon 🙏🏻',
        name: 'Liorcic',
        label: 'App Storeのレビュー',
      },
      {
        quote:
          'This has really helped me manage my workload, I haven’t seen anything like it. The walkthrough and set up is very intuitive, and the features make it worth it!',
        name: 'MinecraftrNinja',
        label: 'App Storeのレビュー',
      },
      // Slot 3 — next permitted review goes here.
    ],
  },

  // FAQ
  // ToolsSection
  toolsSection: {
    title: '今すぐ使える無料のADHDツール',
    subtitle: '登録もポップアップも不要。行き詰まったらすぐブラウザで開けます。',
    hot: '人気',
    openTool: 'ツールを開く',
    browseAll: '無料のADHDツールをすべて見る',
  },

  faq: {
    title: 'よくある質問',
    items: [
      {
        q: 'DoublyはADHDと診断された人だけのものですか？',
        a: 'いいえ。Doublyは、始めること、圧倒されること、頭の中のごちゃごちゃに悩むすべての人のためのものです。診断は必要ありません。やることが多すぎると時々固まってしまう脳があれば、それで十分です。',
      },
      {
        q: '普通のToDoアプリと何が違うのですか？',
        a: 'ToDoアプリは、やることをリストにする手助けをします。Doublyは、それを実際に始める手助けをします。私たちが力を注ぐのは「始めることへの抵抗」、つまり、やるべきことを分かっていることと実際にやることの間のギャップを減らすこと。ブレインダンプ、一歩だけの明確さ、そしてアカウンタビリティで。',
      },
      {
        q: '特にタスクを始めることに役立ちますか？',
        a: 'はい。それが私たちの中心です。ブレインダンプが頭の中のごちゃごちゃを片付け、次の一歩の明確さが実行可能な行動を1つ選び、アカウンタビリティのツールがやり遂げる手助けをします。すべての機能が、その最初の一歩を中心に作られています。',
      },
      {
        q: 'ここでのアカウンタビリティは、何が違うのですか？',
        a: 'それは、しつこい小言でも、罪悪感を抱かせるストリークでもありません。Doublyは、あなたの進歩を気にかけてくれる本物の人とのやさしい声かけを使います。だから、あなたを責めるロボットではなく、味方になってくれる誰かがそばにいます。',
      },
      {
        q: '習慣トラッカーやプランナーの代わりになりますか？',
        a: 'なれます。でも、Doublyは何でもこなす万能ナイフを目指しているわけではありません。行き詰まりから動き出しへ移ることに、一点集中しています。詳細なプロジェクト計画が必要なら、今お使いのツールと組み合わせてください。',
      },
      {
        q: 'すぐに圧倒されてしまう人にも向いていますか？',
        a: 'そういう人にこそ向いています。Doublyは、すべてを一度に見せることは決してありません。タスクの壁ではなく、次の一歩を1つだけ見せます。UX全体が、すぐに情報過多になる脳のために設計されています。',
      },
    ],
  },

  // FinalCTA
  finalCta: {
    title: 'あなたの脳に必要なのは、これ以上のプレッシャーではありません',
    highlight: '必要なのは、始めるための方法です。',
    subtitle: '考えすぎ、先延ばし、遅れることに疲れたADHDの心へ。',
    cta: 'App Storeでダウンロード',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    freeTools: '無料のADHDツール',
    tools: 'ツール',
    learn: '学ぶ',
    privacy: 'プライバシー',
    terms: '利用規約',
    support: 'サポート',
    copyright: (year: number) => `© ${year} Doubly. ADHDの脳のために。`,
  },

  // StickyBar
  stickyBar: {
    cta: '今すぐ動き出す',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | 始めることを助けるADHDアプリ',
    description:
      '混乱をブレインダンプし、はっきりした次の一歩を得て、アカウンタビリティで最後までやり遂げる。計画だけでなく、始めることに助けが必要なADHDの心のために作られました。',
    keywords: ['ADHD', '生産性', 'ブレインダンプ', 'タスク管理', 'アカウンタビリティ', '集中'],
    ogTitle: 'Doubly | 始めることを助けるADHDアプリ',
    ogDescription:
      '混乱をブレインダンプし、はっきりした次の一歩を得て、アカウンタビリティで最後までやり遂げる。',
  },
  // Tool library card copy (title + description per tool).
  // Mirrors content/tools-i18n/${locale}/_index.json cards[] so the homepage grid and
  // the footer speak the visitor's language; kept in sync by scripts/check-tool-cards.mjs.
  toolCards: {
    'task-splitter': {
      title: 'タスク分解ツール',
      description:
        '始められないタスクを打ち込むだけ。AIが、すぐ手をつけられる小さなステップに分けて、それぞれの所要時間の目安まで出します。ADHDの脳のために。',
    },
    'brain-dump': {
      title: 'ブレインダンプツール',
      description:
        '頭の中のすべてを吐き出せば、AIが実行できるタスクだけを取り出します。登録不要、保存もなし。',
    },
    'pick-one': {
      title: 'ひとつ選ぶツール',
      description:
        'ぐちゃぐちゃのToDoリストを貼り付ければ、最初に取りかかる1つが返ってきます。一番小さいもの、一番こわいもの、それかランダムで。10個のタスクが、手のつけられない大きなかたまり1つに見えてしまうときのために。',
    },
    'eisenhower-matrix': {
      title: 'アイゼンハワー・マトリクス（ADHD版）',
      description:
        '教科書どおりのラベルではなく、「退屈だけど大事」のような枠にタスクをドラッグ。ADHDの脳にやっと合うマトリクスです。データは端末の中に保存されます。',
    },
    'pomodoro': {
      title: 'ADHD向けポモドーロタイマー',
      description:
        '25分の作業、5分の休憩。ADHDの脳にやっと合う集中法です。無料、登録不要、オフラインでも動きます。',
    },
    'visual-timer': {
      title: 'ビジュアルタイマー / タイムブラインドネス時計',
      description:
        '数字を読むのではなく、円が少しずつ欠けていくのを見て、時間が過ぎるのを目でつかめます。時間感覚のずれ（タイムブラインドネス）に悩むADHDの大人のための時計としても。',
    },
    'brown-noise': {
      title: '環境音の生成ツール',
      description:
        'ブラウザで使える無料の環境音生成ツール。ブラウンノイズに、ピンクノイズとホワイトノイズも。ざわつくADHDの脳を静める、ゆらぎのない背景音。スリープタイマーつき、オフラインでも動きます。',
    },
    'body-doubling-room': {
      title: 'ボディダブリング・ルーム',
      description:
        '2人用の無料フォーカスルーム。リンクを共有すれば、P2Pのビデオでとなりに座っているように一緒に作業できて、タイマーも共有できます。登録もインストールも不要。',
    },
    'hyperfocus-timer': {
      title: '過集中の中断タイマー',
      description:
        'X分おきに声で呼びかけて、必要なら強制ストップも。ADHDの過集中で午後がまるごと消えてしまうのを防ぎます。',
    },
  },

  toolWidgets: {
    taskSplitter: {
      inputLabel: '始められないタスクは何ですか？',
      inputPlaceholder: '例：経費精算を提出する',
      submit: '分解する',
      submitting: '分解しています…',
      privacyNote: '非公開。サーバーには何も保存されません。',
      charactersLeft: (count: number) => `残り${count}文字`,
      presetsIntro: 'または、こちらを試してみて：',
      presets: {
        cleanKitchen: 'キッチンを掃除する',
        doLaundry: '洗濯をする',
        replyInbox: 'たまったメールに返信する',
        planWeekendTrip: '週末の旅行を計画する',
        fileTaxes: '確定申告をする',
        cleanBathroom: 'お風呂を掃除する',
      },
      loading: 'ステップに分解しています…',
      errorRateLimit: 'ペースが速すぎます。少し待ってから、もう一度お試しください。',
      errorGeneric: '今は分解できませんでした。数秒後にもう一度お試しください。',
      tryAgain: 'もう一度',
      taskLabel: 'タスク',
      urgencyLabels: { low: '緊急度：低', medium: '緊急度：中', high: '緊急度：高' },
      stepsDone: (done: number, total: number) => `${done}/${total} ステップ完了`,
      minTotal: (min: number) => `合計 約${min}分`,
      allDoneMessage: 'ぜんぶ完了。そんなに難しくなかったでしょう？',
      emptyState:
        'そのタスクからは、はっきりしたステップが見つかりませんでした。「企画書を書く」「ガレージを掃除する」のように、行動のかたちで書き直してみてください。',
    },
    brainDump: {
      label: '頭の中のものを全部吐き出して。整理は不要です。',
      placeholder:
        '歯医者に電話するのをずっと忘れてるし、キッチンはぐちゃぐちゃ。\n仕事のプロジェクトのことで圧倒されてる。今夜の夕食の食料品を買わないと\nいけないし、先週のSarahのメールにも返信しないと。',
      privacy: '非公開。サーバーには何も保存されません。',
      charactersLeft: (remaining: number) => `残り${remaining}文字。`,
      clear: 'クリア',
      submit: 'タスクを取り出す',
      submitting: 'タスクを取り出しています…',
      loading: '書いてくれたものを読んで、実行できる部分を取り出しています…',
      errorRateLimited: 'ペースが速すぎます。少し待ってから、もう一度お試しください。',
      errorGeneric: '今はタスクを取り出せませんでした。数秒後にもう一度お試しください。',
      tryAgain: 'もう一度',
      empty:
        '具体的なタスクらしいものは、見つかりませんでした。それは良い兆しかもしれません。ただ吐き出したかっただけなら、それで十分です。やることを書き出すつもりだったなら、もう少し具体的にしてみて（「Sarahのこと」ではなく「Sarahにメールする」のように）。',
      resultsTitle: '実行できるタスク',
      doneCount: (done: number, total: number) => `${done}/${total} 完了`,
      footer: 'ひとつ選んで。ひとつだけ。今それをやって、終わったら次に戻ってきて。',
    },
    pickOne: {
      inputLabel: 'リストを貼り付けて。1行に1つでも、カンマ区切りのごちゃごちゃでも。なんでもいい。',
      inputPlaceholder:
        '母に返信\n歯医者を予約\n経費を提出\nスライドを仕上げる\n植物に水やり',
      itemsDetected: (count: number) => `${count}件を検出`,
      itemsDetectedWithLeft: (count: number, left: number) =>
        `${count}件を検出、残り${left}件`,
      clearEverything: 'すべてクリア',
      modeLegend: 'どうやって選ぶ？',
      modes: {
        smallest: {
          label: '一番小さいもの',
          reason: 'リストで一番短いもの。小さく始めて、勢いをつける。',
        },
        scariest: {
          label: '一番こわいもの',
          reason: '見たくないやつ。最初に片付けると、一日が軽くなる。',
        },
        random: {
          label: 'とにかく1つ',
          reason: '迷わない。リストが自分で選んだ。あとは始めるだけ。',
        },
      },
      pickCta: '1つ選んで',
      pickAnotherCta: '別のを選ぶ',
      emptyHint: '項目を1つ以上追加してから、選ぶをタップ。',
      readyHint: '準備OK。決められないときは「1つ選んで」をタップ。',
      allDoneTitle: 'リスト、片付きました。',
      allDoneBody:
        'すべての項目が、完了かスキップ済みです。リストをクリアするか、リセットしてスキップした項目を戻せます。',
      bringSkippedBack: 'スキップした分を戻す',
      startFreshList: '新しいリストを作る',
      pickedEyebrow: 'これから始めよう',
      didIt: 'やった',
      notThisOne: 'これじゃない',
      pickAgain: 'もう一度選ぶ',
      progress: (done: number, skipped: number, left: number) =>
        `完了${done}件、スキップ${skipped}件、残り${left}件`,
    },
    eisenhower: {
      inputLabel: 'タスクを追加',
      inputPlaceholder: 'タスクを入力してEnter（改行で区切って複数貼り付けもOK）',
      addButton: '追加',
      totals: (total: number, unsorted: number) =>
        `合計${total}件、未分類${unsorted}件`,
      clearAll: 'すべてクリア',
      unsortedHeading: (count: number) => `未分類（${count}）`,
      unsortedListLabel: '未分類のタスク',
      removeTask: (text: string) => `${text}を削除`,
      placeHint: 'あとは、置きたいマスをタップ。',
      placeHintDesktop: 'パソコンならドラッグ＆ドロップでも。',
      quadrantRegionLabel: (label: string) => `「${label}」のマス`,
      quadrantCountLabel: (count: number, label: string) => `「${label}」に${count}件のタスク`,
      dropHere: 'ここにドロップ',
      sendBackToUnsorted: '未分類に戻す',
      moveBackToUnsorted: (text: string) => `${text}を未分類に戻す`,
      empty: '空',
      emptyState:
        '上からタスクを追加して始めましょう。データはブラウザの中に保存され、サーバーには何も残りません。',
      hintLabel: 'Doublyのヒント：',
      hintBody:
        '「退屈だけど大事」の山は、多くの人が飛ばして、いちばん後悔する場所です。今日ひとつだけやるなら、そこから選んで。',
      quadrants: {
        fire: {
          label: '炎上中',
          sub: '明日ではなく、今日やる。',
          textbook: '重要かつ緊急',
        },
        boring: {
          label: '退屈だけど大事',
          sub: '本当の成果はここ。予定に入れて、飛ばさない。',
          textbook: '重要だが緊急ではない',
        },
        noisy: {
          label: 'うるさいけど飛ばせる',
          sub: '声は大きいけど、あなたの問題じゃない。任せる、後回し、無視。',
          textbook: '緊急だが重要ではない',
        },
        drop: {
          label: '手放す',
          sub: 'やめていい。リストは全部やらなくていい。',
          textbook: '重要でも緊急でもない',
        },
      },
    },
    pomodoro: {
      timerLabel: 'ポモドーロタイマー',
      modeTablistLabel: 'タイマーのモード',
      modes: {
        work: '集中',
        'short-break': '短い休憩',
        'long-break': '長い休憩',
      },
      dialLabel: (mode: string, time: string) => `${mode}タイマー。残り${time}。`,
      sessionsToday: (count: number) => `今日の完了セッション：${count}件`,
      soundToggle: 'セッション終了時に音を鳴らす',
      customizeDurations: '時間をカスタマイズ',
      hideSettings: '設定を隠す',
      focusMinutes: '集中（分）',
      shortBreakMinutes: '短い休憩（分）',
      longBreakMinutes: '長い休憩（分）',
      documentTitle: (time: string, mode: string) => `${time} | ${mode} | Doubly`,
    },
    visualTimer: {
      ariaLabel: 'ビジュアル・カウントダウンタイマー',
      dialAriaLabel: (remaining: string) => `ビジュアルタイマーの文字盤。残り${remaining}。`,
      seconds: (s: number) => `${s}秒`,
      minutes: (m: number) => `${m}分`,
      minutesAndSeconds: (m: number, s: number) => `${m}分${s}秒`,
      documentTitle: (time: string) => `${time} | Doubly`,
      countingDown: (minutes: number) => `${minutes}分からカウントダウン中`,
      setFor: (minutes: number) => `${minutes}分にセット`,
      paused: '一時停止中',
      timeIsUp: '時間です',
      presetsLabel: '時間のプリセット',
      presetMinutes: (minutes: number) => `${minutes}分`,
      custom: 'カスタム',
      minutesLabel: '分',
      set: 'セット',
      soundWhenDone: '終了時に音を鳴らす',
    },
    brownNoise: {
      play: (sound: string) => `${sound}ノイズを再生`,
      pause: (sound: string) => `${sound}ノイズを一時停止`,
      documentTitle: (sound: string) => `▶ ${sound}ノイズ · Doubly`,
      chooseSound: '環境音を選ぶ',
      soundGroupLabel: '環境音',
      volume: '音量',
      volumePercent: (percent: number) => `${percent}%`,
      sleepTimer: 'スリープタイマー',
      sleepOff: 'オフ',
      sleepMinutes: (minutes: number) => `${minutes}分`,
      privacyNote: 'ブラウザの中で動きます。録音も、アップロードもありません。',
      sounds: {
        brown: {
          name: 'ブラウン',
          description: '低くて、ゴロゴロした音。遠くの滝のよう。TikTokで話題のあれ。',
        },
        pink: {
          name: 'ピンク',
          description: 'ホワイトよりやわらかく、ブラウンより低音は控えめ。バランス型。',
        },
        white: {
          name: 'ホワイト',
          description: '砂嵐のようなサーッという音。明るくて、むらがない。',
        },
      },
    },
    hyperfocus: {
      ariaLabel: '過集中の中断タイマー',

      // Durations. Every phrasing lives here so a language can pick its own
      // plural forms, units and word order.
      minutesShort: (minutes: number) => `${minutes}分`,
      hoursShort: (hours: number) => `${hours}時間`,
      hoursMinutesShort: (hours: number, minutes: number) => `${hours}時間${minutes}分`,
      durationLong: (hours: number, minutes: number) => {
        if (hours === 0 && minutes === 0) return '1分足らず';
        const parts: string[] = [];
        if (hours > 0) parts.push(`${hours}時間`);
        if (minutes > 0) parts.push(`${minutes}分`);
        return parts.join('');
      },

      // Session strip. Text wrapped in ** is rendered emphasized.
      stripNoCap: (interval: string) => `${interval}ごとに声かけ、強制ストップなし`,
      stripWithCap: (interval: string, cap: string) =>
        `${interval}ごとに声かけ、${cap}で強制ストップ`,
      summaryNoCap: (interval: string) => `**${interval}**ごとに声をかけます。強制ストップはなし。`,
      summaryWithCap: (interval: string, cap: string) =>
        `**${interval}**ごとに声をかけて、**${cap}**で強制ストップします。`,

      // Setup
      intervalHeading: '声かけの間隔',
      custom: 'カスタム',
      minutes: '分',
      set: 'セット',
      jitterNote: '声かけのタイミングは1割ほどずらしています。脳が先回りして受け流せないように。',
      moreOptions: '詳細オプション',
      hideOptions: 'オプションを隠す',
      taskLabel: '今、何に取り組んでいますか？（任意）',
      taskPlaceholder: '例：確定申告、デザインレビュー、台本',
      taskHint: '音声の声かけで読み上げられるので、何をしに座ったのかを耳で思い出せます。',
      hardStopHeading: '強制ストップまで',
      hardStopHint:
        '上限に達すると、大きめのアラートが1回鳴ります。6時間の沼にはまったまま気づかない、を防ぎます。',
      capOff: 'オフ',
      capHours: (hours: number) => `${hours}時間`,
      noHardStop: '強制ストップなし',
      alertsHeading: 'アラート',
      chime: 'チャイム',
      voice: '音声',
      notify: '通知',
      alertsHint:
        'チャイムは、声かけを無視すると音が大きくなります。音声は時刻と経過時間を読み上げます。通知は、タブが裏に回っているときにブラウザ通知を出します。',
      notificationsBlocked:
        'このブラウザでは通知がブロックされています。サイトの設定で許可してください。',
      notificationsUnsupported: 'お使いのブラウザは、ブラウザ通知に対応していません。',
      startSession: 'セッションを開始',

      // Live session
      statElapsed: '経過',
      statNextCheckIn: '次の声かけ',
      statCap: '上限',
      statusNow: '今',
      statusPaused: '一時停止中',
      statusCapHit: '上限に到達',
      statusOff: 'オフ',
      workingOn: (task: string) => `**${task}**に取り組み中`,
      checkInHeading: '声かけタイム',
      checkInBody: (clock: string, elapsed: string) =>
        `今は${clock}、ここまで${elapsed}続けています。まだ最初に始めた作業のままですか？それとも、そろそろ顔を上げるタイミング？`,
      stillGoing: 'まだ続ける',
      takeABreak: '休憩する',
      stopSession: 'セッションを終了',
      capHeading: 'セッションの上限に到達',
      capBody: (minutes: number) =>
        `${minutes}分で強制ストップに設定していました。立ち上がって、水を飲んで、何か食べて。仕事は逃げません。`,
      pause: '一時停止',
      resume: '再開',
      endSession: 'セッションを終了',
      checkInLog: '声かけの記録',
      logContinue: '続けた',
      logBreak: '休憩した',
      logStop: 'やめた',

      // Browser tab title while a check-in is waiting in a background tab.
      tabAlert: '⚠ 声かけ | Doubly',

      // Spoken aloud (SpeechSynthesis) and pushed as OS notifications.
      checkInSpeech: (clock: string, elapsed: string, task: string) =>
        task
          ? `声かけの時間です。今は${clock}。${task}に取り組み始めて${elapsed}経ちました。`
          : `声かけの時間です。今は${clock}。作業を始めて${elapsed}経ちました。`,
      capSpeech: (clock: string, elapsed: string) =>
        `セッションの上限に達しました。今は${clock}。ここまで${elapsed}続けています。そろそろ手を止めましょう。`,
      notificationCheckInTitle: '過集中の声かけ',
      notificationCheckInBody: (clock: string, elapsed: string) =>
        `今は${clock}。ここまで${elapsed}続けています。`,
      notificationCapTitle: '過集中の上限に到達',
      notificationCapBody: (clock: string, elapsed: string) =>
        `今は${clock}。ここまで${elapsed}続けています。そろそろ手を止めましょう。`,
    },
    shared: {
      start: '開始',
      pause: '一時停止',
      resume: '再開',
      done: '完了',
      reset: 'リセット',
      skip: 'スキップ',
      skipAria: '次のセッションへスキップ',
      startSession: '集中セッションを始める',
      creatingRoom: 'ルームを作成中...',
    },
    chrome: {
      tryInApp: 'アプリで試す',
      appStoreAria: (label: string) => `App Storeで${label}`,
      breadcrumbAria: 'パンくずリスト',
    },
  },

};

export default ja;
