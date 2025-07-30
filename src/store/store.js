import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import allProductReducer from './allProductSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import allUsersOrdersReducer from './allUsersOrders';

export const store = configureStore({
    reducer:{
        product:productReducer,
        allProduct:allProductReducer,
        cart:cartReducer,
        user:userReducer,
        allUsersOrders:allUsersOrdersReducer,
    }
})