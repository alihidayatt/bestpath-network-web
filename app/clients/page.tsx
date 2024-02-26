import React from "react";
import Bssn_ico from "../components/icon-component/bssn_ico";
import Tik_polri_ico from "../components/icon-component/tik_polri_ico";
import Polri_ico from "../components/icon-component/polri_ico";
import Kominfo_ico from "../components/icon-component/kominfo_ico";
import Kemenpora_ico from "../components/icon-component/kemenpora_ico";
import Pertamina_ico from "../components/icon-component/pertamina_ico";
import Telkom_ico from "../components/icon-component/telkom_ico";
import Pln_ico from "../components/icon-component/pln_ico";
import Dc_sipil_img from "../components/icon-component/dc_sipil";
import Dc_sipil2_img from "../components/icon-component/dc_sipil2";
import Dc_jip_img from "../components/icon-component/dc_jip";
import Dc_ikn_img from "../components/icon-component/dc_ikn";
import Dc_basic_img from "../components/icon-component/dc_basic";
import Dc_pupr_img from "../components/icon-component/dc_pupr";
import Dc_noc_img from "../components/icon-component/dc_noc";

export default function Partners() {
    return (
    <>
    <div className="container mx-auto px-6 py-6">
      <div className="w-full h-full bg-white shadow-lg p-3 ">
        <div className="flex text-xl font-semibold text-bluegreen justify-start p-2">
          <h1>DATA CENTER</h1>
        </div>

        <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col mt-3">
          <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/4 md:w-1/4 sm:w-full h-auto">
            <div className="flex w-full h-auto justify-center rounded-lg py-2">
              <Dc_sipil_img />
            </div>
          </div>
          <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/4 md:w-1/4 sm:w-full h-auto">
            <div className="flex w-full h-auto justify-center rounded-lg py-2">
              <Dc_sipil2_img />
            </div>
          </div>
          <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/4 md:w-1/4 sm:w-full h-auto">
            <div className="flex w-full h-auto justify-center rounded-lg py-2">
              <Dc_jip_img />
            </div>
          </div>
          <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/4 md:w-1/4 sm:w-full h-auto">
            <div className="flex w-full h-auto justify-center rounded-lg py-2">
              <Dc_ikn_img />
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col mt-3">
          <div className="lg:basis-1/3 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 m-2 rounded-lg">
            <div className="flex w-full h-auto justify-center rounded-lg py-2">
              <Dc_basic_img />
            </div>
          </div>
          <div className="lg:basis-1/3 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 m-2 rounded-lg">
            <div className="flex w-full h-auto justify-center rounded-lg py-2">
              <Dc_pupr_img />
            </div>
          </div>
          <div className="lg:basis-1/3 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 m-2 rounded-lg">
            <div className="flex w-full h-auto justify-center rounded-lg py-2">
              <Dc_noc_img />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-6 py-6">
      <div className="w-full h-full bg-white shadow-lg p-3 ">
        <div className="flex text-xl font-semibold text-bluegreen justify-start p-2">
          <h1>GOVERNMENT</h1>
        </div>

        <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col mt-3">
            <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/5 sm:w-full h-auto">
              <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto">
                  <Bssn_ico />
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/5 sm:w-full h-auto">
              <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto">
                  <Tik_polri_ico />
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/5 sm:w-full h-auto">
              <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto">
                  <Polri_ico />
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/5 sm:w-full h-auto">
              <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto">
                  <Kominfo_ico />
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/5 sm:w-full h-auto">
              <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto">
                  <Kemenpora_ico />
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col mt-3">
            <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/5 sm:w-full h-auto">
              <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto">
                  <Bssn_ico />
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/5 sm:w-full h-auto">
              <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto">
                  <Tik_polri_ico />
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/5 sm:w-full h-auto">
              <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto">
                  <Polri_ico />
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/5 sm:w-full h-auto">
              <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto">
                  <Kominfo_ico />
                </div>
              </div>
            </div>
            <div className="flex lg:flex-col md:flex-col sm:flex-row lg:w-1/5 md:w-1/5 sm:w-full h-auto">
              <div className="flex w-full h-auto p-2 justify-items-center justify-center justify-self-center">
                <div className="lg:w-[180px] lg:h-auto md:w-[150px] md:h-auto sm:w-[100px] sm:h-auto">
                  <Kemenpora_ico />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
        </>
    )
}