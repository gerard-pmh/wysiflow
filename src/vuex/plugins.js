import { STORAGE_KEY } from './store';
// import createLogger from 'vuex';

const localStoragePlugin = store => {
  store.subscribe((mutation, { wysiApp }) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wysiApp));
  });
};

// export default process.env.NODE_ENV !== 'production'
//   ? [createLogger(), localStoragePlugin]
// : [localStoragePlugin];

export default [localStoragePlugin];
