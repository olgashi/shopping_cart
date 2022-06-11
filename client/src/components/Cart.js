import CartItem from "./CartItem";

const Cart = ({ data, onCheckout }) => {
  let total = data.reduce((acc, val) => acc + (val.price * val.quantity), 0).toFixed(2);
  return (
    <div className="cart">
      <h2>Your cart</h2>
      <table className="cart-items">
        <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {data.map(cartItem =>
          <CartItem cartItemData={cartItem} key={cartItem._id} />
        )}
         </tbody>
        <tfoot>
        <tr>
      <td colSpan="3" className="total">Total: ${total}</td>
       </tr>
       </tfoot>
      </table>
      <button href="/#" className="button checkout" onClick={() => onCheckout()}>Checkout</button>
    </div>
  );
};

export default Cart;