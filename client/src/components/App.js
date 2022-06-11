import React from "react";
import { useState, useEffect } from "react";
import{ useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import AddProductForm from "./AddProductForm";
import {productAdded, productUpdated, productsReceived, productDeleted} from '../actions/productActions'
import { cartItemsReceived, cartItemAdded, cartCheckedOut } from "../actions/cartActions";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const cartItems = useSelector(state => state.cartItems);
  const [showAdd, toggleAdd] = useState(false);


  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      dispatch(productsReceived(data));
    };

    const fetchCartItems = async () => {
      const { data } = await axios.get("/api/cart");
      dispatch(cartItemsReceived(data));
    };
    
    fetchCartItems();
    fetchProducts();
  }, [dispatch]);

  const handleAddCartItem = async (productId, callback) => {
    try {
      const { data } = await axios.post("/api/add-to-cart", {
        productId: `${productId}`
      });
      dispatch(cartItemAdded(data));
      handleUpdateProduct(productId, data.product);
      
      if (callback) {
        callback();
      }

    } catch (e) {
      console.error(e);
    }
  };

  const handleCompleteCheckout = async () => {
    try {
      await axios.post("/api/checkout");
      dispatch(cartCheckedOut());
    } catch (e) {
      console.error(e);
    }
  }

  const handleAddNewProduct = async (newProduct, callback) => {
    try {
      const { data } = await axios.post("/api/products", newProduct);
      dispatch(productAdded(data));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateProduct = async (productId, updatedProduct, callback) => {
    try {
      const { data } = await axios.put(`/api/products/${productId}`, updatedProduct);
      dispatch(productUpdated(data));

      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteProduct = async (productId, callback) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      dispatch(productDeleted(productId));

      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="app">
      <header>
        <Header />
        <Cart 
          data={cartItems} 
          onCheckout={handleCompleteCheckout}
        />
      </header>

      <main>
        <ProductList
          data={products}
          onUpdateProduct={handleUpdateProduct}
          onDeleteProduct={handleDeleteProduct}
          onAddCartItem={handleAddCartItem}
        />
        {!showAdd && (
          <a
            href="/#"
            className="button add-product-button"
            onClick={() => toggleAdd((showAdd) => !showAdd)}
          >
            Add A Product
          </a>
        )}
        {showAdd && (
          <AddProductForm
            onSubmit={handleAddNewProduct}
            isToggled={showAdd}
            toggleAdd={toggleAdd}
          />
        )}
      </main>
    </div>
  );
};

export default App;
