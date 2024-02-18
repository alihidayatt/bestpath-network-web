import Image from "next/image";
import tri from "./img/tri_img.png";

export default function Tri_img() {
  return <Image src={tri} width={400} height={400} alt="tri image" />;
}
