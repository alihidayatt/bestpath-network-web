import React from "react";
import Link from "next/link";
import See_all_button_disabled from "../components/button/See_all_button_disabled";
import {
  DanuCircleImg,
  AldiCircleImg,
  DamarCircleImg,
  AnggaCircleImg,
} from "../components/Bpn_imgs";

export default function Teams() {
  return (
    <>
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-items-center justify-center justify-self-center mb-5 ">
          <div className="text-2xl text-bluegreen font-semibold self-center">
            OUR TEAM
          </div>
        </div>
        <div className="w-full h-full bg-white shadow-lg p-3 rounded-lg">
          <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-wrap justify-center h-full gap-x-5 gap-y-5 w-full px-2 py-2">
            {/* Card Start */}
            <div className="flex w-full max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-white dark:border-gray-400 shadow-lg">
              <div className="flex flex-col items-center pb-10">
                <div className="xl:w-48 lg:w-48 md:w-48 sm:w-48 xs:w-36 h-auto mb-3 rounded-full shadow-lg mt-5">
                  <DanuCircleImg />
                </div>
                <h5 className="mb-1 text-xl xs:text-lg font-semibold text-gray-900 dark:text-bluegreen">
                  Danu Wiyoto, S.Kom
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 p-2 m-5 text-center">
                  CCNA, CCNP EI, CCDP, CCNP SP, CCIE EI #48413, H3CNE, H3CSE,
                  ACSA, ACSP, MTCNA
                </span>
                <div className="flex mt-4 md:mt-6">
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-regular text-white mr-2 mb-2">
                      Network Consultant
                    </span>
                    <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-regular text-white mr-2 mb-2">
                      Trainer
                    </span>
                    <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-regular text-white mr-2 mb-2">
                      Network Engineer
                    </span>
                    <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-regular text-white mr-2 mb-2">
                      Network Planning & Design
                    </span>
                  </div>
                </div>
                {/* <div className="flex mt-4 md:mt-6">
                  <Link
                    href="#"
                    className="py-2 px-20 ms-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-bluegreen dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Profile
                  </Link>
                </div> */}
              </div>
            </div>
            {/* Card End */}
            {/* Card Start */}
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-white dark:border-gray-400 shadow-lg">
              <div className="flex flex-col items-center pb-10">
                <div className="xl:w-48 lg:w-48 md:w-48 sm:w-48 xs:w-36 h-auto mb-3 rounded-full shadow-lg mt-5">
                  <AldiCircleImg />
                </div>
                <h5 className="mb-1 text-xl xs:text-lg font-semibold text-gray-900 dark:text-bluegreen">
                  Aldi Arya Putra Pebriana
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 p-2 m-5 text-center">
                  CCNA, CCNP - EI, MTCNA, MTCRE, RCNA RS, RSE - Reyee
                </span>
                <div className="flex mt-4 md:mt-6">
                  <div className="px-6 pt-4 pb-2"><span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-regular text-white mr-2 mb-2">
                      Network Engineer
                    </span>
                    <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-regular text-white mr-2 mb-2">
                      Trainer
                    </span>
                    <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-regular text-white mr-2 mb-2">
                      Project Manager
                    </span>
                  </div>
                </div>
                {/* <div className="flex mt-4 md:mt-6">
                  <Link
                    href="#"
                    className="py-2 px-20 ms-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-bluegreen dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Profile
                  </Link>
                </div> */}
              </div>
            </div>
            {/* Card End */}
            {/* Card Start */}
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-white dark:border-gray-400 shadow-lg">
              <div className="flex flex-col items-center pb-10">
                <div className="xl:w-48 lg:w-48 md:w-48 sm:w-48 xs:w-36 h-auto mb-3 rounded-full shadow-lg mt-5">
                  <DamarCircleImg />
                </div>
                <h5 className="mb-1 text-xl xs:text-lg font-semibold text-gray-900 dark:text-bluegreen">
                  Damar Galih Kalicki
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 p-2 m-5 text-center">
                  CCNA, CCENT, CCNP - EI, MTCNA, MTCRE, NSE 1, NSE 2
                </span>
                <div className="flex mt-4 md:mt-6">
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-regular text-white mr-2 mb-2">
                      Trainer
                    </span>
                    <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-regular text-white mr-2 mb-2">
                      Network Engineer
                    </span>
                  </div>
                </div>
                {/* <div className="flex mt-4 md:mt-6">
                  <Link
                    href="#"
                    className="py-2 px-20 ms-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-bluegreen dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Profile
                  </Link>
                </div> */}
              </div>
            </div>
            {/* Card End */}
            {/* Card Start */}
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-white dark:border-gray-400 shadow-lg">
              <div className="flex flex-col items-center pb-10">
                <div className="xl:w-48 lg:w-48 md:w-48 sm:w-48 xs:w-36 h-auto mb-3 rounded-full shadow-lg mt-5">
                  <AnggaCircleImg />
                </div>
                <h5 className="mb-1 text-xl xs:text-lg font-semibold text-gray-900 dark:text-bluegreen">
                  Angga Daffa Prasetya
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 p-2 m-5 text-center">
                  CCNA, CCOA, CCNP - EI, NSE7-SDWAN, FCA, FCF
                </span>
                <div className="flex mt-4 md:mt-6">
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-regular text-white mr-2 mb-2">
                      Trainer
                    </span>
                    <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-regular text-white mr-2 mb-2">
                      IT Security Engineer
                    </span>
                  </div>
                </div>
                {/* <div className="flex mt-4 md:mt-6">
                  <Link
                    href="#"
                    className="py-2 px-20 ms-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-bluegreen dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Profile
                  </Link>
                </div> */}
              </div>
            </div>
            {/* Card End */}
          </div>
        </div>
        {/* BLOGS */}
        {/* <div className="w-full h-full bg-white shadow-lg p-3 mt-5">
          <div className="flex justify-items-center justify-center justify-self-center mb-5">
            <div className="flex justify-items-center justify-center justify-self-center">
              <h1 className="text-2xl font-medium italic text-bluegreen">
                BLOGS
              </h1>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-col gap-x-3 gap-y-3 mt-5 justify-items-center justify-center justify-self-center">
            <div className="max-w-[300px] bg-white border rounded-lg dark:bg-white border-bluegreen border-opacity-25 hover:border-opacity-75 hover:shadow-inner shadow-custom1">
              <div className="max-w-auto h-auto bg-slate-200 justify-items-center justify-center justify-self-center">
                <Link href={"#"}>
                  <News_1_img />
                </Link>
              </div>

              <div className="p-5">
                <Link href={"#"}>
                  <p className="text-gray-700 dark:text-gray-400 mb-3">
                    Moses Huwae - Jan 2 2024
                  </p>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-700">
                    The Arival of Open AI Networking
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Recently I attended The 50th golden anniversary of Ethernet at
                  the Computer History Museum. It was a reminder of how
                  familiar...
                </p>
                <Link
                  href={"#"}
                  className="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-bluegreen hover:text-white bg-white rounded-lg hover:bg-bluegreen focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-bluegreen dark:focus:ring-blue-800 border-2 border-bluegreen hover:border:blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="max-w-[300px] bg-white border rounded-lg dark:bg-white border-bluegreen border-opacity-25 hover:border-opacity-75 hover:shadow-inner shadow-custom1">
              <div className="max-w-auto h-auto bg-slate-200 justify-items-center justify-center justify-self-center">
                <Link href={"#"}>
                  <News_2_img />
                </Link>
              </div>

              <div className="p-5">
                <Link href={"#"}>
                  <p className="text-gray-700 dark:text-gray-400 mb-3">
                    Moses Huwae - Des 31 2023
                  </p>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-700">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Back in the earlt 2000s, store and forward networking was
                  userd by both market data providers, exchange...
                </p>
                <Link
                  href={"#"}
                  className="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-bluegreen hover:text-white bg-white rounded-lg hover:bg-bluegreen focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-bluegreen dark:focus:ring-blue-800 border-2 border-bluegreen hover:border:blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="max-w-[300px] bg-white border rounded-lg dark:bg-white border-bluegreen border-opacity-25 hover:border-opacity-75 hover:shadow-inner shadow-custom1">
              <div className="max-w-auto h-auto bg-slate-200 justify-items-center justify-center justify-self-center">
                <Link href={"#"}>
                  <News_3_img />
                </Link>
              </div>

              <div className="p-5">
                <Link href={"#"}>
                  <p className="text-gray-700 dark:text-gray-400 mb-3">
                    Moses Huwae - Des 13 2023
                  </p>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-700">
                    Accelerate AWS Access with ARISTA
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  AWS Cloud WAN Tunnel-less Connect and Arusta CloudEOS
                  integrate to accelerate cloud onramp
                </p>
                <Link
                  href={"#"}
                  className="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-bluegreen hover:text-white bg-white rounded-lg hover:bg-bluegreen focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-bluegreen dark:focus:ring-blue-800 border-2 border-bluegreen hover:border:blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-items-center justify-center justify-self-center mt-10 mb-5">
            <See_all_button />
          </div>
        </div> */}
      </div>
    </>
  );
}
