import Image from "next/image";
import training_1_img from "./img/training_1_img.png";

export default function Training_1_img() {
  return (
    <Image src={training_1_img} width={300} height={300} alt="training 1 img" />
  );
}
