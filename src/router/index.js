import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TrendingView from "../views/TrendingView.vue";
import TopView from "../views/TopView.vue";
import UpcomingView from "../views/UpcomingView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/top-rated",
    name: "top-rated",
    component: TopView,
  },
  {
    path: "/trending",
    name: "trending",
    component: TrendingView,
  },
  {
    path: "/upcoming",
    name: "upcoming",
    component: UpcomingView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
