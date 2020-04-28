import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let uuid = 0;

Vue.config.productionTip = false

Vue.mixin({
  beforeCreate() {
    
  },
  mounted() {
    console.log('I am mixed into evey component.');
    uuid += 1;
    this.id = uuid;
    console.log(uuid);
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
