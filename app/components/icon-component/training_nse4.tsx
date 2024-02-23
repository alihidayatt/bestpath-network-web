import Image from "next/image";
import training_nse4_img from "./img/training_nse4.jpg";

export default function Training_nse4_img() {
  return (
    <Image
      src={training_nse4_img}
      width={425}
      height={335}
      alt="training nse4 img"
    />
  );
}