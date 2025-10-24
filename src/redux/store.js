import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from './slice'; 
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    addToCart: addToCartReducer,
    products: productReducer
  },
});

export default store;
