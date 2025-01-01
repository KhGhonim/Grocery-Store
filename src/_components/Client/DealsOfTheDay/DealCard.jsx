"use client";
import { TiShoppingCart } from "react-icons/ti";
import CountdownTimer from "./CountdownTimer";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../../Redux/services/CartSlice";
import { toast } from "react-toastify";

export default function DealCard({
  image,
  name,
  brand,
  price,
  originalPrice,
  endTime,
}) {
  const dispatch = useDispatch();

  const HandlerAddToCart = (name, image, price, originalPrice, brand) => {
    dispatch(AddToCart({ name, image, price, originalPrice, brand }));
    toast.success("Product added to cart");
  };

  return (
    <div className="bg-white relative h-80 w-80 2xl:h-96 2xl:w-96 shadow-md group rounded-3xl overflow-hidden">
      <div className="relative w-full h-full rounded-3xl">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          quality={100}
          className="w-full h-full object-cover rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <CountdownTimer endTime={endTime} />
      </div>
      <div className="p-4 absolute group-hover:top-1/2 transition-all duration-500 ease-in-out top-3/4 2xl:top-2/3 left-1/2 w-full transform -translate-x-1/2 bg-white/70 backdrop-blur-sm rounded-lg">
        <h3 className="font-semibold text-gray-800 hover:text-green-500 cursor-pointer">
          {name}
        </h3>
        <div className="text-sm text-gray-600 mt-1">By {brand}</div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className="text-green-500 font-semibold">
              ${price.toFixed(2)}
            </span>
            <span className="text-gray-400 line-through text-sm">
              ${originalPrice.toFixed(2)}
            </span>
          </div>
          <button
            onClick={() =>
              HandlerAddToCart(name, image, price, originalPrice, brand)
            }
            className="flex items-center gap-1 bg-green-100 text-green-600 px-6 py-2 rounded-full hover:bg-green-500 hover:text-white transition-colors"
          >
            <TiShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
