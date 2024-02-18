import Image from "next/image";
import inhouse_training_icon from "./icon/inhouse_training_ico.png";

export default function Inhouse_training_ico() {
  return (
    <Image
      src={inhouse_training_icon}
      width={300}
      height={300}
      alt="inhouse_training_icon icon"
    />
  );
}
