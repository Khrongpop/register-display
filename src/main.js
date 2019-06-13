import Vue from 'vue'
import App from './App.vue'

// import VueFire from "vuefire"
// Vue.use(VueFire)
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
