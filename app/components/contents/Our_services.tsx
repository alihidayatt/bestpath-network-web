import React from "react";
import See_all_button from "../button/See_all_button";
import Ebook_button_detail from "../button/See_all_button";
import Link from "next/link";
import {
  Training_bssn_img,
  Training_cyberops_ntt_img,
  Training_hypernet_img,
  Training_pertamina_img,
  Training_singapore_mpls_img,
  Implement1_img,
  Implement2_img,
  Implement3_img,
  Implement4_img,
  Ebook_bgec_front_img,
} from "../Bpn_imgs";

export default function Our_services() {
  return (
    <>
      <div className="container mx-auto px-6 py-6 ">
        {/* PROJECTS */}
        <div className="w-full h-full bg-white shadow-lg p-3 rounded-lg divide-y">
          {/* divide */}
          <div className="">
            <div className="flex justify-items-center justify-center justify-self-center mb-5">
              <div className="flex justify-items-center justify-center justify-self-center">
                <h1 className="text-2xl sm:text-xl xs:text-xl font-medium italic text-bluegreen">
                  Training
                </h1>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:flex-wrap md:flex-wrap justify-items-center justify-center justify-self-start mb-5 h-auto lg:gap-x-5 lg:gap-y-5 md:gap-x-5 md:gap-y-5 sm:gap-y-5 xs:gap-y-5 py-3">
              <div className="lg:basis-1/6 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 rounded-lg">
                <div className="flex w-full h-auto justify-center rounded-lg py-2">
                  <Training_bssn_img />
                </div>
                <div className="bg-white w-full h-full flex justify-center p-2 text-lg font-medium text-slate-700">
                  Training BSSN
                </div>
              </div>

              <div className="lg:basis-1/6 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 rounded-lg">
                <div className="flex w-full h-auto justify-center rounded-lg py-2">
                  <Training_cyberops_ntt_img />
                </div>
                <div className="bg-white w-full h-full flex justify-center p-2 text-lg font-medium text-slate-700">
                  Training Cyberops NTT
                </div>
              </div>

              <div className="lg:basis-1/6 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 rounded-lg">
                <div className="flex w-full h-auto justify-center rounded-lg py-2">
                  <Training_hypernet_img />
                </div>
                <div className="bg-white w-full h-full flex justify-center p-2 text-lg font-medium text-slate-700">
                  Training Hypernet
                </div>
              </div>

              <div className="lg:basis-1/6 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 rounded-lg">
                <div className="flex w-full h-auto justify-center rounded-lg py-2">
                  <Training_pertamina_img />
                </div>
                <div className="bg-white w-full h-full flex justify-center p-2 text-lg font-medium text-slate-700">
                  Training Pertamina
                </div>
              </div>

              <div className="lg:basis-1/6 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 rounded-lg">
                <div className="flex w-full h-auto justify-center rounded-lg py-2">
                  <Training_singapore_mpls_img />
                </div>
                <div className="bg-white text-center w-full h-full flex justify-center p-2 text-lg font-medium text-slate-700">
                  Training Singapore MPLS
                </div>
              </div>
            </div>

            <div className="flex justify-items-center justify-center justify-self-center mb-10">
              <div className="flex justify-items-center justify-center justify-self-center">
                <Link href={"/training"}>
                  <See_all_button />
                </Link>
              </div>
            </div>
          </div>
          {/* divide */}

          <div className="">
            <div className="flex justify-items-center justify-center justify-self-center mt-5">
              <div className="flex justify-items-center justify-center justify-self-center">
                <h1 className="text-2xl sm:text-xl xs:text-xl text-center font-medium italic text-bluegreen">
                  Project Implementation
                </h1>
              </div>
            </div>

            <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:flex-wrap md:flex-wrap justify-items-center justify-center justify-self-start mb-5 h-auto lg:gap-x-5 lg:gap-y-5 md:gap-x-5 md:gap-y-5 sm:gap-y-5 xs:gap-y-5 py-3">
              <div className="lg:basis-1/5 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 m-2 rounded-lg">
                <div className="flex w-full h-auto justify-center rounded-lg py-2">
                  <Implement1_img />
                </div>
              </div>

              <div className="lg:basis-1/5 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 m-2 rounded-lg">
                <div className="flex w-full h-auto justify-center rounded-lg py-2">
                  <Implement2_img />
                </div>
              </div>

              <div className="lg:basis-1/5 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 m-2 rounded-lg">
                <div className="flex w-full h-auto justify-center rounded-lg py-2">
                  <Implement3_img />
                </div>
              </div>

              <div className="lg:basis-1/5 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 m-2 rounded-lg">
                <div className="flex w-full h-auto justify-center rounded-lg py-2">
                  <Implement4_img />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-items-center justify-center justify-self-center mt-5">
              <div className="flex justify-items-center justify-center justify-self-center">
                <h1 className="text-2xl sm:text-xl xs:text-xl text-center font-medium italic text-bluegreen">
                  E-Book
                </h1>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:flex-wrap md:flex-wrap justify-items-center justify-center justify-self-start mb-5 h-auto lg:gap-x-5 lg:gap-y-5 md:gap-x-5 md:gap-y-5 sm:gap-y-5 xs:gap-y-5 py-3">
            <div className="lg:basis-1/3 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 rounded-lg">
                <div className="flex w-full h-auto justify-center rounded-lg py-2">
                  <Ebook_bgec_front_img />
                </div>
                <div className="flex justify-items-center justify-center justify-self-center mb-10">
                <div className="flex justify-items-center justify-center justify-self-center">
                  <Link href={"/ebook/ebook1"}>
                    <Ebook_button_detail />
                  </Link>
                </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
