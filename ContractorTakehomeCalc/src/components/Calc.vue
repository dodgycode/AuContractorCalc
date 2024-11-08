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
/* Underlined input style */
.rate-input {
  background: transparent;
  border: none;
  border-bottom: 2px solid #42b883; /* Vue green color */
  color: #fff;
  padding: 5px 0;
  width: 100px;
  font-size: 16px;
  transition: border-color 0.3s;
  margin-bottom: 1rem;
}

.rate-input:focus {
  outline: none;
  border-bottom-color: #3aa876;
}

/* Range input container */
.range-container {
  position: relative;
  padding: 1rem 0;
  margin: 1rem 0;
}

/* Min/Max labels */
.range-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  color: #888;
  font-size: 0.85rem;
}

.range-min, .range-max {
  position: absolute;
  bottom: -5px;
  font-size: 0.85rem;
  color: #888;
}

.range-min {
  left: 0;
}

.range-max {
  right: 0;
}

/* Range input styling */
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  background: #2a2a2a;
  border-radius: 2px;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: #42b883;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: #3aa876;
  transform: scale(1.1);
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: #42b883;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
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