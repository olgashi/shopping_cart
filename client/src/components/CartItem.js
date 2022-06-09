
const CartItem = ({ cartItemData }) => {
  return (
    <tr>
      <td>{cartItemData.title}</td>
      <td>{cartItemData.quantity}</td>
      <td>${cartItemData.price}</td>
    </tr>
  );
};

export default CartItem;