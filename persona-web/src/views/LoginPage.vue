<template>
  <div class="flex flex-col items-center justify-center w-full pt-[10rem]">
    <!-- Form -->
    <div class="w-full p-8 text-white" style="max-width: 768px">
      <div class="mt-[1.23rem]">
        <router-link to="/">
          <img
            src="https://preview.cruip.com/stellar/images/logo.svg"
            alt="Logo"
            class="m-auto form-logo"
            width="50"
          />
        </router-link>
      </div>
      <h1 class="mb-3 font-bold text-center text-[2.75rem] text-slate-50">
        Sign in to your account
      </h1>
      <Form
        @submit="onSubmit"
        :validation-schema="schema"
        v-slot="{ errors, isSubmitting }"
        class="w-[400px] m-auto"
      >
        <div
          v-if="errors.apiError"
          class="mb-4 mt-4 py-2 px-3 border border-red-500 rounded bg-red-400"
        >
          {{ errors.apiError }}
        </div>
        <label class="block mb-4">
          <div class="mb-1 text-grey-darkest">Email</div>
          <field
            name="email"
            type="email"
            class="w-full py-2 px-3 bg-transparent border rounded outline-none focus:border-blue-light focus:shadow-outline"
          ></field>
          <div
            v-show="errors.email"
            class="mt-2 py-2 px-3 border border-red-500 rounded bg-red-400"
          >
            {{ errors.email }}
          </div>
        </label>
        <label class="block mb-5">
          <div class="mb-1 text-grey-darkest">Password</div>
          <field
            name="password"
            type="password"
            class="w-full py-2 px-3 bg-transparent border rounded outline-none focus:border-blue-light focus:shadow-outline"
          ></field>
          <div
            v-show="errors.password"
            class="mt-2 py-2 px-3 border border-red-500 rounded bg-red-400"
          >
            {{ errors.password }}
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
            <span v-show="!isSubmitting">Sign In &rightarrow;</span>
          </button>
        </div>
        <div class="text-sm flex justify-between">
          <router-link
            to="/signup"
            class="text-primary-light hover:text-violet-700"
            >Create new account</router-link
          >
          <div>/</div>
          <router-link
            to="/password-reset"
            class="text-primary-light hover:text-violet-700"
            >Forgot your password?</router-link
          >
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as Yup from 'yup';
import { Form, Field } from 'vee-validate';
import { useAuthStore } from '../stores/auth.store';
import router from '../router';

const authStore = useAuthStore();
if (authStore.user != null) {
  router.push('/home');
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const onSubmit = async (values: any, { setErrors }) => {
  const { email, password } = values;

  try {
    return await authStore.login(email, password);
  } catch (error: any) {
    console.log('error: ', error);
    setErrors({
      apiError: `Login Failed: ${error?.message} `,
    });
  }
};
</script>

<style>
.form-logo {
  filter: drop-shadow(0rem 0 1em #ffffff5d);
}
</style>
