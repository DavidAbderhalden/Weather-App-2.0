import { createStore } from 'vuex';
import { WeatherCard, RawSearchResult } from '@/store/types';
import { openCageEndpoint, weatherMapEndpoint } from '@/services/api';
import OptionsCategories from '@/types/DropdownOptionsCategories';
import hash from '@/functions/utils';
import { parseWeeklyWeather, parseHourlyWeather } from '@/functions/weather';

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
      state.searchResults.push({
        label: element.formatted,
        lat: element.geometry.lat,
        lon: element.geometry.lng,
      });
    },

    ADD_WEATHER_ITEM(state, item) {
      state.weatherCards.push(item);
    },

    DELETE_WEATHER_ITEMS(state, items: WeatherCard[]) {
      Object.values(items).forEach((item) => {
        state.weatherCards.splice(state.weatherCards.indexOf(item), 1);
      });
    },
    /*
    MODIFY_WEATHER_ITEM
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
            commit('ADD_SEARCH_RESULT', element);
          });
        });
    },

    addWeatherCard() {
      const location = this.state.searchResults[0];
      const coords = { lat: location.lat, lon: location.lon };
      this.dispatch('fetchWeather', { coords, name: location.label });
    },

    fetchWeather({ commit }, data) {
      weatherMapEndpoint
        .get('/', {
          params: {
            lat: data.coords.lat,
            lon: data.coords.lon,
            exclude: 'minutely',
          },
        })
        .then((response) => {
          const card: WeatherCard = {
            currentWeather: {
              temp: response.data.current.temp,
              icon: response.data.current.weather[0].id,
            },
            weeklyWeather: parseWeeklyWeather(response.data.daily),
            hourlyWeather: parseHourlyWeather(response.data.hourly),
            location: data.name,
            marked: false,
          };

          commit('ADD_WEATHER_ITEM', card);
        });
    },
    /*
    updateWeather
    */
  },
});
