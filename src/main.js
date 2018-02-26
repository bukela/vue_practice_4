import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export const bus = new Vue(); //event bus

new Vue({
  el: '#app',
  render: h => h(App)
})
