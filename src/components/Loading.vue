<script setup>
</script>

<template>
    <span class="loader"></span>
</template>

<style scoped>
.loader {
  width: 32px;
  height: 32px;
  border: 5px dotted var(--Primary);
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1.6s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>