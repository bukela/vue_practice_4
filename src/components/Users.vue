<template>
 <div id="users">
    <ul>
        <li v-for="user in users" :key="user" v-on:click="user.show = !user.show">
            <h3>{{ user.name }}</h3>
            <h6 v-show="user.show">{{ user.speciality }}</h6>
        </li>
    </ul>
 </div>
</template>

<script>
export default {

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
    }
  }
}
</script>

<style scoped>
    users {
        background: #222;
    }
    h1,p {
        color: lightgreen;
        text-align: center;
    }
    ul {
        list-style-type: square;
    }

</style>