import { Injectable } from '@nestjs/common';
import { WeatherRepository } from '../weather.repository';
import { GetCurrentWeather } from 'src/common/axios/weather';
import { Weather } from 'src/entities/weather.entity';
import { currentWeatherI } from 'src/common/interfaces/weatherAPI.interface';

@Injectable()
export class WeatherServiceV1 {
  constructor(private readonly weatherRepository: WeatherRepository) {}

  async findAll() {
    return `This action returns all weather`;
  }

  async getCurrent(location: string) {
    const response: currentWeatherI = await GetCurrentWeather(location, false);

    const newWeather = new Weather();

    newWeather.name = response.location.name;
    newWeather.region = response.location.region;
    newWeather.country = response.location.country;
    newWeather.lon = response.location.lon;
    newWeather.lat = response.location.lat;
    newWeather.condition = response.current.condition.text;
    newWeather.condition_img = response.current.condition.icon;
    newWeather.humidity = response.current.humidity;
    newWeather.cloud = response.current.cloud;
    newWeather.wind_kph = response.current.wind_kph;
    newWeather.wind_dir = response.current.wind_dir;
    newWeather.precip_mm = response.current.precip_mm;
    newWeather.temp_c = response.current.temp_c;
    newWeather.temp_feel_c = response.current.feelslike_c;
    newWeather.windchill_c = response.current.windchill_c;
    newWeather.heat_index_c = response.current.heatindex_c;
    newWeather.uv = response.current.uv;
    newWeather.gust_kph = response.current.gust_kph;
    newWeather.datetime = new Date(response.location.localtime_epoch);

    const data = await this.weatherRepository.create(newWeather);

    return data;
  }
}
