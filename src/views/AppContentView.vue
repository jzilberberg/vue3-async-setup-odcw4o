<script setup>
import { RouterView } from 'vue-router'
import { computed, ref } from 'vue'
</script>

<template>
  <div class="container-fluid pt-1 pl-0 pr-0 h-100">
    <RouterView name="mainContent"></RouterView>
  </div>
</template>

<style lang="scss" scoped></style>
