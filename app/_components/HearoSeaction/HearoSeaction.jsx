"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

export default function HearoSeaction() {
  return (
    <div>
      <div className=" min-w  px-5 my-9  ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-2xl"
        >
          {/* Desktop Images */}
          <SwiperSlide className="!hidden md:!block ">
            <img src="/slider/slider1.png" alt="slider1" className="rounded-2xl" />
          </SwiperSlide>
          <SwiperSlide className="!hidden md:!block ">
            <img src="/slider/slider2.jpg" alt="slider2 " />
          </SwiperSlide>
          
          {/* Mobile Images */}
          <SwiperSlide className="block md:!hidden ">
            <img src="/slider/PhoneSlider1.jpeg" alt="slider1" className="" />
          </SwiperSlide>
          <SwiperSlide className="block md:!hidden ">
            <img src="/slider/PhoneSlider2.jpeg" alt="slider2" />
          </SwiperSlide>
          <SwiperSlide className="block md:!hidden ">
            <img src="/slider/PhoneSlider3.jpeg" alt="slider3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
