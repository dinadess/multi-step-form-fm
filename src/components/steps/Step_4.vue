<template>
  <TheStepper>
    <template #title>Finishing up</template>
    <template #description
      >Double-check everything looks OK before confirming.</template
    >
    <div class="bg-magnolia px-[20px] md:px-[30px] py-[20px] rounded-xl">
      <div class="flex justify-between items-center">
        <div>
          <h2 class="text-marineBlue">
            {{ stepStore.plan?.name }} ({{ stepStore.planIsYearly }})
          </h2>
          <button
            class="underline text-coolGray hover:text-marineBlue focus::text-marineBlue transition-colors"
            aria-label="Change Plan"
            @click.prevent="stepStore.currentStepNumber = 2"
          >
            Change
          </button>
        </div>
        <p class="text-base md:text-xl">
          <strong class="text-marineBlue">
            ${{ stepStore.plan?.price }}/{{ stepStore.moOrYr }}
          </strong>
        </p>
      </div>
      <div>
        <ul
          v-if="stepStore.addons.length"
          class="bt border-t-2 border-t-lightGray pt-[15px] mt-[15px]"
        >
          <li
            v-for="addon in stepStore.addons"
            :key="addon['name']"
            class="flex justify-between last:mb-0 mb-[15px]"
          >
            <p class="text-coolGray">{{ addon["name"] }}</p>
            <span class="text-marineBlue font-medium"
              >+${{ addon["price"] }}/{{ stepStore.moOrYr }}</span
            >
          </li>
        </ul>
      </div>
    </div>

    <div
      class="flex justify-between px-[20px] md:px-[30px] py-[20px] text-coolGray"
    >
      <p>Total (per {{ stepStore.monthOrYear }})</p>
      <strong class="text-lg md:text-2xl text-purplishBlue"
        >+${{ stepStore.total }}/{{ stepStore.moOrYr }}</strong
      >
    </div>
  </TheStepper>
</template>

<script setup lang="ts">
import TheStepper from "@/components/TheStepper.vue";

import { useStepStore } from "@/stores/step";

const stepStore = useStepStore();
</script>

<style scoped>
h2 {
  font-size: 1rem;
}

@media screen and (min-width: 48rem) {
  h2 {
    font-size: 1.2rem;
  }
}
</style>
