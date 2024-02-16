import React from "react";
import Image from "next/image";

export default function Topnav() {
  return (
    <>
      <div className="w-full h-auto bg-bluegreen top-0 p-1">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-items-end justify-end h-full gap-x-10">
            <button className="bg-transparent text-white font-regular hover:text-white py-1 px-2 border border-bluegreen hover:border-white rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
