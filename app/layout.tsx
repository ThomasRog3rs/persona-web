"use client";

import { FC, PropsWithChildren, useEffect } from "react";
import FlowbiteContext from "./context/FlowbiteContext";
import "./globals.css";

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  function setDarkThemeInLocalStorage(): void {
    localStorage.setItem("theme", "dark");
  }

  useEffect(() => {
    setDarkThemeInLocalStorage();
  }, []);

  return (
    <html lang="en" className="dark dark:bg-gray-900">
      <body className="dark:bg-gray-900 ">
        <FlowbiteContext>{children}</FlowbiteContext>
      </body>
    </html>
  );
};

export default RootLayout;
