import React from "react";

export default function Ebook_beli_button() {
  return (
    <>
      <button
        type="button"
        className="
bg-transparent 
inline-flex items-center 
hover:text-green-900 text-green-800 
border-green-900 border-2 
hover:bg-green-200 
focus:ring-4 focus:outline-none focus:ring-green-400 
font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 
dark:border-green-600 dark:text-green-600 dark:hover:text-white 
dark:hover:bg-green-700 dark:focus:ring-green-1000 shadow-lg active
"
>
        <svg
          className="fill-current w-5 h-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {/* Ikon keranjang dorong (shopping cart) */}
          <path d="M3 3a1 1 0 000 2h1.28l2.6 9.59a2 2 0 001.92 1.41H17a1 1 0 100-2H8.8l-.38-1.4H18.6a2 2 0 001.92-1.45l1.32-5.3A1 1 0 0020.9 4H6.21l-.44-1.63A1 1 0 004.8 2H3zM7 20a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" />
        </svg>
        <span>Beli Sekarang</span>
      </button>
    </>
  );
}
