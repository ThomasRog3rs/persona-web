<template>
  <div class="mx-3 my-3">
    <h1 class="text-3xl text-gray-100 font-bold mb-5 ml-3">Your Personas</h1>
    <div class="grid grid-cols-4 gap-5 pr-5">
      <PersonaCard :props="myPersona"></PersonaCard>
      <PersonaCard :props="myPersona"></PersonaCard>
      <PersonaCard :props="myPersona"></PersonaCard>
      <PersonaCard :props="myPersona"></PersonaCard>
    </div>
    <!-- <div class="grid col-span-3 gap-4">
      <PersonaCard :props="myPersona"></PersonaCard>
      <PersonaCard :props="myPersona"></PersonaCard>
      <PersonaCard :props="myPersona"></PersonaCard>
      <PersonaCard :props="myPersona"></PersonaCard>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import PersonaCard from '../components/PersonaCard.vue';
import { useNavigationStore } from '../stores/navigation.store';
import { PersonaCardProps } from '../types/PersonaCardProps';

const myPersona: PersonaCardProps = {
  personaName: 'King Henry VIII',
  personaId: 1,
  personaImgUrl:
    'https://images.immediate.co.uk/production/volatile/sites/7/2018/01/Henry-VIII_GettyImages-53313077-995ecdb.jpg?quality=45&resize=960,639',
  personaTags: ['History', 'Education', 'Other'],
  personaDescription:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellat alias laudantium rem quibusdam quod labore. Ut officiis ipsam fugiat vero autem veritatis id consequatur!',
};

const naviagtionStore = useNavigationStore();
naviagtionStore.setActivePage('/home');
</script>

<style></style>
