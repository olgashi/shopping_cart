import { useState } from 'react';
import CartItem from "./CartItem";

const Cart = ({ data, onCheckout }) => {
  let total = data.reduce((acc, val) => val.price * val.quantity, 0)
  return (
    <div className="cart">
      <h2>Your cart</h2>
      <table className="cart-items">
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {data.map(cartItem =>
          <CartItem cartItemData={cartItem} key={cartItem.id} />
        )}
        <tr>
      <td colspan="3" className="total">Total: ${total}</td>
    </tr>
      </table>
      <a href="/#" className="button-checkout" onClick={() => onCheckout()}>Checkout</a>
    </div>
  );
};

export default Cart;