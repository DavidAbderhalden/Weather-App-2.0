import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/HomeView.vue';
import Weather from '@/views/WeatherView.vue';
import Development from '@/views/DevelopmentView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/weather/:city_name',
    name: 'Weather',
    component: Weather,
  },
  {
    path: '/:_(.*)*',
    redirect: '/',
  },
];

if (process.env.NODE_ENV === 'development') {
  routes.push({
    path: '/dev',
    name: 'Development',
    component: Development,
  });
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
