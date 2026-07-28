import type { DoctorRepository } from "../../domain/repositories/DoctorRepository.js";
import type { GetSchedulesOutput } from "../dto/schedule/GetSchedulesOutput.js";


export class GetSchedulesUseCase {
  constructor(private readonly doctorRepository: DoctorRepository) {}

  public async execute(): Promise<GetSchedulesOutput> {
    const schedules = await this.doctorRepository.findAllSchedules();

    return {
      doctors: schedules.map(({ doctor, availableSchedules }) => ({
        id: doctor.id,
        name: doctor.name,
        specialty: doctor.specialty,
        availableSchedules: availableSchedules.map((schedule) => schedule.toString()),
      })),
    };
  }
}
