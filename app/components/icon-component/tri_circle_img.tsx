import Image from "next/image";
import triCircleImg from "./img/tri_circle_img.png";

export default function TriCircleImg() {
  return (
    <Image src={triCircleImg} width={512} height={512} alt="tri circle image" />
  );
}
