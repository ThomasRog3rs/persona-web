import { FC, PropsWithChildren } from "react";
import FlowbiteContext from "./context/FlowbiteContext";
import "./globals.css";

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-900">
        <FlowbiteContext>{children}</FlowbiteContext>
      </body>
    </html>
  );
};

export default RootLayout;
