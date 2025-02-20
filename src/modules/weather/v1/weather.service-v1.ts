import { Injectable } from '@nestjs/common';
import { WeatherRepository } from '../weather.repository';
import { GetCurrentWeather } from 'src/common/axios/weather';

@Injectable()
export class WeatherServiceV1 {
  constructor(private readonly weatherRepository: WeatherRepository) {}

  async findAll() {
    return `This action returns all weather`;
  }

  async getCurrent(location: string) {
    const data = await GetCurrentWeather(location, false);

    return data;
  }
}
