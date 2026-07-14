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

};

export default ko;
