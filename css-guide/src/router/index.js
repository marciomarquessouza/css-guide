import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/components/MainPage';
import PageBasic from '@/components/guides/PageBasic';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/basic',
      name: 'Basic',
      component: PageBasic,
    },
  ],
});
