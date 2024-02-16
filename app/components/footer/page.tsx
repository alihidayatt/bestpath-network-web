import React from "react";
import Map from "../map/page";
import Phone_ico from "../icon-component/icon/phone_ico";
import Email_ico from "../icon-component/icon/email_ico";

export default function Footer() {
  return (
    <>
      <div className="w-full h-auto bg-bluegreen top-0 p-1">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-item-start justify-start h-full">
            <div className="flex py-10 px-5 text-white gap-x-2 w-full ">
              <div className="w-2/5  p-3">
                <div>
                  <h2 className="text-4xl font-semibold">CONTACT US</h2>
                  <p className="text-2xl py-5">
                    Jalan Lombok 2 No. 154 Perumnas 1, Kota Tanggerang, 15138
                  </p>
                </div>
                <div className="flex justify-start gap-x-3 py-2">
                  <span>
                    <Email_ico />
                  </span>
                  <span className="text-xl">
                    <p>info@bestpath-network.com</p>
                  </span>
                </div>

                <div className="flex justify-start gap-x-3 py-2">
                  <span>
                    <Phone_ico />
                  </span>
                  <span className="text-xl">
                    <p>+62 61 722 222</p>
                  </span>
                </div>
              </div>
              <div className="w-3/5 bg-red-200  flex justify-item-end justify-end">
                <Map />
              </div>
            </div>
          </div>
          <div className="text-white px-5 text-lg py-5">
            <p>Copyright © 2016 - 2024 Bestpath Network. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
