import { Injectable } from '@nestjs/common';
import { ReqCreateWeatherDTO, ReqUpdateWeatherDTO } from './dto/request.dto';

@Injectable()
export class WeatherServiceV1 {
  async create(createWeatherDto: ReqCreateWeatherDTO) {
    return 'This action adds a new weather';
  }

  async findAll() {
    return `This action returns all weather`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} weather`;
  }

  async update(id: number, updateWeatherDto: ReqUpdateWeatherDTO) {
    return `This action updates a #${id} weather`;
  }

  async remove(id: number) {
    return `This action removes a #${id} weather`;
  }
}
