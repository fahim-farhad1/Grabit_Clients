import Categorie from "./Categorie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import useCategories from "../../../Hooks/useCategories";
const Categories = () => {
  const [categories] = useCategories();
  return (
    <div className="flex gap-5 mt-20">
      <Swiper
        slidesPerView={8}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className=""
      >
        {categories.map((category, idx) => (
          <SwiperSlide key={idx}>
            <Categorie
              key={idx}
              icon={category.image}
              name={category.name}
              items={category.itemsCount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
