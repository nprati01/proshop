import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";


const initialState = localStorage.getItem("cart") ? JSON.parse
(localStorage.getItem("cart")) : {cartItems: []};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            //check to see if item is in the cart
            const existItem = state.cartItems.find((x)=> x._id === item._id);
            //if the item matches the id then map the item in the cart
            //else add the new item to the cart???

            if (existItem) {
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x)
            } else {
                state.cartItems = [...state.cartItems, item];
            }
            return updateCart(state)
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x._id !==action.payload);
            return updateCart(state)
        }
    },
});
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
