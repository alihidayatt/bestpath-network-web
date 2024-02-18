import Image from "next/image";
import ciscoCcnpIco from "./icon/cisco_ccnp_ico.png";

export default function Cisco_ccnp_ico() {
  return (
    <Image
      src={ciscoCcnpIco}
      width={200}
      height={200}
      alt="ciscoCcnpIco image"
    />
  );
}
