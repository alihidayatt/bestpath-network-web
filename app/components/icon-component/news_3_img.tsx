import Image from "next/image";
import news_3_img from "./img/news_3_img.png";

export default function News_3_img() {
  return (
    <Image src={news_3_img} width={300} height={400} alt="news_3_img image" />
  );
}
