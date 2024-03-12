import React from "react";
import {
  Cisco_ico,
  Mikrotik_ico,
  Ruijie_ico,
  Fortinet_ico,
  Juniper_ico,
  H3c_ico,
  Huawei_ico,
} from "../components/Bpn_imgs";

export default function Cooperating_vendors() {
  return (
    <div className="container mx-auto px-6 py-6">
      <div className="w-full h-full bg-white shadow-lg p-3 ">
        <div className="flex justify-items-center justify-center justify-self-center">
          <h1 className="text-xl font-medium italic text-bluegreen">
            COOPERATING VENDORS
          </h1>
        </div>

        <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-wrap mt-3 justify-center gap-x-5 p-5">
          <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/4 md:w-1/4 sm:w-full h-auto">
            <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
              <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[180px] sm:h-auto xs:w-[150px] xs:h-auto">
                <Cisco_ico />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/4 md:w-1/4 sm:w-full h-auto">
            <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
              <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[180px] sm:h-auto xs:w-[150px] xs:h-auto">
                <Mikrotik_ico />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/4 md:w-1/4 sm:w-full h-auto">
            <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
              <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[180px] sm:h-auto xs:w-[150px] xs:h-auto">
                <Ruijie_ico />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/4 md:w-1/4 sm:w-full h-auto">
            <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
              <div className="lg:w-[180px] lg:h-auto md:w-[175px] md:h-auto sm:w-[180px] sm:h-auto xs:w-[150px] xs:h-auto">
                <Fortinet_ico />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/4 md:w-1/4 sm:w-full h-auto">
            <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
              <div className="lg:w-[180px] lg:h-auto md:w-[175px] md:h-auto sm:w-[180px] sm:h-auto xs:w-[150px] xs:h-auto">
                <Juniper_ico />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/4 md:w-1/4 sm:w-full h-auto">
            <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
              <div className="lg:w-[180px] lg:h-auto md:w-[175px] md:h-auto sm:w-[180px] sm:h-auto xs:w-[150px] xs:h-auto">
                <Huawei_ico />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/4 md:w-1/4 sm:w-full h-auto">
            <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
              <div className="lg:w-[180px] lg:h-auto md:w-[175px] md:h-auto sm:w-[180px] sm:h-auto xs:w-[150px] xs:h-auto">
                <H3c_ico />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
