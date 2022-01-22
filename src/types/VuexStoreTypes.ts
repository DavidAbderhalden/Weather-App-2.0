export type WeatherOfDay = {
  dayId: number;
  minTemp: number;
  maxTemp: number;
  icon: string;
}

export type WeatherOfHour = {
  hour: number;
  minTemp: number;
  maxTemp: number;
  icon: string;
}

export type WeatherCard = {
  weatherId: number;
  weeklyWeather: Array<WeatherOfDay>;
  hourlyWeather: Array<WeatherOfHour>;
}
