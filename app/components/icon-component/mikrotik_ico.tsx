import Image from "next/image";
import mikrotikIco from "./icon/mikrotik_ico.png";

export default function Mikrotik_ico() {
  return (
    <Image src={mikrotikIco} width={200} height={200} alt="mikrotik icon" />
  );
}
