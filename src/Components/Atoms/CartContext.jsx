import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sync cart with sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart or increase quantity if already exists
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity } // Increase by selected quantity
            : item
        );
      }
      return [...prevCart, { ...product, quantity }]; // Default quantity = selected quantity
    });
  };

  // Increase or decrease quantity
  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0) // Ensure no items with 0 quantity remain
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart)); // Force update sessionStorage
      return updatedCart;
    });
  };

  // Place order and clear cart
  const placeOrder = () => {
    console.log("Order placed successfully!", cart);

    // Clear the cart after order is placed
    setCart([]);
    sessionStorage.removeItem("cart"); // Remove cart from sessionStorage
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeFromCart, placeOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};
