import Image from "next/image";
import training_singapore_mpls_img from "./img/training_singapore_mpls.jpg";

export default function Training_singapore_mpls_img() {
  return (
    <Image
      src={training_singapore_mpls_img}
      width={425}
      height={335}
      alt="training singapore mpls img"
    />
  );
}
