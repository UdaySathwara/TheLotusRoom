import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart from sessionStorage
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Load orders from sessionStorage
  const [orders, setOrders] = useState(() => {
    const savedOrders = sessionStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Sync cart with sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Sync orders with sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Add item to cart or increase quantity if already exists
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
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
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      sessionStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // Place order and clear cart
  const placeOrder = () => {
    if (cart.length === 0) return; // Prevent empty orders

    const newOrder = {
      id: orders.length + 1,
      date: new Date().toLocaleString(),
      totalPrice: cart.reduce((total, item) => total + item.price * item.quantity, 0),
      status: "Pending",
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image || "https://via.placeholder.com/100", // Ensure image is stored
      })),
    };

    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders, newOrder];
      sessionStorage.setItem("orders", JSON.stringify(updatedOrders));
      return updatedOrders;
    });

    setCart([]);
    sessionStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, orders, addToCart, updateQuantity, removeFromCart, placeOrder, setOrders }}
    >
      {children}
    </CartContext.Provider>
  );
};
