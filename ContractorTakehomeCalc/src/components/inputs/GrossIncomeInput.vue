<template>
    <div class="input-group">
      <label class="range-label">{{ label }}</label>
      $<input
        type="number"
        v-model="localValue"
        @input="updateValue"
        id="dayRate"
        min="0"
        max="2000000"  
        class="rate-input"
      />
      <div class="range-container">
      <input
        type="range"
        v-model="localValue"
        @input="updateValue"
        :min="10000"
        :max="500000"  
        :step="100"   
      />
    </div>
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

  <style>

.toggle-switch-container {
  display: inline-block; /* Or block if you want it full width */
  position: relative; /* For positioning the labels */
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 120px; /* Adjust width as needed */
  height: 30px; /* Adjust height as needed */
  background-color: #2a2a2a;
  border-radius: 15px; /* Half of the height for rounded ends */
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 0 10px;
}

.toggle-switch:active .toggle-thumb {
  transform: scale(0.95); 
}


input[type="checkbox"]:checked + .toggle-switch {
  background-color: var(--primary-color); 
}

.toggle-thumb {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px; /* Start on the left */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  transition: left 0.3s, background 0.3s;
}
input[type="checkbox"]:checked + .toggle-switch .toggle-thumb {
  left: calc(100% - 25px); /* Move to the right on checked (width + margin) */
    background-color: white; /* White thumb on green background */
}

.toggle-label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8rem; 
  color: white; 
  transition: opacity 0.3s;
}
.toggle-label.active {
    opacity: 1;
}
.toggle-label:not(.active) {
    opacity: 0.6; /* Slightly faded when not active */
}
</style>