const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload;
    }
    case "PRODUCT_ADDED": {
      return state.concat(action.payload);
    }
    case "PRODUCT_UPDATED": {
      return state.map(product => product._id === action.payload._id ? action.payload : product);
    }
    case "PRODUCT_DELETED": {
      return state.filter(product => product._id !== action.payload);
    }
    case"CART_ITEM_ADDED": {
      return state.map(product => product._id === action.payload.product._id ? action.payload.product : product);
    }
    default : {
      return state;
    }
  }
}

export default products;