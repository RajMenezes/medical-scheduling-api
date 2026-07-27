import type { Doctor } from '../entities/Doctor.js';

export interface DoctorRepository {
  findById(id: string): Promise<Doctor | null>;

  findAll(): Promise<Doctor[]>;
}
