import React from "react";
import Link from "next/link";
import { comptia_data } from "./kelas_data_comptia";

export default function TrainingComptia() {
  const thisLink = "./comptia-class/";

  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-2xl font-bold mb-6 text-center">All Comptia Class</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {comptia_data.map((kelas) => (
          <div
            key={kelas.id}
            className={`bg-gray-100 shadow-md rounded-lg p-4 text-center ${
              kelas.comingSoon ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {kelas.img}
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
                <button className="bg-bluegreen text-white px-4 py-2 rounded-lg">
                  Detail
                </button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
