import CartItems from "./CartItems";

const Cart = ({ data }) => {
  return (
    <div class="cart">
      <h2>Your cart</h2>
      <CartItems cartItemData={data}/>
      <a class="button-checkout">Checkout</a>
    </div>
  );
};

export default Cart;