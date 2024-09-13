import { baseApi } from "./baseApi";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import cartReducer from "../slices/cartSlice";
import productRducer from "../slices/productSlice";
import wishListReducer from "../slices/wishSlice";

const persistConfig= {
key:'root',
storage,
whitelist:['cart','wish']
}

export const reducer = combineReducers({
[baseApi.reducerPath]: baseApi.reducer,
ecommerce: productRducer,
cart:cartReducer,
wish:wishListReducer
});

export const persistedReducer = persistReducer(persistConfig, reducer)