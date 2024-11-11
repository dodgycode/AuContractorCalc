<script setup>
import Inputs from '/src/components/inputs/Inputs.vue';

import IncomeTaxOutput from '/src/components/outputs/IncomeTaxOutput.vue';
import GrossIncomeOutput from '/src/components/outputs/GrossIncomeOutput.vue';
import TotalTaxOutput from '/src/components/outputs/TotalTaxOutput.vue';
import MedicareLevyOutput from '/src/components/outputs/MedicareLevyOutput.vue';

import { calculateIncomeTax, calculateMedicareLevy } from '/src/utils/taxCalculations.js';
</script>

<template>
    <div>
      <Inputs 
      v-model:grossIncome="grossIncome"
      v-model:superDeduction="superDeduction"/>
    
      <GrossIncomeOutput :grossIncome="grossIncome" />
      <IncomeTaxOutput :incomeTax="incomeTax" />
      <MedicareLevyOutput :medicareLevy="medicareLevy" />
      <TotalTaxOutput :totalTax="totalTax" :grossIncome="grossIncome" />
    </div>
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
    // grossIncome() {
    //     return this.dayRate * this.daysWorked;
    // },
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
</style>