import Image from "next/image";
import dc_sipil2_img from "./img/dc_sipil2.jpg";

export default function Dc_sipil2_img() {
  return (
    <Image
      src={dc_sipil2_img}
      width={425}
      height={335}
      alt="dc sipil2 img"
    />
  );
}
