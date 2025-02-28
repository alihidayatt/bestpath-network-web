import React from "react";
import Map from "../map/page";
import Phone_ico from "../icon-component/phone_ico";
import Email_ico from "../icon-component/email_ico";

export default function Footer() {
  return (
    <>
      <div className="w-full h-auto bg-bluegreen top-0 p-1" id="contact-us">
        <div className="flex justify-items-center justify-center justify-self-center lg:text-2xl md:text-2xl sm:text-xl xs:text-xl font-semibold text-white py-3 mb-5">
          <h2>CONTACT US</h2>
        </div>
        <div className="flex lg:flex-col md:flex-col sm:flex-col xs:flex-col gap-2">
          <div className="flex flex-col lg:justify-start md:justify-start sm:justify-center xs:justify-center justify-items-center justify-self-center lg:w-full md:w-full sm:w-full xs:w-full h-auto">
            <div className="flex justify-items-center justify-center justify-self-center text-white text-center font-normal lg:text-lg md:text-lg sm:text-base xs:text-base py-1 mt-2 p-1">
              Jalan Lombok 2 No. 154 Perumnas 1, Kota Tanggerang, 15138
            </div>
            <div className="flex justify-items-center justify-center justify-self-center text-white font-normal text-base py-1 mt-2 p-1">
              <span className="mr-2">
                <Email_ico />
              </span>
              <span className="lg:text-lg md:text-lg sm:text-base xs:text-base">
                <p>sales@bestpath-network.com</p>
              </span>
            </div>
            <div className="flex lg:justify-items-left lg:justify-left lg:justify-self-left md:justify-items-left md:justify-left md:justify-self-left  sm:justify-items-center sm:justify-center sm:justify-self-center xs:justify-items-center xs:justify-center xs:justify-self-center  text-white font-normal text-base py-1 mt-2 p-1">
              <span className="mr-2">
                <Phone_ico />
              </span>
              <span className="lg:text-lg md:text-lg sm:text-base xs:text-base">
                <p>+62 878 914 48413</p>
              </span>
            </div>
          </div>
          <div className="flex justify-items-center justify-center justify-self-center lg:w-full md:w-full sm:w-full xs:w-full h-auto mb-4 p-3">
            <Map />
          </div>
        </div>
        <div className="text-white font-normal text-sm m-3">
          <p>Copyright © 2016 - 2025 Bestpath Network. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
