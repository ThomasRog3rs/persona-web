<template>
  <div class="min-w-full lg:grid lg:grid-cols-3">
    <div class="bg-[#1d2840] lg:col-span-1">
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
            class="block w-full py-2 pl-10 bg-gray-100 text-black rounded outline-none"
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
            class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out cursor-pointer bg-primary hover:bg-primary-light focus:outline-none"
          >
            <img
              class="object-cover w-10 h-10 rounded-full"
              src="https://images.immediate.co.uk/production/volatile/sites/7/2018/01/Henry-VIII_GettyImages-53313077-995ecdb.jpg?quality=45&resize=960,639"
              alt="username"
            />
            <div class="w-full pb-2">
              <div class="flex justify-between">
                <span class="block ml-2 font-semibold text-gray-200"
                  >King Henry VIII
                </span>
                <span class="block ml-2 text-sm text-gray-200">25 minutes</span>
              </div>
              <span class="block ml-2 text-sm text-gray-200"
                >Indeed, it is true, my inquisitive subject...</span
              >
            </div>
          </a>
          <a
            class="flex items-center px-3 py-2 text-sm transition hover:bg-primary-light duration-150 ease-in-out cursor-pointer focus:outline-none"
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
      <div class="w-full">
        <div class="relative flex items-center p-3 border-b border-gray-300">
          <img
            class="object-cover w-10 h-10 rounded-full"
            src="https://images.immediate.co.uk/production/volatile/sites/7/2018/01/Henry-VIII_GettyImages-53313077-995ecdb.jpg?quality=45&resize=960,639"
            alt="username"
          />
          <span class="block ml-2 font-bold text-gray-200"
            >King Henry VIII</span
          >
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
                <span class="block"
                  >Greetings, good subject! Pray tell, what dost thou seek from
                  the royal court of King Henry the 8th? Speak thy mind, and I
                  shall endeavor to respond in a manner befitting my regal
                  stature</span
                >
              </div>
            </li>
            <li class="flex justify-end">
              <div
                class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded-lg shadow"
              >
                <span class="block">Which of your wives did you kill?</span>
              </div>
            </li>

            <li class="flex justify-start">
              <div
                class="relative max-w-xl px-4 py-2 text-gray-100 bg-primary-light rounded-lg shadow"
              >
                <span class="block"
                  >Ah, thou referest to my unfortunate past and the fates of my
                  six marriages. 'Tis true, two of my wives, Anne Boleyn and
                  Catherine Howard, did meet tragic ends. They were accused of
                  treason and infidelity, and sadly, they were executed during
                  my reign. It was a time of tumult and difficult decisions, and
                  history shall forever remember these events.
                </span>
              </div>
            </li>
            <li class="flex justify-end">
              <div
                class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded-lg shadow"
              >
                <span class="block"
                  >Is it true you inveted the church of england just so you
                  could get divorced?</span
                >
              </div>
            </li>
            <li class="flex justify-start">
              <div
                class="relative max-w-xl px-4 py-2 text-gray-100 bg-primary-light rounded-lg shadow"
              >
                <span class="block"
                  >Indeed, it is true, my inquisitive subject. The formation of
                  the Church of England, or the Anglican Church, was indeed a
                  consequential step in my efforts to secure an annulment from
                  my first marriage to Catherine of Aragon. The authority of the
                  Pope in Rome posed a challenge to my desires, and thus, the
                  Church of England was established with the monarch as its
                  head, allowing for greater control over matters of marriage
                  and divorce. This decision had far-reaching consequences for
                  both religious and political realms in England's history
                </span>
              </div>
            </li>
            <li class="flex justify-end">
              <div
                class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded-lg shadow"
              >
                <span class="block"
                  >are you aware you are one of the most hated and feared kings
                  in english history?</span
                >
              </div>
            </li>
            <li class="flex justify-start">
              <div
                class="relative max-w-xl px-4 py-2 text-gray-100 bg-primary-light rounded-lg shadow"
              >
                <span class="block"
                  >Aye, I am well aware that my reign evokes a range of emotions
                  in the annals of history. Some regard me as a formidable ruler
                  who reshaped the course of England's destiny, while others
                  indeed hold disdain for the tumultuous events and decisions
                  that marked my time on the throne. The passions of history are
                  oftentimes mixed, and I, King Henry the 8th, stand as a figure
                  of both admiration and controversy in the tapestry of
                  England's past.
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div class="flex items-center justify-between w-full p-3 bg-[#172034]">
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
import { useNavigationStore } from '../stores/navigation.store';
const naviagtionStore = useNavigationStore();
naviagtionStore.setActivePage('/chat');
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
