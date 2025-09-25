import React from "react";
import { juniper_data } from "../kelas_data_juniper";

// Wajib async
export default async function TrainingJuniper({
  params,
}: {
  params: Promise<{ kelas_juniper_Id: string }>;
}) {
  const { kelas_juniper_Id } = await params; // ambil id dari promise
  const kelas = juniper_data.find((k) => k.id.toString() === kelas_juniper_Id);

  if (!kelas) {
    return (
      <div className="container mx-auto px-6 py-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Class Not Found</h1>
        <p className="text-lg">Please check the URL or return to the home page.</p>
      </div>
    );
  }

  const renderLevel = (selectedLevel: string) => {
    const levels = ["Beginner", "Intermediate", "Advance"];
    return (
      <span>
        {levels
          .map((level) =>
            level === selectedLevel ? (
              <span key={level}>{level}</span>
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

          <h2 className="text-lg font-semibold text-bluegreen mb-2">Prerequisite</h2>
          <div className="text-base mb-4">{kelas.prerequisite || "Tidak ada prerequisite."}</div>

          <h2 className="text-lg font-semibold text-bluegreen mb-2">Level</h2>
          <div className="text-base mb-4">{renderLevel(kelas.level || "")}</div>

          <h2 className="text-lg font-semibold text-bluegreen mb-2">Goals</h2>
          <div className="text-base mb-4">{kelas.goals || "Tidak ada goals yang terdaftar."}</div>

          <h2 className="text-lg font-semibold text-bluegreen mb-2">Intended For</h2>
          <div className="text-base mb-4">{kelas.intended || "Informasi tidak tersedia."}</div>

          <h2 className="text-lg font-semibold text-bluegreen mb-2">Syllabus</h2>
          <div>
            {kelas.syllabus.map((item, index) =>
              /^Day \d+/.test(item) ? (
                <div key={index} className="font-semibold mb-2">{item}</div>
              ) : (
                <ul className="list-disc pl-8" key={index}>
                  <li className="mb-2">{item}</li>
                </ul>
              )
            )}
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
