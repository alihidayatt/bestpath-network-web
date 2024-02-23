import Image from "next/image";
import training_deekai_img from "./img/training_deekai.jpg";

export default function Training_deekai_img() {
  return (
    <Image
      src={training_deekai_img}
      width={425}
      height={335}
      alt="training bi img"
    />
  );
}