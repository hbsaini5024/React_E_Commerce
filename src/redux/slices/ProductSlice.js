import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Redux Thunk

// Redux Thunk acts as a Middleware for asynchronous calls.
export const fetchData = createAsyncThunk('products/fetch',async ()=>{
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    // const myData = await response.json();
    // console.log(myData);
    return await response.json();
})

const ProductSlice = createSlice({
    name:'productSlice',
    initialState:{
        products:[],
        status:'idle',  //idle,loading,success,failed
        error:null
    },
    reducers:{
        loadProducts:(state,action)=>{
            state.products = action.payload
        }
    },
    extraReducers:function(builder){
        builder.addCase(fetchData.pending , (state,action)=>{
            state.status = 'loading'
        }).addCase(fetchData.fulfilled,(state,action)=>{
            state.status = 'success'
            state.products = action.payload
        }).addCase(fetchData.rejected , (state,action)=>{
            state.status = 'failed'
            state.error = action.error.message;
        })
    }
})

export default ProductSlice.reducer;

export const {loadProducts} = ProductSlice.actions