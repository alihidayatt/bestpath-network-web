import Image from "next/image";
import damarCircleImg from "./img/damar_circle_img.png";

export default function DamarCircleImg() {
  return (
    <Image
      src={damarCircleImg}
      width={512}
      height={512}
      alt="damar circle image"
    />
  );
}
