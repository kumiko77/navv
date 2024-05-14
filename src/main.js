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
import './permission';

// pinia
import { setupStore } from '@/store';

import {install} from '@icon-park/vue-next/es/all';
import '@icon-park/vue-next/styles/index.css';

const setupAll = () => {
  const app = createApp(App)

  app.use(Antd)

  setupRouter(app)

  setupStore(app)

  install(app);

  app.mount('#app')
}

setupAll()
