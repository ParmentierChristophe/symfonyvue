import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// components
import Test from "../components/Test";
import About from "../components/About";


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Test
    },
    {
      path: '/about',
      name:'about',
      component:About
    }

  ]
})