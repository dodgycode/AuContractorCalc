<template>
    <div class="input-group">
      <label class="range-label">Superannuation</label>
      $<input
        type="number"
        v-model="localValue"
        @input="updateValue"
        id="dayRate"
        min="0"
        :max=grossIncome  
        class="rate-input"
      />
      <div class="range-container">
      <input
        type="range"
        v-model="localValue"
        @input="updateValue"
        :min="0"
        :max=grossIncome  
        :step="100"   
      />
      <div class="range-labels">
        <span class="range-min">$0</span>
        <span class="range-max">${{ formattedGrossIncome }}</span>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: {
        type: Number,
        required: true
      },
      grossIncome: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        localValue: this.modelValue
      };
    },
    watch: {
      modelValue(newVal) {
        this.localValue = newVal;
      }
    },
    computed: {
      formattedGrossIncome() {
        return this.grossIncome.toLocaleString({
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
    }},
    methods: {
      updateValue() {
        this.$emit('update:modelValue', this.localValue);
      }
    }
  };
  </script>