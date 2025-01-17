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
    path: '/noticias',
    name: 'News',
    component: () => import('../views/news/News.vue')
  },
  {
    path: '/noticias/post-example',
    name: 'NewsDetails',
    component: () => import('../views/news/NewsDetails.vue')
  },
  {
    path: '/ranking-general',
    name: 'Ranking',
    component: () => import('../views/ranking/Ranking.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
