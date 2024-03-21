import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../src/components/features/counter/counterSlice';
import shopReducer from '../src/components/features/shop/shopSlice';
import cartReducer from "../src/components/features/shop/cartSlice";
import { shopApi } from "../src/services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";

export default configureStore({
  reducer: {
    counterReducer,
    shopReducer,
    cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(configureStore.dispatch)