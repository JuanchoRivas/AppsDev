import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../src/components/features/counter/counterSlice';
import shopReducer from '../src/components/features/shop/shopSlice';

export default configureStore({
  reducer: {
    counterReducer,
    shopReducer
  },
});