// src/app/page.tsx

// import the image file from public folder
// make sure to replace my image path with your own
import backgroundImage from "/public/wall-banner-1.jpg";

export default function Wall_banner_1_img() {
  return (
    <div
      style={{
        // use the src property of the image object
        backgroundImage: `url(${backgroundImage.src})`,
        // other styles
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "left",
        justifyContent: "left",
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingTop: "5vh",
        paddingBottom: "5vh",
        maxHeight: "400px",
      }}
    >
      <div className="w-auto h-auto">
        <p className="lg:text-xl md:text-xl sm:text-lg text-white font-semibold lg:text-left md:text-left sm:text-left">
          BEST-PATH NETWORK
        </p>
        <h4 className="lg:text-xl md:text-xl sm:text-lg text-white lg:text-left md:text-left sm:text-left">
          Established in 2016 and we are focus on Data Center, Network Security,
          Training and Consultant.
        </h4>
      </div>

      <div className="w-[60%] h-auto"></div>
    </div>
  );
}
