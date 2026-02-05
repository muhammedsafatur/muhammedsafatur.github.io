import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowUpRight,
  GraduationCap,
  Award,
  Globe
} from 'lucide-react';
import { 
  PROJECTS, 
  SOCIAL_LINKS, 
  SKILLS, 
  EDUCATION, 
  CERTIFICATES, 
  EXPERIENCE, 
  UI_LABELS, 
  BIO_TEXT 
} from './constants';
import { Language, LocalizedString } from './types';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lang, setLang] = useState<Language>('tr'); // Default to Turkish

  // Mouse spotlight effect
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'portfolio'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to get localized string
  const t = (content: LocalizedString | string): string => {
    if (typeof content === 'string') return content;
    return content[lang];
  };

  // Helper to get label
  const label = (key: string): string => {
    return UI_LABELS[key][lang];
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'tr' ? 'en' : 'tr');
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Spotlight Gradient Background (Bright Amber Glow on Dark Amber BG) */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.12), transparent 80%)`
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* LEFT COLUMN - Sticky Header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <div className="flex justify-between items-start">
                <h1 className="text-4xl font-bold tracking-tight text-stone-100 sm:text-5xl">
                  <a href="/">Muhammed Safa Tur</a>
                </h1>
                
                {/* Language Toggle */}
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800/50 border border-stone-700 text-stone-300 hover:text-primary hover:border-primary/50 transition-all text-sm font-medium"
                >
                  <Globe size={16} />
                  <span>{lang.toUpperCase()}</span>
                </button>
              </div>

              <h2 className="mt-3 text-lg font-medium tracking-tight text-stone-100 sm:text-xl">
                {label('role')}
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-stone-400">
                {label('bio_short')}
              </p>

              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {[
                    { id: 'about', label: label('about_title') },
                    { id: 'experience', label: label('experience_title') },
                    { id: 'education', label: label('education_title') },
                    { id: 'portfolio', label: label('portfolio_title') }
                  ].map((item) => (
                    <li key={item.id}>
                      <button 
                        onClick={() => scrollTo(item.id)}
                        className={`group flex items-center py-3 active focus:outline-none transition-all ${
                          activeSection === item.id ? 'text-primary' : 'text-stone-500 hover:text-stone-200'
                        }`}
                      >
                        <span className={`mr-4 h-px w-8 transition-all ${
                          activeSection === item.id ? 'bg-primary w-16' : 'bg-stone-600 group-hover:bg-stone-200 group-hover:w-12'
                        }`}></span>
                        <span className="text-xs font-bold uppercase tracking-widest">
                          {item.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon === 'Github' ? Github : link.icon === 'Linkedin' ? Linkedin : link.icon === 'Twitter' ? Twitter : Mail;
                return (
                  <li key={link.platform} className="mr-5 text-xs">
                    <a href={link.url} target="_blank" rel="noreferrer" className="block text-stone-400 hover:text-stone-100 transition-colors">
                      <span className="sr-only">{link.platform}</span>
                      <Icon size={24} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </header>

          {/* RIGHT COLUMN - Scrollable Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            
            {/* ABOUT */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-stone-200">{label('about_title')}</h2>
              </div>
              <div className="text-stone-400 leading-relaxed space-y-4">
                {BIO_TEXT.map((paragraph, index) => (
                  <p key={index}>{t(paragraph)}</p>
                ))}
                
                {/* Skill Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                   {SKILLS.map(skill => (
                      <span key={skill.subject} className="flex items-center rounded-full bg-amber-950/40 px-3 py-1 text-xs font-medium leading-5 text-amber-300 border border-amber-900/50">
                        {skill.subject}
                      </span>
                   ))}
                </div>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-stone-200">{label('experience_title')}</h2>
              </div>
              <ol className="group/list">
                {EXPERIENCE.map((job) => (
                  <li key={job.id} className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-stone-800/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(168,162,158,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-stone-500 sm:col-span-2">
                        {job.date}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-stone-200">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-stone-200 hover:text-primary focus-visible:text-primary group/link text-base" href={job.link} target="_blank" rel="noreferrer">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>{t(job.role)} · <span className="inline-block">{job.company}<ArrowUpRight size={14} className="inline-block ml-1 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"/></span></span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-stone-400">
                           {t(job.description)}
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          {job.technologies.map(tech => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-amber-950/40 px-3 py-1 text-xs font-medium leading-5 text-amber-300 border border-amber-900/50">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

             {/* EDUCATION & CERTIFICATES */}
             <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-stone-200">{label('education_title')}</h2>
              </div>
              
              <div className="space-y-12">
                 {/* Education List */}
                <div>
                   <h3 className="flex items-center gap-2 text-lg font-medium text-stone-200 mb-6">
                      <GraduationCap className="text-amber-500" size={20} />
                      {label('academic_history')}
                   </h3>
                   <ul className="space-y-6">
                      {EDUCATION.map((edu) => (
                         <li key={edu.id} className="relative pl-6 border-l border-stone-800">
                            <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-stone-700 border border-stone-900"></span>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                               <h4 className="text-base font-medium text-stone-200">{t(edu.school)}</h4>
                               <span className="text-xs font-medium uppercase tracking-wide text-stone-500">{edu.date}</span>
                            </div>
                            <p className="text-sm text-stone-400 mt-1">{t(edu.department)}</p>
                         </li>
                      ))}
                   </ul>
                </div>

                {/* Certificates List */}
                <div>
                   <h3 className="flex items-center gap-2 text-lg font-medium text-stone-200 mb-6">
                      <Award className="text-amber-500" size={20} />
                      {label('certificates')}
                   </h3>
                   <ul className="grid gap-4 sm:grid-cols-1">
                      {CERTIFICATES.map((cert) => (
                         <li key={cert.id} className="bg-stone-800/20 p-4 rounded-lg border border-stone-800/50 hover:border-amber-500/30 transition-colors group">
                            <div className="flex justify-between items-start mb-1">
                               <h4 className="text-stone-200 font-medium text-sm group-hover:text-primary transition-colors">{t(cert.name)}</h4>
                               <span className="text-xs text-stone-500 whitespace-nowrap ml-2">{cert.date}</span>
                            </div>
                            <p className="text-xs text-amber-500 mb-2">{cert.institution}</p>
                            {cert.description && <p className="text-xs text-stone-400 leading-relaxed">{t(cert.description)}</p>}
                         </li>
                      ))}
                   </ul>
                </div>
              </div>
            </section>


            {/* PORTFOLIO AREA (Grid Layout) */}
            <section id="portfolio" className="mb-24 lg:mb-36">
              <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-stone-200">{label('portfolio_title')}</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PROJECTS.map((project) => (
                  <div key={project.id} className="group relative bg-stone-800/20 rounded-xl border border-stone-800/50 overflow-hidden hover:bg-stone-800/40 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(217,119,6,0.3)]">
                      {/* Image Area */}
                      <div className="h-32 w-full overflow-hidden relative">
                         <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                         <img 
                            src={project.imageUrl} 
                            alt={t(project.title)} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                         />
                      </div>
                      
                      {/* Content Area */}
                      <div className="p-5">
                        <h3 className="text-stone-200 font-semibold mb-2 flex items-center gap-2">
                           <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                              {t(project.title)}
                           </a>
                           <ArrowUpRight size={14} className="text-stone-500 group-hover:text-primary transition-colors" />
                        </h3>
                        <p className="text-sm text-stone-400 leading-relaxed mb-4 line-clamp-3">
                           {t(project.description)}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                           {project.technologies.slice(0, 3).map(tech => (
                              <span key={tech} className="px-2 py-1 text-[10px] font-medium rounded-full bg-amber-950/40 text-amber-300 border border-amber-900/50">
                                 {tech}
                              </span>
                           ))}
                           {project.technologies.length > 3 && (
                              <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-stone-700 text-stone-400">
                                 +{project.technologies.length - 3}
                              </span>
                           )}
                        </div>
                      </div>
                  </div>
                ))}
              </div>
            </section>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;