import Image from "next/image";
import juniperIco from "./icon/juniper_ico.png";

export default function Juniper_ico() {
  return (
    <Image src={juniperIco} width={200} height={200} alt="juniperIco image" />
  );
}
