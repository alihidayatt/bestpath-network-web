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
    title: "PROJECTS",
    children: [
      { id: 1, title: "TRAINING & EDUCATION", route: "/training" },
      { id: 2, title: "E-BOOK", route: "/ebook" },
    ],
  },
  {
    id: 2,
    title: "PARTNERS",
    children: [
      { id: 1, title: "BUSINESS PARTNERS", route: "/business-partners" },
      { id: 2, title: "COOPERATING VENDORS", route: "/cooperating-vendors" },
      { id: 3, title: "OUR CLIENTS", route: "/clients" },
    ],
  },
  {
    id: 3,
    title: "COMPANY",
    children: [{ id: 1, title: "OUR TEAM", route: "/teams" }],
  },
  {
    id: 4,
    title: "CONTACT US",
    children: [{ id: 1, title: "LOCATION", route: "#contact-us" }],
  },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="flex justify-between items-center w-full h-20 px-4 text-bluegreen bg-white fixed top-0 shadow-custom1 z-50"
    >
      <div className="container mx-auto flex justify-between items-center w-full">
        <Logo />
        <ul className="hidden md:flex">
          {menuItems.map((menu) => (
            <Menu
              key={menu.id}
              as="div"
              className="relative inline-block text-left"
            >
              <div>
                <Menu.Button className="inline-flex justify-center gap-x-3 rounded-md bg-white px-3 py-2 text-lg font-semibold text-bluegreen hover:bg-gray-50">
                  {menu.title}
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
                <Menu.Items className="absolute left-0 z-40 mt-2 w-56 origin-top-right rounded-md bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {menu.children.map((child) => (
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
          className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} fill="#00667D" />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b bg-white text-bluegreen font-medium z-40">
            {menuItems.map((menu) => (
              <Menu
                key={menu.id}
                as="div"
                className="relative inline-block text-center"
              >
                <div className="my-3">
                  <Menu.Button className="inline-flex justify-center gap-x-3 rounded-md bg-white px-3 py-2 text-lg font-semibold text-bluegreen hover:bg-gray-50">
                    {menu.title}
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
                  <Menu.Items className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 origin-top rounded-md bg-white px-1 py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {menu.children.map((child) => (
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
