import { EWindDirection } from '../enums/weather.enum';

export interface currentWeatherI {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    localtime_epoch: number;
  };
  current: {
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    cloud: number;
    wind_kph: number;
    wind_dir: EWindDirection;
    precip_mm: number;
    temp_c: number;
    feelslike_c: number;
    windchill_c: number;
    heatindex_c: number;
    uv: number;
    gust_kph: number;
  };
}
