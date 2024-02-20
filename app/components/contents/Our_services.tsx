import React from "react";
import Danu_img from "../icon-component/danu_img";

export default function Our_services() {
  return (
    <>
      <div className="container mx-auto px-6 py-6">
        {/* PROJECTS */}
        <div className="w-full h-full bg-white shadow-lg p-3 ">
          <div className="flex justify-items-center justify-center justify-self-center mb-5">
            <div className="flex justify-items-center justify-center justify-self-center">
              <h1 className="text-2xl font-medium italic text-bluegreen">
                Training
              </h1>
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:gap-x-4 md:gap-x-2 lg:gap-y-4 md:gap-y-4">
          <div className="lg:w-1/3 md:w-1/3 sm:w-full h-[600px] sm:mb-5 xs:mb-10">
            <div className="flex flex-col sm:w-60 h-auto rounded-xl overflow-hidden border-4 border-black justify-items-center justify-center justify-self-center">
                <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto">
                  <Danu_img />
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/3 sm:w-full h-[600px] sm:mb-5 xs:mb-10">
            <div className="flex flex-col sm:w-60 h-auto rounded-xl overflow-hidden border-4 border-black justify-items-center justify-center justify-self-center">
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
                <div className="px-5 pt-4 pb-2">
                  <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-medium text-white mr-2 mb-2">
                    Network Consultant
                  </span>
                </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/3 sm:w-full h-[600px] sm:mb-5 xs:mb-10">
            <div className="flex flex-col sm:w-60 rounded-xl overflow-hidden border-4 border-black justify-items-center justify-center justify-self-center">
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
                <div className="px-5 pt-4 pb-2">
                  <span className="inline-block bg-bluegreen rounded-full px-3 py-1 text-sm font-medium text-white mr-2 mb-2">
                    Network Consultant
                  </span>
                </div>
            </div>
            
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
