import Vue from 'vue';
import VueRouter from 'vue-router';
import { Home, Info } from '../views';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/info', component: Info }
];

const router = new VueRouter({
  routes,
});

export default router;
