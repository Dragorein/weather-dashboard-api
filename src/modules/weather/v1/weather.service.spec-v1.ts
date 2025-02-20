import { Test, TestingModule } from '@nestjs/testing';
import { WeatherServiceV1 } from './weather.service-v1';

describe('WeatherService', () => {
  let service: WeatherServiceV1;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherServiceV1],
    }).compile();

    service = module.get<WeatherServiceV1>(WeatherServiceV1);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
