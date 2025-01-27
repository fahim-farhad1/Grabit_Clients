import React, { useEffect, useState } from "react";
import LeftSideHeader from "../HeaderText/LeftSideHeader";
import useProducts from "../../../Hooks/useProducts";
import ProductsCard from "../../Cards/ProductsCard";

const NewArrivals = () => {
  const [products] = useProducts();
  const [updatedProducts, setUpdatedProducts] = useState([]);
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  // Filter products uploaded within the last 7 days
  const recentProducts = products.filter((product) => {
    const uploadDate = new Date(product.uploadDate); // Convert uploadDate to Date object
    const items = uploadDate >= sevenDaysAgo && uploadDate <= today;
    return items; // Check date range
  });
  useEffect(() => {
    setUpdatedProducts(recentProducts);
  }, [recentProducts]);
  console.log(updatedProducts);
  return (
    <div>
      {/* heading sections  */}
      <LeftSideHeader
        headline1={"New"}
        headline2={"Arrivals"}
        subtitle={"Shop online for new arrivals and get free shipping!"}
      />
      <div>
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
