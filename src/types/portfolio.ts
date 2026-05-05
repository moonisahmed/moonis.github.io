export interface Personal {
  name: string;
  title: string;
  location: string;
  tagline: string;
  availability: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface WorkExperience {
  title: string;
  period: string;
  company: string;
  location: string;
  description: string;
  bullets: string[];
  stack: string[];
}

export interface About {
  bio: string[];
  stats: Stat[];
}

export interface PortfolioData {
  personal: Personal;
  contact: Contact;
  about: About;
  skills: SkillGroup[];
  work: WorkExperience[];
}
