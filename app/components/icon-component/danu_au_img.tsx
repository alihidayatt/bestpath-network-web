import Image from "next/image";
import danuAuImg from "./img/danu_au_img.png";

export default function Danu_au_img() {
  return <Image src={danuAuImg} width={512} height={512} alt="danu au image" />;
}
