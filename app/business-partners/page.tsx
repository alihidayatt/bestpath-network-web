import React from "react";
import { Topas_ico, Fresscom_ico, Epi_ico } from "../components/Bpn_imgs";

export default function Business_partner() {
  return (
    <div className="container mx-auto px-6 py-6">
      <div className="w-full h-full bg-white shadow-lg p-3 rounded-lg">
        <div className="flex justify-items-center justify-center justify-self-center">
          <h1 className="text-2xl sm:text-xl xs:text-xl font-medium italic text-bluegreen">
            BUSINESS PARTNERS
          </h1>
        </div>

        <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col mt-3">
          <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/3 md:w-1/3 sm:w-full h-auto">
            <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
              <div className="lg:w-[150px] lg:h-auto md:w-[150px] md:h-auto sm:w-[150px] sm:h-auto xs:w-[120px] xs:h-auto">
                <Fresscom_ico />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/3 md:w-1/3 sm:w-full h-auto">
            <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
              <div className="lg:w-[150px] lg:h-auto md:w-[125px] md:h-auto sm:w-[130px] sm:h-auto xs:w-[120px] xs:h-auto">
                <Topas_ico />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/3 md:w-1/3 sm:w-full h-auto">
            <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
              <div className="lg:w-[180px] lg:h-auto md:w-[250px] md:h-auto sm:w-[220px] sm:h-auto xs:w-[220px] xs:h-auto">
                <Epi_ico />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
