import { useState } from 'react';
import EditProduct from './EditProduct';
const Product = ({ productItemData }) => {
  const { title, price, quantity } = productItemData;
  const [showEdit, toggleEdit] = useState(false);

  return (
    <div>
      <div class="product-details">
        <h3>{`${title}`}</h3>
        <p class="price">{`$${price}`}</p>
        <p class="quantity">{quantity} left in stock</p>
        <div class="actions product-actions">
          <a class="button add-to-cart">Add to Cart</a>
          <a 
            class="button edit"
            onClick={() => toggleEdit((showEdit) => !showEdit)}
          >
          Edit
          </a>
          {showEdit && <EditProduct product={productItemData}/>}
        </div>
      </div>
    </div>
  )
};

export default Product;