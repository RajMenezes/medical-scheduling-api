export class AppointmentDate {
  private readonly value: Date;

  constructor(date: Date | string) {
    const parsed = new Date(date);

    if (Number.isNaN(parsed.getTime())) {
      throw new Error('Invalid appointment date');
    }

    this.value = parsed;
  }

  public getValue(): Date {
    return new Date(this.value);
  }

  public equals(other: AppointmentDate): boolean {
    return this.value.getTime() === other.value.getTime();
  }

  public isBefore(other: AppointmentDate): boolean {
    return this.value < other.value;
  }

  public isAfter(other: AppointmentDate): boolean {
    return this.value > other.value;
  }

  public toISOString(): string {
    return this.value.toISOString();
  }
}
