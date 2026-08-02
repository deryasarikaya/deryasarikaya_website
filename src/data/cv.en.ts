import type { CvData } from './cv.types';

export const cvEn: CvData = {
  lang: 'en',
  profile:
    'AI Solutions Engineer with hands-on experience in Python, FastAPI, backend development, LLM applications and RAG-based systems, combined with 10+ years of engineering and technical consulting experience within the Mercedes-Benz environment. Strong ability to identify patterns, structure complex technical problems and translate business and stakeholder requirements into practical solutions.',
  labels: {
    profile: 'Profile',
    skills: 'Technical skills',
    education: 'Education',
    projects: 'Projects',
    experience: 'Professional experience',
    early: 'Early engineering experience',
    languages: 'Languages',
    download: 'Download CV as PDF',
  },
  skills: [
    {
      title: 'AI & Software Engineering',
      items: ['RAG systems', 'AI agents & orchestration', 'LLM integration', 'GenAI'],
    },
    {
      title: 'Backend Development',
      items: ['Python', 'FastAPI', 'PostgreSQL', 'REST API architecture', 'Unit testing'],
    },
    {
      title: 'Process & Engineering',
      items: ['Business process optimization', 'Requirements engineering', 'API design'],
    },
    { title: 'DevOps & Tools', items: ['Git', 'GitHub'] },
  ],
  education: [
    {
      title: 'Software Engineering with Specialization in AI Engineering',
      organization: 'Masterschool Institute of Technology',
      period: 'Jan 2026 – Sep 2026',
      location: 'Remote',
      points: [
        'Developed AI and backend applications using Python, FastAPI, Flask, PostgreSQL, REST APIs, SQLAlchemy and Git/GitHub.',
        'Built LLM workflows with the OpenAI API, structured outputs, function calling, RAG and vector search.',
      ],
    },
    {
      title: 'Diplom-Ingenieur (FH), Automotive Engineering',
      organization: 'Hochschule Karlsruhe – University of Applied Sciences',
      period: 'Sep 2004 – Aug 2011',
      location: 'Karlsruhe, Germany',
      points: [
        'Diploma thesis on analysis and optimization of manufacturing processes using Lean Production principles at Kiesling Maschinentechnik GmbH.',
        'Focus areas included automotive systems, production planning and control, quality management, and systems and control engineering.',
      ],
    },
  ],
  projects: [
    {
      title: 'AI Start Map',
      period: 'Jul 2026',
      points: [
        'Web-based AI diagnostic with structured workflow extraction, targeted follow-up questions, RAG and effort-benefit prioritization.',
        'Validated structured outputs and server-side guardrails protect internal knowledge references.',
      ],
    },
    {
      title: 'Kompass',
      period: 'Jul 2026',
      points: [
        'Voice-first system that turns WhatsApp voice notes into longitudinal data across mood, energy, sleep, stress and daily events.',
        'Historical summaries and explainable pattern analysis stay within clear non-diagnostic boundaries.',
      ],
    },
    {
      title: 'MoviWeb',
      period: 'May 2026',
      points: [
        'Full-stack movie collection application with OMDb integration, relational models, CRUD workflows and persistent storage.',
      ],
    },
  ],
  experience: [
    {
      title: 'International Living, Parenting & Professional Realignment',
      period: 'Jan 2021 – Dec 2025',
      location: 'International',
      points: [
        'Provided one-to-one mentoring focused on clarity, decisions and concrete next steps.',
        'Lived in Türkiye, Mexico, Thailand and Indonesia, strengthening cross-cultural communication, adaptability and independence.',
      ],
    },
    {
      title: 'Technical Product Specialist / Technical Consultant – Driver-Assistance Systems',
      organization: 'Mercedes-Benz AG',
      period: 'Oct 2012 – Dec 2020',
      location: 'Sindelfingen, Germany',
      points: [
        'Owned global technical market support and field-performance monitoring for camera and parking-assistance systems across 50+ markets, 14+ model lines and 30+ vehicle generations.',
        'Investigated cross-system field issues spanning software releases, control units, gateways and market-specific conditions.',
        'Coordinated engineering, quality, production, compliance, product-liability and market teams on corrective measures and repair solutions.',
        'Delivered decision-ready analyses, training concepts and workshops for international representatives.',
      ],
    },
    {
      title: 'mindful@Daimler Ambassador (Concurrent Role)',
      organization: 'Mercedes-Benz AG',
      period: 'Jul 2019 – Jun 2020',
      location: 'Stuttgart, Germany',
      points: [
        'Co-developed the company-wide ambassador network and facilitated formats on communication, collaboration and knowledge sharing.',
      ],
    },
    {
      title: 'Account Manager – Engineering Services',
      organization: 'FERCHAU',
      period: 'Nov 2011 – Sep 2012',
      location: 'Stuttgart, Germany',
      points: [
        'Managed Mercedes-Benz as the primary client account and translated technical requirements into proposals and engineering services.',
        'Led up to three engineering professionals across recruitment, deployment planning and development.',
      ],
    },
  ],
  earlyExperience: [
    {
      title: 'Requirements Engineering Intern',
      organization: 'MBtech Group',
      period: 'Apr 2009 – Nov 2009',
      location: 'Sindelfingen, Germany',
      points: [
        'Redesigned a requirements-documentation structure in IBM Rational DOORS that was implemented across several software projects.',
      ],
    },
    {
      title: 'Service Engineering Intern',
      organization: 'Mercedes-Benz USA',
      period: 'Mar 2007 – Aug 2007',
      location: 'Montvale, NJ, USA',
      points: [
        'Developed tracking systems, analysed product-quality and diesel-service trends, and presented findings to management.',
      ],
    },
    {
      title: 'Product Quality & Technical Analysis Intern',
      organization: 'DaimlerChrysler AG',
      period: 'Feb 2006 – Aug 2006',
      location: 'Sindelfingen, Germany',
      points: [
        'Developed a cross-series database matrix and prepared warranty analyses and technical decision documents.',
      ],
    },
  ],
  languages: ['German – Native', 'Turkish – Native', 'English – C1'],
};
