import { IsNotEmpty } from 'class-validator';

export class ReqCreateWeatherDTO {
  @IsNotEmpty()
  location: string;
}

export class ReqUpdateWeatherDTO {}
