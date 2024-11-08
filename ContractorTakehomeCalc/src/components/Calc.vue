<script setup>
// import { ref } from 'vue';
// let dayRate = ref(250);
import DaysWorkedInput from '/src/components/inputs/DaysWorkedInput.vue';
import DayRateInput from '/src/components/inputs/DayRateInput.vue';
import SuperInput from '/src/components/inputs/SuperInput.vue';

import IncomeTaxOutput from '/src/components/outputs/IncomeTaxOutput.vue';
import GrossIncomeOutput from '/src/components/outputs/GrossIncomeOutput.vue';
import TotalTaxOutput from '/src/components/outputs/TotalTaxOutput.vue';
import MedicareLevyOutput from '/src/components/outputs/MedicareLevyOutput.vue';
</script>

<template>
    <div>
      <DayRateInput v-model="dayRate" />
      <DaysWorkedInput v-model="daysWorked"/>
      <SuperInput v-model="superDeduction" :grossIncome="grossIncome" />
      <!-- 
      <PensionDeductionInput v-model="pensionDeduction" />
  
      <CorporationTaxOutput :amount="corporationTax" />
      <DividendTaxOutput :amount="dividendTax" /> -->

      <GrossIncomeOutput :grossIncome="grossIncome" />
      <IncomeTaxOutput :incomeTax="incomeTax" />
      <MedicareLevyOutput :medicareLevy="medicareLevy" />
      <TotalTaxOutput :totalTax="totalTax" :grossIncome="grossIncome" />
    </div>
  </template>

<script>
import { calculateIncomeTax, calculateMedicareLevy } from '/src/utils/taxCalculations.js';

export default {
  data() {
    return {
      dayRate: 750,
      daysWorked: 200,
      superDeduction: 18750,
      expenses: 0
    };
  },
  computed: {
    grossIncome() {
        return this.dayRate * this.daysWorked;
    },
    incomeTax() {
      return calculateIncomeTax(this.taxableIncome, this.superDeduction);
    },
    medicareLevy() {
      return calculateMedicareLevy(this.taxableIncome);
    },
    totalTax() {
        return this.incomeTax + this.medicareLevy;
    },
    taxableIncome() {
      return this.grossIncome - this.expenses;
    }
  }
}
</script>

<style>
/* Container for range inputs */
.range-container {
  margin: 2rem 0;
  padding: 1rem;
}

/* Base styles for range inputs */
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  margin: 1.5rem 0;
  background: #2a2a2a;
  border-radius: 4px;
  outline: none;
}

/* Thumb styles */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: #42b883; /* Vue.js green color */
  border: 2px solid #35495e;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #42b883;
  border: 2px solid #35495e;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

/* Hover effects */
input[type="range"]::-webkit-slider-thumb:hover {
  background: #3aa876;
  transform: scale(1.1);
}

input[type="range"]::-moz-range-thumb:hover {
  background: #3aa876;
  transform: scale(1.1);
}

/* Track styles */
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8px;
  background: #2a2a2a;
  border-radius: 4px;
  cursor: pointer;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 8px;
  background: #2a2a2a;
  border-radius: 4px;
  cursor: pointer;
}

/* Focus styles */
input[type="range"]:focus {
  outline: none;
}

/* Label styles */
.range-label {
  display: block;
  margin-bottom: 0.5rem;
  color: #42b883;
  font-size: 0.9rem;
  font-weight: 500;
}
</style>