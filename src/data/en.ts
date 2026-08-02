import type { SiteCopy } from './types';

export const en: SiteCopy = {
  lang: 'en',
  locale: 'en_US',
  nav: [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'projects', label: 'Projects' },
    { key: 'cv', label: 'CV' },
    { key: 'contact', label: 'Contact' },
  ],
  hero: {
    role: 'AI Solutions Engineer | Technical AI Consultant',
    headlineStart: 'I build',
    headlineAccent: 'intelligent',
    headlineEnd: 'solutions with AI.',
    intro: [
      'Dipl.-Ing. (FH) with 10+ years of engineering experience in the Mercedes-Benz environment.',
      'Today, I build practical AI applications, LLM workflows and backend solutions.',
    ],
    projectsCta: 'View projects',
    cvCta: 'View CV',
    statement: 'Engineer by background. AI builder by curiosity.',
    imageAlt: 'Derya Sarikaya smiling at a laptop beside a coconut in a natural tropical setting.',
    terminalLabel: "Code sample showing Derya's technical focus",
    terminalOutput: 'Useful AI for real workflows.',
  },
  expertise: [
    {
      number: '01',
      title: 'AI Applications',
      body: 'LLMs, RAG, agents and intelligent pipelines for real business applications.',
    },
    {
      number: '02',
      title: 'Backend Development',
      body: 'Python, FastAPI, PostgreSQL and APIs for scalable web applications.',
    },
    {
      number: '03',
      title: 'Process & Systems Thinking',
      body: 'Understanding complex workflows and translating them into technical solutions.',
    },
    {
      number: '04',
      title: 'Technical Consulting',
      body: 'Bridging business and technology and turning requirements into practical implementation.',
    },
  ],
  home: {
    aboutEyebrow: 'About',
    aboutTitle: "Hi, I'm Derya.",
    aboutIntro:
      'Dipl.-Ing. (FH), AI Solutions Engineer and someone who likes to understand how things really work.',
    aboutBody:
      'I combine long-standing engineering experience with modern AI and backend development. Technology is not the destination; it is how I make real workflows clearer, simpler and more useful.',
    aboutLink: 'More about me',
    projectsEyebrow: 'Selected work',
    projectsTitle: 'Three projects. Three perspectives on useful software.',
    projectsIntro:
      'From AI diagnostics and voice-first pattern recognition to a complete backend workflow.',
    projectsLink: 'View all projects',
    guideEyebrow: 'Portfolio Guide',
    guideTitle: 'Do not search. Ask.',
    guideBody:
      'The Portfolio Guide explains projects, compares technical approaches and points you to the most relevant page.',
    guideButton: 'Ask my AI Portfolio Guide',
    cvEyebrow: 'Curriculum vitae',
    cvTitle: 'Engineering experience meets modern AI development.',
    cvBody:
      'More than ten years in engineering and technical consulting in the Mercedes-Benz environment, complemented by current software, backend and AI projects.',
    contactTitle: 'Let’s talk about a real challenge.',
    contactBody:
      'For technical consulting, practical AI applications or a straightforward professional exchange.',
    contactCta: 'Get in touch',
  },
  common: {
    skip: 'Skip to content',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    readCase: 'View case study',
    repository: 'Repository',
    liveDemo: 'Live demo',
    allProjects: 'All projects',
    backTop: 'Back to top',
    draft: 'Draft – not approved for publication',
    externalLink: 'opens in a new tab',
  },
};
