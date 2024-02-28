import Image from "next/image";
import mikrotikMtcreIco from "./icon/mikrotik_mtcre_ico.png";

export default function Mikrotik_mtcre_ico() {
  return (
    <Image
      src={mikrotikMtcreIco}
      width={200}
      height={200}
      alt="Mikrotik mtcre icon"
    />
  );
}
