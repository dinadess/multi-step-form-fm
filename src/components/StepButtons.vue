<template>
  <div
    v-if="stepStore.currentStepNumber !== 5"
    class="stepButtons mt-auto flex justify-between"
  >
    <button
      v-if="stepStore.currentStepNumber !== 1"
      @click.prevent="stepStore.goBack"
      class="text-coolGray hover:text-marineBlue focus:text-marineBlue font-medium transition-colors"
    >
      Go Back
    </button>
    <button
      v-if="stepStore.currentStepNumber === 4"
      class="font-medium text-white bg-purplishBlue py-[12px] px-[30px] rounded-md ml-auto ring-4 ring-offset-2 ring-transparent hover:opacity-90 focus:ring-marineBlue focus-visible:outline-none focus-visible:ring-marineBlue transition-all"
      @click.prevent="stepStore.nextStep"
    >
      Confirm
    </button>
    <button
      v-else
      class="font-medium text-white bg-marineBlue py-[12px] px-[24px] rounded-md ml-auto ring-4 ring-offset-2 ring-transparent hover:opacity-90 focus:ring-purplishBlue focus-visible:outline-none focus-visible:ring-purplishBlue transition-all"
      @click.prevent="stepStore.nextStep"
    >
      Next Step
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStepStore } from "@/stores/step";
import { ref } from "vue";

const stepStore = useStepStore();
</script>

<style scoped>
.stepButtons {
  background: white;
  width: 100%;
  margin-left: auto;
  padding: 1rem;
  margin-right: auto;
  position: fixed;
  left: 0;
  bottom: 0;
  margin-bottom: 0;
  z-index: 999;

  will-change: transform;
}

@media screen and (max-width: 47.9375rem) {
  .stepButtons {
    box-shadow: 0 0 10px #00000010;
  }
  .stepButtons button {
    font-size: 0.875rem;
  }
}

@media screen and (min-width: 48rem) {
  /* 768px */
  .stepButtons {
    position: initial;
    padding: 0;
    margin-bottom: 18px;
  }
}
</style>
