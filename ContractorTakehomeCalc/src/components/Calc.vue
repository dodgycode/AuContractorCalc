<script setup>
import Inputs from '/src/components/inputs/Inputs.vue';

import IncomeTaxOutput from '/src/components/outputs/IncomeTaxOutput.vue';
import GrossIncomeOutput from '/src/components/outputs/GrossIncomeOutput.vue';
import TotalTaxOutput from '/src/components/outputs/TotalTaxOutput.vue';
import MedicareLevyOutput from '/src/components/outputs/MedicareLevyOutput.vue';

import { calculateIncomeTax, calculateMedicareLevy } from '/src/utils/taxCalculations.js';
</script>

<template>
    <section class="black-section">
      <Inputs 
      v-model:grossIncome="grossIncome"
      v-model:superDeduction="superDeduction"/>
    </section>

    <section class="blue-section">
      <GrossIncomeOutput :grossIncome="grossIncome" />
      <IncomeTaxOutput :incomeTax="incomeTax" />
      <MedicareLevyOutput :medicareLevy="medicareLevy" />
      <TotalTaxOutput :totalTax="totalTax" :grossIncome="grossIncome" />
    </section>
  </template>

<script>
export default {
  components: {
    Inputs
  },
  data() {
    return {
      grossIncome: 150000,
      superDeduction: 18750,
      expenses: 0
    };
  },
  computed: {
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
:root {
  --primary-color: #38ACEC;
}
section {            
    width: 100%;            
    justify-content: center; /* Center items horizontally */
    align-items: center; /* Center items vertically */
    padding: 50px;
    overflow: hidden; /* Ensure no overflow within sections */
    min-height: 30vh;
}

.black-section {
    background-color: #000;
    color: var(--primary-color);
    align-items: center;
    text-align: center;
}

.blue-section {
    background-color: var(--primary-color);
    color: #000;    
}
</style>