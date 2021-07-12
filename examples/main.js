import Vue from "vue";
import App from "./App.vue";
// import cangoDev from "../packages/index";
// Vue.use(cangoDev);
import cangoIcon from 'cango-icon'
import 'cango-icon/lib/cango-icon.css'
Vue.use(cangoIcon)
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
