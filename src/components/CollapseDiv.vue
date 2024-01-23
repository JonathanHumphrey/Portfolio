<script setup>
import { ref} from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const components = {
  FontAwesomeIcon,
};

import {useAppDataStore} from "@/stores/appData"

const appDataStore = useAppDataStore();
const props = defineProps(['header']);
const isOpen = ref(appDataStore.showInfo)

const toggleOpen = () => {
    appDataStore.toggleShowInfo()
    isOpen.value = appDataStore.showInfo;

}
</script>

<template>
    <div class="about">
        <h3 @click="toggleOpen"> {{ header }}
            <span>
                <i :class="isOpen ? 'fa-solid fa-caret-up' : 'fa-solid fa-caret-down'"></i>
            </span>
        </h3>
        <transition name="collapse">
            <div class="content" v-if="isOpen">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.about{
    min-height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 1rem;
    
}
h3{
    cursor: pointer;
    border: solid black;
    display: flex;
    justify-content: space-between;
    width: 15rem;
    color: #EAF6FF;
    border-radius: .5rem;
    padding: 1rem;
    font-size: 1.5rem;
  
}
h3:hover{
    background: #284B63;
    
}

.content{
    margin: .25rem;
    padding: .25rem;
    min-height: 10rem;
    height: 100%;
    width: 20rem;
    border-radius: .25rem;
    background: #EAF6FF;
    transform-origin: top
}

.collapse-enter-active {
  animation: collapse reverse 500ms ease-in-out;
}
.collapse-leave-active {
  animation: collapse 500ms ease-in-out;
}
@keyframes collapse {
  from {
    transform: scaleY(1);
    opacity: 1;
    height: auto;
  }
  to {
    transform: scaleY(0);
    opacity: 0;
    height: 0rem;
  }
}
</style>