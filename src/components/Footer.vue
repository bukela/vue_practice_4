<template>
 <footer>
     <h1>{{ title }}</h1>
     <p>{{ copy }} ©{{ new Date().getFullYear() }}</p>
     <h2>{{ title2 }}</h2>
 </footer>
</template>

<script>
import {bus} from '../main';

export default {
    props: ['title2'],
  data () {
    return {
      title: 'Vue footer component',
      copy: 'Copyright'
    }
  },
  created () {
      bus.$on('titleChanged',(data) => {
          this.title2 = data;
      })
  }
 }
</script>

<style scoped>
    footer {
        background: #222;
        padding: 10px;
    }
    h1,h2,p {
        color: lightgreen;
        text-align: center;
    }

</style>