import { Test, TestingModule } from '@nestjs/testing';
import { WeatherControllerV1 } from './weather.controller-v1';
import { WeatherServiceV1 } from './weather.service-v1';

describe('WeatherControllerV1', () => {
  let controller: WeatherControllerV1;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeatherControllerV1],
      providers: [WeatherServiceV1],
    }).compile();

    controller = module.get<WeatherControllerV1>(WeatherControllerV1);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
