import { EWindDirection } from 'src/common/enums/weather.enum';

export class IWeatherCreate {
  name: string;
  region: string;
  country: string;
  lon: number;
  lat: number;
  condition: string;
  condition_img: string;
  humidity: number;
  cloud: number;
  wind_kph: number;
  wind_dir: EWindDirection;
  precip_mm: number;
  temp_c: number;
  temp_feel_c: number;
  windchill_c: number;
  heat_index_c: number;
  uv: number;
  gust_kph: number;
  datetime: Date;
}
