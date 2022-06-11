import cartItems from './cartItems';
import products from './products';

const rootReducer = (state = {}, action) => {
  return {
    cartItems: cartItems(state.cartItems, action),
    products: products(state.products, action),
  };
};

export default rootReducer;