import Image from "next/image";
import news_2_img from "./img/news_2_img.png";

export default function News_2_img() {
  return (
    <Image src={news_2_img} width={300} height={400} alt="news_2_img image" />
  );
}
