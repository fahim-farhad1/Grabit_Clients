import { useContext } from "react";
import Adds from "../../Components/Adds/Adds";
import SmallAdds from "../../Components/Adds/smallAdds/SmallAdds";
import Container from "../../Components/Container/Container";
import HomeBanner from "../../Components/Home/Banner/HomeBanner";
import Categories from "../../Components/Home/Categories/Categories";
import Featured from "../../Components/Home/Featurers/featured";
import LeftSideHeader from "../../Components/Home/HeaderText/LeftSideHeader";
import NewArrivals from "../../Components/Home/NewArrivals/NewArrivals";
import SwiperProducts from "../../Components/Home/SwiperProducts/SwiperProducts";
import TimeCount from "../../Components/Home/TimeCount/TimeCount";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import useProducts from "../../Hooks/useProducts";
import Loading from "../../Components/Loading/Loading";

const Home = () => {
  const offerEndTime = new Date("2027-02-06T23:59:59").getTime();
  const [products, isLoading] = useProducts();
  const {user} = useContext(AuthContext);
  if( isLoading ) {
    return <Loading />
  }
  return (
    <Container>
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
      <SwiperProducts  products={products} idx={1} email={user?.email}/>
      <Adds />
      <Featured />
      <NewArrivals />
      <div className="flex justify-between items-center mt-8 ">
        <LeftSideHeader
          headline1={"Friday"}
          headline2={"Deal"}
          subtitle={"Don't wait. The time will never be just right."}
        />
        <TimeCount endTime={offerEndTime} />
      </div>
      <SwiperProducts products={products} idx={2} email={user?.email}/>
      <SmallAdds />
      <LeftSideHeader
        headline1={"Top Selling"}
        headline2={"Products"}
        subtitle={
          "Discover Our Best-Selling Organic Foods – Fresh, Healthy, and Loved by Many"
        }
      />
      <SwiperProducts products={products} idx={3} email={user?.email}/>
    </Container>
  );
};

export default Home;
