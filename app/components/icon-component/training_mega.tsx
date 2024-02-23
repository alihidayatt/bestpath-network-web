import Image from "next/image";
import training_mega_img from "./img/training_mega.jpg";

export default function Training_mega_img() {
  return (
    <Image
      src={training_mega_img}
      width={425}
      height={335}
      alt="training mega img"
    />
  );
}