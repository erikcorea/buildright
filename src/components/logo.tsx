import Image from "next/image";
import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={dark ? "/images/logo-white.png" : "/images/logo.png"}
        alt="BuildRight Co. — General Construction & Remodeling"
        width={817}
        height={508}
        priority
        className="h-16 w-auto sm:h-20"
      />
    </Link>
  );
}
