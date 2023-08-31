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
        Create your free account
      </h1>
      <div class="w-[400px] m-auto">
        <label class="block mb-4">
          <div class="mb-1 text-grey-darkest">Email</div>
          <input
            class="w-full py-2 px-3 bg-transparent border rounded outline-none focus:border-blue-light focus:shadow-outline"
            type="text"
          />
        </label>
        <label class="block mb-5">
          <div class="mb-1 text-grey-darkest">Password</div>
          <input
            class="w-full py-2 px-3 bg-transparent border rounded outline-none focus:border-blue-light focus:shadow-outline"
            type="password"
          />
        </label>
        <div class="mb-10">
          <button
            class="w-full px-4 py-2 text-white bg-primary rounded-lg"
            type="button"
          >
            Sign Up &rightarrow;
          </button>
        </div>
        <div class="text-sm text-center">
          <span>Already have an account?</span>
          &VeryThinSpace;
          <router-link
            to="/login"
            class="text-primary-light hover:text-violet-700"
            >Login</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.form-logo {
  filter: drop-shadow(0rem 0 1em #ffffff5d);
}
</style>
