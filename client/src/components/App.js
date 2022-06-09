import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import AddProductForm from "./AddProductForm";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showAdd, toggleAdd] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    const fetchCartItems = async () => {
      const { data } = await axios.get("/api/cart");
      setCartItems(data);
    }
    
    fetchCartItems();
    fetchProducts();
  }, []);

  const handleAddCartItem = async (productId, callback) => {
    try {
      if (products.filter(p => p._id === productId)[0].quantity > 0) {
        const { data } = await axios.post("/api/add-to-cart", {
          productId: `${productId}`
        });
        handleUpdateProduct(productId, data.product);
        setCartItems(cartItems.filter(i => i._id !== productId));
        setCartItems(cartItems.concat(data.item));
        console.log(cartItems)
      }

      if (callback) {
        callback();
      }

    } catch (e) {
      console.error(e);
    }
  };

  const handleAddNewProduct = async (newProduct, callback) => {
    console.log(newProduct);
    try {
      const { data } = await axios.post("/api/products", newProduct);
      setProducts(products.concat(data));

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
      setProducts(
        products.map((p) => {
          if (p._id === productId) {
            p = updatedProduct;
          }
          return p;
        })
      );

      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteProduct = async (productId, callback) => {
    try {
      const { data } = await axios.delete(`/api/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));

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
        <Cart data={cartItems} />
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
