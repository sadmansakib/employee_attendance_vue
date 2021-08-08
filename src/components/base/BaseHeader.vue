<template>
  <header>
    <div class="nav-items">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Statistics' }">Statistics</router-link>
        </li>
      </ul>
    </div>
    <div class="logout-item">
      <button @click.prevent="logout">logout</button>
    </div>
  </header>
</template>

<script>
import { handleState } from "@/composables/store";

export default {
  name: "BaseHeader",
  setup() {
    const { logout } = handleState();
    return { logout };
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 2px;
}

.nav-items {
  display: flex;
  justify-content: center;
}

.logout-item {
  display: flex;
  justify-content: center;
  margin-right: 0.9rem;
}

header a {
  text-decoration: none;
  color: black;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border-radius: 12px;
  border: 1px solid #4646fc;
  cursor: pointer;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

button {
  background: none;
  color: black;
  margin: 0;
  border-radius: 12px;
}

button:hover {
  border: 1px solid #4646fc;
  box-shadow: none;
}
</style>
