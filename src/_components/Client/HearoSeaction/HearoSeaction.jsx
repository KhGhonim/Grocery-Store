"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HearoSeaction() {
  return (
    <div className="max-lg:pt-14 bg-[--background-color]">
      <div className="w-screen h-full px-5 py-9  ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper rounded-2xl relative"
        >
          {/* Desktop Images */}
          <SwiperSlide className="!hidden md:!block relative ">
            <Image
              width={900}
              height={500}
              quality={100}
              src="/images/slider-1-min.png"
              alt="slider1"
              className="rounded-2xl"
            />
            <div className="absolute text-start top-1/4 left-10 space-y-10">
              <h1 className="text-5xl ml-3 2xl:text-6xl font-bold text-green-600">
                Welcome to Grocery Store
              </h1>
              <h2 className="text-3xl 2xl:text-4xl pl-4 font-semibold text-gray-500">
                Save up to 50% off on your first order
              </h2>
              <div className="relative ml-10 w-4/6">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="p-4 rounded-3xl border outline-none w-full"
                />
                <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-600 text-white py-3 px-4 rounded-3xl">
                  Subscribe
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!hidden md:!block ">
            <Image
              width={900}
              height={500}
              quality={100}
              src="/images/slider-2-min.png"
              alt="slider2 "
            />
            <div className="absolute text-start top-1/4 left-10 space-y-10">
              <h1 className="text-5xl ml-3 2xl:text-6xl font-bold text-green-600">
                Fresh Vegetables Arrives Daily!
              </h1>
              <h2 className="text-3xl 2xl:text-4xl pl-4 font-semibold text-gray-500">
                Save up to 50% off on your first order
              </h2>
              <div className="relative ml-10 w-4/6">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="p-4 rounded-3xl border outline-none w-full"
                />
                <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-600 text-white py-3 px-4 rounded-3xl">
                  Subscribe
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Mobile Images */}
          <SwiperSlide className="block md:!hidden ">
            <Image
              width={900}
              height={500}
              src="/slider/PhoneSlider1.jpeg"
              alt="slider1"
              className=""
            />
          </SwiperSlide>
          <SwiperSlide className="block md:!hidden ">
            <Image
              width={900}
              height={500}
              src="/slider/PhoneSlider2.jpeg"
              alt="slider2"
            />
          </SwiperSlide>
          <SwiperSlide className="block md:!hidden ">
            <Image
              width={900}
              height={500}
              src="/slider/PhoneSlider3.jpeg"
              alt="slider3"
            />
          </SwiperSlide>
        </Swiper>
        <div
          className="absolute top-1/2 left-7 z-20 hidden lg:block transform -translate-y-1/2"
          aria-label="Previous Slide"
        >
          <button
            className="w-10 h-10 p-2 cursor-pointer rounded-full border-2 border-gray-400 bg-gray-200 text-green-500 swiper-button-prev 
               transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white"
          >
            <FaChevronLeft className="!h-4 !w-4 !text-base" />
          </button>
        </div>

        <div
          className="absolute top-1/2 right-5 z-20 hidden lg:block transform -translate-y-1/2"
          aria-label="Next Slide"
        >
          <button
            className="w-10 h-10 p-2 cursor-pointer rounded-full border-2 border-gray-400 bg-gray-200 text-green-500 swiper-button-next 
               transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white"
          >
            <FaChevronRight className="!h-4 !w-4 !text-base" />
          </button>
        </div>
      </div>
    </div>
  );
}
