<template>
  <div class="test">
    <h1>This is a test page</h1>
    <div>Item: {{ $route.params.att }}</div>
    <button v-on:click="incrementCount">Cliquez ici!</button>
    <p>Number of counts : {{count}}</p>
  </div>
</template>
<script>
    export default {
        data:function() {
          return { 
            msg: 'Bonjour !',
            count:0 };
          },
        beforeCreate() { console.log('Je ne suis pas encore  créé') },
        created() { console.log('Je suis créé !') },
        beforeMount() { console.log('Je vais bientôt être monté sur le DOM!') },
        mounted() { console.log('Je suis monté sur le DOM!') },
        beforeDestroy() { console.log('Je suis sur le point de disparaître du DOM !') },
        destroyed() { console.log('Je suis supprimé') },
        methods : {
          incrementCount(){
            this.count++;
          }
        }
    }
</script>
<style>
    button {
        background-color: #42b983;
    }
</style>