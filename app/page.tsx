import About_us from "./components/contents/About_us";
import Our_company from "./components/contents/Our_company";
import Our_partners from "./components/contents/Our_partners";
import Our_services from "./components/contents/Our_services";
import Our_products from "./components/contents/Our_product";

export default function Home() {
  return (
    <>
      <div>
        <div
          className="container mx-auto px-4 py-2 sm:px-0 xs:px-0"
          id="aboutus"
        >
          <div className="w-full h-auto bg-gray-100 shadow-sm p-3 my-1 rounded-lg">
            <About_us />
          </div>
        </div>
        <div className="container mx-auto px-4 py-2 sm:px-0 xs:px-0">
          <div className="w-full h-auto bg-gray-100 shadow-sm p-3 my-1 rounded-lg">
            <div className="flex justify-items-center justify-center justify-self-center mb-5">
              <div className="text-2xl text-bluegreen font-semibold self-center">
                OUR PRODUCT
              </div>
            </div>
            <Our_products />
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-2 sm:px-0 xs:px-0">
          <div className="w-full h-auto bg-gray-100 shadow-sm p-3 my-1 rounded-lg">
            <div className="flex justify-items-center justify-center justify-self-center mb-5">
              <div className="text-2xl text-bluegreen font-semibold self-center">
                OUR PROJECTS
              </div>
            </div>
            <Our_services />
          </div>
        </div>
        <div
          className="container mx-auto px-4 py-2 sm:px-0 xs:px-0"
          id="partners"
        >
          <div className="w-full h-auto bg-gray-100 shadow-sm p-3 my-1 rounded-lg">
            <div className="flex justify-items-center justify-center justify-self-center mb-5">
              <div className="text-2xl text-bluegreen font-semibold self-center">
                OUR PARTNERS
              </div>
            </div>
            <Our_partners />
          </div>
        </div>
        <div
          className="container mx-auto px-4 py-2 sm:px-0 xs:px-0"
          id="company"
        >
          <div className="w-full h-auto bg-gray-100 shadow-sm p-3 my-1 rounded-lg">
            <Our_company />
          </div>
        </div>
      </div>
    </>
  );
}
