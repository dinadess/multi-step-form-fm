import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import StepButtons from "@/components/StepButtons.vue";
import Step_1 from "@/components/steps/Step_1.vue";
import Step_2 from "@/components/steps/Step_2.vue";
import Step_3 from "@/components/steps/Step_3.vue";
import Step_4 from "@/components/steps/Step_4.vue";
import Step_5 from "@/components/steps/Step_5.vue";

import "./assets/main.css";

const app = createApp(App);

app.component("StepButtons", StepButtons);
app.component("Step_1", Step_1);
app.component("Step_2", Step_2);
app.component("Step_3", Step_3);
app.component("Step_4", Step_4);
app.component("Step_5", Step_5);

app.use(createPinia());

app.mount("#app");
