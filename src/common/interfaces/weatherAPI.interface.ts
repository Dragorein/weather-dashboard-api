export interface conditionI {
  text: string;
  icon: string;
}

export interface weatherDataI {
  last_updated: string;
  condition: conditionI;
  humidity: number;
  cloud: number;
  precip_mm: number;
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  heatindex_c: number;
  heatindex_f: number;
  uv: number;
}

export interface locationDataI {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  localtime: string;
  tz_id: string;
}

export interface forecastHourI extends weatherDataI {
  time: string;
}
export interface dayDataI {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  avghumidity: number;
  condition: conditionI;
  uv: number;
}

export interface forecastDayI {
  date: string;
  day: dayDataI;
  hour: forecastHourI[];
}

export interface currentWeatherI {
  location: locationDataI;
  current: weatherDataI;
}
export interface forecastWeatherI extends currentWeatherI {
  forecast: {
    forecastday: forecastDayI[];
  };
}
