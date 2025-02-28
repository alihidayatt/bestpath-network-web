import React from "react";
import Link from "next/link";

import {
  Cisco_ico,
  Mikrotik_ico,
  H3c_ico,
  Juniper_ico,
  Huawei_ico,
  Ruijie_ico,
  Ruckus_ico,
  Aruba_ico,
  Comptia_ico,
} from "../components/Bpn_imgs";

export default function TrainingPage() {
  const classes = [
    { name: "Cisco", Icon: Cisco_ico, link: "../training-class/cisco-class"},
    { name: "Mikrotik", Icon: Mikrotik_ico, link: "../training-class/mikrotik-class" },
    { name: "Juniper", Icon: Juniper_ico, link: "../training-class/juniper-class" },
    { name: "Huawei", Icon: Huawei_ico, link: "../training-class/huawei-class" },
    { name: "H3C", Icon: H3c_ico, link: "../training-class/h3c-class" },
    { name: "Aruba", Icon: Aruba_ico, link: "../training-class/aruba-class" },
    { name: "Ruijie", Icon: Ruijie_ico, link: "../training-class/ruijie-class" },
    { name: "Ruckus", Icon: Ruckus_ico, link: "../training-class/ruckus-class" },
    { name: "Comptia", Icon: Comptia_ico, link: "../training-class/comptia-class" },
  ];

  return (
    <div className="container mx-auto px-6 py-6">
      <div className="w-full h-full bg-white shadow-lg p-3 rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">All Training Class</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((kelas, index) => (
            <div key={index} className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
              <div className="h-40 flex border justify-center items-center bg-white">
                <kelas.Icon/>
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-2">{kelas.name}</h2>
                <Link href={kelas.link}>
                <button className="bg-transparent inline-flex items-center dark:transparent dark:hover:transparent dark:focus:transparent hover:text-bluegreen text-slate-300 border-blue-700 border-2 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:border-bluegreen dark:text-bluegreen dark:hover:text-white dark:hover:bg-bluegreen dark:focus:ring-slate-300 shadow-lg">
                Detail
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
