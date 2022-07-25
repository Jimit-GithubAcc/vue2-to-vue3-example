import axios from 'axios'
import { createStore } from 'vuex'
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
export default createStore({
  state: {
    users: [],
    isLoading: false
  },

  mutations: {
    GET_USERS(state, users) {
      state.users = users
    }
  },

  actions: {
    async fetchUsers({commit, state}){
      state.isLoading = true;
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      commit("GET_USERS", res.data)
      state.isLoading = false
    }
  },
  
  getters: {
    getAllUsers(state){
      return state.users
    }
  },

  modules: {
  }
})
