const Product = (product) => {
  const { title, price, quantity } = product;
  return (
    <div>
      <div class="product-details">
        <h3>{`${title}`}</h3>
        <p class="price">{`${price}`}</p>
        <p class="quantity">{quantity}</p>
        <div class="actions product-actions">
          <a class="button add-to-cart">Add to Cart</a>
          <a class="button edit">Edit</a>
        </div>
      </div>
    </div>
  )
};

export default Product;