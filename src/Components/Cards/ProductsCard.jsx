import React from "react";

const ProductsCard = ({ img, name, weight, price, stock }) => {
  console.log(stock);
  return (
    <div className="w-[220px] h-[370px] text-center border rounded">
      <img className="h-[200px] w-[220px] border" src={img} alt={name} />
      <p className="text-lg text-secondary font-semibold">{name}</p>
      <p className="text-secondary font-semibold">{weight}</p>
      <div className="flex justify-center gap-3 text-secondary ">
        <p className="font-semibold">Tk {price}</p>
        <p className="line-through text-red-500">Tk {price}</p>
      </div>
      {stock > 0 ? (
        <>
          {stock < 10 ? (
            <p className="text-sm text-red-400">Only {stock} items available</p>
          ) : (
            <p className="text-sm text-primary">Products in stock</p>
          )}
        </>
      ) : (
        <p className="text-sm text-red-500">Out of stock</p>
      )}
      <button className={`${stock == 0 ? "disable" : "px-10 mb-1 mt-3 rounded py-2 hover:px-12 hover:py-3 active:bg-[#4c9279] duration-100 bg-primary text-white"}`}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductsCard;
