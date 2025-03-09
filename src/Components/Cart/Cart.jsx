import { ShimmerButton, ShimmerTitle } from "react-shimmer-effects";
import useWishListProducts from "../../Hooks/useWishListProducts";
import ShimmerMiniCarts from "../Loading/ShimmerEffercts/ShimmerMiniCarts";
import deleteIcon from "../../assets/icons/delete.png";
import useUsers from "../../Hooks/useUsers";
import usePatchCart from "../../Hooks/usePatchCart";

const Cart = ({ id }) => {
  const [wishListProducts, isLoading] = useWishListProducts(id, "cart");
  const { name, price, weight, images } = wishListProducts;
  
  const [users] = useUsers();
  const [removeProduct] = usePatchCart();


  const handleRemove = (id) => {
    const cartInfo = {
      productId: id,
      userEmail: users?.email,
    };
    removeProduct(cartInfo);
  };

  if (isLoading) {
    return <ShimmerMiniCarts />;
  }
  return (
    <div className="flex justify-between items-center border rounded">
      <img className="h-20 w-20" src={images[0]} alt="" />
      <div>
        <p className="text-secondary font-semibold">{name}</p>
        <span className="flex space-x-1">
          <p className="text-secondary">Price: {price}</p> <p>x</p>
          <p className="text-secondary">{weight}</p>
        </span>
      </div>
      <div>
        <button className="flex " onClick={() => handleRemove(id)}>
          <img className="h-6 w-6" src={deleteIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
