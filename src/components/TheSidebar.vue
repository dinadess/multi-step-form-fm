<template>
  <div class="sidebar">
    <ul class="flex gap-8 justify-center">
      <li
        v-for="item in navItems"
        :key="item.number"
        class="flex items-center gap-[20px]"
        :class="{ activeItem: stepStore.currentStepNumber === item.number }"
      >
        <SidebarItem>
          <template #number> {{ item.number }} </template>
          <template #step> {{ item.step }} </template>
          {{ item.text }}
        </SidebarItem>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import SidebarItem from "@/components/SidebarItem.vue";
import { useStepStore } from "@/stores/step";

const stepStore = useStepStore();

const navItems = [
  {
    number: 1,
    step: 1,
    text: "Your Info",
  },
  {
    number: 2,
    step: 2,
    text: "Select Plan",
  },
  {
    number: 3,
    step: 3,
    text: "Add-ons",
  },
  {
    number: 4,
    step: 4,
    text: "Summary",
  },
];
</script>

<style scoped>
@media screen and (min-width: 48rem) {
  /* 768px */
  ul {
    flex-direction: column;
    gap: 25px;
  }
}
</style>
