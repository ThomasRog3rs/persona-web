<template>
  <nav
    class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3 mt-3"
  >
    <div
      class="container px-2 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/" class="flex items-center">
          <img
            src="https://preview.cruip.com/stellar/images/logo.svg"
            class="h-8 mr-3"
            alt="Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Persona</span
          >
        </router-link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          @click="toggleNavbar"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        v-bind:class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li :class="{ 'mb-2 mt-3': showMenu }">
            <router-link
              to="/login"
              :class="{ border: showMenu }"
              class="text-white bg-transparent ml-2 hover:bg-gray-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 dark:bg-transparent dark:hover:bg-gray-700"
              >Login</router-link
            >
          </li>
          <li :class="{ 'mt-3': showMenu }">
            <router-link
              to="/signup"
              class="text-white bg-primary ml-2 hover:bg-primary-light focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 dark:bg-primary dark:hover:bg-primary-light"
              >Sign up</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const showMenu = ref(false);
const toggleNavbar = () => {
  showMenu.value = !showMenu.value;
};
</script>
