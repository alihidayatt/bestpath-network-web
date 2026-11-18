import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="site-logo" aria-label="Bestpath Network home">
      <Image src="/logo-forweb.svg" width={2134} height={2134} alt="Bestpath Network" />
    </Link>
  );
}
