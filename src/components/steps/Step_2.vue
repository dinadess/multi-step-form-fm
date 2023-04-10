<template>
  <TheStepper>
    <template #title>Select your plan</template>
    <template #description
      >You have the option of monthly or yearly billing.</template
    >
    <p v-if="errors.plan" class="error-msg text-strawberryRed font-medium mb-4">
      {{ errors.plan }}
    </p>
    <div>
      <ul class="plans-container">
        <li v-for="plan in plans" :key="plan.name">
          <input
            type="radio"
            name="plan"
            :id="plan.name"
            v-bind:value="plan"
            v-model="stepStore.plan"
          />
          <label :for="plan.name">
            <component :is="plan.icon" class="plan__icon" aria-hidden="true" />
            <section>
              <h2>{{ plan.name }}</h2>
              <p class="planPrice font-medium text-coolGray">
                ${{ plan.price }}/{{ stepStore.moOrYr }}
              </p>
              <span
                v-if="stepStore.isYearly"
                class="text-marineBlue font-medium text-sm"
                >{{ freeMonthText }}</span
              >
            </section>
          </label>
        </li>
      </ul>
      <div class="text-center w-full bg-magnolia rounded-md py-5 px-8 md:mb-4">
        <label
          for="isYearly"
          class="cursor-pointer flex items-center gap-6 justify-center text-marineBlue"
        >
          <span
            :aria-current="!stepStore.isYearly ? true : false"
            class="font-bold text-coolGray"
            :class="{ active: !stepStore.isYearly }"
          >
            Monthly
          </span>
          <input
            type="checkbox"
            name="isYearly"
            id="isYearly"
            class="isYearlyInput cursor-pointer"
            :checked="stepStore.isYearly"
            @click="stepStore.toggleYearly"
          />
          <span
            class="font-bold text-coolGray"
            :class="{ active: stepStore.isYearly }"
            >Yearly</span
          >
        </label>
      </div>
    </div>
  </TheStepper>
</template>

<script setup lang="ts">
import TheStepper from "@/components/TheStepper.vue";
import AdvancedIcon from "@/components/icons/AdvancedIcon.vue";
import ArcadeIcon from "@/components/icons/ArcadeIcon.vue";
import ProIcon from "@/components/icons/ProIcon.vue";

import { useStepStore } from "@/stores/step";
import { reactive, computed } from "@vue/reactivity";
import { shallowRef } from "vue";

const stepStore = useStepStore();
const errors = stepStore.errors;

const freeMonthText = "2 months free";

const plans = reactive([
  {
    icon: shallowRef(ArcadeIcon),
    name: "Arcade",
    price: computed(() => (stepStore.isYearly ? 90 : 9)),
  },
  {
    icon: shallowRef(AdvancedIcon),
    name: "Advanced",
    price: computed(() => (stepStore.isYearly ? 120 : 12)),
  },
  {
    icon: shallowRef(ProIcon),
    name: "Pro",
    price: computed(() => (stepStore.isYearly ? 150 : 15)),
  },
]);
</script>

<style scoped>
.active {
  color: var(--marine-blue);
}

h2 {
  font-size: 1rem;
  line-height: 1.2;
}

.plans-container {
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  gap: 20px;
}

input[type="radio"] {
  appearance: none;
  /* display: none; */
  position: absolute;
}

.plans-container label {
  padding: 16px;
  border: 2px solid var(--light-gray);
  background-color: transparent;
  border-radius: 10px;

  display: flex;
  gap: 1rem;

  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.planPrice {
  font-size: 0.875rem;
}

@media screen and (min-width: 62rem) {
  /* 992px */
  h2 {
    font-size: 1.2rem;
  }
  .plans-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
  }

  .plan__icon {
    margin-bottom: 30px;
  }

  .plans-container label {
    flex-direction: column;
    gap: 2rem;
  }

  .planPrice {
    font-size: 1rem;
  }
}

input:focus + label,
label:hover {
  border-color: var(--purplish-blue);
}

input:checked + label {
  border-color: var(--purplish-blue);
  background-color: var(--magnolia);
}

/* Monthly or Yearly Toggle */
.isYearlyInput {
  appearance: none;
  width: 40px;
  height: 22px;
  border-radius: 50px;
  padding: 6px;
  background-color: var(--marine-blue);
  position: relative;

  flex-shrink: 0;
}

.isYearlyInput:focus {
  outline: 2px solid var(--purplish-blue);
}

.isYearlyInput::after {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  display: inline-block;
  background-color: var(--alabaster);
  border-radius: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(0);
  transition: all 0.3s ease-in-out;
}

.isYearlyInput:checked::after {
  transform: translateY(-50%) translateX(110%);
}
</style>
