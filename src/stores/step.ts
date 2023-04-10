import { defineStore } from "pinia";

type Steps = 1 | 2 | 3 | 4 | 5;

export const useStepStore = defineStore("step", {
  state: () => {
    return {
      currentStepNumber: 1 as Steps,
      plan: {
        name: "",
        price: 0,
      },
      isYearly: false,
      addons: [],
      user: {
        name: "",
        email: "",
        phone: "",
      },
      errors: {
        name: "",
        email: "",
        phone: "",
        plan: "",
      },
    };
  },
  getters: {
    activeStep(): string {
      return `Step_${this.currentStepNumber}`;
    },
    planIsYearly(): string {
      return this.isYearly ? "Yearly" : "Monthly";
    },
    monthOrYear(): string {
      return this.isYearly ? "year" : "month";
    },
    moOrYr(): string {
      return this.isYearly ? "yr" : "mo";
    },
    total(): number {
      return this.addons.reduce(
        (accumulator: number, currentValue) =>
          accumulator + currentValue["price"],
        this.plan.price
      );
    },
  },
  actions: {
    nextStep() {
      switch (this.currentStepNumber) {
        case 1: {
          this.errors.name = "";
          this.errors.email = "";
          this.errors.phone = "";

          // Checks if the name is valid
          const nameIsValid = function (name: string) {
            // const re = /^[^\s@]+\s[^\s@]+$/;
            const re = /^[\wéÉèÈàÀçâ]+\s[\wéÉèÈàÀçâ-]{2,}$/;
            return re.test(name);
          };

          // Checks if the email is valid
          const emailIsValid = function (email: string) {
            const re = /^[a-zA-Z0-9-+]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]+$/;
            return re.test(email);
          };

          // Checks if the phone number is valid
          const phoneIsValid = function (phone: string) {
            const re = /^\d{8,12}$/;
            return re.test(phone);
          };

          // Checks if inputs are valid
          const formIsValid =
            this.user.name &&
            this.user.email &&
            this.user.phone &&
            nameIsValid(this.user.name) &&
            emailIsValid(this.user.email) &&
            phoneIsValid(this.user.phone);

          if (!this.user.name) {
            this.errors.name = "Name is required!";
          } else if (!nameIsValid(this.user.name)) {
            this.errors.name = "Invalid name. (Valid : FName LName)";
          }

          if (!this.user.email) {
            this.errors.email = "Email is required!";
          } else if (!emailIsValid(this.user.email)) {
            this.errors.email = "Invalid email address";
          }

          if (!this.user.phone) {
            this.errors.phone = "Phone number is required!";
          } else if (!phoneIsValid(this.user.phone)) {
            this.errors.phone = "Invalid number (Should be >8 and <12 chars)";
          }

          if (formIsValid) {
            this.currentStepNumber++;
          }
          break;
        }
        case 2: {
          this.errors.plan = "";
          if (!this.plan.name.length) {
            this.errors.plan = "Please select a plan.";
          } else {
            this.currentStepNumber++;
          }
          break;
        }
        default: {
          this.currentStepNumber++;
          this.errors.name = "";
          this.errors.email = "";
          this.errors.plan = "";
        }
      }
    },
    goBack() {
      if (this.currentStepNumber === 1) {
        this.currentStepNumber = 1;
      } else {
        this.currentStepNumber--;
      }
    },
    toggleYearly() {
      this.isYearly = !this.isYearly;
    },
  },
});
