import Image from "next/image";
import training_csi_img from "./img/training_csi.jpg";

export default function Training_csi_img() {
  return (
    <Image
      src={training_csi_img}
      width={425}
      height={335}
      alt="training csi img"
    />
  );
}