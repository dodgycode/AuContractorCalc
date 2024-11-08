<template>
    <div class="input-group">
      <label class="range-label">Days Worked</label>
      <input
        type="number"
        v-model="localValue"
        @input="updateValue"
        id="daysWorked"
        min="0"
        max="365"  
        class="rate-input"
      />
      <div class="range-container">
      <input
        type="range"
        v-model="localValue"
        @input="updateValue"
        :min="0"
        :max="365"  
        :step="5"   
      />
    </div>
  </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: {
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
  