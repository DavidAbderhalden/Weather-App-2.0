import { createStore } from 'vuex';
import { WeatherCard } from '@/types/VuexStoreTypes';

export interface State {
  weatherCards: WeatherCard[];
  searchResults: string[];
}

export default createStore<State>({

  getters: {
    weatherCards: (state) => state.weatherCards,
    searchResults: (state) => state.searchResults,
  },

  state: {
    weatherCards: [],
    searchResults: [],
  },

  mutations: {
    /*
    ADD_WEATHER_ITEM
    MODIFY_WEATHER_ITEM
    DELETE_WEATHER_ITEM
    RESET_ALL
    */

  },

  actions: {
    /*
    fetchWeather
    updateWeather
    fetchSearchResults
    */
  },
});
