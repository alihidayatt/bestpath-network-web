import React from "react";
import Training_bssn_img from "../components/icon-component/training_bssn";
import Training_cyberops_ntt_img from "../components/icon-component/training_cyberops_ntt";
import Training_hypernet_img from "../components/icon-component/training_hypernet";
import Training_pertamina_img from "../components/icon-component/training_pertamina";
import Training_singapore_mpls_img from "../components/icon-component/training_singapore_mpls";

export default function Training() {
  return (
    <>
      <div className="container mx-auto px-6 py-6 ">
        <div className="w-full h-full shadow-lg p-3">
          <div className="flex text-xl font-semibold text-bluegreen justify-start p-2">
            <h1>TRAINING</h1>
          </div>

          <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-wrap justify-items-center justify-center justify-self-start h-auto lg:gap-x-3 lg:gap-y-3 md:gap-x-3 md:gap-y-3 sm:gap-y-3 xs:gap-y-3 py-3">
            <div className="lg:basis-1/5 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 m-2 rounded-lg">
              <div className="flex w-full h-auto justify-center rounded-lg py-2">
                <Training_bssn_img />
              </div>
              <div className="bg-white w-full h-full flex justify-center p-2 text-lg font-medium text-slate-700">
                Training BSSN
              </div>
            </div>

            <div className="lg:basis-1/5 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 m-2 rounded-lg">
              <div className="flex w-full h-auto justify-center rounded-lg py-2">
                <Training_cyberops_ntt_img />
              </div>
              <div className="bg-white w-full h-full flex justify-center p-2 text-lg font-medium text-slate-700">
                Training Cyberops NTT
              </div>
            </div>

            <div className="lg:basis-1/5 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 m-2 rounded-lg">
              <div className="flex w-full h-auto justify-center rounded-lg py-2">
                <Training_hypernet_img />
              </div>
              <div className="bg-white w-full h-full flex justify-center p-2 text-lg font-medium text-slate-700">
                Training Hypernet
              </div>
            </div>

            <div className="lg:basis-1/5 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 m-2 rounded-lg">
              <div className="flex w-full h-auto justify-center rounded-lg py-2">
                <Training_pertamina_img />
              </div>
              <div className="bg-white w-full h-full flex justify-center p-2 text-lg font-medium text-slate-700">
                Training Pertamina
              </div>
            </div>

            <div className="lg:basis-1/5 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 m-2 rounded-lg">
              <div className="flex w-full h-auto justify-center rounded-lg py-2">
                <Training_singapore_mpls_img />
              </div>
              <div className="bg-white w-full h-full flex justify-center p-2 text-lg font-medium text-slate-700">
                Training Singapore MPLS
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
