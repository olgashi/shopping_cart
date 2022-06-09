
const CartItem = ({ cartItemData }) => {
  return (
    <tr>
      <td>{cartItemData.title}</td>
      <td>{cartItemData.quantity}</td>
      <td>${(cartItemData.price).toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;