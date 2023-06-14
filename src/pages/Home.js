import React, { useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  // get only men's and women's clothing category
  const filterProducts = products?.filter(
    (product) =>
      product.category === "men's clothing" ||
      product.category === "women's clothing"
  );

  console.log(filterProducts);

  return (
    <div>
      <section>
        <div className="container mx-auto">
          <div>
            {filterProducts?.map((product) => (
              <div key={product.id}>{product.title}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
