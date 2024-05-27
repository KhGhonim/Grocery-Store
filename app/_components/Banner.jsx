import Image from "next/image";

export default function Banner() {
  return (
    <div>
      <Image
        src={"/images/banner.png"}
        alt={"Banner Image"}
        width={2500}
        height={2500}
        quality={100}
        priority={true}
      />
    </div>
  );
}
