import { Project, SkillData, SocialLink, Education, Certificate, Experience, LocalizedString } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/muhammedsafatur', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://tr.linkedin.com/in/muhammed-safa-tur', icon: 'Linkedin' },
  { platform: 'Email', url: 'mailto:msafatur@outlook.com', icon: 'Mail' },
];

export const UI_LABELS: Record<string, LocalizedString> = {
  role: {
    en: "Full-Stack Software Engineer",
    tr: "Full-Stack Yazılım Mühendisi"
  },
  bio_short: {
    en: "Building scalable web applications with .NET Core, Angular, and React. Passionate about clean architecture and efficient database management.",
    tr: ".NET Core, Angular ve React ile ölçeklenebilir web uygulamaları geliştiriyorum. Temiz mimari ve verimli veritabanı yönetimi konusunda tutkulu bir mühendisim."
  },
  about_title: { en: "About", tr: "Hakkımda" },
  experience_title: { en: "Experience", tr: "Deneyim" },
  education_title: { en: "Education", tr: "Eğitim" },
  portfolio_title: { en: "Portfolio", tr: "Portfolyo" },
  academic_history: { en: "Academic History", tr: "Akademik Geçmiş" },
  certificates: { en: "Certificates", tr: "Sertifikalar" },
  view_project: { en: "View Project", tr: "Projeyi İncele" }
};

export const BIO_TEXT: LocalizedString[] = [
  {
    en: "I am a Computer Engineering graduate from Bartın University (2024) with a passion for building robust full-stack applications. During my intensive training at REA Teknoloji and TechCareer, I developed a strong foundation in the .NET Ecosystem, Angular, and React.",
    tr: "Bartın Üniversitesi (2024) Bilgisayar Mühendisliği mezunu, sağlam full-stack uygulamalar geliştirme tutkusu olan bir mühendisim. REA Teknoloji ve TechCareer'daki yoğun eğitimlerim sırasında .NET Ekosistemi, Angular ve React konularında sağlam bir temel oluşturdum."
  },
  {
    en: "My experience ranges from developing AI-based image processing projects at Pendik Municipality to building complex layered web applications like animal adoption platforms using PostgreSQL and Entity Framework. I thrive in team environments, using tools like Jira and Git to collaborate effectively.",
    tr: "Pendik Belediyesi'nde AI tabanlı görüntü işleme projeleri geliştirmekten, PostgreSQL ve Entity Framework kullanarak hayvan sahiplendirme platformları gibi karmaşık katmanlı web uygulamaları oluşturmaya kadar geniş bir deneyim yelpazesine sahibim. Jira ve Git gibi araçları kullanarak takım çalışmalarında etkin rol alırım."
  },
  {
    en: "Currently, I am focused on mastering modern web technologies, delivering clean code, and solving real-world problems through software.",
    tr: "Şu anda modern web teknolojilerinde ustalaşmaya, temiz kod (clean code) prensiplerine uygun üretim yapmaya ve yazılım aracılığıyla gerçek dünya problemlerini çözmeye odaklanmış durumdayım."
  }
];

export const PROJECTS: Project[] = [
  {
    id: '8',
    title: 'StockMaster Pro - Hybrid ERP & POS',
    description: {
      en: 'A hybrid architecture ERP & POS system built with Electron and React. Features offline-first capabilities with Firebase sync, a "Visual Planogram" using HTML5 Canvas, dynamic variant matrix, and an NLP-like query engine for financial analytics.',
      tr: 'Electron ve React ile geliştirilmiş hibrit mimari ERP & POS sistemi. Firebase senkronizasyonlu Offline-First çalışma, HTML5 Canvas ile "Görsel Planogram", dinamik varyant matrisi ve finansal analizler için NLP benzeri sorgu motoru özelliklerine sahiptir.'
    },
    technologies: ['Electron', 'React', 'Firebase', 'TypeScript', 'Recharts'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    link: '#',
    github: 'https://github.com/muhammedsafatur'
  },
  {
    id: '7',
    title: 'Armesa Home E-Commerce',
    description: {
      en: 'Serverless e-commerce platform built with React, TypeScript, and Firebase. Features real-time data flow, dynamic theme engine (Tailwind), and WhatsApp order integration.',
      tr: 'React, TypeScript ve Firebase ile geliştirilmiş sunucusuz (serverless) e-ticaret platformu. Gerçek zamanlı veri akışı, dinamik tema motoru (Tailwind) ve WhatsApp sipariş entegrasyonu içerir.'
    },
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind', 'Serverless'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
    link: '#',
    github: 'https://github.com/muhammedsafatur'
  },
  {
    id: '1',
    title: { en: 'Animal Adoption (Petship)', tr: 'Hayvan Sahiplendirme (Petship)' },
    description: {
      en: 'A platform digitalizing animal adoption. Features a .NET 7 backend with PostgreSQL/JWT and a scalable Angular frontend.',
      tr: 'Hayvan sahiplendirmeyi dijitalleştiren platform. PostgreSQL/JWT tabanlı .NET 7 backend ve ölçeklenebilir Angular frontend içerir.'
    },
    technologies: ['.NET 7', 'Angular', 'PostgreSQL', 'EF Core'],
    imageUrl: 'https://images.unsplash.com/photo-1450778865369-0994ca87d588?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/muhammedsafatur',
    github: 'https://github.com/muhammedsafatur'
  },
  {
    id: '2',
    title: 'Hospital App API',
    description: {
      en: 'Layered architecture API for booking appointments. Includes Swagger docs, AutoMapper, and FluentValidation.',
      tr: 'Randevu işlemleri için katmanlı mimari API. Swagger dokümantasyonu, AutoMapper ve FluentValidation içerir.'
    },
    technologies: ['ASP.NET API', 'MSSQL', 'AutoMapper'],
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/muhammedsafatur',
    github: 'https://github.com/muhammedsafatur'
  },
  {
    id: '3',
    title: 'StoreManagement API',
    description: {
      en: 'Inventory simulation using .NET 8. Handles product tracking, sales, and customer data optimization.',
      tr: '.NET 8 kullanılarak geliştirilen envanter simülasyonu. Ürün takibi, satış ve müşteri verisi optimizasyonunu yönetir.'
    },
    technologies: ['.NET 8', 'SQL Server', 'EF Core'],
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/muhammedsafatur',
    github: 'https://github.com/muhammedsafatur'
  },
  {
    id: '4',
    title: 'Mobile Health & Games',
    description: {
      en: '"Sağlıklı Yaşama Merhaba" (Kotlin/Firebase) and "Simple Games" (Retro gaming platform).',
      tr: '"Sağlıklı Yaşama Merhaba" (Kotlin/Firebase) ve "Simple Games" (Retro oyun platformu) mobil uygulamaları.'
    },
    technologies: ['Kotlin', 'Firebase', 'Mobile'],
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/muhammedsafatur',
    github: 'https://github.com/muhammedsafatur'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    date: '05.2023 — 08.2023',
    role: { en: 'Software Intern', tr: 'Yazılım Stajyeri' },
    company: 'REA Technology',
    description: {
      en: 'Developed a team project using Angular, .NET Entity Framework, and PostgreSQL. Used a layered architecture to build a website focused on animal adoption with admin capabilities. Managed tasks via Jira.',
      tr: 'Angular, .NET Entity Framework ve PostgreSQL kullanarak bir takım projesi geliştirdim. Hayvan sahiplendirme odaklı, admin paneli olan, katmanlı mimariye sahip bir web sitesi inşa ettim. Görev yönetimini Jira üzerinden sağladım.'
    },
    technologies: ['Angular', '.NET', 'PostgreSQL', 'Jira'],
    link: '#'
  },
  {
    id: '2',
    date: '02.2022 — 06.2022',
    role: { en: 'Long Term Intern', tr: 'Uzun Dönem Stajyer' },
    company: 'Pendik Municipality',
    description: {
      en: 'Participated in an AI-based image processing project within the Software Services Department. Developed dynamic web applications using .NET MVC and gained experience in the full software development lifecycle.',
      tr: 'Yazılım İşleri Müdürlüğü bünyesinde AI tabanlı görüntü işleme projesinde yer aldım. .NET MVC kullanarak dinamik web uygulamaları geliştirdim ve yazılım geliştirme yaşam döngüsü (SDLC) konusunda deneyim kazandım.'
    },
    technologies: ['.NET MVC', 'AI', 'Image Processing'],
    link: '#'
  }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    school: { en: 'Bartın University', tr: 'Bartın Üniversitesi' },
    department: { en: 'Computer Engineering (Bachelor)', tr: 'Bilgisayar Mühendisliği (Lisans)' },
    date: '09.2018 — 01.2024'
  },
  {
    id: '2',
    school: { en: 'TechCareer', tr: 'TechCareer' },
    department: { en: '480-Hour Full Stack .NET Bootcamp', tr: '480 Saatlik Full Stack .NET Bootcamp' },
    date: '09.2024 — 12.2024'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    name: { en: 'Full-Stack Developer Training', tr: 'Full-Stack Geliştirici Eğitimi' },
    institution: 'REA Teknoloji',
    date: '08.2023',
    description: {
      en: 'Deep expertise in Angular and .NET ecosystems with Agile/Jira.',
      tr: 'Agile/Jira ile Angular ve .NET ekosistemlerinde derinlemesine uzmanlık.'
    }
  },
  {
    id: '2',
    name: { en: 'Cyber Security & InfoSec', tr: 'Siber Güvenlik & Bilgi Güvenliği' },
    institution: 'BUYİNOVA',
    date: '04.2019'
  }
];

export const SKILLS: SkillData[] = [
  { subject: '.NET Core / C#', A: 95, fullMark: 100 },
  { subject: 'Angular', A: 90, fullMark: 100 },
  { subject: 'React', A: 85, fullMark: 100 },
  { subject: 'SQL (Postgre/MSSQL)', A: 90, fullMark: 100 },
  { subject: 'Kotlin / Mobile', A: 80, fullMark: 100 },
  { subject: 'Git & JIRA', A: 95, fullMark: 100 },
];