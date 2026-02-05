export type Language = 'en' | 'tr';

export interface LocalizedString {
  en: string;
  tr: string;
}

export interface Project {
  id: string;
  title: string | LocalizedString;
  description: LocalizedString;
  technologies: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface SkillData {
  subject: string;
  A: number; // Proficiency score (0-100)
  fullMark: number;
}

export interface Education {
  id: string;
  school: LocalizedString;
  department: LocalizedString;
  date: string;
}

export interface Certificate {
  id: string;
  name: LocalizedString;
  institution: string;
  date: string;
  description?: LocalizedString;
}

export interface Experience {
  id: string;
  date: string;
  role: LocalizedString;
  company: string;
  description: LocalizedString;
  technologies: string[];
  link: string;
}