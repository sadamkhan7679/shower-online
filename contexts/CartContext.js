import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storage = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      setProducts(storage);
    }
  }, []);

  const cartContext = {
    products,
    setProducts,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export const CartConsumer = CartContext.Consumer;

export default CartContext;
