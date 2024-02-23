import Image from "next/image";
import training_kalos_img from "./img/training_kalos.jpg";

export default function Training_kalos_img() {
  return (
    <Image
      src={training_kalos_img}
      width={425}
      height={335}
      alt="training kalos img"
    />
  );
}