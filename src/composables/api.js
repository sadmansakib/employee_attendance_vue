import { computed, ref } from "vue";
import axios from "axios";
import axiosRetry from "axios-retry";
import { storage } from "@/composables/storage";
import { handleState } from "@/composables/store";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const BASE_URL = "http://localhost:8000/api/v1";

const { getAccessToken, getRefreshToken, saveTokens } = storage();
const { logout } = handleState();

export const useAuthenticatedAPI = (endpoint) => {
  const token = getAccessToken();

  return useAPI(endpoint, token ? token : undefined);
};

export const useAPI = (endpoint, access_token) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: access_token ? `Bearer ${access_token}` : undefined,
    },
  });

  const refreshToken = getRefreshToken();

  const refreshLogic = (failedRequest) =>
    instance
      .post("/token/refresh", { refresh_token: refreshToken })
      .then((tokenRefreshResponse) => {
        failedRequest.response.config.headers["Authorization"] =
          "Bearer " + tokenRefreshResponse.data.access_token;
        saveTokens(tokenRefreshResponse.data);
        return Promise.resolve();
      })
      .catch(() => {
        logout();
        return Promise.reject();
      });

  axiosRetry(instance, { retries: 3 });
  createAuthRefreshInterceptor(instance, refreshLogic);

  const loading = ref(true);
  const data = ref();
  const error = ref();

  const post = async (payload) => {
    loading.value = true;
    error.value = undefined;
    return await instance
      .post(endpoint, payload)
      .then((res) => (data.value = res.data))
      .catch((e) => {
        error.value = e;
        throw e;
      })
      .finally(() => (loading.value = false));
  };

  const get = async () => {
    loading.value = true;
    error.value = undefined;
    return await instance
      .get(endpoint)
      .then((res) => (data.value = res.data))
      .catch((e) => {
        error.value = e;
        throw e;
      })
      .finally(() => (loading.value = false));
  };

  const errorMsg = computed(() => {
    return error.value ? error.value.message : "";
  });

  const errorDetails = computed(() => {
    if (error.value && Array.isArray(error.value.response.data.errors)) {
      return error.value.response.data.errors;
    } else {
      return [];
    }
  });

  const errorData = computed(() => {
    return error.value ? error.value.response.data : {};
  });

  return {
    loading,
    data,
    error,
    post,
    get,
    errorMsg,
    errorDetails,
    errorData,
  };
};
