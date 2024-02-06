<script setup>
import {  RouterView } from 'vue-router'

import Header from "./components/Header.vue"
</script>

<template>
  <div class="parallax">
    <div class="header">
      <Header />
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
.header{
  margin-bottom: 0rem;
  display: flex;
  position: relative;
}
</style>
