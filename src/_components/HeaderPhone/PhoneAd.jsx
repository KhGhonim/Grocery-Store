import Image from "next/image";

export default function PhoneAd() {
  return (
    <div className="lg:hidden h-20 w-screen text-center flex items-center justify-center relative">
      <Image
        src="/images/PhoneNoticeHeader.jpg"
        alt="phoneAd"
        width={375}
        height={60}
        priority={true}
        quality={100}
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />
      <h1 className="text-black text-lg  font-bold z-10">
        Get 10% off on your first order
      </h1>
    </div>
  );
}
