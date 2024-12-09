<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarAuthenticated from './components/NavbarAuthenticated.vue'
</script>

<template>
  <div class="app">
    <header>
      <NavbarAuthenticated />
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <h1>fott</h1>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.app {
  background-color: $darkMain;

  width: 100%;
}
</style>
