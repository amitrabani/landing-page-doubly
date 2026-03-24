const en = {
  // Navbar
  navbar: {
    brand: 'Doubly',
    howItWorks: 'How it works',
    features: 'Features',
    testimonials: 'Testimonials',
    faq: 'FAQ',
    cta: 'Try Doubly free',
    toggleMenu: 'Toggle menu',
  },

  // Hero
  hero: {
    badge: 'Built for ADHD brains',
    titlePrefix: 'The ADHD app that helps you ',
    titleHighlight: 'start and follow through',
    subtitle:
      'Stop spinning, overthinking, and avoiding. Dump the chaos, get one clear next step, and actually move forward.',
    cta: 'Start your first task now',
    secondaryCta: 'See how it works',
    floatingCards: {
      brainDump: 'Brain Dump',
      nextStep: 'Next Step',
      accountability: 'Accountability',
    },
    phone: {
      greeting: 'Good morning',
      yourNextStep: 'Your next step',
      activeTask: 'Put laundry in washer',
      duration: '10 min',
      fromBrainDump: 'from brain dump',
      task1: 'Reply to Sarah',
      task2: 'Start project outline',
    },
  },

  // Problem
  problem: {
    title: 'ADHD is not just \u201cbeing unorganized\u201d',
    subtitle:
      "It\u2019s a daily battle with a brain that won\u2019t cooperate with your own intentions.",
    cards: [
      {
        type: 'External',
        title: 'Too many tasks. Too many thoughts.',
        body: 'No clear starting point. Everything feels equally urgent and equally impossible.',
      },
      {
        type: 'Internal',
        title: "You know what to do, but still can\u2019t start.",
        body: "The gap between knowing and doing keeps getting bigger \u2014 and it\u2019s exhausting. It\u2019s not laziness. It\u2019s initiation resistance.",
      },
      {
        type: 'Philosophical',
        title: "It shouldn\u2019t be this hard to start normal things.",
        body: "You shouldn\u2019t need superhuman effort just to begin. Your brain works differently. Your tools should too.",
      },
      {
        type: 'Stakes',
        title: "And it\u2019s costing you more than time.",
        body: "Things pile up. You fall behind. And it starts to feel like you can\u2019t trust yourself to follow through.",
      },
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
    subtitle:
      'Brain full? Just type. Doubly pulls out the actionable stuff and throws away the noise.',
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
      { text: '\ud83e\uddf9 Clean the sink', phrase: 'clean the sink' },
      { text: '\ud83d\udd0c Find the charger', phrase: 'find the charger' },
      { text: '\ud83c\udf7d\ufe0f Eat something', phrase: 'eat something' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: "Here\u2019s how you get unstuck",
    subtitle: 'Three simple steps. No complex setup. No learning curve.',
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
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: 'Type a task. Watch it split.',
    subtitle:
      'Big tasks feel impossible. Doubly breaks them into small, doable steps so you can just start.',
    customInputPlaceholder: 'Or type your own task...',
    splitButton: 'Split it',
    taskLabel: 'Task',
    aiThinking: 'AI is breaking it down...',
    errorMessage: 'Could not reach AI right now. Try a preset above or try again.',
    tryAgain: 'Try again',
    stepsDone: (done: number, total: number) => `${done}/${total} steps done`,
    minTotal: (min: number) => `~${min} min total`,
    urgencySuffix: 'urgency',
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
    mockupCta: 'Try Doubly free',
  },

  // Features
  features: {
    title: 'Everything designed to reduce friction',
    subtitle: 'Not more features. Less resistance between you and doing.',
    items: [
      {
        title: 'Brain Dump',
        body: 'Get thoughts out fast before they disappear. No categories, no pressure. Just capture.',
      },
      {
        title: 'Next-Step Clarity',
        body: 'Turn \u201cI should do something\u201d into one visible action. Doubly picks your starting point.',
      },
      {
        title: 'Accountability',
        body: 'Social check-ins and gentle nudges help you actually follow through, not just plan.',
      },
      {
        title: 'Momentum Tools',
        body: "Timers, habits, and progress tracking that don\u2019t disappear the second life gets messy.",
      },
    ],
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
      { id: 'water', name: 'Drink water', icon: '\ud83d\udca7', unit: 'glasses' },
      { id: 'walk', name: 'Go for a walk', icon: '\ud83d\udeb6' },
      { id: 'read', name: 'Read 10 pages', icon: '\ud83d\udcd6' },
      { id: 'journal', name: 'Journal', icon: '\u270f\ufe0f' },
      { id: 'tidy', name: '10-min tidy', icon: '\ud83e\uddf9' },
    ],
  },

  // Success
  success: {
    title: 'What changes when you can actually start',
    subtitle: 'Not flawless productivity. Just less friction, less guilt, and more forward motion.',
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
      {
        quote:
          'I actually opened it when I was stuck. First app that felt like it was built for that exact moment.',
        name: 'Maya R.',
        label: 'ADHD, diagnosed at 28',
      },
      {
        quote:
          'Brain dump helped instantly. I went from 20 things spinning in my head to one task on screen.',
        name: 'Jordan T.',
        label: 'College student with ADHD',
      },
      {
        quote:
          "This is the first app that helped me start, not just plan. I've tried every productivity app and this one actually gets it.",
        name: 'Alex K.',
        label: 'Freelance designer',
      },
    ],
  },

  // FAQ
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
    cta: 'Start your first task now',
    disclaimer: 'Free to start. No credit card required.',
  },

  // Footer
  footer: {
    brand: 'Doubly',
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
} as const;

export default en;
export type Translations = typeof en;
