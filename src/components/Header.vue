<script setup>
import HamburgerIcon from './HamburgerIcon.vue';

import { RouterLink } from 'vue-router'
import {useAppDataStore} from "@/stores/appData"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const components = {
  FontAwesomeIcon,
};

const appDataStore = useAppDataStore();

</script>

<template>
    <div class="header-container">
      <HamburgerIcon />
        <transition name="slide">
          <nav v-if="appDataStore.showHeader">
            <RouterLink to="/">About</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
            <div class="socials">
              <a class="social-link" href="https://www.linkedin.com/in/jonathan-humphrey-97478223a/" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a class="social-link" href="https://github.com/JonathanHumphrey" target="_blank">
                <i class="fa-brands fa-square-github"></i>
              </a>
            </div>
          </nav>
        </transition>
    </div>
</template>

<style scoped>
.socials{
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
.social-link{
  margin: 10px;
}
.social-link:hover{
  background: none;
  color: #284B63;
  
}
.header-container{
  position: absolute;
  display: flex;
  width: 10rem;
  margin-right: 2rem;
  flex-direction: column;
  left: -35rem;
  top: 0rem;
  line-height: 2rem;
  
}
.slide-enter-active {
  animation: slide reverse 500ms ease-in-out;
}
.slide-leave-active {
  animation: slide 500ms ease-in-out;
}
@keyframes slide {
  from {
    transform: scaleX(1);
    opacity: 1;
    width: 10rem;
    height: auto;
    transform-origin: left;
  }
  to {
    transform: scaleX(0);
    opacity: 0;
    width: 0rem;
    height: 0;
    transform-origin: left;

  }
}

nav {
  width: 10rem;
  display: flex;
  flex-direction: column;
  min-height: 10rem;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  background-color: #D9D9D9;
  border-radius: .5rem;
  padding: .1rem;
  box-shadow: 2px 3px 16px -4px rgba(0,0,0,0.75);

}

nav a.router-link-exact-active {
  background-color: #3C6E71;
  padding: .5rem;
  width: 80%;
  color: #EAF6FF;
  box-shadow: 2px 3px 8px -4px rgba(0,0,0,0.75);

}
nav a:hover{
  background-color: #284B63;
  color: #EAF6FF;
}


nav a {
  display: inline-block;
  padding: 0 1rem;
  width: 50%;
  border-radius: .25rem;
  color: black;
  text-decoration: none;
  margin: .25rem;
}

nav a:first-of-type {
  border: 0;
}


@media (min-width: 400px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>