import ProductsCard from "../../Components/Cards/ProductsCard";
import Container from "../../Components/Container/Container";
import useProducts from "../../Hooks/useProducts";
import React from "react";

const Seasonal = () => {
  const [products] = useProducts();
  return (
    <Container>
      <p className="text-center text-7xl">Banner Sections </p>
     <div className="space-y-5">
     <p className="text-primary text-3xl font-semibold">Summer Season</p>
      <div className="grid grid-cols-5 gap-5">
        {products.map((product, idx) => (
          <ProductsCard
            key={idx}
            img={product.images[0]}
            name={product.name}
            weight={product.weight}
            price={product.price}
            stock={product.stock}
            category={product.category}
            slug={product.slug}
            id={product._id}
          />
        ))}
      </div>
     </div>
    </Container>
  );
};

export default Seasonal;
