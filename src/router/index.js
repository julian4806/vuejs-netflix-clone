import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TrendingView from '../views/TrendingView.vue'
import HotView from '../views/HotView.vue'
import NewView from '../views/NewView.vue'
import GenreView from '../views/GenreView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/trending',
    name: 'trending',
    component: TrendingView
  },
  {
    path: '/hot',
    name: 'hot',
    component: HotView
  },
  {
    path: '/new',
    name: 'new',
    component: NewView
  },
  {
    path: '/genre',
    name: 'genre',
    component: GenreView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
