import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../fetures/auth/authSlice";
import cartReducer from "../fetures/product/cart";

export default configureStore({
  reducer: {
    authSlice: authReducer,
    cartSlice:cartReducer
  },
}); 