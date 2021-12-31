import { ActionTree } from 'vuex';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';
import { SavesActionTypes, SavesStateTypes, IRootState } from '@/store/interfaces';

const actions: ActionTree<SavesStateTypes, IRootState> & SavesActionTypes = {
  [ActionTypes.FETCH_WEATHER](payload: [number, number]) {
    // TODO: fetch api -> return as weatherCard
  },
  [ActionTypes.UPDATE_WEATHER]({ commit }, { getWeatherCards }) {
    const weatherCards = getWeatherCards;
    for (let i = 0; i < weatherCards.length; i += 1) {
      // TODO: call FETCH_WEATHER, payload lat, lon of card -> commit result
      // commit(MutationTypes.MODIFY_WEATHER_ITEM, [i, card]);
    }
  },
};

export default actions;
