import Adds from "../../Components/Adds/Adds";
import SmallAdds from "../../Components/Adds/smallAdds/SmallAdds";
import HomeBanner from "../../Components/Home/Banner/HomeBanner";
import Categories from "../../Components/Home/Categories/Categories";
import LeftSideHeader from "../../Components/Home/HeaderText/LeftSideHeader";
import NewArrivals from "../../Components/Home/NewArrivals/NewArrivals";
import SwiperProducts from "../../Components/Home/SwiperProducts/SwiperProducts";
import TimeCount from "../../Components/Home/TimeCount/TimeCount";

const Home = () => {
  const offerEndTime = new Date("2025-01-31T23:59:59").getTime();
  // console.log(offerEndTime)
  return (
    <div>
      <HomeBanner />
      <Categories />
      <div className="flex justify-between items-center mt-8">
        <LeftSideHeader
          headline1={"Week of the"}
          headline2={"Deal"}
          subtitle={"Don't wait. The time will never be just right."}
        />
        <TimeCount endTime={offerEndTime} />
      </div>
        <SwiperProducts />
        <Adds />
        <NewArrivals />
        <SmallAdds />
    </div>
  );
};

export default Home;
