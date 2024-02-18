import Image from "next/image";
import osns_icon from "./icon/osns_ico.png";

export default function Osns_ico() {
  return (
    <Image src={osns_icon} width={300} height={300} alt="osns_icon icon" />
  );
}
