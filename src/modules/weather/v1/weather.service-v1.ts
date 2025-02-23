import { Injectable } from '@nestjs/common';
import { WeatherRepository } from '../weather.repository';
import { GetForecastWeather } from 'src/common/axios/weather';
import { forecastWeatherI } from 'src/common/interfaces/weatherAPI.interface';
import {
  forecastMappingInsert,
  forecastMappingSelect,
  weatherMappingInsert,
  weatherMappingSelect,
} from './mappings/weather.mappings-v1';

@Injectable()
export class WeatherServiceV1 {
  constructor(private readonly weatherRepository: WeatherRepository) {}

  async getForecast(location: string) {
    console.log(location);

    const response: forecastWeatherI = await GetForecastWeather(
      location,
      false,
    );

    const newWeather = weatherMappingInsert(response);
    const weather = await this.weatherRepository.createWeather(newWeather);

    const newForecasts = forecastMappingInsert(weather, response);
    const forecast = await this.weatherRepository.createForecast(newForecasts);

    return {
      weather,
      forecast,
    };
  }

  async findWeather() {
    return await this.weatherRepository
      .findAllWeather()
      .then((result) => weatherMappingSelect(result));
  }

  async findForecast(id: string) {
    console.log('id', id);
    return await this.weatherRepository
      .findForecast(id)
      .then((result) => forecastMappingSelect(result));
  }
}
