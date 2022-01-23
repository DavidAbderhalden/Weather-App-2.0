type RawSearchResult = {
  confidence: number;
  formatted: string;
  geometry: {
    lat: number,
    lng: number,
  }
};

type RawDailyWeather = {
  weather: [{
    id: number,
  }],
  temp: {
    max: number,
    min: number,
  }
};

type RawHourlyWeather = {
  weather: [{
    id: number,
  }],
  temp: number
};

type WeatherOfDay = {
  dayId: number;
  minTemp: number;
  maxTemp: number;
  icon: number;
};

type WeatherOfHour = {
  hour: number;
  temp: number;
  icon: number;
};

type WeatherCard = {
  currentWeather: {
    temp: number,
    icon: number,
  };
  weeklyWeather: Array<WeatherOfDay>;
  hourlyWeather: Array<WeatherOfHour>;
};

export {
  RawSearchResult,
  RawDailyWeather,
  RawHourlyWeather,
  WeatherOfDay,
  WeatherOfHour,
  WeatherCard,
};
