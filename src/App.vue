<template>
  <div class="main">
    <app-header></app-header>
    <app-users></app-users>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Users from './components/Users.vue'
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-users': Users,
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
  body {
    margin: 0 auto;
    font-family: 'Arial';
  }
  .main {
    width: 900px;
    margin: 0 auto;
  }
</style>
