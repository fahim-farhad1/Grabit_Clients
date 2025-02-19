import { useParams } from "react-router";
import Container from "../../Components/Container/Container";
import useSingleProducts from "../../Hooks/useSingleProducts";
import shopingCartIcon from "../../assets/icons/shopping-cart.png";
import wishListtIcon from "../../assets/icons/heart.png";

const SingleProductsPage = () => {
  const { category, name, id } = useParams();
  const [product, isLoading] = useSingleProducts(category, name, id);
  console.log(product);
  console.log(category, name, id);
  if (isLoading) {
    return <p>Loading......</p>;
  }

  return (
    <Container>
      <section className="">
        <div className="flex gap-5 border p-3">
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
                {product.healthBenefits.map((benefits, idx) => (
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
              <button className="flex gap-2 items-center font-semibold px-5 mb-1 mt-3 rounded py-2 active:bg-[#4c9279] duration-100 bg-primary text-white">
                <img className="h-6 w-6" src={shopingCartIcon} alt="" />
                Add to Cart
              </button>
              <button className="flex gap-2 items-center font-semibold px-5 mb-1 mt-3 rounded py-2 active:bg-[#3b3c3c] duration-100 bg-secondary text-white">
                <img className="h-6 w-6" src={wishListtIcon} alt="" />
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default SingleProductsPage;
