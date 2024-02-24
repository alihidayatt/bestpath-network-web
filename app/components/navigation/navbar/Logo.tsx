"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo_forweb from "../../icon-component/logo_bpn";
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
    <Link href="/">
      <Logo_forweb
        widthLogo={width < 1024 ? "130" : "160"}
        heightLogo={width < 1024 ? "35" : "64"}
      />
    </Link>
  );
};

export default Logo;
