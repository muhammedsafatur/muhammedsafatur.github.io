import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  GraduationCap,
  Award,
  Globe,
  X,
  ExternalLink
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
import { Language, LocalizedString, Project } from './types';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lang, setLang] = useState<Language>('tr'); // Default to Turkish
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
      {/* Spotlight Gradient Background (Bright Indigo Glow on Light Slate BG) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.08), transparent 80%)`
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 text-slate-900">
        <div className="lg:flex lg:justify-between lg:gap-4">

          {/* LEFT COLUMN - Sticky Header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <div className="flex justify-between items-start">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  <a href="/">Muhammed Safa Tur</a>
                </h1>

                {/* Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary/50 transition-all text-sm font-medium shadow-sm"
                >
                  <Globe size={16} />
                  <span>{lang.toUpperCase()}</span>
                </button>
              </div>

              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-800 sm:text-xl">
                {label('role')}
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-600">
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
                        className={`group flex items-center py-3 active focus:outline-none transition-all ${activeSection === item.id ? 'text-primary' : 'text-slate-400 hover:text-slate-900'
                          }`}
                      >
                        <span className={`mr-4 h-px w-8 transition-all ${activeSection === item.id ? 'bg-primary w-16' : 'bg-slate-300 group-hover:bg-slate-900 group-hover:w-12'
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
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800">{label('about_title')}</h2>
              </div>
              <div className="text-slate-600 leading-relaxed space-y-4">
                {BIO_TEXT.map((paragraph, index) => (
                  <p key={index}>{t(paragraph)}</p>
                ))}

                {/* Skill Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {SKILLS.map(skill => (
                    <span key={skill.subject} className="flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium leading-5 text-indigo-600 border border-indigo-100">
                      {skill.subject}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800">{label('experience_title')}</h2>
              </div>
              <ol className="group/list">
                {EXPERIENCE.map((job) => (
                  <li key={job.id} className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2">
                        {job.date}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-900">
                          <span className="text-base font-semibold">
                            {t(job.role)} · <span className="inline-block">{job.company}</span>
                          </span>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-600">
                          {t(job.description)}
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          {job.technologies.map(tech => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium leading-5 text-indigo-600 border border-indigo-100">
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
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800">{label('education_title')}</h2>
              </div>

              <div className="space-y-12">
                {/* Education List */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-medium text-slate-900 mb-6">
                    <GraduationCap className="text-indigo-500" size={20} />
                    {label('academic_history')}
                  </h3>
                  <ul className="space-y-6">
                    {EDUCATION.map((edu) => (
                      <li key={edu.id} className="relative pl-6 border-l border-slate-200">
                        <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-slate-100 border border-slate-300"></span>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                          <h4 className="text-base font-medium text-slate-900">{t(edu.school)}</h4>
                          <span className="text-xs font-medium uppercase tracking-wide text-slate-400">{edu.date}</span>
                        </div>
                        <p className="text-sm text-slate-600 mt-1">{t(edu.department)}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certificates List */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-medium text-slate-900 mb-6">
                    <Award className="text-indigo-500" size={20} />
                    {label('certificates')}
                  </h3>
                  <ul className="grid gap-4 sm:grid-cols-1">
                    {CERTIFICATES.map((cert) => (
                      <li key={cert.id} className="bg-white p-4 rounded-lg border border-slate-200 hover:border-indigo-500/30 transition-colors group shadow-sm">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-slate-900 font-medium text-sm group-hover:text-primary transition-colors">{t(cert.name)}</h4>
                          <span className="text-xs text-slate-400 whitespace-nowrap ml-2">{cert.date}</span>
                        </div>
                        <p className="text-xs text-indigo-600 mb-2">{cert.institution}</p>
                        {cert.description && <p className="text-xs text-slate-500 leading-relaxed">{t(cert.description)}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>


            {/* PORTFOLIO AREA (Grid Layout) */}
            <section id="portfolio" className="mb-24 lg:mb-36">
              <div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800">{label('portfolio_title')}</h2>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PROJECTS.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group relative bg-white rounded-xl border border-slate-200 overflow-hidden hover:bg-slate-50 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(99,102,241,0.2)] text-left w-full"
                  >
                    {/* Image Area */}
                    <div className="h-32 w-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                      <img
                        src={project.imageUrl}
                        alt={t(project.title)}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Content Area */}
                    <div className="p-5">
                      <h3 className="text-slate-900 font-semibold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                        {t(project.title)}
                        <ArrowUpRight size={14} className="text-slate-400 group-hover:text-primary transition-colors" />
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
                        {t(project.description)}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="px-2 py-1 text-[10px] font-medium rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-slate-100 text-slate-500">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>

          <div className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all border border-slate-200">
            {/* Modal Header/Image */}
            <div className="relative h-48 sm:h-64 overflow-hidden">
              <img
                src={selectedProject.imageUrl}
                alt={t(selectedProject.title)}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-slate-900 shadow-lg transition-all z-20"
              >
                <X size={20} />
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {t(selectedProject.title)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(tech => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="prose prose-slate prose-sm max-w-none text-slate-600 leading-relaxed mb-8">
                <p>{t(selectedProject.description)}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {selectedProject.link && selectedProject.link !== '#' && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primaryHover transition-all shadow-md shadow-indigo-200"
                  >
                    <ExternalLink size={18} />
                    <span>{label('view_project')}</span>
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-all border border-slate-200"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;