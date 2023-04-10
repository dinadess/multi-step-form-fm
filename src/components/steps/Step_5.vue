<template>
  <div class="thankYouContainer flex flex-col items-center justify-center">
    <ThankYouIcon aria-hidden="true" class="mb-4 md:mb-6" />
    <h1 class="text-marineBlue mb-2">Thank You!</h1>
    <p class="text-center text-coolGray">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </p>
  </div>
</template>

<script setup lang="ts">
import { useStepStore } from "@/stores/step";
import ThankYouIcon from "@/components/icons/ThankYouIcon.vue";

const stepStore = useStepStore();
</script>

<style scoped>
.thankYouContainer {
  background-color: white;
  padding: 80px 20px;
  border-radius: 10px;
  max-width: 90%;
  margin-top: -60px;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: 48rem) {
  /** 768px */
  .thankYouContainer {
    margin-top: 0;
    padding: 0;
    max-width: 100%;
  }

  .thankYouContainer p {
    max-width: 90%;
  }
}
</style>
