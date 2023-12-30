import React from "react";

const CartContext = React.createContext({
      item:[],
      addItem:()=>{},
      removeItem:()=>{},
      totalAmount:0,
})
export default CartContext;