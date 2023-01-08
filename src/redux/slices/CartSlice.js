import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name:'cartSlice',
    initialState:{
        cart:[],
        cartObj:[],
        count:0
    },
    reducers:{
        addToCart:(state,action)=>{
            const cartItem = state.cart.find(item=>item.id == action.payload);
            // state.cartId.push(action.payload);
            if(cartItem){
                cartItem.quantity += 1;
                return;
            }

            state.cart.push({
                quantity:1,
                id:action.payload
            })
        },
        removeFromCart:(state,action)=>{
            const cartItem = state.cart.find(item=>item.id == action.payload);

            if(cartItem){
                cartItem.quantity -= 1;
                if(cartItem.quantity == 0){
                    state.cart = state.cart.filter(item=>item.id !== action.payload)
                }
            }
        },
        saveCartObj:(state,action)=>{
            state.cartObj.push(action.payload);
        },
        removeCartObj:(state,action)=>{
            state.cartObj = state.cartObj.filter((value)=>value.id !== action.payload)
        }
    }
})

export const {addToCart,removeFromCart,saveCartObj,removeCartObj} = CartSlice.actions;

export default CartSlice.reducer;

// structure 
// {
//     quantity : 12,
//     id : 123
// }