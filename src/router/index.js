import Vue from 'vue';
import Router from 'vue-router';
import PageOne from '@/components/PageOne';
import PageTwo from '@/components/PageTwo';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageOne',
      component: PageOne,
    },
    {
      path: '/2',
      name: 'PageTwo',
      component: PageTwo,
    },
  ],
});
