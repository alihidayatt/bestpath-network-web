import Image from "next/image";
import pins from "./icon/pins_ico.webp";

export default function Pins_ico() {
  return <Image src={pins} width={200} height={200} alt="pins image" />;
}
