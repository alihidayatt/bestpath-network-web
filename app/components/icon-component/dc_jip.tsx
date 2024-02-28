import Image from "next/image";
import dc_jip_img from "./img/dc_jip.jpg";

export default function Dc_jip_img() {
  return (
    <Image
      src={dc_jip_img}
      width={425}
      height={335}
      alt="dc jip img"
    />
  );
}
