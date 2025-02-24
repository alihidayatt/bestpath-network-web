import React from "react";
import Link from "next/link";
import See_all_button from "../button/See_all_button";
import {
  DanuCircleImg,
  ErickCircleImg,
  DamarCircleImg,
  TriCircleImg,
} from "../Bpn_imgs";

export default function Our_company() {
  return (
    <div className="container mx-auto px-6 py-6">
      <div className="text-center mb-5">
        <h2 className="text-2xl text-bluegreen font-semibold">OUR COMPANY</h2>
      </div>
      <div className="w-full bg-white shadow-lg p-5 rounded-lg">
        <div className="text-center mb-5">
          <h1 className="text-2xl font-medium italic text-bluegreen">OUR TEAM</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6 py-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-64 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center p-5"
            >
              <div className="w-28 h-28 rounded-full shadow-lg mb-3">
                {member.image}
              </div>
              <h5 className="mb-1 text-lg font-semibold text-gray-900">
                {member.name}
              </h5>
              <p className="text-xs text-gray-500 text-center mb-4">
                {member.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.roles.map((role, i) => (
                  <span
                    key={i}
                    className="bg-bluegreen text-white text-xs px-2 py-1 rounded-full"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/teams">
            <See_all_button />
          </Link>
        </div>
      </div>
    </div>
  );
}

const teamMembers = [
  {
    name: "Danu Wiyoto, S.Kom",
    image: <DanuCircleImg />, 
    description:
      "CCNA, CCNP EI, CCDP, CCNP SP, CCIE EI #48413, H3CNE, H3CSE, ACSA, ACSP, MTCNA",
    roles: [
      "Network Consultant",
      "Trainer",
      "Network Engineer",
      "Network Planning & Design",
    ],
  },
  {
    name: "Erick Yudho K",
    image: <ErickCircleImg />, 
    description: "Head Operasional Data Center CDCS, CDFOM",
    roles: [],
  },
  {
    name: "Damar Galih Kalicki",
    image: <DamarCircleImg />, 
    description: "CCNA, CCENT, CCNP - EI, MTCNA, MTCRE, NSE 1, NSE 2",
    roles: ["Trainer", "Network Engineer"],
  },
  {
    name: "Tri Cahyo Pranomo",
    image: <TriCircleImg />, 
    description: "QC & Cable Design Engineer, Presales",
    roles: [],
  },
];
