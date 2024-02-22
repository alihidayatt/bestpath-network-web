import Image from "next/image";
import training_bssn_img from "./img/training_bssn.jpg";

export default function Training_bssn_img() {
  return (
    <Image
      src={training_bssn_img}
      width={425}
      height={335}
      alt="training bssn img"
    />
  );
}
