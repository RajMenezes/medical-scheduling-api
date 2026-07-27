import type { Patient } from "../entities/Patient.js";


export interface PatientRepository {
  findById(id: string): Promise<Patient | null>;

  save(patient: Patient): Promise<void>;
}
