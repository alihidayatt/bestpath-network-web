import Image from "next/image";
import danuCircleImg from "./img/danu_circle_img.png";

export default function DanuCircleImg() {
  return (
    <Image
      src={danuCircleImg}
      width={512}
      height={512}
      alt="danu circle image"
    />
  );
}
