import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../src/components/features/counter/counterSlice';
import shopReducer from '../src/components/features/shop/shopSlice';
import cartReducer from "../src/components/features/shop/cartSlice";
import authReducer from "../src/components/features/auth/authSlice"
import { shopApi } from "../src/services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../src/services/shopService";

export default configureStore({
  reducer: {
    counterReducer,
    shopReducer,
    cartReducer,
    authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware),
});

setupListeners(configureStore.dispatch);