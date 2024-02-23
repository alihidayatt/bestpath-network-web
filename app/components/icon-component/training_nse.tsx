import Image from "next/image";
import training_nse_img from "./img/training_nse.jpg";

export default function Training_nse_img() {
  return (
    <Image
      src={training_nse_img}
      width={425}
      height={335}
      alt="training nse img"
    />
  );
}