import Image from "next/image";
import training_hypernet_img from "./img/training_hypernet.jpg";

export default function Training_hypernet_img() {
  return (
    <Image
      src={training_hypernet_img}
      width={425}
      height={335}
      alt="training hypernet img"
    />
  );
}
