import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Weather } from 'src/entities/weather.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IWeatherCreate } from './v1/interface/weather.interface';

@Injectable()
export class WeatherRepository {
  constructor(
    @InjectRepository(Weather)
    private readonly weatherRepository: Repository<Weather>,
  ) {}

  async create(body: IWeatherCreate): Promise<Weather> {
    const data = this.weatherRepository.create(body);

    return this.weatherRepository.save(data).catch((error) => {
      throw new Error(error.message);
    });
  }
}
