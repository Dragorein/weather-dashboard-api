import { Injectable } from '@nestjs/common';
import { WeatherRepository } from '../weather.repository';
import { GetForecastWeather } from 'src/common/axios/weather';
import { forecastWeatherI } from 'src/common/interfaces/weatherAPI.interface';
import {
  forecastMapping,
  weatherMapping,
} from './mappings/weather.mappings-v1';

@Injectable()
export class WeatherServiceV1 {
  constructor(private readonly weatherRepository: WeatherRepository) {}

  async getForecast(location: string) {
    const response: forecastWeatherI = await GetForecastWeather(
      location,
      false,
    );

    const newWeather = weatherMapping(response);
    const weather = await this.weatherRepository.createWeather(newWeather);

    const newForecasts = forecastMapping(weather, response);
    const forecast = await this.weatherRepository.createForecast(newForecasts);

    return {
      weather,
      forecast,
    };
  }

  async findAll() {
    return 'test';
  }
}
