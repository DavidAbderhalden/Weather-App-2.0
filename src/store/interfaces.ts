import { ActionContext } from 'vuex';
import { MutationTypes as SavesMTypes } from '@/store/modules/saves/mutation-types';
import { ActionTypes as SavesATypes } from '@/store/modules/saves/action-types';

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
  // number in payload as index
  [SavesMTypes.ADD_WEATHER_ITEM](state: S, payload: WeatherCardTypes): void;
  [SavesMTypes.MODIFY_WEATHER_ITEM](state: S, payload: [number, WeatherCardTypes]): void;
  [SavesMTypes.DELETE_WEATHER_ITEM](state: S, payload: number): void;
  [SavesMTypes.RESET_ALL](state: S): void;
};

export interface IRootState {
  root: boolean;
  version: string;
}

export type AugmentedActionContext = {
  commit<K extends keyof SavesMutationTypes>(
    key: K,
    payload: Parameters<SavesMutationTypes[K]>[1],
  ): ReturnType<SavesMutationTypes[K]>;
} & Omit<ActionContext<SavesStateTypes, IRootState>, 'commit'>;

export interface SavesActionTypes {
  [SavesATypes.FETCH_WEATHER](payload: [number, number]): WeatherCardTypes;
  [SavesATypes.UPDATE_WEATHER](
    { commit }: AugmentedActionContext,
    { getWeatherCards }: SavesGetterTypes,
  ): void;
}
