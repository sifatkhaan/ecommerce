import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import {persistedReducer} from './api/rootReducer'
import { persistStore } from "redux-persist";

export const store = configureStore({
reducer: persistedReducer,
middleware: (getDefaltMiddleware)=>
    getDefaltMiddleware({serializableCheck:false}).concat(baseApi.middleware)
});
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;