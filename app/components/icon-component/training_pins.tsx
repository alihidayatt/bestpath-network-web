import Image from "next/image";
import training_pins_img from "./img/training_pins.jpg";

export default function Training_pins_img() {
  return (
    <Image
      src={training_pins_img}
      width={425}
      height={335}
      alt="training bssn img"
    />
  );
}
