import { createRouter, createWebHistory } from 'vue-router';
import { mergeRoute } from './route';

const router = createRouter({
  history: createWebHistory(),
  routes: mergeRoute
});

const setupRouter = app => {
  app.use(router)
}

export { setupRouter };

export default router
