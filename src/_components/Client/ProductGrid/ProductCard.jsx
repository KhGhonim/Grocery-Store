"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="bg-white p-3 flex cursor-pointer transition-all duration-75 ease-in-out"
    >
      <div className="w-1/3 h-full mr-3">
        <Image
          width={500}
          height={500}
          quality={100}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-sm lg:text-lg font-bold text-gray-800 ">
          {product.name}
        </h3>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, starIndex) => (
            <FaStar
              key={starIndex}
              className={`w-5 h-5 ${
                starIndex < Math.floor(product.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-green-500 font-bold mt-2">${product.price}</p>
          <p className="text-gray-300 line-through ">${product.Fakeprice}</p>
        </div>
      </div>

    </motion.div>
  );
}
