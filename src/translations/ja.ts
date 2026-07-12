const ja = {
  // Shared
  common: {
    tryInDoubly: 'Doublyで試す',
    socialProof: (count: number) => `${count.toLocaleString('ja-JP')}人のADHD仲間と一緒に始めよう`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
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
};

export default ja;
