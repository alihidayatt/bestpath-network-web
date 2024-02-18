import Image from "next/image";
import training_2_img from "./img/training_2_img.png";

export default function Training_2_img() {
  return (
    <Image src={training_2_img} width={300} height={300} alt="training 2 img" />
  );
}
