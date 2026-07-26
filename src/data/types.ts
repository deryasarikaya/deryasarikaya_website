export type Language = 'de' | 'en';
export type RouteKey =
  | 'home'
  | 'about'
  | 'projects'
  | 'projectAiStartMap'
  | 'projectKompass'
  | 'projectMoviWebApp'
  | 'cv'
  | 'contact'
  | 'legal'
  | 'privacy';

export interface NavigationItem {
  key: RouteKey;
  label: string;
}

export interface ExpertiseItem {
  number: string;
  title: string;
  body: string;
}

export interface SiteCopy {
  lang: Language;
  locale: string;
  nav: NavigationItem[];
  hero: {
    role: string;
    headlineStart: string;
    headlineAccent: string;
    headlineEnd: string;
    intro: string[];
    projectsCta: string;
    cvCta: string;
    statement: string;
    imageAlt: string;
    terminalLabel: string;
    terminalOutput: string;
  };
  expertise: ExpertiseItem[];
  home: {
    aboutEyebrow: string;
    aboutTitle: string;
    aboutIntro: string;
    aboutBody: string;
    aboutLink: string;
    projectsEyebrow: string;
    projectsTitle: string;
    projectsIntro: string;
    projectsLink: string;
    guideEyebrow: string;
    guideTitle: string;
    guideBody: string;
    guideButton: string;
    cvEyebrow: string;
    cvTitle: string;
    cvBody: string;
    contactTitle: string;
    contactBody: string;
    contactCta: string;
  };
  common: {
    skip: string;
    menuOpen: string;
    menuClose: string;
    readCase: string;
    repository: string;
    liveDemo: string;
    allProjects: string;
    backTop: string;
    draft: string;
    externalLink: string;
  };
}
