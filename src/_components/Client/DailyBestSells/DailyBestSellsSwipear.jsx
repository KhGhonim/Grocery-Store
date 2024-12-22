"use client";
import { useEffect, useState } from "react";
import { FaShoppingBag, FaStar } from "react-icons/fa";
import { FaEye, FaHeart } from "react-icons/fa6";
import { LuBarChart2 } from "react-icons/lu";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../../Redux/services/CartSlice";
import { toast } from "react-toastify";
import "swiper/css";

export default function DailyBestSellsSwipear({ product }) {
  const [WhichSwipear, setWhichSwipear] = useState(null);
  const dispatch = useDispatch();
  const CartHandler = (product) => {
    dispatch(AddToCart(product));
    toast.success("Product added to cart");
  };

  const handleHoveringItem = (item) => {
    setWhichSwipear(item);
  };

  return (
    <div className="w-full h-full p-5 lg:p-10">
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-sells-container",
          prevEl: ".swiper-button-prev-sells-container",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-full h-full "
        onSlideChange={(swiper) => {
          setWhichSwipear(swiper.activeIndex);
        }}
      >
        {Array.isArray(product) &&
          product.map((item, i) => {
            return (
              <SwiperSlide
                key={i}
                className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 mb-5 "
                onMouseEnter={() => handleHoveringItem(i)}
                onMouseLeave={() => handleHoveringItem(null)}
              >
                {/* Discount Badge */}
                {true && (
                  <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-1 rounded-br-xl text-sm z-10">
                    {item.discount}%
                  </div>
                )}

                {/* Product Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />

                  {/* Hover Actions */}
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                      WhichSwipear === i ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button className="p-2 bg-white rounded-full hover:bg-green-500 hover:text-white transition-colors">
                      <FaEye size={20} />
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-green-500 hover:text-white transition-colors">
                      <FaHeart size={20} />
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-green-500 hover:text-white transition-colors">
                      <LuBarChart2 size={20} />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-1">
                    {item.category}
                  </div>
                  <h3 className="font-semibold text-sm text-gray-800 mb-2 hover:text-green-500 cursor-pointer">
                    {item.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center z-50">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className={`w-5 h-5 ${
                          starIndex < Math.floor(item.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Brand */}
                  <div className="text-sm text-gray-600 mb-2">
                    By {item.brand}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                      <span className="text-green-500 font-semibold">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.Fakeprice && (
                        <span className="text-gray-400 line-through text-sm">
                          ${item.Fakeprice.toFixed(2)}
                        </span>
                      )}
                  </div>
                  <button
                    onClick={() => CartHandler(item)}
                    className="flex w-full items-center gap-1 bg-green-600 text-white justify-center px-3 py-1 rounded-full hover:bg-green-500 hover:text-white transition-colors"
                  >
                    <FaShoppingBag size={16} />
                    Add
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
