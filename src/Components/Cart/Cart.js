import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CartContext from '../Store/CartContext';


const Cart = () => {
      const [showModal, setShowModal] = useState(false);
      const cartContext = useContext(CartContext);

      const cartItems = cartContext.items;

      const cartLength = cartItems.reduce((total, item) => total + item.quantity, 0);

      const handleClose = () => setShowModal(false);
      const handleShow = () => setShowModal(true);

      return (
        <>
          <div>
            Cart Length: {cartLength}
            <Button variant="primary" onClick={handleShow}>
              Open Cart
            </Button>
          </div>

          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Your Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <p>Name: {item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${isValidNumber(item.totalPrice) ? item.totalPrice.toFixed(2) : 'Invalid Price'}</p>
                  <hr />
                </div>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    };

    const isValidNumber = (value) => {
      return typeof value === 'number' && !isNaN(value);
    };

    export default Cart;