"use client";

import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Carousel,
  Checkbox,
  Dropdown,
  Footer,
  Label,
  ListGroup,
  Modal,
  Navbar,
  Pagination,
  Progress,
  Rating,
  Sidebar as FlowbiteSidebar,
  Spinner,
  Table,
  Tabs,
  TextInput,
  Timeline,
  Toast,
  Tooltip,
} from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";
import { BiBuoy } from "react-icons/bi";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import {
  HiAdjustments,
  HiArrowNarrowRight,
  HiArrowSmRight,
  HiChartPie,
  HiCheck,
  HiClipboardList,
  HiCloudDownload,
  HiDatabase,
  HiExclamation,
  HiEye,
  HiHome,
  HiInbox,
  HiOutlineAdjustments,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiUserCircle,
  HiViewBoards,
  HiX,
} from "react-icons/hi";
import Header from "./components/navbar";
import Sidebar from "./components/sidebar";
import { SidebarProvider } from "./context/SidebarContext";

export default function Index(): JSX.Element {
  return (
    <SidebarProvider>
      <Header />
      <div className="flex dark:bg-gray-900">
        <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
          <HomePage />
        </main>
        <div className="order-1">{/* <ActualSidebar /> */}</div>
      </div>
    </SidebarProvider>
  );
}

function ActualSidebar(): JSX.Element {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

function HomePage(): JSX.Element {
  return (
    <div className="p-6">
      <section>
        <header />
      </section>
      <section>
        <header>
          <h2 className="mb-3 text-4xl font-bold dark:text-gray-200">
            Didsbury Dead People
          </h2>
        </header>
        <div className="flex">
          <CardExample />
          <CardExample />
          <CardExample />
          <CardExample />
        </div>
      </section>
      {/* <section>
        <header>
          <h2 className="mb-3 text-4xl font-bold dark:text-gray-200">Alert</h2>
        </header>
        <AlertsExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Accordion
          </h2>
        </header>
        <AccordionExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Avatar
          </h2>
        </header>
        <AvatarExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Badges
          </h2>
        </header>
        <BadgesExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Breadcrumb
          </h2>
        </header>
        <BreadcrumbExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Buttons
          </h2>
        </header>
        <ButtonsExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Button group
          </h2>
        </header>
        <ButtonGroupExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Card
          </h2>
        </header>
        <CardExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Carousel
          </h2>
        </header>
        <CarouselExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Dropdown
          </h2>
        </header>
        <DropdownExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Forms
          </h2>
        </header>
        <FormsExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Footer
          </h2>
        </header>
        <FooterExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            List group
          </h2>
        </header>
        <ListGroupExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Modal
          </h2>
        </header>
        <ModalExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Navbars
          </h2>
        </header>
        <NavbarsExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Pagination
          </h2>
        </header>
        <PaginationExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Progress
          </h2>
        </header>
        <ProgressExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Rating
          </h2>
        </header>
        <RatingExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Sidebar
          </h2>
        </header>
        <SidebarExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Spinners
          </h2>
        </header>
        <SpinnersExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Tables
          </h2>
        </header>
        <div className="max-w-full overflow-x-scroll">
          <TablesExample />
        </div>
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Tabs
          </h2>
        </header>
        <TabsExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Timeline
          </h2>
        </header>
        <TimelineExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Toast
          </h2>
        </header>
        <ToastExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Tooltips
          </h2>
        </header>
        <TooltipsExample />
      </section> */}
    </div>
  );
}

function AccordionExample(): JSX.Element {
  return (
    <Accordion flush>
      <Accordion.Panel>
        <Accordion.Title>What is Flowbite?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          What are the differences between Flowbite and Tailwind UI?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

function AlertsExample(): JSX.Element {
  return (
    <Alert
      color="success"
      rounded={false}
      withBorderAccent
      onDismiss={console.log}
      additionalContent={
        <React.Fragment>
          <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
            More info about this info alert goes here. This example text is
            going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
          </div>
          <div className="flex">
            <button
              type="button"
              className="mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900"
            >
              <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
              View more
            </button>
            <button
              type="button"
              className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white"
            >
              Dismiss
            </button>
          </div>
        </React.Fragment>
      }
    >
      <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
        This is a info alert
      </h3>
    </Alert>
  );
}

function AvatarExample(): JSX.Element {
  return (
    <Avatar
      bordered
      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      rounded
    />
  );
}

function BadgesExample(): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="info" size="sm">
        Info
      </Badge>
      <Badge color="gray" size="sm">
        Gray
      </Badge>
      <Badge color="failure" size="sm">
        Failure
      </Badge>
      <Badge color="success" size="sm">
        Success
      </Badge>
      <Badge color="warning" size="sm">
        Warning
      </Badge>
      <Badge color="indigo" size="sm">
        Indigo
      </Badge>
      <Badge color="purple" size="sm">
        Purple
      </Badge>
      <Badge color="pink" size="sm">
        Pink
      </Badge>
    </div>
  );
}

function BreadcrumbExample(): JSX.Element {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="#" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
      <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
    </Breadcrumb>
  );
}

function ButtonsExample(): JSX.Element {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button outline gradientDuoTone="purpleToBlue">
        Purple to blue
      </Button>
      <Button outline gradientDuoTone="cyanToBlue">
        Cyan to blue
      </Button>
      <Button outline gradientDuoTone="greenToBlue">
        Green to blue
      </Button>
      <Button outline gradientDuoTone="purpleToPink">
        Purple to pink
      </Button>
      <Button outline gradientDuoTone="pinkToOrange">
        Pink to orange
      </Button>
      <Button outline gradientDuoTone="tealToLime">
        Teal to lime
      </Button>
      <Button outline gradientDuoTone="redToYellow">
        Red to yellow
      </Button>
    </div>
  );
}

function ButtonGroupExample(): JSX.Element {
  return (
    <Button.Group>
      <Button color="gray">
        <HiUserCircle className="mr-3 h-4 w-4" /> Profile
      </Button>
      <Button color="gray">
        <HiAdjustments className="mr-3 h-4 w-4" /> Settings
      </Button>
      <Button color="gray">
        <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
      </Button>
    </Button.Group>
  );
}

function CardExample(): JSX.Element {
  return (
    <div className="flex-auto mx-8">
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="data:image/jpeg;base64,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"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Fletcher Moss
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Button>Chat</Button>
      </Card>
    </div>
  );
}

function CarouselExample(): JSX.Element {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        />
      </Carousel>
    </div>
  );
}

function DropdownExample(): JSX.Element {
  return (
    <Dropdown label="Dropdown button">
      <Dropdown.Header>
        <span className="block text-sm">Bonnie success</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

function FormsExample(): JSX.Element {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}

function FooterExample(): JSX.Element {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

function ListGroupExample(): JSX.Element {
  return (
    <div className="w-48">
      <ListGroup>
        <ListGroup.Item active icon={HiUserCircle}>
          Profile
        </ListGroup.Item>
        <ListGroup.Item icon={HiOutlineAdjustments}>Settings</ListGroup.Item>
        <ListGroup.Item icon={HiInbox}>Messages</ListGroup.Item>
        <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

function ModalExample(): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Toggle modal</Button>
      <Modal show={isOpen} onClose={() => setOpen(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpen(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpen(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function NavbarsExample(): JSX.Element {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite.com/">
        <Image
          alt="Flowbite logo"
          height="32"
          src="https://flowbite.com/docs/images/logo.svg"
          width="32"
        />
        <span className="self-center whitespace-nowrap pl-3 text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

function PaginationExample(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex items-center justify-center text-center">
      <Pagination
        currentPage={currentPage}
        layout="table"
        onPageChange={(page: number) => setCurrentPage(page)}
        showIcons
        totalPages={1000}
      />
    </div>
  );
}

function ProgressExample(): JSX.Element {
  return (
    <Progress
      progress={45}
      label="Flowbite"
      labelPosition="outside"
      labelProgress
    />
  );
}

function RatingExample(): JSX.Element {
  return (
    <div className="flex flex-col justify-center gap-4">
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          4.95 out of 5
        </p>
      </Rating>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        1,745 global ratings
      </p>
      <Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
      <Rating.Advanced percentFilled={17}>4 star</Rating.Advanced>
      <Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
      <Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
      <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
    </div>
  );
}

function SidebarExample(): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  return (
    <>
      <Button color="warning" onClick={toggle}>
        Toggle sidebar
      </Button>
      <div className="my-6 h-96">
        <FlowbiteSidebar aria-label="Example sidebar" collapsed={isOpen}>
          <FlowbiteSidebar.Items>
            <FlowbiteSidebar.ItemGroup>
              <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item
                href="#"
                icon={HiViewBoards}
                label="Pro"
                labelColor="gray"
              >
                Kanban
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={HiInbox} label="3">
                Inbox
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={HiUser}>
                Users
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={HiTable}>
                Sign Up
              </FlowbiteSidebar.Item>
            </FlowbiteSidebar.ItemGroup>
          </FlowbiteSidebar.Items>
        </FlowbiteSidebar>
      </div>
    </>
  );
}

function SpinnersExample(): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Spinner color="info" aria-label="info spinner example" />
      <Spinner color="success" aria-label="success spinner example" />
      <Spinner color="failure" aria-label="failure spinner example" />
      <Spinner color="warning" aria-label="Yellow spinner example" />
      <Spinner color="pink" aria-label="Pink spinner example" />
      <Spinner color="purple" aria-label="Purple spinner example" />
    </div>
  );
}

function TablesExample(): JSX.Element {
  return (
    <Table striped>
      <Table.Head>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Color</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple MacBook Pro 17&quot;
          </Table.Cell>
          <Table.Cell>Sliver</Table.Cell>
          <Table.Cell>Laptop</Table.Cell>
          <Table.Cell>$2999</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Microsoft Surface Pro
          </Table.Cell>
          <Table.Cell>White</Table.Cell>
          <Table.Cell>Laptop PC</Table.Cell>
          <Table.Cell>$1999</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Magic Mouse 2
          </Table.Cell>
          <Table.Cell>Black</Table.Cell>
          <Table.Cell>Accessories</Table.Cell>
          <Table.Cell>$99</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Google Pixel Phone
          </Table.Cell>
          <Table.Cell>Gray</Table.Cell>
          <Table.Cell>Phone</Table.Cell>
          <Table.Cell>$799</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Apple Watch 5
          </Table.Cell>
          <Table.Cell>failure</Table.Cell>
          <Table.Cell>Wearables</Table.Cell>
          <Table.Cell>$999</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

function TabsExample(): JSX.Element {
  return (
    <Tabs.Group aria-label="Tabs with icons" style="underline">
      <Tabs.Item title="Profile" icon={HiUserCircle}>
        Profile content
      </Tabs.Item>
      <Tabs.Item active title="Dashboard" icon={HiDatabase}>
        Dashboard content
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={HiAdjustments}>
        Settings content
      </Tabs.Item>
      <Tabs.Item title="Contacts" icon={HiClipboardList}>
        Contacts content
      </Tabs.Item>
      <Tabs.Item disabled title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs.Group>
  );
}

function TimelineExample(): JSX.Element {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </Timeline.Body>
          <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>March 2022</Timeline.Time>
          <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>April 2022</Timeline.Time>
          <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}

function ToastExample(): JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
        <Toast.Toggle />
      </Toast>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
        <Toast.Toggle />
      </Toast>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <HiExclamation className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          Improve password difficulty.
        </div>
        <Toast.Toggle />
      </Toast>
    </div>
  );
}

function TooltipsExample(): JSX.Element {
  return (
    <div className="flex gap-2">
      <Tooltip content="Tooltip content" placement="top">
        <Button>Tooltip top</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="right">
        <Button>Tooltip right</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="bottom">
        <Button>Tooltip bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="left">
        <Button>Tooltip left</Button>
      </Tooltip>
    </div>
  );
}
