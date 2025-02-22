import { Link } from "react-router";
import shopingCartIcon from "../../assets/icons/shopping-cart.png";
import useUsers from "../../Hooks/useUsers";
import usePostCard from "../../Hooks/usePostCard";

const ProductsCard = ({
  img,
  name,
  weight,
  price,
  stock,
  id,
  category,
  email,
  slug
}) => {
  const [mutation] = usePostCard();
  const [users] = useUsers(email);
  console.log(users.email);
  const handleAddToCart = (id) => {
    const cartInfo = {
      userEmail: users.email,
      productId: id
    };
    mutation(cartInfo);

  };

  return (
    <div className="w-[220px]  h-[420px] text-center border rounded group">
      <div className=" overflow-hidden transition-all duration-500 ease-in-out relative">
        <img className="h-[250px] w-[220px] border" src={img} alt={name} />
        <button
          onClick={() => handleAddToCart(id)}
          className={`${
            stock == 0
              ? "hidden"
              : "flex gap-1 items-center justify-center w-full absolute left-0 translate-y-0 transition-all duration-300 ease-in-out group-hover:-translate-y-10 py-2 active:bg-[#4c9279] font-semibold  bg-primary/75   text-white  opacity-0 group-hover:opacity-100"
          }`}
        >
          <img className="h-5 w-5" src={shopingCartIcon} alt="" />
          Add to Cart
        </button>
      </div>
      {/* <ReactImageZoom {...props} /> */}
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
      <Link to={`${category}/${slug}/${id}`}>
        <button className="px-10 mb-1 mt-3 rounded py-2  active:bg-[#4c9279] duration-100 bg-primary text-white">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default ProductsCard;
