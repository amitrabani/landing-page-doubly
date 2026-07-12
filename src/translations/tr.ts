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
};

export default tr;
