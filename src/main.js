import Vue from 'vue'
import store from './store';
import router from './router/index';
import Particles from 'vue-particles';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Cookies from 'vue-cookies';

// import axios from 'axios';//通过import引入

import App from './App.vue'
// Vue.prototype.$axios = axios

Vue.use(Particles);
Vue.use(ElementUI);
Vue.prototype.$cookie = Cookies;



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  // axios
}).$mount('#app')
