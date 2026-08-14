// src/Component/context/CartContext.jsx

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("ideal_cart");
    return localData ? JSON.parse(localData) : [];
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("ideal_cart", JSON.stringify(cart));
  }, [cart]);

  // Helper to get a unified identifier for any product
  const getItemId = (item) => item.id || item._id;

  const addToCart = (product) => {
    const productId = getItemId(product);
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => getItemId(item) === productId);
      if (existingItem) {
        return prevCart.map((item) =>
          getItemId(item) === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Ensure name and image are explicitly captured and normalized here!
      return [...prevCart, { 
        ...product, 
        id: productId, // normalize so both id and _id map cleanly
        name: product.name || product.title || 'Product Item',
        image: product.image || product.img || (Array.isArray(product.images) ? product.images[0] : ''),
        quantity: 1 
      }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => getItemId(item) !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (getItemId(item) === id) {
            const newQty = item.quantity + amount;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};