import Image from "next/image";
import training_ptcc_img from "./img/training_ptcc.jpg";

export default function Training_trainocate_img() {
  return (
    <Image
      src={training_ptcc_img}
      width={425}
      height={335}
      alt="training ptcc img"
    />
  );
}