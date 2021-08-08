<template>
  <base-header></base-header>
  <div class="statistics-view">
    <present-employees-statistics></present-employees-statistics>
    <late-employees-statistics></late-employees-statistics>
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader";
import PresentEmployeesStatistics from "@/components/statistics/PresentEmployeesStatistics";
import LateEmployeesStatistics from "@/components/statistics/LateEmployeesStatistics";

export default {
  name: "Statistics",
  components: {
    BaseHeader,
    PresentEmployeesStatistics,
    LateEmployeesStatistics,
  },
};
</script>

<style scoped>
.statistics-view {
  display: flex;
  justify-content: center;
  align-content: center;
  /*height: 100vh;*/
}
</style>