<script setup></script>

<template>
  <div id="navbare">
    Nav: <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'Application Detail View', params: { id: 16 } }">App</router-link> |
    <router-link :to="{ name: 'User Detail View', params: { id: 5 } }">User</router-link>
    Nav: <router-link :to="{ name: 'async' }">My Async</router-link> | <br /><br />
  </div>
</template>

<style scoped></style>
