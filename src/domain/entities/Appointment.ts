import type { AppointmentStatus } from "../enums/AppointmentStatus.js";
import type { AppointmentDate } from "../value-objects/AppointmentDate.js";

export class Appointment {
  constructor(
    public readonly id: string,
    public readonly patientId: string,
    public readonly doctorId: string,
    public readonly date: AppointmentDate,
    public status: AppointmentStatus,
  ) {}
}