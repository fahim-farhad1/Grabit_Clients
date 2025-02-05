import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import useTeamMembers from "../../Hooks/useTeamMembers";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TeamMeamberSwiper = () => {
  const [teamMembers] = useTeamMembers();
  return (
    <div className="mt-10">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay]}
      >
        {teamMembers.map((teamMember, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center">
              <img
                src={teamMember.image}
                alt={teamMember.name}
                className="h-[235px] w-[235px] rounded hover:scale-105 transition-transform hover:my-2"
              />
              <p className="text-xl text-secondary font-semibold">
                {teamMember.name}
              </p>
              <p className="text-sm">{teamMember.role}</p>
            </div>
          </SwiperSlide>
        ))}

        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TeamMeamberSwiper;
