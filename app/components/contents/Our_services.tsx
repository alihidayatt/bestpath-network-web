import React from "react";
import Mikrotik_ico from "../icon-component/mikrotik_ico";
import Juniper_jncia_ico from "../icon-component/juniper_jncis_ico";
import Juniper_ico from "../icon-component/juniper_ico";

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
            <div className="w-1/4 bg-slate-300 h-auto">
              <Mikrotik_ico />
            </div>
            <div className="w-1/4 bg-slate-400 h-auto">B</div>
            <div className="w-1/4 bg-slate-700 h-auto">
              <div className="flex justify-items-center justify-center justify-self-center m-10">
                <Juniper_ico />
              </div>
              <div className="flex m-10 justify-items-center justify-center justify-self-center">
                <div className="w-[200px] h-[200px] rounded-[50%] bg-slate-400 p-2 shadow-xl">
                  <Juniper_jncia_ico />
                </div>
              </div>
            </div>
            <div className="w-1/4 bg-slate-600 h-auto">D</div>
          </div>
        </div>
      </div>
    </>
  );
}
