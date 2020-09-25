import Vue from 'vue';
import VueRouter from 'vue-router';
import { Home, Info, Itineraries, Results, Gallery, Contact, NotFound } from '../views';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/info', component: Info },
  { path: '/itineraries', component: Itineraries },
  { path: '/results', component: Results },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact },
  { path: '*', component: NotFound },
];

const router = new VueRouter({
  routes,
});

export default router;
