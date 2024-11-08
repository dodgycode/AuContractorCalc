<template>
    <div class="gross-income-output">
      <h3>Gross Income</h3>
      <p>Your calculated gross income: ${{ formattedGrossIncome }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      grossIncome: {
        type: Number,
        required: true
      }
    },
    computed: {
      formattedGrossIncome() {
        return this.grossIncome.toLocaleString({
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .gross-income-output {
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
  