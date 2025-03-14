import React from "react";
import LeftSideHeader from "../../Home/HeaderText/LeftSideHeader";
import useWishlist from "../../../Hooks/useWishlist";
import WishlistCart from "./WishlistCart";
import Loading from "../../Loading/Loading";
import useLocalStorage from "../../../Hooks/useLocalStorage";
import { ShimmerTitle } from "react-shimmer-effects";
import ShimmerMiniCarts from "../../Loading/ShimmerEffercts/ShimmerMiniCarts";

const WishList = () => {
  const [, wishlist, isLoading] = useWishlist();
  const [value, , removeProducts] = useLocalStorage("ProductIds", []);
  console.log(wishlist);
  if (isLoading) {
    return  <Loading />;
  }
  return (
    <div className="w-full shadow-sm bg-white rounded border p-3">
      <LeftSideHeader headline1={"My"} headline2={"WishList"} />
      <p className="text-secondary">You have {wishlist?.productId?.length || value?.length} products in wishlist</p>
      <div>
        {!wishlist?.productId
          ? value.map((item) => <WishlistCart key={item} id={item} isRemove={removeProducts} />)
          : wishlist?.productId?.map((item) => (
              <WishlistCart key={item} id={item} />
            ))}
      </div>
    </div>
  );
};

export default WishList;
