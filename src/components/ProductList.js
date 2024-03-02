import React from "react";
import { ProductContext } from "./Context.js";
import { Title } from "./Title";
import { Product } from "./Product.js";

export const ProductList = () => {
  const value = React.useContext(ProductContext);

  const multiProduct = value.multiProduct;

  return (
    <div className="py-5">
      <div className="container">
        <Title name="our" title="products" />
        <div className="row">
          {multiProduct.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
        </div>
      </div>
      {/* <Product /> */}
    </div>
  );
};
