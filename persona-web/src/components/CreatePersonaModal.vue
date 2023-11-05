<template>
  <div
    class="fixed left-0 top-0 z-[1050] h-full w-full bg-black opacity-50 transition-all"
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
        class="pointer-events-auto relative flex w-full flex-col rounded-md border-none text-current shadow-lg outline-none bg-[#172034]"
      >
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
        >
          <!--Modal title-->
          <h5
            class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
          >
            Create a new persona
          </h5>
          <!--Close button-->
          <button
            type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
            @click="
              () => {
                createPersonaStore.isModalOpen = false;
              }
            "
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
          <Form
            @submit="onSubmit"
            :validation-schema="schema"
            v-slot="{ errors, isSubmitting }"
            class="w-full m-auto"
          >
            <div
              v-if="errors.apiError"
              class="mb-4 mt-4 py-2 px-3 border border-red-500 rounded bg-red-400"
            >
              {{ errors.apiError }}
            </div>
            <label class="block mb-4">
              <div class="mb-1 text-grey-darkest">Bot Name</div>
              <field
                name="botName"
                type="text"
                class="w-full py-2 px-3 bg-transparent border rounded outline-none focus:border-blue-light focus:shadow-outline"
              ></field>
              <div
                v-show="errors.botName"
                class="mt-2 py-2 px-3 border border-red-500 rounded bg-red-400"
              >
                {{ errors.botName }}
              </div>
            </label>
            <label class="block mb-5">
              <div class="mb-1 text-grey-darkest">Bot Image</div>
              <field
                name="botImage"
                type="file"
                class="w-full py-2 px-3 bg-transparent border rounded outline-none focus:border-blue-light focus:shadow-outline"
              ></field>
              <div
                v-show="errors.botImage"
                class="mt-2 py-2 px-3 border border-red-500 rounded bg-red-400"
              >
                {{ errors.botImage }}
              </div>
            </label>
            <label class="block mb-5">
              <label
                for="botType"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Bot type</label
              >
              <field
                name="botType"
                as="select"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Fictional Character">Fictional Character</option>
                <option value="Real Person">Real Person</option>
                <option value="Celebrity">Celebrity</option>
                <option value="Historical Figure">Historical Figure</option>
              </field>
              <div
                v-show="errors.botType"
                class="mt-2 py-2 px-3 border border-red-500 rounded bg-red-400"
              >
                {{ errors.botType }}
              </div>
            </label>
            <label class="block mb-5">
              <label
                for="botRelationship"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Bot relationship</label
              >
              <field
                as="select"
                name="botRelationship"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Friend">Friend</option>
                <option value="Personal Advisor">Personal Advisor</option>
                <option value="Educator">Educator</option>
                <option value="Enemy">Enemy</option>
                <option value="Other">Other</option>
              </field>
              <div
                v-show="errors.botRelationship"
                class="mt-2 py-2 px-3 border border-red-500 rounded bg-red-400"
              >
                {{ errors.botRelationship }}
              </div>
            </label>
            <label class="block mb-4">
              <div class="mb-1 text-grey-darkest">Bot description</div>
              <field
                name="botDescription"
                as="textarea"
                type="text"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></field>
              <div
                v-show="errors.botDescription"
                class="mt-2 py-2 px-3 border border-red-500 rounded bg-red-400"
              >
                {{ errors.botDescription }}
              </div>
            </label>

            <div class="mb-10">
              <button
                class="w-full px-4 py-2 text-white bg-primary rounded-lg text-center"
                type="submit"
                :disabled="isSubmitting"
              >
                <div
                  v-show="isSubmitting"
                  class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Loading...</span
                  >
                </div>
                <span v-show="!isSubmitting">Create Bot</span>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as Yup from 'yup';
import { Form, Field, useResetForm } from 'vee-validate';
import { BotInfo } from '../types/BotInterface';

import { useCreatePersonaStore } from '../stores/createPersona.store';
const createPersonaStore = useCreatePersonaStore();

import { useBotStore } from '../stores/bot.store';
const botStore = useBotStore();

const schema = Yup.object().shape({
  botName: Yup.string().required('Please give your bot a name'),
  botImage: Yup.mixed()
    .test('fileType', 'Invalid file type', (value) => {
      if (value instanceof File) {
        const allowedExtensions = ['image/png', 'image/jpeg', 'image/jpg'];
        return allowedExtensions.includes(value.type);
      }
      return true;
    })
    .test('fileSize', 'File size is too large', (value) => {
      if (value instanceof File) {
        return value.size <= 1024 * 1024; // Example: limit to 1MB
      }
      return true;
    }),
  botType: Yup.string()
    .oneOf(
      ['Fictional Character', 'Real Person', 'Celebrity', 'Historical Figure'],
      'Invalid option selected'
    )
    .required('Please select what type of bot this is'),
  botRelationship: Yup.string()
    .oneOf(
      ['Friend', 'Personal Advisor', 'Educator', 'Enemy', 'Other'],
      'Invalid option selected'
    )
    .required(
      'Please select the kind of relationship the bot should have with you'
    ),
  botDescription: Yup.string().required(
    'Please provide a description of who your bot is and how you want them to act'
  ),
});

const onSubmit = async (values: any, { setErrors, resetForm }: any) => {
  const { botName, botImage, botType, botRelationship, botDescriotion } =
    values;

  try {
    console.log(botName, botImage, botType, botRelationship, botDescriotion);
    const newBotId = botStore.availableBots
      ? botStore.availableBots.length + 1
      : 1;
    const botInfo: BotInfo = {
      name: botName,
      imageUrl: 'https://source.unsplash.com/random/',
      id: newBotId,
    };
    botStore.addBot(botInfo);
    createPersonaStore.isModalOpen = false;
    resetForm();
  } catch (error: any) {
    console.error('error: ', error);
    setErrors({
      apiError: `Something has gone wrong `,
    });
  }
};
</script>
