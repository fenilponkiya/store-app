import React from "react";
import CartItem from "./CartItem";

const CartList = ({ cart, increment, decrement, removeItem }) => {
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return (
          <CartItem
            key={item?.id}
            item={item}
            increment={increment}
            decrement={decrement}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
};

export default CartList;
