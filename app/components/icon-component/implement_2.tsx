import Image from "next/image";
import implement2_img from "./img/implement_2.jpg";

export default function Implement2_img() {
  return (
    <Image
      src={implement2_img}
      width={425}
      height={335}
      alt="training bssn img"
    />
  );
}