<template>
  <form @submit.prevent="">
    <div class="form-control">
      <base-input
        id="employee-name"
        label="Name:"
        name="employee-name"
        type="text"
        v-model="user.name"
      ></base-input>
    </div>
    <div class="form-control">
      <base-input
        id="employee-email"
        label="Email:"
        name="employee-email"
        type="email"
        v-model="user.email"
      ></base-input>
    </div>
    <div class="form-control">
      <base-input
        id="employee-phone"
        label="Phone:"
        name="employee-phone"
        type="tel"
        v-model="user.phone"
      ></base-input>
    </div>
    <div class="password-input-control">
      <div class="form-control">
        <base-input
          type="password"
          label="Password:"
          name="employee-password"
          id="employee-password"
          v-model="user.password"
        ></base-input>
      </div>
      <div class="form-control">
        <base-input
          type="password"
          label="Password Confirmation:"
          name="employee-password-confirm"
          id="employee-password-confirm"
          v-model="user.passwordConfirm"
        ></base-input>
      </div>
    </div>
    <div class="form-control">
      <label for="employee-role"> Role at Company:</label>
      <select id="employee-role" name="employee-role" v-model="user.role">
        <option value="Sr Software Engineer">Sr. Software Engineer</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Junior Software Engineer">
          Junior Software Engineer
        </option>
        <option value="Intern Software Engineer">
          Intern Software Engineer
        </option>
      </select>
    </div>
    <div>
      <button>Register</button>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import { ref } from "vue";

export default {
  name: "Register",
  components: {
    BaseInput,
  },
  setup() {
    const user = ref({
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
      role: "",
    });

    return { user };
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem auto;
}

.password-input-control {
  display: flex;
  align-content: space-between;
}
select {
  display: block;
  width: 100%;
  margin: 0.5rem auto;
  font: inherit;
  padding: 0.5rem;
}

label {
  display: block;
  margin-left: 0.2rem;
  text-align: start;
  font-weight: bold;
}
</style>
