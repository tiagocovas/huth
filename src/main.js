import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import "normalize.css"
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init({
      mirror: true
    })
  },
  render: h => h(App),
}).$mount('#app')
