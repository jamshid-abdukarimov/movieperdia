import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/logo.svg" alt="logo" width={30} height={30} />
      <h2 className="heading4 text-white-800">MOVIEPEDIA</h2>
    </Link>
  );
};

export default Logo;
