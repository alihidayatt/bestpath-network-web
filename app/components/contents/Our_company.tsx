import React from "react";
import See_all_button from "../button/See_all_button";
import H3c_ico from "../icon-component/h3c_ico";

export default function Our_company() {
  return (
    <>
      <div className="container mx-auto px-6 py-6">
        <div className="w-full h-full bg-white shadow-lg p-3 ">
          <div className="flex justify-items-center justify-center justify-self-center mb-5">
            <div className="text-2xl text-bluegreen font-semibold self-center">
              OUR COMPANY
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-1/3 bg-slate-300 h-auto">
              <div className="flex justify-items-center justify-center justify-self-center m-10">
                <H3c_ico />
              </div>
            </div>
            <div className="w-1/3 bg-slate-300 h-auto">
              <div className="flex justify-items-center justify-center justify-self-center m-10">
                <H3c_ico />
              </div>
            </div>
            <div className="w-1/3 bg-slate-300 h-auto">
              <div className="flex justify-items-center justify-center justify-self-center m-10">
                <H3c_ico />
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/4 bg-slate-300 h-auto"></div>
            <div className="w-1/4 bg-slate-300 h-auto">
              <div className="flex justify-items-center justify-center justify-self-center m-10">
                <H3c_ico />
              </div>
            </div>
            <div className="w-1/4 bg-slate-300 h-auto">
              <div className="flex justify-items-center justify-center justify-self-center m-10">
                <H3c_ico />
              </div>
            </div>
            <div className="w-1/4 bg-slate-300 h-auto"></div>
          </div>

          <div className="flex justify-items-center justify-center justify-self-center mt-10 mb-5">
            <See_all_button />
          </div>
        </div>
      </div>
    </>
  );
}
