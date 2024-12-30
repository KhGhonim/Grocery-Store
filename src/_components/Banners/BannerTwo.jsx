import Image from "next/image";
export default function BannerTwo() {
  return (
    <div className="overflow-x-hidden w-full h-[25rem] relative">
      <div>
        <Image
          src={"/images/banner-10-min.png"}
          className="absolute inset-0 z-0 w-full h-full object-cover"
          alt={"Banner Image"}
          width={2500}
          height={2500}
          quality={100}
          priority={true}
        />

        <Image
          src={"/images/banner-9-min.png"}
          alt={"Banner 2 "}
          className="absolute w-full h-96 bottom-0 lg:w-1/2 lg:h-full  right-0 lg:bottom-0  object-cover z-0  "
          width={1000}
          height={1000}
          quality={100}
          priority={true}
        />

        <div className="absolute text-start top-10 lg:top-1/4 left-10 z-20 w-1/2 space-y-10">
          <h1 className="text-2xl ml-3 xl:text-5xl font-bold text-green-600">
            Stay home & get your daily needs from our shop
          </h1>
          <h2 className="text-lg xl:text-4xl pl-4 font-semibold text-gray-500">
            Start Your Daily Shopping with Us!
          </h2>
          <div className="relative w-full lg:ml-10 lg:w-4/6">
            <input
              type="text"
              placeholder="Your Email Address"
              className="p-4 rounded-3xl border outline-none w-full"
            />
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-600 text-white p-4 rounded-3xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
