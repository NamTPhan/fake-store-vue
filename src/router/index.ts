import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/product/:id',
    name: 'ProductInfo',
    component: () => import('../views/ProductView.vue'),
  },
  {
    path: '/favorites',
    name: 'Favorites',
    // route level code-splitting
    // this generates a separate chunk (favorites.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "favorites" */ '../views/FavoritesView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
