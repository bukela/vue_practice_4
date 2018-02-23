<template>
 <footer>
     <h1>{{ title }}</h1>
     <p>{{ copy }} ©{{ new Date().getFullYear() }}</p>
 </footer>
</template>

<script>
export default {

  data () {
    return {
      title: 'Vue footer component',
      copy: 'Copyright'
    }
  }
}
</script>

<style scoped>
    footer {
        background: #222;
        padding: 10px;
    }
    h1,p {
        color: lightgreen;
        text-align: center;
    }

</style>