import { useState } from 'react';
import CartItem from "./CartItem";

const Cart = ({ data }) => {
  console.log()
  let total = 0;
  for (let i = 0; i < Object.keys(data); i++) {
    // add logic to calculate cart total
  }
  return (
    <div className="cart">
      <h2>Your cart</h2>
      <div className="cart-items">     
        {data.map(cartItem => 
          <CartItem cartItemData={cartItem} key={cartItem.id}/>
        )}    
      </div>
      <div>
        <span className="total">Total: {total}</span>
      </div>   
      <a href="/" className="button-checkout">Checkout</a>
    </div>
  );
};

export default Cart;