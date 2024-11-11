<template>
    <div class="inputs-container">
        <div>
            <IncomeInput :model-value="grossIncome" @update:modelValue="updateGrossIncome" /> 
            <Outputs :grossIncome="grossIncome" :incomeTax="incomeTax" :medicareLevy="medicareLevy" :totalTax="totalTax"></Outputs> 
        </div>
      <SuperInput :model-value="superDeduction" @update:modelValue="updateSuperDeduction" :gross-income="grossIncome" label="Superannuation" />
    </div>
</template>
  
  <script>
  import IncomeInput from './IncomeInput.vue';
  import SuperInput from './SuperInput.vue';
  
  export default {
    components: {
      IncomeInput,
      SuperInput,
    },
    props: {
      superDeduction: Number,
      grossIncome: Number 
    },
    emits: ['update:superDeduction', 'update:grossIncome'], // Emit events for changes
    methods: {
    updateSuperDeduction(value) {
      this.$emit('update:superDeduction', value);
    },
    updateGrossIncome(value) {
      this.$emit('update:grossIncome', value);
    }
  }
  };
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