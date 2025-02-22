import { use } from "react";
import Container from "../../Components/Container/Container";
import LeftSideHeader from "../../Components/Home/HeaderText/LeftSideHeader";
import LeftSideProductsHeadline from "../../Components/Home/HeaderText/LeftSideProductsHeadline";
import SwiperProducts from "../../Components/Home/SwiperProducts/SwiperProducts";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import useCategories from "../../Hooks/useCategories";
import useProducts from "../../Hooks/useProducts";
import React, { useContext } from "react";
import { Link } from "react-router";
import Loading from "../../Components/Loading/Loading";

const Products = () => {
  const [products] = useProducts();
  const [categories] = useCategories();
  const {user} = useContext(AuthContext);
  if(!products) {
    return <Loading />
  }
  return (
    <Container className="bg-base-200 md:px-20">
      <p className="text-center text-7xl">Banner Sections </p>
      {categories.map((singleCategory, idx) => (
        <div key={idx} className="border p-2 rounded shadow mt-10 bg-white">
          <span className="flex justify-between items-center">
            <LeftSideProductsHeadline headline={singleCategory.name} />
            <Link className="text-primary">See More</Link>
          </span>
          <SwiperProducts products={products} idx={idx} email={user?.email} />
        </div>
      ))}
    </Container>
  );
};

export default Products;
