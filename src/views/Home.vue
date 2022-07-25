<template>
  <div class="home">
    <h1 class="text-3xl mb-6 font-bold">Users List</h1>
    <user-list :getAllUsers="getAllUsers" :isLoading="isLoading"></user-list>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { mapActions, useStore } from 'vuex'
import UserList from '../components/UserList.vue'

export default {
  name: 'Home',
  components: {
    UserList
  },
  setup() {
    const store = useStore()

    const getAllUsers = computed(() => store.getters.getAllUsers)
    const isLoading = computed(() => store.state.isLoading)

    onMounted(() => {
      store.dispatch("fetchUsers")
    })
    return {
      ...mapActions(["fetchUsers"]),
      getAllUsers,
      isLoading
    }
  },
  // computed: {
  //   ...mapState(["isLoading"]),
  //   ...mapGetters(["getAllUsers"])
  // },
  // methods: {
  //   ...mapActions(["fetchUsers"])
  // },
  // mounted() {
  //   this.fetchUsers()
  // }
}
</script>
