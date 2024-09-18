import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./UserSlice";
import { categoryReducer } from "./CategorySlice";
import { productReducer } from "./Addproduct";
import { cartReducer } from "./CartSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    category: categoryReducer,
    products: productReducer,
    carts: cartReducer,
  },
});
