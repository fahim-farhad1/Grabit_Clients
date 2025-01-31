import React, { useEffect, useMemo, useRef, useState } from "react";
import LeftSideHeader from "../HeaderText/LeftSideHeader";
import useProducts from "../../../Hooks/useProducts";
import ProductsCard from "../../Cards/ProductsCard";

const NewArrivals = () => {
  const [products] = useProducts();
  const [updatedProducts, setUpdatedProducts] = useState([]);
  // Memoize the calculation of recentProducts
  const recentProducts = useMemo(() => {
    const today = new Date(); // Calculate today's date
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);
    return products.filter((product) => {
      const uploadDate = new Date(product.uploadDate); // Convert uploadDate to Date object
      return uploadDate >= sevenDaysAgo && uploadDate <= today; // Check date range
    });
  }, [products]); // Recalculate only when `products` changes

  // Update updatedProducts only when recentProducts changes
  useEffect(() => {
    setUpdatedProducts(recentProducts);
  }, [recentProducts]); // Dependency is stable as long as `products` doesn't change

  console.log(updatedProducts);
  return (
    <div className="mt-10">
      {/* heading sections  */}
      <LeftSideHeader
        headline1={"New"}
        headline2={"Arrivals"}
        subtitle={"Shop online for new arrivals and get free shipping!"}
      />
      <div className="grid grid-cols-5 gap-5 mt-10">
        {updatedProducts.map((product, idx) => (
          <ProductsCard
            key={idx}
            img={product.image}
            price={product.price}
            name={product.name}
            weight={product.weight}
          />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
