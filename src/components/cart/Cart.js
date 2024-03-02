import { useContext } from "react";
import { ProductContext } from "../Context";
import { Title } from "../Title";
import CartColumns from "./CartColumn";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";

export const Cart = () => {
  const value = useContext(ProductContext);
  const {
    cart,
    increment,
    decrement,
    clearCart,
    removeItem,
    cartSubTotal,
    cartTotal,
    cartTax,
  } = value;

  return cart.length > 0 ? (
    <>
      <Title name="Your" title="cart" />
      <CartColumns />
      <CartList
        cart={cart}
        increment={increment}
        decrement={decrement}
        removeItem={removeItem}
      />
      <CartTotals
        clearCart={clearCart}
        cartSubTotal={cartSubTotal}
        cartTotal={cartTotal}
        cartTax={cartTax}
      />
    </>
  ) : (
    <EmptyCart />
  );
};
