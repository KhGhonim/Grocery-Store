"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AddToCart } from "../Redux/services/CartSlice";

export default function SharedCard() {
  const [arrData, setstate] = useState([]);
  const dispatch = useDispatch();

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

  if (!arrData || arrData.length === 0) {
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto animate-pulse">
          <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

          <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="w-full ">
              <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

              <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
              <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

              <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>

            <div className="w-full ">
              <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

              <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
              <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="flex justify-around flex-wrap max-sm:items-center gap-2 h-full mb-5">
      {arrData.map((item) => {
        return (
          <div
            key={item.image}
            className="flex flex-col items-center justify-between p-2 max-sm:w-[270px] md:w-[350px]  border border-s my-5 transition-transform duration-300 shadow-md hover:shadow-lg rounded-lg"
          >
            <Image
              src={item.image}
              alt={item.name}
              quality={100}
              width={100}
              height={100}
              className=" w-32 hover:scale-110 transition-transform duration-200"
            />
            <h1 className=" font-extrabold my-2">{item.name}</h1>
            <div className="flex justify-evenly items-center gap-4 flex-row text-center  w-full">
              <h1 className=" font-extrabold">${item.price}</h1>
              <h1 className=" font-normal line-through ">${item.Fakeprice}</h1>
            </div>

            <button
              onClick={() => {
                dispatch(AddToCart(item));
              }}
              type="submit"
              className=" font-medium text-white  bg-green-600 hover:bg-green-700 transition-transform duration-200 p-3 rounded-full m-3 flex justify-center items-center gap-2"
            >
              Add To Cart{" "}
              <span>
                <MdAddShoppingCart />
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
