import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Weather } from 'src/entities/weather.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WeatherRepository {
  constructor(
    @InjectRepository(Weather)
    private readonly weatherRepository: Repository<Weather>,
  ) {}
}
