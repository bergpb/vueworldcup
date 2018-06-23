import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Future from '@/components/Future'
import Current from '@/components/Current'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    }
  ]
})
