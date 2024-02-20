"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
// import Button from "./Button";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <>
      <Link href="/">
        <Image
          src="/logo-forweb.svg"
          alt="Logo"
          width={width < 1024 ? "130" : "160"}
          height={width < 1024 ? "35" : "64"}
          className="relative"
        />
      </Link>
    </>
  );
};

export default Logo;
