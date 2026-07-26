import type { CvData } from './cv.types';

export const cvDe: CvData = {
  lang: 'de',
  profile:
    'AI Solutions Engineer mit praktischer Erfahrung in Python, FastAPI, Backend-Entwicklung, LLM-Anwendungen und RAG-basierten Systemen sowie mehr als zehn Jahren Engineering- und Beratungserfahrung im Mercedes-Benz-Umfeld. Ausgeprägte Fähigkeit, Muster zu erkennen, komplexe technische Probleme zu strukturieren und Anforderungen in umsetzbare Lösungen zu übersetzen.',
  labels: {
    profile: 'Profil',
    skills: 'Technische Kompetenzen',
    education: 'Ausbildung',
    projects: 'Projekte',
    experience: 'Berufserfahrung',
    early: 'Frühe Engineering-Erfahrung',
    languages: 'Sprachen',
    download: 'Englischen CV als PDF herunterladen',
  },
  skills: [
    {
      title: 'AI & Software Engineering',
      items: ['RAG-Systeme', 'AI-Agenten & Orchestrierung', 'LLM-Integration', 'Generative AI'],
    },
    {
      title: 'Backend-Entwicklung',
      items: ['Python', 'FastAPI', 'PostgreSQL', 'REST-API-Architektur', 'Unit-Tests'],
    },
    {
      title: 'Prozess & Engineering',
      items: ['Geschäftsprozessoptimierung', 'Requirements Engineering', 'API-Design'],
    },
    { title: 'DevOps & Tools', items: ['Git', 'GitHub'] },
  ],
  education: [
    {
      title: 'Software Engineering mit Spezialisierung auf AI Engineering',
      organization: 'Masterschool Institute of Technology',
      period: 'Jan 2026 – Sep 2026',
      location: 'Remote',
      points: [
        'Entwicklung von AI- und Backend-Anwendungen mit Python, FastAPI, Flask, PostgreSQL, REST-APIs, SQLAlchemy und Git/GitHub.',
        'Aufbau von LLM-Workflows mit OpenAI API, Structured Outputs, Function Calling, RAG und Vektorsuche.',
      ],
    },
    {
      title: 'Diplom-Ingenieurin (FH), Fahrzeugtechnologie',
      organization: 'Hochschule Karlsruhe – Technik und Wirtschaft',
      period: 'Sep 2004 – Aug 2011',
      location: 'Karlsruhe',
      points: [
        'Diplomarbeit zur Analyse und Optimierung von Fertigungsprozessen nach Lean-Production-Prinzipien bei Kiesling Maschinentechnik GmbH.',
        'Schwerpunkte: Fahrzeugsysteme, Produktionsplanung und -steuerung, Qualitätsmanagement sowie System- und Regelungstechnik.',
      ],
    },
  ],
  projects: [
    {
      title: 'AI Start Map',
      period: 'Jul 2026',
      points: [
        'Webbasierte AI-Diagnostik mit strukturierter Prozesserfassung, gezielten Rückfragen, RAG und Aufwand-Nutzen-Priorisierung.',
        'Validierte strukturierte Ausgaben und serverseitige Guardrails schützen interne Wissensreferenzen.',
      ],
    },
    {
      title: 'Kompass',
      period: 'Jul 2026',
      points: [
        'Voice-first-System, das WhatsApp-Sprachnachrichten in Langzeitdaten zu Stimmung, Energie, Schlaf, Stress und Alltag überführt.',
        'Historische Zusammenfassungen und nachvollziehbare Musteranalysen innerhalb klarer nicht-diagnostischer Grenzen.',
      ],
    },
    {
      title: 'MoviWeb',
      period: 'Mai 2026',
      points: [
        'Full-Stack-Anwendung für Filmsammlungen mit OMDb-Integration, relationalen Datenmodellen, CRUD-Abläufen und persistenter Speicherung.',
      ],
    },
  ],
  experience: [
    {
      title: 'Internationales Leben, Elternschaft & berufliche Neuausrichtung',
      period: 'Jan 2021 – Dez 2025',
      location: 'International',
      points: [
        'Individuelles Mentoring mit Fokus auf Klarheit, Entscheidungen und konkrete nächste Schritte.',
        'Leben in Türkiye, Mexiko, Thailand und Indonesien; Vertiefung interkultureller Kommunikation, Anpassungsfähigkeit und Selbstständigkeit.',
      ],
    },
    {
      title: 'Technische Produktspezialistin / Technische Beraterin – Fahrerassistenzsysteme',
      organization: 'Mercedes-Benz AG',
      period: 'Okt 2012 – Dez 2020',
      location: 'Sindelfingen',
      points: [
        'Globale technische Marktbetreuung und Feldbeobachtung für Kamera- und Parkassistenzsysteme in 50+ Märkten, 14+ Baureihen und 30+ Fahrzeuggenerationen.',
        'Analyse komplexer systemübergreifender Feldthemen mit Softwareständen, Steuergeräten, Gateways und marktspezifischen Bedingungen.',
        'Koordination von Engineering, Qualität, Produktion, Compliance, Produkthaftung und Märkten für Abstellmaßnahmen und Reparaturlösungen.',
        'Erstellung entscheidungsfähiger Analysen, Trainingskonzepte und internationaler Workshops.',
      ],
    },
    {
      title: 'mindful@Daimler Botschafterin (Zusatzrolle)',
      organization: 'Mercedes-Benz AG',
      period: 'Jul 2019 – Jun 2020',
      location: 'Stuttgart',
      points: [
        'Mitentwicklung des unternehmensweiten Botschafternetzwerks und Moderation von Formaten zu Kommunikation, Zusammenarbeit und Wissenstransfer.',
      ],
    },
    {
      title: 'Account Managerin – Engineering Services',
      organization: 'FERCHAU',
      period: 'Nov 2011 – Sep 2012',
      location: 'Stuttgart',
      points: [
        'Betreuung von Mercedes-Benz als Hauptkunden und Übersetzung technischer Anforderungen in Angebote und Engineering-Leistungen.',
        'Führung von bis zu drei Engineering-Fachkräften in Rekrutierung, Einsatzplanung und Entwicklung.',
      ],
    },
  ],
  earlyExperience: [
    {
      title: 'Praktikum Requirements Engineering',
      organization: 'MBtech Group',
      period: 'Apr 2009 – Nov 2009',
      location: 'Sindelfingen',
      points: [
        'Neustrukturierung einer Anforderungsdokumentation in IBM Rational DOORS; Einsatz in mehreren Softwareentwicklungsprojekten.',
      ],
    },
    {
      title: 'Praktikum Service Engineering',
      organization: 'Mercedes-Benz USA',
      period: 'Mär 2007 – Aug 2007',
      location: 'Montvale, NJ, USA',
      points: [
        'Entwicklung von Tracking-Systemen, Analyse von Produktqualität und Diesel-Servicethemen sowie Präsentation der Ergebnisse vor dem Management.',
      ],
    },
    {
      title: 'Praktikum Produktqualität & technische Analyse',
      organization: 'DaimlerChrysler AG',
      period: 'Feb 2006 – Aug 2006',
      location: 'Sindelfingen',
      points: [
        'Entwicklung einer baureihenübergreifenden Datenbankmatrix sowie Erstellung von Gewährleistungsanalysen und technischen Entscheidungsunterlagen.',
      ],
    },
  ],
  languages: ['Deutsch – Muttersprache', 'Türkisch – Muttersprache', 'Englisch – C1'],
};
