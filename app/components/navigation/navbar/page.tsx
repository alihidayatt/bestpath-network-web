"use client";
import Link from "next/link";
import React, { useState, Fragment } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import Logo from "./Logo";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const menuItems = [
  {
    id: 1,
    title: "PARTNERS",
    children: [
      {
        id: 1,
        title: "TRAINING & EDUCATION",
        route: "/training",
      },
      {
        id: 2,
        title: "CONSULTATION",
        route: "#",
      },
      {
        id: 3,
        title: "PROJECTS",
        route: "#",
      },
    ],
  },
  {
    id: 2,
    title: "COMPANY",
    children: [
      {
        id: 1,
        title: "BUSINESS PARTNERS",
        route: "#",
      },
      {
        id: 2,
        title: "COOPERATING VENDORS",
        route: "#",
      },
      {
        id: 3,
        title: "OUR CLIENTS",
        route: "/clients",
      },
    ],
  },
  {
    id: 3,
    title: "CONTACT US",
    children: [
      {
        id: 1,
        title: "OUR TEAM",
        route: "#",
      },
      {
        id: 2,
        title: "BLOGS",
        route: "#",
      },
    ],
  },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      // Assuming 768px is your md breakpoint
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-bluegreen bg-white fixed nav shadow-custom1 top-0">
      <div className="flex container mx-auto px-4 py-2 justify-between items-center w-full">
        <div>
          <Logo />
        </div>
        <ul className="hidden md:flex">
          {menuItems.map((menuItems) => (
            <Menu
              key={menuItems.id}
              as="div"
              className="relative inline-block text-left"
            >
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-3 rounded-md bg-white px-3 py-2 text-lg font-semibold text-bluegreen hover:bg-gray-50">
                  {menuItems.title}
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {menuItems.children.map((child) => (
                    <Menu.Item key={child.id}>
                      {({ active }) => (
                        <Link
                          href={child.route}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-bluegreen font-semibold"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {child.title}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} fill="#00667D" />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b bg-white text-bluegreen font-medium hover:font-semibold">
            {menuItems.map((menuItems) => (
              <Menu
                key={menuItems.id}
                as="div"
                className="relative inline-block text-center"
              >
                <div className="my-3">
                  <Menu.Button className="inline-flex w-full justify-center gap-x-3 rounded-md bg-white px-3 py-2 text-lg font-semibold text-bluegreen hover:bg-gray-50">
                    {menuItems.title}
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute ml-[-45px] top-12 z-10 mt-2 w-56 origin-top-right rounded-md bg-white px-1 py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {menuItems.children.map((child) => (
                      <Menu.Item key={child.id}>
                        {({ active }) => (
                          <Link
                            href={child.route}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-bluegreen font-semibold"
                                : "text-gray-700",
                              "block px-4 py-4 text-sm"
                            )}
                            onClick={() => setNav(!nav)}
                          >
                            {child.title}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
