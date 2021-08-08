<template>
  <base-card v-if="data">
    <h1>Today {{ data.present }} employees are present</h1>
  </base-card>
</template>

<script>
import BaseCard from "@/components/base/BaseCard";
import { useAuthenticatedAPI } from "@/composables/api";
import { onMounted } from "vue";
import router from "@/router";
import { storage } from "@/composables/storage";

export default {
  name: "PresentEmployeesStatistics",
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
