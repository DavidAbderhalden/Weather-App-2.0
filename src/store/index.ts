import { createStore } from 'vuex';
import { WeatherCard, RawSearchResult } from '@/store/types';
import { openCageEndpoint } from '@/services/api';
import OptionsCategories from '@/types/DropdownOptionsCategories';

export interface State {
  weatherCards: WeatherCard[];
  searchResults: OptionsCategories[];
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
    RESET_SEARCH_RESULTS(state) {
      state.searchResults.length = 0;
    },

    ADD_SEARCH_RESULT(state, element) {
      state.searchResults.push({ label: element });
    },
    /*
    ADD_WEATHER_ITEM
    MODIFY_WEATHER_ITEM
    DELETE_WEATHER_ITEM
    RESET_ALL
    */
  },

  actions: {
    fetchSearchResults({ commit }, input) {
      openCageEndpoint
        .get('/', {
          params: {
            q: input,
          },
        })
        .then((response) => {
          const sorted = response.data.results.sort(
            (a: RawSearchResult, b: RawSearchResult) => b.confidence - a.confidence,
          );

          commit('RESET_SEARCH_RESULTS');
          sorted.forEach((element: RawSearchResult) => {
            commit('ADD_SEARCH_RESULT', element.formatted);
          });
        });
    },
    /*
    fetchWeather
    updateWeather
    */
  },
});
