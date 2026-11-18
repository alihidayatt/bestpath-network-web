import Image from "next/image";
import Link from "next/link";

export default function Logo_old() {
  return (
    <Link href="/" className="block">
      <Image
        src="/logo-forweb.svg"
        alt="Logo"
        width={170}
        height={74}
        className="relative w-[150px] h-[45px] lg:w-[170px] lg:h-[74px]"
      />
    </Link>
  );
}
