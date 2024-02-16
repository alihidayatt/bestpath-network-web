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
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div
        style={{
          width: "40%",
          height: "auto",
        }}
      >
        <h1
          style={{
            fontSize: 32,
            color: "white",
            fontWeight: "600",
          }}
        >
          BEST-PATH NETWORK
        </h1>
        <h4 style={{ fontSize: 24, color: "white" }}>
          Established in 2016 and we are focus on Data Center, Network Security,
          Training and Consultant.
        </h4>
      </div>
      <div
        style={{
          width: "60%",
          height: "auto",
        }}
      ></div>
    </div>
  );
}
