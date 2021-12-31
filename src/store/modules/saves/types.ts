import { Store, CommitOptions } from 'vuex';
import { SavesStateTypes, SavesMutationTypes, SavesGetterTypes } from '@/store/interfaces';

export type SavesStoreModuleType<S = SavesStateTypes> = Omit<
  Store<S>,
  'commit' | 'getters'
  > & {
    commit<
      K extends keyof SavesMutationTypes,
      P extends Parameters<SavesMutationTypes[K]>[1]
      >(
        key: K,
        payload?: P,
        options?: CommitOptions
      ): ReturnType<SavesMutationTypes[K]>;
  } & {
    getters: {
      [K in keyof SavesGetterTypes]: ReturnType<SavesGetterTypes[K]>;
    };
  }
