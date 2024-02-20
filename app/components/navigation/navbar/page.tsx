"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "#partners",
      name: "PARTNERS",
      vis: "visible",
    },
    {
      id: 2,
      link: "#company",
      name: "COMPANY",
      vis: "visible",
    },
    {
      id: 3,
      link: "#contactus",
      name: "CONTACT US",
      vis: "visible",
    },
    // {
    //   id: 4,
    //   link: "#",
    //   name: "LOGIN",
    //   vis: "invisible",
    // },
  ];

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
          {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
          <Link
            href="/"
            className="link-underline link-underline-black"
            target="_blank"
            rel="noreferrer"
          >
            <Logo />
          </Link>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link, name, vis }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize text-bluegreen font-semibold hover:scale-105 text-lg pt-2 hover:font-bold duration-200 link-underline"
            >
              <Link href={link}>{name}</Link>
            </li>
          ))}
          <li className="hidden pl-5">
            <div className="flex justify-items-end justify-end h-full gap-x-10">
              <button className="bg-transparent inline-flex items-center dark:transparent dark:hover:transparent dark:focus:transparent hover:text-bluegreen text-slate-300 border-blue-700 border-2 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-1.5 text-center me-2 mb-2 dark:border-bluegreen dark:text-bluegreen dark:hover:text-white dark:hover:bg-bluegreen dark:focus:ring-slate-300 shadow-md">
                Login
              </button>
            </div>
          </li>
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} fill="#00667D" />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b bg-white text-bluegreen font-medium hover:font-semibold">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-xl"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
