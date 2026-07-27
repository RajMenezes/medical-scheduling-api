import { ValueObject } from './ValueObject.js';

export class Email extends ValueObject<string> {
  constructor(value: string) {
    const normalized = value.trim().toLowerCase();

    if (!Email.isValid(normalized)) {
      throw new Error('Invalid email.');
    }

    super(normalized);
  }

  private static isValid(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
  }

  public toString(): string {
    return this.value;
  }
}
