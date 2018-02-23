<template>
  <div class="main">
    <app-header></app-header>
    <app-users v-bind:users="users,tester"></app-users>
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
      users: [
              {name: 'Ryu', speciality: 'Vue Components', show: false},
              {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
              {name: 'Hitoshi', speciality: 'Click Events', show: false},
              {name: 'Tango', speciality: 'Conditionals', show: false},
              {name: 'Kami', speciality: 'Webpack', show: false},
              {name: 'Yoshi', speciality: 'Data Diggin', show: false}
          ],
      tester: 'test text'    
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
