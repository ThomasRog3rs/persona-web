"use client";

import { Fragment } from "react";
import Navigation from "./components/header";

export default function Index(): JSX.Element {
  return (
    <Fragment>
      <Navigation />
      <main className="px-2 py-2.5">
        <h1>Hello World</h1>
      </main>
    </Fragment>
  );
}
