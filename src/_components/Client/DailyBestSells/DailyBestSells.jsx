"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiArrowDropRightLine } from "react-icons/ri";
import DailyBestSellsSwipear from "./DailyBestSellsSwipear";
import { notFound } from "next/navigation";

export default function DailyBestSells() {
  const [activeCategory, setactiveCategory] = useState("all");
  const [arrData, setstate] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("api/getProducts", {
        cache: "no-cache",
        next: { revalidate: 0 },
      });

      if (!res.ok) {
        notFound();
      }

      const data = await res.json();
      setstate(data);
    };

    getData();
  }, []);

  const filteredProducts =
    activeCategory === "all"
      ? arrData
      : arrData.filter((product) => product.catagory === activeCategory);

  return (
    <div className="w-screen h-full mt-10">
      <div className=" my-10 flex">
        <div className="hidden lg:block  w-1/5 h-full relative">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
            Daily Best Sells
          </h2>
          <Image
            width={900}
            height={900}
            quality={100}
            src="/images/banner-4.png"
            alt="slider1"
            className="rounded-2xl w-full h-full object-cover"
          />
          <div className="absolute  top-1/2  left-1/2  h-full w-full flex flex-col items-center justify-around transform -translate-x-1/2 -translate-y-1/2 ">
            <h1 className="text-base md:text-3xl 2xl:text-4xl px-5 text-black font-semibold">
              Bring Nature into your home
            </h1>
            <div className="flex items-center gap-2 w-32 z-10 cursor-pointer text-white bg-green-600 px-4 py-2 rounded-lg">
              <h1 className="text-xs md:text-sm">Shop Now</h1>
              <span>
                <RiArrowDropRightLine />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/5 h-full flex flex-col">
          <div className="w-full h-full relative flex items-start justify-around gap-5 mt-5 ">
            <div className="flex gap-5">
              <div
                className=" z-20 hidden lg:block transform -translate-y-1/2"
                aria-label="Previous Slide"
              >
                <button
                  className="w-10 h-10 p-2 cursor-pointer rounded-full border-2 border-gray-400 bg-gray-200 text-green-500 swiper-button-prev-sells-container 
                 transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white"
                >
                  <FaChevronLeft className="!h-4 !w-4 !text-base" />
                </button>
              </div>

              <div
                className=" z-20 hidden lg:block transform -translate-y-1/2"
                aria-label="Next Slide"
              >
                <button
                  className="w-10 h-10 p-2 cursor-pointer rounded-full border-2 border-gray-400 bg-gray-200 text-green-500 swiper-button-next-sells-container 
                 transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white"
                >
                  <FaChevronRight className="!h-4 !w-4 !text-base" />
                </button>
              </div>
            </div>
            <ul className="flex gap-10">
              <motion.li
                onClick={() => setactiveCategory("all")}
                whileHover={{ y: -3 }}
                className="cursor-pointer hover:text-green-500 transition-all duration-75 ease-in-out"
              >
                <h1>All</h1>
              </motion.li>
              <motion.li
                onClick={() => setactiveCategory("milk")}
                whileHover={{ y: -3 }}
                className="cursor-pointer hover:text-green-500 transition-all duration-75 ease-in-out"
              >
                <h1>Dairy</h1>
              </motion.li>
              <motion.li
                onClick={() => setactiveCategory("chicken")}
                whileHover={{ y: -3 }}
                className="cursor-pointer hover:text-green-500 transition-all duration-75 ease-in-out"
              >
                <h1>Chicken</h1>
              </motion.li>
              <motion.li
                onClick={() => setactiveCategory("fruits")}
                whileHover={{ y: -3 }}
                className="cursor-pointer hover:text-green-500 transition-all duration-75 ease-in-out"
              >
                <h1>Fruits</h1>
              </motion.li>
              <motion.li
                onClick={() => setactiveCategory("vegetables")}
                whileHover={{ y: -3 }}
                className="cursor-pointer hover:text-green-500 transition-all duration-75 ease-in-out"
              >
                <h1>Vegetables</h1>
              </motion.li>
            </ul>
          </div>

          <DailyBestSellsSwipear product={filteredProducts} />
        </div>
      </div>
    </div>
  );
}
