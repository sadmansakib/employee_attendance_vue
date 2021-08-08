<template>
  <div class="profile-view">
    <h1>{{ data.name }}</h1>
    <div class="role-tag">
      <p>{{ data.role.type }}</p>
    </div>
    <p>{{ data.email }}</p>
    <p>{{ data.phone }}</p>
  </div>
</template>

<script>
export default {
  name: "HomeProfile",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.profile-view {
  padding: 5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.role-tag {
  margin: 1rem auto;
  padding: 0.5rem;
  max-width: 20rem;
  font-weight: bold;
  background-color: blueviolet;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: white;
  border-radius: 20px;
}

h1 {
  font-size: 2rem;
}

h1,
p {
  margin: 0;
}
</style>
