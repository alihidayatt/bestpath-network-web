import Image from "next/image";
import danu from "./img/danu_img.png";

export default function Danu_img() {
  return <Image src={danu} width={400} height={400} alt="danu image" />;
}
