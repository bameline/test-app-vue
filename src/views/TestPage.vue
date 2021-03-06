<template>
  <div class="test">
    <h1>This is a test page</h1>
    <div>Item: {{ $route.params.att }}</div>
    <button v-on:click="incrementCount">Cliquez ici! {{count}}</button>
     <div class="exemple">hello !</div>
     <ChildComponentTestPage @custom-event-name="setMessage" />
     <ChildComponent2TestPage>
       <template v-slot:bottom>
         <p>this is bottom</p>
       </template>
       <template v-slot:top>
         <p>this is top</p>
       </template>
     </ChildComponent2TestPage>
  </div>
</template>
<script>
import ChildComponentTestPage from "../components/ChildComponentTestPage"
import ChildComponent2TestPage from "../components/ChildComponent2TestPage"
    export default {
        data:function() {
          return { 
            msg: 'Bonjour !',
            count:0 };
          },
        components: {
          ChildComponentTestPage,
          ChildComponent2TestPage
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
          },
          setMessage(payload){
            console.log(payload.message)
          }
        }
    }
</script>
<style scoped>
    .exemple {
    color: red;
    }
    button {
        background-color: #42b983;
    }
</style>