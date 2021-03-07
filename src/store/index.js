import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    day:6,
    month:3,
    year:2020
  },
  getters: {
    formattedDate: state => {
        return `${state.day}-${state.month}-${state.year}`
    }
},  
  mutations: {
    INCREMENT_DAY(state,payload) {
      console.log("there cqn be a paylaod in here : " + payload)
      state.day++
    },
    INCREMENT_MONTH(state) {
      state.month++
    },
    INCREMENT_YEAR(state) {
      state.year++
      state.month=1
    },
  },
  actions: {
    incrementMonth(context/*, amount*/) {
    if(context.state.month < 12){
      context.commit('INCREMENT_MONTH')
    } 
    else{
      context.commit('INCREMENT_YEAR')
    } 
  }
  },
  modules: {
  }
})
