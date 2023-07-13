'use client';

import { Fragment } from 'react';
import Header from '../components/navbar';

export default function Index(): JSX.Element {
  return (
    <Fragment>
      <Header />
      <div className="flex dark:bg-gray-900">
        <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
          <h1 className="text-white">Go away</h1>
        </main>
      </div>
    </Fragment>
  );
}
