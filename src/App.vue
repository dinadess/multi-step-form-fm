<script setup lang="ts">
import TheSidebar from "@/components/TheSidebar.vue";
import { useStepStore } from "@/stores/step";

const stepStore = useStepStore();
</script>

<template>
  <main class="main">
    <div class="main-container">
      <TheSidebar />
      <KeepAlive>
        <component :is="`${stepStore.activeStep}`" />
      </KeepAlive>
    </div>
  </main>
  <!-- Attribution -->
  <footer>
    <div class="attribution text-sm md:text-base text-center mt-4 px-4">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by
      <a href="https://www.frontendmentor.io/profile/dinadess">Oshyeld</a>.
    </div>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media screen and (max-width: 47.9375rem) {
  .main {
    margin-bottom: 80px;
  }

  footer {
    margin-bottom: 120px;
  }
}
</style>
