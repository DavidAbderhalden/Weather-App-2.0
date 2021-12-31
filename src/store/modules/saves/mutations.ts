/* eslint-disable prefer-destructuring */
import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { SavesMutationTypes, SavesStateTypes, WeatherCardTypes } from '@/store/interfaces';

const mutations: MutationTree<SavesStateTypes> & SavesMutationTypes = {
  [MutationTypes.ADD_WEATHER_ITEM](state: SavesStateTypes, payload: WeatherCardTypes) {
    state.weatherCards.push(payload);
  },
  [MutationTypes.MODIFY_WEATHER_ITEM](state: SavesStateTypes, payload: [number, WeatherCardTypes]) {
    state.weatherCards[payload[0]] = payload[1];
  },
  [MutationTypes.DELETE_WEATHER_ITEM](state: SavesStateTypes, payload: number) {
    state.weatherCards.splice(payload, 1);
  },
  [MutationTypes.RESET_ALL](state: SavesStateTypes) {
    state.weatherCards = [];
  },
};

export default mutations;
