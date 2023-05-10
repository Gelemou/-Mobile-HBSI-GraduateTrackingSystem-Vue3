import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createPinia } from "pinia";

import "./assets/main.css";

const app = createApp(App);

app.use(ElementPlus);
app.use(createPinia);
app.use(router);

app.mount("#app");

// 去掉警告信息
app.config.warnHandler = () => null;

// 路由跳转后页面滚动到顶部
router.afterEach((to, from) => {
  window.scrollTo(0, 0);
});
