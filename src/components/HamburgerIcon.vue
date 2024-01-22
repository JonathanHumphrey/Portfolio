<script setup>
import {useAppDataStore} from "@/stores/appData"

const appDataStore = useAppDataStore();

const toggleHeader = () => {
    appDataStore.toggleShowHeader()
}
</script>

<template>
    <div class="menu-wrapper" @click="toggleHeader()" :class="{ active: appDataStore.showHeader }">
        <div class="menu-bar one"></div>
        <div class="menu-bar two"></div>
        <div class="menu-bar three"></div>
    </div>
</template>

<style scoped>
.menu-wrapper {
  width: 40px;
  height: 2rem;
  cursor: pointer;
  position: relative;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.menu-bar {
  position: absolute;
  width: 100%;
  height: 4px;
  background: #ffffff;
  left: 0%;
}

.menu-wrapper:hover .menu-bar {
  /*animation-duration: 1s;
  animation-name: slideOut;
  animation-direction: alternate;
  animation-timing-function: ease-out;*/
}



.one {
  top: 0px;
  animation-delay: 0.1s;
  transition: all 0.3s;
}

.two {
  top: 8px;
  transition: all 0.3s;
}
.three{
    top: 16px;
    transition: all .3s;
}


@keyframes slideOut {
  0% {
    width: 100%;
    left: 0%;
    right: auto;
  }
  
  50% {
    width: 0%;
    left: 0%;
    right: auto;
  }
  51% {
    width: 0%;
    right: 0%;
    left: auto;
  }

  100% {
    width: 100%;
    right: 20rem;
    left: auto;
  }
}

/**/

.menu-wrapper:hover .menu-bar.active {
  animation:none;
}
.active .one{
  top: 50%;
  left: 0%;
  transform: rotate(45deg);
}
.active .two{
  top: 50%;
  left: 0%;
  transform: rotate(-45deg);
}
.active .three{
    opacity: 0;
}
</style>