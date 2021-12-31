import { GetterTree } from 'vuex';
import { SavesGetterTypes, SavesStateTypes, IRootState } from '@/store/interfaces';

const getters: GetterTree<SavesStateTypes, IRootState> & SavesGetterTypes = {
  getWeatherCards: (state: SavesStateTypes) => {
    const returnValue = state.weatherCards || 0;
    return returnValue;
  },
};

export default getters;
