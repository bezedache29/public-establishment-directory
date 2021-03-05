<template>
  <button><slot></slot></button>
</template>

<script>
  export default {
    name:"button-nav",
    data() {
      return {
        
      }
    },
  }
</script>

<style scoped>
  button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #B8C3F5;
    border: none;
    font-size: 18px;
    outline: none;
  }
  button:hover {
    color: #4A48F5;
  }
</style>