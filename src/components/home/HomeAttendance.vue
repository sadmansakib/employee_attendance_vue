<template>
  <div class="attend-layout">
    <h1 class="time-layout">Date: {{ dateData.attending_date }}</h1>
    <h1 class="time-layout">Time: {{ dateData.signin_time }}</h1>
    <error-area v-if="errMsg" :error="errorData.error"></error-area>
    <button @click="giveAttendance">Attend</button>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import { useAuthenticatedAPI } from "@/composables/api";
import ErrorArea from "@/components/ErrorArea";

export default {
  name: "HomeAttendance",
  components: { ErrorArea },
  setup() {
    const dateData = ref({
      attending_date: "",
      signin_time: "",
      is_present: true,
    });

    const updateDate = () => {
      const date = new Date();
      dateData.value.attending_date =
        date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2);
      dateData.value.signin_time =
        ("0" + date.getHours()).slice(-2) +
        ":" +
        ("0" + date.getMinutes()).slice(-2);
    };

    onBeforeMount(() => {
      setInterval(updateDate, 1000);
    });

    const { post, errorData } = useAuthenticatedAPI("/attend");

    const errMsg = ref();

    const giveAttendance = () => {
      post(dateData.value).catch(() => {
        errMsg.value = "Unable to give attendance";
      });
    };

    return { dateData, giveAttendance, errMsg, errorData };
  },
};
</script>

<style scoped>
.attend-layout {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
}

h1 {
  margin: 0;
}

.time-layout {
  margin: 1.25rem;
  font-size: 2.75rem;
}
</style>
