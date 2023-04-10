<template>
  <TheStepper>
    <template #title>Pick add-ons</template>
    <template #description
      >Add-ons help enhance your gaming experience.</template
    >
    <div>
      <ul class="flex flex-col gap-6">
        <li v-for="addon in addons" :key="addon.name">
          <input
            type="checkbox"
            name="addons"
            :id="addon.name"
            :value="addon"
            v-model="stepStore.addons"
          />
          <label :for="addon.name" class="addon-label">
            <section>
              <h2 class="text-marineBlue">{{ addon.name }}</h2>
              <p class="desc font-medium text-coolGray">
                {{ addon.description }}
              </p>
            </section>
            <p class="price text-purplishBlue font-medium">
              +${{ addon.price }}/{{ stepStore.moOrYr }}
            </p>
          </label>
        </li>
      </ul>
    </div>
  </TheStepper>
</template>

<script setup lang="ts">
import TheStepper from "@/components/TheStepper.vue";

import { useStepStore } from "@/stores/step";
import { reactive, computed } from "@vue/reactivity";

const stepStore = useStepStore();

const addons = reactive([
  {
    name: "Online service",
    description: "Access to multiplayer games",
    price: computed(() => (stepStore.isYearly ? 10 : 1)),
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: computed(() => (stepStore.isYearly ? 20 : 2)),
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",

    price: computed(() => (stepStore.isYearly ? 20 : 2)),
  },
]);
</script>

<style scoped>
h2 {
  font-size: 0.875rem;
}

@media screen and (max-width: 47.9375rem) {
  section .desc {
    font-size: 0.75rem;
  }

  label .price {
    font-size: 0.8125rem;
  }
}

input {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
  z-index: 1;
}

.addon-label {
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
}

label {
  padding: 16px;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--light-gray);
  background-color: transparent;
  border-radius: 10px;

  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

@media screen and (min-width: 78rem) {
  h2 {
    font-size: 1.2rem;
  }

  input {
    left: 28px;
    width: 20px;
    height: 20px;
  }

  .addon-label {
    padding-left: 68px;
  }

  label {
    padding: 16px 28px;
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
</style>
