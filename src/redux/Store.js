import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import ProductSlice from "./slices/ProductSlice";

// This is out store and we registered reducers into our store
export default configureStore({
    reducer:{
        // messageReducer:MessageSlice,
        // notesReducer:NotesSlice
        productReducer:ProductSlice,
        cartReducer:CartSlice
    }
})