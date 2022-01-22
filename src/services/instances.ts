import axios from 'axios';

const openCageEndpoint = axios.create({
  baseURL: 'https://api.opencagedata.com/geocode/v1/json?',
  timeout: 6000,
  params: {
    key: process.env.APP_OPEN_CAGE_API_KEY,
    no_annotations: 1,
    limit: 10,
    _type: 'city',
  },
});

const weatherMapEndpoint = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/onecall?',
  timeout: 6000,
  params: {
    appid: process.env.APP_WEATHER_MAP_API_KEY,
    units: 'metric',
  },
});

export default { openCageEndpoint, weatherMapEndpoint };
