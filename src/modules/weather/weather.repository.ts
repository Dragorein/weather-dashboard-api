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
    return await this.weatherRepository.find({
      order: { created_at: 'desc' },
    });
  }

  async findForecast(id: string): Promise<Forecast[]> {
    return await this.forecastRepository.find({
      where: {
        weather: {
          id: id,
        },
      },
      select: [
        'id',
        'condition',
        'condition_img',
        'humidity',
        'cloud',
        'precip_mm',
        'temp_c',
        'temp_f',
        'temp_feel_c',
        'temp_feel_f',
        'heat_index_c',
        'heat_index_f',
        'uv',
        'date',
        'time',
      ],
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
