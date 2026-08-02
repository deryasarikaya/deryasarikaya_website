import type { Language } from './types.js';
import { routeFor } from './routes.js';

export type GuideIntent =
  'ai-project' | 'ai-start-map' | 'backend' | 'compare' | 'cv' | 'contact' | 'unknown';

export interface GuideAnswer {
  answer: string;
  links: { label: string; href: string }[];
  mode: 'local' | 'ai';
}

const answers: Record<Language, Record<GuideIntent, Omit<GuideAnswer, 'mode'>>> = {
  de: {
    'ai-project': {
      answer:
        'AI Start Map zeigt Deryas AI-Erfahrung am vollständigsten: mehrstufige LLM-Analyse, Structured Outputs, RAG, FAISS und serverseitige Guardrails greifen dort in einem realen Diagnoseablauf zusammen.',
      links: [{ label: 'AI Start Map ansehen', href: routeFor('projectAiStartMap', 'de') }],
    },
    'ai-start-map': {
      answer:
        'AI Start Map führt durch ein strukturiertes Prozessinterview, ergänzt fehlende Informationen mit gezielten Rückfragen und priorisiert drei Automatisierungschancen nach Nutzen und Aufwand.',
      links: [{ label: 'Zur Fallstudie', href: routeFor('projectAiStartMap', 'de') }],
    },
    backend: {
      answer:
        'Derya arbeitet praktisch mit Python, FastAPI, Flask, PostgreSQL, SQLAlchemy, REST-APIs und strukturierten Test-Suites. AI Start Map zeigt die modernste Backend-Architektur, MoviWebApp den vollständigen CRUD-Workflow.',
      links: [{ label: 'Projekte vergleichen', href: routeFor('projects', 'de') }],
    },
    compare: {
      answer:
        'AI Start Map analysiert Geschäftsprozesse und priorisiert Automatisierung. Kompass verarbeitet persönliche Sprachnachrichten zu longitudinalen Mustern. Beide nutzen LLM-Pipelines, verfolgen aber unterschiedliche Datenmodelle, Risiken und Guardrails.',
      links: [
        { label: 'AI Start Map', href: routeFor('projectAiStartMap', 'de') },
        { label: 'Kompass', href: routeFor('projectKompass', 'de') },
      ],
    },
    cv: {
      answer:
        'Der webbasierte Lebenslauf bündelt Deryas Engineering-, Beratungs- und Softwareerfahrung. Dort ist auch der englische PDF-CV verfügbar.',
      links: [{ label: 'Lebenslauf öffnen', href: routeFor('cv', 'de') }],
    },
    contact: {
      answer:
        'Am zuverlässigsten erreichst du Derya derzeit über LinkedIn oder GitHub. Die professionelle E-Mail-Adresse ist für die Website vorgesehen, aber noch nicht als aktiv bestätigt.',
      links: [{ label: 'Kontaktoptionen', href: routeFor('contact', 'de') }],
    },
    unknown: {
      answer:
        'Dazu enthält dieses Portfolio keine verlässliche Information. Ich kann Projekte, Backend- und AI-Erfahrung, den Lebenslauf oder Kontaktmöglichkeiten erklären.',
      links: [{ label: 'Projekte ansehen', href: routeFor('projects', 'de') }],
    },
  },
  en: {
    'ai-project': {
      answer:
        "AI Start Map demonstrates Derya's AI experience most completely: multi-stage LLM analysis, Structured Outputs, RAG, FAISS and server-side guardrails work together in a real diagnostic flow.",
      links: [{ label: 'View AI Start Map', href: routeFor('projectAiStartMap', 'en') }],
    },
    'ai-start-map': {
      answer:
        'AI Start Map runs a structured workflow interview, fills important gaps with targeted follow-up questions and ranks three automation opportunities by benefit and implementation effort.',
      links: [{ label: 'Open the case study', href: routeFor('projectAiStartMap', 'en') }],
    },
    backend: {
      answer:
        'Derya works hands-on with Python, FastAPI, Flask, PostgreSQL, SQLAlchemy, REST APIs and structured test suites. AI Start Map shows the most modern backend architecture; MoviWebApp shows the complete CRUD workflow.',
      links: [{ label: 'Compare projects', href: routeFor('projects', 'en') }],
    },
    compare: {
      answer:
        'AI Start Map analyses business workflows and prioritises automation. Kompass transforms personal voice notes into longitudinal patterns. Both use LLM pipelines, but they require different data models, risk boundaries and guardrails.',
      links: [
        { label: 'AI Start Map', href: routeFor('projectAiStartMap', 'en') },
        { label: 'Kompass', href: routeFor('projectKompass', 'en') },
      ],
    },
    cv: {
      answer:
        "The web CV brings together Derya's engineering, consulting and software experience. The English PDF is available there as well.",
      links: [{ label: 'Open the CV', href: routeFor('cv', 'en') }],
    },
    contact: {
      answer:
        'LinkedIn and GitHub are currently the most reliable ways to reach Derya. The professional email address is planned for the website but has not yet been confirmed as active.',
      links: [{ label: 'Contact options', href: routeFor('contact', 'en') }],
    },
    unknown: {
      answer:
        'This portfolio does not contain reliable information about that. I can explain the projects, backend and AI experience, the CV or contact options.',
      links: [{ label: 'View projects', href: routeFor('projects', 'en') }],
    },
  },
};

export function detectIntent(question: string): GuideIntent {
  const input = question.toLocaleLowerCase();
  if (/kontakt|contact|get in touch|reach|email|linkedin/.test(input)) return 'contact';
  if (/lebenslauf|curriculum|\bcv\b/.test(input)) return 'cv';
  if (/unterschied|compare|different|kompass.*start|start.*kompass/.test(input)) return 'compare';
  if (/backend|fastapi|postgres|python|api/.test(input)) return 'backend';
  if (/start map|diagnos|workflow/.test(input)) return 'ai-start-map';
  if (/ai.erfahrung|ai experience|best.*project|welches projekt/.test(input)) return 'ai-project';
  return 'unknown';
}

export function answerFallback(question: string, lang: Language): GuideAnswer {
  return { ...answers[lang][detectIntent(question)], mode: 'local' };
}

export const guideQuestions: Record<Language, string[]> = {
  de: [
    'Welches Projekt zeigt Deryas AI-Erfahrung am besten?',
    'Wie funktioniert AI Start Map?',
    'Welche Backend-Erfahrung bringt Derya mit?',
    'Was unterscheidet Kompass von AI Start Map?',
    'Zeig mir den Lebenslauf.',
    'Wie kann ich Kontakt aufnehmen?',
  ],
  en: [
    "Which project best demonstrates Derya's AI experience?",
    'How does AI Start Map work?',
    'What backend experience does Derya have?',
    'How is Kompass different from AI Start Map?',
    'Show me the CV.',
    'How can I get in touch?',
  ],
};

export const publicKnowledge = {
  person: {
    name: 'Derya Sarikaya',
    role: 'AI Solutions Engineer | Technical AI Consultant',
    location: 'Stuttgart, Germany',
    experience:
      '10+ years in engineering and technical consulting within the Mercedes-Benz environment',
  },
  projects: {
    'ai-start-map': {
      focus: 'AI diagnostic for business workflows',
      stack: ['FastAPI', 'PostgreSQL', 'Structured Outputs', 'RAG', 'FAISS'],
      status: 'building',
      route: { de: routeFor('projectAiStartMap', 'de'), en: routeFor('projectAiStartMap', 'en') },
    },
    kompass: {
      focus: 'Voice-first longitudinal pattern system',
      stack: ['Flask', 'PostgreSQL', 'Twilio', 'Whisper', 'OpenAI'],
      status: 'building',
      route: { de: routeFor('projectKompass', 'de'), en: routeFor('projectKompass', 'en') },
    },
    moviwebapp: {
      focus: 'Movie collection CRUD application',
      stack: ['Flask', 'SQLAlchemy', 'SQLite', 'OMDb API'],
      status: 'live',
      route: { de: routeFor('projectMoviWebApp', 'de'), en: routeFor('projectMoviWebApp', 'en') },
    },
  },
};
