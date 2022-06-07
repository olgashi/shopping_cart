
const CartItems = ({ cartItemData }) => {
  console.log(cartItemData);
  return (
    <table class="cart-items">
      {cartItemData.map(product => 
        <tr key={product.id}>
          <th>{product.title}</th>
          <th>{product.price}</th>
          <th>{product.quantity}</th>
        </tr>
      )}
          
      <tr>
        <td colspan="3" class="total">Total: $729.98</td>
      </tr>             
    </table>
  );
};

export default CartItems;