import { describe, expect, it } from 'vitest';
import { validateContact } from '../../src/lib/contact';

describe('contact validation', () => {
  it('accepts a valid, normalized enquiry', () => {
    const result = validateContact({
      name: ' Derya ',
      email: 'hello@example.com',
      message: 'A useful project enquiry.',
      language: 'en',
      company: '',
    });
    expect(result.valid).toBe(true);
    if (result.valid) expect(result.data.name).toBe('Derya');
  });

  it('rejects invalid input and the honeypot', () => {
    const result = validateContact({ name: 'x', email: 'nope', message: 'short', company: 'bot' });
    expect(result.valid).toBe(false);
    if (!result.valid)
      expect(Object.keys(result.errors)).toEqual(
        expect.arrayContaining(['name', 'email', 'message', 'form']),
      );
  });
});
