import Image from "next/image";
import training_bi_img from "./img/training_bi.jpg";

export default function Training_bi_img() {
  return (
    <Image
      src={training_bi_img}
      width={425}
      height={335}
      alt="training bi img"
    />
  );
}