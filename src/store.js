/* eslint-disable no-undef */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./modules/auth/authSlice.js";
import navDrawerReducer from "./modules/dashboard/state/nav-drawer-slice";
import ordersReducer from "./modules/order-management/state/orders-slice";
import profileReducer from "./modules/user/state/profile-slice";

const store = configureStore({
  devTools: process.env.NODE_ENV != "production",
  reducer: {
    auth: authReducer,
    navDrawer: navDrawerReducer,
    orders: ordersReducer,
    profile: profileReducer,
  },
});

export default store;
