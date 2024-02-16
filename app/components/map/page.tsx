import React from "react";

export default function Map() {
  return (
    <>
      <div
        style={{
          textDecoration: "none",
          overflow: "hidden",
          maxWidth: "100%",
          width: 900,
          height: 400,
        }}
      >
        <div
          id="embed-ded-map-canvas"
          style={{ height: "100%", width: "100%", maxWidth: "100%" }}
        >
          <iframe
            style={{ height: "100%", width: "100%", border: 0 }}
            frameBorder={0}
            src="https://www.google.com/maps/embed/v1/place?q=Best-Path+Networks,+Jalan+Lombok+II,+RT.003/RW.007,+Cibodasari,+Tangerang+City,+Banten,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
        <a
          className="googlemaps-made"
          href="https://www.bootstrapskins.com/themes"
          id="enable-map-data"
        >
          premium bootstrap themes
        </a>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "#embed-ded-map-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}",
          }}
        />
      </div>
    </>
  );
}
