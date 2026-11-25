export type Locale = "en" | "ar";

export const translations = {
  en: {
    navItems: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Courses", href: "#courses" },
      { label: "Accreditations & Partnerships", href: "#faculty" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      heading: "Achieve Your Academic Goals with Expert Guidance",
      subheading:
        "Personalized learning programs, experienced mentors, and proven strategies designed to help students achieve consistent academic success with confidence.",
    },
    cta: {
      primaryAction: "Call Now",
      secondaryAction: "WhatsApp Chat",
    },
    languageToggle: "AR",
    about: {
      title: "About Us",
      description:
        "We are a professionally managed learning institution committed to delivering high-quality academic instruction and structured learning solutions. Our approach is rooted in academic rigor, experienced faculty, and well-defined methodologies that support consistent progress and measurable outcomes.",
      bulletPoints: [
        "Experienced and qualified faculty members",
        "Structured and outcome-focused learning programs",
        "Regular evaluations and progress monitoring",
        "Personalized guidance and academic support",
        "Transparent and affordable fee structure",
      ],
      imageAlt: "Institution overview",
    },
    highlights: [
      { text: "Expert Faculty with 10+ Years Experience", icon: "faculty" },
      { text: "1000+ Successful Students", icon: "students" },
      { text: "Small Batches for Personalized Attention", icon: "smallBatch" },
      { text: "Comprehensive Study Material", icon: "material" },
      { text: "Affordable & Transparent Fees", icon: "fees" },
      { text: "Safe & Hygienic Learning Environment", icon: "safe" },
    ],
    courses: {
      heading: "Courses We Offer",
      subheading: "Focused batches with personalized mentoring and proven teaching methods",
      availableNow: "AVAILABLE NOW",
      items: [
        { title: "Human Resources", description: "SHRM accredited" },
        { title: "Talent Development", description: "ATD accredited" },
        { title: "Project Management", description: "PMI accredited" },
        { title: "Industrial Safety", description: "ASIS International accredited" },
        { title: "Accounting & Auditing", description: "Professional finance track" },
        { title: "Languages", description: "Communication and language growth" },
        { title: "Master’s and Doctorate Programs", description: "Postgraduate academic support" },
      ],
    },
    results: {
      heading: "Our Student Achievements",
      subheading: "Real results from consistent mentoring and disciplined learning",
    },
    methodology: {
      heading: "Teaching Methodology",
      subheading: "A structured approach designed to ensure conceptual clarity and exam readiness",
      items: [
        {
          title: "Concept-Based Learning",
          description: "We focus on building a strong foundation of concepts before moving to advanced topics.",
        },
        {
          title: "Regular Assessments",
          description: "Periodic tests and quizzes ensure progress tracking and improvement.",
        },
        {
          title: "Doubt Clearing Sessions",
          description: "Interactive sessions to clarify every doubt and ensure no gap in learning.",
        },
        {
          title: "Personalized Attention",
          description: "Small batch sizes and individual mentoring for focused learning.",
        },
        {
          title: "Exam-Oriented Practice",
          description: "Practice sessions modeled on real exams to build confidence and speed.",
        },
        {
          title: "Progress Tracking",
          description: "Regular feedback to students and parents to monitor improvement.",
        },
      ],
    },
    faculty: {
      heading: "Accreditations & Partnerships",
      subheading: "Trusted Partnerships",
      items: [
        { name: "SHRM", role: "Human Resources Certification", experience: "Accredited Certification" },
        { name: "PMI", role: "Project Management Certification", experience: "Accredited Certification" },
        { name: "ASIS", role: "Physical Security Certification", experience: "Accredited Certification" },
        { name: "ATD", role: "Talent Development Certification", experience: "Accredited Certification" },
      ],
    },
    testimonials: {
      heading: "What Our Learners Say",
      subheading: "Saudi experiences in professional training and accredited development",
      items: [
        {
          name: "غادة المطيري",
          message: "ساعدني برنامج SHRM على تطوير مهارات الموارد البشرية وفهم معايير العمل في السوق السعودي.",
        },
        {
          name: "سامي الجابر",
          message: "حصلت على دعم واضح وخطة تدريبية متخصصة في إدارة المشروعات وتأهيل ناجح لاعتماد PMI.",
        },
        {
          name: "أحمد الشقيري",
          message: "الشرح العملي وتدريب الاعتماد المهني عززا خبرتي في الأمن الوظيفي والثقة في مساري المهني.",
        },
        {
          name: "فيصل القحطاني",
          message: "ساعدني التدريب العملي على تطبيق مهارات تطوير المواهب ورفع مستوى أدائي المهني.",
        },
        {
          name: "عبد العزيز الدوسري",
          message: "كانت المواد التدريبية واضحة والمنهج متقدمًا وملائمًا لاحتياجات بيئة العمل في المملكة.",
        },
      ],
    },
    ctaSection: {
      heading: "Start Your Preparation With Expert Guidance",
      subheading: "Get personalized counseling and choose the right course for your goal.",
    },
    contact: {
      heading: "Contact & Visit Our Center",
      subheading: "Have questions about courses or admissions? Reach out to us or visit our center for personalized guidance.",
      labels: {
        phone: "Phone",
        email: "Email",
        address: "Address",
        hours: "Working Hours",
      },
      openHours: [
        { days: "Monday - Sunday", hours: "24/7" },
      ],
      mapTitle: "Our Location",
    },
    footer: {
      description: "A trusted institute focused on quality education, expert guidance, and consistent student success.",
      quickLinks: "Quick Links",
      connect: "Connect With Us",
    },
    ui: {
      previous: "Previous",
      next: "Next",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      goHome: "Go to home",
      ariaHome: "Go to home",
    },
  },
  ar: {
    navItems: [
      { label: "الرئيسية", href: "#home" },
      { label: "من نحن", href: "#about" },
      { label: "الدورات", href: "#courses" },
      { label: "الاعتمادات والشراكات ", href: "#faculty" },
      { label: "تواصل", href: "#contact" },
    ],
    hero: {
      heading: "حقق أهدافك الأكاديمية مع إشراف خبراء",
      subheading:
        "برامج تعليمية مخصصة، معلمين متمرسين، واستراتيجيات مثبتة تساعد الطلاب على تحقيق النجاح الأكاديمي بثقة.",
    },
    cta: {
      primaryAction: "اتصل الآن",
      secondaryAction: "دردشة واتساب",
    },
    languageToggle: "EN",
    about: {
      title: "من نحن",
      description:
        "نحن مؤسسة تعليمية تديرها فريق متخصص وتلتزم بتقديم تعليم أكاديمي عالي الجودة وحلول تعليمية منظمة. يستند نهجنا إلى الدقة الأكاديمية، والمعلمين المتمرسين، والمنهجيات المحددة بوضوح التي تدعم التقدم المستمر والنتائج القابلة للقياس.",
      bulletPoints: [
        "معلمين ذوي خبرة وكفاءة",
        "برامج تعليمية منظمة وتتمحور حول النتائج",
        "تقييمات منتظمة ومتابعة للتقدم",
        "إرشاد شخصي ودعم أكاديمي مخصص",
        "هيكل رسوم شفاف ومناسب",
      ],
      imageAlt: "نظرة عامة على المؤسسة",
    },
    highlights: [
      { text: "هيئة تدريس متميزة بخبرة أكثر من 10 سنوات", icon: "faculty" },
      { text: "أكثر من 1000 طالب حققوا النجاح", icon: "students" },
      { text: "فصول صغيرة للاهتمام الفردي", icon: "smallBatch" },
      { text: "مادة دراسية شاملة", icon: "material" },
      { text: "رسوم مناسبة وشفافة", icon: "fees" },
      { text: "بيئة تعليمية آمنة ونظيفة", icon: "safe" },
    ],
    courses: {
      heading: "الدورات التي نقدمها",
      subheading: "دفعات مركزة مع توجيه شخصي ومنهجية تدريس مثبتة",
      availableNow: "متاح الآن",
      items: [
        { title: "مجال الموارد البشرية والمعتمد لدى SHRM", description: "برامج تدريبية معتمدة" },
        { title: "مجال تنمية المواهب والمعتمد لدى ATD", description: "تطوير القدرات البشرية" },
        { title: "مجال إدارة المشاريع والتطوير المؤسسي والمعتمد لدى PMI", description: "مهارات إدارة المشاريع" },
        { title: "مجال الأمن الصناعي والمعتمد لدى ASIS International", description: "السلامة المهنية" },
        { title: "مجال المحاسبة والمراجعة", description: "تمكين مالي ومحاسبي" },
        { title: "مجال اللغات", description: "تعزيز مهارات التواصل" },
        { title: "الماجستير والدكتوراه", description: "دعم أكاديمي وبحثي للدراسات العليا" },
      ],
    },
    results: {
      heading: "إنجازات طلابنا",
      subheading: "نتائج حقيقية من توجيه مستمر وتعلم منظم",
    },
    methodology: {
      heading: "منهجيتنا في التدريس",
      subheading: "نهج منظم يضمن الوضوح المفاهيمي والاستعداد للامتحانات",
      items: [
        {
          title: "التعلم القائم على المفاهيم",
          description: "نركز على بناء أساس قوي للمفاهيم قبل الانتقال إلى الموضوعات المتقدمة.",
        },
        {
          title: "تقييمات منتظمة",
          description: "اختبارات ودورات قصيرة تضمن متابعة التقدم والتحسين.",
        },
        {
          title: "جلسات توضيح الشكوك",
          description: "جلسات تفاعلية لتوضيح كل سؤال والتأكد من عدم وجود فجوات في التعلم.",
        },
        {
          title: "اهتمام شخصي",
          description: "أحجام دفعات صغيرة وتوجيه فردي لتعلم مركز.",
        },
        {
          title: "ممارسة موجهة للامتحان",
          description: "جلسات تدريبية تحاكي الامتحانات الحقيقية لبناء الثقة والسرعة.",
        },
        {
          title: "متابعة التقدم",
          description: "ملاحظات منتظمة للطلاب وأولياء الأمور لمتابعة التحسن.",
        },
      ],
    },
    faculty: {
      heading: "الاعتمادات والشراكات",
      subheading: "شراكات موثوقة",
      items: [
        { name: "SHRM", role: "اعتماد الموارد البشرية", experience: "اعتماد معتمد" },
        { name: "PMI", role: "اعتماد إدارة المشروعات", experience: "اعتماد معتمد" },
        { name: "ASIS", role: "اعتماد الأمن المادي", experience: "اعتماد معتمد" },
        { name: "ATD", role: "اعتماد تطوير المواهب", experience: "اعتماد معتمد" },
      ],
    },
    testimonials: {
      heading: "ماذا يقول متدربونا",
      subheading: "تجارب سعودية ملهمة في التدريب والتأهيل المهني",
      items: [
        {
          name: "غادة المطيري",
          message: "ساعدني برنامج SHRM على تطوير مهارات الموارد البشرية وفهم معايير العمل في السوق السعودي.",
        },
        {
          name: "سامي الجابر",
          message: "حصلت على خطة تدريبية واضحة وتوجيهًا متخصصًا ساعدني في الاستعداد باحتراف لاعتماد PMI.",
        },
        {
          name: "أحمد الشقيري",
          message: "الشرح العملي وبرامج الاعتماد المهني عززا خبرتي وفتحا أمامي فرصًا أفضل في مساري الوظيفي.",
        },
        {
          name: "فيصل القحطاني",
          message: "ساعدني التدريب العملي على تطبيق مهارات تطوير المواهب ورفع مستوى أدائي المهني.",
        },
        {
          name: "عبد العزيز الدوسري",
          message: "كانت المواد التدريبية واضحة والمنهج متقدمًا وملائمًا لاحتياجات بيئة العمل في المملكة.",
        },
      ],
    },
    ctaSection: {
      heading: "ابدأ استعدادك مع توجيه الخبراء",
      subheading: "احصل على استشارة شخصية واختر الدورة المناسبة لهدفك.",
    },
    contact: {
      heading: "تواصل معنا وزر مركزنا",
      subheading: "هل لديك أسئلة حول الدورات أو القبول؟ تواصل معنا أو زر المركز للحصول على توجيه شخصي.",
      labels: {
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        address: "العنوان",
        hours: "ساعات العمل",
      },
      openHours: [
        { days: "السبت - الجمعة", hours: "24/7" },
      ],
      mapTitle: "موقعنا",
    },
    footer: {
      description: "مؤسسة موثوقة تركز على التعليم الجيد والإرشاد الخبرائي ونجاح الطلاب المستمر.",
      quickLinks: "روابط سريعة",
      connect: "تواصل معنا",
    },
    ui: {
      previous: "السابق",
      next: "التالي",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      goHome: "العودة إلى الصفحة الرئيسية",
      ariaHome: "العودة إلى الصفحة الرئيسية",
    },
  },
} as const;
