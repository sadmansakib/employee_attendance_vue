<template>
  <div class="error-area" v-if="error">
    {{ error }}
    <ul v-if="errorDetails">
      <li v-for="error in errorDetails" :key="error" v-html="error" />
    </ul>
  </div>
</template>

<script>
export default {
  name: "ErrorArea",
  props: {
    error: {
      type: String,
    },
    errorDetails: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.error-area {
  background-color: rgba(231, 19, 19, 0.8);
  color: white;
  margin-top: 0.8rem;
  padding: 0.5rem;
  text-align: center;
  align-content: center;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
