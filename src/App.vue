<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    // MyAsyncComponent,
    NavBar,
  },
}
</script>

<template>
  <div id="root">
    <!-- <Suspense>
    <MyAsyncComponent />
  </Suspense> -->

    <!-- OR with a fallback: -->
    <NavBar />
    <RouterView class="view" name="appContent" v-slot="{ Component }">
      <template v-if="Component">
        <Suspense timeout="0">
          <template #default>
            <component :is="Component" />
          </template>
          <template #fallback>
            <span>Loading...</span>
          </template>
        </Suspense>
      </template>
    </RouterView>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
