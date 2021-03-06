import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test/:att',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/TestPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/grocery',
    name: 'Grocery',
    component: () => import(/* webpackChunkName: "about" */ '../views/Grocery.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
