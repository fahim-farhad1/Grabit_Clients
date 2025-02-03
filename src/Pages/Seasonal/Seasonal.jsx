import ProductsCard from "../../Components/Cards/ProductsCard";
import Container from "../../Components/Container/Container";
import useProducts from "../../Hooks/useProducts";
import React from "react";

const Seasonal = () => {
  const [products] = useProducts();
  return (
    <Container>
          <p className="text-center text-7xl">Banner Sections </p>
      <div className="grid grid-cols-5 gap-5 my-10">
        {products.map((product, idx) => (
          <ProductsCard
            key={idx}
            img={product.images[0]}
            name={product.name}
            weight={product.weight}
            price={product.price}
          />
        ))}
      </div>
    </Container>
  );
};

export default Seasonal;
