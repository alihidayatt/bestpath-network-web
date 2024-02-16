import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation/page";
import Topnav from "./components/topnav/topnav";
import Footer from "./components/footer/page";
import Carousel from "./components/carousel/page";

export const metadata: Metadata = {
  title: "Best-Path Network",
  description: "Data Center, Network Security, Training and Consultant",
};

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noto_sans.className}>
      <head></head>
      <body>
        <>
          <Topnav />
          <Navigation />
          <Carousel />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
