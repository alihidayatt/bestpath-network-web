import React from "react";

export default function See_all_button_disabled() {
  return (
    <>
      <button
        type="button"
        className=" bg-transparent inline-flex items-center dark:transparent dark:hover:transparent cursor-not-allowed dark:focus:transparent text-slate-300 border-grey-200 border-2  font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 disabled disabled:border-slate-200 disabled:shadow-none"
      >
        View All
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </>
  );
}
