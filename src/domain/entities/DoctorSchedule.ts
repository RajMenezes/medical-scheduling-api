import type { AppointmentDate } from '../value-objects/AppointmentDate.js';
import type { Doctor } from './Doctor.js';

export class DoctorSchedule {
  constructor(
    public readonly doctor: Doctor,
    public readonly availableSchedules: AppointmentDate[],
  ) {}
}
