<template>
  <form class="stepper ml-auto mr-auto flex flex-col w-full">
    <h1 class="text-marineBlue">
      <slot name="title"></slot>
    </h1>
    <p class="text-coolGray mb-[32px]">
      <slot name="description"></slot>
    </p>
    <div>
      <slot></slot>
    </div>
    <StepButtons />
  </form>
</template>

<script setup lang="ts">
import { useStepStore } from "@/stores/step";

const stepStore = useStepStore();
</script>

<style scoped>
.stepper {
  margin-top: -60px;
  background-color: white;
  padding: 30px 20px;
  border-radius: 10px;
  max-width: 90%;
}

@media screen and (max-width: 47.9375rem) {
  .stepper {
    box-shadow: 0 10px 10px 10px #00000008;
  }
}

@media screen and (min-width: 48rem) {
  /** 768px */
  .stepper {
    margin-top: 35px;
    padding: 0 15px;
    max-width: 100%;

    width: 30rem; /** 480px */
  }
}
</style>
