<template>
    <div class="total-tax-output">
      <h3>Total Tax</h3>
      <p>Your total tax liability is: ${{ formattedTotalTax }}</p>
      <p>This is {{ formattedAsPercentageOfGross }}% of your gross income.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalTax: {
        type: Number,
        required: true
      },
      grossIncome: {
        type: Number,
        required: true
      }
    },
    computed: {
      formattedTotalTax() {
        return this.totalTax.toLocaleString({
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      },
      formattedAsPercentageOfGross() {
        const percent = (this.totalTax / this.grossIncome) * 100;
        return Math.floor(percent);
      }
    }
  };
  </script>
  
  <style scoped>
  .total-tax-output {
    padding: 1rem;
    /* background-color: #f9f9f9; */
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h3 {
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
  </style>
  