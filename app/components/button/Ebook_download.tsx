import React from "react";

export default function Ebook_download_button() {
  return (
    <>
      <button
        type="button"
        className=" bg-transparent inline-flex items-center dark:transparent dark:hover:transparent dark:focus:transparent hover:text-bluegreen text-slate-300 border-blue-700 border-2 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-bluegreen dark:text-bluegreen dark:hover:text-white dark:hover:bg-bluegreen dark:focus:ring-slate-300 shadow-lg active"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download</span>
      </button>
    </>
  );
}
