import React from "react";

const GrowthStats = () => {
  return (
    <div className="flex justify-between gap-5 my-10">
      <div className="border shadow py-5 px-3 text-center  hover:bg-[#E7EFF3] duration-200 hover:shadow-xl hover:text-primary">
        <p className="text-4xl text-primary font-bold">10+</p>
        <p className="text-xl text-secondary font-semibold">Category</p>
        <p className="">
          We offer a diverse range of organic food categories, carefully
          selected for your health and well-being.
        </p>
      </div>
      <div className="border shadow py-5 px-3 text-center  hover:bg-[#E7EFF3] duration-200 hover:shadow-xl hover:text-primary">
        <p className="text-4xl text-primary font-bold">100+</p>
        <p className="text-xl text-secondary font-semibold">Products</p>
        <p className="">
          Discover our premium organic products, grown with care and free from
          harmful chemicals.
        </p>
      </div>
      <div className="border shadow py-5 px-3 text-center  hover:bg-[#E7EFF3] duration-200 hover:shadow-xl hover:text-primary">
        <p className="text-4xl text-primary font-bold">1k+</p>
        <p className="text-xl text-secondary font-semibold">Sold</p>
        <p className="">
          Thousands of happy customers have enjoyed our fresh, organic products.
          Join the movement today!
        </p>
      </div>
      <div className="border shadow py-5 px-3 text-center  hover:bg-[#E7EFF3] duration-200 hover:shadow-xl hover:text-primary">
        <p className="text-4xl text-primary font-bold">925+</p>
        <p className="text-xl text-secondary font-semibold">Users</p>
        <p className="">
          Join our ever-expanding family of organic food enthusiasts who believe
          in healthy living.
        </p>
      </div>
    </div>
  );
};

export default GrowthStats;
