import Vue from 'vue'
import Router from 'vue-router'
import Display1 from './views/Display1.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Display1',
      component: Display1
    },
    {
      path: '/1',
      name: 'Display1',
      component: Display1
    },
    {
      path: '/2',
      name: 'Display2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Display2.vue')
    },
    {
      path: '/3',
      name: 'Display3',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Display3.vue')
    }
  ]
})
