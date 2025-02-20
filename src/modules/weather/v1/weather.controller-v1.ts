import { Controller, Get, Post, Body } from '@nestjs/common';
import { WeatherServiceV1 } from './weather.service-v1';
import { ReqCreateWeatherDTO } from './dto/request.dto';

@Controller('v1/weather')
export class WeatherControllerV1 {
  constructor(private readonly weatherService: WeatherServiceV1) {}

  @Post()
  create(@Body() reqCreateWeatherDto: ReqCreateWeatherDTO) {
    return this.weatherService.getCurrent(reqCreateWeatherDto.location);
  }

  @Get()
  findAll() {
    return this.weatherService.findAll();
  }
}
