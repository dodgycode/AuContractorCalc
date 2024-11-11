<template>
  <div>
    <div>
      <label for="incomeType" class="range-label">Income Type:</label>
      <select id="incomeType" v-model="incomeType">
        <option value="calculated">Calculated</option>
        <option value="manual">Manual</option>
      </select>
    </div>
    <div v-if="incomeType === 'calculated'">
      <DayRateInput v-model="dayRate" label="Day Rate" />
      <DaysWorkedInput v-model="daysWorked" label="Days Worked" />
    </div>
    <div v-else-if="incomeType === 'manual'">
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
      incomeType: 'calculated',
      dayRate: 750,
      daysWorked: 200,
      localGrossIncome: 0 // For manual input
    };
  },
  props: {
    modelValue: Number
  },
  emits: ['update:modelValue'],
  computed: {
    grossIncome: {
      get() {
        if (this.incomeType === 'calculated') {
          return this.dayRate * this.daysWorked;
        } else {
          return this.localGrossIncome;
        }
      },
      set(value) {
        if (this.incomeType === 'manual') {
          this.localGrossIncome = value;
        } else {
          // You might want to handle how 'calculated' mode reacts to a direct set of grossIncome.
          // For example, adjust dayRate proportionally:
          this.dayRate = value / this.daysWorked || 0;
        }
        this.$emit('update:modelValue', value); // Emit after setting local values
      }
    }
  },
  watch: {
    dayRate(newDayRate) {
      if (this.incomeType === 'calculated') {
        this.$emit('update:modelValue', this.grossIncome);
      }
    },
    daysWorked(newDaysWorked) {
      if (this.incomeType === 'calculated') {
        this.$emit('update:modelValue', this.grossIncome);
      }
    },
    localGrossIncome(newVal) { // Watch manual input for changes
      if (this.incomeType === 'manual') {
        this.$emit('update:modelValue', newVal);
      }
    }
  },
  mounted() {
    this.$emit('update:modelValue', this.grossIncome);
  }
};
</script>