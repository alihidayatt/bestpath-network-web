import React from "react";
import Link from "next/link";
import { Mikrotik_data } from "./kelas_data_mikrotik";

export default function Trainingmikrotik({ params }: { params: { kelas_mikrotik_Id: string } }) {
  const thisLink = "./mikrotik-class/";

  return (
    <div className="container mx-auto px-6 py-6">
      <div className="w-full h-full bg-white shadow-lg p-3 rounded-lg relative overflow-hidden">
        <h1 className="text-2xl font-bold mb-6 text-center">All Mikrotik Class</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {Mikrotik_data.map((kelas, index) => (
            <div
              key={index}
              className={`bg-gray-100 shadow-md rounded-lg overflow-hidden relative group ${
                kelas.comingSoon ? "opacity-50 cursor-not-allowed" : ""
              }`}
              style={{ position: "relative" }}
            >
              {/* Gambar dan Coming Soon Overlay */}
              <div className="h-40 flex border justify-center items-center bg-white relative">
                {kelas.img} {/* Use JSX element directly */}
                {kelas.comingSoon && (
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-70 z-20 flex items-center justify-center text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Coming Soon
                  </div>
                )}
              </div>
              {/* Info Kelas dan Button */}
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-2">{kelas.title}</h2>
                {kelas.comingSoon ? (
                  <button
                    disabled
                    className="bg-gray-400 text-white cursor-not-allowed px-4 py-2 rounded-lg"
                  >
                    Coming Soon
                  </button>
                ) : (
                  <Link href={`${thisLink}${kelas.id}`}>
                    <button className="bg-transparent inline-flex items-center hover:text-bluegreen text-slate-300 border-blue-700 border-2 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:border-bluegreen dark:text-bluegreen dark:hover:text-white dark:hover:bg-bluegreen dark:focus:ring-slate-300 shadow-lg">
                      Detail
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
