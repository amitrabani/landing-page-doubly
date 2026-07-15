const he = {
  // Shared
  common: {
    tryInDoubly: 'נסו את זה ב-Doubly',
    changeLanguage: 'החלפת שפה',
    socialProof: (count: number) => `הצטרפו ל-${count.toLocaleString('he-IL')} אנשים עם ADHD`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    tools: 'כלים',
    howItWorks: 'איך זה עובד',
    features: 'יכולות',
    testimonials: 'המלצות',
    faq: 'שאלות נפוצות',
    cta: 'הורידו את Doubly',
    toggleMenu: 'פתיחת תפריט',
  },

  // Hero
  hero: {
    badge: 'נבנה למוחות עם ADHD',
    titlePrefix: 'כשבמוח שלך יש ',
    titleHighlight: '47 טאבים פתוחים',
    subtitle: 'הפכו את הכאוס לצעד הבא אחד וברור, בפחות מדקה.',
    cta: 'הורדה מ-App Store',
    secondaryCta: 'ראו איך זה מפרק משימה ↓',
    android: {
      prompt: 'משתמשים באנדרואיד?',
      placeholder: 'you@email.com',
      submit: 'עדכנו אותי',
      success: 'אתם ברשימה. נשלח לכם מייל כש-Doubly תגיע לאנדרואיד.',
      invalid: 'נא להזין כתובת מייל תקינה.',
      error: 'משהו השתבש. נסו שוב.',
    },
    floatingCards: {
      brainDump: 'פריקת מוח',
      habits: 'הרגלים',
      accountability: 'מחויבות',
    },
    phone: {
      screenAlt: 'אפליקציית Doubly מציגה את ההרגלים שלכם עם רצפים יומיים ולוחות התקדמות',
    },
  },

  // Problem
  problem: {
    title: 'ADHD זה לא רק להיות לא מאורגנים',
    titleHighlight: 'לא מאורגנים',
    subtitle:
      'זה קרב יומיומי עם מוח שלא משתף פעולה עם הכוונות שלכם.',
    cards: [
      {
        type: 'External',
        title: 'יותר מדי משימות. יותר מדי מחשבות.',
        body: 'אין נקודת התחלה ברורה.',
      },
      {
        type: 'Internal',
        title: 'אתם יודעים מה לעשות, ובכל זאת לא מצליחים להתחיל.',
        body: 'זו לא עצלות. זו התנגדות להתחלה.',
      },
      {
        type: 'Philosophical',
        title: 'זה לא אמור להיות כל כך קשה להתחיל.',
        body: 'המוח שלכם עובד אחרת. גם הכלים שלכם צריכים.',
      },
      {
        type: 'Stakes',
        title: 'וזה עולה לכם ביותר מזמן.',
        body: 'דברים מצטברים. אתם נשארים מאחור. ומתחילים לאבד אמון בעצמכם.',
      },
    ],
  },

  // VisualProblem
  visualProblem: {
    cards: [
      { image: '/problem-1.jpg', alt: 'יותר מדי משימות. יותר מדי מחשבות.' },
      { image: '/problem-2.jpg', alt: 'אתם יודעים מה לעשות, ובכל זאת לא מצליחים להתחיל.' },
      { image: '/problem-4.jpg', alt: 'זה לא אמור להיות כל כך קשה להתחיל דברים רגילים.' },
      { image: '/problem-3.jpg', alt: 'וזה עולה לכם ביותר מזמן.' },
    ],
  },

  // Guide
  guide: {
    title: 'נבנה במיוחד למוחות עם ADHD שמתקשים להתחיל',
    subtitle:
      'רוב אפליקציות הפרודוקטיביות מניחות שהמוח שלכם מוכן לתכנן. Doubly נבנתה בשביל הרגע שבו אתם מוצפים, תקועים או נמנעים, לפי איך ש-ADHD באמת עובד.',
    proofPoints: [
      'נבנה בשביל החיכוך של ADHD, לא לפרודוקטיביות גנרית',
      'עוזר להפחית את ההתנגדות להתחלה',
      'נותן מבנה בלי להציף אתכם',
    ],
    mockup: {
      brainDump: 'פריקת מוח',
      items: ['להתקשר לרופא שיניים', 'לקנות מצרכים', 'לענות לבוס', 'כביסה', 'למה אני כל כך עייף'],
      yourNextStep: 'הצעד הבא שלכם',
      nextStepTask: 'להכניס כביסה למכונה',
      nextStepMeta: '~5 דקות · אנרגיה נמוכה',
      accountability: 'מחויבות',
      accountabilityText: 'שרה בודקת מה קורה ב-15:00',
    },
  },

  // BrainDumpDemo
  brainDumpDemo: {
    title: 'רוקנו את הכאוס. שמרו את המשימות.',
    titleHighlight: 'שמרו את המשימות.',
    replayDemo: 'הפעלת ההדגמה מחדש',
    subtitle:
      'המוח מלא? הקלידו 20 שניות. Doubly שולפת את מה שאפשר לעשות וזורקת את הרעש.',
    dumpText:
      'אני פותח את הלפטופ כדי להיות פרודוקטיבי ותוך חמש שניות המוח שלי כזה: תענה להודעה הזאת, להזמין ויטמינים, לנקות את הכיור, למצוא את המטען, לאכול משהו, וגם לזכור את המשימה הסופר חשובה שבטוח לא התכוונת לשכוח. שכמובן מיד שכחתי.',
    brainDumpLabel: 'פריקת מוח',
    brainDumpPlaceholder: 'פשוט תשחררו הכול...',
    extractedTasksLabel: 'משימות שחולצו',
    listening: 'מקשיב...',
    tasksFound: (count: number) => (count === 1 ? 'משימה אחת נמצאה' : `נמצאו ${count} משימות`),
    filterNote: 'מחשבות שאי אפשר לפעול לפיהן סוננו החוצה. רק משימות אמיתיות נשארו.',
    tasks: [
      { text: '💊 להזמין ויטמינים', phrase: 'להזמין ויטמינים' },
      { text: '🧽 לנקות את הכיור', phrase: 'לנקות את הכיור' },
      { text: '🔌 למצוא את המטען', phrase: 'למצוא את המטען' },
      { text: '🍽️ לאכול משהו', phrase: 'לאכול משהו' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: 'ככה משתחררים מהתקיעות',
    titleHighlight: 'משתחררים מהתקיעות',
    subtitle: 'ארבעה צעדים פשוטים. בלי הגדרות מסובכות. בלי עקומת למידה.',
    stepLabel: 'שלב',
    steps: [
      {
        number: '01',
        title: 'רוקנו את הראש',
        body: 'תפסו מחשבות, משימות ובלגן מנטלי מהר. בלי צורך לארגן. פשוט תוציאו הכול החוצה.',
      },
      {
        number: '02',
        title: 'קבלו צעד הבא אחד וברור',
        body: 'Doubly הופכת הצפה למשהו שאפשר באמת להתחיל. לא עשרה סדרי עדיפויות. אחד.',
      },
      {
        number: '03',
        title: 'הישארו בתנועה',
        body: 'השתמשו במחויבות, טיימרים וכלי התקדמות כדי להמשיך, גם כשהמוטיבציה נגמרת.',
      },
      {
        number: '04',
        title: 'קבלו מחויבות',
        body: 'שתפו חברים בפיד של Doubly. מחויבות אמיתית קורית כשמישהו מחזיק לכם אצבעות.',
      },
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: 'הקלידו משימה. תראו אותה מתפרקת.',
    titleHighlight: 'מתפרקת.',
    subtitle:
      'משימות גדולות מרגישות בלתי אפשריות. Doubly מפרקת אותן לצעדים של 2–5 דקות כדי שפשוט תוכלו להתחיל.',
    customInputPlaceholder: 'או הקלידו משימה משלכם...',
    splitButton: 'פרקו את זה',
    taskLabel: 'משימה',
    aiThinking: 'ה-AI מפרק את זה...',
    errorMessage: 'לא הצלחנו להגיע ל-AI כרגע. נסו אחת מהדוגמאות למעלה או נסו שוב.',
    tryAgain: 'נסו שוב',
    stepsDone: (done: number, total: number) => `${done}/${total} צעדים הושלמו`,
    minTotal: (min: number) => `~${min} דקות בסך הכול`,
    urgencySuffix: 'דחיפות',
    urgencyLabels: { low: 'דחיפות נמוכה', medium: 'דחיפות בינונית', high: 'דחיפות גבוהה' },
    allDoneMessage: 'סיימתם. זה לא היה כל כך נורא, נכון?',
    allDoneDescription:
      'Doubly עושה את זה לכל משימה שתזרקו עליה. די לבהות ברשימת מטלות ענקית.',
    allDoneCta: 'להשתחרר מהתקיעות עכשיו',
    presets: [
      { label: 'לנקות את המטבח', icon: '🍳' },
      { label: 'לעשות כביסה', icon: '🧰' },
      { label: 'לבשל ארוחת ערב', icon: '🍲' },
      { label: 'לנקות את חדר האמבטיה', icon: '🚿' },
      { label: 'לסדר את חדר השינה', icon: '🛏️' },
      { label: 'קניות במכולת', icon: '🛒' },
    ],
    presetResults: {
      'לנקות את המטבח': {
        title: '🍳 לנקות את המטבח',
        subtasks: [
          { text: 'לפנות את משטחי העבודה ולהחזיר דברים למקום', duration: '3 דקות' },
          { text: 'לטעון כלים מלוכלכים למדיח', duration: '5 דקות' },
          { text: 'לנגב את המשטחים ואת הכיריים', duration: '4 דקות' },
          { text: 'לקרצף את הכיור', duration: '2 דקות' },
          { text: 'לטאטא את הרצפה', duration: '3 דקות' },
          { text: 'להוציא את הזבל', duration: '2 דקות' },
        ],
        urgency: 'medium',
      },
      'לעשות כביסה': {
        title: '🧰 לעשות כביסה',
        subtasks: [
          { text: 'לאסוף בגדים מלוכלכים מכל הבית', duration: '5 דקות' },
          { text: 'למיין ללבנים, צבעוניים ועדינים', duration: '3 דקות' },
          { text: 'להכניס מחזור ראשון למכונת הכביסה', duration: '2 דקות' },
          { text: 'לתלות או לקפל בגדים יבשים מהמחזור הקודם', duration: '10 דקות' },
          { text: 'לסדר את הבגדים המקופלים במגירות או בארון', duration: '5 דקות' },
        ],
        urgency: null,
      },
      'לבשל ארוחת ערב': {
        title: '🍲 לבשל ארוחת ערב',
        subtasks: [
          { text: 'להחליט מה מכינים ולבדוק מצרכים', duration: '3 דקות' },
          { text: 'לשטוף ולהכין את הירקות', duration: '8 דקות' },
          { text: 'להתחיל לבשל את המנה העיקרית', duration: '15 דקות' },
          { text: 'להכין תוספת או סלט', duration: '7 דקות' },
          { text: 'לערוך את השולחן', duration: '2 דקות' },
          { text: 'להגיש למנות ולהביא לשולחן', duration: '2 דקות' },
        ],
        urgency: 'low',
      },
      'לנקות את חדר האמבטיה': {
        title: '🚿 לנקות את חדר האמבטיה',
        subtasks: [
          { text: 'לרסס חומר ניקוי על המקלחת, הכיור והאסלה', duration: '2 דקות' },
          { text: 'לקרצף את האסלה ולנגב את המושב', duration: '3 דקות' },
          { text: 'לנקות את הכיור והברז', duration: '2 דקות' },
          { text: 'לנגב את המראה', duration: '1 דקה' },
          { text: 'לקרצף את המקלחת או האמבטיה', duration: '5 דקות' },
          { text: 'לשטוף או לנגב את הרצפה', duration: '3 דקות' },
          { text: 'להחליף מגבות ולחדש נייר טואלט', duration: '2 דקות' },
        ],
        urgency: 'medium',
      },
      'לסדר את חדר השינה': {
        title: '🛏️ לסדר את חדר השינה',
        subtasks: [
          { text: 'להציע את המיטה וליישר את הכריות', duration: '3 דקות' },
          { text: 'להרים בגדים מהרצפה ומהכיסאות', duration: '4 דקות' },
          { text: 'לשים בגדים מלוכלכים בסל, ולסדר את הנקיים', duration: '5 דקות' },
          { text: 'לפנות ולסדר את השידה', duration: '3 דקות' },
          { text: 'לנקות אבק מהמשטחים', duration: '3 דקות' },
          { text: 'לשאוב או לטאטא את הרצפה', duration: '4 דקות' },
        ],
        urgency: 'low',
      },
      'קניות במכולת': {
        title: '🛒 קניות במכולת',
        subtasks: [
          { text: 'לבדוק במקרר ובמזווה מה חסר', duration: '5 דקות' },
          { text: 'לכתוב רשימה מסודרת לפי מדפים', duration: '5 דקות' },
          { text: 'לקחת שקיות רב-פעמיות', duration: '1 דקה' },
          { text: 'לקנות ולסמן פריטים', duration: '30 דקות' },
          { text: 'לפרוק ולסדר את הקניות', duration: '10 דקות' },
        ],
        urgency: null,
      },
    },
  },

  // TwoQuestions
  twoQuestions: {
    title: 'נשמע מוכר?',
    titleHighlight: 'מוכר?',
    subtitle: 'אתם לא עצלנים. המוח שלכם פשוט צריך נקודת התחלה אחרת.',
    withoutDoubly: 'בלי Doubly',
    withDoubly: 'עם Doubly',
    rows: [
      {
        without: 'אני קופא ולא יודע מאיפה להתחיל',
        with: 'פריקת מוח → צעד הבא אחד וברור מופיע',
      },
      {
        without: 'אני עושה במקום זה משימות קטנות ואקראיות',
        with: 'Doubly מציפה קודם את מה שבאמת חשוב',
      },
      {
        without: 'אני מתחיל 5 דברים בבת אחת',
        with: 'משימה אחת על המסך. לסיים אותה, ואז את הבאה.',
      },
      {
        without: 'אני חושב יותר מדי על התוכנית המושלמת',
        with: 'שחררו הכול, ו-Doubly בוחרת את הצעד הראשון',
      },
      {
        without: 'אני נמנע עד שזה נעשה דחוף, ואז נכנס לפאניקה',
        with: 'אתם מתחילים לפני שהפאניקה מגיעה',
      },
      {
        without: 'אני עובד לבד ומאבד מהר את המומנטום',
        with: 'שותפים לעבודה משותפת (body doubling) ושותפי מחויבות שומרים עליכם בתנועה',
      },
    ],
    questionTitle: 'מה הכי חסר לכם ברגע הזה?',
    options: [
      'פריקת מוח',
      'צעד הבא קטן אחד',
      'מחויבות',
      'טיימר / דחיפה למיקוד',
      'התחלה מחדש כשאני נשאר מאחור',
    ],
    responseIntro: 'בדיוק שם Doubly עוזרת.',
    responses: {
      'פריקת מוח': {
        title: 'פריקת מוח → בהירות מיידית',
        description:
          'הקלידו את הכאוס. Doubly שולפת את מה שאפשר לעשות וזורקת את הרעש.',
      },
      'צעד הבא קטן אחד': {
        title: 'הצעד הבא, תמיד מוכן',
        description:
          'Doubly מפרקת משימות גדולות ומגישה לכם רק את הצעד הקטן הבא. בלי הצפה.',
      },
      'מחויבות': {
        title: 'תזכורות מחויבות',
        description:
          'דחיפות עדינות ומחויבות חברתית עוזרות לכם להישאר במסלול בלי אשמה.',
      },
      'טיימר / דחיפה למיקוד': {
        title: 'מצב מיקוד',
        description:
          'משימה אחת על המסך, טיימר רץ, בלי הסחות דעת. רק אתם והעבודה.',
      },
      'התחלה מחדש כשאני נשאר מאחור': {
        title: 'התחלה נקייה, בלי אשמה',
        description:
          'נפלתם מהעגלה? Doubly מסדרת מחדש את התוכנית שלכם כדי שתוכלו לחזור בלי מעגל הבושה.',
      },
    },
    mockupNextStep: 'הצעד הבא שלכם מוכן',
    mockupTask: 'תתחילו בדבר קטן אחד',
    mockupCta: 'נסו את Doubly',
  },


  // HabitDemo
  habitDemo: {
    title: 'בנו הרגלים שבאמת נשארים',
    subtitle:
      'אין רצפים שנשברים. אין אשמה. פשוט הקישו כשעשיתם. Doubly עוקבת אחרי הדפוס כדי שתראו התקדמות.',
    todayLabel: 'היום',
    yourHabits: 'ההרגלים שלכם',
    weeksLabel: '12 שבועות',
    lessLabel: 'פחות',
    moreLabel: 'יותר',
    currentStreak: 'רצף נוכחי',
    bestStreak: 'הרצף הכי טוב',
    completion: 'השלמה',
    allDoneMessage: 'כל ההרגלים הושלמו להיום!',
    allDoneDescription: 'תדמיינו את זה כל יום. Doubly עושה את זה קל להמשיך.',
    allDoneCta: 'להשתחרר מהתקיעות עכשיו',
    habits: [
      { id: 'walk', name: 'לצאת להליכה', icon: '🚶' },
      { id: 'read', name: 'לקרוא 10 עמודים', icon: '📖' },
      { id: 'journal', name: 'לכתוב יומן', icon: '✏️' },
      { id: 'tidy', name: 'סידור של 10 דקות', icon: '🧹' },
    ],
  },

  // Success
  success: {
    title: 'החליפו גלילה אינסופית בפיד שמניע אתכם לפעולה.',
    imageAlt: 'מסך פוסט באפליקציית Doubly שמציג משימה שהושלמה, עם ריאקציות ותגובות מהקהילה',
    subtitle: 'החליפו גלילה אינסופית בפיד שמניע אתכם לפעולה.',
    outcomes: [
      'להתחיל משימות בלי הקרב המנטלי',
      'להשלים את מה שתכננתם',
      'לחזור למסלול בלי להתדרדר',
      'לסמוך על עצמכם שבאמת תעשו דברים',
    ],
  },

  // Stakes
  stakes: {
    title: 'כי להישאר תקועים עולה במחיר',
    body: 'כשקשה כל כך להתחיל, דברים מחליקים. דדליינים מתפספסים, הזדמנויות חולפות, ואתם מתחילים להרגיש תקועים במעגל של הימנעות ואשמה. Doubly עוזרת לכם לשבור את המעגל הזה לפני שעוד שבוע נעלם.',
  },

  // Testimonials
  testimonials: {
    title: 'אנשים לא צריכים עוד לחץ של פרודוקטיביות',
    subtitle: 'הם צריכים עזרה כדי להתחיל.',
    items: [
      // Real App Store reviews, quoted verbatim. Only add entries that are actual
      // published reviews AND whose reviewer gave permission (Apple's rule; ask by
      // replying to the review in App Store Connect). The grid auto-adapts up to 3.
      {
        quote:
          'This app is the only one that actually got me to do things. I have very strong ADHD, and it made me concentrate on my tasks one by one to always know what’s coming ahead and make order in my day. Love it so much! Hope to see awesome upgrades soon 🙏🏻',
        name: 'Liorcic',
        label: 'ביקורת ב-App Store',
      },
      {
        quote:
          'This has really helped me manage my workload, I haven’t seen anything like it. The walkthrough and set up is very intuitive, and the features make it worth it!',
        name: 'MinecraftrNinja',
        label: 'ביקורת ב-App Store',
      },
      // Slot 3 — next permitted review goes here.
    ],
  },

  // FAQ
  // ToolsSection
  toolsSection: {
    title: 'כלי ADHD בחינם שאפשר להשתמש בהם כבר עכשיו',
    subtitle: 'בלי הרשמה, בלי חלונות קופצים. פותחים כלי בדפדפן ברגע שנתקעים.',
    hot: 'פופולרי',
    openTool: 'פתחו את הכלי',
    browseAll: 'לכל כלי ה-ADHD החינמיים',
  },

  faq: {
    title: 'שאלות',
    items: [
      {
        q: 'האם Doubly מיועדת רק לאנשים עם אבחון ADHD?',
        a: 'לא. Doubly מיועדת לכל מי שמתקשה להתחיל, מרגיש הצפה או בלגן מנטלי. לא צריך אבחון, רק מוח שלפעמים קופא כשיש יותר מדי לעשות.',
      },
      {
        q: 'במה זה שונה מאפליקציית מטלות רגילה?',
        a: 'אפליקציות מטלות עוזרות לכם לרשום דברים. Doubly עוזרת לכם באמת להתחיל אותם. אנחנו מתמקדים בהפחתת ההתנגדות להתחלה, הפער בין לדעת מה לעשות לבין לעשות את זה, בעזרת פריקת מוח, בהירות של צעד אחד, ומחויבות.',
      },
      {
        q: 'האם זה עוזר ספציפית עם התחלת משימות?',
        a: 'כן. זה המיקוד המרכזי שלנו. פריקת מוח מפנה את הבלגן המנטלי, בהירות הצעד הבא בוחרת פעולה אחת ברת-ביצוע, וכלי המחויבות עוזרים לכם להשלים. כל יכולת נבנתה סביב הצעד הראשון הזה.',
      },
      {
        q: 'מה מיוחד במחויבות כאן?',
        a: 'זה לא נדנוד או רצפים שגורמים לכם להרגיש אשמים. Doubly משתמשת בתזכורות חברתיות עדינות עם אנשים אמיתיים שאכפת להם מההתקדמות שלכם, כך שיש לכם מישהו בפינה שלכם, לא רובוט שמבייש אתכם.',
      },
      {
        q: 'האם זה מחליף אפליקציות מעקב הרגלים או מתכננים?',
        a: 'זה יכול. אבל Doubly לא מנסה להיות אולר שוויצרי. היא ממוקדת לייזר בלעזור לכם לעבור מתקועים למתחילים. אם אתם צריכים תכנון פרויקטים מפורט, שלבו אותה עם הכלים הקיימים שלכם.',
      },
      {
        q: 'האם זה מתאים אם אני נכנס להצפה בקלות?',
        a: 'דווקא אז. Doubly אף פעם לא מראה לכם הכול בבת אחת. אתם רואים צעד הבא אחד, לא קיר של משימות. כל חוויית המשתמש תוכננה למוחות שנעשים עמוסים מהר.',
      },
    ],
  },

  // FinalCTA
  finalCta: {
    title: 'המוח שלכם לא צריך עוד לחץ',
    highlight: 'הוא צריך דרך להתחיל.',
    subtitle: 'למוחות עם ADHD שעייפים מלחשוב יותר מדי, להימנע, ולהישאר מאחור.',
    cta: 'הורדה מ-App Store',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    freeTools: 'כלי ADHD בחינם',
    tools: 'כלים',
    learn: 'מדריכים',
    privacy: 'פרטיות',
    terms: 'תנאים',
    support: 'תמיכה',
    copyright: (year: number) => `© ${year} Doubly. נבנה למוחות עם ADHD.`,
  },

  // StickyBar
  stickyBar: {
    cta: 'להשתחרר מהתקיעות עכשיו',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | אפליקציית ה-ADHD שעוזרת לכם להתחיל',
    description:
      'שחררו את הכאוס, קבלו צעד הבא אחד וברור, והשתמשו במחויבות כדי באמת להשלים. נבנה למוחות עם ADHD שצריכים עזרה להתחיל, לא רק לתכנן.',
    keywords: ['ADHD', 'פרודוקטיביות', 'פריקת מוח', 'ניהול משימות', 'מחויבות', 'מיקוד'],
    ogTitle: 'Doubly | אפליקציית ה-ADHD שעוזרת לכם להתחיל',
    ogDescription:
      'שחררו את הכאוס, קבלו צעד הבא אחד וברור, והשתמשו במחויבות כדי באמת להשלים.',
  },
  // Tool library card copy (title + description per tool).
  // Mirrors content/tools-i18n/${locale}/_index.json cards[] so the homepage grid and
  // the footer speak the visitor's language; kept in sync by scripts/check-tool-cards.mjs.
  toolCards: {
    'task-splitter': {
      title: 'כלי לפירוק משימות',
      description:
        'הקלידו משימה שאתם לא מצליחים להתחיל. ה-AI מפרק אותה לצעדים קטנים ובני-ביצוע עם הערכות זמן. נבנה למוחות עם ADHD.',
    },
    'brain-dump': {
      title: 'כלי פריקת מוח',
      description:
        'שחררו את כל מה שבראש, וה-AI שולף רק את המשימות בנות-הביצוע. בלי הרשמה, שום דבר לא נשמר.',
    },
    'pick-one': {
      title: 'כלי "בחרו משימה אחת"',
      description:
        'הדביקו רשימת מטלות מבולגנת, קבלו דבר אחד להתחיל ממנו. הכי קטן, הכי מפחיד, או אקראי. נבנה לרגע שבו עשר משימות נקראות כמו דבר אחד ענק שאי אפשר להתחיל.',
    },
    'eisenhower-matrix': {
      title: 'מטריצת אייזנהאואר (גרסת ADHD)',
      description:
        'גררו משימות לרביעים כמו "משעמם אבל חשוב" במקום תוויות מספר לימוד. המטריצה שסוף סוף מתאימה למוח עם ADHD. נשמרת מקומית.',
    },
    'pomodoro': {
      title: 'טיימר פומודורו ל-ADHD',
      description:
        '25 דקות עבודה, 5 דקות הפסקה - שיטת המיקוד שסוף סוף מתאימה למוח עם ADHD. חינמי, בלי הרשמה, עובד גם אופליין.',
    },
    'visual-timer': {
      title: 'טיימר ויזואלי / שעון לעיוורון זמן',
      description:
        'פרוסת עוגה שמתכווצת, כדי שתראו את הזמן עובר במקום לקרוא ספרות. משמש גם כשעון לעיוורון זמן למבוגרים עם ADHD.',
    },
    'brown-noise': {
      title: 'מחולל צלילי רקע',
      description:
        'מחולל צלילי רקע חינמי בדפדפן. רעש חום, ורוד ולבן. צליל רקע יציב שמשקיט מוח עם ADHD שרץ במלוא הקצב. כולל טיימר שינה, עובד אופליין.',
    },
    'body-doubling-room': {
      title: 'חדר עבודה משותפת (body doubling)',
      description:
        'חדר מיקוד חינמי לשני אנשים. שתפו קישור, עבדו זה לצד זה בווידאו ישיר, והריצו טיימר משותף. בלי הרשמה, בלי התקנה.',
    },
    'hyperfocus-timer': {
      title: 'טיימר לקטיעת היפרפוקוס',
      description:
        'צ\'ק-אין קולי חוזר כל X דקות ועצירה קשיחה אופציונלית, כדי שהיפרפוקוס לא יבלע לכם את כל אחר הצהריים.',
    },
  },

  // Free ADHD tool widgets (timers, splitter, brain dump, matrix, noise, hyperfocus).
  toolWidgets: {
    taskSplitter: {
      inputLabel: 'מה המשימה שאתם לא מצליחים להתחיל?',
      inputPlaceholder: 'למשל: להגיש דוח הוצאות',
      submit: 'פרקו את זה',
      submitting: 'מפרק את זה…',
      privacyNote: 'פרטי. שום דבר לא נשמר בשרת שלנו.',
      charactersLeft: (count: number) => (count === 1 ? 'נשאר תו אחד' : `נשארו ${count} תווים`),
      presetsIntro: 'או נסו אחת מאלה:',
      presets: {
        cleanKitchen: 'לנקות את המטבח',
        doLaundry: 'לעשות כביסה',
        replyInbox: 'לענות למיילים',
        planWeekendTrip: 'לתכנן טיול סוף שבוע',
        fileTaxes: 'להגיש דוח שנתי',
        cleanBathroom: 'לנקות את חדר האמבטיה',
      },
      loading: 'מפרק את זה לצעדים…',
      errorRateLimit: 'אתם מהירים מדי. חכו רגע ונסו שוב.',
      errorGeneric: 'לא הצלחנו לפרק את זה כרגע. נסו שוב בעוד כמה שניות.',
      tryAgain: 'נסו שוב',
      taskLabel: 'משימה',
      urgencyLabels: { low: 'דחיפות נמוכה', medium: 'דחיפות בינונית', high: 'דחיפות גבוהה' },
      stepsDone: (done: number, total: number) => `${done}/${total} צעדים הושלמו`,
      minTotal: (min: number) => `~${min} דקות בסך הכול`,
      allDoneMessage: 'סיימתם. זה לא היה כל כך נורא, נכון?',
      emptyState:
        'לא מצאנו צעדי משנה ברורים לזה. נסו לנסח את זה כפעולה, למשל "לכתוב את תוכנית הפרויקט" או "לנקות את המחסן".',
    },
    brainDump: {
      label: 'שחררו את כל מה שבראש. לא צריך שיהיה מסודר.',
      placeholder:
        'אני כל הזמן שוכח להתקשר לרופא השיניים והמטבח בלגן.\nאני מוצף מהפרויקט בעבודה. צריך לקנות מצרכים\nלארוחת ערב היום ולענות למייל של שרה מהשבוע שעבר.',
      privacy: 'פרטי. שום דבר לא נשמר בשרת שלנו.',
      charactersLeft: (remaining: number) =>
        remaining === 1 ? 'נשאר תו אחד.' : `נשארו ${remaining} תווים.`,
      clear: 'ניקוי',
      submit: 'שלפו את המשימות',
      submitting: 'שולף משימות…',
      loading: 'קורא את מה שכתבתם ושולף את מה שאפשר לעשות…',
      errorRateLimited: 'אתם מהירים מדי. חכו רגע ונסו שוב.',
      errorGeneric: 'לא הצלחנו לחלץ משימות כרגע. נסו שוב בעוד כמה שניות.',
      tryAgain: 'נסו שוב',
      empty:
        'לא מצאנו שם משהו שנראה כמו משימה קונקרטית. זה יכול להיות סימן טוב. אם רק הייתם צריכים לפרוק, גם זה נחשב. אם התכוונתם לרשום דברים לעשות, נסו להיות קצת יותר ספציפיים ("לשלוח מייל לשרה" במקום "עניינים עם שרה").',
      resultsTitle: 'משימות בנות-ביצוע',
      doneCount: (done: number, total: number) => `${done}/${total} הושלמו`,
      footer: 'בחרו אחת. רק אחת. עשו אותה עכשיו, ואז חזרו לבאה.',
    },
    pickOne: {
      inputLabel: 'הדביקו את הרשימה. שורה לכל פריט, או סתם מבולגן עם פסיקים. לא משנה.',
      inputPlaceholder:
        'לענות לאמא\nלקבוע תור לרופא שיניים\nלהגיש דוח הוצאות\nלסיים את המצגת\nלהשקות את הצמחים',
      itemsDetected: (count: number) =>
        count === 1 ? 'זוהה פריט אחד' : `זוהו ${count} פריטים`,
      itemsDetectedWithLeft: (count: number, left: number) =>
        `${count === 1 ? 'זוהה פריט אחד' : `זוהו ${count} פריטים`}, ${
          left === 1 ? 'נשאר אחד' : `נשארו ${left}`
        }`,
      clearEverything: 'נקו הכול',
      modeLegend: 'איך לבחור?',
      modes: {
        smallest: {
          label: 'הכי קטן',
          reason: 'הפריט הקצר ביותר ברשימה. תתחילו בקטן, תצברו מומנטום.',
        },
        scariest: {
          label: 'הכי מפחיד',
          reason: 'זה שאתם מעדיפים לא להסתכל עליו. לעשות אותו ראשון משחרר את כל היום.',
          // מוצג כשאף פריט ברשימה לא הדליק מילת חשש. דירוג לפי אורך היה שקר,
          // אז אנחנו אומרים מה באמת עשינו.
          noSignalReason: 'כלום פה לא נשמע מפחיד, וגם זו בשורה טובה. בחרנו אחד באקראי.',
        },
        random: {
          label: 'פשוט תבחרו אחד',
          reason: 'בלי התלבטות. הרשימה בחרה בעצמה. פשוט תתחילו.',
        },
      },
      // מילות החשש של מצב "הכי מפחיד". מותאמות כתת-מחרוזת מול הפריט שהוקלד,
      // ולכן אלה הדברים שישראלים באמת דוחים, בשמות שהם באמת כותבים בהם:
      // הבירוקרטיה הישראלית (מס הכנסה, ביטוח לאומי, ארנונה, ועד הבית, טסט),
      // והשיחה שאף אחד לא רוצה לנהל. עברית עשירה בתחיליות (ל־/ה־/ב־), אז
      // הגזעים נבחרו כך שיתפסו שורת מטלות אמיתית ("לקבוע תור לרופא שיניים")
      // בלי ליפול על מילים תמימות ("בוס" היה נתפס בתוך "אוטובוס", ולכן "הבוס").
      scaryWords: [
        'מס הכנסה',
        'ביטוח לאומי',
        'מע"מ',
        'מיסים',
        'ארנונה',
        'משכנתא',
        'ביטוח',
        'עורך דין',
        'עו"ד',
        'רואה חשבון',
        'בנק',
        'לשלם',
        'חשמל',
        'קנס',
        'דוח',
        'טופס',
        'קופת חולים',
        'רופא שיניים',
        'רופא',
        'לקבוע תור',
        'בדיקות דם',
        'משרד הפנים',
        'דרכון',
        'טסט',
        'ועד בית',
        'ועד הבית',
        'לענות',
        'להתקשר',
        'להתנצל',
        'לסרב',
        'הבוס',
        'ויכוח',
        'שיחה קשה',
        'לבטל',
        'תלונה',
        'שכחתי',
        'כבר חודשים',
        'דדליין',
      ],
      pickCta: 'בחרו בשבילי',
      pickAnotherCta: 'בחרו אחר',
      emptyHint: 'הוסיפו לפחות פריט אחד, ואז הקישו על בחירה.',
      readyHint: 'מוכן. הקישו על "בחרו בשבילי" בכל פעם שאתם לא מצליחים להחליט.',
      allDoneTitle: 'הרשימה טופלה.',
      allDoneBody:
        'כל פריט הושלם או דולג. אפשר לנקות את הרשימה, או לאפס כדי להחזיר לבחירה את מה שדילגתם עליו.',
      bringSkippedBack: 'החזירו את מה שדולג',
      startFreshList: 'התחילו רשימה חדשה',
      pickedEyebrow: 'תתחילו מזה',
      didIt: 'עשיתי',
      notThisOne: 'לא את זה',
      pickAgain: 'בחרו שוב',
      progress: (done: number, skipped: number, left: number) =>
        `${done} הושלמו, ${skipped} דולגו, ${left} נשארו`,
    },
    eisenhower: {
      inputLabel: 'הוספת משימה',
      inputPlaceholder: 'הוסיפו משימה ולחצו אנטר (או הדביקו כמה, שורה לכל אחת)',
      addButton: 'הוספה',
      totals: (total: number, unsorted: number) =>
        `${total === 1 ? 'משימה אחת' : `${total} משימות`} בסך הכול, ${unsorted} לא ממוינות`,
      clearAll: 'נקו הכול',
      unsortedHeading: (count: number) => `לא ממוינות (${count})`,
      unsortedListLabel: 'משימות לא ממוינות',
      removeTask: (text: string) => `הסרת ${text}`,
      placeHint: 'עכשיו הקישו על רביע כדי לשבץ אותה.',
      placeHintDesktop: 'או גררו ושחררו במחשב.',
      quadrantRegionLabel: (label: string) => `רביע ${label}`,
      quadrantCountLabel: (count: number, label: string) =>
        `${count === 1 ? 'משימה אחת' : `${count} משימות`} ברביע ${label}`,
      dropHere: 'שחררו כאן',
      sendBackToUnsorted: 'החזירו ללא ממוינות',
      moveBackToUnsorted: (text: string) => `החזרת ${text} ללא ממוינות`,
      empty: 'ריק',
      emptyState:
        'הוסיפו משימה למעלה כדי להתחיל. הכול נשמר בדפדפן שלכם, שום דבר לא בשרת שלנו.',
      hintLabel: 'טיפ של Doubly:',
      hintBody:
        'הערימה של "משעמם אבל חשוב" היא זו שרוב האנשים מדלגים עליה, ורוב האנשים מתחרטים על זה. אם אתם עושים היום רק דבר אחד, קחו אותו משם.',
      quadrants: {
        fire: {
          label: 'בוער',
          sub: 'לעשות היום, לא מחר.',
          textbook: 'חשוב + דחוף',
        },
        boring: {
          label: 'משעמם אבל חשוב',
          sub: 'כאן קורים ההישגים האמיתיים. קבעו להם זמן, אל תדלגו עליהם.',
          textbook: 'חשוב + לא דחוף',
        },
        noisy: {
          label: 'רועש אבל אפשר לדלג',
          sub: 'רועש, אבל לא הבעיה שלכם. האצילו, דחו, התעלמו.',
          textbook: 'דחוף + לא חשוב',
        },
        drop: {
          label: 'תוותרו על אלה',
          sub: 'זה מותר. לא חייבים לסיים את כל הרשימה.',
          textbook: 'לא חשוב + לא דחוף',
        },
      },
    },
    pomodoro: {
      timerLabel: 'טיימר פומודורו',
      modeTablistLabel: 'מצב הטיימר',
      modes: {
        work: 'מיקוד',
        'short-break': 'הפסקה קצרה',
        'long-break': 'הפסקה ארוכה',
      },
      dialLabel: (mode: string, time: string) => `טיימר ${mode}. נותרו ${time}.`,
      sessionsToday: (count: number) => `סבבים שהושלמו היום: ${count}`,
      soundToggle: 'צליל בסוף הסבב',
      customizeDurations: 'התאמת משכי הזמן',
      hideSettings: 'הסתרת ההגדרות',
      focusMinutes: 'מיקוד (דקות)',
      shortBreakMinutes: 'הפסקה קצרה (דקות)',
      longBreakMinutes: 'הפסקה ארוכה (דקות)',
      documentTitle: (time: string, mode: string) => `${time} | ${mode} | Doubly`,
    },
    visualTimer: {
      ariaLabel: 'טיימר ספירה לאחור ויזואלי',
      dialAriaLabel: (remaining: string) => `חוגת טיימר ויזואלי. נותרו ${remaining}.`,
      seconds: (s: number) => (s === 1 ? 'שנייה אחת' : `${s} שניות`),
      minutes: (m: number) => (m === 1 ? 'דקה אחת' : `${m} דקות`),
      minutesAndSeconds: (m: number, s: number) =>
        `${m === 1 ? 'דקה אחת' : `${m} דקות`} ${s === 1 ? 'ושנייה אחת' : `ו-${s} שניות`}`,
      documentTitle: (time: string) => `${time} | Doubly`,
      countingDown: (minutes: number) =>
        minutes === 1 ? 'סופר לאחור מדקה אחת' : `סופר לאחור מ-${minutes} דקות`,
      setFor: (minutes: number) =>
        minutes === 1 ? 'מכוון לדקה אחת' : `מכוון ל-${minutes} דקות`,
      paused: 'מושהה',
      timeIsUp: 'הזמן נגמר',
      presetsLabel: 'משכי זמן מוכנים',
      presetMinutes: (minutes: number) => (minutes === 1 ? 'דקה' : `${minutes} דקות`),
      custom: 'אחר',
      minutesLabel: 'דקות',
      set: 'קבעו',
      soundWhenDone: 'צליל כשהזמן נגמר',
    },
    brownNoise: {
      play: (sound: string) => `הפעלת רעש ${sound}`,
      pause: (sound: string) => `השהיית רעש ${sound}`,
      documentTitle: (sound: string) => `▶ רעש ${sound} · Doubly`,
      chooseSound: 'בחרו צליל רקע',
      soundGroupLabel: 'צליל רקע',
      volume: 'עוצמה',
      volumePercent: (percent: number) => `${percent}%`,
      sleepTimer: 'טיימר שינה',
      sleepOff: 'כבוי',
      sleepMinutes: (minutes: number) => (minutes === 1 ? 'דקה' : `${minutes} דקות`),
      privacyNote: 'רץ בדפדפן שלכם. שום דבר לא מוקלט ושום דבר לא נשלח החוצה.',
      sounds: {
        brown: {
          name: 'חום',
          description: 'עמוק ורועם. כמו מפל רחוק. זה מטיקטוק.',
        },
        pink: {
          name: 'ורוד',
          description: 'רך יותר מלבן, פחות באסי מחום. מאוזן.',
        },
        white: {
          name: 'לבן',
          description: 'הרחש של טלוויזיה ישנה. בהיר ואחיד.',
        },
      },
    },
    hyperfocus: {
      ariaLabel: 'טיימר לקטיעת היפרפוקוס',

      // Durations. Every phrasing lives here so a language can pick its own
      // plural forms, units and word order.
      minutesShort: (minutes: number) => (minutes === 1 ? 'דקה' : `${minutes} דקות`),
      hoursShort: (hours: number) =>
        hours === 1 ? 'שעה' : hours === 2 ? 'שעתיים' : `${hours} שעות`,
      hoursMinutesShort: (hours: number, minutes: number) =>
        `${hours === 1 ? 'שעה' : hours === 2 ? 'שעתיים' : `${hours} שעות`} ${
          minutes === 1 ? 'ודקה' : `ו-${minutes} דקות`
        }`,
      durationLong: (hours: number, minutes: number) => {
        if (hours === 0 && minutes === 0) return 'פחות מדקה';
        const h = hours === 1 ? 'שעה אחת' : hours === 2 ? 'שעתיים' : `${hours} שעות`;
        const m = minutes === 1 ? 'דקה אחת' : `${minutes} דקות`;
        if (hours > 0 && minutes > 0) return `${h} ${minutes === 1 ? 'ודקה אחת' : `ו-${m}`}`;
        return hours > 0 ? h : m;
      },

      // Session strip. Text wrapped in ** is rendered emphasized.
      stripNoCap: (interval: string) => `צ’ק-אין כל ${interval}, בלי עצירה קשיחה`,
      stripWithCap: (interval: string, cap: string) =>
        `צ’ק-אין כל ${interval}, עצירה קשיחה אחרי ${cap}`,
      summaryNoCap: (interval: string) => `צ’ק-אין כל **${interval}**, בלי עצירה קשיחה.`,
      summaryWithCap: (interval: string, cap: string) =>
        `צ’ק-אין כל **${interval}**, עם עצירה קשיחה אחרי **${cap}**.`,

      // Setup
      intervalHeading: 'צ’ק-אין כל',
      custom: 'אחר',
      minutes: 'דקות',
      set: 'קבעו',
      jitterNote: 'זמני הצ’ק-אין מוזזים בכעשרה אחוזים, כדי שהמוח לא יוכל לפטור אותם מראש.',
      moreOptions: 'עוד אפשרויות',
      hideOptions: 'הסתרת האפשרויות',
      taskLabel: 'על מה אתם עובדים? (לא חובה)',
      taskPlaceholder: 'למשל: דוח שנתי, סקירת עיצוב, התסריט',
      taskHint: 'משמש בצ’ק-אין הקולי, כדי שתשמעו על מה התיישבתם לעבוד.',
      hardStopHeading: 'עצירה קשיחה אחרי',
      hardStopHint:
        'כשמגיעים לתקרה נשמעת התראה חזקה יותר, כדי ששקיעה של שש שעות לא תחמוק לכם מתחת לרדאר.',
      capOff: 'כבוי',
      capHours: (hours: number) =>
        hours === 1 ? 'שעה' : hours === 2 ? 'שעתיים' : `${hours} שעות`,
      noHardStop: 'בלי עצירה קשיחה',
      alertsHeading: 'התראות',
      chime: 'צליל',
      voice: 'קול',
      notify: 'התראה',
      alertsHint:
        'הצליל מתגבר אם מתעלמים מצ’ק-אין. הקול מקריא את השעה ואת הזמן שעבר. ההתראה קופצת כהתראת דפדפן כשהלשונית ברקע.',
      notificationsBlocked: 'ההתראות חסומות בדפדפן הזה. אפשרו אותן בהגדרות האתר כדי להשתמש בזה.',
      notificationsUnsupported: 'הדפדפן שלכם לא תומך בהתראות דפדפן.',
      startSession: 'התחילו סבב',

      // Live session
      statElapsed: 'זמן שעבר',
      statNextCheckIn: 'הצ’ק-אין הבא',
      statCap: 'תקרה',
      statusNow: 'עכשיו',
      statusPaused: 'מושהה',
      statusCapHit: 'הגעתם לתקרה',
      statusOff: 'כבוי',
      workingOn: (task: string) => `עובדים על **${task}**`,
      checkInHeading: 'צ’ק-אין קצר',
      checkInBody: (clock: string, elapsed: string) =>
        `השעה ${clock} ואתם על זה כבר ${elapsed}. אתם עדיין במשימה שהתחלתם, או שהגיע הזמן לעלות לאוויר?`,
      stillGoing: 'ממשיכים',
      takeABreak: 'לוקחים הפסקה',
      stopSession: 'עצירת הסבב',
      capHeading: 'הגעתם לתקרת הסבב',
      capBody: (minutes: number) =>
        `קבעתם עצירה קשיחה אחרי ${minutes === 1 ? 'דקה אחת' : `${minutes} דקות`}. קומו, שתו מים, תאכלו משהו. העבודה תחכה לכם כאן.`,
      pause: 'השהיה',
      resume: 'המשך',
      endSession: 'סיום הסבב',
      checkInLog: 'יומן הצ’ק-אין',
      logContinue: 'המשכתם',
      logBreak: 'לקחתם הפסקה',
      logStop: 'עצרתם',

      // Browser tab title while a check-in is waiting in a background tab.
      tabAlert: '⚠ צ’ק-אין | Doubly',

      // Spoken aloud (SpeechSynthesis) and pushed as OS notifications.
      checkInSpeech: (clock: string, elapsed: string, task: string) =>
        task
          ? `רגע של בדיקה. השעה ${clock}. אתם עובדים על ${task} כבר ${elapsed}.`
          : `רגע של בדיקה. השעה ${clock}. אתם עובדים כבר ${elapsed}.`,
      capSpeech: (clock: string, elapsed: string) =>
        `הגעתם לתקרת הסבב. השעה ${clock}. אתם על זה כבר ${elapsed}. הגיע הזמן לעצור.`,
      notificationCheckInTitle: 'צ’ק-אין היפרפוקוס',
      notificationCheckInBody: (clock: string, elapsed: string) =>
        `השעה ${clock}. אתם על זה כבר ${elapsed}.`,
      notificationCapTitle: 'הגעתם לתקרת ההיפרפוקוס',
      notificationCapBody: (clock: string, elapsed: string) =>
        `השעה ${clock}. אתם על זה כבר ${elapsed}. הגיע הזמן לעצור.`,
    },
    shared: {
      start: 'התחילו',
      pause: 'השהיה',
      resume: 'המשך',
      done: 'סיום',
      reset: 'איפוס',
      skip: 'דילוג',
      skipAria: 'דילוג לסבב הבא',
      startSession: 'התחילו סבב מיקוד',
      creatingRoom: 'יוצר חדר...',
    },
    chrome: {
      tryInApp: 'נסו את זה באפליקציה',
      appStoreAria: (label: string) => `${label} ב-App Store`,
      breadcrumbAria: 'שביל ניווט',
    },
  },

  // חדר העבודה המשותפת החי ב-/r/[id].
  //
  // בניגוד לכל שאר הקטעים, השפה כאן לא נקבעת לפי הכתובת: /r/[id] הוא קישור
  // ששני אנשים חולקים, וכל אחד מהם רואה את החדר בשפה שלו. אסור לנסח כאן משפט
  // שמניח ששניהם קוראים אותה שפה, ואסור להרכיב משפט ממחרוזות שהצד השני רואה.
  room: {
    join: {
      titleFirst: 'פתחו סבב מיקוד',
      titleJoin: 'הצטרפו לסבב המיקוד',
      subtitleFirst: 'בחרו שם ואורך סבב. את קישור ההזמנה אפשר לשתף אחרי הכניסה.',
      subtitleJoin: 'בחרו שם והצטרפו. הטיימר כבר כוון בחדר.',
      nameLabel: 'השם שלכם',
      // שם פרטי קצר ונפוץ בשפה הזאת. זה מציין מקום, לא מותג.
      namePlaceholder: 'נועה',
      avatarLabel: 'בחרו אווטאר',
      avatarChooseAria: (emoji: string) => `בחירת אווטאר ${emoji}`,
      durationLabel: 'אורך הסבב',
      minutes: (n: number) => `${n} דק׳`,
      permissionNote:
        'במסך הבא נבקש גישה למצלמה ולמיקרופון. שניהם לא חובה. אם תדלגו, תיכנסו עם משבצת רפאים, ועדיין יראו בחדר שאתם שם.',
      createCta: 'פתחו חדר',
      joinCta: 'הצטרפו לחדר',
    },
    header: {
      eyebrow: 'חדר עבודה משותפת',
      withPeer: (name: string) => `אתם ו${name}`,
      waiting: 'ממתינים שמישהו יצטרף',
      copyInvite: 'העתקת קישור הזמנה',
      linkCopied: 'הקישור הועתק',
    },
    full: {
      title: 'החדר מלא',
      body: 'בחדר עבודה משותפת יש מקום לשניים. החדשות הטובות: לפתוח חדר חדש זה קליק אחד.',
      cta: 'פתחו חדר חדש',
    },
    phases: {
      waiting: {
        eyebrow: 'שלב 0 מתוך 3',
        title: 'שתפו את הקישור',
        body: 'שלחו את כתובת הדף לאדם אחד. הסבב מתחיל ברגע שמצטרפים אליכם.',
      },
      intro: {
        eyebrow: 'שלב 1 מתוך 3 · היכרות',
        title: 'הגידו שלום וספרו מה אתם עומדים לעשות',
        titleWithPeer: (name: string) => `הגידו שלום ל${name}`,
        body: 'קחו 60 שניות. מצלמה דולקת, משפט אחד לכל אחד. להגיד את המטרה בקול זה מה שמקבע אותה.',
        cta: 'התחילו מיקוד',
      },
      focus: {
        eyebrow: 'שלב 2 מתוך 3 · מיקוד',
        title: 'ראש למטה. אתם עובדים ביחד, בשקט.',
        body: 'מיקרופון פתוח או סגור, שתי האפשרויות בסדר. עצם זה שיש שם עוד מישהו זה כל העניין.',
        cta: 'סיימו מיקוד מוקדם',
      },
      wrapUp: {
        eyebrow: 'שלב 3 מתוך 3 · סיכום',
        title: 'שתפו הישג אחד ודבר אחד שתקע אתכם',
        body: 'סיכום קצר בקול מקבע את מה שהרגע עשיתם, ומקל על ההתחלה בפעם הבאה.',
        cta: 'סיימו את הסבב',
      },
      done: {
        eyebrow: 'הסבב הושלם',
        title: 'כל הכבוד. הגעתם.',
        body: 'וזה נחשב. תישארו לסבב נוסף, או סגרו את הלשונית ולכו לעשות משהו טוב לעצמכם.',
        runAnother: 'עוד סבב',
      },
    },
    tiles: {
      you: (name: string) => `${name} (אתם)`,
      peerFallbackName: 'ממתינים',
      waitingForPartner: 'ממתינים שמישהו יצטרף...',
      micMuted: 'המיקרופון מושתק',
      goalPlaceholderIntro: 'מה אני עושה בסבב הזה...',
      goalPlaceholderFocus: 'מה אני עושה עכשיו',
      reflectionPlaceholder: 'הישג אחד או תקלה אחת...',
      peerNoGoal: 'עדיין בלי מטרה',
      peerNoReflection: 'ממתינים לסיכום',
      empty: '—',
    },
    controls: {
      muteMic: 'השתקת מיקרופון',
      unmuteMic: 'ביטול השתקה',
      micUnavailable: 'אין מיקרופון',
      muteTitle: 'השתקה',
      unmuteTitle: 'ביטול השתקה',
      micBlockedTitle: 'המיקרופון חסום או לא זמין',
      camOff: 'כיבוי מצלמה',
      camOn: 'הפעלת מצלמה',
      camUnavailable: 'אין מצלמה',
      stopVideoTitle: 'עצירת וידאו',
      startVideoTitle: 'הפעלת וידאו',
      camBlockedTitle: 'המצלמה חסומה או לא זמינה',
      startTimer: 'הפעלת טיימר',
      pauseTimer: 'השהיית טיימר',
      leave: 'יציאה',
      retry: 'ניסיון חוזר',
    },
    reactions: {
      groupAria: 'שליחת תגובה',
      sendAria: (emoji: string) => `שליחת תגובת ${emoji}`,
    },
    status: {
      peerLeft: 'מי שהיה איתכם עזב את החדר.',
      shareToUnlock: 'שתפו את קישור ההזמנה כדי להכניס מישהו. הסבב נפתח ברגע שמצטרפים.',
      upNext: (minutes: number) => `הבא בתור: ${minutes} דקות מיקוד`,
      planOnArrival: (minutes: number) =>
        `בתוכנית: ${minutes} דקות מיקוד, ברגע שמצטרפים אליכם`,
      wrapUpBreath: 'קחו נשימה. הטיימר מושהה.',
      timerAria: (remaining: string) => `טיימר, נותרו ${remaining}`,
    },
    errors: {
      p2pBlocked: 'לא מצליחים להתחבר. ייתכן שהרשת שלכם חוסמת חיבורים ישירים. נסו רשת אחרת.',
      mediaUnavailable: 'המצלמה והמיקרופון לא זמינים.',
    },
  },
};

export default he;
