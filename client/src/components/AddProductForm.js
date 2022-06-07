import { useState } from 'react';


const AddProductForm = ( { onSubmit }) => {
  const [newProduct, setNewProduct] = useState({title: "", quantity: "", price: "" });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  }
  
  const resetInputs = () => {
    setNewProduct({title: "", quantity: "", price: "" })
  }

   return(
     <div>
     <h3>Add Product</h3>
        <form action="" onSubmit={handleSubmit}>
          <div class="input-group">
            <label for="product-name">Product Name</label>
            <input 
              type="text" 
              id="product-name" 
              value={newProduct.title} 
              onChange={(e) => setNewProduct({...newProduct, title: e.target.value})}
            />
          </div>
          <div class="input-group">
            <label for="product-price">Price</label>
            <input 
              type="text" 
              id="product-price" 
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />
          </div>

          <div class="input-group">
            <label for="product-quantity">Quantity</label>
            <input 
              type="text" 
              id="product-quantity" 
              value={newProduct.quantity}
              onChange={(e) => setNewProduct({...newProduct, quantity: e.target.value})}
            />
          </div>
          <div class="actions form-actions">
            <a 
              class="button add"
            >
            Add
            </a>
            <a class="button">Cancel</a>
          </div>
          </form>
       </div>
  );
};

export default AddProductForm;