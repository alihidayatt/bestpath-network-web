import Image from "next/image";
import training_politala_img from "./img/training_politala.jpg";

export default function Training_politala_img() {
  return (
    <Image
      src={training_politala_img}
      width={425}
      height={335}
      alt="training politala img"
    />
  );
}