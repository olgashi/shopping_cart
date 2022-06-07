import data from "../lib/data";
import Product from "./Product";

const ProductList = () => {
  return (
    <div class="product-listing">
      {data.map(product =>
        <div class="product" key={product.id}>
          <Product props={product}/>
        </div>
      )}
    </div>
  );
};

export default ProductList;