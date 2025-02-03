import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ProductsCard from "../../Cards/ProductsCard";

const SwiperProducts = ({products}) => {
  console.log(products);
  return (
    <div className=" rounded px-5 py-5 bg-white">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next3", // Custom button class
          prevEl: ".swiper-button-prev3", // Custom button class
        }}
        modules={[Pagination, Navigation, Autoplay]}
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
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev3 absolute left-20 text-white bg-primary px-2 py-6 rounded z-10 -mt-48">
        <FaArrowLeftLong />
      </button>
      <button className="swiper-button-next3 absolute right-20 text-white bg-primary px-2 py-6 rounded z-10 -mt-48">
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default SwiperProducts;
