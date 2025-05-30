import useWishListProducts from "../../../Hooks/useWishListProducts";
import Loading from "../../Loading/Loading";
import shopingCartIcon from "../../../assets/icons/shopping-cart.png";
import deleteIcon from "../../../assets/icons/delete.png";
import Swal from "sweetalert2";
import useUsers from "../../../Hooks/useUsers";
import usePostCard from "../../../Hooks/usePostCard";
import usePatchWishList from "../../../Hooks/usePatchWishList";
import ShimmerMiniCarts from "../../Loading/ShimmerEffercts/ShimmerMiniCarts";

const WishlistCart = ({ id, isRemove }) => {
  const [wishListProducts, isLoading] = useWishListProducts(id, 'wishlist');
  const [users] = useUsers();
  const [mutation] = usePostCard();
  const [removeProduct] = usePatchWishList();
  console.log(wishListProducts);
  const { name, price, discount, images, category, stock } = wishListProducts;

  if (isLoading) {
    return <ShimmerMiniCarts />;
  }
  const handelCart = (id) => {
    if (users?.email) {
      const cartInfo = {
        userEmail: users?.email,
        productId: id,
      };
      mutation(cartInfo);
    } else {
      Swal.fire({
        title: "Login Required",
        text: "Please Login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#5CAF90",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
    // remove products
  };
  const handleRemove = (id) => {
    if (!users?.email) {
      isRemove(id);
    } else {
      const wishlistInfo = {
        productId: id,
        userEmail: users?.email,
      };
      removeProduct(wishlistInfo);
    }
  };
  return (
    <div className=" border-b border-primary flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <img className="h-[200px] w-[150px]" src={images[0]} alt="" />
        <div>
          <h1 className="text-xl font-semibold text-secondary">{name}</h1>
          <h2 className="font-semibold text-secondary">{category}</h2>
          <span className="flex gap-2 text-secondary">
            <p>TK. {price}</p>{" "}
            <p className="line-through text-red-500">TK.{price}</p>
          </span>
          <span>
            {stock > 0 ? (
              <>
                {stock < 10 ? (
                  <p className="text-sm text-red-400">
                    Only {stock} items available
                  </p>
                ) : (
                  <p className="text-sm text-primary">Products in stock</p>
                )}
              </>
            ) : (
              <p className="text-sm text-red-500">Out of stock</p>
            )}
          </span>
          <button
            onClick={() => handelCart(id)}
            className={`${
              stock != 0
                ? "flex gap-2 items-center font-semibold px-5 mb-1 mt-3 rounded py-2 active:bg-[#4c9279] duration-100 bg-primary text-white border border-primary"
                : "hidden"
            }`}
          >
            <img className="h-6 w-6" src={shopingCartIcon} alt="" />
            Add to Cart
          </button>
        </div>
      </div>
      <button className="flex " onClick={() => handleRemove(id)}>
        <img className="h-6 w-6" src={deleteIcon} alt="" />
      </button>
    </div>
  );
};

export default WishlistCart;
