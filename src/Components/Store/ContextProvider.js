import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";

const ContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://crudcrud.com/api/5545e39bb02b47e2b89f92462a629cb0/items')
      .then(response => response.json())
      .then(data => setCart(data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const addItemToCartHandler = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      const existingItem = updatedCart[existingItemIndex];

      existingItem.quantity += 1;
      existingItem.totalPrice += parseFloat(item.price);

      setCart(updatedCart);
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...item, quantity: 1, totalPrice: parseFloat(item.price) },
      ]);
    }
  };

  const removeItemFromCartHandler = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  const cartContext = {
    items: cart,
    addItemToCartHandler: addItemToCartHandler,
    removeItemFromCartHandler: removeItemFromCartHandler,
    calculateTotalAmount: calculateTotalAmount,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;