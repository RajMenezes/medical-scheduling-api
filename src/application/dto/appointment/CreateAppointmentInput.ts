import type { AppointmentDate } from "../../../domain/value-objects/AppointmentDate.js";

export type CreateAppointmentInput = {
  doctorId: string;
  patientName: string;
  appointmentDate: AppointmentDate;
};