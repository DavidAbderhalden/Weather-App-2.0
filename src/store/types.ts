type RawSearchResult = {
  confidence: number;
  formatted: string;
};

type WeatherOfDay = {
  dayId: number;
  minTemp: number;
  maxTemp: number;
  icon: string;
};

type WeatherOfHour = {
  hour: number;
  minTemp: number;
  maxTemp: number;
  icon: string;
};

type WeatherCard = {
  weatherId: number;
  weeklyWeather: Array<WeatherOfDay>;
  hourlyWeather: Array<WeatherOfHour>;
};

export {
  RawSearchResult,
  WeatherOfDay,
  WeatherOfHour,
  WeatherCard,
};
