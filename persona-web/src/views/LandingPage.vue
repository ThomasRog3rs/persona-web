<template>
  <section
    id="cta"
    class="container mx-auto bg-[#111827] rounded-xl shadow p-[4rem] m-10 info-box text-center"
  >
    <h1 class="text-3xl text-gray-100 font-bold mb-5">
      Where History and Fiction Come to Life!
    </h1>
    <p class="text-gray-400 text-xl mb-5">
      Unleash Your Imagination with Persona - the ultimate chatbot app for
      creating, training, and chatting with historical and fictional characters.
    </p>
    <router-link
      to="/login"
      class="w-1/2 px-5 py-2 m-2 text-sm tracking-wide text-white transition-colors duration-200 bg-transparent rounded-lg shrink-0 sm:w-auto hover:bg-primary-light dark:hover:bg-primary-light dark:bg-transparent border"
      >Login</router-link
    >

    <router-link
      to="/signup"
      class="w-1/2 px-5 py-2 m-2 text-sm tracking-wide text-white transition-colors duration-200 bg-primary rounded-lg shrink-0 sm:w-auto hover:bg-primary-light dark:hover:bg-primary-light dark:bg-primary"
    >
      Create a free account
    </router-link>
  </section>
  <section id="about">
    <div
      class="p-0 bg-transparent flex flex-col lg:flex-row lg:justify-between"
    >
      <div
        class="w-full lg:w-1/4 bg-transparent p-6 rounded-lg shadow-lg border-2 border-dashed my-3 lg:mx-3"
        style="filter: drop-shadow(0 0 2em #000dff)"
      >
        <h2 class="text-2xl font-bold mb-2 text-gray-200">
          Craft Your Chatbot
        </h2>
        <p class="text-gray-300">
          Bring any character to life with your creative touch. Build your
          Persona from scratch!
        </p>
      </div>
      <div
        class="w-full lg:w-1/4 bg-transparent p-6 rounded-lg shadow-lg border-2 border-dashed my-3 lg:mx-3"
      >
        <h2 class="text-2xl font-bold mb-2 text-gray-200">Train and Adapt</h2>
        <p class="text-gray-300">
          Watch your character evolve with every interaction. AI-powered
          adaptability ensures unique conversations.
        </p>
      </div>
      <div
        class="w-full lg:w-1/4 bg-transparent p-6 rounded-lg shadow-lg border-2 border-dashed my-3 lg:mx-3"
      >
        <h2 class="text-2xl font-bold mb-2 text-gray-200">Group Chats</h2>
        <p class="text-gray-300">
          Step into captivating group chats with iconic personalities. Rewrite
          history or delve into fictional worlds together.
        </p>
      </div>
      <div
        class="w-full lg:w-1/4 bg-transparent p-6 rounded-lg shadow-lg border-2 border-dashed my-3 lg:mx-3"
      >
        <h2 class="text-2xl font-bold mb-2 text-gray-200">
          Limitless Possibilities
        </h2>
        <p class="text-gray-300">
          Connect with like-minded storytellers, share your creations, and
          explore endless chatbot adventures.
        </p>
      </div>
    </div>
  </section>
  <section id="popular-personas">
    <h1 class="text-3xl text-gray-100 font-bold mb-5">Popular Personas</h1>
    <div
      class="p-0 bg-transparent flex flex-col lg:flex-row lg:justify-between"
    >
      <div class="w-full lg:w-1/4 bg-transparent rounded-lg my-3 lg:mx-3">
        <img
          src="https://images.unsplash.com/photo-1569285645462-a3f9c6332d56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RG9uYWxkJTIwVHJ1bXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          class="rounded-lg"
        />
        <div class="py-6 bg-transparent rounded-b-lg">
          <h2 class="font-bold mb-2 text-2xl text-gray-200">Donald Trump</h2>
          <p class="text-slate-600 mb-2"></p>
          <a
            href="#"
            class="text-purple-500 hover:text-purple-400 underline text-sm"
            >Chat now 👉</a
          >
        </div>
      </div>
      <div class="w-full lg:w-1/4 bg-transparent rounded-lg my-3 lg:mx-3">
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/7/2018/01/Henry-VIII_GettyImages-53313077-995ecdb.jpg?quality=45&resize=960,639"
          alt=""
          class="rounded-lg"
        />
        <div class="py-6 bg-transparent rounded-lg">
          <h2 class="font-bold mb-2 text-2xl text-gray-200">King Henry VIII</h2>
          <p class="text-slate-600 mb-2"></p>
          <a
            href="#"
            class="text-purple-500 hover:text-purple-400 underline text-sm"
            >Chat now 👉</a
          >
        </div>
      </div>
      <div class="w-full lg:w-1/4 bg-transparent rounded-lg my-3 lg:mx-3">
        <img
          src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
          alt=""
          class="rounded-lg"
        />
        <div class="py-6 bg-transparent rounded-b-lg">
          <h2 class="font-bold mb-2 text-2xl text-gray-200">
            Card with an image
          </h2>
          <p class="text-slate-600 mb-2"></p>
          <a
            href="#"
            class="text-purple-500 hover:text-purple-400 underline text-sm"
            >Chat now 👉</a
          >
        </div>
      </div>
      <div class="w-full lg:w-1/4 bg-transparent rounded-lg my-3 lg:mx-3">
        <img
          src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
          alt=""
          class="rounded-lg"
        />
        <div class="py-6 bg-transparent rounded-b-lg">
          <h2 class="font-bold mb-2 text-2xl text-gray-200">
            Card with an image
          </h2>
          <p class="text-slate-600 mb-2"></p>
          <a
            href="#"
            class="text-purple-500 hover:text-purple-400 underline text-sm"
            >Chat now 👉</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import landingImage from '@/assets/landing.png';
// import HelloWorld from '../components/HelloWorld.vue';
</script>

<style>
.info-box {
  filter: drop-shadow(0 0 2em #646cffaa);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.674), rgba(0, 0, 0, 0.551)),
    url('/landing2.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}
section {
  margin-top: 60px;
}
</style>
