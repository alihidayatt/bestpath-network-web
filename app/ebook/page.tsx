import React from "react";
import { Ebook_bgec_front_img } from "../components/Bpn_imgs";
import Link from "next/link";
import Ebook_button_detail from "../components/button/Ebook_button_detail";
import { ebook_data } from "./ebook_data";

const EBData = ebook_data;

export default function Ebook({ params }: { params: { ebookId: string } }) {
  const thisLink = "/ebook/";

  return (
    <>
      <div className="container mx-auto px-6 py-6 ">
        <div className="w-full h-full shadow-lg p-3">
          <div className="flex text-xl font-semibold text-bluegreen justify-start p-2">
            <h1>E-Book</h1>
          </div>
          <div className="">
            <div className="flex lg:basis-full md:basis-full sm:w-full xs:w-full bg-white lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:flex-wrap md:flex-wrap justify-items-center justify-center justify-self-start mb-5 h-auto lg:gap-x-5 lg:gap-y-5 md:gap-x-5 md:gap-y-5 sm:gap-y-5 xs:gap-y-5 py-3">
              {EBData.map((EBData) => (
                <div
                  key={EBData.id}
                  className="lg:w-1/4 md:w-1/3 sm:w-full xs:w-full flex lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-center shadow-lg p-5 rounded-lg  gap-x-8 gap-y-4"
                >
                  <div className="w-full h-auto justify-center rounded-md">
                    <div className="w-full h-auto p-5 justify-center">
                      {EBData.img}
                    </div>
                    <div className="w-full lg:h-[10vh] md:h-[10vh] sm:h-[12vh] xs:h-[12vh] p-2 text-center font-normal text-md">
                      {EBData.title}
                    </div>
                    <div className="w-full h-auto p-2 bottom-0 text-center">
                      <Link href={thisLink.concat("", EBData.id.toString())}>
                        <Ebook_button_detail />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
