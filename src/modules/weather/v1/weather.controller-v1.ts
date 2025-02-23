import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { WeatherServiceV1 } from './weather.service-v1';
import { ReqCreateWeatherDTO } from './dto/request.dto';
import { AuthGuard } from 'src/middlewares/guards/auth.guard';

@Controller('v1/weather')
export class WeatherControllerV1 {
  constructor(private readonly weatherService: WeatherServiceV1) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() reqCreateWeatherDto: ReqCreateWeatherDTO) {
    return this.weatherService.getForecast(reqCreateWeatherDto.location);
  }

  @UseGuards(AuthGuard)
  @Get()
  findWeathers() {
    return this.weatherService.findWeather();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findForecast(@Param('id', ParseUUIDPipe) id: string) {
    return this.weatherService.findForecast(id);
  }
}
