import type { DoctorSchedule } from "../entities/DoctorSchedule.js";


export interface DoctorRepository {
    findAllSchedules(): Promise<DoctorSchedule[]>;
}
