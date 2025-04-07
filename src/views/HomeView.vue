<template>
  <div>
    <div class="bg-blue-500 text-white p-4 rounded">
      Welcome to the Home View!
    </div>
    <h1>Home View</h1>
    <HelloWorld />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';  
import HelloWorld from '../components/HelloWorld.vue';
</script>