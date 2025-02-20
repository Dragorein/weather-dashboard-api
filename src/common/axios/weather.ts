import axios from 'axios';

const GetCurrentWeather = async (location: string, aqi: boolean = true) => {
  try {
    const config = {
      method: 'GET',
      url: `${process.env.WEATHER_API_URL}/current.json`,
      params: {
        key: process.env.WEATHER_API_KEY,
        q: location,
        aqi: aqi ? 'yes' : 'no',
      },
    };

    const response = await axios(config);

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { GetCurrentWeather };
