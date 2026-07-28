import type { DoctorScheduleDto } from "./DoctorScheduleDto.js";

export interface GetSchedulesOutput {
  doctors: DoctorScheduleDto[];
}