import { reactive, toRefs } from "vue";
import { storage } from "@/composables/storage";
import router from "@/router";

const state = reactive({
  isAuthenticated: false,
  error: undefined,
});

const { saveTokens, getAccessToken, removeTokens } = storage();

const token = getAccessToken();

if (token) {
  state.isAuthenticated = true;
}

export const handleState = () => {
  const setState = (tokens, remember) => {
    if (remember) {
      saveTokens(tokens);
    }
    state.error = undefined;
    state.isAuthenticated = true;
  };

  const logout = () => {
    removeTokens();
    router.replace({ name: "Login" });
    return Promise.resolve((state.isAuthenticated = false));
  };

  return { setState, logout, ...toRefs(state) };
};
