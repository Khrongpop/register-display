import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFire from 'vuefire'
Vue.use(VueFire);
import BootstrapVue from 'bootstrap-vue'
// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

import html2canvas from 'html2canvas'

let MyPlugin = {
  install(Vue, options) {
    window.html2canvas = html2canvas
  }
}

// ...
import VueHtml2Canvas from 'vue-html2canvas';
 
Vue.use(VueHtml2Canvas);
Vue.use(MyPlugin)

import 'babel-polyfill'
import 'babel-plugin-transform-regenerator'

Vue.mixin({
  data () {
    return {
      scrolled: false,
      windowWidth: 0,
      windowHeight: 0,
      bg_animate: {'background-image':`url(/bg_animate.gif)`,'height':'100%'}
    }
  },
  computed: {
    baseURL() {
      return process.env.NODE_ENV.toLowerCase() === "production"
        // ? "https://www.ict.su.ac.th/func/shortcut"
        ? ""
        : "";
    },
    xs () {
      return this.windowWidth < 576
    },
    sm () {
      return this.windowWidth >= 576
    },
    md () {
      return this.windowWidth >= 768
    },
    lg () {
      return this.windowWidth >= 992
    },
    xl () {
      return this.windowWidth >= 1200
    },
    removeContainerOnMobile () {
      return this.xs ? '' : 'container'
    },
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)

      // Init
      this.getWindowWidth()
      this.getWindowHeight()
    })
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {

    handleScroll () {
      this.scrolled = window.scrollY
    },
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth
    },
    getWindowHeight (event) {
      this.windowHeight = document.documentElement.clientHeight
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.getWindowWidth)
      window.removeEventListener('resize', this.getWindowHeight)
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
