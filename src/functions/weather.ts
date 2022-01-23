import {
  RawDailyWeather,
  RawHourlyWeather,
  WeatherOfDay,
  WeatherOfHour,
} from '@/store/types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const icon = (id: number) => {
  switch (id) {
    case 1:
      return 'rainy-1' as string;
    case 2:
      return 'rainy-2' as string;
    case 3:
      return 'rainy-3' as string;
    // TODO: implement different cases
    default:
      return 'icon-missing' as string;
  }
};

const parseWeeklyWeather = (weathers: RawDailyWeather[]): WeatherOfDay[] => {
  const parsedWeathers: WeatherOfDay[] = [];
  const now: Date = new Date();
  let index: number = now.getDay();
  Object.values(weathers).forEach((weather) => {
    if (index === 6) index = 0;
    else index += 1;
    parsedWeathers.push({
      dayId: index,
      maxTemp: weather.temp.max,
      minTemp: weather.temp.min,
      icon: weather.weather[0].id,
    });
  });
  return parsedWeathers;
};

const parseHourlyWeather = (weathers: RawHourlyWeather[]): WeatherOfHour[] => {
  const parsedWeathers: WeatherOfHour[] = [];
  const now: Date = new Date();
  let index: number = now.getHours();
  Object.values(weathers).forEach((weather) => {
    if (index === 23) index = 0;
    else index += 1;
    parsedWeathers.push({
      hour: index,
      temp: weather.temp,
      icon: weather.weather[0].id,
    });
  });
  return parsedWeathers;
};

export { icon, parseWeeklyWeather, parseHourlyWeather };
