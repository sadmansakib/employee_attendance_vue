<template>
  <base-header></base-header>
  <div class="home-layout">
    <base-card v-if="data">
      <home-profile :data="data"></home-profile
    ></base-card>
    <base-card> <home-attendance></home-attendance></base-card>
  </div>
</template>

<script>
import BaseCard from "@/components/base/BaseCard";
import { useAuthenticatedAPI } from "@/composables/api";
import { onMounted } from "vue";
import router from "@/router";
import BaseHeader from "@/components/base/BaseHeader";
import HomeProfile from "@/components/home/HomeProfile";
import HomeAttendance from "@/components/home/HomeAttendance";
import { storage } from "@/composables/storage";

export default {
  name: "Home",
  components: { BaseCard, BaseHeader, HomeProfile, HomeAttendance },
  setup() {
    const { get, data, errorDetails } = useAuthenticatedAPI("/profile");
    const { removeTokens } = storage();
    onMounted(() => {
      get().catch(() => {
        removeTokens();
        router.replace({ name: "Login" });
      });
    });
    return { data, errorDetails };
  },
};
</script>

<style scoped>
.home-layout {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
}
</style>
