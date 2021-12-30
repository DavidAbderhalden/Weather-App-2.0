import { MutationTypes as SavesMTypes } from '@/store/modules/saves/mutation-types';

export interface WeatherOfDay {
  dayId: number;
  minTemp: number;
  maxTemp: number;
  icon: string;
}

export interface WeatherOfHour {
  hour: number;
  minTemp: number;
  maxTemp: number;
  icon: string;
}

export interface WeatherCardTypes {
  weatherId: number;
  weeklyWeather: Array<WeatherOfDay>;
  hourlyWeather: Array<WeatherOfHour>;
}

export interface SavesStateTypes {
  weatherCards: Array<WeatherCardTypes>;
}

export interface SavesGetterTypes {
  getWeatherCards(state: SavesStateTypes): Array<WeatherCardTypes>;
}

export type SavesMutationTypes<S = SavesStateTypes> = {
  [SavesMTypes.UPDATE_WEATHER](state: S): void;
  [SavesMTypes.ADD_WEATHER_ITEM](state: S, payload: number): void;
  [SavesMTypes.DELETE_WEATHER_ITEM](state: S, payload: number): void;
}
