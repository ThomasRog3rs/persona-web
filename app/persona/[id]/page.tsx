"use client";
import { Avatar } from "flowbite-react";
import { Fragment, useEffect, useState } from "react";
import Header from "../../components/navbar";
import { Persona } from "../../types";

// async function getPersona(personaId: number) {
//   const res = await fetch("http://localhost:3001/personas", {
//     next: { revalidate: 10 },
//   });
//   const data = await res.json();
//   return data[personaId - 1];
// }

export default function PersonaPage({ params }: any): JSX.Element {
  const [persona, setPersona] = useState<Persona | undefined>();
  const [notFound, setNotFound] = useState<Boolean>(false);

  useEffect(() => {
    fetch("http://localhost:3001/personas")
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
