export default function Map() {
  const apiKey = process.env.GOOGLE_MAPS_EMBED_API_KEY;
  const place = "Best-Path Networks, Jalan Lombok II, Cibodasari, Tangerang, Indonesia";
  const source = apiKey
    ? `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(place)}&key=${encodeURIComponent(apiKey)}`
    : `https://www.google.com/maps?q=${encodeURIComponent(place)}&output=embed`;

  return (
    <div style={{ overflow: "hidden", maxWidth: "100%", width: 900, height: 400 }}>
      <iframe
        title="Lokasi kantor Best-Path Networks"
        src={source}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ height: "100%", width: "100%", border: 0 }}
      />
    </div>
  );
}
