import Image from "next/image";
import training_3_img from "./img/training_3_img.png";

export default function Training_3_img() {
  return (
    <Image src={training_3_img} width={300} height={300} alt="training 3 img" />
  );
}
