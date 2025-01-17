import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components from 'swiper/react'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import "./Homebanner.css";
import bannner1 from "../../../assets/banner/1.jpg";
import bannner2 from "../../../assets/banner/2.jpg";
import bannner3 from "../../../assets/banner/3.jpg";
import bannner4 from "../../../assets/banner/5.jpg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const HomeBanner = () => {
  return (
    <div className="relative mt-5">
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
        }}
        navigation={{
          nextEl: ".swiper-button-next", // Custom button class
          prevEl: ".swiper-button-prev", // Custom button class
        }}
        pagination={{
          el: ".custom-pagination", // Specify the custom pagination container
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} custom-bullet"></span>`,
        }}
      >
        {/* Slides */}
        <SwiperSlide>
          <div
            className="w-full h-[500px] bg-cover"
            style={{ backgroundImage: `url(${bannner1})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[500px] bg-cover"
            style={{ backgroundImage: `url(${bannner2})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[500px] bg-cover"
            style={{ backgroundImage: `url(${bannner3})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[500px] bg-cover"
            style={{ backgroundImage: `url(${bannner4})` }}
          ></div>
        </SwiperSlide>
      </Swiper>
      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev absolute -mt-20 left-10 top-2/3 text-white bg-primary p-3 rounded-full z-10">
        <FaArrowLeftLong />
      </button>
      <button className="swiper-button-next absolute -mt-20 right-10 top-2/3 text-white bg-primary p-3 rounded-full z-10">
        <FaArrowRightLong />
      </button>
      {/* Custom Pagination Container */}
      <div className="custom-pagination absolute top-[500px] left-[600px] z-10"></div>
    </div>
  );
};

export default HomeBanner;
