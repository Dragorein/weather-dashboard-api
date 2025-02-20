import { Module } from '@nestjs/common';
import { WeatherControllerV1 } from './v1/weather.controller-v1';
import { WeatherServiceV1 } from './v1/weather.service-v1';

@Module({
  controllers: [WeatherControllerV1],
  providers: [WeatherServiceV1],
})
export class WeatherModule {}
