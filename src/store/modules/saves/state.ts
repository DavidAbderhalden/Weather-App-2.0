import {
  SavesStateTypes, WeatherCardTypes, WeatherOfDay, WeatherOfHour,
} from '@/store/interfaces';

// TODO: Remove test object
const weatherSixAM: WeatherOfHour = {
  hour: 6,
  minTemp: 9.8,
  maxTemp: 10.02,
  icon: 'light-rain-icon',
};

// TODO: Remove test object
const weatherMonday: WeatherOfDay = {
  dayId: 0,
  minTemp: 9.67,
  maxTemp: 14.22,
  icon: 'cloud-icon-1',
};

// TODO: Remove test object
const weatherCard: WeatherCardTypes = {
  weatherId: 204123,
  weeklyWeather: [weatherMonday],
  hourlyWeather: [weatherSixAM],
};

// eslint-disable-next-line import/prefer-default-export
export const state: SavesStateTypes = {
  weatherCards: [weatherCard],
};
