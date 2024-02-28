import Image from "next/image";
import dc_sipil_img from "./img/dc_sipil.jpg";

export default function Dc_sipil_img() {
  return (
    <Image
      src={dc_sipil_img}
      width={425}
      height={335}
      alt="dc sipil img"
    />
  );
}
