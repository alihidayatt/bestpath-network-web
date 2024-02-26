import React from "react";
import Topas_ico from "../icon-component/topas_ico";
import Fresscom_ico from "../icon-component/fresscom_ico";
import Epi_ico from "../icon-component/epi_ico";
import Cisco_ico from "../icon-component/cisco_ico";
import Mikrotik_ico from "../icon-component/mikrotik_ico";
import Ruijie_ico from "../icon-component/ruijie_ico";
import Fortinet_ico from "../icon-component/fortinet_ico";
import Juniper_ico from "../icon-component/juniper_ico";
import H3c_ico from "../icon-component/h3c_ico";
import Huawei_ico from "../icon-component/huawei_ico";
import Bssn_ico from "../icon-component/bssn_ico";
import Tik_polri_ico from "../icon-component/tik_polri_ico";
import Polri_ico from "../icon-component/polri_ico";
import Kominfo_ico from "../icon-component/kominfo_ico";
import Kemenpora_ico from "../icon-component/kemenpora_ico";
import Pertamina_ico from "../icon-component/pertamina_ico";
import Telkom_ico from "../icon-component/telkom_ico";
import Pln_ico from "../icon-component/pln_ico";
import Link from "next/link";
import See_all_button from "../button/See_all_button";

export default function Our_partners() {
  return (
    <>
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

      <div className="container mx-auto px-6 py-6">
        <div className="w-full h-full bg-white shadow-lg p-3 rounded-lg divide-y">
          {/* divide */}
          <div className="pb-4">
            <div className="flex justify-items-center justify-center justify-self-center pb-4">
              <h1 className="text-2xl sm:text-xl xs:text-xl font-medium italic text-bluegreen">
                OUR CLIENTS
              </h1>
            </div>
            <div className="flex justify-items-start justify-start justify-self-start xs:justify-center mx-5 my-8 font-medium p-5">
              <h1 className="text-xl text-bluegreen">GOVERNMENT</h1>
            </div>

            <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-wrap mt-3 gap-x-10 gap-y-7 justify-center">
              <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/3  sm:w-full xs:full h-auto">
                <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                  <div className="lg:w-[150px] lg:h-auto md:w-[150px] md:h-auto sm:w-[150px] sm:h-auto xs:w-[120px] xs:h-auto">
                    <Bssn_ico />
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/5 sm:w-full xs:full h-auto">
                <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                  <div className="lg:w-[150px] lg:h-auto md:w-[150px] md:h-auto sm:w-[150px] sm:h-auto xs:w-[120px] xs:h-auto">
                    <Tik_polri_ico />
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/5 sm:w-full xs:full h-auto">
                <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                  <div className="lg:w-[150px] lg:h-auto md:w-[150px] md:h-auto sm:w-[150px] sm:h-auto xs:w-[120px] xs:h-auto">
                    <Polri_ico />
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/5 sm:w-full xs:full h-auto">
                <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                  <div className="lg:w-[150px] lg:h-auto md:w-[150px] md:h-auto sm:w-[150px] sm:h-auto xs:w-[120px] xs:h-auto">
                    <Kominfo_ico />
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/5 sm:w-full xs:full h-auto">
                <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                  <div className="lg:w-[150px] lg:h-auto md:w-[150px] md:h-auto sm:w-[150px] sm:h-auto xs:w-[120px] xs:h-auto">
                    <Kemenpora_ico />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* divide */}
          <div className="">
            <div className="flex justify-items-start justify-start justify-self-start xs:justify-center text-center mx-5 my-5 p-5 font-medium">
              <h1 className="text-xl text-bluegreen">STATE OWN ENTERPRISE</h1>
            </div>

          <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col mt-3">
            <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/3 md:w-1/3 sm:w-full h-auto">
              <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto">
                  <Pertamina_ico />
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/3 md:w-1/3 sm:w-full h-auto">
              <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto">
                  <Telkom_ico />
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/3 md:w-1/3 sm:w-full h-auto">
              <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto">
                  <Pln_ico />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-items-center justify-center justify-self-center mt-10 mb-5">
              <Link href={"/clients"}>
                <See_all_button />
              </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
