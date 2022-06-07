import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import AddProductForm from "./AddProductForm";

const App = () => {
  return (
    <body>
      <div id="app">
        <header>
          <Header/>
          <Cart/>
        </header>
      
        <main>
           <ProductList/>
           <AddProductForm/>
        </main>
      </div>
    </body>
  );
};

export default App;
