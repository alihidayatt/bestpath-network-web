import About_us from "./components/contents/About_us";
import Our_company from "./components/contents/Our_company";
import Our_partners from "./components/contents/Our_parners";
import Our_services from "./components/contents/Our_services";

export default function Home() {
  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-4">
          <div className="w-full h-auto bg-gray-100 shadow-sm p-3 my-3">
            <About_us />
            <Our_company />
            <Our_partners />
            <Our_services />
          </div>
        </div>
      </div>
    </>
  );
}
