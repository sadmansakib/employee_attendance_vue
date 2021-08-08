<template>
  <form @submit.prevent="signup">
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
          v-model="user.password_confirmation"
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
    <error-area
      v-if="errMsg"
      :error-details="errorDetails"
      :error="errMsg"
    ></error-area>
    <div class="register-btn">
      <button>Register</button>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput";
import { ref } from "vue";
import { useAPI } from "@/composables/api";
import ErrorArea from "@/components/ErrorArea";
import { handleState } from "@/composables/store";
import router from "@/router";

export default {
  name: "Register",
  components: {
    BaseInput,
    ErrorArea,
  },
  setup() {
    const user = ref({
      name: undefined,
      email: undefined,
      phone: undefined,
      password: undefined,
      password_confirmation: undefined,
      role: undefined,
    });

    const { post, data, errorDetails } = useAPI("/register");
    const { setState } = handleState();

    const errMsg = ref();

    const signup = () => {
      if (user.value.password !== user.value.password_confirmation) {
        errMsg.value = "password and confirmed password mismatched";
      } else {
        post(user.value)
          .then(() => {
            console.log(errorDetails);
            setState(data.value, true);
            router.replace({ name: "Home" });
          })
          .catch(() => (errMsg.value = "Unable to Signup"));
      }
    };

    return { user, signup, errorDetails, errMsg };
  },
};
</script>

<style scoped>
.password-input-control {
  display: flex;
  justify-content: space-between;
  align-content: center;
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

.register-btn {
  display: flex;
  justify-content: center;
}
</style>