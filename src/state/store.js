import { configureStore, combineReducers } from "@reduxjs/toolkit";

import uiReducer from "./ui";
import cartReducer from "./cart";

const rootReducer = combineReducers({
    ui: uiReducer,
    cart: cartReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
