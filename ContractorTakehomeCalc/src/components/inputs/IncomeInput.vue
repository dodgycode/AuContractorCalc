<template>
  <div>
    <div class="toggle-switch-container">
    <input type="checkbox" id="incomeTypeToggle" v-model="isCalculated" hidden>
    <label for="incomeTypeToggle" class="toggle-switch">
      <span class="toggle-thumb"></span>
      <span class="toggle-label" :class="{ active: isCalculated }" v-if="isCalculated">Day Rate</span>
      <span class="toggle-label" :class="{ active: !isCalculated }" v-if="!isCalculated">Gross Income</span>
    </label>
  </div>
    <div v-if="isCalculated">
      <DayRateInput v-model="dayRate" label="Day Rate" />
      <DaysWorkedInput v-model="daysWorked" label="Days Worked" />
    </div>
    <div v-else-if="!isCalculated">
      <GrossIncomeInput v-model="localGrossIncome" label="Gross Income" />
    </div>
  </div>
</template>

<script>
import DayRateInput from './DayRateInput.vue';
import DaysWorkedInput from './DaysWorkedInput.vue';
import GrossIncomeInput from './GrossIncomeInput.vue';

export default {
  components: {
    DayRateInput,
    DaysWorkedInput,
    GrossIncomeInput
  },
  data() {
    return {
      isCalculated: true,
      dayRate: 750,
      daysWorked: 200,
      localGrossIncome: 150000 // For manual input
    };
  },
  props: {
    modelValue: Number
  },
  emits: ['update:modelValue'],
  computed: {
    grossIncome: {
      get() {
        if (this.isCalculated) {
          this.localGrossIncome = this.dayRate * this.daysWorked;
        } 

        return this.localGrossIncome;        
      },
      set(value) {
        if (!this.isCalculated) {
          this.localGrossIncome = value;
        } else {
          // this.daysWorked = 200;
          // this.dayRate = value / this.daysWorked;
        }
        this.$emit('update:modelValue', value); // Emit after setting local values
      }
    }
  },
  watch: {
    dayRate(newDayRate) {
      if (this.isCalculated) {
        this.localGrossIncome = newDayRate * this.daysWorked;
        this.$emit('update:modelValue', this.grossIncome);
      }
    },
    daysWorked(newDaysWorked) {
      if (this.isCalculated) {
        this.localGrossIncome = newDaysWorked * this.dayRate;
        this.$emit('update:modelValue', this.grossIncome);
      }
    },
    localGrossIncome(newVal) { // Watch manual input for changes
      if (!this.isCalculated) {
        this.$emit('update:modelValue', newVal);
      }
    }
  },
  mounted() {
    this.$emit('update:modelValue', this.grossIncome);
  }
};
</script>