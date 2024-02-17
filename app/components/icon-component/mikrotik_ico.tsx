import Image from "next/image";
import mikrotikImage from "./icon/mikrotik_ico.png";

export default function Mikrotik_ico() {
  return (
    <Image src={mikrotikImage} width={200} height={200} alt="mikrotik image" />
  );
}
