import React from "react";
import Link from "next/link";
import {
  Cisco_ico,
  Mikrotik_ico,
  Huawei_ico,
  Juniper_ico,
} from "../Bpn_imgs";
import See_all_button from "../button/See_all_button";
import { ebook_data } from "@/app/ebook/ebook_data";

const EBData = ebook_data;

const TrainingClasses = [
  { name: "Cisco", Icon: Cisco_ico, link: "../training-class/cisco-class"},
    { name: "Mikrotik", Icon: Mikrotik_ico, link: "../training-class/mikrotik-class" },
    { name: "Juniper", Icon: Juniper_ico, link: "../training-class/juniper-class" },
    { name: "Huawei", Icon: Huawei_ico, link: "../training-class/huawei-class" },
];

export default function OurProducts() {
  return (
    <div className="container mx-auto px-6 py-6">
      {/* Kelas Training Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
      <h1 className="text-2xl font-medium italic text-center text-bluegreen mb-5">
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
      {/* E-Book Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h1 className="text-2xl font-medium italic text-center text-bluegreen mb-5">
          E-Book
        </h1>
        <div className="flex flex-wrap gap-5 justify-center">
          {EBData.slice(0, 5).map((item) => (
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
