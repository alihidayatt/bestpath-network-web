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

export default function Our_partners() {
  return (
    <>
      <div className="container mx-auto px-6 py-6">
        <div className="w-full h-full bg-white shadow-lg p-3 ">
          <div className="flex justify-items-center justify-center justify-self-center">
            <h1 className="text-xl font-medium italic text-bluegreen">
              BUSINESS PARTNERS
            </h1>
          </div>
            <div className="flex flex-row">
              <div className="w-1/3 bg-slate-300 h-auto">
                <div className="flex justify-items-center justify-center justify-self-center m-10">
                  <Topas_ico />
                </div>
              </div>
              <div className="w-1/3 bg-slate-400 h-auto">
                <div className="flex justify-items-center justify-center justify-self-center m-10">
                  <Fresscom_ico />
                </div>
              </div>
              <div className="w-1/3 bg-slate-300 h-auto">
                <div className="flex justify-items-center justify-center justify-self-center m-10">
                  <Epi_ico />
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
            <div className="flex flex-row">
              <div className="w-1/4 bg-slate-300 h-auto">
                <div className="flex justify-items-center justify-center justify-self-center m-10">
                  <Cisco_ico />
                </div>
              </div>
              <div className="w-1/4 bg-slate-300 h-auto">
                <div className="flex justify-items-center justify-center justify-self-center m-10">
                  <Mikrotik_ico />
                </div>
              </div>
              <div className="w-1/4 bg-slate-300 h-auto">
                <div className="flex justify-items-center justify-center justify-self-center m-10">
                  <Ruijie_ico />
                </div>
              </div>
              <div className="w-1/4 bg-slate-300 h-auto">
                <div className="flex justify-items-center justify-center justify-self-center m-10">
                  <Fortinet_ico />
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/5 bg-slate-300 h-auto"></div>
              <div className="w-1/5 bg-slate-300 h-auto">
                <div className="flex justify-items-center justify-center justify-self-center m-10">
                  <Juniper_ico />
                </div>
              </div>
              <div className="w-1/5 bg-slate-300 h-auto">
                <div className="flex justify-items-center justify-center justify-self-center m-10">
                  <Huawei_ico />
                </div>
              </div>
              <div className="w-1/5 bg-slate-300 h-auto">
                <div className="flex justify-items-center justify-center justify-self-center m-10">
                  <H3c_ico />
                </div>
              </div>
              <div className="w-1/5 bg-slate-300 h-auto"></div>
            </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-6">
        <div className="w-full h-full bg-white shadow-lg p-3 ">
          <div className="flex justify-items-center justify-center justify-self-center">
            <h1 className="text-xl font-medium italic text-bluegreen">
              OUR CLIENTS
            </h1>
          </div>
          <div className="flex justify-items-start justify-start justify-self-start">
            <h1 className="text-xl text-bluegreen">
              GOVERNMENT
            </h1>
          </div>
            <div className="flex flex-row">
              <div className="w-1/5 bg-slate-300 h-auto">
                <div className="flex justify-items-center justify-center justify-self-center m-10">
                  <H3c_ico />
                </div>
              </div>
              <div className="w-1/5 bg-slate-300 h-auto"></div>
              <div className="w-1/5 bg-slate-300 h-auto"></div>
              <div className="w-1/5 bg-slate-300 h-auto"></div>
              <div className="w-1/5 bg-slate-300 h-auto"></div>
            </div>              
        </div>
      </div>
    </>
  );
}
