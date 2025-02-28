import React from "react";
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
import See_all_button from "../button/See_all_button";
import { ebook_data } from "@/app/ebook/ebook_data";

const EBData = ebook_data;

const TData = [
  { id: 1, img: <Training_bssn_img />, title: "Training BSSN" },
  { id: 2, img: <Training_cyberops_ntt_img />, title: "Training Cyberops NTT" },
  { id: 3, img: <Training_hypernet_img />, title: "Training Hypernet" },
  { id: 4, img: <Training_pertamina_img />, title: "Training Pertamina" },
];

const PIData = [
  { id: 1, img: <Implement1_img /> },
  { id: 2, img: <Implement2_img /> },
  { id: 3, img: <Implement3_img /> },
  { id: 4, img: <Implement4_img /> },
];

export default function OurServices() {
  return (
    <div className="container mx-auto px-6 py-6">
      {/* Training Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h1 className="text-2xl font-medium italic text-center text-bluegreen mb-5">
          Training Event
        </h1>
        <div className="flex flex-wrap gap-5 justify-center">
          {TData.map((item) => (
            <div key={item.id} className="bg-white shadow-lg p-4 rounded-lg w-60">
              <div className="flex justify-center">{item.img}</div>
              <h2 className="text-center text-lg font-medium text-slate-700 mt-3">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <Link href="/training">
            <See_all_button />
          </Link>
        </div>
      </div>
      {/* Project Implementation Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h1 className="text-2xl font-medium italic text-center text-bluegreen mb-5">
          Project Implementation
        </h1>
        <div className="flex flex-wrap gap-5 justify-center">
          {PIData.map((item) => (
            <div key={item.id} className="bg-white shadow-lg p-4 rounded-lg w-60">
              <div className="flex justify-center">{item.img}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
