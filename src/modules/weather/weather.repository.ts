import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Weather } from 'src/entities/weather.entity';

@Injectable()
export class WeatherRepository {
  constructor(private readonly WeatherRepository: Repository<Weather>) {}
}
