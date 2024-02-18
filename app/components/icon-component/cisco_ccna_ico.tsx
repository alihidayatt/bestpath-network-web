import Image from "next/image";
import ciscoCcnaIco from "./icon/cisco_ccna_ico.png";

export default function Cisco_ccna_ico() {
  return (
    <Image
      src={ciscoCcnaIco}
      width={200}
      height={200}
      alt="ciscoCcnaIco image"
    />
  );
}
