"use client";
import { useState } from "react";
import Navbar from "../../navigation/navbar/page";
import Sidebar from "../../navigation/sidebar/page";

const Navigation_old = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
    </>
  );
};

export default Navigation_old;