import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Last from './views/Last'
import Future from './views/Future'
import Current from './views/Current'
import About from './views//About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/last',
      name: 'Last',
      component: Last
    },
    {
      path: '/future',
      name: 'Future',
      component: Future
    },
    {
      path: '/current',
      name: 'Current',
      component: Current
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
