import Image from "next/image";
import erickCircleImg from "./img/erick_cirle_img.png";

export default function ErickCircleImg() {
  return (
    <Image
      src={erickCircleImg}
      width={512}
      height={512}
      alt="erick circle image"
    />
  );
}
