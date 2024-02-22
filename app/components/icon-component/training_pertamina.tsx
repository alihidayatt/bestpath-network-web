import Image from "next/image";
import training_pertamina_img from "./img/training_pertamina.jpg";

export default function Training_pertamina_img() {
  return (
    <Image
      src={training_pertamina_img}
      width={425}
      height={335}
      alt="training pertamina img"
    />
  );
}
