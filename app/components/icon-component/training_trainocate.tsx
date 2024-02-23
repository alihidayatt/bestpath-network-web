import Image from "next/image";
import training_trainocate_img from "./img/training_trainocate.jpg";

export default function Training_trainocate_img() {
  return (
    <Image
      src={training_trainocate_img}
      width={425}
      height={335}
      alt="training trainocate img"
    />
  );
}