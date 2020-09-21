import Vue from 'vue';
import VueRouter from 'vue-router';

import { Home, Info } from './pages';
import App from './App';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/info', component: Info }
];

const router = new VueRouter({
  routes,
});

new Vue({
  el: "#app",
  components: { App },
  template: '<App></App>',
  router,
})
