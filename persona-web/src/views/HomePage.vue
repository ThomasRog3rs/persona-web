<template>
  <div class="mx-3 my-3">
    <h1 class="text-3xl text-gray-100 font-bold mb-5">Trending Personas</h1>
    <div class="flex">
      <div
        class="w-full lg:w-1/4 bg-transparent rounded-lg my-3 lg:mx-3 overflow-hidden shadow-lg bg-slate-800"
      >
        <img
          class="w-full"
          src="https://images.immediate.co.uk/production/volatile/sites/7/2018/01/Henry-VIII_GettyImages-53313077-995ecdb.jpg?quality=45&resize=960,639"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-md mb-2">King Henry VIII</div>
          <p class="text-gray-300 text-base text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <a
            href="#"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#History</a
          >
          <a
            href="#"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Education</a
          >
          <a
            href="#"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Other</a
          >
        </div>
      </div>
      <div
        class="w-full lg:w-1/4 bg-transparent rounded-lg my-3 lg:mx-3 rounded overflow-hidden shadow-lg bg-slate-800"
      >
        <img
          class="w-full"
          src="https://images.immediate.co.uk/production/volatile/sites/7/2018/01/Henry-VIII_GettyImages-53313077-995ecdb.jpg?quality=45&resize=960,639"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-md mb-2">King Henry VIII</div>
          <p class="text-gray-300 text-base text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <a
            href="#"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#History</a
          >
          <a
            href="#"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Education</a
          >
          <a
            href="#"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Other</a
          >
        </div>
      </div>
      <div
        class="w-full lg:w-1/4 bg-transparent rounded-lg my-3 lg:mx-3 rounded overflow-hidden shadow-lg bg-slate-800"
      >
        <img
          class="w-full"
          src="https://images.immediate.co.uk/production/volatile/sites/7/2018/01/Henry-VIII_GettyImages-53313077-995ecdb.jpg?quality=45&resize=960,639"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-md mb-2">King Henry VIII</div>
          <p class="text-gray-300 text-base text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <a
            href="#"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#History</a
          >
          <a
            href="#"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Education</a
          >
          <a
            href="#"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Other</a
          >
        </div>
      </div>
      <div
        class="w-full lg:w-1/4 bg-transparent rounded-lg my-3 lg:mx-3 rounded overflow-hidden shadow-lg bg-slate-800"
      >
        <img
          class="w-full"
          src="https://images.immediate.co.uk/production/volatile/sites/7/2018/01/Henry-VIII_GettyImages-53313077-995ecdb.jpg?quality=45&resize=960,639"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-md mb-2">King Henry VIII</div>
          <p class="text-gray-300 text-base text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <a
            href="#"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#History</a
          >
          <a
            href="#"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Education</a
          >
          <a
            href="#"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#Other</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useNavigationStore } from '../stores/navigation.store';

const naviagtionStore = useNavigationStore();
naviagtionStore.setActivePage('/home');
</script>

<style></style>
