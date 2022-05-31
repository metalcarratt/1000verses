import Vue from 'vue'
import App from './App.vue'
import Verse from './components/Verse.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false

const routes = [
  { path: '/', redirect: '/0' },
  { path: '/:id', component: Verse }
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');