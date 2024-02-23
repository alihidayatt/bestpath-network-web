import Image from "next/image";
import training_jasmikom_img from "./img/training_jasmikom.jpg";

export default function Training_jasmikom_img() {
  return (
    <Image
      src={training_jasmikom_img}
      width={425}
      height={335}
      alt="training jasmikom img"
    />
  );
}