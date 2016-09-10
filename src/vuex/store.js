import Vue from 'vue';
import Vuex from 'vuex';
import plugins from './plugins';

Vue.use(Vuex);

export const STORAGE_KEY = 'wysi-app';

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  localStorage.clear();
}

// const wysiApp = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
const wysiApp = {
  tree: [
    {
      name: 'title',
      params: {
        size: 'large',
      },
    },
    {
      name: 'title',
      params: {
        size: 'small',
      },
    },
    {
      tree: [
        {
          name: 'checkbox',
        },
        {
          name: 'title',
        },
      ],
      params: {},
    },
  ],
  params: {
    container: ['vertical'],
  },
  content: ['lala', 'lorem ipsum', [false, 'le']],
};

const state = {
  wysiApp,
  currentTree: [],
  selectedComponent: {
    name: 'title',
    dragged: false,
  },
};

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
const mutations = {
  SELECT_COMPONENT(state, name) {
    state.selectedComponent = { name, dragged: true };
  },
  DESELECT_COMPONENT(state) {
    state.selectedComponent.dragged = false;
  },
  ADD_NODE(state, node) {
    state.wysiApp.push(node);
  },
  DELETE_NODE(state, node) {
    state.wysiApp.splice(state.wysiApp.indexOf(node), 1);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  plugins,
});
