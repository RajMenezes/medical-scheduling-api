import { Doctor } from '../../domain/entities/Doctor.js';
import { DoctorSchedule } from '../../domain/entities/DoctorSchedule.js';
import { MedicalSpecialty } from '../../domain/enums/MedicalSpecialty.js';
import type { DoctorRepository } from '../../domain/repositories/DoctorRepository.js';
import { AppointmentDate } from '../../domain/value-objects/AppointmentDate.js';

export class InMemoryDoctorRepository implements DoctorRepository {
  async findAllSchedules(): Promise<DoctorSchedule[]> {
    return [
      {
        doctor: new Doctor('1', 'Dr. João Silva', MedicalSpecialty.CARDIOLOGY),
        availableSchedules: [
          new AppointmentDate('2026-06-10T09:00:00Z'),
          new AppointmentDate('2026-06-10T10:00:00Z'),
          new AppointmentDate('2026-06-10T11:00:00Z'),
        ],
      },
      {
        doctor: new Doctor('2', 'Dra. Maria Souza', MedicalSpecialty.DERMATOLOGY),
        availableSchedules: [
          new AppointmentDate('2026-06-11T14:00:00Z'),
          new AppointmentDate('2026-06-11T15:00:00Z'),
        ],
      },
    ];
  }
}
