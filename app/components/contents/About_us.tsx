import React from "react";
import Danu_img from "../icon-component/danu_img";
import Danu_au_img from "../icon-component/danu_circle_img";

export default function About_us() {
  return (
    <>
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-items-center justify-center justify-self-center mb-5">
          <div className="text-2xl text-bluegreen font-semibold self-center">
            ABOUT US
          </div>
        </div>
        <div className="flex flex-col w-full h-full bg-white shadow-lg p-3 rounded-lg">
          <div className="flex justify-items-center justify-center justify-self-center lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse h-auto">
            <div className="lg:w-3/4 md:w-3/5 sm:w-full xs:w-full lg:-p-10 md:p-10 sm:p-10 xs:p-2 ">
              <blockquote className=" italic text-slate-600 dark:text-slate-600 lg:px-10 md:px-10 sm:px-5 xs:px-3 ">
                <svg
                  className="lg:w-10 md:w-10 sm:w-7 xs:w-7 lg:h-10 md:h-10 sm:h-7 xs:h-7 text-gray-400 dark:text-gray-600 mb-4 fill-bluegreen "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>

                <p className="lg:text-right md:text-right sm:text-center xs:text-center font-semibold lg:text-xl md:text-lg sm:text-lg">
                  Our company is full of experienced, Energetic and young
                  technical person and we have taken part of many government
                  institutions and private companies that provide services from{" "}
                  <span className="text-bluegreen font-semibold">
                    {" "}
                    PLANNING, IMPLEMENTATION and MAINTENANCE
                  </span>
                  . What's unique about us is being{" "}
                  <span className="text-bluegreen font-semibold">
                    ABLE TO WORK WITH A TIGHT SCHEDULE
                  </span>
                  .
                </p>
                <p className="lg:text-right md:text-right sm:text-center xs:text-center mt-4 lg:text-2xl md:text-2xl sm:text-xl xs:text-xl font-light text-bluegreen ">
                  "WORKING WITH PASSION"
                </p>
              </blockquote>
            </div>
            <div className="flex flex-col lg:w-1/4 md:w-2/5 sm:w-full xs:full p-2 justify-items-center justify-center justify-self-center ml-2">
              <div className="flex flex-col justify-items-center justify-center justify-self-center mb-2">
                <div className="text-lg text-white font-medium self-center rounded-[50%] bg-white p-3 shadow-custom1 lg:max-w-full lg:max-h-full md:max-w-full md:max-h-full sm:max-w-[300px] sm:max-h-[300px] xs:max-w-[200px] xs:max-h-[200px]">
                  <Danu_au_img />
                </div>
                <div className="flex flex-col justify-items-center justify-center justify-self-center my-3">
                  <div className="flex text-bluegreen font-semibold text-lg justify-items-center justify-center justify-self-center lg:text-center md:text-center sm:text-center xs:text-center">
                    <p>Muhammad Danu Wiyoto S.Kom</p>
                  </div>
                  <div className="flex text-bluegreen font-light text-lg justify-items-center justify-center justify-self-center">
                    <p>CCIE EI#48413</p>
                  </div>
                  <div className="flex text-center justify-items-center justify-center justify-self-center bg-bluegreen rounded-full px-2 py-2 lg:text-base md:text-base sm:text-base xs:text-base italic font-normal text-white lg:mx-4 md:mx-0 sm:mx-[100px] xs:mx-3 my-[15px]">
                    CEO at BEST-PATH NETWORK
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
