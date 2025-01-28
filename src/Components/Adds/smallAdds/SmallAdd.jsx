import React from "react";

const SmallAdd = ({ bannnerImage, headline, subtitle, discount }) => {
  return (
    <div
      className={"w-full bg-cover h-[300px] rounded"}
      style={{ backgroundImage: `url(${bannnerImage})` }}
    >
        <p className="bg-secondary px-2 rounded mt-5 ml-5 w-16 text-white">{discount}% off</p>
      <div className=" flex flex-col pl-[350px] pr-20 justify-center h-full space-y-3 -mt-10">
        <p className="text-4xl text-start text-secondary font-semibold w-[200px]">{headline}</p>
        <p className="text-lg text-start w-[180px]">{subtitle}</p>
        <button className="bg-primary px-3 py-2 rounded text-white w-28">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default SmallAdd;
