import { useState } from 'react';

const EditProductForm = ({ productData, handleSetShowEditForm, onUpdateProduct }) => {
  const { title, quantity, price, _id } = productData;
  const [editProduct, setEditProduct] = useState({ title, quantity, price, _id });

  
  const handleSubmit = e => {
    e.preventDefault();

    const updatedProductObj = {};
    updatedProductObj.price = parseFloat(editProduct.price, 10);
    updatedProductObj.quantity = parseInt(editProduct.quantity, 10);
    updatedProductObj.title = editProduct.title;
    onUpdateProduct(editProduct._id, updatedProductObj, handleSetShowEditForm);
  };
  
  const resetInputs = () => {
    setEditProduct({title: "", quantity: "", price: "" });
  };

  const handleCancelEditForm = (e) => {
    e.preventDefault();
    handleSetShowEditForm(resetInputs);
  }

  return (
    <div className="product-listing">
      <div className="edit-form">
        <h3>Edit Product</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input 
              type="text" 
              id="product-name" 
              value={editProduct.title} 
              onChange={e => setEditProduct({...editProduct, title: e.target.value})}          
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input 
              type="text" 
              id="product-price" 
              value={editProduct.price} 
              onChange={e => setEditProduct({...editProduct, price: e.target.value})}          
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input 
              type="text" 
              id="product-quantity" 
              value={editProduct.quantity} 
              onChange={e => setEditProduct({...editProduct, quantity: e.target.value})}          
            />
          </div>

          <div className="actions form-actions">
            <button 
                className="button edit"
                type="submit"
              >Update</button>
              <a 
                href="/#"
                onClick={handleCancelEditForm}
                className="button" 
                >Cancel</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;