<template>
 <header>
     <h1>{{ title }}</h1>
 </header>
</template>

<script>
export default {

  data () {
    return {
      title: 'Vue header component'
    }
  }
}
</script>

<style scoped>
    header {
        background: lightgreen;
        padding: 20px;
    }
    h1 {
        color: #222;
        text-align: center;
    }

</style>