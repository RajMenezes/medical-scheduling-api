import type { MedicalSpecialty } from "../enums/MedicalSpecialty.js";

export class Doctor {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly specialty: MedicalSpecialty,
  ) {}
}