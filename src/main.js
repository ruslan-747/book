import Vue from 'vue';
import { CarouselPlugin, LayoutPlugin } from 'bootstrap-vue';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/fonts.css';
import '@/assets/bootstrap.scss';

Vue.use(VueScrollTo, {
  offset: -50,
});

Vue.config.productionTip = false;

Vue.use(CarouselPlugin);
Vue.use(LayoutPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
