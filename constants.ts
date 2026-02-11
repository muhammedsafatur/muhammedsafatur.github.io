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
    en: "Building scalable web applications with .NET Core, and React. Passionate about clean architecture and efficient database management.",
    tr: ".NET Core ve React ile ölçeklenebilir web uygulamaları geliştiriyorum. Temiz mimari ve verimli veritabanı yönetimi konusunda tutkulu bir mühendisim."
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
    en: "I am a Computer Engineering graduate from Bartın University (2024). I recently worked on AI-based image processing at Pendik Municipality and building scalable web applications with .NET and React. I am dynamic, prone to teamwork, and love sharing knowledge with my colleagues.",
    tr: "Bartın Üniversitesi (2024) Bilgisayar Mühendisliği mezunuyum. Pendik Belediyesi'nde yapay zekaya dayalı görüntü işleme projelerinde yer aldım. Takım çalışmasına yatkın, azimli ve öğrendiği bilgileri paylaşmayı seven bir mühendisim."
  },
  {
    en: "I am focused on modern web technologies and full-stack development. I have basic familiarity with mobile development (Kotlin), but my core expertise and passion lie in building robust backend systems and dynamic web interfaces.",
    tr: "Modern web teknolojileri ve full-stack geliştirme üzerine odaklanmış durumdayım. Mobil geliştirme (Kotlin) tarafında temel düzeyde aşinalığım olsa da, asıl uzmanlığım ve tutkum sağlam backend sistemleri ve dinamik web arayüzleri inşa etmek üzerinedir."
  }
];

export const PROJECTS: Project[] = [
  {
    id: '8',
    title: 'StockMaster Pro - Hybrid ERP & POS',
    description: {
      en: 'A high-performance hybrid ERP & POS system architected with Clean Architecture principles. Engineered a custom sync engine with Firebase for true offline-first reliability. Features a high-speed "Visual Planogram" via HTML5 Canvas and an NLP-inspired query parser for real-time financial business intelligence.',
      tr: 'Clean Architecture prensipleriyle tasarlanmış, yüksek performanslı hibrit ERP & POS sistemi. Firebase ile gerçek zamanlı offline-first senkronizasyon motoru geliştirildi. HTML5 Canvas tabanlı hızlı "Görsel Planogram" ve finansal analizler için NLP ilhamlı sorgu motoru içermektedir.'
    },
    technologies: ['Electron', 'React', 'Firebase', 'TypeScript', 'Clean Architecture', 'Canvas API'],
    imageUrl: '/stockmaster.png',
    link: 'https://stockmasterdesktopapp.netlify.app/',
    github: 'https://github.com/muhammedsafatur'
  },
  {
    id: '7',
    title: 'Armesa Home E-Commerce',
    description: {
      en: 'Serverless e-commerce ecosystem built for scale using React and Firebase. Optimized for conversion with a dynamic theme engine and seamless WhatsApp checkout integration. Implemented real-time inventory management and atomic transaction handling.',
      tr: 'React ve Firebase kullanılarak ölçeklenebilir şekilde geliştirilmiş sunucusuz (serverless) e-ticaret ekosistemi. Dinamik tema motoru ve WhatsApp sipariş entegrasyonu ile dönüşüm odaklı optimize edildi. Gerçek zamanlı stok yönetimi ve atomik işlem yönetimi uygulandı.'
    },
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind', 'Serverless Architecture'],
    imageUrl: '/armesa.png',
    link: 'https://armesa.netlify.app/',
    github: 'https://github.com/muhammedsafatur'
  },
  {
    id: '1',
    title: { en: 'Animal Adoption (Petship)', tr: 'Hayvan Sahiplendirme (Petship)' },
    description: {
      en: 'A full-stack digitalization platform for animal welfare. Architected with a .NET Core N-Layered Backend and PostgreSQL. Implemented secure JWT-based authentication and a scalable Angular frontend with optimized state management.',
      tr: 'Hayvan refahı için geliştirilmiş full-stack dijitalleşme platformu. .NET Core N-Layered mimari ve PostgreSQL ile tasarlandı. Güvenli JWT tabanlı yetkilendirme ve optimize edilmiş state yönetimine sahip ölçeklenebilir Angular frontend uygulandı.'
    },
    technologies: ['.NET Core', 'Angular', 'PostgreSQL', 'Entity Framework', 'JWT'],
    imageUrl: '/petship.png',
    link: 'https://github.com/aylinayduvan1/petship-frontend',
    github: 'https://github.com/muhammedsafatur'
  },
  {
    id: '2',
    title: 'Healthcare Appointment API',
    description: {
      en: 'Robust enterprise-level API for medical scheduling. Adheres to SOLID principles with a decoupled architecture. Leveraged AutoMapper for DTO mapping and FluentValidation for complex business rule enforcement.',
      tr: 'Randevu sistemleri için geliştirilmiş kurumsal düzeyde API. SOLID prensiplerine uygun, katmanlı bir mimari ile tasarlandı. DTO yönetimi için AutoMapper ve karmaşık iş kuralları için FluentValidation kullanıldı.'
    },
    technologies: ['ASP.NET Web API', 'MSSQL', 'AutoMapper', 'FluentValidation', 'SOLID'],
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/muhammedsafatur',
    github: 'https://github.com/muhammedsafatur'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '0',
    date: '04.2025 — Present',
    role: { en: 'IT Specialist', tr: 'Bilgi İşlem Sorumlusu' },
    company: 'Akçağ Tekstil',
    description: {
      en: 'Leading IT infrastructure modernization and technical ecosystem management. Focusing on optimizing system reliability, network security, and streamlining digital workflows to enhance organizational efficiency.',
      tr: 'Bilgi işlem altyapısının modernizasyonu ve teknik ekosistem yönetimine liderlik ediyorum. Sistem güvenilirliğini, ağ güvenliğini optimize etmeye ve kurumsal verimliliği artırmak için dijital iş akışlarını iyileştirmeye odaklanıyorum.'
    },
    technologies: ['Network Security', 'System Optimization', 'IT Infrastructure'],
  },
  {
    id: '1',
    date: '11.2024 — 12.2024',
    role: { en: 'Full Stack .NET Developer Intern', tr: 'Full Stack .NET Geliştirici Stajyeri' },
    company: 'Techcareer.net',
    description: {
      en: 'Participated in an intensive bootcamp focused on enterprise-grade .NET and React development. Mastered Clean Architecture, Repository Patterns, and optimized database design through hands-on project delivery.',
      tr: 'Kurumsal düzeyde .NET ve React geliştirmeye odaklanan yoğun bir bootcamp\'e katıldım. Uygulamalı projeler aracılığıyla Clean Architecture, Repository Pattern ve optimize edilmiş veritabanı tasarımı konularında uzmanlaştım.'
    },
    technologies: ['.NET Core', 'React', 'Entity Framework', 'Clean Architecture'],
  },
  {
    id: '2',
    date: '02.2022 — 06.2022',
    role: { en: 'Software Engineer Intern', tr: 'Yazılım Mühendisi Stajyeri' },
    company: 'Pendik Municipality',
    description: {
      en: 'Contributed to AI-driven image processing initiatives. Engineered dynamic web modules with .NET MVC and integrated intelligent processing units into existing municipal digital services.',
      tr: 'Yapay zeka odaklı görüntü işleme girişimlerine katkıda bulundum. .NET MVC ile dinamik web modülleri geliştirdim ve akıllı işleme birimlerini mevcut belediye dijital hizmetlerine entegre ettim.'
    },
    technologies: ['.NET MVC', 'AI Integration', 'Image Processing'],
  }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    school: { en: 'Bartın University', tr: 'Bartın Üniversitesi' },
    department: { en: 'Computer Engineering (Bachelor)', tr: 'Bilgisayar Mühendisliği (Lisans)' },
    date: '09.2018 — 01.2024'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: '1',
    name: { en: 'REA Academy Full-Stack Developer', tr: 'REA Academy Full-Stack Geliştirici' },
    institution: 'REA Teknoloji',
    date: '08.2023'
  },
  {
    id: '3',
    name: { en: '480-Hour Full Stack .NET & React Bootcamp', tr: '480 Saatlik Full Stack .NET & React Bootcamp' },
    institution: 'TechCareer',
    date: '2024'
  }
];

export const SKILLS: SkillData[] = [
  { subject: '.NET Core / C#', A: 95, fullMark: 100 },
  { subject: 'React', A: 90, fullMark: 100 },
  { subject: 'SQL (Postgre/MSSQL)', A: 95, fullMark: 100 },
  { subject: 'Frontend (HTML/CSS)', A: 85, fullMark: 100 },
  { subject: 'Git & JIRA', A: 95, fullMark: 100 },
];