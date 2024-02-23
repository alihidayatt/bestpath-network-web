import Image from "next/image";
import implement4_img from "./img/implement_4.jpg";

export default function Implement4_img() {
  return (
    <Image
      src={implement4_img}
      width={425}
      height={335}
      alt="training bssn img"
    />
  );
}