<template>
  <form class="login-form" @submit.prevent="login">
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
        type="password"
        label="Password:"
        name="employee-password"
        id="employee-password"
        v-model="user.password"
      ></base-input>
    </div>
    <error-area
      v-if="errMsg"
      :error-details="errorDetails"
      :error="errMsg"
    ></error-area>
    <div class="login-btn">
      <button>Login</button>
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
  name: "Login",
  components: { BaseInput, ErrorArea },
  setup() {
    const user = ref({
      email: undefined,
      password: undefined,
    });
    const { post, data, errorDetails } = useAPI("/login");
    const { setState } = handleState();
    const errMsg = ref();

    const login = () => {
      post(user.value)
        .then(() => {
          setState(data.value, true);
          router.replace({ name: "Home" });
        })
        .catch(() => (errMsg.value = "Unable to Login"));
    };

    return { user, post, data, errorDetails, errMsg, login };
  },
};
</script>

<style scoped>
.login-form {
  margin-top: 10rem;
  justify-content: center;
}
.login-btn {
  display: flex;
  justify-content: center;
}
</style>
