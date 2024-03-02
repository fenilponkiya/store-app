import React, { createContext, useEffect, useState } from "react";
import { detailProduct, storeProducts } from "../utils/data";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [multiProduct, setMultiProduct] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalopen] = useState(false);
  const [modalProduct, setModalProduct] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const setProducts = () => {
    let tempProduct = storeProducts.map((item) => ({ ...item }));
    setMultiProduct(tempProduct);
  };

  useEffect(() => {
    setProducts();
    const storedCart = localStorage.getItem("cart");
    const multiProductData = localStorage.getItem("multiproduct");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
    }
    if (multiProductData) {
      const parsedMultiproduct = JSON.parse(multiProductData);
      setMultiProduct(parsedMultiproduct);
    }
    const storedProductData = localStorage.getItem("productData");
    if (storedProductData) {
      const storedProduct = JSON.parse(storedProductData);
      setSingleProduct(storedProduct);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("multiproduct", JSON.stringify(multiProduct));
    totals();
  }, [cart]);

  const getItem = (id) => {
    const product = multiProduct.find((item) => item.id === id);
    return product;
  };

  const handleDetails = (id) => {
    const product = getItem(id);
    localStorage.setItem("productData", JSON.stringify(product));

    return setSingleProduct(product);
  };

  const addToCart = (id) => {
    const tempProduct = [...multiProduct];
    const index = tempProduct.indexOf(getItem(id));
    const product = tempProduct[index];
    product.count = 1;
    product.inCart = true;
    const price = product.price;
    product.total = price;

    setMultiProduct([...tempProduct]);
    setCart([...cart, product]);
    totals();
  };

  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalopen(true);
  };

  const closeModal = () => {
    setModalopen(false);
  };

  const increment = (id) => {
    const tempIncrement = [...cart];
    const findSingleItem = tempIncrement.find((item) => {
      return item.id === id;
    });
    const index = tempIncrement.indexOf(findSingleItem);
    const product1 = tempIncrement[index];
    console.log(product1);
    product1.count = product1.count + 1;
    product1.total = product1.count * product1.price;
    setCart([...tempIncrement]);
    totals();
  };

  const decrement = (id) => {
    const tempDecrement = [...cart];
    const findSingleItem = tempDecrement.find((item) => {
      return item.id === id;
    });
    const index = tempDecrement.indexOf(findSingleItem);
    const product = tempDecrement[index];

    product.count = product.count - 1;
    product.total = product.count * product.price;
    setCart([...tempDecrement]);
    totals();

    if (product.count === 0) {
      removeItem(id);
    }
  };

  const clearCart = () => {
    setCart([]);
    setMultiProduct(storeProducts);
  };

  const removeItem = (id) => {
    let tempProducts = [...multiProduct];
    let tempCart = [...cart];

    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter((item) => item.id !== id);

    setCart([...tempCart]);
    setProducts([...tempProducts]);
  };
  const getTotals = () => {
    let subTotal = 0;
    cart.forEach((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return {
      subTotal,
      tax,
      total,
    };
  };

  const totals = () => {
    const totals = getTotals();
    setCartSubTotal(totals.subTotal);
    setCartTax(totals.tax);
    setCartTotal(totals.total);
  };

  return (
    <ProductContext.Provider
      value={{
        multiProduct,
        singleProduct,
        handleDetails,
        addToCart,
        cart,
        openModal,
        closeModal,
        modalOpen,
        cartSubTotal,
        cartTotal,
        cartTax,
        increment,
        decrement,
        clearCart,
        removeItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
