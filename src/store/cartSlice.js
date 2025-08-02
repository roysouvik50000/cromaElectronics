import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state , action) => {
            state.cart.push(action.payload) ;
        },
        removeCartProduct:(state , action)=>{
            state.cart = state.cart.filter((product)=>{
                return product.id !== action.payload;
            })
        },
        decreaseProductQuantity:(state , action )=>{
            const removedProductIndex = state.cart.findIndex(item => item.Id === action.payload.Id)
            // localStorage.setItem(`cart,${action.payload.uid}`,JSON.stringify(action.payload.cart))
            state.cart = state.cart.filter((product , index , allCart)=>{
                return index !== removedProductIndex;
            })
        },
        clearCart:(state)=>{
            state.cart=[];
        },
        saveCartToLocalStorage:(state , action)=>{
            localStorage.setItem(`cart,${action.payload.uid}`,JSON.stringify(action.payload.cart))
        },
        updateCartFromLocalStorage:(state , action)=>{
            const storage = localStorage.getItem(`cart,${action.payload}`)
            if(JSON.parse(storage)){
                state.cart = JSON.parse(storage);
            }else{
                state.cart=[];
            }
        }
    }
})


export const {addToCart , removeCartProduct , decreaseProductQuantity , clearCart ,saveCartToLocalStorage , updateCartFromLocalStorage} = cartSlice.actions

export default cartSlice.reducer;