import React from "react";
import SmallAdd from "./SmallAdd";
import bannerImage1 from "../../../assets/banner/2.jpg";
import bannerImage2 from "../../../assets/banner/3.jpg";

const SmallAdds = () => {
  return (
    <div className="flex justify-between gap-8 my-10">
      <SmallAdd
        bannnerImage={bannerImage1}
        headline={"Tasty Snack & Fastfood"}
        subtitle={"The flavor of something special"}
      />
      <SmallAdd
        bannnerImage={bannerImage2}
        headline={"Fresh Fruits & veggies"}
        subtitle={"A healthy meal for every one"}
      />
    </div>
  );
};

export default SmallAdds;
