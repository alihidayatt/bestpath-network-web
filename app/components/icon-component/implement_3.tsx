import Image from "next/image";
import implement3_img from "./img/implement_3.jpg";

export default function Implement3_img() {
  return (
    <Image
      src={implement3_img}
      width={425}
      height={335}
      alt="training bssn img"
    />
  );
}