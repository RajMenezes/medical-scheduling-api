import { ValueObject } from './ValueObject.js';

export class AppointmentDate extends ValueObject<Date> {
  constructor(date: Date | string) {
    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      throw new Error('Invalid appointment date.');
    }

    super(parsedDate);
  }

  public isBefore(other: AppointmentDate): boolean {
    return this.value.getTime() < other.value.getTime();
  }

  public isAfter(other: AppointmentDate): boolean {
    return this.value.getTime() > other.value.getTime();
  }

  public toISOString(): string {
    return this.value.toISOString();
  }

  public toString(): string {
    return this.value.toISOString();
  }
}
