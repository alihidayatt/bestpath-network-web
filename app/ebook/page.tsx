import React from "react";
import Link from "next/link";
import Ebook_button_detail from "../components/button/Ebook_button_detail";
import { ebook_data } from "./ebook_data";

export default function EbookPage() {
  const thisLink = "/ebook/";
  const books = ebook_data;

  return (
    <div className="container mx-auto px-6 py-6">
      <div className="w-full h-full shadow-lg p-3">
        <div className="flex text-xl font-semibold text-bluegreen justify-start p-2">
          <h1>E-Book</h1>
        </div>

        {/* Grid: responsive columns */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-3">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-lg rounded-lg p-5 flex flex-col h-full"
            >
              {/* Image area */}
              <div className="flex items-center justify-center h-56 overflow-hidden rounded-md">
                {book.frontImg}
              </div>

              {/* Title area */}
              <div className="mt-4 text-center font-normal text-md min-h-[3rem]">
                {book.bayar ? (
                  <span>
                    <div>{book.title}</div>
                    <span className="text-green-600">({book.harga})</span>
                  </span>
                ) : (
                  <span>{book.title}</span>
                )}
              </div>

              {/* Tombol */}
              <div className="mt-auto pt-4 flex justify-center">
                <Link href={`${thisLink}${book.id.toString()}`} className="w-full sm:w-auto">
                  <Ebook_button_detail />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
