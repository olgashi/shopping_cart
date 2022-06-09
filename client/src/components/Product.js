import { useState } from 'react';
import EditProductForm from './EditProductForm';
const Product = ({ productData, onDeleteProduct, onUpdateProduct, onAddCartItem }) => {

  const { title, price, quantity, _id } = productData;
  const [showEditForm, toggleEditForm] = useState(false);
  const isAddToCartDisabled = quantity === 0 ? true : false;

  return (
    <div className="product" >
      <div className="product-details">
        <h3>{`${title}`}</h3>
        <p className="price">{`$${price}`}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button 
            href="/#" 
            className={`button add-to-cart ${isAddToCartDisabled ? 'disabled' :''}`}
            onClick={() => onAddCartItem(_id)}
            type="button"
            disabled={isAddToCartDisabled}
          >Add to Cart</button>
          <a 
            href="/#"
            className="button edit"
            onClick={() => toggleEditForm((showEdit) => !showEdit)}
          >
          Edit
          </a>
          {showEditForm && <EditProductForm productData={productData} handleToggleEditForm={toggleEditForm} onUpdateProduct={onUpdateProduct}/>}
        </div>
        <div>
          <a 
            href="/#"
            className="delete-button"
            onClick={() => onDeleteProduct(_id)}
          >
            <span>X</span>
          </a>
        </div>
      </div>
    </div>
  )
};

export default Product;

