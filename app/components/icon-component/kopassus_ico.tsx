import Image from "next/image";
import kopassus from "./icon/kopassus_ico.png";

export default function Kopassus_ico() {
  return <Image src={kopassus} width={200} height={200} alt="kopassus image" />;
}
