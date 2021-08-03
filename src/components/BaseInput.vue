<template>
  <label :for="id">{{ label }}</label>
  <input
    :type="type"
    :name="name"
    :id="id"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
    },
  },
  name: "BasePassword",
};
</script>

<style scoped>
label {
  display: block;
  margin-left: 0.2rem;
  text-align: start;
  font-weight: bold;
}
input {
  display: block;
  width: 100%;
  margin: 0.5rem auto;
  font: inherit;
  padding: 0.5rem;
}

input:focus {
  outline: none;
}
</style>
