import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WeatherServiceV1 } from './weather.service-v1';
import { ReqCreateWeatherDTO, ReqUpdateWeatherDTO } from './dto/request.dto';

@Controller('weather')
export class WeatherControllerV1 {
  constructor(private readonly weatherService: WeatherServiceV1) {}

  @Post()
  create(@Body() createWeatherDto: ReqCreateWeatherDTO) {
    return this.weatherService.create(createWeatherDto);
  }

  @Get()
  findAll() {
    return this.weatherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weatherService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWeatherDto: ReqUpdateWeatherDTO,
  ) {
    return this.weatherService.update(+id, updateWeatherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weatherService.remove(+id);
  }
}
