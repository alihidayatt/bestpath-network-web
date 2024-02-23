import Image from "next/image";
import workshop_img from "./img/workshop.jpg";

export default function Workshop_img() {
  return (
    <Image
      src={workshop_img}
      width={425}
      height={335}
      alt="training workshop img"
    />
  );
}