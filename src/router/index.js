import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'hardware' },
  },
  {
    path: '/hardware',
    name: 'hardware',
    component: () => import('../views/Hardware.vue'),
  },
  {
    path: '/cpu',
    name: 'cpu',
    component: () => import('../views/Cpu.vue'),
  },
  {
    path: '/bus',
    name: 'bus',
    component: () => import('../views/Bus.vue'),
  },
  {
    path: '/ram',
    name: 'ram',
    component: () => import('../views/Ram.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
