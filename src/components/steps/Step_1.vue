<template>
  <TheStepper>
    <template #title>Personal info</template>
    <template #description
      >Please provide your name, email address, and phone number.</template
    >
    <div>
      <div class="flex flex-col gap-2 mb-[24px]">
        <div class="flex justify-between">
          <label for="name" class="font-normal text-marineBlue">Name</label>
          <p
            v-if="errors.name"
            class="error-msg text-strawberryRed font-medium"
          >
            {{ errors.name }}
          </p>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
          v-model.trim="user.name"
          required
          class="font-medium ring-2 ring-lightGray rounded-md p-[14px] transition-all hover:ring-purplishBlue"
          :class="{ 'ring-red-300': errors.name }"
          ref="firstInput"
        />
      </div>
      <div class="flex flex-col gap-2 mb-[24px]">
        <div class="flex justify-between">
          <label for="email" class="font-normal text-marineBlue"
            >Email Address</label
          >
          <p
            v-if="errors.email"
            class="error-msg text-strawberryRed font-medium"
          >
            {{ errors.email }}
          </p>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          v-model.trim="user.email"
          placeholder="e.g. stephenking@lorem.com"
          required
          class="font-medium ring-2 ring-lightGray rounded-md p-[14px] transition-all hover:ring-purplishBlue"
          :class="{ 'ring-red-300': errors.email }"
        />
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex justify-between">
          <label for="phoneNumber" class="font-normal text-marineBlue"
            >Phone Number</label
          >
          <p
            v-if="errors.phone"
            class="error-msg text-strawberryRed font-medium"
          >
            {{ errors.phone }}
          </p>
        </div>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          v-model.trim.number="user.phone"
          placeholder="e.g. +1 234 567 890"
          required
          class="font-medium ring-2 ring-lightGray rounded-md p-[14px] transition-all hover:ring-purplishBlue"
          :class="{ 'ring-red-300': errors.phone }"
        />
      </div>
    </div>
  </TheStepper>
</template>

<script setup lang="ts">
import TheStepper from "@/components/TheStepper.vue";
import { useStepStore } from "@/stores/step";
import { onMounted, ref } from "vue";

const stepStore = useStepStore();

const user = stepStore.user;
const errors = stepStore.errors;

const firstInput = ref();

onMounted(() => {
  firstInput.value.focus();
});
</script>

<style scoped>
@media screen and (max-width: 47.9375rem) {
  label {
    font-size: 0.875rem;
    font-weight: 500;
  }

  .error-msg {
    font-size: 0.875rem;
  }
}
</style>
