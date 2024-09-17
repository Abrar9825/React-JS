import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import blogReducer from "./slices/blogSclices";




const store = configureStore({
    reducer: {
        count: counterReducer,
        blog: blogReducer,
    }
})

export default store