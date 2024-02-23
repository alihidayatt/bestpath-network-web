import Image from "next/image";
import training_cgp_img from "./img/training_cgp.jpg";

export default function Training_cgp_img() {
  return (
    <Image
      src={training_cgp_img}
      width={425}
      height={335}
      alt="training ca img"
    />
  );
}