<template>
  <div class="main">
    <app-header v-bind:title2="title2" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-users v-bind:users="users,tester"></app-users>
    <app-footer v-bind:title2="title2"></app-footer>
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
      tester: 'test text',
      title2: 'Vue prop title'    
    }
  },
  methods: {
    updateTitle: function(updTitle) {
      this.title2 = updTitle;
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
