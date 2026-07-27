import type { Appointment } from "../entities/Appointment.js";
import type { AppointmentDate } from "../value-objects/AppointmentDate.js";

export interface AppointmentRepository {
  findById(id: string): Promise<Appointment | null>;

  save(appointment: Appointment): Promise<void>;

  findByDoctorAndDate(
    doctorId: string,
    date: AppointmentDate,
  ): Promise<Appointment | null>;

  findAll(): Promise<Appointment[]>;
}