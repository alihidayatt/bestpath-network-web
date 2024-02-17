import React from "react";

export default function About_us() {
  return (
    <>
      <div className="container mx-auto px-6 py-6">
        <div className="w-full h-full bg-white shadow-lg p-3 ">
          <div className="flex justify-items-center justify-center justify-self-center mb-5">
            <div className="text-2xl text-bluegreen font-semibold self-center">
              ABOUT US
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse bg-slate-200 w-full h-auto mr-2">
            <div className="w-3/4 p-2 bg-red-300">
              <p>text container</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus deleniti, dolorem saepe quo et mollitia! Voluptatem
                doloribus tempora porro sint architecto dolores ullam eos
                possimus, minus, numquam modi repellendus quia?
              </p>
            </div>
            <div className="flex flex-col w-1/4 p-2 justify-items-center justify-center justify-self-center bg-slate-900 ml-2">
              <div className="flex justify-items-center justify-center justify-self-center mb-5 bg-gray-600">
                <div className="text-lg text-white font-medium self-center">
                  IMAGE CEO HERE
                </div>
              </div>
              <p>label HERE</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
