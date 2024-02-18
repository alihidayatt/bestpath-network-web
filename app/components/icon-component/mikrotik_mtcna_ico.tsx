import Image from "next/image";
import mikrotikMtcnaIco from "./icon/mikrotik_mtcna_ico.png";

export default function Mikrotik_mtcna_ico() {
  return (
    <Image
      src={mikrotikMtcnaIco}
      width={200}
      height={200}
      alt="Mikrotik mtcna icon"
    />
  );
}
