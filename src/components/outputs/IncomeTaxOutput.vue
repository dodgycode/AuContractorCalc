<template>
    <div class="income-tax-output">
      <h3>Income Tax</h3>
      <p>Your calculated income tax: ${{ formattedIncomeTax }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      incomeTax: {
        type: Number,
        required: true
      }
    },
    computed: {
      formattedIncomeTax() {
        // Formats the income tax to two decimal places and adds comma separators
        //return this.incomeTax;
        return this.incomeTax.toLocaleString({
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .income-tax-output {
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
  