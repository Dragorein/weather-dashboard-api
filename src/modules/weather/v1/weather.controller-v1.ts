import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { WeatherServiceV1 } from './weather.service-v1';
import { ReqCreateWeatherDTO } from './dto/request.dto';
import { AuthGuard } from 'src/middlewares/guards/auth.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { CurrentUserEnum } from 'src/common/enums';

@Controller('v1/weather')
export class WeatherControllerV1 {
  constructor(private readonly weatherService: WeatherServiceV1) {}

  @UseGuards(AuthGuard)
  @Post()
  create(
    @CurrentUser(CurrentUserEnum.userId) userId: string,
    @Body() reqCreateWeatherDto: ReqCreateWeatherDTO,
  ) {
    return this.weatherService.getForecast(reqCreateWeatherDto.location);
  }

  @Get()
  findAll() {
    return this.weatherService.findAll();
  }
}
