import { useState } from 'react';
import EditProductForm from './EditProductForm';

const Product = ({ productData, onDeleteProduct, onUpdateProduct, onAddCartItem }) => {
  const { title, price, quantity, _id } = productData;
  const isAddToCartDisabled = quantity === 0 ? true : false;
  const [showEditForm, setShowEditForm] = useState(false);

  const toggleEditForm = (callback) => {
    setShowEditForm(!showEditForm);
    
    if(callback) {
      callback();
    }
  };

  return (
    <div className="product" >
      <div className="product-details">
        <h3>{`${title}`}</h3>
        <p className="price">{`$${price}`}</p>
        <p className="quantity">{quantity} left in stock</p>
      
        {!showEditForm && (
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
              onClick={() => toggleEditForm()}
            >Edit</a>
          </div>
        )}
          {showEditForm && (
            <EditProductForm 
              productData={productData}
              handleSetShowEditForm={toggleEditForm}
              onUpdateProduct={onUpdateProduct}
            />
           )}
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

