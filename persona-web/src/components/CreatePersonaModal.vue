<template>
  <div
    class="fixed left-0 top-0 z-[1050] h-full w-full bg-black opacity-50"
    :class="{ hidden: !createPersonaStore.isModalOpen }"
  ></div>
  <div
    class="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    role="dialog"
    :class="{ hidden: !createPersonaStore.isModalOpen }"
  >
    <div
      data-te-modal-dialog-ref
      class="relative w-auto transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]"
    >
      <div
        class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
      >
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
        >
          <!--Modal title-->
          <h5
            class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
            id="exampleModalXlLabel"
          >
            Create a new persona
          </h5>
          <!--Close button-->
          <button
            type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
            @click="createPersonaStore.isModalOpen = false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!--Modal body-->
        <div class="relative p-4">
          <Form action="">
            <field
              name="email"
              type="email"
              class="w-full py-2 px-3 bg-transparent border rounded outline-none focus:border-blue-light focus:shadow-outline mb-4"
            ></field>
            <field
              name="email"
              type="email"
              class="w-full py-2 px-3 bg-transparent border rounded outline-none focus:border-blue-light focus:shadow-outline mb-4"
            ></field>
            <field
              name="email"
              type="email"
              class="w-full py-2 px-3 bg-transparent border rounded outline-none focus:border-blue-light focus:shadow-outline mb-4"
            ></field>
            <field
              name="email"
              type="email"
              class="w-full py-2 px-3 bg-transparent border rounded outline-none focus:border-blue-light focus:shadow-outline mb-4"
            ></field>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import * as Yup from 'yup';
import { Form, Field } from 'vee-validate';

import { useCreatePersonaStore } from '../stores/createPersona.store';
const createPersonaStore = useCreatePersonaStore();
</script>
