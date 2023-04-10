<template>
  <span
    class="active-item-number text-magnolia ring-1 ring-lightBlue font-bold p-2 rounded-full w-[40px] h-[40px] flex items-center justify-center"
  >
    <slot name="number"></slot>
  </span>
  <div class="mobile-hidden">
    <p class="uppercase font-medium text-lightGray text-sm">
      Step
      <slot name="step"></slot>
    </p>
    <p class="uppercase font-bold text-white letter-spacing">
      <slot></slot>
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.letter-spacing {
  letter-spacing: 1px;
}

@media screen and (max-width: 47.9375rem) {
  /** 767px */
  .mobile-hidden {
    display: none;
    width: 0;
  }
}
</style>
