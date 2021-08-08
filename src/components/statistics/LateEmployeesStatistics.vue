<template>
  <base-card v-if="data">
    <h1>Today {{ data.present }} employees are late</h1>
  </base-card>
</template>

<script>
import BaseCard from "@/components/base/BaseCard";
import { useAuthenticatedAPI } from "@/composables/api";
import { storage } from "@/composables/storage";
import { onMounted } from "vue";
import router from "@/router";

export default {
  name: "LateEmployeesStatistics",
  components: { BaseCard },
  setup() {
    const { get, data } = useAuthenticatedAPI("/current_present");
    const { removeTokens } = storage();
    onMounted(() => {
      get().catch(() => {
        removeTokens();
        router.replace({ name: "Login" });
      });
    });
    return { data };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 4rem;
}
</style>
