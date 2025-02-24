import React from "react";
import { juniper_data } from "../kelas_data_juniper";

export default function Trainingjuniper({ params }: { params: { kelas_juniper_Id: string } }) {
  const idkelas = params.kelas_juniper_Id;
  const kelas = juniper_data.find((k) => k.id.toString() === idkelas);

  if (!kelas) {
    return (
      <div className="container mx-auto px-6 py-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Class Not Found</h1>
        <p className="text-lg">Please check the URL or return to the home page.</p>
      </div>
    );
  }

  // Fungsi untuk menghasilkan teks dengan tingkat yang dicoret
  const renderLevel = (selectedLevel: string) => {
    const levels = ["Beginner", "Intermediate", "Advance"];
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
        <h1 className="text-3xl font-bold text-bluegreen p-2">Kelas Training {kelas.title}</h1>
        <div className="lg:basis-2/3 sm:w-full border bg-white p-4 rounded-lg flex-grow">
  <h2 className="text-lg font-semibold text-bluegreen mb-2">Overview</h2>
  <div className="text-base mb-4">{kelas.overview}</div>

  <h2 className="text-lg font-semibold text-bluegreen mb-2">Prasyarat</h2>
  <div className="text-base mb-4">{kelas.prasyarat || "Tidak ada prasyarat."}</div>

  <h2 className="text-lg font-semibold text-bluegreen mb-2">Tingkat</h2>
  <div className="text-base mb-4">{renderLevel(kelas.tingkat || "")}</div>

  <h2 className="text-lg font-semibold text-bluegreen mb-2">Tujuan</h2>
  <div className="text-base mb-4">{kelas.tujuan || "Tidak ada tujuan yang terdaftar."}</div>

  <h2 className="text-lg font-semibold text-bluegreen mb-2">Ditujukan Untuk</h2>
  <div className="text-base mb-4">{kelas.ditujukan || "Informasi tidak tersedia."}</div>

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

  <h2 className="text-lg font-semibold text-bluegreen mb-2">Durasi Training</h2>
  <div className="text-base mb-4">{kelas.durasi || "Informasi tidak tersedia."} (09.00-17.00 WIB)</div>

  <h2 className="text-lg font-semibold text-bluegreen mb-2">Biaya Pembelajaran</h2>
  <div className="text-base mb-4">Rp.{kelas.biaya || "Informasi tidak tersedia."}</div>
</div>
      </div>
    </div>
  );
}
