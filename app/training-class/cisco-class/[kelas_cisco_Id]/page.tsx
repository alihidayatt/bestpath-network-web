import React from "react";
import { cisco_data } from "../kelas_data_cisco";

export default function TrainingCisco({ params }: { params: { kelas_cisco_Id: string } }) {
  const idkelas = params.kelas_cisco_Id;
  const kelas = cisco_data.find((k) => k.id.toString() === idkelas);

  if (!kelas) {
    return (
      <div className="container mx-auto px-6 py-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Class Not Found</h1>
        <p className="text-lg">Please check the URL or return to the home page.</p>
      </div>
    );
  }

  // Fungsi untuk menghasilkan teks dengan level yang dicoret
  const renderLevel = (selectedLevel: string) => {
    const levels = ["Beginner", "Intermediate", "Advanced"];
    return (
      <span>
        {levels
          .map((level, index) =>
            level === selectedLevel ? (
              <span key={level} className="">
                {level}
              </span>
            ) : (
              <span key={level} className="line-through text-gray-400">
                {level}
              </span>
            )
          )
          .reduce((prev, curr, idx) => (
            <React.Fragment key={idx}>
              {prev}
              {idx > 0 && " | "}
              {curr}
            </React.Fragment>
          ))}
      </span>
    );
  };

  return (
    <div className="container mx-auto px-6 py-6">
      <div className="w-full h-full shadow-lg p-3">
        <h1 className="text-3xl font-bold text-bluegreen p-2">Training Class {kelas.title}</h1>
        <div className="lg:basis-2/3 sm:w-full border bg-white p-4 rounded-lg flex-grow">
          <h2 className="text-lg font-semibold text-bluegreen mb-2">Overview</h2>
          <div className="text-base mb-4">{kelas.overview}</div>

          <h2 className="text-lg font-semibold text-bluegreen mb-2">Prerequisite</h2>
          <div className="text-base mb-4">{kelas.prerequisite || "Tidak ada prerequisite."}</div>

          <h2 className="text-lg font-semibold text-bluegreen mb-2">Level</h2>
          <div className="text-base mb-4">{renderLevel(kelas.level || "")}</div>

          <h2 className="text-lg font-semibold text-bluegreen mb-2">Goals</h2>
          <div className="text-base mb-4">{kelas.goals || "Tidak ada goals yang terdaftar."}</div>

          <h2 className="text-lg font-semibold text-bluegreen mb-2">Intended for</h2>
          <div className="text-base mb-4">{kelas.intended || "Informasi tidak tersedia."}</div>

          <h2 className="text-lg font-semibold text-bluegreen mb-2">Syllabus</h2>
          <div>
            {kelas.syllabus.map((item, index) => {
              // Cek apakah teks mengandung "Day" di awal
              if (/^Day \d+/.test(item)) {
                return (
                  <div key={index} className="font-semibold mb-2">
                    {item}
                  </div>
                );
              }
              return (
                <ul className="list-disc pl-8" key={index}>
                  <li className="mb-2">{item}</li>
                </ul>
              );
            })}
          </div>

          <h2 className="text-lg font-semibold text-bluegreen mb-2">Duration</h2>
          <div className="text-base mb-4">{kelas.duration || "Informasi tidak tersedia."} (09.00-17.00 WIB)</div>

          <h2 className="text-lg font-semibold text-bluegreen mb-2">Investment (Minimum 2 Pax)</h2>
          <div className="text-base mb-4 text-green-800">Rp.{kelas.investment || "Informasi tidak tersedia."}</div>

          <h2 className="text-lg font-semibold text-bluegreen mb-2">Investment (Kelas Private)</h2>
          <div className="text-base mb-4 text-green-800">Rp.{kelas.investment_p || "Informasi tidak tersedia."}</div>
          <div className="text-base mb-4">Bagi yang berminat bisa kontak kami (pada bagian 'Contact Us') untuk reservasi jadwal</div>
          <div className="text-base mb-4">Catatan: Tidak Termasuk Faktur Pajak</div>
        </div>
      </div>
    </div>
  );
}
