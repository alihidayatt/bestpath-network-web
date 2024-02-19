import React from "react";
import Danu_img from "../icon-component/danu_img";
import Moses_img from "../icon-component/moses_img";
import Erick_img from "../icon-component/erick_img";
import Damar_img from "../icon-component/damar_img";
import Tri_img from "../icon-component/tri_img";
import See_all_button from "../button/See_all_button";
import News_1_img from "../icon-component/news_1_img";
import News_2_img from "../icon-component/news_2_img";
import News_3_img from "../icon-component/news_3_img";
import Danu_au_img from "../icon-component/danu_au_img";

export default function Our_company() {
  return (
    <>
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-items-center justify-center justify-self-center mb-5">
          <div className="text-2xl text-bluegreen font-semibold self-center">
            OUR COMPANY
          </div>
        </div>
        <div className="w-full h-full bg-white shadow-lg p-3 ">
          <div className="flex justify-items-center justify-center justify-self-center mb-5">
            <div className="flex justify-items-center justify-center justify-self-center">
              <h1 className="text-2xl font-medium italic text-bluegreen">
                OUR TEAM
              </h1>
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:gap-x-4 md:gap-x-2 lg:gap-y-4 md:gap-y-4">
            <div className="lg:w-1/3 md:w-1/3 sm:w-full h-[600px] sm:mb-10 xs:mb-10">
              <div className="flex flex-col sm:w-full rounded-xl overflow-hidden shadow-custom1 justify-items-center justify-center justify-self-center">
                <div className="flex justify-items-center justify-center justify-self-center">
                  <Danu_img />
                </div>
                <div className="px-6 py-5">
                  <div className="font-bold text-2xl mb-2">
                    Danu Wiyoto, S.Kom
                  </div>
                  <p className=" text-md font-medium text-bluegreen">
                    CCNA, CCNP EI, CCDP, CCNP SP, CCIE EI #48413, H3CNE, H3CSE,
                    ACSA, ACSP, MTCNA,
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-medium text-white mr-2 mb-2">
                    Network Consultant
                  </span>
                  <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-medium text-white mr-2 mb-2">
                    Trainer
                  </span>
                  <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-medium text-white mr-2 mb-2">
                    Network Engineer
                  </span>
                  <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-medium text-white mr-2 mb-2">
                    Network Planning & Design
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/3 sm:w-full h-[600px] sm:mb-7">
              <div className="flex flex-col sm:w-full rounded-xl overflow-hidden shadow-custom1 justify-items-center justify-center justify-self-center">
                <div className="flex justify-items-center justify-center justify-self-center">
                  <Moses_img />
                </div>
                <div className="px-6 py-5">
                  <div className="font-bold text-2xl mb-2">Moses Huwae</div>
                  <p className=" text-md font-medium text-bluegreen">
                    Managing Director – Enterprise Products Intregration Pte
                    Computer Tutor, Computer Instructor, System Support Analyst
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-medium text-white mr-2 mb-2">
                    IT Supervisor
                  </span>
                  <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-medium text-white mr-2 mb-2">
                    Sales & Marketing Manager
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/3 sm:w-full h-auto sm:mb-5 xs:mb-5">
              <div className="flex flex-col sm:w-full rounded-xl overflow-hidden shadow-custom1 justify-items-center justify-center justify-self-center">
                <div className="flex justify-items-center justify-center justify-self-center">
                  <Erick_img />
                </div>
                <div className="px-6 py-5">
                  <div className="font-bold text-2xl mb-2">Erick Yudho K</div>
                  <p className=" text-md font-medium text-bluegreen">
                    Head Operasional Data Center CDCS, CDFOM
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2"></div>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:gap-x-4 md:gap-x-2 lg:gap-y-4 md:gap-y-4 lg:mt-10 md:mt-[70px]">
            <div className="lg:w-1/3 md:w-1/3 sm:w-full h-auto sm:mb-5 xs:mb-5">
              <div className="flex flex-col sm:w-full rounded-xl overflow-hidden shadow-custom1 justify-items-center justify-center justify-self-center">
                <div className="flex justify-items-center justify-center justify-self-center">
                  <Damar_img />
                </div>
                <div className="px-6 py-5">
                  <div className="font-bold text-2xl mb-2">
                    Damar Galih Kalicki
                  </div>
                  <p className=" text-md font-medium text-bluegreen">
                    CCNA, CCENT, CCNP - EI, MTCNA, MTCRE, NSE 1, NSE 2
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-medium text-white mr-2 mb-2">
                    Trainer
                  </span>
                  <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-medium text-white mr-2 mb-2">
                    Network Engineer
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/3 sm:w-full h-auto sm:mb-5">
              <div className="flex flex-col sm:w-full rounded-xl overflow-hidden shadow-custom1 justify-items-center justify-center justify-self-center">
                <div className="flex justify-items-center justify-center justify-self-center">
                  <Tri_img />
                </div>
                <div className="px-6 py-5">
                  <div className="font-bold text-2xl mb-2">
                    Tri Cahyo Pranomo
                  </div>
                  <p className=" text-md font-medium text-bluegreen">
                    QC & Cable Design Engineer, Presales
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-items-center justify-center justify-self-center mt-10 mb-5">
            <See_all_button />
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
                <a href="#">
                  <News_1_img />
                </a>
              </div>

              <div className="p-5">
                <a href="#">
                  <p className="text-gray-700 dark:text-gray-400 mb-3">
                    Moses Huwae - Jan 2 2024
                  </p>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-700">
                    The Arival of Open AI Networking
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Recently I attended The 50th golden anniversary of Ethernet at
                  the Computer History Museum. It was a reminder of how
                  familiar...
                </p>
                <a
                  href="#"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="max-w-[300px] bg-white border rounded-lg dark:bg-white border-bluegreen border-opacity-25 hover:border-opacity-75 hover:shadow-inner shadow-custom1">
              <div className="max-w-auto h-auto bg-slate-200 justify-items-center justify-center justify-self-center">
                <a href="#">
                  <News_2_img />
                </a>
              </div>

              <div className="p-5">
                <a href="#">
                  <p className="text-gray-700 dark:text-gray-400 mb-3">
                    Moses Huwae - Des 31 2023
                  </p>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-700">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Back in the earlt 2000s, store and forward networking was
                  userd by both market data providers, exchange...
                </p>
                <a
                  href="#"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="max-w-[300px] bg-white border rounded-lg dark:bg-white border-bluegreen border-opacity-25 hover:border-opacity-75 hover:shadow-inner shadow-custom1">
              <div className="max-w-auto h-auto bg-slate-200 justify-items-center justify-center justify-self-center">
                <a href="#">
                  <News_3_img />
                </a>
              </div>

              <div className="p-5">
                <a href="#">
                  <p className="text-gray-700 dark:text-gray-400 mb-3">
                    Moses Huwae - Des 13 2023
                  </p>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-700">
                    Accelerate AWS Access with ARISTA
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  AWS Cloud WAN Tunnel-less Connect and Arusta CloudEOS
                  integrate to accelerate cloud onramp
                </p>
                <a
                  href="#"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
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
