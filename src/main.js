import Vue from 'vue'
import App from './App.vue'
import store from './plugins/store'
import VModal from 'vue-js-modal';
import vuetify from './plugins/vuetify'

Vue.use(VModal, { dialog: true });
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
