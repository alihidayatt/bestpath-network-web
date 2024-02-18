import Image from "next/image";
import news_1_img from "./img/news_1_img.png";

export default function News_1_img() {
  return (
    <Image src={news_1_img} width={300} height={400} alt="news_1_img image" />
  );
}
