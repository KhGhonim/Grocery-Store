import { fixedCards } from "../../../DB/db";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function FixedCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[--background-color] p-2 place-items-center gap-6">
      {fixedCards.map((card, i) => {
        return (
          <Link
            key={i}
            className="relative w-full h-full rounded-3xl"
            href={`Search?q=${card.link}`}
          >
            <Image
              src={card.image}
              alt="Image 1"
              width={500}
              height={500}
              quality={100}
              priority={true}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute left-10 top-1/3 space-y-4">
              <h1 className="text-base md:text-2xl font-semibold text-black w-60 ">
                {card.name}
              </h1>
              <button className="bg-green-600 text-sm md:text-base text-white transition-all duration-300 ease-in-out px-6 py-2 rounded-lg flex justify-center items-center text-center hover:bg-green-700">
                Shop Now!
                <span>
                  {" "}
                  <FaArrowRight className="ml-2 text-xs" />{" "}
                </span>
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
