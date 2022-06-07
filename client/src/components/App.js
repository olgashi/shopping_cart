import React from "react";
import { useState, useEffect} from "react";
import data from "../lib/data.js";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import AddProductForm from "./AddProductForm";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [showAdd, toggleAdd] = useState(false);


  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  
  return (
      <div id="app">
        <header>
          <Header/>
          <Cart data={products}/>
        </header>
      
        <main>
           <ProductList data={products}/>
         <a 
          class="button add-product-button"
          onClick={() => toggleAdd((showAdd) => !showAdd)}
          >Add A Product</a>
            {showAdd && <AddProductForm />}

        </main>
      </div>
  );
};

export default App;
