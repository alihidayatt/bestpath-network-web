import React from "react";
import Mikrotik_ico from "../icon-component/mikrotik_ico";
import Juniper_jncia_ico from "../icon-component/juniper_jncia_ico";
import Juniper_ico from "../icon-component/juniper_ico";
import Mikrotik_mtcna_ico from "../icon-component/mikrotik_mtcna_ico";
import Mikrotik_mtcre_ico from "../icon-component/mikrotik_mtcre_ico";
import Cisco_ico from "../icon-component/cisco_ico";
import Cisco_ccna_ico from "../icon-component/cisco_ccna_ico";
import Cisco_ccnp_ico from "../icon-component/cisco_ccnp_ico";
import Juniper_jncis_ico from "../icon-component/juniper_jncis_ico";
import H3c_ico from "../icon-component/h3c_ico";
import H3c_ne_ico from "../icon-component/h3c_ne_ico";
import H3c_se_ico from "../icon-component/h3c_se_ico";
import Training_1_img from "../icon-component/training_1_img";
import Training_2_img from "../icon-component/training_2_img";
import Training_3_img from "../icon-component/training_3_img";
import See_all_button from "../button/See_all_button";

export default function Our_services() {
  return (
    <>
      <div className="container mx-auto px-6 py-6">
        <div className="w-full h-full bg-white shadow-lg p-3 ">
          <div className="flex justify-items-center justify-center justify-self-center">
            <h1 className="text-xl font-medium italic text-bluegreen">
              TRAINING & EDUCATION
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="w-1/4 bg-white h-auto">
              <div className="flex justify-items-center justify-center justify-self-center m-10">
                <Mikrotik_ico />
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1 ">
                  <Mikrotik_mtcna_ico />
                </div>
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1 justify-items-center justify-center justify-self-center">
                  <Mikrotik_mtcre_ico />
                </div>
              </div>
            </div>
            <div className="w-1/4 bg-white h-auto">
              <div className="flex justify-items-center justify-center justify-self-center m-10">
                <Cisco_ico />
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1">
                  <Cisco_ccna_ico />
                </div>
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1">
                  <Cisco_ccnp_ico />
                </div>
              </div>
            </div>
            <div className="w-1/4 white h-auto">
              <div className="flex justify-items-center justify-center justify-self-center m-10">
                <Juniper_ico />
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1">
                  <Juniper_jncia_ico />
                </div>
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1">
                  <Juniper_jncis_ico />
                </div>
              </div>
            </div>
            <div className="w-1/4 bg-white h-auto">
              <div className="flex justify-items-center justify-center justify-self-center m-10">
                <H3c_ico />
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="flex w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1">
                  <H3c_ne_ico />
                </div>
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="flex w-[200px] h-[200px] rounded-[50%] bg-white p-2 shadow-custom1">
                  <H3c_se_ico />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex w-1/3 bg-white h-auto justify-items-center justify-center justify-self-center">
              <div className="w-[300px] h-[300px] bg-white rounded-[50%] my-3 p-2 shadow-custom1">
                <Training_1_img />
              </div>
            </div>
            <div className="flex w-1/3 bg-white h-auto justify-items-center justify-center justify-self-center">
              <div className="w-[300px] h-[300px] bg-white rounded-[50%] my-3 p-2 shadow-custom1">
                <Training_2_img />
              </div>
            </div>
            <div className="flex w-1/3 bg-white h-auto justify-items-center justify-center justify-self-center">
              <div className="w-[300px] h-[300px] bg-white rounded-[50%] my-3 p-2 shadow-custom1">
                <Training_3_img />
              </div>
            </div>
          </div>
          <div className="flex justify-items-center justify-center justify-self-center mt-10 mb-5">
            <See_all_button />
          </div>
        </div>

        <div className="w-full h-full bg-white shadow-lg p-3 mt-3">
          <div className="flex justify-items-center justify-center justify-self-center">
            <h1 className="text-xl font-medium italic text-bluegreen">
              CONSULTATION
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="flex w-1/3 bg-white h-auto justify-items-center justify-center justify-self-center">
              <div className="w-[300px] h-[300px] bg-white rounded-[50%] my-3 p-2 shadow-custom1">
                <Training_3_img />
              </div>
            </div>
            <div className="flex w-1/3 bg-white h-auto justify-items-center justify-center justify-self-center">
              <div className="w-[300px] h-[300px] bg-white rounded-[50%] my-3 p-2 shadow-custom1">
                <Training_3_img />
              </div>
            </div>
            <div className="flex w-1/3 bg-white h-auto justify-items-center justify-center justify-self-center">
              <div className="w-[300px] h-[300px] bg-white rounded-[50%] my-3 p-2 shadow-custom1">
                <Training_3_img />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
