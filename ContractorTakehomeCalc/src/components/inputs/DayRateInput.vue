<template>
    <div class="input-group">
      <label class="range-label">Day Rate</label>
      <input
        type="number"
        v-model="localValue"
        @input="updateValue"
        id="dayRate"
        min="200"
        max="2000"  
        class="rate-input"
      />
      <div class="range-container">
      <input
        type="range"
        v-model="localValue"
        @input="updateValue"
        :min="200"
        :max="2000"  
        :step="10"   
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
  