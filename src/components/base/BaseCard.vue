<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
};
</script>

<style>
label {
  display: block;
  margin-left: 0.2rem;
  text-align: start;
  font-weight: bold;
}

.base-card {
  margin: 2rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}
</style>
