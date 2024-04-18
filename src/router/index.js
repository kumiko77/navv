import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/nav',
    name: 'nav',
    component: () => import('@/views/nav/index.vue')
  },
  {
    path: '/',
    name: 'data',
    component: () => import('@/views/layout/base.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
