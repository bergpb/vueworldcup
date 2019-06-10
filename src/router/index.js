import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Last from '@/components/Last'
import Future from '@/components/Future'
import Current from '@/components/Current'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
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
