import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Weather } from 'src/entities/weather.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Forecast } from 'src/entities/weatherForecast.entity';

@Injectable()
export class WeatherRepository {
  constructor(
    @InjectRepository(Weather)
    private readonly weatherRepository: Repository<Weather>,
    @InjectRepository(Forecast)
    private readonly forecastRepository: Repository<Forecast>,
  ) {}

  async findWeather(id: string): Promise<Weather> {
    return await this.weatherRepository.findOne({
      where: { id: id },
    });
  }

  async findAllWeather(): Promise<Weather[]> {
    return await this.weatherRepository.find();
  }

  async findForecast(id: string): Promise<Forecast[]> {
    const data = await this.findWeather(id);

    return await this.forecastRepository.find({
      where: {
        weather: data,
      },
    });
  }

  async createWeather(body: Partial<Weather>): Promise<Weather> {
    const data = this.weatherRepository.create(body);

    return await this.weatherRepository.save(data);
  }

  async createForecast(body: Partial<Forecast>[]): Promise<Forecast[]> {
    const data = this.forecastRepository.create(body);

    return await this.forecastRepository.save(data);
  }
}
