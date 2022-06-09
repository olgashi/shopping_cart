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
      console.log(data);
      setCartItems(data);
    }
    
    fetchCartItems();
    fetchProducts();
  }, []);

  const handleAddCartItem = async (productId, callback) => {
    try {
      const { data } = await axios.post("/api/add-to-cart", {
        productId: `${productId}`
      });
      // if data does not have any errors, go ahead with the rest
      handleUpdateProduct(productId, data.product);
      // if item is already in the cart update its quantity
      let itemAlreadyInCart = false;
      const updatedCart = cartItems.map(item => {
        if (item.productId === productId) {
          item.quantity = data.item.quantity;
          itemAlreadyInCart = true;
        }
        return item;
      })

      let state = updatedCart;
      if (!itemAlreadyInCart) {
        state = updatedCart.concat(data.item);
      }

      setCartItems(state);

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
      setCartItems([]);
    } catch (e) {
      console.error(e);
    }
  }

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
        <Cart data={cartItems} onCheckout={handleCompleteCheckout}/>
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
