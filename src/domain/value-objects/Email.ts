export class Email {
  private readonly value: string;

  constructor(value: string) {
    const normalized = value.trim().toLowerCase();

    if (!Email.isValid(normalized)) {
      throw new Error('Invalid email');
    }

    this.value = normalized;
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: Email): boolean {
    return this.value === other.value;
  }

  private static isValid(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
  }
}
