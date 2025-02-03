import React from "react";
import SwiperProducts from "../../Components/Home/SwiperProducts/SwiperProducts";
import useProducts from "../../Hooks/useProducts";
import LeftSideHeader from "../../Components/Home/HeaderText/LeftSideHeader";
import LeftSideProductsHeadline from "../../Components/Home/HeaderText/LeftSideProductsHeadline";
import useCategories from "../../Hooks/useCategories";
import Container from "../../Components/Container/Container";

const Products = () => {
  const [products] = useProducts();
  const [categories] = useCategories();
  return (
    <Container className="bg-base-200 md:px-20">
      <p className="text-center text-7xl">Banner Sections </p>
      {
        categories.map((singleCategory, idx) => (
          <div key={idx} className="border p-2 rounded shadow mt-10 bg-white">
        <LeftSideProductsHeadline headline={singleCategory.name} />
      <SwiperProducts products={products} />
      </div>
        ))
      }
     

    </Container>
  );
};

export default Products;
