const tr = {
  // Shared
  common: {
    tryInDoubly: 'Doubly\'de dene',
    changeLanguage: 'Dili değiştir',
    socialProof: (count: number) => `${count.toLocaleString('tr-TR')} ADHD'liye katıl`,
  },

  // Navbar
  navbar: {
    brand: 'Doubly',
    tools: 'Araçlar',
    howItWorks: 'Nasıl çalışır',
    features: 'Özellikler',
    testimonials: 'Yorumlar',
    faq: 'SSS',
    cta: 'Doubly\'yi al',
    toggleMenu: 'Menüyü aç/kapat',
  },

  // Hero
  hero: {
    badge: 'ADHD beyinleri için tasarlandı',
    titlePrefix: 'Beyninde ',
    titleHighlight: '47 sekme açıkken',
    subtitle: 'Kaosu bir dakikadan kısa sürede tek bir net sonraki adıma dönüştür.',
    cta: 'App Store\'dan indir',
    secondaryCta: 'Bir görevi nasıl böldüğünü gör ↓',
    android: {
      prompt: 'Android mı kullanıyorsun?',
      placeholder: 'sen@email.com',
      submit: 'Bana haber ver',
      success: 'Listedesin. Doubly Android\'e geldiğinde sana e-posta atacağız.',
      invalid: 'Lütfen geçerli bir e-posta gir.',
      error: 'Bir şeyler ters gitti. Lütfen tekrar dene.',
    },
    floatingCards: {
      brainDump: 'Beyin Boşaltma',
      habits: 'Alışkanlıklar',
      accountability: 'Hesap Verebilirlik',
    },
    phone: {
      screenAlt: 'Doubly uygulaması günlük serilerin ve ilerleme ızgaralarıyla alışkanlıklarını gösteriyor',
    },
  },

  // Problem
  problem: {
    title: 'ADHD sadece düzensiz olmak değildir',
    titleHighlight: 'düzensiz',
    subtitle:
      'Bu, kendi niyetlerinle iş birliği yapmayan bir beyinle verilen günlük bir savaştır.',
    cards: [
      {
        type: 'External',
        title: 'Çok fazla görev. Çok fazla düşünce.',
        body: 'Başlamak için net bir yer yok.',
      },
      {
        type: 'Internal',
        title: 'Ne yapacağını biliyorsun ama yine de başlayamıyorsun.',
        body: 'Bu tembellik değil. Bu, başlama direnci.',
      },
      {
        type: 'Philosophical',
        title: 'Başlamak bu kadar zor olmamalı.',
        body: 'Senin beynin farklı çalışıyor. Araçların da öyle olmalı.',
      },
      {
        type: 'Stakes',
        title: 'Ve bu sana zamandan fazlasına mal oluyor.',
        body: 'İşler birikiyor. Geride kalıyorsun. Kendine olan güvenini yitirmeye başlıyorsun.',
      },
    ],
  },

  // VisualProblem
  visualProblem: {
    cards: [
      { image: '/problem-1.jpg', alt: 'Çok fazla görev. Çok fazla düşünce.' },
      { image: '/problem-2.jpg', alt: 'Ne yapacağını biliyorsun ama yine de başlayamıyorsun.' },
      { image: '/problem-4.jpg', alt: 'Normal şeylere başlamak bu kadar zor olmamalı.' },
      { image: '/problem-3.jpg', alt: 'Ve bu sana zamandan fazlasına mal oluyor.' },
    ],
  },

  // Guide
  guide: {
    title: 'Başlamakta zorlanan ADHD beyinleri için özel olarak tasarlandı',
    subtitle:
      'Çoğu üretkenlik uygulaması beyninin planlamaya hazır olduğunu varsayar. Doubly, bunaldığın, takıldığın ya da kaçındığın an için tasarlandı — ADHD\'nin gerçekte nasıl işlediğine dayanarak.',
    proofPoints: [
      'Genel üretkenlik için değil, ADHD sürtünmesi için tasarlandı',
      'Başlama direncini azaltmaya yardımcı olur',
      'Seni bunaltmadan yapı sunar',
    ],
    mockup: {
      brainDump: 'Beyin Boşaltma',
      items: ['diş hekimini ara', 'market alışverişi', 'patrona cevap yaz', 'çamaşır', 'neden bu kadar yorgunum'],
      yourNextStep: 'Sonraki adımın',
      nextStepTask: 'Çamaşırları makineye koy',
      nextStepMeta: '~5 dk · düşük enerji',
      accountability: 'Hesap Verebilirlik',
      accountabilityText: 'Sarah 15:00\'te yoklama yapıyor',
    },
  },

  // BrainDumpDemo
  brainDumpDemo: {
    title: 'Kaosu boşalt. Görevleri sakla.',
    titleHighlight: 'Görevleri sakla.',
    replayDemo: 'Demoyu yeniden oynat',
    subtitle:
      'Kafan mı dolu? 20 saniye yaz. Doubly yapılabilir olan şeyleri çıkarır ve gürültüyü çöpe atar.',
    dumpText:
      'Üretken olmak için dizüstü bilgisayarımı açıyorum ve beş saniye içinde beynim şöyle oluyor: şu mesaja cevap ver, vitamin sipariş et, lavaboyu temizle, şarj aletini bul, bir şeyler ye ve ayrıca kesinlikle unutmayacağın o süper önemli işi de hatırla. Ki onu anında unuttum.',
    brainDumpLabel: 'Beyin Boşaltma',
    brainDumpPlaceholder: 'Hepsini dök...',
    extractedTasksLabel: 'Çıkarılan Görevler',
    listening: 'Dinleniyor...',
    tasksFound: (count: number) => `${count} görev bulundu`,
    filterNote: 'Yapılamayacak düşünceler filtrelendi. Yalnızca gerçek görevler tutuldu.',
    tasks: [
      { text: '💊 Vitamin sipariş et', phrase: 'vitamin sipariş et' },
      { text: '🧽 Lavaboyu temizle', phrase: 'lavaboyu temizle' },
      { text: '🔌 Şarj aletini bul', phrase: 'şarj aletini bul' },
      { text: '🍽️ Bir şeyler ye', phrase: 'bir şeyler ye' },
    ],
  },

  // Plan (How it works)
  plan: {
    title: 'İşte takıldığın yerden böyle kurtulursun',
    titleHighlight: 'kurtulursun',
    subtitle: 'Dört basit adım. Karmaşık kurulum yok. Öğrenme eğrisi yok.',
    stepLabel: 'ADIM',
    steps: [
      {
        number: '01',
        title: 'Zihnini boşalt',
        body: 'Düşünceleri, görevleri ve zihinsel karmaşayı hızlıca yakala. Düzenlemeye gerek yok. Sadece dışarı çıkar.',
      },
      {
        number: '02',
        title: 'Tek bir net sonraki adımı al',
        body: 'Doubly, bunalmışlığı gerçekten başlayabileceğin bir şeye dönüştürür. On öncelik değil. Bir tane.',
      },
      {
        number: '03',
        title: 'Hareket halinde kal',
        body: 'Motivasyon azaldığında bile devam etmek için hesap verebilirlik, zamanlayıcılar ve ilerleme araçlarını kullan.',
      },
      {
        number: '04',
        title: 'Hesap verebilir ol',
        body: 'Doubly akışında arkadaşlarınla paylaş. Gerçek hesap verebilirlik, biri sana destek olduğunda ortaya çıkar.',
      },
    ],
  },

  // TaskSplitDemo
  taskSplitDemo: {
    title: 'Bir görev yaz. Bölünüşünü izle.',
    titleHighlight: 'Bölünüşünü',
    subtitle:
      'Büyük görevler imkansız hissettirir. Doubly onları 2-5 dakikalık adımlara böler, böylece sadece başlayabilirsin.',
    customInputPlaceholder: 'Ya da kendi görevini yaz...',
    splitButton: 'Böl',
    taskLabel: 'Görev',
    aiThinking: 'Yapay zeka bunu parçalara ayırıyor...',
    errorMessage: 'Şu an yapay zekaya ulaşılamadı. Yukarıdan hazır bir görev dene ya da tekrar dene.',
    tryAgain: 'Tekrar dene',
    stepsDone: (done: number, total: number) => `${done}/${total} adım tamam`,
    minTotal: (min: number) => `toplam ~${min} dk`,
    urgencySuffix: 'aciliyet',
    urgencyLabels: { low: 'Düşük öncelik', medium: 'Orta öncelik', high: 'Yüksek öncelik' },
    allDoneMessage: 'Hepsi tamam. O kadar da zor değildi, değil mi?',
    allDoneDescription:
      'Doubly bunu ona attığın her görev için yapar. Artık dev bir yapılacaklar listesine bakıp kalmak yok.',
    allDoneCta: 'Hemen harekete geç',
    presets: [
      { label: 'Mutfağı temizle', icon: '🍳' },
      { label: 'Çamaşır yıka', icon: '🧰' },
      { label: 'Akşam yemeği yap', icon: '🍲' },
      { label: 'Banyoyu temizle', icon: '🚿' },
      { label: 'Yatak odasını düzenle', icon: '🛏️' },
      { label: 'Market alışverişi', icon: '🛒' },
    ],
    presetResults: {
      'Mutfağı temizle': {
        title: '🍳 Mutfağı temizle',
        subtasks: [
          { text: 'Tezgahları boşalt ve eşyaları kaldır', duration: '3 dakika' },
          { text: 'Kirli bulaşıkları bulaşık makinesine yerleştir', duration: '5 dakika' },
          { text: 'Tezgahları ve ocağı sil', duration: '4 dakika' },
          { text: 'Lavaboyu ovala', duration: '2 dakika' },
          { text: 'Yerleri süpür', duration: '3 dakika' },
          { text: 'Çöpü çıkar', duration: '2 dakika' },
        ],
        urgency: 'medium',
      },
      'Çamaşır yıka': {
        title: '🧰 Çamaşırları yıka',
        subtasks: [
          { text: 'Evin her yerinden kirli kıyafetleri topla', duration: '5 dakika' },
          { text: 'Beyazlar, renkliler ve narinler olarak ayır', duration: '3 dakika' },
          { text: 'İlk grubu çamaşır makinesine koy', duration: '2 dakika' },
          { text: 'Önceki yıkamadan kuru kıyafetleri as ya da katla', duration: '10 dakika' },
          { text: 'Katlanan kıyafetleri çekmecelere/dolaba yerleştir', duration: '5 dakika' },
        ],
        urgency: null,
      },
      'Akşam yemeği yap': {
        title: '🍲 Akşam yemeği yap',
        subtasks: [
          { text: 'Ne yapacağına karar ver ve malzemeleri kontrol et', duration: '3 dakika' },
          { text: 'Sebzeleri yıka ve hazırla', duration: '8 dakika' },
          { text: 'Ana yemeği pişirmeye başla', duration: '15 dakika' },
          { text: 'Yan yemek ya da salata hazırla', duration: '7 dakika' },
          { text: 'Masayı kur', duration: '2 dakika' },
          { text: 'Tabağa koy ve servis et', duration: '2 dakika' },
        ],
        urgency: 'low',
      },
      'Banyoyu temizle': {
        title: '🚿 Banyoyu temizle',
        subtasks: [
          { text: 'Duşa, lavaboya ve klozete temizleyici sık', duration: '2 dakika' },
          { text: 'Klozeti ovala ve kapağını sil', duration: '3 dakika' },
          { text: 'Lavaboyu ve musluğu temizle', duration: '2 dakika' },
          { text: 'Aynayı sil', duration: '1 dakika' },
          { text: 'Duşu/küveti ovala', duration: '5 dakika' },
          { text: 'Yerleri paspasla ya da sil', duration: '3 dakika' },
          { text: 'Havluları değiştir ve tuvalet kağıdını tazele', duration: '2 dakika' },
        ],
        urgency: 'medium',
      },
      'Yatak odasını düzenle': {
        title: '🛏️ Yatak odasını düzenle',
        subtasks: [
          { text: 'Yatağı topla ve yastıkları düzelt', duration: '3 dakika' },
          { text: 'Yerdeki ve sandalyelerdeki kıyafetleri topla', duration: '4 dakika' },
          { text: 'Kirlileri sepete, temizleri yerine koy', duration: '5 dakika' },
          { text: 'Komodini boşalt ve düzenle', duration: '3 dakika' },
          { text: 'Yüzeylerin tozunu al', duration: '3 dakika' },
          { text: 'Yerleri elektrikli süpürgeyle çek ya da süpür', duration: '4 dakika' },
        ],
        urgency: 'low',
      },
      'Market alışverişi': {
        title: '🛒 Market alışverişi',
        subtasks: [
          { text: 'Buzdolabına ve kilere bakıp neye ihtiyacın olduğunu belirle', duration: '5 dakika' },
          { text: 'Reyonlara göre gruplanmış bir liste yaz', duration: '5 dakika' },
          { text: 'Yeniden kullanılabilir poşetleri al', duration: '1 dakika' },
          { text: 'Alışveriş yap ve ürünleri işaretle', duration: '30 dakika' },
          { text: 'Poşetleri boşalt ve ürünleri yerine koy', duration: '10 dakika' },
        ],
        urgency: null,
      },
    },
  },

  // TwoQuestions
  twoQuestions: {
    title: 'Bu sana tanıdık geliyor mu?',
    titleHighlight: 'tanıdık geliyor mu?',
    subtitle: 'Tembel değilsin. Beyninin sadece farklı bir başlangıç noktasına ihtiyacı var.',
    withoutDoubly: 'Doubly olmadan',
    withDoubly: 'Doubly ile',
    rows: [
      {
        without: 'Donup kalıyorum ve nereden başlayacağımı bilmiyorum',
        with: 'Beyin boşaltma → tek bir net sonraki adım beliriyor',
      },
      {
        without: 'Onun yerine daha küçük, rastgele işler yapıyorum',
        with: 'Doubly gerçekten önemli olanı önce öne çıkarıyor',
      },
      {
        without: 'Aynı anda 5 şeye başlıyorum',
        with: 'Ekranda tek görev. Bitir, sonra sıradaki.',
      },
      {
        without: 'Mükemmel planı fazla düşünüyorum',
        with: 'Her şeyi dök, ilk adımı Doubly seçsin',
      },
      {
        without: 'Acil hale gelene kadar erteliyorum — sonra panikliyorum',
        with: 'Panik başlamadan başlarsın',
      },
      {
        without: 'Yalnız çalışıyorum ve momentumu hızla kaybediyorum',
        with: 'Body doubling ve hesap verebilirlik ortakları devam etmeni sağlar',
      },
    ],
    questionTitle: 'O anda en çok neye ihtiyacın var?',
    options: [
      'Beyin boşaltma',
      'Küçücük bir sonraki adım',
      'Hesap verebilirlik',
      'Bir zamanlayıcı / odak desteği',
      'Geride kaldığımda bir sıfırlama',
    ],
    responseIntro: 'Doubly tam da burada yardımcı olur.',
    responses: {
      'Beyin boşaltma': {
        title: 'Beyin Boşaltma → Anında Netlik',
        description:
          'Kaosu yaz. Doubly yapılabilir olanı çıkarır ve gürültüyü çöpe atar.',
      },
      'Küçücük bir sonraki adım': {
        title: 'Sonraki Adım, Her Zaman Hazır',
        description:
          'Doubly büyük görevleri parçalara ayırır ve sana yalnızca bir sonraki küçük hamleyi sunar. Bunalma yok.',
      },
      'Hesap verebilirlik': {
        title: 'Hesap Verebilirlik Yoklamaları',
        description:
          'Nazik dürtmeler ve sosyal hesap verebilirlik, suçluluk duymadan yolunda kalmana yardımcı olur.',
      },
      'Bir zamanlayıcı / odak desteği': {
        title: 'Odak Modu',
        description:
          'Ekranda tek görev, çalışan bir zamanlayıcı, uçup giden dikkat dağıtıcılar. Sadece sen ve iş.',
      },
      'Geride kaldığımda bir sıfırlama': {
        title: 'Yeni Başlangıç, Suçluluk Yok',
        description:
          'Yolundan mı çıktın? Doubly planını yeniden düzenler, böylece utanç sarmalına girmeden kaldığın yerden devam edebilirsin.',
      },
    },
    mockupNextStep: 'Sonraki adımın hazır',
    mockupTask: 'Küçük bir şeyle başla',
    mockupCta: 'Doubly\'yi dene',
  },


  // HabitDemo
  habitDemo: {
    title: 'Gerçekten kalıcı olan alışkanlıklar oluştur',
    subtitle:
      'Bozulacak seri yok. Suçluluk yok. O şeyi yaptığında sadece dokun. Doubly deseni takip eder, böylece ilerlemeni görebilirsin.',
    todayLabel: 'Bugün',
    yourHabits: 'Alışkanlıkların',
    weeksLabel: '12 hafta',
    lessLabel: 'Az',
    moreLabel: 'Çok',
    currentStreak: 'Mevcut seri',
    bestStreak: 'En iyi seri',
    completion: 'Tamamlanma',
    allDoneMessage: 'Bugün için tüm alışkanlıklar tamam!',
    allDoneDescription: 'Bunu her gün hayal et. Doubly devam etmeyi kolaylaştırır.',
    allDoneCta: 'Hemen harekete geç',
    habits: [
      { id: 'walk', name: 'Yürüyüşe çık', icon: '🚶' },
      { id: 'read', name: '10 sayfa oku', icon: '📖' },
      { id: 'journal', name: 'Günlük tut', icon: '✏️' },
      { id: 'tidy', name: '10 dakikalık toparlanma', icon: '🧹' },
    ],
  },

  // Success
  success: {
    title: 'Amaçsız kaydırma yerine seni harekete geçiren bir akış seç.',
    imageAlt: 'Doubly\'de tamamlanmış bir görevi, topluluk tepkilerini ve yorumları gösteren gönderi detayı',
    subtitle: 'Amaçsız kaydırma yerine seni harekete geçiren bir akış seç.',
    outcomes: [
      'Zihinsel savaş olmadan görevlere başla',
      'Planladığın şeyi sonuna kadar götür',
      'Sarmala girmeden yeniden yola gir',
      'Bir şeyleri gerçekten yapacağına kendine güven',
    ],
  },

  // Stakes
  stakes: {
    title: 'Çünkü takılı kalmanın bir bedeli var',
    body: 'Başlamak bu kadar zor gelince işler kaçar. Son tarihler kaçırılır, fırsatlar geçip gider ve kendini kaçınma ile suçluluk döngüsünde takılmış hissetmeye başlarsın. Doubly, bir hafta daha yok olup gitmeden bu döngüyü kırmana yardımcı olur.',
  },

  // Testimonials
  testimonials: {
    title: 'İnsanların daha fazla üretkenlik baskısına ihtiyacı yok',
    subtitle: 'Başlamak için yardıma ihtiyaçları var.',
    items: [
      // Real App Store reviews, quoted verbatim. Only add entries that are actual
      // published reviews AND whose reviewer gave permission (Apple's rule; ask by
      // replying to the review in App Store Connect). The grid auto-adapts up to 3.
      {
        quote:
          'This app is the only one that actually got me to do things. I have very strong ADHD, and it made me concentrate on my tasks one by one to always know what’s coming ahead and make order in my day. Love it so much! Hope to see awesome upgrades soon 🙏🏻',
        name: 'Liorcic',
        label: 'App Store yorumu',
      },
      {
        quote:
          'This has really helped me manage my workload, I haven’t seen anything like it. The walkthrough and set up is very intuitive, and the features make it worth it!',
        name: 'MinecraftrNinja',
        label: 'App Store yorumu',
      },
      // Slot 3 — next permitted review goes here.
    ],
  },

  // FAQ
  // ToolsSection
  toolsSection: {
    title: 'Hemen kullanabileceğin ücretsiz ADHD araçları',
    subtitle: 'Kayıt yok, açılır pencere yok. Takıldığın anda tarayıcında birini aç.',
    hot: 'Popüler',
    openTool: 'Aracı aç',
    browseAll: 'Tüm ücretsiz ADHD araçlarına göz at',
  },

  faq: {
    title: 'Sorular',
    items: [
      {
        q: 'Doubly yalnızca ADHD teşhisi konmuş kişiler için mi?',
        a: 'Hayır. Doubly, başlamakta, bunalmışlıkta ya da zihinsel karmaşada zorlanan herkes için. Bir teşhise ihtiyacın yok, sadece yapılacak çok şey olduğunda bazen donup kalan bir beyne.',
      },
      {
        q: 'Bu, normal bir yapılacaklar uygulamasından nasıl farklı?',
        a: 'Yapılacaklar uygulamaları bir şeyleri listelemene yardımcı olur. Doubly onlara gerçekten başlamana yardımcı olur. Ne yapacağını bilmekle onu yapmak arasındaki boşluk olan başlama direncini beyin boşaltmalar, tek adımlık netlik ve hesap verebilirlik ile azaltmaya odaklanıyoruz.',
      },
      {
        q: 'Özellikle göreve başlamaya yardımcı oluyor mu?',
        a: 'Evet. Bu bizim ana odağımız. Beyin boşaltma zihinsel karmaşayı temizler, sonraki adım netliği yapılabilir tek bir eylem seçer ve hesap verebilirlik araçları takip etmene yardımcı olur. Her özellik o ilk adım etrafında tasarlandı.',
      },
      {
        q: 'Buradaki hesap verebilirliği farklı kılan ne?',
        a: 'Bu, seni suçlu hissettiren dırdır ya da seriler değil. Doubly, ilerlemeni gerçekten önemseyen gerçek insanlarla nazik sosyal yoklamalar kullanır, böylece seni utandıran bir robot değil, yanında biri olur.',
      },
      {
        q: 'Alışkanlık takipçilerinin ya da planlayıcıların yerini tutar mı?',
        a: 'Tutabilir. Ama Doubly bir İsviçre çakısı olmaya çalışmıyor. Seni takılı kalmaktan başlamaya geçirmeye lazer gibi odaklanmış. Ayrıntılı proje planlamasına ihtiyacın varsa, onu mevcut araçlarınla birlikte kullan.',
      },
      {
        q: 'Kolayca bunalıyorsam iyi mi?',
        a: 'Özellikle o zaman. Doubly sana asla her şeyi bir kerede göstermez. Bir görev duvarı değil, tek bir sonraki adım görürsün. Tüm deneyim, hızla aşırı yüklenen beyinler için tasarlandı.',
      },
    ],
  },

  // FinalCTA
  finalCta: {
    title: 'Beyninin daha fazla baskıya ihtiyacı yok',
    highlight: 'Başlamak için bir yola ihtiyacı var.',
    subtitle: 'Aşırı düşünmekten, kaçınmaktan ve geride kalmaktan yorulmuş ADHD zihinleri için.',
    cta: 'App Store\'dan indir',
  },

  // Footer
  footer: {
    brand: 'Doubly',
    freeTools: 'Ücretsiz ADHD araçları',
    tools: 'Araçlar',
    learn: 'Öğren',
    privacy: 'Gizlilik',
    terms: 'Koşullar',
    support: 'Destek',
    copyright: (year: number) => `© ${year} Doubly. ADHD beyinleri için tasarlandı.`,
  },

  // StickyBar
  stickyBar: {
    cta: 'Hemen harekete geç',
  },

  // Layout metadata
  metadata: {
    title: 'Doubly | Başlamana yardım eden ADHD uygulaması',
    description:
      'Kaosu beyin boşaltmayla dök, tek bir net sonraki adım al ve gerçekten takip etmek için hesap verebilirliği kullan. Yalnızca planlamaya değil, başlamaya yardıma ihtiyaç duyan ADHD zihinleri için tasarlandı.',
    keywords: ['ADHD', 'üretkenlik', 'beyin boşaltma', 'görev yönetimi', 'hesap verebilirlik', 'odak'],
    ogTitle: 'Doubly | Başlamana yardım eden ADHD uygulaması',
    ogDescription:
      'Kaosu beyin boşaltmayla dök, tek bir net sonraki adım al ve gerçekten takip etmek için hesap verebilirliği kullan.',
  },
  // Tool library card copy (title + description per tool).
  // Mirrors content/tools-i18n/${locale}/_index.json cards[] so the homepage grid and
  // the footer speak the visitor's language; kept in sync by scripts/check-tool-cards.mjs.
  toolCards: {
    'task-splitter': {
      title: 'Görev Bölme Aracı',
      description:
        'Başlayamadığın bir görev yaz. Yapay zeka onu süre tahminleriyle küçük, yapılabilir adımlara bölsün. ADHD beyinleri için tasarlandı.',
    },
    'brain-dump': {
      title: 'Beyin Boşaltma Aracı',
      description:
        'Kafandaki her şeyi dök, yapay zeka yalnızca yapılabilir görevleri çıkarsın. Kayıt yok, hiçbir şey saklanmıyor.',
    },
    'pick-one': {
      title: 'Birini Seç Aracı',
      description:
        'Dağınık yapılacaklar listeni yapıştır, başlamak için tek bir iş al. En küçüğü, en korkutucusu ya da rastgele. On görevin tek ve devasa, başlanamaz bir şeye dönüştüğü anlar için.',
    },
    'eisenhower-matrix': {
      title: 'Eisenhower Matrisi (ADHD Sürümü)',
      description:
        'Görevleri ders kitabı etiketleri yerine “sıkıcı ama önemli” gibi çeyreklere sürükle. Sonunda ADHD beynine oturan matris. Tarayıcında saklanır.',
    },
    'pomodoro': {
      title: 'ADHD Pomodoro Zamanlayıcı',
      description:
        '25 dakika çalışma, 5 dakika mola - sonunda ADHD beynine oturan odak yöntemi. Ücretsiz, kayıt yok, çevrimdışı çalışır.',
    },
    'visual-timer': {
      title: 'Görsel Zamanlayıcı / Zaman Körlüğü Saati',
      description:
        'Rakam okumak yerine zamanın akıp gittiğini gör: küçülen bir pasta dilimi. ADHD\'li yetişkinler için aynı zamanda bir zaman körlüğü saati.',
    },
    'brown-noise': {
      title: 'Ortam Sesi Üreteci',
      description:
        'Tarayıcıda çalışan ücretsiz ortam sesi üreteci. Kahverengi gürültü, ayrıca pembe ve beyaz. Vızıldayan bir ADHD beynini yatıştıran sabit bir arka plan sesi. Uyku zamanlayıcısı dahil, çevrimdışı çalışır.',
    },
    'body-doubling-room': {
      title: 'Body Doubling Odası',
      description:
        'İki kişilik ücretsiz odak odası. Bir link paylaş, eşler arası videoyla yan yana çalış, ortak zamanlayıcıyı başlat. Kayıt yok, kurulum yok.',
    },
    'hyperfocus-timer': {
      title: 'Hiperfokus Kesme Zamanlayıcısı',
      description:
        'Belirlediğin aralıklarla tekrarlanan sesli yoklamalar ve istersen kesin bir bitiş. Böylece ADHD hiperfokusun bütün öğleden sonranı yiyip bitirmez.',
    },
  },

  toolWidgets: {
    taskSplitter: {
      inputLabel: 'Başlayamadığın görev ne?',
      inputPlaceholder: 'örn. Masraf raporumu gönder',
      submit: 'Parçalara böl',
      submitting: 'Parçalara bölünüyor…',
      privacyNote: 'Gizli. Sunucumuzda hiçbir şey saklanmıyor.',
      charactersLeft: (count: number) => `${count} karakter kaldı`,
      presetsIntro: 'Ya da bunlardan birini dene:',
      presets: {
        cleanKitchen: 'Mutfağı temizle',
        doLaundry: 'Çamaşır yıka',
        replyInbox: 'Gelen kutusuna cevap yaz',
        planWeekendTrip: 'Hafta sonu gezisi planla',
        fileTaxes: 'Vergi beyannamemi ver',
        cleanBathroom: 'Banyoyu temizle',
      },
      loading: 'Adımlara bölünüyor…',
      errorRateLimit: 'Çok hızlısın. Biraz bekleyip tekrar dene.',
      errorGeneric: 'Şu an bunu bölemedik. Birkaç saniye sonra tekrar dene.',
      tryAgain: 'Tekrar dene',
      taskLabel: 'Görev',
      urgencyLabels: { low: 'Düşük öncelik', medium: 'Orta öncelik', high: 'Yüksek öncelik' },
      stepsDone: (done: number, total: number) => `${done}/${total} adım tamam`,
      minTotal: (min: number) => `toplam ~${min} dk`,
      allDoneMessage: 'Hepsi tamam. Göründüğü kadar korkutucu değilmiş, değil mi?',
      emptyState:
        'Bunun için net alt adımlar bulamadık. Bir eylem gibi yazmayı dene: “Proje planını yaz” ya da “Garajı temizle.”',
    },
    brainDump: {
      label: 'Kafandaki her şeyi dök. Düzenli olmasına gerek yok.',
      placeholder:
        'Diş hekimini aramayı sürekli unutuyorum ve mutfak berbat halde.\nİşteki proje yüzünden bunalmış hissediyorum. Akşam yemeği için market\nalışverişi yapmam ve Sarah’ın geçen haftaki e-postasına cevap yazmam lazım.',
      privacy: 'Gizli. Sunucumuzda hiçbir şey saklanmıyor.',
      charactersLeft: (remaining: number) => `${remaining} karakter kaldı.`,
      clear: 'Temizle',
      submit: 'Görevleri çıkar',
      submitting: 'Görevler çıkarılıyor…',
      loading: 'Yazdıkların okunuyor, yapılabilir kısımlar çıkarılıyor…',
      errorRateLimited: 'Çok hızlısın. Biraz bekleyip tekrar dene.',
      errorGeneric: 'Şu an görevleri çıkaramadık. Birkaç saniye sonra tekrar dene.',
      tryAgain: 'Tekrar dene',
      empty:
        'Burada somut bir göreve benzeyen bir şey bulamadık. Bu iyiye işaret olabilir. İçini döktüysen, o da sayılır. Yapılacakları listelemek istediysen biraz daha net ol (“Sarah ile ilgili şeyler” yerine “Sarah’a e-posta yaz”).',
      resultsTitle: 'Yapılabilir görevler',
      doneCount: (done: number, total: number) => `${done}/${total} tamam`,
      footer: 'Birini seç. Sadece birini. Şimdi yap, sonra sıradakine dön.',
    },
    pickOne: {
      inputLabel: 'Listeni yapıştır. Her satıra bir tane ya da virgüllerle karışık. Nasıl olursa.',
      inputPlaceholder:
        'anneme cevap yaz\ndiş hekiminden randevu al\nmasrafları gir\nsunumu bitir\nçiçekleri sula',
      itemsDetected: (count: number) => `${count} öğe bulundu`,
      itemsDetectedWithLeft: (count: number, left: number) =>
        `${count} öğe bulundu, ${left} kaldı`,
      clearEverything: 'Hepsini temizle',
      modeLegend: 'Nasıl seçelim?',
      modes: {
        smallest: {
          label: 'En küçüğü',
          reason: 'Listedeki en kısa iş. Küçük başla, momentum kazan.',
        },
        scariest: {
          label: 'En korkutucusu',
          reason: 'Yüzüne bakmak istemediğin iş. Önce onu yapmak günü rahatlatır.',
        },
        random: {
          label: 'Sen seç',
          reason: 'Düşünmek yok. Listeyi kadere bıraktık. Sadece başla.',
        },
      },
      pickCta: 'Benim için birini seç',
      pickAnotherCta: 'Başka bir tane seç',
      emptyHint: 'En az bir öğe ekle, sonra seçtir.',
      readyHint: 'Hazır. Karar veremediğinde “Benim için birini seç”e dokun.',
      allDoneTitle: 'Liste hallolmuş.',
      allDoneBody:
        'Her öğe ya tamamlandı ya atlandı. Listeyi temizleyebilir ya da sıfırlayıp atlananları havuza geri getirebilirsin.',
      bringSkippedBack: 'Atlananları geri getir',
      startFreshList: 'Yeni bir liste başlat',
      pickedEyebrow: 'Bununla başla',
      didIt: 'Yaptım',
      notThisOne: 'Bu olmasın',
      pickAgain: 'Yeniden seç',
      progress: (done: number, skipped: number, left: number) =>
        `${done} tamam, ${skipped} atlandı, ${left} kaldı`,
    },
    eisenhower: {
      inputLabel: 'Görev ekle',
      inputPlaceholder: 'Bir görev ekleyip enter’a bas (ya da satır satır birçok görev yapıştır)',
      addButton: 'Ekle',
      totals: (total: number, unsorted: number) =>
        `toplam ${total} görev, ${unsorted} yerleştirilmemiş`,
      clearAll: 'Hepsini temizle',
      unsortedHeading: (count: number) => `Yerleştirilmemiş (${count})`,
      unsortedListLabel: 'Yerleştirilmemiş görevler',
      removeTask: (text: string) => `${text} görevini kaldır`,
      placeHint: 'Şimdi yerleştirmek için bir çeyreğe dokun.',
      placeHintDesktop: 'Ya da masaüstünde sürükleyip bırak.',
      quadrantRegionLabel: (label: string) => `${label} çeyreği`,
      quadrantCountLabel: (count: number, label: string) => `${label} çeyreğinde ${count} görev`,
      dropHere: 'Buraya bırak',
      sendBackToUnsorted: 'Yerleştirilmemişlere geri gönder',
      moveBackToUnsorted: (text: string) => `${text} görevini yerleştirilmemişlere geri taşı`,
      empty: 'Boş',
      emptyState:
        'Başlamak için yukarıdan bir görev ekle. Her şey tarayıcında saklanır, sunucumuzda hiçbir şey tutulmaz.',
      hintLabel: 'Doubly ipucu:',
      hintBody:
        'Sıkıcı ama önemli yığın, çoğu insanın atladığı ve atladığına en çok pişman olduğu yığındır. Bugün tek bir şey yapacaksan oradan seç.',
      quadrants: {
        fire: {
          label: 'Alev alev',
          sub: 'Yarın değil, bugün yap.',
          textbook: 'Önemli + Acil',
        },
        boring: {
          label: 'Sıkıcı ama önemli',
          sub: 'Asıl kazançlar burada. Takvime koy, atlama.',
          textbook: 'Önemli + Acil değil',
        },
        noisy: {
          label: 'Gürültülü ama atlanabilir',
          sub: 'Sesi çok çıkıyor ama senin sorunun değil. Devret, ertele, boş ver.',
          textbook: 'Acil + Önemli değil',
        },
        drop: {
          label: 'Bunları bırak',
          sub: 'Buna izin var. Listenin bitmesi şart değil.',
          textbook: 'Önemli değil + Acil değil',
        },
      },
    },
    pomodoro: {
      timerLabel: 'Pomodoro zamanlayıcı',
      modeTablistLabel: 'Zamanlayıcı modu',
      modes: {
        work: 'Odak',
        'short-break': 'Kısa mola',
        'long-break': 'Uzun mola',
      },
      dialLabel: (mode: string, time: string) => `${mode} zamanlayıcısı. ${time} kaldı.`,
      sessionsToday: (count: number) => `Bugün tamamlanan seans: ${count}`,
      soundToggle: 'Seans bitince ses',
      customizeDurations: 'Süreleri özelleştir',
      hideSettings: 'Ayarları gizle',
      focusMinutes: 'Odak (dk)',
      shortBreakMinutes: 'Kısa mola (dk)',
      longBreakMinutes: 'Uzun mola (dk)',
      documentTitle: (time: string, mode: string) => `${time} | ${mode} | Doubly`,
    },
    visualTimer: {
      ariaLabel: 'Görsel geri sayım zamanlayıcısı',
      dialAriaLabel: (remaining: string) => `Görsel zamanlayıcı kadranı. ${remaining} kaldı.`,
      seconds: (s: number) => `${s} saniye`,
      minutes: (m: number) => `${m} dakika`,
      minutesAndSeconds: (m: number, s: number) => `${m} dakika ${s} saniye`,
      documentTitle: (time: string) => `${time} | Doubly`,
      countingDown: (minutes: number) => `${minutes} dk’dan geri sayılıyor`,
      setFor: (minutes: number) => `${minutes} dk için ayarlandı`,
      paused: 'Duraklatıldı',
      timeIsUp: 'Süre doldu',
      presetsLabel: 'Hazır süreler',
      presetMinutes: (minutes: number) => `${minutes} dk`,
      custom: 'Özel',
      minutesLabel: 'Dakika',
      set: 'Ayarla',
      soundWhenDone: 'Süre dolunca ses',
    },
    brownNoise: {
      play: (sound: string) => `${sound} gürültüsünü çal`,
      pause: (sound: string) => `${sound} gürültüsünü duraklat`,
      documentTitle: (sound: string) => `▶ ${sound} · Doubly`,
      chooseSound: 'Bir ortam sesi seç',
      soundGroupLabel: 'Ortam sesi',
      volume: 'Ses seviyesi',
      volumePercent: (percent: number) => `%${percent}`,
      sleepTimer: 'Uyku zamanlayıcısı',
      sleepOff: 'Kapalı',
      sleepMinutes: (minutes: number) => `${minutes} dk`,
      privacyNote: 'Tarayıcında çalışır. Hiçbir şey kaydedilmez, hiçbir şey yüklenmez.',
      sounds: {
        brown: {
          name: 'Kahverengi',
          description: 'Derin, gümbürtülü. Uzaktaki bir şelale gibi. TikTok’taki o ses.',
        },
        pink: {
          name: 'Pembe',
          description: 'Beyazdan daha yumuşak, kahverengiden daha az bas. Dengeli.',
        },
        white: {
          name: 'Beyaz',
          description: 'Eski bir televizyonun cızırtısı. Parlak ve düzgün.',
        },
      },
    },
    hyperfocus: {
      ariaLabel: 'Hiperfokus kesme zamanlayıcısı',

      // Süreler. Her ifade burada durur ki her dil kendi çoğul biçimini,
      // birimini ve sözcük sırasını seçebilsin.
      minutesShort: (minutes: number) => `${minutes} dk`,
      hoursShort: (hours: number) => `${hours} sa`,
      hoursMinutesShort: (hours: number, minutes: number) => `${hours} sa ${minutes} dk`,
      durationLong: (hours: number, minutes: number) => {
        if (hours === 0 && minutes === 0) return 'bir dakikadan az';
        const parts: string[] = [];
        if (hours > 0) parts.push(`${hours} saat`);
        if (minutes > 0) parts.push(`${minutes} dakika`);
        return parts.join(' ');
      },

      // Seans şeridi. ** ile sarılan metin vurgulu gösterilir.
      stripNoCap: (interval: string) => `${interval} arayla yoklama, kesin bitiş yok`,
      stripWithCap: (interval: string, cap: string) =>
        `${interval} arayla yoklama, ${cap} sonra kesin bitiş`,
      summaryNoCap: (interval: string) => `**${interval}** arayla yoklama, kesin bitiş yok.`,
      summaryWithCap: (interval: string, cap: string) =>
        `**${interval}** arayla yoklama, **${cap}** sonra kesin bitiş.`,

      // Kurulum
      intervalHeading: 'Yoklama aralığı',
      custom: 'Özel',
      minutes: 'Dakika',
      set: 'Ayarla',
      jitterNote:
        'Yoklamalar yaklaşık yüzde on kaydırılır, böylece beyin onları önceden savuşturamaz.',
      moreOptions: 'Daha fazla seçenek',
      hideOptions: 'Seçenekleri gizle',
      taskLabel: 'Ne üzerinde çalışıyorsun? (isteğe bağlı)',
      taskPlaceholder: 'örn. vergi evrakları, tasarım incelemesi, senaryo',
      taskHint: 'Sesli yoklamalarda kullanılır, böylece ne yapmak için oturduğunu duyarsın.',
      hardStopHeading: 'Kesin bitiş süresi',
      hardStopHint:
        'Sınıra ulaşıldığında daha yüksek sesli bir uyarı çalar, böylece altı saatlik bir sarmal fark edilmeden geçip gitmez.',
      capOff: 'Kapalı',
      capHours: (hours: number) => `${hours} sa`,
      noHardStop: 'kesin bitiş yok',
      alertsHeading: 'Uyarılar',
      chime: 'Zil',
      voice: 'Ses',
      notify: 'Bildirim',
      alertsHint:
        'Yoklama görmezden gelinirse zil sesi yükselir. Ses, saati ve geçen süreyi söyler. Bildirim, sekme arka plandayken tarayıcı bildirimi gönderir.',
      notificationsBlocked:
        'Bu tarayıcıda bildirimler engellenmiş. Kullanmak için site ayarlarından izin ver.',
      notificationsUnsupported: 'Tarayıcın web bildirimlerini desteklemiyor.',
      startSession: 'Seansı başlat',

      // Canlı seans
      statElapsed: 'Geçen süre',
      statNextCheckIn: 'Sonraki yoklama',
      statCap: 'Sınır',
      statusNow: 'Şimdi',
      statusPaused: 'Duraklatıldı',
      statusCapHit: 'Sınıra ulaşıldı',
      statusOff: 'Kapalı',
      workingOn: (task: string) => `**${task}** üzerinde çalışıyorsun`,
      checkInHeading: 'Kısa yoklama',
      checkInBody: (clock: string, elapsed: string) =>
        `Saat ${clock} ve ${elapsed} süredir bununla uğraşıyorsun. Hâlâ başladığın işte misin, yoksa yüzeye çıkma vakti mi geldi?`,
      stillGoing: 'Devam ediyorum',
      takeABreak: 'Mola ver',
      stopSession: 'Seansı durdur',
      capHeading: 'Seans sınırına ulaşıldı',
      capBody: (minutes: number) =>
        `Kesin bitişi ${minutes} dakikaya ayarlamıştın. Ayağa kalk, su iç, bir şeyler ye. İş burada seni bekliyor olacak.`,
      pause: 'Duraklat',
      resume: 'Devam et',
      endSession: 'Seansı bitir',
      checkInLog: 'Yoklama kaydı',
      logContinue: 'devam etti',
      logBreak: 'mola verdi',
      logStop: 'durdu',

      // Yoklama arka plandaki sekmede beklerken tarayıcı sekmesinin başlığı.
      tabAlert: '⚠ Yoklama | Doubly',

      // Sesli okunur (SpeechSynthesis) ve işletim sistemi bildirimi olarak gönderilir.
      checkInSpeech: (clock: string, elapsed: string, task: string) =>
        task
          ? `Yoklama zamanı. Saat ${clock}. ${elapsed} süredir ${task} üzerinde çalışıyorsun.`
          : `Yoklama zamanı. Saat ${clock}. ${elapsed} süredir çalışıyorsun.`,
      capSpeech: (clock: string, elapsed: string) =>
        `Seans sınırına ulaşıldı. Saat ${clock}. ${elapsed} süredir bununla uğraşıyorsun. Durma vakti.`,
      notificationCheckInTitle: 'Hiperfokus yoklaması',
      notificationCheckInBody: (clock: string, elapsed: string) =>
        `Saat ${clock}. ${elapsed} süredir bununla uğraşıyorsun.`,
      notificationCapTitle: 'Hiperfokus sınırına ulaşıldı',
      notificationCapBody: (clock: string, elapsed: string) =>
        `Saat ${clock}. ${elapsed} süredir bununla uğraşıyorsun. Durma vakti.`,
    },
    shared: {
      start: 'Başlat',
      pause: 'Duraklat',
      resume: 'Devam et',
      done: 'Tamam',
      reset: 'Sıfırla',
      skip: 'Atla',
      skipAria: 'Sonraki seansa atla',
      startSession: 'Odak seansı başlat',
      creatingRoom: 'Oda oluşturuluyor...',
    },
    chrome: {
      tryInApp: 'Uygulamada dene',
      appStoreAria: (label: string) => `App Store’da ${label}`,
      breadcrumbAria: 'Gezinti yolu',
    },
  },

};

export default tr;
