import Image from "next/image";
import mosesCircleImg from "./img/moses_circle_img.png";

export default function MosesCircleImg() {
  return (
    <Image
      src={mosesCircleImg}
      width={512}
      height={512}
      alt="moses circle image"
    />
  );
}
