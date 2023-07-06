import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import { FC } from "react";

const Navigation: FC<Record<string, never>> = function () {
  return (
    <header className="sticky top-0 z-20">
      <Navbar fluid>
        <Navbar.Brand href="/">
          <Image
            alt="Flowbite logo"
            height="24"
            src="/favicon.png"
            width="24"
          />
          <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
          <DarkThemeToggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/">About</Navbar.Link>
          <Navbar.Link href="/">Services</Navbar.Link>
          <Navbar.Link href="/">Pricing</Navbar.Link>
          <Navbar.Link href="/">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Navigation;
