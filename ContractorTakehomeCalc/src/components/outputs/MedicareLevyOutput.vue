<template>
    <div class="medicare-levy-output">
      <h3>Medicare Levy</h3>
      <p>Your calculated Medicare levy: ${{ formattedMedicareLevy }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      medicareLevy: {
        type: Number,
        required: true
      }
    },
    computed: {
      formattedMedicareLevy() {
        return this.medicareLevy.toLocaleString({
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .medicare-levy-output {
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
  