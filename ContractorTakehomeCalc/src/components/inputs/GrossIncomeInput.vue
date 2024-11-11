<template>
    <div>
      <label :for="label" class="range-label">{{ label }}</label>
      <input type="number" v-model="localValue" @input="updateValue" :id="label">
    </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: Number,
      label: String
    },
    data() {
      return {
        localValue: this.modelValue
      }
    },
    methods: {
      updateValue() {
        this.$emit('update:modelValue', this.localValue);
      }
    },
    watch: {
      modelValue(newVal) {
        this.localValue = newVal;
      }
    }
  }
  </script>