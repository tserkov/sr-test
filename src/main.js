// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueScrollReveal from 'vue-scroll-reveal'; // eslint-disable-line import/no-absolute-path
import App from './App';
import router from './router';

Vue.use(VueScrollReveal);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
