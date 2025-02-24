import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/page";
import Carousel from "./components/carousel/page";
import Breadcrumb from "./components/navigation/breadcrumb/breadcrumb";
import Navbar from "./components/navigation/navbar/page";

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
          <Navbar />
          {/* <Header /> */}
          <Carousel />
          <Breadcrumb
            homeElement={"Home"}
            separator={<span className="text-gray-400 font-semibold">|</span>}
            activeClasses="text-sm font-semibold text-bluegreen hover:text-blue-600 hover:underline dark:text-bluegreen dark:hover:text-bluegreen"
            containerClasses="flex container mx-auto px-4 py-2"
            listClasses="text-sm font-semibold text-bluegreen hover:text-blue-600 hover:underline dark:text-bluegreen dark:hover:text-bluegreen"
            capitalizeLinks
          />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
