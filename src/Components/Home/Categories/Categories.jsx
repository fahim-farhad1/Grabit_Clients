import Categorie from "./Categorie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useCategories from "../../../Hooks/useCategories";
const Categories = () => {
  const [categories] = useCategories();
  return (
    <div className="flex gap-5 mt-20 mx-10">
      <Swiper
        slidesPerView={8}
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next2", // Custom button class
          prevEl: ".swiper-button-prev2", // Custom button class
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className=""
      >
        {categories.map((category, idx) => (
          <SwiperSlide>
            <Categorie
              key={idx}
              icon={category.image}
              name={category.name}
              items={category.itemsCount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center text-xl text-primary">
        <button className="swiper-button-prev2 absolute left-24 text-wh z-10">
          <FaArrowLeftLong />
        </button>
        <button className="swiper-button-next2 absolute right-28 text-wh z-10">
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Categories;
