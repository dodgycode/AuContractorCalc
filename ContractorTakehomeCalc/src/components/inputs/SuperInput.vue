<template>
    <div class="range-container">
      <label for="super" class="range-label">Superannuation ($):</label>
      <input
        type="number"
        v-model="localValue"
        @input="updateValue"
        id="dayRate"
        min="0"
        :max=grossIncome  
      />
      <input
        type="range"
        v-model="localValue"
        @input="updateValue"
        :min="0"
        :max=grossIncome  
        :step="100"   
      />
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
    methods: {
      updateValue() {
        this.$emit('update:modelValue', this.localValue);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles for spacing, etc. */
  </style>
  