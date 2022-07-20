<template>
  <div class="home">
    <h1 class="text-3xl mb-6 font-bold">Users List</h1>
    <user-list :getAllUsers="getAllUsers" :isLoading="isLoading"></user-list>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import UserList from '../components/UserList.vue'

export default {
  name: 'Home',
  components: {
    UserList
    
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState(["isLoading"]),
    ...mapGetters(["getAllUsers"])
  },
  methods: {
    ...mapActions(["fetchUsers"])
  },
  mounted() {
    this.fetchUsers()
  }
}
</script>
