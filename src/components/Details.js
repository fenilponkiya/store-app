import React, { useContext } from "react";
import { ProductContext } from "./Context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export const Details = () => {
  const value = useContext(ProductContext);
  const { singleProduct, addToCart, openModal } = value;
  const { title, img, company, price, info, inCart, id } = singleProduct;
  const func = () => {
    addToCart(id);
    openModal(id);
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} className="img-fluid" alt="Mobile" />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>model : {title}</h2>
          <h4 className="text-title text-uppercase mt-3 mb-2">
            made By : <span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price : <span>$</span>
              {price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            Some text about product:
          </p>
          <p className="text-muted lead">{info} </p>
          <div>
            <Link to="/">
              <ButtonContainer>Back to Products</ButtonContainer>
            </Link>
            <ButtonContainer
              // cart={true}
              disabled={inCart ? true : false}
              onClick={func}
            >
              {inCart ? "inCart" : "Add to Cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
