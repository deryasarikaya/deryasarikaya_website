import type { Language } from './types';

export interface CvEntry {
  title: string;
  organization?: string;
  period: string;
  location?: string;
  points: string[];
}

export interface CvData {
  lang: Language;
  profile: string;
  labels: Record<string, string>;
  skills: { title: string; items: string[] }[];
  education: CvEntry[];
  projects: CvEntry[];
  experience: CvEntry[];
  earlyExperience: CvEntry[];
  languages: string[];
}
