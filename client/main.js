import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router: new VueRouter({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: Home
      }
    ]
  })
})
