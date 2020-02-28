import Vue from 'vue'
import App from './App.vue'


//Not sure what this does
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
