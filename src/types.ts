export interface Project {
  id: string;
  title: string;
  tagline: string;
  tech: string[];
  summary: string;
  bullets: string[];
  overview: string;
  problem: string;
  approach: string;
  features: string[];
  outcomes: string[];
  challenges: string[];
  futureScope: string[];
  githubLink?: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number;
  details: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  metrics: { label: string; value: string }[];
  bullets: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  iconType: 'medal' | 'badge' | 'trophy' | 'academic';
}
