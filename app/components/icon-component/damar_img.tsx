import Image from "next/image";
import damar from "./img/damar_img.png";

export default function Damar_img() {
  return <Image src={damar} width={400} height={400} alt="damar image" />;
}
