import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import axios from "axios";
import echarts from "echarts";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
