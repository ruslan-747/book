import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function findChild(pages, parentName) {
  return pages.find((p) => p.routeName === parentName);
}

export default new Vuex.Store({
  state: {
    theme: 'light',
    menuIsOpen: false,
    pages: [
      {
        routeName: 'hardware',
        heading: 'Главная',
        children: [],
      },
      {
        routeName: 'cpu',
        heading: 'Процессор',
        children: [],
      },
      {
        routeName: 'bus',
        heading: 'Шина',
        children: [],
      },
      {
        routeName: 'ram',
        heading: 'Оперативная память',
        children: [],
      },
    ],
  },
  getters: {
    pages(state) {
      return state.pages;
    },
  },
  mutations: {
    PAGES_ADD_CHILD(state, payload) {
      const { href, heading, parentRouteName } = payload;
      const page = findChild(state.pages, parentRouteName);
      page.children.push({
        href,
        heading,
      });
    },
    PAGES_REMOVE_CHILD(state, payload) {
      const { parentRouteName, href } = payload;
      const page = findChild(state.pages, parentRouteName);
      page.children = page.children.filter((p) => p.href !== href);
    },
    SET_THEME(state, name) {
      localStorage.theme = name;
      state.theme = name;
    },
    TOGGLE_MENU(state) {
      state.menuIsOpen = !state.menuIsOpen;
    },
    CLOSE_MENU(state) {
      state.menuIsOpen = false;
    },
  },
  actions: {
  },
  modules: {
  },
});
