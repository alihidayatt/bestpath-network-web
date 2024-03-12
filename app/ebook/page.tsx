import React from "react";
import { Ebook_bgec_front_img } from "../components/Bpn_imgs";
import Link from "next/link";
import Ebook_button_detail from "../components/button/Ebook_button_detail";

export default function Ebook({ params }: { params: { ebookId: string } }) {
  const thisLink = "/ebook/1";
  params.ebookId = thisLink;

  return (
    <>
      <div className="container mx-auto px-6 py-6 ">
        <div className="w-full h-full shadow-lg p-3">
          <div className="flex text-xl font-semibold text-bluegreen justify-start p-2">
            <h1>E-Book</h1>
          </div>
          <div className="">
            <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:flex-wrap md:flex-wrap justify-items-center justify-center justify-self-start mb-5 h-auto lg:gap-x-5 lg:gap-y-5 md:gap-x-5 md:gap-y-5 sm:gap-y-5 xs:gap-y-5 py-3">
              <div className="lg:basis-1/3 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 rounded-lg">
                <div className="flex w-full h-auto justify-center rounded-lg py-2">
                  <Ebook_bgec_front_img />
                </div>
                <div className="flex justify-items-center justify-center justify-self-center mb-10">
                  <div className="flex justify-items-center justify-center justify-self-center mt-4">
                    <Link href={params.ebookId}>
                      <Ebook_button_detail />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
