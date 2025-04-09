import React from "react";
import Container from "../../Components/Container/Container";
import { useParams } from "react-router";
import useCategoryProducts from "../../Hooks/useCategoryProducts";
import Loading from "../../Components/Loading/Loading";
import Products from "../Products/Products";
import ProductsCard from "../../Components/Cards/ProductsCard";

const Categories = () => {
  const { category } = useParams();
  const [categoryProducts, isLoading] = useCategoryProducts(category);
  console.log(categoryProducts);
  //   console.log(category);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      <p>this is page {category} </p>
      <div className="flex gap-5">
        {categoryProducts.map((Product, idx) => (
          <ProductsCard
            key={idx}
            img={Product.images[0]}
            name={Product.name}
            weight={Product.weight}
            price={Product.price}
            stock={Product.stock}
            id={Product._id}
            category={Product.category}
            email={Product.email}
            slug={Product.slug}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
