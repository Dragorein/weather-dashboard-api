import {
  currentWeatherI,
  forecastWeatherI,
} from 'src/common/interfaces/weatherAPI.interface';
import { Weather } from 'src/entities/weather.entity';
import { Forecast } from 'src/entities/weatherForecast.entity';

export const weatherMapping = ({
  location,
  current,
}: currentWeatherI): Weather => {
  const weatherData = new Weather();

  weatherData.city = location.name;
  weatherData.region = location.region;
  weatherData.country = location.country;
  weatherData.lon = location.lon;
  weatherData.lat = location.lat;
  weatherData.condition = current.condition.text;
  weatherData.condition_img = current.condition.icon.split('//')[1];
  weatherData.humidity = current.humidity;
  weatherData.cloud = current.cloud;
  weatherData.precip_mm = current.precip_mm;
  weatherData.temp_c = current.temp_c;
  weatherData.temp_f = current.temp_f;
  weatherData.temp_feel_c = current.feelslike_c;
  weatherData.temp_feel_f = current.feelslike_f;
  weatherData.heat_index_c = current.heatindex_c;
  weatherData.heat_index_f = current.heatindex_f;
  weatherData.uv = current.uv;
  weatherData.date = current.last_updated;
  weatherData.time = current.last_updated;

  return weatherData;
};

export const forecastMapping = (
  weatherId: Weather,
  { forecast }: forecastWeatherI,
): Forecast[] => {
  const forecastData: Forecast[] = [];

  forecast.forecastday[0].hour.map((item) => {
    const data = new Forecast();

    data.weather = weatherId;
    data.date = forecast.forecastday[0].date;
    data.time = item.time;
    data.condition = item.condition.text;
    data.condition_img = item.condition.icon.split('//')[1];
    data.humidity = item.humidity;
    data.cloud = item.cloud;
    data.precip_mm = item.precip_mm;
    data.temp_c = item.temp_c;
    data.temp_f = item.temp_f;
    data.temp_feel_c = item.feelslike_c;
    data.temp_feel_f = item.feelslike_f;
    data.heat_index_c = item.heatindex_c;
    data.heat_index_f = item.heatindex_f;
    data.uv = item.uv;

    forecastData.push(data);
  });

  return forecastData;
};
