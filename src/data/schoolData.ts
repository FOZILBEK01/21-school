import { Teacher, Club, ScheduleDay, Achievement, GalleryItem, AdmissionRequirement } from '../types/school';

export const SCHOOL_INFO = {
  number: 21,
  name: "Toshkent viloyati Olmaliq shahar 21-sonli umumiy o'rta ta'lim maktabi",
  shortName: "Olmaliq 21-maktab",
  tagline: "Olmaliq shahrida sifatli ta'lim, chuqur bilim va yorqin kelajak poydevori",
  ministry: "O'zbekiston Respublikasi Maktabgacha va maktab ta'limi vazirligi",
  foundedYear: 1982,
  accreditation: "Davlat akkreditatsiyasidan o'tgan (A+ toifa)",
  address: "Toshkent viloyati, Olmaliq shahri, Metallurglar dahasi, 12-uy",
  landmark: "Olmaliq shahar Madaniyat saroyi va 'Metallurg' stadioni yaqinida",
  workingHours: "Dushanba — Shanba: 08:00 – 18:30 (Yakshanba: Dam olish kuni)",
  shifts: "2 smenali ta'lim tizimi (1-smena: 08:00–13:05, 2-smena: 13:15–18:20)",
  phone: "+998 70 612 21 21",
  phoneAlt: "+998 94 456 21 21",
  email: "olmaliq21maktab@uzedu.uz",
  telegramChannel: "https://t.me/olmaliq_21maktab",
  telegramChannelName: "@olmaliq_21maktab",
  telegramBot: "https://t.me/olmaliq21_bot",
  telegramBotName: "@olmaliq21_bot",
  instagram: "https://instagram.com/olmaliq_21maktab",
  stats: [
    { label: "O'quvchilar soni", value: "1,150+", detail: "1-11 sinflarda" },
    { label: "Tajribali ustozlar", value: "78 nafar", detail: "44 nafari oliy va 1-toifali" },
    { label: "OTMga qabul", value: "97.8%", detail: "Olmaliq shahar yetakchisi" },
    { label: "O'quv xonalari", value: "38 ta", detail: "STEAM va laboratoriyalar" },
  ]
};

export const TEACHERS: Teacher[] = [
  {
    id: "dir-1",
    name: "Mavlonov Rustam Akromovich",
    role: "Maktab direktori",
    subject: "Fizika va Matematika",
    category: "aniq",
    categoryLabel: "Rahbariyat / Aniq fanlar",
    experience: 24,
    degree: "Oliy toifali pedagog, Xalq ta'limi a'lochisi",
    avatar: "/src/assets/images/school_director_portrait_1791125475071.jpg",
    bio: "24 yillik ilmiy va pedagogik tajribaga ega. Bir nechta xalqaro ta'lim loyihalari koordinatori. Qabul vaqti: Chorshanba va Juma 14:00 – 17:00.",
    achievements: [
      "Xalq ta'limi a'lochisi ko'krak nishoni (2019)",
      "Yilning eng yaxshi maktab rahbari g'olibi (2023)",
      "STEAM ta'limi xalqaro sertifikati sohibi"
    ]
  },
  {
    id: "dep-1",
    name: "Karimova Gulnoza Shavkatovna",
    role: "O'quv ishlari bo'yicha direktor o'rinbosari",
    subject: "Ona tili va Adabiyot",
    category: "tillar",
    categoryLabel: "Ona tili va Tillar",
    experience: 19,
    degree: "Oliy toifa, Metodist o'qituvchi",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Maktabda o'quv dasturlarini xalqaro standartlarga moslashtirish va iqtidorli o'quvchilar bilan ishlashga mas'ul.",
    achievements: [
      "Respublika 'Eng yaxshi dars ishlanmasi' tanlovi sovrindori",
      "O'zbek tili metodik qo'llanmalar muallifi"
    ]
  },
  {
    id: "t-1",
    name: "Ergashev Bobur Baxtiyorovich",
    role: "Informatika va IT to'garagi rahbari",
    subject: "Informatika & Robototexnika",
    category: "aniq",
    categoryLabel: "Aniq fanlar & IT",
    experience: 8,
    degree: "1-toifa, Senior Python/Web Dasturchi",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "O'quvchilarga Python, Algoritmlar va Robototexnika asoslarini o'rgatadi. 12 dan ortiq shogirdlari xalqaro olimpiada g'olibi.",
    achievements: [
      "One Million Uzbek Coders mentori",
      "Tashkent Robokids hakamlar hay'ati a'zosi"
    ]
  },
  {
    id: "t-2",
    name: "Smith Jessica (Jessi xonim)",
    role: "Ingliz tili fani o'qituvchisi",
    subject: "Ingliz tili (IELTS / CEFR)",
    category: "tillar",
    categoryLabel: "Xorijiy tillar",
    experience: 11,
    degree: "IELTS 8.5, CELTA xalqaro sertifikati",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Interaktiv kommunikativ metodika asosida dars o'tadi. O'quvchilari har yili 7.0+ ball natija qayd etadi.",
    achievements: [
      "Cambridge English Teaching Award",
      "Maktabdagi Speaking Club asoschisi"
    ]
  },
  {
    id: "t-3",
    name: "Yuldashev Alisher Farxodovich",
    role: "Matematika fani bosh o'qituvchisi",
    subject: "Algebra & Geometriya",
    category: "aniq",
    categoryLabel: "Aniq fanlar",
    experience: 16,
    degree: "Oliy toifali o'qituvchi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Ixtisoslashgan matematika sinflari yetakchisi, olimpiada masalalarini yechish bo'yicha tuman bosh konsultanti.",
    achievements: [
      "Al-Xorazmiy olimpiadasiga 15+ g'olib tayyorlagan",
      "Xalq ta'limi vazirligi faxriy yorlig'i"
    ]
  },
  {
    id: "t-4",
    name: "Normatova Dilnoza Saidovna",
    role: "Kimyo va Biologiya o'qituvchisi",
    subject: "Kimyo va Biologiya",
    category: "tabiiy",
    categoryLabel: "Tabiiy fanlar",
    experience: 14,
    degree: "Oliy toifa, Tabiiy fanlar bo'yicha doktorant",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    bio: "Zamonaviy laboratoriya tajribalari va tadqiqot loyihalari orqali tabiiy fanlarni amaliyotda o'rgatadi.",
    achievements: [
      "Yosh kimyogarlar respublika ko'rik-tanlovi mentori",
      "STEAM laboratoriya ilmiy koordinatori"
    ]
  },
  {
    id: "t-5",
    name: "Mirzayev Jahongir Otabekovich",
    role: "Jismoniy tarbiya va sport seksiyasi rahbari",
    subject: "Jismoniy tarbiya & Futbol",
    category: "sport",
    categoryLabel: "Sport & Salomatlik",
    experience: 12,
    degree: "Sport ustasi, 1-toifali murabbiy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Maktab futbol va voleybol terma jamoasi murabbiyi. O'quvchilarda sog'lom turmush tarzi va intizomni shakllantiradi.",
    achievements: [
      "'Umid nihollari' shahar bosqichi oltin medali murabbiyi",
      "Olmaliq shahri eng faol yosh murabbiyi (2024)"
    ]
  },
  {
    id: "t-6",
    name: "Rahimova Shahnoza Mirjalolovna",
    role: "Boshlang'ich sinf yetakchi o'qituvchisi",
    subject: "Boshlang'ich ta'lim (1-4 sinflar)",
    category: "boshlangich",
    categoryLabel: "Boshlang'ich ta'lim",
    experience: 15,
    degree: "Oliy toifa, Bolalar psixologi",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
    bio: "Kichik yoshdagi bolalarda o'qish, tanqidiy fikrlash va nozik motorikani rivojlantirish bo'yicha interaktiv dastur egasi.",
    achievements: [
      "Barkamol avlod bolalar ijodiyoti g'olibi ustoz",
      "'Sehrli alifbo' metodikasi muallifi"
    ]
  }
];

export const CLUBS: Club[] = [
  {
    id: "c-1",
    name: "Robototexnika & STEM Lab",
    mentor: "Ergashev Bobur",
    category: "IT va Muhandislik",
    days: "Seshanba, Payshanba, Shanba",
    time: "15:00 – 16:30",
    room: "204-STEAM xonasi",
    ageGroup: "5-10 sinflar",
    description: "Arduino mikrokontrollerlari, 3D modellashtirish va avtomatlashtirilgan robotlar yasash amaliyoti.",
    iconName: "Cpu",
    spotsLeft: 5
  },
  {
    id: "c-2",
    name: "IELTS & English Speaking Club",
    mentor: "Smith Jessica",
    category: "Xorijiy tillar",
    days: "Dushanba, Chorshanba, Juma",
    time: "15:30 – 17:00",
    room: "312-til markazi",
    ageGroup: "7-11 sinflar",
    description: "Erkin so'zlashuv, munozaralar, xorijiy OTMlarga insho (Motivation Letter) tayyorlash kursi.",
    iconName: "Languages",
    spotsLeft: 3
  },
  {
    id: "c-3",
    name: "Yosh Dasturchi (Python & Web)",
    mentor: "Ergashev Bobur",
    category: "IT va Muhandislik",
    days: "Dushanba, Chorshanba, Juma",
    time: "14:00 – 15:30",
    room: "Kompyuter sinfi №1",
    ageGroup: "6-11 sinflar",
    description: "Python asoslari, web-saytlar yaratish, Telegram botlar yasash va sun'iy intellekt vositalari bilan ishlash.",
    iconName: "Code2",
    spotsLeft: 7
  },
  {
    id: "c-4",
    name: "Shaxmat va Mantiq maktabi",
    mentor: "Yuldashev Alisher",
    category: "Intellektual",
    days: "Seshanba, Shanba",
    time: "14:00 – 15:30",
    room: "Kutubxona mantiq zali",
    ageGroup: "1-11 sinflar",
    description: "Strategik fikrlash, kombinatsiyalar, FIDE qoidalari bo'yicha turnirlarga tayyorgarlik.",
    iconName: "Trophy",
    spotsLeft: 9
  },
  {
    id: "c-5",
    name: "Olimpiada Matematikasi",
    mentor: "Yuldashev Alisher",
    category: "Aniq fanlar",
    days: "Dushanba, Payshanba",
    time: "16:00 – 17:30",
    room: "108-matematika xonasi",
    ageGroup: "7-11 sinflar",
    description: "Murakkab nostandart masalalarni yechish, Al-Xorazmiy va xalqaro olimpiadalarga individual tayyorlash.",
    iconName: "Calculator",
    spotsLeft: 4
  },
  {
    id: "c-6",
    name: "Futbol va Futzal seksiyasi",
    mentor: "Mirzayev Jahongir",
    category: "Sport",
    days: "Dushanba, Chorshanba, Juma",
    time: "16:30 – 18:00",
    room: "Maktab stadioni & sport zal",
    ageGroup: "3-11 sinflar",
    description: "Jismoniy chiniqish, to'p bilan ishlash texnikasi va tuman birinchiligida maktab sharafini himoya qilish.",
    iconName: "Activity",
    spotsLeft: 6
  }
];

export const SCHEDULE_DAYS: Record<string, ScheduleDay[]> = {
  "9-A": [
    {
      day: "Dushanba",
      lessons: [
        { order: 1, subject: "Algebra", teacher: "A. Yuldashev", room: "108-xona", time: "08:00 - 08:45" },
        { order: 2, subject: "Geometriya", teacher: "A. Yuldashev", room: "108-xona", time: "08:50 - 09:35" },
        { order: 3, subject: "Ona tili", teacher: "G. Karimova", room: "205-xona", time: "09:45 - 10:30" },
        { order: 4, subject: "Ingliz tili", teacher: "J. Smith", room: "312-xona", time: "10:40 - 11:25" },
        { order: 5, subject: "Kimyo", teacher: "D. Normatova", room: "Laboratoriya 2", time: "11:35 - 12:20" },
        { order: 6, subject: "Jismoniy tarbiya", teacher: "J. Mirzayev", room: "Sport zal", time: "12:25 - 13:05" },
      ]
    },
    {
      day: "Seshanba",
      lessons: [
        { order: 1, subject: "Informatika", teacher: "B. Ergashev", room: "IT Lab 1", time: "08:00 - 08:45" },
        { order: 2, subject: "Fizika", teacher: "R. Mavlonov", room: "201-xona", time: "08:50 - 09:35" },
        { order: 3, subject: "Adabiyot", teacher: "G. Karimova", room: "205-xona", time: "09:45 - 10:30" },
        { order: 4, subject: "O'zbekiston tarixi", teacher: "M. Qodirov", room: "102-xona", time: "10:40 - 11:25" },
        { order: 5, subject: "Biologiya", teacher: "D. Normatova", room: "Bio Lab", time: "11:35 - 12:20" },
      ]
    },
    {
      day: "Chorshanba",
      lessons: [
        { order: 1, subject: "Algebra", teacher: "A. Yuldashev", room: "108-xona", time: "08:00 - 08:45" },
        { order: 2, subject: "Ingliz tili", teacher: "J. Smith", room: "312-xona", time: "08:50 - 09:35" },
        { order: 3, subject: "Fizika", teacher: "R. Mavlonov", room: "201-xona", time: "09:45 - 10:30" },
        { order: 4, subject: "Kimyo", teacher: "D. Normatova", room: "Laboratoriya 2", time: "10:40 - 11:25" },
        { order: 5, subject: "Geografiya", teacher: "N. Saidova", room: "305-xona", time: "11:35 - 12:20" },
        { order: 6, subject: "Tarbiya", teacher: "G. Karimova", room: "205-xona", time: "12:25 - 13:05" },
      ]
    },
    {
      day: "Payshanba",
      lessons: [
        { order: 1, subject: "Geometriya", teacher: "A. Yuldashev", room: "108-xona", time: "08:00 - 08:45" },
        { order: 2, subject: "Jahon tarixi", teacher: "M. Qodirov", room: "102-xona", time: "08:50 - 09:35" },
        { order: 3, subject: "Informatika", teacher: "B. Ergashev", room: "IT Lab 1", time: "09:45 - 10:30" },
        { order: 4, subject: "Ona tili", teacher: "G. Karimova", room: "205-xona", time: "10:40 - 11:25" },
        { order: 5, subject: "Jismoniy tarbiya", teacher: "J. Mirzayev", room: "Sport zal", time: "11:35 - 12:20" },
      ]
    },
    {
      day: "Juma",
      lessons: [
        { order: 1, subject: "Ingliz tili", teacher: "J. Smith", room: "312-xona", time: "08:00 - 08:45" },
        { order: 2, subject: "Biologiya", teacher: "D. Normatova", room: "Bio Lab", time: "08:50 - 09:35" },
        { order: 3, subject: "Algebra", teacher: "A. Yuldashev", room: "108-xona", time: "09:45 - 10:30" },
        { order: 4, subject: "Fizika", teacher: "R. Mavlonov", room: "201-xona", time: "10:40 - 11:25" },
        { order: 5, subject: "Adabiyot", teacher: "G. Karimova", room: "205-xona", time: "11:35 - 12:20" },
      ]
    },
    {
      day: "Shanba",
      lessons: [
        { order: 1, subject: "Huquq asoslari", teacher: "M. Qodirov", room: "102-xona", time: "08:00 - 08:45" },
        { order: 2, subject: "Sinf soati", teacher: "Sinf rahbari", room: "108-xona", time: "08:50 - 09:35" },
        { order: 3, subject: "Texnologiya & IT", teacher: "B. Ergashev", room: "STEAM Lab", time: "09:45 - 10:30" },
        { order: 4, subject: "Sport mashg'uloti", teacher: "J. Mirzayev", room: "Stadion", time: "10:40 - 11:25" },
      ]
    }
  ],
  "10-B": [
    {
      day: "Dushanba",
      lessons: [
        { order: 1, subject: "Fizika (Chuqurlashtirilgan)", teacher: "R. Mavlonov", room: "201-xona", time: "08:00 - 08:45" },
        { order: 2, subject: "Oliy Matematika elementlari", teacher: "A. Yuldashev", room: "108-xona", time: "08:50 - 09:35" },
        { order: 3, subject: "Ingliz tili (IELTS prep)", teacher: "J. Smith", room: "312-xona", time: "09:45 - 10:30" },
        { order: 4, subject: "Dasturlash (Python)", teacher: "B. Ergashev", room: "IT Lab 1", time: "10:40 - 11:25" },
        { order: 5, subject: "Kimyo amaliyot", teacher: "D. Normatova", room: "Lab 2", time: "11:35 - 12:20" },
      ]
    },
    {
      day: "Seshanba",
      lessons: [
        { order: 1, subject: "Matematika", teacher: "A. Yuldashev", room: "108-xona", time: "08:00 - 08:45" },
        { order: 2, subject: "Ona tili va adabiyot", teacher: "G. Karimova", room: "205-xona", time: "08:50 - 09:35" },
        { order: 3, subject: "Tarix", teacher: "M. Qodirov", room: "102-xona", time: "09:45 - 10:30" },
        { order: 4, subject: "Biologiya", teacher: "D. Normatova", room: "Bio Lab", time: "10:40 - 11:25" },
        { order: 5, subject: "Jismoniy tarbiya", teacher: "J. Mirzayev", room: "Sport zal", time: "11:35 - 12:20" },
      ]
    }
  ]
};

export const BELL_SCHEDULE = [
  { lesson: "1-dars", time: "08:00 – 08:45", breakTime: "5 daqiqa tanaffus" },
  { lesson: "2-dars", time: "08:50 – 09:35", breakTime: "10 daqiqa katta tanaffus (Nonushta)" },
  { lesson: "3-dars", time: "09:45 – 10:30", breakTime: "10 daqiqa tanaffus" },
  { lesson: "4-dars", time: "10:40 – 11:25", breakTime: "10 daqiqa tanaffus" },
  { lesson: "5-dars", time: "11:35 – 12:20", breakTime: "5 daqiqa tanaffus" },
  { lesson: "6-dars", time: "12:25 – 13:05", breakTime: "Smenalar almashinuvi" },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "a-1",
    year: "2025/2026",
    studentName: "Saidov Jasurbek",
    grade: "11-A sinf",
    competition: "Xalqaro Al-Xorazmiy Matematika Olimpiadasi",
    level: "Xalqaro",
    place: "Kumush medal",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40"
  },
  {
    id: "a-2",
    year: "2025/2026",
    studentName: "Qosimova Madinabonu",
    grade: "10-B sinf",
    competition: "IELTS Imtihoni 8.0 ball",
    level: "Xalqaro",
    place: "Xalqaro Sertifikat",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40"
  },
  {
    id: "a-3",
    year: "2025",
    studentName: "Toshpo'latov Samandar",
    grade: "9-A sinf",
    competition: "Respublika Yosh Dasturchilar Hakatoni",
    level: "Respublika",
    place: "1-o'rin (Oltin kubok)",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
  },
  {
    id: "a-4",
    year: "2025",
    studentName: "Azimova Nilufar",
    grade: "11-B sinf",
    competition: "Zulfiya nomidagi davlat mukofoti hududiy bosqichi",
    level: "Shahar",
    place: "G'oliba",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Maktabimizning zamonaviy bosh binosi",
    category: "bino",
    categoryLabel: "Maktab binosi",
    imageUrl: "/src/assets/images/school_building_exterior_1791125440317.jpg",
    description: "Keng hovli, zamonaviy me'moriy ko'rinish va o'quvchilar xavfsizligi uchun maxsus turniket tizimi."
  },
  {
    id: "g-2",
    title: "STEAM va Robototexnika ilmiy laboratoriyasi",
    category: "laboratoriya",
    categoryLabel: "Laboratoriyalar",
    imageUrl: "/src/assets/images/school_stem_lab_1791125458486.jpg",
    description: "Zamonaviy noutbuklar, interaktiv aqlli doskalar va konstruktorlik stendlari."
  },
  {
    id: "g-3",
    title: "Axborot-resurs markazi va elektron kutubxona",
    category: "kutubxona",
    categoryLabel: "Kutubxona",
    imageUrl: "/src/assets/images/school_library_hall_1791125489002.jpg",
    description: "25 000 dan ortiq badiiy va ilmiy kitoblar fondi, tinch mutolaa zallari va planshet stendlari."
  },
  {
    id: "g-4",
    title: "Maktab direktori qabulxonasi va metodik xona",
    category: "bino",
    categoryLabel: "Ma'muriyat",
    imageUrl: "/src/assets/images/school_director_portrait_1791125475071.jpg",
    description: "Ota-onalar va o'quvchilarni muntazam qabul qilish va pedagogik konsultatsiya markazi."
  }
];

export const ADMISSION_REQUIREMENTS: AdmissionRequirement[] = [
  {
    id: 1,
    title: "Elektron ariza (my.maktab.uz)",
    description: "Maktabgacha va maktab ta'limi vazirligining rasmiy elektron portali orqali 1-sinfga ro'yxatdan o'tish."
  },
  {
    id: 2,
    title: "Bolaning tug'ilganlik guvohnomasi",
    description: "Asl nusxasi va 2 dona nusxasi (notarial tasdiqlash talab etilmaydi)."
  },
  {
    id: 3,
    title: "Ota-ona pasport (ID-karta) nusxalari",
    description: "Ota-onaning doimiy ro'yxatda turgan joyi bo'yicha propiska ma'lumotlari bilan."
  },
  {
    id: 4,
    title: "Tibbiy ma'lumotnomalar (026/u va 063 shakllar)",
    description: "Emlash kartasi va oilaviy poliklinikadan olingan umumiy salomatlik xulosasi."
  },
  {
    id: 5,
    title: "3x4 hajmdagi fotosurat",
    description: "Oq fonda, oxirgi 3 oy ichida olingan 4 dona sifatli fotosurat."
  }
];

export const FAQ_ITEMS = [
  {
    q: "21-maktabda darslar qaysi tilda olib boriladi?",
    a: "Maktabimizda o'quv jarayoni o'zbek va rus tillarida olib boriladi. Yuqori sinflarda aniq fanlar va chet tillari chuqurlashtirilgan tartibda o'qitiladi."
  },
  {
    q: "Qo'shimcha to'garaklar pullikmi yoki bepulmi?",
    a: "Maktabimizdagi fan olimpiadalari, IT to'garaklari va sport seksiyalari maktab o'quvchilari uchun mutlaqo bepul amalga oshiriladi."
  },
  {
    q: "Boshqa maktabdan ko'chirish (perevod) tartibi qanday?",
    a: "Boshqa maktabdan ko'chirish bo'sh o'rinlar mavjud bo'lganda, my.maktab.uz portali yoki maktab ma'muriyatiga ariza berish orqali amalga oshiriladi."
  },
  {
    q: "Maktab xavfsizligi qanday ta'minlangan?",
    a: "Maktab hududi 24/7 video-kuzatuv kamerasi, Milliy gvardiya qo'riqlash posti va yuzni tanuvchi (Face ID) elektron turniketlar bilan jihozlangan."
  }
];
