import React from "react";
import Link from "next/link";
import {
  Cisco_ico,
  Mikrotik_ico,
  Fortinet_ico,
  Juniper_ico,
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

const TrainingClasses = [
  { name: "Cisco", Icon: Cisco_ico, link: "../training-class/cisco-class" },
  { name: "Mikrotik", Icon: Mikrotik_ico, link: "../training-class/mikrotik-class" },
  { name: "Fortinet", Icon: Fortinet_ico, link: "../training-class/cisco-class" },
  { name: "Juniper", Icon: Juniper_ico, link: "../training-class/juniper-class" },
];

export default function OurServices() {
  return (
    <div className="container mx-auto px-6 py-6">
      {/* Training Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h1 className="text-2xl font-medium italic text-center text-bluegreen mb-5">
          Training
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

      {/* Kelas Training Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-bluegreen">
          Training Class
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TrainingClasses.map((kelas, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md rounded-lg overflow-hidden"
            >
              <div className="h-40 flex border justify-center items-center bg-white">
                <kelas.Icon />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-2">{kelas.name}</h2>
                <Link href={kelas.link}>
                  <button className="bg-transparent inline-flex items-center dark:transparent dark:hover:transparent dark:focus:transparent hover:text-bluegreen text-slate-300 border-blue-700 border-2 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-bluegreen dark:text-bluegreen dark:hover:text-white dark:hover:bg-bluegreen dark:focus:ring-slate-300 shadow-lg">
                    All Class
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
                <Link href="/training-class">
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

      {/* E-Book Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h1 className="text-2xl font-medium italic text-center text-bluegreen mb-5">
          E-Book
        </h1>
        <div className="flex flex-wrap gap-5 justify-center">
          {EBData.slice(0, 3).map((item) => (
            <div key={item.id} className="bg-white shadow-lg p-4 rounded-lg w-60">
              <div className="flex justify-center">{item.img}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <Link href="/ebook">
            <See_all_button />
          </Link>
        </div>
      </div>
    </div>
  );
}
