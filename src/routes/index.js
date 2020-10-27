import Vue from 'vue';
import VueRouter from 'vue-router';
import { Feed } from '../pages';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/feed',
      name: 'Feed',
      component: Feed,
    },
  ],
});
