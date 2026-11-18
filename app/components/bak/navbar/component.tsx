import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar_old = ({/*{ toggle }: { toggle: () => void }*/}) => {
  // const router = useRouter;

  // const navLink = [
  //   {
  //     name: "services",
  //     link: "#servicesId",
  //   },
  //   {
  //     name: "partners",
  //     link: "#partnersId",
  //   },
  //   {
  //     name: "company",
  //     link: "#companyId",
  //   },
  //   {
  //     name: "contactus",
  //     link: "#contactusId",
  //   },
  // ];
  return (
    <>
      {/* <div className="lg:w-full md:w-full sm:w-full xs:w-full h-20 lg:bg-white md:bg-white sm:bg-white xs:bg-white lg:sticky md:sticky sm:block xs:block top-0 shadow-md">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden bg-bluegreen"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-10 text-bluegreen font-semibold text-lg">
              <li>
                <Link href="#servicesId">
                  <p>SERVICES</p>
                </Link>
              </li>
              <li>
                <Link href="#partnersId">
                  <p>PARTNERS</p>
                </Link>
              </li>
              <li>
                <Link href="#companyId">
                  <p>COMPANY</p>
                </Link>
              </li>
              <li>
                <Link href="#contactusId">
                  <p>CONTACT US</p>
                </Link>
              </li>
            </ul>
            <div className="hidden md:block">
            <Button />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar_old;
