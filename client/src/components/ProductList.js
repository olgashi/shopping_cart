import Product from "./Product";

const ProductList = ({ data, onDeleteProduct, onUpdateProduct}) => {


  return (
    <div className="product-listing">
        {data.map(product => { 
          return <Product key={product._id} {...product} productData={product} onDeleteProduct={onDeleteProduct} onUpdateProduct={onUpdateProduct}/>
        })}
    </div>
  );
};

export default ProductList;
