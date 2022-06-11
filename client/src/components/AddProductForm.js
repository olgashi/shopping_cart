import { useState } from 'react';
import productFieldsValid from '../lib/utils/productFieldsValid'

const AddProductForm = ( { onSubmit, toggleAdd }) => {
  const [newProduct, setNewProduct] = useState({title: "", quantity: "", price: "" });

  const handleSubmit = e => {
    e.preventDefault();

    if (productFieldsValid(newProduct)) {
      const newProductObj = {};
      newProductObj.price = parseFloat(newProduct.price, 10);
      newProductObj.quantity = parseInt(newProduct.quantity, 10);
      newProductObj.title = newProduct.title;

      onSubmit(newProductObj, resetInputs, toggleAdd((showAdd) => !showAdd));

    } else {
      alert("Input fields cannot be empty!");
    }
  }
  
  const resetInputs = () => {
    setNewProduct({title: "", quantity: "", price: "" })
  }

   return(
     <div>
     <h3>Add Product</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input 
              type="text" 
              id="product-name" 
              value={newProduct.title} 
              onChange={(e) => setNewProduct({...newProduct, title: e.target.value})}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input 
              type="text" 
              id="product-price" 
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input 
              type="text" 
              id="product-quantity" 
              value={newProduct.quantity}
              onChange={(e) => setNewProduct({...newProduct, quantity: e.target.value})}
            />
          </div>
          
          <div className="actions form-actions">
            <button 
              type="submit"
              className="button add"
            >Add</button>
            <a 
              href="/#"
              className="button"
              onClick={() => toggleAdd((showAdd) => !showAdd)}
              >Cancel</a>
          </div>
          </form>
       </div>
  );
};

export default AddProductForm;