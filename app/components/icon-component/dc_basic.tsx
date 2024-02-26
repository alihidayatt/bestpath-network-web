import Image from "next/image";
import dc_basic_img from "./img/dc_basic.jpg";

export default function Dc_ikn_img() {
  return (
    <Image
      src={dc_basic_img}
      width={425}
      height={335}
      alt="dc basic img"
    />
  );
}
