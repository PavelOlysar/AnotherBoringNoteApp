<script setup lang="ts">
</script>

<template>
  <nav>
    <RouterLink class="logo rLink" to="/">Another Boring Note App</RouterLink>
    <div class="search">
      <input type="text" placeholder="Search..." />
      <button>Search</button>
    </div>
    <RouterLink class="account rLink" to="/">Account</RouterLink>
  </nav>
</template>

<style scoped lang="scss">
nav {
  width: 100%;
  height: 6.25rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  .logo {
    font-size: 1.25rem;
    font-weight: 600;

    color: $lightMain;
  }

  .search {

    .input {
      color: red;
    }
  }

  .account {
    width: 8rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 1.5rem;

    font-size: 1.25rem;
    font-weight: 500;

    background-color: $primary;
    color: $lightMain;

    &:hover {
      background-color: $secondary;
    }
  }
}
</style>
