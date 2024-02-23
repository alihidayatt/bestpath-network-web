import Image from "next/image";
import training_ca_img from "./img/training_ca.jpg";

export default function Training_ca_img() {
  return (
    <Image
      src={training_ca_img}
      width={425}
      height={335}
      alt="training ca img"
    />
  );
}