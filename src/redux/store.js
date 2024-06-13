import { configureStore } from "@reduxjs/toolkit";
import packageReducer from "../redux/packageSlice"

const store = configureStore({
    reducer:{
        packages:packageReducer,
    },
});

export default store;