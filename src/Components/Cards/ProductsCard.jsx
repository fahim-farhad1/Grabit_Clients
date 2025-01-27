import React from "react";

const ProductsCard = ({ img, name, weight, price }) => {
  return (
    <div className=" w-[220px] h-[350px] text-center border rounded">
      <img className="h-[200px] w-[220px]" src={img} alt={name} />
      <p className="text-lg text-secondary font-semibold">{name}</p>
      <p className="text-primary">{weight}</p>
      <div className="flex justify-center gap-3 text-primary">
        <p>Tk {price}</p>
        <p className="line-through text-secondary">Tk {price}</p>
      </div>
      <button className="px-10 mb-1 mt-3 rounded py-2 hover:px-12 hover:py-3 active:bg-[#4c9279] duration-100 bg-primary text-white">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductsCard;
