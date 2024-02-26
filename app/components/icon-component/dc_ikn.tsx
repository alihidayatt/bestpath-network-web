import Image from "next/image";
import dc_ikn_img from "./img/dc_ikn.jpg";

export default function Dc_ikn_img() {
  return (
    <Image
      src={dc_ikn_img}
      width={425}
      height={335}
      alt="dc ikn img"
    />
  );
}
