import Product from "./Product";

const ProductList = ({ data }) => {

  return (
    <div class="product-listing">
      {data.map(product =>
        <div class="product" key={product.id}>
          <Product productItemData={product}/>
        </div>
      )}
    </div>
  );
};

export default ProductList;