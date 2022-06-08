
const CartItem = ({ cartItemData }) => {
  return (
      <div>
        <span>{cartItemData.title}</span>
        <span>{cartItemData.price}</span>
        <span>{cartItemData.quantity}</span>
      </div>
  );
};

export default CartItem;