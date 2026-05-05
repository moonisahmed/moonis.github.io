export interface Personal {
  name: string;
  title: string;
  titleDisplay: string[];
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
  startDate: string;
  endDate: string;
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

// Runtime validation helper
export function validatePortfolioData(data: unknown): data is PortfolioData {
  if (typeof data !== 'object' || data === null) return false;

  const d = data as Record<string, unknown>;

  // Check required top-level keys
  if (!d.personal || !d.contact || !d.about || !d.skills || !d.work) {
    return false;
  }

  // Check personal fields
  const personal = d.personal as Record<string, unknown>;
  if (
    typeof personal.name !== 'string' ||
    typeof personal.title !== 'string' ||
    !Array.isArray(personal.titleDisplay) ||
    typeof personal.location !== 'string'
  ) {
    return false;
  }

  // Check contact fields
  const contact = d.contact as Record<string, unknown>;
  if (
    typeof contact.email !== 'string' ||
    typeof contact.linkedin !== 'string' ||
    typeof contact.github !== 'string'
  ) {
    return false;
  }

  // Check work is array
  if (!Array.isArray(d.work)) {
    return false;
  }

  return true;
}
