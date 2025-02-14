import ProductsCard from "../../Cards/ProductsCard";
import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperProducts = ({ products }) => {
  return (
    <div className=" rounded px-5 py-5 bg-white">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next3", // Custom button class
          prevEl: ".swiper-button-prev3", // Custom button class
        }}
        modules={[Pagination, Navigation]}
        className=""
      >
        {products.map((singleProducts, idx) => (
          <SwiperSlide key={idx}>
            <ProductsCard
              key={idx}
              img={singleProducts.images[0]}
              name={singleProducts.name}
              weight={singleProducts.weight}
              price={singleProducts.price}
              stock={singleProducts.stock}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <button
        className={`${
          products.length != 0 ? "block" : "hidden"
        } swiper-button-prev3 absolute left-20 text-white bg-primary px-2 py-6 rounded z-10 -mt-48`}
      >
        <FaArrowLeftLong />
      </button>
      <button
        className={`${
          products.length != 0 ? "block" : "hidden"
        } swiper-button-next3 absolute right-20 text-white bg-primary px-2 py-6 rounded z-10 -mt-48`}
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default SwiperProducts;
