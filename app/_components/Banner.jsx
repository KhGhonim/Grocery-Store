import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div>
      <Image
        src={"/images/banner.png"}
        alt={"Banner Image"}
        width={1500}
        height={1500}
        quality={100}
        priority={true}
      />
    </div>
  );
}
