import CartItems from "./CartItems";

const Cart = () => {
  return (
    <div class="cart">
      <h2>Your cart</h2>
      <CartItems/>
      <a class="button-checkout">Checkout</a>
    </div>
  );
};

export default Cart;