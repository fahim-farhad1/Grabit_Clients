import ProductsCard from "../../Components/Cards/ProductsCard";
import Container from "../../Components/Container/Container";
import useProducts from "../../Hooks/useProducts";
import React from "react";

const Offers = () => {
  const [products] = useProducts();
  return (
    <Container>
      <p className="text-center text-7xl">Banner Sections </p>
     <div className="space-y-5">
     <p className="text-primary text-3xl font-semibold">30% off</p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {products.map((singleProducts, idx) => (
          <ProductsCard
            key={idx}
            img={singleProducts.images[0]}
            name={singleProducts.name}
            weight={singleProducts.weight}
            price={singleProducts.price}
            id={singleProducts._id}
            category={singleProducts.category}
            slug={singleProducts.slug}
          />
        ))}
      </div>
     </div>
    </Container>
  );
};

export default Offers;
