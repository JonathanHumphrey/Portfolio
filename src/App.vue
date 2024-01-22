<script setup>
import {  RouterView } from 'vue-router'

import Header from "./components/Header.vue"
</script>

<template>
  <div class="header">
    <Header />
  </div>

  <RouterView />
</template>

<style scoped>
.header{
  margin-bottom: 0rem;
  display: flex;
  position: relative;
}
</style>
