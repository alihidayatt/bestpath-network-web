import React from "react";
import See_all_button from "../button/See_all_button";
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
} from "../Bpn_imgs";

interface TrainingData {
  id: number;
  img: React.JSX.Element;
  title: string;
}
interface ProjectIm {
  id: number;
  img: React.JSX.Element;
}

const TData: TrainingData[] = [
  {
    id: 1,
    img: <Training_bssn_img />,
    title: "Training BSSN",
  },
  {
    id: 2,
    img: <Training_cyberops_ntt_img />,
    title: "Training Cyberops NTT",
  },
  {
    id: 3,
    img: <Training_hypernet_img />,
    title: "Training Hypernet",
  },
  {
    id: 4,
    img: <Training_pertamina_img />,
    title: "Training Pertamina",
  },
  {
    id: 5,
    img: <Training_singapore_mpls_img />,
    title: "Training Singapore MPLS",
  },
];
const PIData: ProjectIm[] = [
  {
    id: 1,
    img: <Implement1_img />,
  },
  {
    id: 2,
    img: <Implement2_img />,
  },
  {
    id: 3,
    img: <Implement3_img />,
  },
  {
    id: 4,
    img: <Implement4_img />,
  },
];

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
              {TData.map((TData) => (
                <div
                  key={TData.id}
                  className="lg:basis-1/6 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 rounded-lg"
                >
                  <div className="flex w-full h-auto justify-center rounded-lg py-2">
                    {TData.img}
                  </div>
                  <div className="bg-white w-full h-full flex justify-center p-2 text-lg font-medium text-slate-700">
                    {TData.title}
                  </div>
                </div>
              ))}
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
              {PIData.map((PIData) => (
                <div
                  key={PIData.id}
                  className="lg:basis-1/5 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 m-2 rounded-lg"
                >
                  <div className="flex w-full h-auto justify-center rounded-lg py-2">
                    {PIData.img}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
