const en = {
  // Shared
  common: {
    tryInDoubly: 'Try it in Doubly',
    changeLanguage: 'Change language',
    socialProof: (count: number) => `Join ${count.toLocaleString('en-US')} ADHDers`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    tools: 'Tools',
    howItWorks: 'How it works',
    features: 'Features',
    testimonials: 'Testimonials',
    faq: 'FAQ',
    cta: 'Get Doubly',
    toggleMenu: 'Toggle menu',
  },

  // Hero
  hero: {
    badge: 'Built for ADHD brains',
    titlePrefix: 'When your brain has ',
    titleHighlight: '47 tabs open',
    subtitle: 'Turn the chaos into one clear next step in under a minute.',
    cta: 'Download on the App Store',
    secondaryCta: 'See it split a task ↓',
    android: {
      prompt: 'Using Android?',
      placeholder: 'you@email.com',
      submit: 'Notify me',
      success: 'You’re on the list. We’ll email you when Doubly lands on Android.',
      invalid: 'Please enter a valid email.',
      error: 'Something went wrong. Please try again.',
    },
    floatingCards: {
      brainDump: 'Brain Dump',
      habits: 'Habits',
      accountability: 'Accountability',
    },
    phone: {
      screenAlt: 'Doubly app showing your habits with daily streaks and progress grids',
    },
  },

  // Problem
  problem: {
    title: "ADHD isn\u2019t just being unorganized",
    titleHighlight: 'unorganized',
    subtitle:
      "It\u2019s a daily battle with a brain that won\u2019t cooperate with your own intentions.",
    cards: [
      {
        type: 'External',
        title: 'Too many tasks. Too many thoughts.',
        body: 'No clear place to start.',
      },
      {
        type: 'Internal',
        title: "You know what to do, but still can\u2019t start.",
        body: "It\u2019s not laziness. It\u2019s initiation resistance.",
      },
      {
        type: 'Philosophical',
        title: "It shouldn\u2019t be this hard to start.",
        body: "Your brain works differently. Your tools should too.",
      },
      {
        type: 'Stakes',
        title: "And it\u2019s costing you more than time.",
        body: "Things pile up. You fall behind. You start to lose trust in yourself.",
      },
    ],
  },

  // VisualProblem
  visualProblem: {
    cards: [
      { image: '/problem-1.jpg', alt: 'Too many tasks. Too many thoughts.' },
      { image: '/problem-2.jpg', alt: "You know what to do, but still can\u2019t start." },
      { image: '/problem-4.jpg', alt: "It shouldn\u2019t be this hard to start normal things." },
      { image: '/problem-3.jpg', alt: "And it\u2019s costing you more than time." },
    ],
  },

  // Guide
  guide: {
    title: 'Built specifically for ADHD brains that struggle to start',
    subtitle:
      "Most productivity apps assume your brain is ready to plan. Doubly is built for the moment you\u2019re overwhelmed, stuck, or avoiding \u2014 based on how ADHD actually works.",
    proofPoints: [
      'Built for ADHD friction, not generic productivity',
      'Helps reduce initiation resistance',
      'Gives structure without overwhelming you',
    ],
    mockup: {
      brainDump: 'Brain Dump',
      items: ['call dentist', 'buy groceries', 'reply to boss', 'laundry', 'why am I so tired'],
      yourNextStep: 'Your next step',
      nextStepTask: 'Put laundry in washer',
      nextStepMeta: '~5 min \u00b7 low energy',
      accountability: 'Accountability',
      accountabilityText: 'Sarah checking in at 3pm',
    },
  },

  // BrainDumpDemo
  brainDumpDemo: {
    title: 'Dump the chaos. Keep the tasks.',
    titleHighlight: 'Keep the tasks.',
    replayDemo: 'Replay demo',
    subtitle:
      'Brain full? Type for 20 seconds. Doubly pulls out the actionable stuff and throws away the noise.',
    dumpText:
      'I open my laptop to be productive and within five seconds my brain is like: answer that message, order vitamins, clean the sink, find the charger, eat something, and also remember the super important task you were definitely not going to forget. Which I immediately forgot.',
    brainDumpLabel: 'Brain Dump',
    brainDumpPlaceholder: 'Just let it out...',
    extractedTasksLabel: 'Extracted Tasks',
    listening: 'Listening...',
    tasksFound: (count: number) => `${count} task${count > 1 ? 's' : ''} found`,
    filterNote: 'Non-actionable thoughts filtered out. Only real tasks kept.',
    tasks: [
      { text: '\ud83d\udc8a Order vitamins', phrase: 'order vitamins' },
      { text: '\ud83e\uddfd Clean the sink', phrase: 'clean the sink' },
      { text: '\ud83d\udd0c Find the charger', phrase: 'find the charger' },
      { text: '\ud83c\udf7d\ufe0f Eat something', phrase: 'eat something' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: "Here\u2019s how you get unstuck",
    titleHighlight: 'unstuck',
    subtitle: 'Four simple steps. No complex setup. No learning curve.',
    stepLabel: 'STEP',
    steps: [
      {
        number: '01',
        title: 'Empty your mind',
        body: 'Capture thoughts, tasks, and mental clutter fast. No organizing required. Just get it out.',
      },
      {
        number: '02',
        title: 'Get one clear next step',
        body: "Doubly turns overwhelm into something you can actually begin. Not ten priorities. One.",
      },
      {
        number: '03',
        title: 'Stay in motion',
        body: 'Use accountability, timers, and progress tools to keep going, even when motivation fades.',
      },
      {
        number: '04',
        title: 'Get accountable',
        body: 'Share with friends in the Doubly feed. Real accountability happens when someone is rooting for you.',
      },
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: 'Type a task. Watch it split.',
    titleHighlight: 'split.',
    subtitle:
      'Big tasks feel impossible. Doubly breaks them into 2–5 minute steps so you can just start.',
    customInputPlaceholder: 'Or type your own task...',
    splitButton: 'Split it',
    taskLabel: 'Task',
    aiThinking: 'AI is breaking it down...',
    errorMessage: 'Could not reach AI right now. Try a preset above or try again.',
    tryAgain: 'Try again',
    stepsDone: (done: number, total: number) => `${done}/${total} steps done`,
    minTotal: (min: number) => `~${min} min total`,
    urgencySuffix: 'urgency',
    urgencyLabels: { low: 'Low urgency', medium: 'Medium urgency', high: 'High urgency' },
    allDoneMessage: "All done. That wasn\u2019t so hard, right?",
    allDoneDescription:
      'Doubly does this for every task you throw at it. No more staring at a giant to-do list.',
    allDoneCta: 'Get unstuck now',
    presets: [
      { label: 'Clean the kitchen', icon: '\ud83c\udf73' },
      { label: 'Do laundry', icon: '\ud83e\uddf0' },
      { label: 'Cook dinner', icon: '\ud83c\udf72' },
      { label: 'Clean the bathroom', icon: '\ud83d\udebf' },
      { label: 'Organize the bedroom', icon: '\ud83d\udecf\ufe0f' },
      { label: 'Grocery shopping', icon: '\ud83d\uded2' },
    ],
    presetResults: {
      'Clean the kitchen': {
        title: '\ud83c\udf73 Clean the kitchen',
        subtasks: [
          { text: 'Clear countertops and put items away', duration: '3 minutes' },
          { text: 'Load dirty dishes into dishwasher', duration: '5 minutes' },
          { text: 'Wipe down countertops and stovetop', duration: '4 minutes' },
          { text: 'Scrub the sink', duration: '2 minutes' },
          { text: 'Sweep the floor', duration: '3 minutes' },
          { text: 'Take out the trash', duration: '2 minutes' },
        ],
        urgency: 'medium',
      },
      'Do laundry': {
        title: '\ud83e\uddf0 Do the laundry',
        subtasks: [
          { text: 'Gather dirty clothes from around the house', duration: '5 minutes' },
          { text: 'Sort into whites, colors, and delicates', duration: '3 minutes' },
          { text: 'Load first batch into washing machine', duration: '2 minutes' },
          { text: 'Hang or fold dry clothes from last load', duration: '10 minutes' },
          { text: 'Put folded clothes away in drawers/closet', duration: '5 minutes' },
        ],
        urgency: null,
      },
      'Cook dinner': {
        title: '\ud83c\udf72 Cook dinner',
        subtasks: [
          { text: 'Decide what to make and check ingredients', duration: '3 minutes' },
          { text: 'Wash and prep vegetables', duration: '8 minutes' },
          { text: 'Start cooking main dish', duration: '15 minutes' },
          { text: 'Prepare side dish or salad', duration: '7 minutes' },
          { text: 'Set the table', duration: '2 minutes' },
          { text: 'Plate and serve', duration: '2 minutes' },
        ],
        urgency: 'low',
      },
      'Clean the bathroom': {
        title: '\ud83d\udebf Clean the bathroom',
        subtasks: [
          { text: 'Spray cleaner on shower, sink, and toilet', duration: '2 minutes' },
          { text: 'Scrub the toilet bowl and wipe the seat', duration: '3 minutes' },
          { text: 'Clean the sink and faucet', duration: '2 minutes' },
          { text: 'Wipe down the mirror', duration: '1 minute' },
          { text: 'Scrub the shower/tub', duration: '5 minutes' },
          { text: 'Mop or wipe the floor', duration: '3 minutes' },
          { text: 'Replace towels and restock toilet paper', duration: '2 minutes' },
        ],
        urgency: 'medium',
      },
      'Organize the bedroom': {
        title: '\ud83d\udecf\ufe0f Organize the bedroom',
        subtasks: [
          { text: 'Make the bed and straighten pillows', duration: '3 minutes' },
          { text: 'Pick up clothes from floor and chairs', duration: '4 minutes' },
          { text: 'Put dirty clothes in hamper, clean ones away', duration: '5 minutes' },
          { text: 'Clear and organize nightstand', duration: '3 minutes' },
          { text: 'Dust surfaces', duration: '3 minutes' },
          { text: 'Vacuum or sweep the floor', duration: '4 minutes' },
        ],
        urgency: 'low',
      },
      'Grocery shopping': {
        title: '\ud83d\uded2 Grocery shopping',
        subtasks: [
          { text: 'Check fridge and pantry for what you need', duration: '5 minutes' },
          { text: 'Write a list grouped by aisle', duration: '5 minutes' },
          { text: 'Grab reusable bags', duration: '1 minute' },
          { text: 'Shop and check off items', duration: '30 minutes' },
          { text: 'Unpack and put groceries away', duration: '10 minutes' },
        ],
        urgency: null,
      },
    },
  },

  // TwoQuestions
  twoQuestions: {
    title: 'Does this feel familiar?',
    titleHighlight: 'familiar?',
    subtitle: "You\u2019re not lazy. Your brain just needs a different starting point.",
    withoutDoubly: 'Without Doubly',
    withDoubly: 'With Doubly',
    rows: [
      {
        without: 'I freeze and don\u2019t know where to start',
        with: 'Brain dump \u2192 one clear next step appears',
      },
      {
        without: 'I do smaller random tasks instead',
        with: 'Doubly surfaces what actually matters first',
      },
      {
        without: 'I start 5 things at once',
        with: 'One task on screen. Finish it, then the next.',
      },
      {
        without: 'I overthink the perfect plan',
        with: 'Dump everything, Doubly picks the first step',
      },
      {
        without: 'I avoid it until it becomes urgent \u2014 then panic',
        with: 'You start before the panic hits',
      },
      {
        without: 'I work alone and lose momentum fast',
        with: 'Body doubling and accountability partners keep you going',
      },
    ],
    questionTitle: 'What do you need most in that moment?',
    options: [
      'A brain dump',
      'One tiny next step',
      'Accountability',
      'A timer / focus push',
      'A reset when I fall behind',
    ],
    responseIntro: "That\u2019s exactly where Doubly helps.",
    responses: {
      'A brain dump': {
        title: 'Brain Dump \u2192 Instant Clarity',
        description:
          'Type out the chaos. Doubly extracts what\u2019s actionable and throws away the noise.',
      },
      'One tiny next step': {
        title: 'Next Step, Always Ready',
        description:
          'Doubly breaks big tasks down and serves you just the next small move. No overwhelm.',
      },
      Accountability: {
        title: 'Accountability Check-ins',
        description:
          'Gentle nudges and social accountability help you stay on track without the guilt.',
      },
      'A timer / focus push': {
        title: 'Focus Mode',
        description:
          'One task on screen, a timer running, distractions gone. Just you and the work.',
      },
      'A reset when I fall behind': {
        title: 'Fresh Start, No Guilt',
        description:
          'Fell off? Doubly reshuffles your plan so you can pick back up without the shame spiral.',
      },
    },
    mockupNextStep: 'Your next step is ready',
    mockupTask: 'Start with one small thing',
    mockupCta: 'Try Doubly',
  },


  // HabitDemo
  habitDemo: {
    title: 'Build habits that actually stick',
    subtitle:
      'No streaks to break. No guilt. Just tap when you do the thing. Doubly tracks the pattern so you can see progress.',
    todayLabel: 'Today',
    yourHabits: 'Your habits',
    weeksLabel: '12 weeks',
    lessLabel: 'Less',
    moreLabel: 'More',
    currentStreak: 'Current streak',
    bestStreak: 'Best streak',
    completion: 'Completion',
    allDoneMessage: 'All habits done for today!',
    allDoneDescription: 'Imagine this every day. Doubly makes it easy to keep going.',
    allDoneCta: 'Get unstuck now',
    habits: [
      { id: 'walk', name: 'Go for a walk', icon: '\ud83d\udeb6' },
      { id: 'read', name: 'Read 10 pages', icon: '\ud83d\udcd6' },
      { id: 'journal', name: 'Journal', icon: '\u270f\ufe0f' },
      { id: 'tidy', name: '10-min tidy', icon: '\ud83e\uddf9' },
    ],
  },

  // Success
  success: {
    title: 'Swap doomscrolling for a feed that gets you moving.',
    imageAlt: 'Doubly app post detail showing a completed task with community reactions and comments',
    subtitle: 'Swap doomscrolling for a feed that gets you moving.',
    outcomes: [
      'Start tasks without the mental fight',
      'Follow through on what you planned',
      'Get back on track without spiraling',
      'Trust yourself to actually do things',
    ],
  },

  // Stakes
  stakes: {
    title: 'Because staying stuck has a cost',
    body: 'When starting feels this hard, things slip. Deadlines get missed, opportunities pass, and you start to feel stuck in a loop of avoidance and guilt. Doubly helps you break that cycle before another week disappears.',
  },

  // Testimonials
  testimonials: {
    title: "People don\u2019t need more productivity pressure",
    subtitle: 'They need help getting started.',
    items: [
      // Real App Store reviews, quoted verbatim. Only add entries that are actual
      // published reviews AND whose reviewer gave permission (Apple's rule; ask by
      // replying to the review in App Store Connect). The grid auto-adapts up to 3.
      {
        quote:
          'This app is the only one that actually got me to do things. I have very strong ADHD, and it made me concentrate on my tasks one by one to always know what’s coming ahead and make order in my day. Love it so much! Hope to see awesome upgrades soon 🙏🏻',
        name: 'Liorcic',
        label: 'App Store review',
      },
      {
        quote:
          'This has really helped me manage my workload, I haven’t seen anything like it. The walkthrough and set up is very intuitive, and the features make it worth it!',
        name: 'MinecraftrNinja',
        label: 'App Store review',
      },
      // Slot 3 — next permitted review goes here.
    ],
  },

  // FAQ
  // ToolsSection
  toolsSection: {
    title: 'Free ADHD tools you can use right now',
    subtitle: 'No signup, no popups. Open one in your browser the moment you’re stuck.',
    hot: 'Hot',
    openTool: 'Open tool',
    browseAll: 'Browse all free ADHD tools',
  },

  faq: {
    title: 'Questions',
    items: [
      {
        q: 'Is Doubly only for people diagnosed with ADHD?',
        a: "No. Doubly is for anyone who struggles with starting, overwhelm, or mental clutter. You don't need a diagnosis, just a brain that sometimes freezes when there's too much to do.",
      },
      {
        q: 'How is this different from a normal to-do app?',
        a: "To-do apps help you list things. Doubly helps you actually begin them. We focus on reducing initiation resistance, the gap between knowing what to do and doing it, with brain dumps, one-step clarity, and accountability.",
      },
      {
        q: 'Does it help with task initiation specifically?',
        a: "Yes. That's our core focus. Brain dump clears mental clutter, next-step clarity picks one doable action, and accountability tools help you follow through. Every feature is built around that first step.",
      },
      {
        q: 'What makes accountability different here?',
        a: "It's not nagging or streaks that make you feel guilty. Doubly uses gentle social check-ins with real people who care about your progress, so you have someone in your corner, not a robot shaming you.",
      },
      {
        q: 'Does it replace habit trackers or planners?',
        a: "It can. But Doubly isn't trying to be a swiss army knife. It's laser-focused on helping you move from stuck to started. If you need detailed project planning, pair it with your existing tools.",
      },
      {
        q: 'Is it good if I get overwhelmed easily?',
        a: "Especially then. Doubly never shows you everything at once. You see one next step, not a wall of tasks. The entire UX is designed for brains that get overloaded fast.",
      },
    ],
  },

  // FinalCTA
  finalCta: {
    title: "Your brain doesn\u2019t need more pressure",
    highlight: 'It needs a way to start.',
    subtitle: 'For ADHD minds that are tired of overthinking, avoiding, and falling behind.',
    cta: 'Download on the App Store',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    freeTools: 'Free ADHD tools',
    tools: 'Tools',
    learn: 'Learn',
    privacy: 'Privacy',
    terms: 'Terms',
    support: 'Support',
    copyright: (year: number) => `\u00a9 ${year} Doubly. Built for ADHD brains.`,
  },

  // StickyBar
  stickyBar: {
    cta: 'Get unstuck now',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | The ADHD app that helps you start',
    description:
      'Brain dump the chaos, get one clear next step, and use accountability to actually follow through. Built for ADHD minds that need help starting, not just planning.',
    keywords: ['ADHD', 'productivity', 'brain dump', 'task management', 'accountability', 'focus'],
    ogTitle: 'Doubly | The ADHD app that helps you start',
    ogDescription:
      'Brain dump the chaos, get one clear next step, and use accountability to actually follow through.',
  },
  // Tool library card copy (title + description per tool).
  // Mirrors content/tools-i18n/${locale}/_index.json cards[] so the homepage grid and
  // the footer speak the visitor's language; kept in sync by scripts/check-tool-cards.mjs.
  toolCards: {
    'task-splitter': {
      title: 'Task Breakdown Tool',
      description:
        'Type a task you cannot start. AI splits it into small, doable steps with time estimates. Built for ADHD brains.',
    },
    'brain-dump': {
      title: 'Brain Dump Tool',
      description:
        'Dump everything in your head, AI pulls out only the actionable tasks. No signup, nothing stored.',
    },
    'pick-one': {
      title: 'Pick One Task Tool',
      description:
        'Paste a messy to-do list, get one thing to start with. Smallest, scariest, or random. Built for the moment ten tasks reads as one giant unstartable thing.',
    },
    'eisenhower-matrix': {
      title: 'Eisenhower Matrix (ADHD Edition)',
      description:
        'Drag tasks into quadrants like "boring but important" instead of textbook labels. The matrix that finally fits an ADHD brain. Saves locally.',
    },
    'pomodoro': {
      title: 'ADHD Pomodoro Timer',
      description:
        '25-minute work, 5-minute break - the focus method that finally fits an ADHD brain. Free, no signup, works offline.',
    },
    'visual-timer': {
      title: 'Visual Timer / Time Blindness Clock',
      description:
        'A shrinking pie wedge so you can see time passing instead of reading digits. Doubles as a time blindness clock for ADHD adults.',
    },
    'brown-noise': {
      title: 'Ambient Sound Generator',
      description:
        'Free in-browser ambient sound generator. Brown noise plus pink and white. Steady background sound to quiet a busy ADHD brain. Sleep timer included, works offline.',
    },
    'body-doubling-room': {
      title: 'Body Doubling Room',
      description:
        'Free two-person focus room. Share a link, work side by side over peer-to-peer video, run a shared timer. No signup, no install.',
    },
    'hyperfocus-timer': {
      title: 'Hyperfocus Interrupt Timer',
      description:
        'Recurring spoken check-ins every X minutes and an optional hard stop, so an ADHD hyperfocus session does not eat your whole afternoon.',
    },
  },

  // Interactive tool widget copy (the timers, splitter, matrix, ...).
  // These widgets render on BOTH /tools/* (English) and /{locale}/tools/*, so every
  // string here must exist in all 15 dictionaries; check:i18n enforces that.
  toolWidgets: {
    taskSplitter: {
      inputLabel: 'What is the task you cannot start?',
      inputPlaceholder: 'e.g. File my expense report',
      submit: 'Break it down',
      submitting: 'Breaking it down…',
      privacyNote: 'Private. Nothing is saved on our server.',
      charactersLeft: (count: number) => `${count} characters left`,
      presetsIntro: 'Or try one of these:',
      presets: {
        cleanKitchen: 'Clean the kitchen',
        doLaundry: 'Do laundry',
        replyInbox: 'Reply to inbox',
        planWeekendTrip: 'Plan a weekend trip',
        fileTaxes: 'File my taxes',
        cleanBathroom: 'Clean the bathroom',
      },
      loading: 'Breaking it into steps…',
      errorRateLimit: 'You are going fast. Wait a moment and try again.',
      errorGeneric: 'Could not break that down right now. Try again in a few seconds.',
      tryAgain: 'Try again',
      taskLabel: 'Task',
      urgencyLabels: { low: 'Low urgency', medium: 'Medium urgency', high: 'High urgency' },
      stepsDone: (done: number, total: number) => `${done}/${total} steps done`,
      minTotal: (min: number) => `~${min} min total`,
      allDoneMessage: 'Done. That wasn’t as scary as it looked, right?',
      emptyState:
        'Couldn’t find clear sub-steps for that one. Try rephrasing as an action, like “Write the project plan” or “Clean the garage.”',
    },
    brainDump: {
      label: 'Dump everything in your head. Doesn’t need to be organized.',
      placeholder:
        'I keep forgetting to call the dentist and the kitchen is a mess.\nFeeling overwhelmed about the project at work. Need to buy groceries\nfor dinner tonight and respond to Sarah’s email from last week.',
      privacy: 'Private. Nothing is saved on our server.',
      charactersLeft: (remaining: number) => `${remaining} characters left.`,
      clear: 'Clear',
      submit: 'Pull out the tasks',
      submitting: 'Pulling out tasks…',
      loading: 'Reading your dump and pulling out the actionable bits…',
      errorRateLimited: 'You are going fast. Wait a moment and try again.',
      errorGeneric: 'Could not extract tasks right now. Try again in a few seconds.',
      tryAgain: 'Try again',
      empty:
        'We didn’t find anything that looked like a concrete task in there. That can be a good sign. If you were venting, that counts. If you meant to list things to do, try being a bit more specific (“email Sarah” instead of “Sarah stuff”).',
      resultsTitle: 'Actionable tasks',
      doneCount: (done: number, total: number) => `${done}/${total} done`,
      footer: 'Pick one. Just one. Do it now, then come back for the next.',
    },
    pickOne: {
      inputLabel: 'Paste your list. One per line, or just messy with commas. Whatever.',
      inputPlaceholder:
        'reply to mom\nbook the dentist\nfile expenses\nfinish the slide deck\nwater the plants',
      itemsDetected: (count: number) => `${count} item${count === 1 ? '' : 's'} detected`,
      itemsDetectedWithLeft: (count: number, left: number) =>
        `${count} item${count === 1 ? '' : 's'} detected, ${left} left`,
      clearEverything: 'Clear everything',
      modeLegend: 'How should we pick?',
      modes: {
        smallest: {
          label: 'Smallest',
          reason: 'Shortest item on the list. Start tiny, build momentum.',
        },
        scariest: {
          label: 'Scariest',
          reason: 'The one you would rather not look at. Doing it first frees the day.',
          // Shown when nothing on the list trips a dread word. Ranking by length
          // instead would be a lie, so we say what we actually did.
          noSignalReason:
            'Nothing here reads as scary, which is its own kind of good news. Picked one at random.',
        },
        random: {
          label: 'Just pick one',
          reason: 'No deliberation. The list picked itself. Just start.',
        },
      },
      // Dread words for the "Scariest" mode. Matched as substrings against the
      // lowercased item, so stems beat full words: "tax" also catches "taxes".
      //
      // LOCALIZING THIS IS NOT TRANSLATION. Each locale needs the things people
      // in that language actually avoid, named the way they name them: the tax
      // authority ("IRS" -> "Finanzamt" -> "מס הכנסה"), the bureaucracy, the
      // conversation nobody wants to have. A literal translation of this list is
      // worse than useless, because it silently ranks nothing.
      scaryWords: [
        'tax',
        'doctor',
        'dentist',
        'insurance',
        'bill',
        'rent',
        'mortgage',
        'lawyer',
        'attorney',
        'court',
        'irs',
        'hmrc',
        'landlord',
        'email back',
        'reply',
        'call back',
        'apolog',
        'boss',
        'manager',
        'difficult conversation',
        'confront',
        'breakup',
        'cancel',
        'unsubscribe',
        'dispute',
        'complaint',
        'overdue',
        'deadline',
        'forgot',
        'should have',
        'meant to',
        'been putting off',
      ],
      pickCta: 'Pick one for me',
      pickAnotherCta: 'Pick another',
      emptyHint: 'Add at least one item, then tap pick.',
      readyHint: 'Ready. Tap “Pick one for me” whenever you can’t decide.',
      allDoneTitle: 'List handled.',
      allDoneBody:
        'Every item is either done or skipped. You can clear the list, or reset to bring skipped items back into the pool.',
      bringSkippedBack: 'Bring skipped back',
      startFreshList: 'Start a fresh list',
      pickedEyebrow: 'Start with this one',
      didIt: 'Did it',
      notThisOne: 'Not this one',
      pickAgain: 'Pick again',
      progress: (done: number, skipped: number, left: number) =>
        `${done} done, ${skipped} skipped, ${left} left`,
    },
    eisenhower: {
      inputLabel: 'Add a task',
      inputPlaceholder: 'Add a task and hit enter (or paste many separated by line breaks)',
      addButton: 'Add',
      totals: (total: number, unsorted: number) =>
        `${total} task${total === 1 ? '' : 's'} total, ${unsorted} unsorted`,
      clearAll: 'Clear everything',
      unsortedHeading: (count: number) => `Unsorted (${count})`,
      unsortedListLabel: 'Unsorted tasks',
      removeTask: (text: string) => `Remove ${text}`,
      placeHint: 'Now tap a quadrant to place it.',
      placeHintDesktop: 'Or drag and drop on desktop.',
      quadrantRegionLabel: (label: string) => `${label} quadrant`,
      quadrantCountLabel: (count: number, label: string) => `${count} tasks in ${label}`,
      dropHere: 'Drop here',
      sendBackToUnsorted: 'Send back to unsorted',
      moveBackToUnsorted: (text: string) => `Move ${text} back to unsorted`,
      empty: 'Empty',
      emptyState:
        'Add a task above to get started. Everything saves in your browser, nothing on our server.',
      hintLabel: 'Doubly hint:',
      hintBody:
        'The boring-but-important pile is the one most people skip and most regret skipping. If you only do one thing today, pick from there.',
      quadrants: {
        fire: {
          label: 'On fire',
          sub: 'Do today, not tomorrow.',
          textbook: 'Important + Urgent',
        },
        boring: {
          label: 'Boring but important',
          sub: 'The actual wins. Schedule them, do not skip them.',
          textbook: 'Important + Not Urgent',
        },
        noisy: {
          label: 'Noisy but skippable',
          sub: 'Loud, but not your problem. Delegate, defer, ignore.',
          textbook: 'Urgent + Not Important',
        },
        drop: {
          label: 'Drop these',
          sub: 'It is allowed. The list does not have to be done.',
          textbook: 'Not Important + Not Urgent',
        },
      },
    },
    pomodoro: {
      timerLabel: 'Pomodoro timer',
      modeTablistLabel: 'Timer mode',
      modes: {
        work: 'Focus',
        'short-break': 'Short break',
        'long-break': 'Long break',
      },
      dialLabel: (mode: string, time: string) => `${mode} timer. ${time} remaining.`,
      sessionsToday: (count: number) => `Sessions completed today: ${count}`,
      soundToggle: 'Sound at session end',
      customizeDurations: 'Customize durations',
      hideSettings: 'Hide settings',
      focusMinutes: 'Focus (min)',
      shortBreakMinutes: 'Short break (min)',
      longBreakMinutes: 'Long break (min)',
      documentTitle: (time: string, mode: string) => `${time} | ${mode} | Doubly`,
    },
    visualTimer: {
      ariaLabel: 'Visual countdown timer',
      dialAriaLabel: (remaining: string) => `Visual timer dial. ${remaining} remaining.`,
      seconds: (s: number) => `${s} seconds`,
      minutes: (m: number) => `${m} minute${m === 1 ? '' : 's'}`,
      minutesAndSeconds: (m: number, s: number) =>
        `${m} minute${m === 1 ? '' : 's'} ${s} seconds`,
      documentTitle: (time: string) => `${time} | Doubly`,
      countingDown: (minutes: number) => `Counting down from ${minutes} min`,
      setFor: (minutes: number) => `Set for ${minutes} min`,
      paused: 'Paused',
      timeIsUp: 'Time is up',
      presetsLabel: 'Duration presets',
      presetMinutes: (minutes: number) => `${minutes} min`,
      custom: 'Custom',
      minutesLabel: 'Minutes',
      set: 'Set',
      soundWhenDone: 'Sound when time is up',
    },
    brownNoise: {
      play: (sound: string) => `Play ${sound}`,
      pause: (sound: string) => `Pause ${sound}`,
      documentTitle: (sound: string) => `▶ ${sound} · Doubly`,
      chooseSound: 'Choose an ambient sound',
      soundGroupLabel: 'Ambient sound',
      volume: 'Volume',
      volumePercent: (percent: number) => `${percent}%`,
      sleepTimer: 'Sleep timer',
      sleepOff: 'Off',
      sleepMinutes: (minutes: number) => `${minutes} min`,
      privacyNote: 'Runs in your browser. Nothing recorded, nothing uploaded.',
      sounds: {
        brown: {
          name: 'Brown',
          description: 'Deep, rumbly. Like a distant waterfall. The TikTok one.',
        },
        pink: {
          name: 'Pink',
          description: 'Softer than white, less bassy than brown. Balanced.',
        },
        white: {
          name: 'White',
          description: 'The hiss of an old TV. Bright and even.',
        },
      },
    },
    hyperfocus: {
      ariaLabel: 'Hyperfocus interrupt timer',

      // Durations. Every phrasing lives here so a language can pick its own
      // plural forms, units and word order.
      minutesShort: (minutes: number) => `${minutes} min`,
      hoursShort: (hours: number) => `${hours} h`,
      hoursMinutesShort: (hours: number, minutes: number) => `${hours} h ${minutes} min`,
      durationLong: (hours: number, minutes: number) => {
        if (hours === 0 && minutes === 0) return 'less than a minute';
        const parts: string[] = [];
        if (hours > 0) parts.push(`${hours} hour${hours === 1 ? '' : 's'}`);
        if (minutes > 0) parts.push(`${minutes} minute${minutes === 1 ? '' : 's'}`);
        return parts.join(' and ');
      },

      // Session strip. Text wrapped in ** is rendered emphasized.
      stripNoCap: (interval: string) => `Check-in every ${interval}, no hard stop`,
      stripWithCap: (interval: string, cap: string) =>
        `Check-in every ${interval}, hard stop at ${cap}`,
      summaryNoCap: (interval: string) => `Check in every **${interval}** with no hard stop.`,
      summaryWithCap: (interval: string, cap: string) =>
        `Check in every **${interval}** with a hard stop at **${cap}**.`,

      // Setup
      intervalHeading: 'Check in every',
      custom: 'Custom',
      minutes: 'Minutes',
      set: 'Set',
      jitterNote: 'Check-ins are jittered by about ten percent so the brain cannot pre-dismiss them.',
      moreOptions: 'More options',
      hideOptions: 'Hide options',
      taskLabel: 'What are you working on? (optional)',
      taskPlaceholder: 'e.g. tax forms, design review, the script',
      taskHint: 'Used in spoken check-ins so you hear what you sat down to do.',
      hardStopHeading: 'Hard stop after',
      hardStopHint:
        'A louder alert fires once the cap is reached so a six-hour spiral cannot sneak past you.',
      capOff: 'Off',
      capHours: (hours: number) => `${hours}h`,
      noHardStop: 'no hard stop',
      alertsHeading: 'Alerts',
      chime: 'Chime',
      voice: 'Voice',
      notify: 'Notify',
      alertsHint:
        'Chime gets louder if a check-in is ignored. Voice speaks the time and elapsed duration. Notify fires a browser notification when the tab is in the background.',
      notificationsBlocked:
        'Notifications are blocked in this browser. Enable them in site settings to use this.',
      notificationsUnsupported: 'Your browser does not support web notifications.',
      startSession: 'Start session',

      // Live session
      statElapsed: 'Elapsed',
      statNextCheckIn: 'Next check-in',
      statCap: 'Cap',
      statusNow: 'Now',
      statusPaused: 'Paused',
      statusCapHit: 'Cap hit',
      statusOff: 'Off',
      workingOn: (task: string) => `Working on **${task}**`,
      checkInHeading: 'Quick check-in',
      checkInBody: (clock: string, elapsed: string) =>
        `It is ${clock} and you have been at this for ${elapsed}. Are you still on the task you started, or is it time to surface?`,
      stillGoing: 'Still going',
      takeABreak: 'Take a break',
      stopSession: 'Stop session',
      capHeading: 'Session cap reached',
      capBody: (minutes: number) =>
        `You set a hard stop at ${minutes} minutes. Stand up, drink water, eat something. The work will still be here.`,
      pause: 'Pause',
      resume: 'Resume',
      endSession: 'End session',
      checkInLog: 'Check-in log',
      logContinue: 'kept going',
      logBreak: 'took a break',
      logStop: 'stopped',

      // Browser tab title while a check-in is waiting in a background tab.
      tabAlert: '⚠ Check in | Doubly',

      // Spoken aloud (SpeechSynthesis) and pushed as OS notifications.
      checkInSpeech: (clock: string, elapsed: string, task: string) =>
        task
          ? `Check in. It's ${clock}. You've been working on ${task} for ${elapsed}.`
          : `Check in. It's ${clock}. You've been working for ${elapsed}.`,
      capSpeech: (clock: string, elapsed: string) =>
        `Session cap reached. It's ${clock}. You've been at this for ${elapsed}. Time to stop.`,
      notificationCheckInTitle: 'Hyperfocus check-in',
      notificationCheckInBody: (clock: string, elapsed: string) =>
        `It's ${clock}. You've been at this for ${elapsed}.`,
      notificationCapTitle: 'Hyperfocus cap reached',
      notificationCapBody: (clock: string, elapsed: string) =>
        `It's ${clock}. You've been at this for ${elapsed}. Time to stop.`,
    },
    shared: {
      start: 'Start',
      pause: 'Pause',
      resume: 'Resume',
      done: 'Done',
      reset: 'Reset',
      skip: 'Skip',
      skipAria: 'Skip to next session',
      startSession: 'Start a focus session',
      creatingRoom: 'Creating room...',
    },
    chrome: {
      tryInApp: 'Try it in the app',
      appStoreAria: (label: string) => `${label} on the App Store`,
      breadcrumbAria: 'Breadcrumb',
    },
  },

  // The live body-doubling room at /r/[id].
  //
  // Unlike every other section, this one is NOT chosen by the URL. /r/[id] is a
  // link two people share, so the locale is resolved per viewer from their own
  // Accept-Language: the same room renders in Hebrew for one participant and in
  // German for the other. Nothing here may assume both people read the same
  // language, so never build a sentence out of a peer's UI strings.
  room: {
    join: {
      titleFirst: 'Start a focus session',
      titleJoin: 'Join the focus session',
      subtitleFirst:
        'Pick your name and the session length. You can share the invite link once you are in.',
      subtitleJoin: 'Pick your name and join. The host has already set the timer.',
      nameLabel: 'Your name',
      // A short, common first name in this language. It is a placeholder, not a
      // brand: use a name that reads as ordinary to a native speaker.
      namePlaceholder: 'Alex',
      avatarLabel: 'Pick an avatar',
      avatarChooseAria: (emoji: string) => `Choose ${emoji} avatar`,
      durationLabel: 'Session length',
      minutes: (n: number) => `${n} min`,
      permissionNote:
        'The next screen asks for camera and microphone access. Both are optional. If you skip them, you will join with a ghost tile and other people in the room can still see you are there.',
      createCta: 'Create room',
      joinCta: 'Join room',
    },
    header: {
      eyebrow: 'Body doubling room',
      withPeer: (name: string) => `You and ${name}`,
      waiting: 'Waiting for your partner',
      copyInvite: 'Copy invite link',
      linkCopied: 'Link copied',
    },
    full: {
      title: 'Room is full',
      body: 'A body doubling room fits two people. The good news, starting a new one takes one click.',
      cta: 'Start a new room',
    },
    phases: {
      waiting: {
        eyebrow: 'Step 0 of 3',
        title: 'Share your link',
        body: 'Send the page URL to one person. The session starts the moment they join.',
      },
      intro: {
        eyebrow: 'Step 1 of 3 · Intro',
        title: 'Wave hi and say what you are about to do',
        titleWithPeer: (name: string) => `Wave hi to ${name}`,
        body: 'Take 60 seconds. Camera on, one sentence each. Saying the goal out loud is what makes it stick.',
        cta: 'Start focus',
      },
      focus: {
        eyebrow: 'Step 2 of 3 · Focus',
        title: 'Heads down. You are working together in silence.',
        body: 'Mic on or off, both fine. The other person being there is the point.',
        cta: 'End focus early',
      },
      wrapUp: {
        eyebrow: 'Step 3 of 3 · Wrap-up',
        title: 'Share one win and one thing that tripped you up',
        body: 'A short out-loud reflection locks in what you just did and makes the next session easier to start.',
        cta: 'End session',
      },
      done: {
        eyebrow: 'Session complete',
        title: 'Nice work. You showed up.',
        body: 'That counts. Stay and run another, or close the tab and go do something kind for yourself.',
        runAnother: 'Run another',
      },
    },
    tiles: {
      you: (name: string) => `${name} (you)`,
      peerFallbackName: 'Waiting',
      waitingForPartner: 'Waiting for partner...',
      micMuted: 'Microphone muted',
      goalPlaceholderIntro: 'What I am about to work on...',
      goalPlaceholderFocus: "What I'm working on",
      reflectionPlaceholder: 'One win or one snag...',
      peerNoGoal: 'No goal yet',
      peerNoReflection: 'Waiting for their wrap-up',
      empty: '—',
    },
    controls: {
      muteMic: 'Mute mic',
      unmuteMic: 'Unmute mic',
      micUnavailable: 'Mic unavailable',
      muteTitle: 'Mute',
      unmuteTitle: 'Unmute',
      micBlockedTitle: 'Mic blocked or unavailable',
      camOff: 'Turn off camera',
      camOn: 'Turn on camera',
      camUnavailable: 'Camera unavailable',
      stopVideoTitle: 'Stop video',
      startVideoTitle: 'Start video',
      camBlockedTitle: 'Camera blocked or unavailable',
      startTimer: 'Start timer',
      pauseTimer: 'Pause timer',
      leave: 'Leave',
      retry: 'Retry',
    },
    reactions: {
      groupAria: 'Send a reaction',
      sendAria: (emoji: string) => `Send ${emoji} reaction`,
    },
    status: {
      peerLeft: 'Your partner left the room.',
      shareToUnlock:
        'Share the invite link to bring someone in. The session unlocks when they arrive.',
      upNext: (minutes: number) => `Up next: ${minutes}-minute focus block`,
      planOnArrival: (minutes: number) =>
        `Plan: ${minutes}-minute focus block once your partner arrives`,
      wrapUpBreath: 'Take a breath. The timer is paused.',
      timerAria: (remaining: string) => `Timer, ${remaining} remaining`,
    },
    errors: {
      p2pBlocked:
        "Can't connect. Your network may block peer-to-peer connections. Try a different network.",
      mediaUnavailable: 'Camera and microphone unavailable.',
    },
  },

} as const;

export default en;
export type Translations = typeof en;
