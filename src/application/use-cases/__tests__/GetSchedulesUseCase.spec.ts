import { InMemoryDoctorRepository } from '../../../infrastructure/repositories/InMemoryDoctorRepository.js';
import { GetSchedulesUseCase } from '../GetSchedulesUseCase.js';

describe('GetSchedulesUseCase', () => {
  let doctorRepository: InMemoryDoctorRepository;
  let useCase: GetSchedulesUseCase;

  beforeEach(() => {
    doctorRepository = new InMemoryDoctorRepository();
    useCase = new GetSchedulesUseCase(doctorRepository);
  });

  it('should return all doctors with available schedules', async () => {
    const result = await useCase.execute();

    expect(result.doctors).toHaveLength(2);
  });

  it('should return the correct doctor information', async () => {
    const result = await useCase.execute();

    expect(result.doctors[0]).toEqual({
      id: '1',
      name: 'Dr. João Silva',
      specialty: 'CARDIOLOGY',
      availableSchedules: [
        '2026-06-10T09:00:00.000Z',
        '2026-06-10T10:00:00.000Z',
        '2026-06-10T11:00:00.000Z',
      ],
    });
  });
});
