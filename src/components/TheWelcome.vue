<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>


  <v-btn @click="$router.push({ name: 'wiki' })">
    <p> зайди в вики </p>
  </v-btn>
</template>
