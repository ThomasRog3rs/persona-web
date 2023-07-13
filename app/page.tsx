'use client';

import { Fragment, useEffect, useState } from 'react';
import Header from './components/navbar';
import PersonaCard from './components/persona-card/persona-card';
import { Area, Persona } from './types';

export default function Index(): JSX.Element {
  const [areas, setAreas] = useState<Area[]>([]);
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetch('http://localhost:3001/areas')
      .then((response) => response.json())
      .then((data) => {
        setAreas(data);
        setIsError(false);
      })
      .catch((error: Error) => {
        console.log(error);
        setIsError(true);
      });
    fetch('http://localhost:3001/personas')
      .then((res) => res.json())
      .then((data) => {
        setPersonas(data);
        setIsError(false);
      })
      .catch((error: Error) => {
        console.log(error);
        setIsError(true);
      });
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="flex dark:bg-gray-900">
        <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
          {isError ? (
            <p className="text-white">
              An error occurred. Please try again later.
            </p>
          ) : (
            <HomePage areas={areas} personas={personas} />
          )}
        </main>
      </div>
    </Fragment>
  );
}

function HomePage({
  areas,
  personas,
}: {
  areas: Area[];
  personas: Persona[];
}): JSX.Element {
  return (
    <div className="p-6">
      <section>
        <header />
      </section>
      {areas.map((area) => (
        <Fragment>
          <section className="mb-6">
            <header>
              <h2
                className="mb-3 text-4xl font-bold dark:text-gray-200"
                key={String(area.id)}
              >
                {area.name} Dead People
              </h2>
            </header>
            <div className="flex">
              {personas.map((persona) =>
                persona.areaId === area.id ? (
                  <PersonaCard key={String(persona.id)} persona={persona} />
                ) : null
              )}
            </div>
          </section>
        </Fragment>
      ))}
    </div>
  );
}
