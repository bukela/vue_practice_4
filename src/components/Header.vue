<template>
 <header>
     <h1>{{ title }}</h1>
     <h1>{{ title2 }}</h1>
     <button v-on:click="changeTitle">Title</button>
 </header>
</template>

<script>
export default {
    props: ['title2'],
  data () {
    return {
      title: 'Vue header component'
    }
  },
  methods: {
      changeTitle: function() {
        //   this.title2 = 'Title 2 changed'; //menja samo na jednom mestu title2
        this.$emit('changeTitle','Title 2 changed');
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