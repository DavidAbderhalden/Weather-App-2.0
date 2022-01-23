import {
  RawDailyWeather,
  RawHourlyWeather,
  WeatherOfDay,
  WeatherOfHour,
} from '@/store/types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const icon = (id: number) => {
  switch (true) {
    case id >= 200 && id <= 232:
      return 'thunder' as string;
    case id >= 300 && id <= 321:
      return 'rainy-1' as string;
    case id >= 500 && id <= 531:
      return 'rainy-3' as string;
    case id >= 600 && id <= 622:
      return 'snowy-3' as string;
    case id >= 701 && id <= 781:
      return 'weather_sagittarius' as string;
    case id === 800:
      return 'day' as string;
    case id >= 801 && id <= 804:
      return 'cloudy-day-3' as string;
    default:
      return 'unknown-icon' as string;
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
