'use client';
import { Avatar } from 'flowbite-react';
import { Fragment, useEffect, useState } from 'react';
import Header from '../../components/navbar';
import { Persona } from '../../types';

export default function PersonaPage({ params }: any): JSX.Element {
  const [persona, setPersona] = useState<Persona | undefined>();
  const [notFound, setNotFound] = useState<Boolean>(false);

  useEffect(() => {
    fetch('http://localhost:3001/personas')
      .then((res) => res.json())
      .then((data) => {
        let output = data[params.id - 1];
        console.log(output);
        if (output !== undefined) {
          setPersona(output);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      });
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="flex dark:bg-gray-900">
        <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
          {notFound ? (
            <h1>Not Found</h1>
          ) : persona ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-xl p-4">
                <Avatar alt="" img={persona.imagUrl} size="xl" rounded>
                  <div className="space-y-1 font-medium dark:text-white">
                    <div>{persona.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Died in 1919
                    </div>
                  </div>
                </Avatar>
                {/* <img src={persona.imagUrl} alt="" /> */}
              </div>
              <div className="border rounded-xl p-4 text-white">
                <h1>Chat Bot</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
                  est similique vel labore ea alias odio magnam voluptates fuga
                  accusamus!
                </p>
                <form className="mt-4">
                  <label htmlFor="chat" className="sr-only">
                    Your message
                  </label>
                  <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <textarea
                      id="chat"
                      // rows="1"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                      placeholder="Send a message"
                    ></textarea>
                    <button
                      type="submit"
                      className="inline-flex justify-center p-2 text-cyan-600 rounded-full cursor-pointer dark:text-cyan-400"
                    >
                      <svg
                        className="w-5 h-5 rotate-90"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                      >
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                      </svg>
                      <span className="sr-only">Send message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </main>
      </div>
    </Fragment>
  );
}
