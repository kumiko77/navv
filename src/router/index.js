import { createRouter, createWebHashHistory } from 'vue-router';
import { mergeRoute } from './route';

const router = createRouter({
  history: createWebHashHistory(),
  routes: mergeRoute
});

const setupRouter = app => {
  app.use(router)
}

export { setupRouter };

export default router
