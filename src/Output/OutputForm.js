import React, { useContext } from "react";
import classes from "./Output.module.css";
import CartContext from "../Components/Store/CartContext";

const OutputForm = (props) => {
  const cartContext = useContext(CartContext);

  const handleAddToCart = (item, quantity) => {
    for (let i = 0; i < quantity; i++) {
      cartContext.addItemToCartHandler(item);
    }

    fetch('https://crudcrud.com/api/5545e39bb02b47e2b89f92462a629cb0/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add item to the cart.');
        }
        return response.json();
      })
      .then(data => {
        console.log('Item added successfully:', data);
      })
      .catch(error => {
        console.error('Error adding item to the cart:', error);
      });
  };

  return (
    <div className={classes.main}>
      <ul>
        {props.productDetail.map((item) => (
          <li key={item.id} className={classes.product}>
            <div className={classes.detail}>
              <p>{item.candyName}</p>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
            <div className={classes.btn}>
              <button onClick={() => handleAddToCart(item, 1)}>Add One</button>
              <button onClick={() => handleAddToCart(item, 2)}>Add Two</button>
              <button onClick={() => handleAddToCart(item, 3)}>Add Three</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OutputForm;