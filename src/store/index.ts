import { createStore, createLogger } from 'vuex';

// eslint-disable-next-line import/prefer-default-export
export const store = createStore({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  // modules: { User },
});
