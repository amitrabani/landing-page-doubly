const ko = {
  // Shared
  common: {
    tryInDoubly: 'Doubly로 해보기',
    changeLanguage: '언어 변경',
    socialProof: (count: number) => `ADHD를 가진 ${count.toLocaleString('ko-KR')}명과 함께하세요`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    tools: '도구',
    howItWorks: '작동 방식',
    features: '기능',
    testimonials: '후기',
    faq: 'FAQ',
    cta: 'Doubly 시작하기',
    toggleMenu: '메뉴 열기',
  },

  // Hero
  hero: {
    badge: 'ADHD 뇌를 위해 만들었어요',
    titlePrefix: '머릿속에 ',
    titleHighlight: '탭 47개가 열려 있을 때',
    subtitle: '1분도 안 돼서 그 혼란을 딱 하나의 명확한 다음 단계로 바꿔드려요.',
    cta: 'App Store에서 다운로드',
    secondaryCta: '작업이 쪼개지는 걸 보세요 ↓',
    android: {
      prompt: '안드로이드 쓰세요?',
      placeholder: 'you@email.com',
      submit: '알림 받기',
      success: '신청됐어요. Doubly가 안드로이드에 출시되면 이메일로 알려드릴게요.',
      invalid: '올바른 이메일을 입력해 주세요.',
      error: '문제가 생겼어요. 다시 시도해 주세요.',
    },
    floatingCards: {
      brainDump: '브레인 덤프',
      habits: '습관',
      accountability: '함께하기',
    },
    phone: {
      screenAlt: 'Doubly 앱이 매일의 연속 기록과 진행 현황 그리드로 습관을 보여주는 화면',
    },
  },

  // Problem
  problem: {
    title: 'ADHD는 단순히 정리를 못하는 게 아니에요',
    titleHighlight: '정리를 못하는',
    subtitle:
      '내 의도대로 움직여 주지 않는 뇌와 매일 벌이는 싸움이에요.',
    cards: [
      {
        type: 'External',
        title: '할 일도 너무 많고, 생각도 너무 많아요.',
        body: '어디서 시작해야 할지 모르겠어요.',
      },
      {
        type: 'Internal',
        title: '뭘 해야 하는지 알면서도 시작을 못 해요.',
        body: '게을러서가 아니에요. 시작 자체가 힘든 거예요.',
      },
      {
        type: 'Philosophical',
        title: '시작하는 게 이렇게까지 힘들면 안 되잖아요.',
        body: '당신의 뇌는 다르게 작동해요. 도구도 그래야 하고요.',
      },
      {
        type: 'Stakes',
        title: '그리고 이건 시간보다 더 많은 걸 앗아가요.',
        body: '할 일은 쌓이고, 자꾸 뒤처지고, 스스로에 대한 믿음까지 잃기 시작해요.',
      },
    ],
  },

  // VisualProblem
  visualProblem: {
    cards: [
      { image: '/problem-1.jpg', alt: '할 일도 너무 많고, 생각도 너무 많아요.' },
      { image: '/problem-2.jpg', alt: '뭘 해야 하는지 알면서도 시작을 못 해요.' },
      { image: '/problem-4.jpg', alt: '평범한 일을 시작하는 게 이렇게까지 힘들면 안 되잖아요.' },
      { image: '/problem-3.jpg', alt: '그리고 이건 시간보다 더 많은 걸 앗아가요.' },
    ],
  },

  // Guide
  guide: {
    title: '시작이 어려운 ADHD 뇌를 위해 특별히 만들었어요',
    subtitle:
      '대부분의 생산성 앱은 당신의 뇌가 계획할 준비가 됐다고 가정해요. Doubly는 압도당하고, 막히고, 회피하게 되는 바로 그 순간을 위해 만들었어요. ADHD가 실제로 어떻게 작동하는지에 맞춰서요.',
    proofPoints: [
      'ADHD 특유의 마찰을 위해 만들었어요. 뻔한 생산성 앱이 아니라요',
      '시작을 가로막는 저항을 줄여줘요',
      '압도하지 않으면서 구조를 잡아줘요',
    ],
    mockup: {
      brainDump: '브레인 덤프',
      items: ['치과 예약하기', '장 보기', '상사에게 답장하기', '빨래', '나 왜 이렇게 피곤하지'],
      yourNextStep: '다음 단계',
      nextStepTask: '세탁기에 빨래 넣기',
      nextStepMeta: '약 5분 · 낮은 에너지',
      accountability: '함께하기',
      accountabilityText: '지민이 오후 3시에 확인해요',
    },
  },

  // BrainDumpDemo
  brainDumpDemo: {
    title: '혼란은 쏟아내고, 할 일만 남기세요.',
    titleHighlight: '할 일만 남기세요.',
    replayDemo: '데모 다시 보기',
    subtitle:
      '머릿속이 꽉 찼나요? 20초만 적어보세요. Doubly가 실행할 수 있는 것만 뽑아내고 나머지 잡음은 버려요.',
    dumpText:
      '생산적으로 일하려고 노트북을 여는데, 5초도 안 돼서 뇌가 이래요: 저 메시지에 답장하기, 비타민 주문하기, 싱크대 닦기, 충전기 찾기, 뭐라도 먹기, 그리고 절대 안 잊어버릴 거라던 그 엄청 중요한 일도 기억하기. 근데 그걸 바로 까먹었어요.',
    brainDumpLabel: '브레인 덤프',
    brainDumpPlaceholder: '그냥 다 쏟아내 보세요...',
    extractedTasksLabel: '추출된 할 일',
    listening: '듣고 있어요...',
    tasksFound: (count: number) => `할 일 ${count}개 찾음`,
    filterNote: '실행할 수 없는 생각은 걸러냈어요. 진짜 할 일만 남겼어요.',
    tasks: [
      { text: '💊 비타민 주문', phrase: '비타민 주문하기' },
      { text: '🧽 싱크대 청소', phrase: '싱크대 닦기' },
      { text: '🔌 충전기 찾기', phrase: '충전기 찾기' },
      { text: '🍽️ 뭐라도 먹기', phrase: '뭐라도 먹기' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: '막힌 걸 푸는 방법은 이래요',
    titleHighlight: '막힌 걸 푸는',
    subtitle: '간단한 네 단계. 복잡한 설정도, 배울 것도 없어요.',
    stepLabel: '단계',
    steps: [
      {
        number: '01',
        title: '머릿속을 비우기',
        body: '생각, 할 일, 머릿속 잡동사니를 빠르게 담아내세요. 정리할 필요 없어요. 그냥 다 꺼내놓기만 하면 돼요.',
      },
      {
        number: '02',
        title: '명확한 다음 단계 하나 받기',
        body: 'Doubly는 압도감을 실제로 시작할 수 있는 것으로 바꿔줘요. 열 개의 우선순위가 아니라, 딱 하나요.',
      },
      {
        number: '03',
        title: '멈추지 않고 나아가기',
        body: '함께하기, 타이머, 진행 현황 도구로 의욕이 사라져도 계속 나아가세요.',
      },
      {
        number: '04',
        title: '함께 책임지기',
        body: 'Doubly 피드에서 친구들과 공유하세요. 누군가 나를 응원할 때 진짜 책임감이 생겨요.',
      },
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: '할 일을 입력하고, 쪼개지는 걸 보세요.',
    titleHighlight: '쪼개지는 걸 보세요.',
    subtitle:
      '큰 일은 불가능하게 느껴지죠. Doubly가 2~5분짜리 단계로 쪼개줘서 그냥 시작할 수 있어요.',
    customInputPlaceholder: '아니면 직접 할 일을 입력하세요...',
    splitButton: '쪼개기',
    taskLabel: '할 일',
    aiThinking: 'AI가 쪼개는 중...',
    errorMessage: '지금 AI에 연결할 수 없어요. 위의 예시를 눌러보거나 다시 시도해 주세요.',
    tryAgain: '다시 시도',
    stepsDone: (done: number, total: number) => `${done}/${total}단계 완료`,
    minTotal: (min: number) => `총 약 ${min}분`,
    urgencySuffix: '긴급도',
    urgencyLabels: { low: '긴급도 낮음', medium: '긴급도 보통', high: '긴급도 높음' },
    allDoneMessage: '다 끝났어요. 생각보다 어렵지 않았죠?',
    allDoneDescription:
      'Doubly는 당신이 던지는 모든 할 일을 이렇게 처리해요. 거대한 할 일 목록을 멍하니 바라볼 일은 이제 없어요.',
    allDoneCta: '지금 막힌 것 풀기',
    presets: [
      { label: '주방 청소하기', icon: '🍳' },
      { label: '빨래하기', icon: '🧰' },
      { label: '저녁 요리하기', icon: '🍲' },
      { label: '욕실 청소하기', icon: '🚿' },
      { label: '침실 정리하기', icon: '🛏️' },
      { label: '장 보기', icon: '🛒' },
    ],
    presetResults: {
      '주방 청소하기': {
        title: '🍳 주방 청소하기',
        subtasks: [
          { text: '조리대를 치우고 물건 제자리에 두기', duration: '3분' },
          { text: '더러운 그릇을 식기세척기에 넣기', duration: '5분' },
          { text: '조리대와 가스레인지 닦기', duration: '4분' },
          { text: '싱크대 문질러 닦기', duration: '2분' },
          { text: '바닥 쓸기', duration: '3분' },
          { text: '쓰레기 버리기', duration: '2분' },
        ],
        urgency: 'medium',
      },
      '빨래하기': {
        title: '🧰 빨래하기',
        subtasks: [
          { text: '집 안 곳곳의 빨랫감 모으기', duration: '5분' },
          { text: '흰옷, 색깔옷, 섬세한 옷으로 분류하기', duration: '3분' },
          { text: '첫 번째 빨래를 세탁기에 넣기', duration: '2분' },
          { text: '지난번에 말린 옷을 널거나 개기', duration: '10분' },
          { text: '갠 옷을 서랍/옷장에 정리하기', duration: '5분' },
        ],
        urgency: null,
      },
      '저녁 요리하기': {
        title: '🍲 저녁 요리하기',
        subtasks: [
          { text: '뭘 만들지 정하고 재료 확인하기', duration: '3분' },
          { text: '채소 씻고 손질하기', duration: '8분' },
          { text: '메인 요리 시작하기', duration: '15분' },
          { text: '반찬이나 샐러드 준비하기', duration: '7분' },
          { text: '식탁 차리기', duration: '2분' },
          { text: '접시에 담아 내기', duration: '2분' },
        ],
        urgency: 'low',
      },
      '욕실 청소하기': {
        title: '🚿 욕실 청소하기',
        subtasks: [
          { text: '샤워 부스, 세면대, 변기에 세제 뿌리기', duration: '2분' },
          { text: '변기 안쪽을 문지르고 변기 커버 닦기', duration: '3분' },
          { text: '세면대와 수도꼭지 닦기', duration: '2분' },
          { text: '거울 닦기', duration: '1분' },
          { text: '샤워 부스/욕조 문질러 닦기', duration: '5분' },
          { text: '바닥 걸레질하거나 닦기', duration: '3분' },
          { text: '수건 교체하고 휴지 채우기', duration: '2분' },
        ],
        urgency: 'medium',
      },
      '침실 정리하기': {
        title: '🛏️ 침실 정리하기',
        subtasks: [
          { text: '침대 정돈하고 베개 가지런히 놓기', duration: '3분' },
          { text: '바닥과 의자에 있는 옷 줍기', duration: '4분' },
          { text: '더러운 옷은 빨래통에, 깨끗한 옷은 제자리에', duration: '5분' },
          { text: '협탁 치우고 정리하기', duration: '3분' },
          { text: '표면 먼지 닦기', duration: '3분' },
          { text: '바닥 청소기 돌리거나 쓸기', duration: '4분' },
        ],
        urgency: 'low',
      },
      '장 보기': {
        title: '🛒 장 보기',
        subtasks: [
          { text: '냉장고와 팬트리를 확인해 필요한 것 파악하기', duration: '5분' },
          { text: '코너별로 묶어서 목록 작성하기', duration: '5분' },
          { text: '장바구니 챙기기', duration: '1분' },
          { text: '장 보면서 목록 체크하기', duration: '30분' },
          { text: '장 본 것 꺼내서 정리하기', duration: '10분' },
        ],
        urgency: null,
      },
    },
  },

  // TwoQuestions
  twoQuestions: {
    title: '이거, 익숙한가요?',
    titleHighlight: '익숙한가요?',
    subtitle: '당신은 게으른 게 아니에요. 뇌가 그저 다른 출발점이 필요할 뿐이에요.',
    withoutDoubly: 'Doubly 없이',
    withDoubly: 'Doubly와 함께',
    rows: [
      {
        without: '얼어붙어서 어디부터 시작할지 모르겠어요',
        with: '브레인 덤프 → 명확한 다음 단계 하나가 나타나요',
      },
      {
        without: '대신 자잘하고 엉뚱한 일들을 해요',
        with: 'Doubly가 진짜 중요한 것부터 먼저 보여줘요',
      },
      {
        without: '한꺼번에 다섯 가지 일을 벌여요',
        with: '화면엔 할 일 하나만. 끝내고 나서 다음으로.',
      },
      {
        without: '완벽한 계획을 세우려고 지나치게 고민해요',
        with: '전부 쏟아내면 Doubly가 첫 단계를 골라줘요',
      },
      {
        without: '급해질 때까지 미루다가 결국 패닉에 빠져요',
        with: '패닉이 오기 전에 시작하게 돼요',
      },
      {
        without: '혼자 하다 보면 금방 흐름을 잃어요',
        with: '바디 더블링과 함께하는 동료가 계속 나아가게 해줘요',
      },
    ],
    questionTitle: '그 순간, 가장 필요한 게 뭔가요?',
    options: [
      '브레인 덤프',
      '아주 작은 다음 단계 하나',
      '함께할 사람',
      '타이머 / 집중 자극',
      '뒤처졌을 때 리셋',
    ],
    responseIntro: 'Doubly가 도와주는 게 바로 그 지점이에요.',
    responses: {
      '브레인 덤프': {
        title: '브레인 덤프 → 즉각적인 명료함',
        description:
          '혼란을 그대로 적어보세요. Doubly가 실행할 수 있는 것만 뽑아내고 잡음은 버려요.',
      },
      '아주 작은 다음 단계 하나': {
        title: '다음 단계는 언제나 준비 완료',
        description:
          'Doubly가 큰 일을 쪼개서 다음 작은 한 걸음만 딱 건네줘요. 압도감 없이요.',
      },
      '함께할 사람': {
        title: '함께하는 확인 체크인',
        description:
          '부드러운 알림과 함께하는 사람들이 죄책감 없이 궤도를 유지하게 도와줘요.',
      },
      '타이머 / 집중 자극': {
        title: '집중 모드',
        description:
          '화면엔 할 일 하나, 타이머는 돌아가고, 방해 요소는 사라져요. 오직 당신과 그 일뿐이에요.',
      },
      '뒤처졌을 때 리셋': {
        title: '죄책감 없는 새 출발',
        description:
          '흐름을 놓쳤나요? Doubly가 계획을 다시 짜줘서 자책의 소용돌이 없이 다시 시작할 수 있어요.',
      },
    },
    mockupNextStep: '다음 단계가 준비됐어요',
    mockupTask: '작은 것 하나부터 시작하세요',
    mockupCta: 'Doubly 사용해보기',
  },


  // HabitDemo
  habitDemo: {
    title: '진짜로 몸에 배는 습관을 만드세요',
    subtitle:
      '깨질 연속 기록도, 죄책감도 없어요. 그냥 했을 때 탭만 하면 돼요. Doubly가 패턴을 기록해서 진행 상황을 볼 수 있어요.',
    todayLabel: '오늘',
    yourHabits: '내 습관',
    weeksLabel: '12주',
    lessLabel: '적음',
    moreLabel: '많음',
    currentStreak: '현재 연속',
    bestStreak: '최고 연속',
    completion: '완료율',
    allDoneMessage: '오늘 습관 전부 완료!',
    allDoneDescription: '이걸 매일이라고 상상해 보세요. Doubly가 계속 이어가기 쉽게 만들어줘요.',
    allDoneCta: '지금 막힌 것 풀기',
    habits: [
      { id: 'walk', name: '산책하기', icon: '🚶' },
      { id: 'read', name: '10쪽 읽기', icon: '📖' },
      { id: 'journal', name: '일기 쓰기', icon: '✏️' },
      { id: 'tidy', name: '10분 정리', icon: '🧹' },
    ],
  },

  // Success
  success: {
    title: '끝없는 스크롤 대신, 당신을 움직이게 하는 피드로 바꾸세요.',
    imageAlt: '완료된 할 일과 커뮤니티의 반응과 댓글이 표시된 Doubly 앱 게시물 상세 화면',
    subtitle: '끝없는 스크롤 대신, 당신을 움직이게 하는 피드로 바꾸세요.',
    outcomes: [
      '머릿속 싸움 없이 할 일을 시작해요',
      '계획한 것을 끝까지 해내요',
      '무너지지 않고 다시 궤도에 올라요',
      '내가 실제로 해낼 거라고 스스로를 믿게 돼요',
    ],
  },

  // Stakes
  stakes: {
    title: '막혀 있는 데는 대가가 따르니까요',
    body: '시작이 이렇게 힘들면 자꾸 놓치게 돼요. 마감은 지나가고, 기회는 사라지고, 회피와 죄책감의 굴레에 갇힌 기분이 들죠. Doubly는 또 한 주가 사라지기 전에 그 굴레를 끊도록 도와줘요.',
  },

  // Testimonials
  testimonials: {
    title: '사람들에게 필요한 건 더 많은 생산성 압박이 아니에요',
    subtitle: '시작할 수 있게 도와주는 거예요.',
    items: [
      // Real App Store reviews, quoted verbatim. Only add entries that are actual
      // published reviews AND whose reviewer gave permission (Apple's rule; ask by
      // replying to the review in App Store Connect). The grid auto-adapts up to 3.
      {
        quote:
          'This app is the only one that actually got me to do things. I have very strong ADHD, and it made me concentrate on my tasks one by one to always know what’s coming ahead and make order in my day. Love it so much! Hope to see awesome upgrades soon 🙏🏻',
        name: 'Liorcic',
        label: 'App Store 리뷰',
      },
      {
        quote:
          'This has really helped me manage my workload, I haven’t seen anything like it. The walkthrough and set up is very intuitive, and the features make it worth it!',
        name: 'MinecraftrNinja',
        label: 'App Store 리뷰',
      },
      // Slot 3 — next permitted review goes here.
    ],
  },

  // FAQ
  // ToolsSection
  toolsSection: {
    title: '지금 바로 쓸 수 있는 무료 ADHD 도구',
    subtitle: '가입도 팝업도 없어요. 막히는 순간 브라우저에서 바로 열어보세요.',
    hot: '인기',
    openTool: '도구 열기',
    browseAll: '무료 ADHD 도구 모두 보기',
  },

  faq: {
    title: '자주 묻는 질문',
    items: [
      {
        q: 'Doubly는 ADHD 진단을 받은 사람만을 위한 건가요?',
        a: '아니에요. Doubly는 시작, 압도감, 머릿속 잡동사니로 힘들어하는 누구나를 위한 앱이에요. 진단은 필요 없어요. 할 일이 너무 많을 때 가끔 얼어붙는 뇌만 있으면 돼요.',
      },
      {
        q: '보통의 할 일 앱과는 뭐가 다른가요?',
        a: '할 일 앱은 목록을 만들도록 도와줘요. Doubly는 그걸 실제로 시작하도록 도와줘요. 저희는 브레인 덤프, 한 단계의 명료함, 함께하기로 시작 저항, 즉 무엇을 할지 아는 것과 실제로 하는 것 사이의 간극을 줄이는 데 집중해요.',
      },
      {
        q: '특히 할 일을 시작하는 데 도움이 되나요?',
        a: '네. 그게 저희의 핵심이에요. 브레인 덤프는 머릿속 잡동사니를 비우고, 다음 단계의 명료함은 실행 가능한 행동 하나를 골라주고, 함께하기 도구는 끝까지 해내도록 도와줘요. 모든 기능이 그 첫걸음을 중심으로 만들어졌어요.',
      },
      {
        q: '여기서의 함께하기는 뭐가 다른가요?',
        a: '잔소리나 죄책감을 주는 연속 기록이 아니에요. Doubly는 당신의 진행을 진심으로 응원하는 실제 사람들과 부드러운 확인 체크인을 나눠요. 당신을 다그치는 로봇이 아니라, 당신 편이 되어줄 누군가가 생기는 거예요.',
      },
      {
        q: '습관 트래커나 플래너를 대체하나요?',
        a: '그럴 수도 있어요. 하지만 Doubly는 만능 도구가 되려는 게 아니에요. 막힌 상태에서 시작한 상태로 옮겨가도록 돕는 데 집중해요. 세밀한 프로젝트 계획이 필요하다면 기존 도구와 함께 쓰세요.',
      },
      {
        q: '쉽게 압도당하는 편인데 괜찮을까요?',
        a: '오히려 그럴 때 딱이에요. Doubly는 절대 모든 걸 한꺼번에 보여주지 않아요. 할 일의 벽이 아니라 다음 단계 하나만 보여줘요. 모든 사용자 경험이 금방 과부하되는 뇌를 위해 설계됐어요.',
      },
    ],
  },

  // FinalCTA
  finalCta: {
    title: '당신의 뇌에 필요한 건 더 많은 압박이 아니에요',
    highlight: '시작할 방법이 필요해요.',
    subtitle: '지나친 고민, 회피, 뒤처짐에 지친 ADHD를 위해.',
    cta: 'App Store에서 다운로드',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    freeTools: '무료 ADHD 도구',
    tools: '도구',
    learn: '알아보기',
    privacy: '개인정보처리방침',
    terms: '이용약관',
    support: '고객지원',
    copyright: (year: number) => `© ${year} Doubly. ADHD 뇌를 위해 만들었어요.`,
  },

  // StickyBar
  stickyBar: {
    cta: '지금 막힌 것 풀기',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | 시작을 돕는 ADHD 앱',
    description:
      '혼란을 브레인 덤프하고, 명확한 다음 단계 하나를 받고, 함께하기로 실제로 끝까지 해내세요. 계획만이 아니라 시작에 도움이 필요한 ADHD를 위해 만들었어요.',
    keywords: ['ADHD', '생산성', '브레인 덤프', '할 일 관리', '함께하기', '집중'],
    ogTitle: 'Doubly | 시작을 돕는 ADHD 앱',
    ogDescription:
      '혼란을 브레인 덤프하고, 명확한 다음 단계 하나를 받고, 함께하기로 실제로 끝까지 해내세요.',
  },
  // Tool library card copy (title + description per tool).
  // Mirrors content/tools-i18n/${locale}/_index.json cards[] so the homepage grid and
  // the footer speak the visitor's language; kept in sync by scripts/check-tool-cards.mjs.
  toolCards: {
    'task-splitter': {
      title: '할 일 쪼개기 도구',
      description:
        '도저히 시작이 안 되는 할 일을 적어보세요. AI가 할 만한 작은 단계로 쪼개고 예상 시간까지 붙여줘요. ADHD 뇌에 맞춰 만들었어요.',
    },
    'brain-dump': {
      title: '브레인 덤프 도구',
      description:
        '머릿속에 있는 걸 다 쏟아내면 AI가 실행할 수 있는 할 일만 뽑아내요. 가입도 필요 없고, 아무것도 저장되지 않아요.',
    },
    'pick-one': {
      title: '하나 고르기 도구',
      description:
        '뒤죽박죽인 할 일 목록을 붙여넣으면 시작할 일 하나를 골라줘요. 가장 작은 것, 가장 겁나는 것, 아니면 무작위로. 할 일 열 개가 거대한 덩어리 하나로 보여서 손도 못 대는 순간을 위해 만들었어요.',
    },
    'eisenhower-matrix': {
      title: '아이젠하워 매트릭스 (ADHD 버전)',
      description:
        '교과서에 나오는 딱딱한 분류 대신 "지루하지만 중요한" 같은 칸에 할 일을 끌어다 놓으세요. 드디어 ADHD 뇌에 맞는 매트릭스예요. 내용은 브라우저에 저장돼요.',
    },
    'pomodoro': {
      title: 'ADHD 포모도로 타이머',
      description:
        '25분 집중, 5분 휴식. 드디어 ADHD 뇌에 맞는 집중법이에요. 무료, 가입 없이, 오프라인에서도 돼요.',
    },
    'visual-timer': {
      title: '시각 타이머 / 시간 감각 시계',
      description:
        '숫자를 읽는 대신, 줄어드는 원형 조각으로 시간이 흘러가는 걸 눈으로 볼 수 있어요. ADHD 성인을 위한 시간 감각 시계로도 쓸 수 있어요.',
    },
    'brown-noise': {
      title: '브라운 노이즈 생성기',
      description:
        '브라우저에서 바로 쓰는 무료 배경 소음 생성기. 브라운 노이즈에 핑크와 화이트까지. 쉴 새 없이 돌아가는 ADHD 뇌를 가라앉히는 일정한 배경 소리예요. 취침 타이머도 있고, 오프라인에서도 돼요.',
    },
    'body-doubling-room': {
      title: '바디 더블링 방',
      description:
        '두 사람이 쓰는 무료 집중 공간. 링크를 공유하고, P2P 영상으로 나란히 앉아 일하고, 타이머를 함께 돌리세요. 가입도 설치도 없어요.',
    },
    'hyperfocus-timer': {
      title: '하이퍼포커스 중단 타이머',
      description:
        '몇 분 간격으로 음성 체크인이 반복되고, 원하면 강제 종료도 걸어둘 수 있어요. ADHD 하이퍼포커스가 오후를 통째로 삼켜버리지 않도록요.',
    },
  },

  toolWidgets: {
    taskSplitter: {
      inputLabel: '시작이 안 되는 할 일이 뭔가요?',
      inputPlaceholder: '예: 경비 정산서 제출하기',
      submit: '쪼개기',
      submitting: '쪼개는 중…',
      privacyNote: '비공개예요. 서버에 아무것도 저장되지 않아요.',
      charactersLeft: (count: number) => `${count}자 남음`,
      presetsIntro: '아니면 이런 것도 해보세요:',
      presets: {
        cleanKitchen: '주방 청소하기',
        doLaundry: '빨래하기',
        replyInbox: '메일함 답장하기',
        planWeekendTrip: '주말 여행 계획하기',
        fileTaxes: '세금 신고하기',
        cleanBathroom: '욕실 청소하기',
      },
      loading: '단계로 쪼개는 중…',
      errorRateLimit: '너무 빨라요. 잠깐 기다렸다가 다시 시도해 주세요.',
      errorGeneric: '지금은 쪼갤 수 없어요. 몇 초 뒤에 다시 시도해 주세요.',
      tryAgain: '다시 시도',
      taskLabel: '할 일',
      urgencyLabels: { low: '긴급도 낮음', medium: '긴급도 보통', high: '긴급도 높음' },
      stepsDone: (done: number, total: number) => `${done}/${total}단계 완료`,
      minTotal: (min: number) => `총 약 ${min}분`,
      allDoneMessage: '다 끝났어요. 생각보다 어렵지 않았죠?',
      emptyState:
        '그건 명확한 단계로 나누기 어려웠어요. “프로젝트 계획서 쓰기”나 “창고 정리하기”처럼 행동으로 바꿔서 다시 적어보세요.',
    },
    brainDump: {
      label: '머릿속에 있는 걸 다 쏟아내세요. 정리하지 않아도 돼요.',
      placeholder:
        '치과 예약을 자꾸 까먹고 주방은 엉망이에요.\n회사 프로젝트 때문에 압도당하는 기분이에요. 오늘 저녁 장도 봐야 하고\n지난주에 온 지민이 메일에도 답장해야 해요.',
      privacy: '비공개예요. 서버에 아무것도 저장되지 않아요.',
      charactersLeft: (remaining: number) => `${remaining}자 남았어요.`,
      clear: '지우기',
      submit: '할 일 뽑아내기',
      submitting: '뽑아내는 중…',
      loading: '적으신 내용을 읽고 실행할 수 있는 것만 뽑아내는 중…',
      errorRateLimited: '너무 빨라요. 잠깐 기다렸다가 다시 시도해 주세요.',
      errorGeneric: '지금은 할 일을 뽑아낼 수 없어요. 몇 초 뒤에 다시 시도해 주세요.',
      tryAgain: '다시 시도',
      empty:
        '구체적인 할 일처럼 보이는 게 없었어요. 좋은 신호일 수도 있어요. 그냥 마음을 털어놓은 거라면 그것도 충분해요. 할 일을 적으려던 거였다면 조금 더 구체적으로 써보세요(“지민이 관련 일” 대신 “지민이에게 메일 보내기”처럼요).',
      resultsTitle: '실행할 수 있는 할 일',
      doneCount: (done: number, total: number) => `${done}/${total} 완료`,
      footer: '하나만 고르세요. 딱 하나요. 지금 하고 나서 다음 걸 하러 오세요.',
    },
    pickOne: {
      inputLabel: '목록을 붙여넣으세요. 한 줄에 하나씩, 아니면 쉼표로 대충 써도 돼요.',
      inputPlaceholder:
        '엄마한테 답장하기\n치과 예약하기\n경비 정산하기\n발표 자료 마무리하기\n화분에 물 주기',
      itemsDetected: (count: number) => `${count}개 인식됨`,
      itemsDetectedWithLeft: (count: number, left: number) =>
        `${count}개 인식됨, ${left}개 남음`,
      clearEverything: '전부 지우기',
      modeLegend: '어떻게 골라줄까요?',
      modes: {
        smallest: {
          label: '가장 작은 것',
          reason: '목록에서 가장 짧은 것. 작게 시작해서 흐름을 만들어요.',
        },
        scariest: {
          label: '가장 겁나는 것',
          reason: '쳐다보기도 싫은 그것. 먼저 해치우면 하루가 편해져요.',
          noSignalReason:
            '무서워 보이는 게 하나도 없네요. 그것도 좋은 소식이에요. 그래서 아무거나 하나 골랐어요.',
        },
        random: {
          label: '그냥 하나',
          reason: '고민은 그만. 목록이 알아서 골랐어요. 그냥 시작하세요.',
        },
      },
      // “가장 겁나는 것” 모드가 찾는 단어들. 소문자로 바꾼 항목에 대해
      // 부분 문자열로 매칭하므로, 조사와 어미가 붙어도 살아남는 짧은 어간을
      // 써야 해요(“치과”가 “치과 예약하기”에, “답장”이 “답장하기”에 걸리도록).
      // 영어 목록을 그대로 번역하면 아무것도 매칭되지 않아요.
      scaryWords: [
        '세금',
        '연말정산',
        '국민연금',
        '보험',
        '월세',
        '관리비',
        '공과금',
        '고지서',
        '연체',
        '대출',
        '주민센터',
        '민원',
        '서류',
        '계약',
        '해지',
        '환불',
        '취소',
        '항의',
        '컴플레인',
        '병원',
        '치과',
        '검진',
        '상사',
        '팀장',
        '면담',
        '사과하',
        '답장',
        '전화',
        '거절',
        '마감',
        '밀린',
        '미루',
        '미뤄',
        '미뤘',
        '까먹',
        '깜빡',
      ],
      pickCta: '하나 골라줘',
      pickAnotherCta: '다른 것 고르기',
      emptyHint: '항목을 하나 이상 추가한 뒤 눌러보세요.',
      readyHint: '준비됐어요. 결정이 안 될 때 “하나 골라줘”를 누르세요.',
      allDoneTitle: '목록 정리 끝.',
      allDoneBody:
        '모든 항목이 완료됐거나 건너뛰어졌어요. 목록을 지우거나, 초기화해서 건너뛴 항목을 다시 불러올 수 있어요.',
      bringSkippedBack: '건너뛴 것 되돌리기',
      startFreshList: '새 목록 시작하기',
      pickedEyebrow: '이것부터 시작하세요',
      didIt: '했어요',
      notThisOne: '이건 말고',
      pickAgain: '다시 고르기',
      progress: (done: number, skipped: number, left: number) =>
        `완료 ${done}, 건너뜀 ${skipped}, 남음 ${left}`,
    },
    eisenhower: {
      inputLabel: '할 일 추가',
      inputPlaceholder: '할 일을 입력하고 엔터 (줄바꿈으로 여러 개 붙여넣어도 돼요)',
      addButton: '추가',
      totals: (total: number, unsorted: number) => `총 ${total}개, 미분류 ${unsorted}개`,
      clearAll: '전부 지우기',
      unsortedHeading: (count: number) => `미분류 (${count})`,
      unsortedListLabel: '미분류 할 일',
      removeTask: (text: string) => `${text} 삭제`,
      placeHint: '이제 칸을 눌러서 넣어보세요.',
      placeHintDesktop: '데스크톱에서는 끌어다 놓아도 돼요.',
      quadrantRegionLabel: (label: string) => `${label} 칸`,
      quadrantCountLabel: (count: number, label: string) => `${label}에 할 일 ${count}개`,
      dropHere: '여기에 놓기',
      sendBackToUnsorted: '미분류로 되돌리기',
      moveBackToUnsorted: (text: string) => `${text} 미분류로 되돌리기`,
      empty: '비어 있음',
      emptyState:
        '위에 할 일을 추가해서 시작하세요. 모든 내용은 브라우저에 저장되고, 서버에는 아무것도 저장되지 않아요.',
      hintLabel: 'Doubly 팁:',
      hintBody:
        '“지루하지만 중요한” 칸은 대부분이 건너뛰고, 건너뛴 걸 가장 후회하는 칸이에요. 오늘 딱 하나만 한다면 거기서 고르세요.',
      quadrants: {
        fire: {
          label: '발등에 불',
          sub: '내일 말고 오늘 하세요.',
          textbook: '중요 + 긴급',
        },
        boring: {
          label: '지루하지만 중요한',
          sub: '진짜 성과가 나오는 곳. 일정을 잡고, 건너뛰지 마세요.',
          textbook: '중요 + 긴급하지 않음',
        },
        noisy: {
          label: '시끄럽지만 넘겨도 되는',
          sub: '요란하지만 당신 문제는 아니에요. 넘기거나, 미루거나, 무시하세요.',
          textbook: '긴급 + 중요하지 않음',
        },
        drop: {
          label: '버려도 되는',
          sub: '그래도 괜찮아요. 목록을 다 끝낼 필요는 없어요.',
          textbook: '중요하지 않음 + 긴급하지 않음',
        },
      },
    },
    pomodoro: {
      timerLabel: '포모도로 타이머',
      modeTablistLabel: '타이머 모드',
      modes: {
        work: '집중',
        'short-break': '짧은 휴식',
        'long-break': '긴 휴식',
      },
      dialLabel: (mode: string, time: string) => `${mode} 타이머. ${time} 남음.`,
      sessionsToday: (count: number) => `오늘 완료한 세션: ${count}개`,
      soundToggle: '세션 끝날 때 소리',
      customizeDurations: '시간 직접 설정',
      hideSettings: '설정 숨기기',
      focusMinutes: '집중 (분)',
      shortBreakMinutes: '짧은 휴식 (분)',
      longBreakMinutes: '긴 휴식 (분)',
      documentTitle: (time: string, mode: string) => `${time} | ${mode} | Doubly`,
    },
    visualTimer: {
      ariaLabel: '시각 카운트다운 타이머',
      dialAriaLabel: (remaining: string) => `시각 타이머 다이얼. ${remaining} 남음.`,
      seconds: (s: number) => `${s}초`,
      minutes: (m: number) => `${m}분`,
      minutesAndSeconds: (m: number, s: number) => `${m}분 ${s}초`,
      documentTitle: (time: string) => `${time} | Doubly`,
      countingDown: (minutes: number) => `${minutes}분부터 카운트다운 중`,
      setFor: (minutes: number) => `${minutes}분으로 설정됨`,
      paused: '일시정지',
      timeIsUp: '시간 끝',
      presetsLabel: '시간 프리셋',
      presetMinutes: (minutes: number) => `${minutes}분`,
      custom: '직접 입력',
      minutesLabel: '분',
      set: '설정',
      soundWhenDone: '시간이 다 되면 소리',
    },
    brownNoise: {
      play: (sound: string) => `${sound} 재생`,
      pause: (sound: string) => `${sound} 일시정지`,
      documentTitle: (sound: string) => `▶ ${sound} · Doubly`,
      chooseSound: '배경 소음 고르기',
      soundGroupLabel: '배경 소음',
      volume: '음량',
      volumePercent: (percent: number) => `${percent}%`,
      sleepTimer: '취침 타이머',
      sleepOff: '끔',
      sleepMinutes: (minutes: number) => `${minutes}분`,
      privacyNote: '브라우저에서 바로 재생돼요. 녹음도, 업로드도 없어요.',
      sounds: {
        brown: {
          name: '브라운',
          description: '깊고 묵직해요. 멀리서 들리는 폭포처럼. 틱톡에서 유명한 그 소리요.',
        },
        pink: {
          name: '핑크',
          description: '화이트보다 부드럽고 브라운보다 가벼워요. 균형 잡힌 소리예요.',
        },
        white: {
          name: '화이트',
          description: '옛날 TV의 지직거리는 소리. 밝고 고르게 퍼져요.',
        },
      },
    },
    hyperfocus: {
      ariaLabel: '하이퍼포커스 중단 타이머',

      // Durations. Every phrasing lives here so a language can pick its own
      // plural forms, units and word order.
      minutesShort: (minutes: number) => `${minutes}분`,
      hoursShort: (hours: number) => `${hours}시간`,
      hoursMinutesShort: (hours: number, minutes: number) => `${hours}시간 ${minutes}분`,
      durationLong: (hours: number, minutes: number) => {
        if (hours === 0 && minutes === 0) return '1분 미만';
        const parts: string[] = [];
        if (hours > 0) parts.push(`${hours}시간`);
        if (minutes > 0) parts.push(`${minutes}분`);
        return parts.join(' ');
      },

      // Session strip. Text wrapped in ** is rendered emphasized.
      stripNoCap: (interval: string) => `${interval}마다 체크인, 강제 종료 없음`,
      stripWithCap: (interval: string, cap: string) =>
        `${interval}마다 체크인, ${cap} 뒤 강제 종료`,
      summaryNoCap: (interval: string) => `**${interval}**마다 체크인하고, 강제 종료는 없어요.`,
      summaryWithCap: (interval: string, cap: string) =>
        `**${interval}**마다 체크인하고, **${cap}** 뒤에 강제로 멈춰요.`,

      // Setup
      intervalHeading: '체크인 간격',
      custom: '직접 입력',
      minutes: '분',
      set: '설정',
      jitterNote: '체크인 시간은 10% 정도 무작위로 흔들려요. 뇌가 미리 무시해버리지 못하도록요.',
      moreOptions: '옵션 더 보기',
      hideOptions: '옵션 숨기기',
      taskLabel: '무슨 일을 하고 있나요? (선택)',
      taskPlaceholder: '예: 세금 신고서, 디자인 리뷰, 대본',
      taskHint: '음성 체크인에서 읽어줘요. 원래 하려던 일이 뭐였는지 다시 떠올릴 수 있게요.',
      hardStopHeading: '강제 종료 시점',
      hardStopHint:
        '설정한 시간에 도달하면 더 큰 알림이 울려요. 여섯 시간짜리 몰입이 몰래 지나가버리지 않도록요.',
      capOff: '끔',
      capHours: (hours: number) => `${hours}시간`,
      noHardStop: '강제 종료 없음',
      alertsHeading: '알림 방식',
      chime: '차임',
      voice: '음성',
      notify: '알림',
      alertsHint:
        '차임은 체크인을 무시하면 점점 커져요. 음성은 현재 시각과 경과 시간을 읽어줘요. 알림은 탭이 백그라운드에 있을 때 브라우저 알림을 띄워요.',
      notificationsBlocked:
        '이 브라우저에서 알림이 차단돼 있어요. 사이트 설정에서 알림을 허용해 주세요.',
      notificationsUnsupported: '이 브라우저는 웹 알림을 지원하지 않아요.',
      startSession: '세션 시작',

      // Live session
      statElapsed: '경과',
      statNextCheckIn: '다음 체크인',
      statCap: '한도',
      statusNow: '지금',
      statusPaused: '일시정지',
      statusCapHit: '한도 도달',
      statusOff: '끔',
      workingOn: (task: string) => `**${task}** 작업 중`,
      checkInHeading: '잠깐 체크인',
      checkInBody: (clock: string, elapsed: string) =>
        `지금 ${clock}이고, ${elapsed} 동안 이걸 하고 있어요. 아직 처음 시작한 그 일을 하고 있나요, 아니면 이제 나올 시간인가요?`,
      stillGoing: '계속할래요',
      takeABreak: '쉴래요',
      stopSession: '세션 끝내기',
      capHeading: '세션 한도에 도달했어요',
      capBody: (minutes: number) =>
        `${minutes}분으로 강제 종료를 설정해 두셨어요. 일어나서 물 마시고 뭐라도 드세요. 일은 도망가지 않아요.`,
      pause: '일시정지',
      resume: '다시 시작',
      endSession: '세션 종료',
      checkInLog: '체크인 기록',
      logContinue: '계속함',
      logBreak: '쉬었음',
      logStop: '중단함',

      // Browser tab title while a check-in is waiting in a background tab.
      tabAlert: '⚠ 체크인 | Doubly',

      // Spoken aloud (SpeechSynthesis) and pushed as OS notifications.
      checkInSpeech: (clock: string, elapsed: string, task: string) =>
        task
          ? `체크인이에요. 지금 ${clock}이에요. ${task} 작업을 ${elapsed} 동안 하고 있어요.`
          : `체크인이에요. 지금 ${clock}이에요. ${elapsed} 동안 집중하고 있어요.`,
      capSpeech: (clock: string, elapsed: string) =>
        `세션 한도에 도달했어요. 지금 ${clock}이에요. ${elapsed} 동안 계속하고 있어요. 이제 멈출 시간이에요.`,
      notificationCheckInTitle: '하이퍼포커스 체크인',
      notificationCheckInBody: (clock: string, elapsed: string) =>
        `지금 ${clock}이에요. ${elapsed} 동안 계속하고 있어요.`,
      notificationCapTitle: '하이퍼포커스 한도 도달',
      notificationCapBody: (clock: string, elapsed: string) =>
        `지금 ${clock}이에요. ${elapsed} 동안 계속하고 있어요. 이제 멈출 시간이에요.`,
    },
    shared: {
      start: '시작',
      pause: '일시정지',
      resume: '다시 시작',
      done: '완료',
      reset: '초기화',
      skip: '건너뛰기',
      skipAria: '다음 세션으로 건너뛰기',
      startSession: '집중 세션 시작하기',
      creatingRoom: '방 만드는 중...',
    },
    chrome: {
      tryInApp: '앱에서 해보기',
      appStoreAria: (label: string) => `App Store에서 ${label} 보기`,
      breadcrumbAria: '탐색 경로',
    },
  },

  // /r/[id]의 실시간 바디 더블링 방.
  //
  // 이 섹션만은 URL이 아니라 각자의 Accept-Language로 언어가 정해져요.
  // 같은 방이 한 사람에게는 한국어로, 다른 사람에게는 독일어로 보일 수 있으니
  // 두 사람이 같은 언어를 읽는다고 가정하는 문장은 쓰지 마세요.
  room: {
    join: {
      titleFirst: '집중 세션 시작하기',
      titleJoin: '집중 세션 참여하기',
      subtitleFirst: '이름과 세션 길이를 정하세요. 들어가면 초대 링크를 공유할 수 있어요.',
      subtitleJoin: '이름을 정하고 들어오세요. 타이머는 먼저 온 사람이 맞춰뒀어요.',
      nameLabel: '이름',
      namePlaceholder: '지민',
      avatarLabel: '아바타 고르기',
      avatarChooseAria: (emoji: string) => `${emoji} 아바타 선택`,
      durationLabel: '세션 길이',
      minutes: (n: number) => `${n}분`,
      permissionNote:
        '다음 화면에서 카메라와 마이크 권한을 물어봐요. 둘 다 선택이에요. 건너뛰어도 고스트 타일로 들어가고, 방에 있는 사람은 당신이 와 있다는 걸 볼 수 있어요.',
      createCta: '방 만들기',
      joinCta: '방 참여하기',
    },
    header: {
      eyebrow: '바디 더블링 방',
      withPeer: (name: string) => `나와 ${name}`,
      waiting: '상대를 기다리는 중',
      copyInvite: '초대 링크 복사',
      linkCopied: '링크 복사됨',
    },
    full: {
      title: '방이 가득 찼어요',
      body: '바디 더블링 방은 두 명까지예요. 다행히 새 방을 만드는 건 클릭 한 번이면 돼요.',
      cta: '새 방 만들기',
    },
    phases: {
      waiting: {
        eyebrow: '0/3단계',
        title: '링크를 공유하세요',
        body: '이 페이지 주소를 한 사람에게 보내세요. 그 사람이 들어오는 순간 세션이 시작돼요.',
      },
      intro: {
        eyebrow: '1/3단계 · 인사',
        title: '손 흔들어 인사하고, 뭘 할 건지 말해요',
        titleWithPeer: (name: string) => `${name}님에게 인사하기`,
        body: '60초면 돼요. 카메라 켜고 각자 한 문장씩. 목표를 소리 내어 말하면 훨씬 잘 지켜져요.',
        cta: '집중 시작',
      },
      focus: {
        eyebrow: '2/3단계 · 집중',
        title: '이제 각자 조용히, 같이 해요.',
        body: '마이크는 켜도 꺼도 괜찮아요. 옆에 누가 있다는 것, 그게 핵심이에요.',
        cta: '집중 일찍 끝내기',
      },
      wrapUp: {
        eyebrow: '3/3단계 · 마무리',
        title: '잘된 것 하나, 걸린 것 하나를 나눠요',
        body: '짧게 소리 내어 돌아보면 방금 한 일이 남고, 다음 세션을 시작하기가 쉬워져요.',
        cta: '세션 끝내기',
      },
      done: {
        eyebrow: '세션 완료',
        title: '수고했어요. 나타난 것만으로 충분해요.',
        body: '그것도 성과예요. 한 번 더 하거나, 탭을 닫고 자신에게 좋은 걸 해주세요.',
        runAnother: '한 번 더 하기',
      },
    },
    tiles: {
      you: (name: string) => `${name} (나)`,
      peerFallbackName: '대기 중',
      waitingForPartner: '상대를 기다리는 중...',
      micMuted: '마이크 꺼짐',
      goalPlaceholderIntro: '이제 뭘 할 건지...',
      goalPlaceholderFocus: '지금 하고 있는 일',
      reflectionPlaceholder: '잘된 것 하나, 걸린 것 하나...',
      peerNoGoal: '아직 목표 없음',
      peerNoReflection: '마무리를 기다리는 중',
      empty: '—',
    },
    controls: {
      muteMic: '마이크 끄기',
      unmuteMic: '마이크 켜기',
      micUnavailable: '마이크 사용 불가',
      muteTitle: '음소거',
      unmuteTitle: '음소거 해제',
      micBlockedTitle: '마이크가 차단됐거나 사용할 수 없어요',
      camOff: '카메라 끄기',
      camOn: '카메라 켜기',
      camUnavailable: '카메라 사용 불가',
      stopVideoTitle: '영상 끄기',
      startVideoTitle: '영상 켜기',
      camBlockedTitle: '카메라가 차단됐거나 사용할 수 없어요',
      startTimer: '타이머 시작',
      pauseTimer: '타이머 일시정지',
      leave: '나가기',
      retry: '다시 시도',
    },
    reactions: {
      groupAria: '리액션 보내기',
      sendAria: (emoji: string) => `${emoji} 리액션 보내기`,
    },
    status: {
      peerLeft: '상대가 방을 나갔어요.',
      shareToUnlock: '초대 링크를 공유해서 한 명을 불러오세요. 그 사람이 오면 세션이 열려요.',
      upNext: (minutes: number) => `다음: ${minutes}분 집중 블록`,
      planOnArrival: (minutes: number) => `상대가 오면 ${minutes}분 집중 블록을 시작해요`,
      wrapUpBreath: '숨 한 번 쉬어요. 타이머는 멈춰 있어요.',
      timerAria: (remaining: string) => `타이머, ${remaining} 남음`,
    },
    errors: {
      p2pBlocked:
        '연결할 수 없어요. 네트워크가 P2P 연결을 막고 있을 수 있어요. 다른 네트워크로 시도해 보세요.',
      mediaUnavailable: '카메라와 마이크를 사용할 수 없어요.',
    },
  },

};

export default ko;
