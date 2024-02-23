import Image from "next/image";
import implement1_img from "./img/implement_1.jpg";

export default function Implement1_img() {
  return (
    <Image
      src={implement1_img}
      width={425}
      height={335}
      alt="training bssn img"
    />
  );
}