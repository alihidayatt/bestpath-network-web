import Image from "next/image";
import logo_forweb from "./icon/web_logo.svg";

export default function Logo_forweb({
  widthLogo,
  heightLogo,
}: {
  widthLogo: any;
  heightLogo: any;
}) {
  return (
    <Image
      src={logo_forweb}
      width={widthLogo}
      height={heightLogo}
      alt="logo_forweb image"
    />
  );
}
