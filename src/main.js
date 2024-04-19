import { createApp } from 'vue';
import App from './App.vue';

// 公用样式
import './styles/main.css';

// antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// router
import { setupRouter } from './router';

// unocss
import 'uno.css';

// guard
import './guard';

// pinia
import { setupStore } from '@/store';

const setupAll = () => {
  const app = createApp(App)

  app.use(Antd)

  setupRouter(app)

  setupStore(app)

  app.mount('#app')
}

setupAll()
