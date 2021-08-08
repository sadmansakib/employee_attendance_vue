<template>
  <router-view />
</template>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

button {
  text-align: center;
  margin-top: 0.5rem;
  background-color: #4646fc;
  font: inherit;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  text-transform: capitalize;
}

form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: white;
}

label {
  display: block;
  margin-left: 0.2rem;
  text-align: start;
  font-weight: bold;
}

.form-control {
  margin: 0.5rem auto;
}
</style>
