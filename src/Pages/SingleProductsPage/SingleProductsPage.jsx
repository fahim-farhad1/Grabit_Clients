import {
  Navigate,
  replace,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import Container from "../../Components/Container/Container";
import useSingleProducts from "../../Hooks/useSingleProducts";
import shopingCartIcon from "../../assets/icons/shopping-cart.png";
import wishListtIcon from "../../assets/icons/heart.png";
import Loading from "../../Components/Loading/Loading";
import useUsers from "../../Hooks/useUsers";
import usePostwishList from "../../Hooks/usePostwishList";
import usePostCard from "../../Hooks/usePostCard";
import useLocalStorage from "../../Hooks/useLocalStorage";
import Swal from "sweetalert2";
import React from "react";

const SingleProductsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, name, id } = useParams();
  const [product, isLoading] = useSingleProducts(category, name, id);
  const [users] = useUsers();
  const [mutation] = usePostCard();
  const [mutationWishlist] = usePostwishList();
  const [, addProducts, ,] = useLocalStorage("ProductIds", []);
  // const [productsValue, setProductsValue] = useState([]);

  if (isLoading) {
    return <Loading />;
  }

  console.log(users);
  const handleWishlist = (id) => {
    if (users?.email) {
      const wishListInfo = {
        userEmail: users?.email,
        productId: id,
      };
      mutationWishlist(wishListInfo);
    } else {
      addProducts(id); // এখন কাজ করবে
      console.log("Local Storage Updated:", localStorage.getItem("cart")); // Check localStorage value
    }
  };

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
  };

  //localstorage

  return (
    <Container>
      <section className="">
        <div className="flex gap-5 p-3">
          <img
            className="h-[400px] w-[400px]"
            src={product?.images?.[0]}
            alt="Products"
          />
          <div className="space-y-3">
            <p className="text-3xl font-semibold text-secondary">
              {product.name}
            </p>
            <p className="text-lg font-semibold text-secondary">
              {product.weight}
            </p>
            <span className="text-xl text-primary font-semibold flex gap-3 items-center">
              <span className="line-through text-red-500 font-normal">
                TK.{product.price}
              </span>
              TK. {product.price}
              <p className="text-lg">
                you save TK. {product.price} ({product.price})
              </p>
            </span>
            <div>
              <p className="text-secondary font-semibold">
                Health and Benefits:
              </p>
              <ul>
                {product?.healthBenefits?.map((benefits, idx) => (
                  <li key={idx} className="font-normal text-secondary">
                    {benefits}
                  </li>
                ))}
              </ul>
            </div>
            {product.stock > 0 ? (
              <>
                {product.stock < 10 ? (
                  <p className="text-sm text-red-400">
                    Only {product.stock} items available
                  </p>
                ) : (
                  <p className="text-sm text-primary">Products in stock</p>
                )}
              </>
            ) : (
              <p className="text-sm text-red-500">Out of stock</p>
            )}

            <div className="flex gap-5">
              <button
                onClick={() => handelCart(product._id)}
                className={`${
                  product.stock != 0
                    ? "flex gap-2 items-center font-semibold px-5 mb-1 mt-3 rounded py-2 active:bg-[#4c9279] duration-100 bg-primary text-white"
                    : "hidden"
                }`}
              >
                <img className="h-6 w-6" src={shopingCartIcon} alt="" />
                Add to Cart
              </button>
              <button
                onClick={() => handleWishlist(product._id)}
                className={`${
                  product.stock != 0
                    ? "flex gap-2 items-center font-semibold px-5 mb-1 mt-3 rounded py-2 active:bg-[#3b3c3c] duration-100 bg-secondary text-white"
                    : "hidden"
                }`}
              >
                <img className="h-6 w-6" src={wishListtIcon} alt="" />
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* products details  */}
      <hr />
      <section className="mt-10 space-y-3">
        <p className="text-primary font-semibold text-2xl">Descriptions</p>
        <p>{product.description}</p>
        <p>
          <span className="font-semibold text-secondary">Products Type:</span>{" "}
          {product.category}
        </p>
        <p>
          <span className="font-semibold text-secondary">Category:</span>{" "}
          {product.category}
        </p>
        <p>
          <span className="font-semibold text-secondary">manufacturer:</span>{" "}
          {product.manufacturer.name}
        </p>
        <p>
          <span className="font-semibold text-secondary">
            Health and benefits of {product.name}: <br />
          </span>{" "}
          {product.healthBenefits.map((benefits, idx) => (
            <li key={idx} className="font-normal text-secondary">
              {benefits}
            </li>
          ))}
        </p>
      </section>
    </Container>
  );
};

export default SingleProductsPage;
