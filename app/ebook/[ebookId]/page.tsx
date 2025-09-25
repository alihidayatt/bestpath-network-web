"use client"; // <--- tambahkan ini di paling atas

import React, { useEffect } from "react";
import Link from "next/link";
import Ebook_download_button from "@/app/components/button/Ebook_download";
import Ebook_beli_button from "@/app/components/button/Ebook_beli";
import Ebook_demo_button from "@/app/components/button/Ebook_demo";
import { ebook_data } from "../ebook_data";

const EBData = ebook_data;

export default function EbookId({ params }: { params: { ebookId: string } }) {
  var idBook = params.ebookId;

  // scroll ke tengah halaman setelah render
  useEffect(() => {
    const middle = document.body.scrollHeight / 8;
    window.scrollTo({
      top: middle,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container mx-auto px-6 py-6 ">
      {EBData.filter((EBData) => EBData.id.toString() === idBook).map(
        (EBData) => (
          <div key={EBData.id} className="w-full h-full shadow-lg p-3">
            {EBData.bayar ? (
                    <div className="flex text-xl font-bold text-bluegreen justify-start p-2">
                      <h1>
                        {EBData.title}{" "}
                        <span className="text-green-600">({EBData.harga})</span>
                      </h1>
                    </div>
                  ) : (
                    <div className="flex text-xl font-bold text-bluegreen justify-start p-2">
                      <h1>{EBData.title}</h1>
                     </div>
                  )}

            <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-wrap justify-items-center justify-start justify-self-start h-auto w-full lg:gap-x-3 lg:gap-y-3 md:gap-x-3 md:gap-y-3 sm:gap-y-3 xs:gap-y-3 py-3">
              <div className="lg:basis-1/2 md:basis-full sm:w-full xs:w-full bg-white  flex flex-col shadow-lg p-2 rounded-lg">
                <div className="flex w-full h-auto justify-center rounded-lg py-2">
                  {EBData.img}
                </div>
              </div>
              <div className="lg:basis-2/5 md:basis-full sm:w-full xs:w-full bg-white flex flex-col shadow-lg p-2 rounded-lg">
                <div className="flex text-xl font-semibold text-bluegreen justify-start p-2">
                  <h1>Author</h1>
                </div>
                <div className="flex text-lg font-semibold justify-start p-2">
                  <p>{EBData.author}</p>
                </div>
                <div className="flex text-xl font-semibold text-bluegreen justify-start p-2">
                  <h1>Sinopsis</h1>
                </div>
                <div className="flex text-lg font-normal justify-start p-2 mb-5">
                  <p className="text-justify">{EBData.description}</p>
                </div>
                <div className="flex justify-center gap-4 mb-10">
                  {EBData.bayar ? (
                    <>
                      <Link target="_blank" href={EBData.link1}>
                        <Ebook_demo_button />
                      </Link>
                      <Link target="_blank" href={EBData.link2}>
                        <Ebook_beli_button />
                      </Link>
                    </>
                  ) : (
                    <Link target="_blank" href={EBData.link1}>
                      <Ebook_download_button />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
