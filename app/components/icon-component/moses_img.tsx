import Image from "next/image";
import moses from "./img/moses_img.png";

export default function Moses_img() {
  return <Image src={moses} width={400} height={400} alt="moses image" />;
}
