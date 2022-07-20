<template>
  <div class="container">
    <div v-if="isLoading">
        <h1>Loading...</h1>
    </div>
    <div class="overflow-x-auto relative" v-else>
      <table class="w-5/6 ml-auto mr-auto text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">Name</th>
            <th scope="col" class="py-3 px-6">Username</th>
            <th scope="col" class="py-3 px-6">Email</th>
            <th scope="col" class="py-3 px-6">Company Name</th>
          </tr>
        </thead>
        <tbody v-for="user in getAllUsers" :key="user.id">
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
            <td class="py-4 px-6">{{user.name}}</td>
            <td class="py-4 px-6">{{user.username}}</td>
            <td class="py-4 px-6">{{user.email}}</td>
            <td class="py-4 px-6">{{user.company.name}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserList",
  props: ["getAllUsers", 'isLoading'],
};
</script>

<style scoped></style>
