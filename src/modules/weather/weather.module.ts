import { Module } from '@nestjs/common';
import { WeatherControllerV1 } from './v1/weather.controller-v1';
import { WeatherServiceV1 } from './v1/weather.service-v1';
import { WeatherRepository } from './weather.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Weather } from 'src/entities/weather.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Weather])],
  controllers: [WeatherControllerV1],
  providers: [WeatherServiceV1, WeatherRepository],
})
export class WeatherModule {}
