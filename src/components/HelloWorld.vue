<template>
  <div class="hello">
    <nav>
        <HomeLink />
      </nav>
    <h1>{{ msg }}</h1>
    <p>{{day}} / {{month}} / {{year}}</p>
    <p>La date stockée dans Vuex est le {{ formattedDate }}.</p>
    <button v-on:click="incrementDay">Increment day!</button>
    <button v-on:click="incrementMonth">Increment month!</button>
  </div>
</template>

<script>
import HomeLink from './Menu.vue'
import {mapState,mapGetters, mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type : String,
      required : true,
      default : 'Hello default'
    }
  },
  components: {
    HomeLink
  },
  computed:{
    ...mapState(["day","year","month"]),
    ...mapGetters(['formattedDate'])
  },
  methods:{
    ...mapActions(['incrementMonth']),
    incrementDay(){
      this.$store.commit('INCREMENT_DAY', null)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
