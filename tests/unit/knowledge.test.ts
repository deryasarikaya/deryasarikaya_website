import { describe, expect, it } from 'vitest';
import { answerFallback, detectIntent, publicKnowledge } from '../../src/data/portfolioKnowledge';

describe('portfolio knowledge and deterministic fallback', () => {
  it('keeps project stacks aligned with inspected repositories', () => {
    expect(publicKnowledge.projects['ai-start-map'].stack).toContain('FastAPI');
    expect(publicKnowledge.projects.kompass.stack).toContain('Flask');
    expect(publicKnowledge.projects.moviwebapp.status).toBe('live');
  });

  it('answers known intents with curated links', () => {
    expect(detectIntent('How is Kompass different from AI Start Map?')).toBe('compare');
    const answer = answerFallback('Welche Backend-Erfahrung bringt Derya mit?', 'de');
    expect(answer.mode).toBe('local');
    expect(answer.answer).toContain('FastAPI');
    expect(answer.links[0].href).toBe('/de/projekte/');
  });

  it('does not invent answers outside the public knowledge scope', () => {
    expect(answerFallback('What is her private address?', 'en').answer).toContain(
      'does not contain reliable information',
    );
  });
});
