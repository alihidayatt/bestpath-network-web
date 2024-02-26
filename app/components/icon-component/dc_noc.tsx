import Image from "next/image";
import dc_noc_img from "./img/dc_noc.jpg";

export default function Dc_ikn_img() {
  return (
    <Image
      src={dc_noc_img}
      width={425}
      height={335}
      alt="dc noc img"
    />
  );
}
