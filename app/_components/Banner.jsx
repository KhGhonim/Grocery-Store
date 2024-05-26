import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div>
      <Image
        src={"/images/banner.png"}
        alt={"Banner Image"}
        fill
        quality={100}
        priority={true}
      />
    </div>
  );
}
