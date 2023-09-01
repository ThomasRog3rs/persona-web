<template>
  <div class="bg-[#1d2840] min-w-full lg:grid lg:grid-cols-3">
    <div class="lg:col-span-1">
      <div class="mx-3 my-3">
        <div class="relative text-gray-200">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6 text-gray-300"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
          <input
            type="search"
            class="block w-full py-2 pl-10 bg-gray-100 rounded outline-none"
            name="search"
            placeholder="Search"
            required
          />
        </div>
      </div>

      <ul class="overflow-auto h-[32rem]">
        <h2 class="my-2 mb-2 ml-2 text-lg text-gray-200">Chats</h2>
        <li>
          <a
            class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out cursor-pointer hover:bg-primary-light focus:outline-none"
          >
            <img
              class="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
              alt="username"
            />
            <div class="w-full pb-2">
              <div class="flex justify-between">
                <span class="block ml-2 font-semibold text-gray-200"
                  >John Doe</span
                >
                <span class="block ml-2 text-sm text-gray-200">25 minutes</span>
              </div>
              <span class="block ml-2 text-sm text-gray-200">bye</span>
            </div>
          </a>
          <a
            class="flex items-center px-3 py-2 text-sm transition hover:bg-primary-light duration-150 ease-in-out bg-primary cursor-pointer focus:outline-none"
          >
            <img
              class="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2016/06/15/15/25/loudspeaker-1459128__340.png"
              alt="username"
            />
            <div class="w-full pb-2">
              <div class="flex justify-between">
                <span class="block ml-2 font-semibold text-gray-200">Sam</span>
                <span class="block ml-2 text-sm text-gray-200">50 minutes</span>
              </div>
              <span class="block ml-2 text-sm text-gray-200">Good night</span>
            </div>
          </a>
          <a
            class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out cursor-pointer hover:bg-primary-light focus:outline-none"
          >
            <img
              class="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
              alt="username"
            />
            <div class="w-full pb-2">
              <div class="flex justify-between">
                <span class="block ml-2 font-semibold text-gray-200">Emma</span>
                <span class="block ml-2 text-sm text-gray-200">6 hour</span>
              </div>
              <span class="block ml-2 text-sm text-gray-200">Good Morning</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="hidden lg:col-span-2 lg:block">
      <div class="w-full bg-[#172034]">
        <div class="relative flex items-center p-3 border-b border-gray-300">
          <img
            class="object-cover w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
            alt="username"
          />
          <span class="block ml-2 font-bold text-gray-200">Emma</span>
          <span
            class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"
          >
          </span>
        </div>
        <div class="relative w-full p-6 overflow-y-auto h-[40rem] scroll-bar">
          <ul class="space-y-2">
            <li class="flex justify-start">
              <div
                class="relative max-w-xl px-4 py-2 text-gray-100 bg-primary-light rounded-lg shadow"
              >
                <span class="block">Hi</span>
              </div>
            </li>
            <li class="flex justify-end">
              <div
                class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded-lg shadow"
              >
                <span class="block">Hiiii</span>
              </div>
            </li>
            <li class="flex justify-end">
              <div
                class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded-lg shadow"
              >
                <span class="block">how are you?</span>
              </div>
            </li>
            <li class="flex justify-start">
              <div
                class="relative max-w-xl px-4 py-2 text-gray-100 bg-primary-light rounded-lg shadow"
              >
                <span class="block"
                  >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Iusto excepturi assumenda esse quia expedita, eum aliquid
                  consequatur neque asperiores, illum provident velit eos quidem
                  debitis sequi eligendi quisquam aperiam? Cum ratione ipsa
                  expedita explicabo libero praesentium animi numquam beatae!
                  Dicta reiciendis itaque provident. Incidunt architecto fugiat
                  quasi aperiam facilis similique, quia nisi consequuntur minus,
                  explicabo deleniti velit quos eos obcaecati minima vel omnis
                  molestiae? Laudantium, repudiandae, doloribus asperiores,
                  magni quasi tenetur exercitationem consequuntur voluptas omnis
                  nostrum totam dicta? Id similique corporis corrupti inventore
                  reprehenderit quos earum, molestiae est exercitationem
                  molestias aliquid, tempora dolor, dolorem officia eaque!
                  Reprehenderit quasi libero facere iusto debitis laudantium
                  maiores nostrum quis velit ipsa reiciendis, at, incidunt nemo?
                  Asperiores porro autem debitis, maxime ipsum unde repellat
                  amet inventore tempore fuga nisi. Cumque quia modi sint,
                  beatae a laboriosam explicabo quos autem, asperiores culpa
                  iusto nulla perferendis sit non? Ab ut adipisci, sint neque
                  dolorum, excepturi accusantium unde distinctio sapiente nam
                  libero, commodi nobis quia corporis! Vel blanditiis deleniti
                  architecto repellendus assumenda perspiciatis enim labore
                  nulla. Debitis ratione veniam saepe eligendi? Quasi, aliquid?
                  Nisi qui quae commodi non, cumque officia quas illum
                  aspernatur fugiat numquam? Natus minima laboriosam blanditiis
                  rerum quis. Neque exercitationem nemo adipisci iste accusamus.
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div class="flex items-center justify-between w-full p-3 bg-[#111827]">
          <input
            type="text"
            placeholder="Message"
            class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-lg outline-none focus:text-gray-700"
            name="message"
            required
          />

          <button type="submit">
            <svg
              class="w-5 h-5 text-gray-200 origin-center transform rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '../router';
import { useAuthStore } from '../stores/auth.store';
const authStore = useAuthStore();

if (authStore.user == null) {
  router.push('/login');
}
</script>

<style>
.scroll-bar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 10px;
}

.scroll-bar::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

.scroll-bar::-webkit-scrollbar-thumb {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.44, #8b5cf6),
    color-stop(0.72, rgb(73, 125, 189)),
    color-stop(0.86, #7c3aed)
  );
}
</style>
