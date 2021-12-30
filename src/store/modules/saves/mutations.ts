import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { SavesMutationTypes, SavesStateTypes } from '@/store/interfaces';

const mutations: MutationTree<SavesStateTypes> & SavesMutationTypes = {
  [MutationTypes.UPDATE_WEATHER](state: SavesStateTypes) {
    // DO STUFF (call api and update weatherCards)
  },
  [MutationTypes.ADD_WEATHER_ITEM](state: SavesStateTypes, payload: number) {
    // DO STUFF (probably outsource to root store)
  },
  [MutationTypes.DELETE_WEATHER_ITEM](state: SavesStateTypes, payload: number) {
    state.weatherCards.splice(payload, 1);
  },
};

export default mutations;
