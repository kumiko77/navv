import { createApp } from 'vue';
import App from './App.vue';

// 公用样式
import './styles/main.css';

// antd
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// router
import router from './router';

// unocss
import 'uno.css';

createApp(App)
  .use(Antd)
  .use(router)
  .mount('#app')
