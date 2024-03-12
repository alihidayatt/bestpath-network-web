import React from "react";
import Ebook_download_button from "@/app/components/button/Ebook_download";
import Link from "next/link";
import { Ebook_bgec_img } from "@/app/components/Bpn_imgs";

export default function EbookId({ params }: { params: { ebookId: 1 } }) {
  return (
    <>
      <div className="container mx-auto px-6 py-6 ">
        <div className="w-full h-full shadow-lg p-3">
          <div className="flex text-xl font-bold text-bluegreen justify-start p-2">
            <h1>THE ULTRA INSTINCT NETWORK INFRASTRUCTURE TOPOLOGY</h1>
          </div>

          <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-wrap justify-items-center justify-start justify-self-start h-auto w-full lg:gap-x-3 lg:gap-y-3 md:gap-x-3 md:gap-y-3 sm:gap-y-3 xs:gap-y-3 py-3">
            <div className="lg:basis-1/2 md:basis-full sm:w-full xs:w-full bg-white  flex flex-col shadow-lg p-2 rounded-lg">
              <div className="flex w-full h-auto justify-center rounded-lg py-2">
                <Ebook_bgec_img />
              </div>
            </div>
            <div className="lg:basis-1/3 md:basis-full sm:w-full xs:w-full bg-white  flex flex-col shadow-lg p-2 rounded-lg">
              <div className="flex text-xl font-semibold text-bluegreen justify-start p-2">
                <h1>Author</h1>
              </div>
              <div className="flex text-xl font-semibold justify-start p-2">
                <h1>M. Danu Wiyoto, S.kom, CCIE RS #48413</h1>
              </div>
              <div className="flex text-xl font-semibold justify-start p-2">
                <h1>Shefa Heidi Ramadiva</h1>
              </div>
              <div className="flex text-xl font-semibold text-bluegreen justify-start p-2">
                <h1>Sinopsis</h1>
              </div>
              <div className="flex text-lg font-normal justify-start p-2">
                <h1>
                  Didalam buku ini akan diperlihatkan bagaimana Infrastruktur
                  jaringan didirikan, didalam buku ini kita mengambil contoh
                  dari pengelihatan sebuah Telco/ISP, dikarenakan fitur-fitur
                  dan juga infrastruktur yang mereka dirikan bisa dibilang sudah
                  cukup lengkap dan berskala besar. Infrastruktur-infrastruktur
                  tersebut lalu kami gabungkan menjadi satu yang berupa suatu
                  Ultra Instinct Network Infrastructure Topology, dan juga
                  pecahan-pecahan dari Ultra Instinct Network Infrastructure
                  Topology, tersebut, serta dilengkapi dengan penjelasan singkat
                  mengenai topology yang ditampilkan
                </h1>
              </div>
              <div className="flex text-xl font-semibold text-bluegreen justify-start p-2">
                <h1></h1>
              </div>
              <div className="flex text-xl font-semibold text-bluegreen justify-start p-2">
                <h1></h1>
              </div>
              <div className="flex justify-items-center justify-center justify-self-center mb-10">
                <div className="flex justify-items-center justify-center justify-self-center">
                  <Link
                    href={
                      "https://h7yksq.bl.files.1drv.com/y4mjT9hnuJeqRgCEuFWGQgQ8a2WIXCm9QPbIE0tWMHk6YyEjDWP_92UFij0eXGc-xfHG7nHhrhkd-mbxAATHGyEC7Qxz-b57aCbST3a1ntFwO2ll5BcVhdsY071Hh4kAK6AUxNeS-ZUOkIQLRX6WRnGengjtapCQ3zHVVsfQL_-v1JRvkr-6oQDSv_UZ49sBUmZz1n7bbK3IObsh3PfFXUHTzb48n5nT_6bOXBfNfyZ4Nw"
                    }
                  >
                    <Ebook_download_button />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
