// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// let token = JSON.parse(localStorage.getItem("token"))

// export const fetchCart=createAsyncThunk("fetchCart",()=>{
//     return  axios({
//         method: "get",
//         url: `http://localhost:9999/cart/getAll`,
//         headers: {
//           authorization: `Bearer ${dataWatch?.token}`,
  
//           "Content-Type": "application/json",
//         },
//       })
//         .then((res) => {
//          console.log("🚀 ~ .then ~ res:", res?.data?.dat)
         
//         })
// })

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {cart:[] ,cartId:"",pending:false,error:""},
//   reducers:{
  
    
        
//     }
   
//   }
//   extraReducer:(builder)=>{
//     builder.addCase(fetchCart.pending,(state,action )=>{
//     state.pending=true;
//     })
//     .addCase(fetchCart.fulfilled,(state,{payload} )=>{
//     state.pending=false;
//     state.cart=payload.producs;
//     state.cart= payload._id
//     })
//     .addCase(fetchCart.rejected,(state,action )=>{
//         state.error=action.error.message
//     state.pending=false;
//     })
//   }
// );
// export default cartSlice.reducer;
// export const {}=cartSlice.actions


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let token = JSON.parse(localStorage.getItem("token"));

export const fetchCart = createAsyncThunk("fetchCart", () => {
  return axios({
    method: "get",
    url: `http://localhost:9999/cart/getAll`,
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      // console.log("🚀 ~ .then ~ res:", res?.data?.data);
      
      return res?.data; 
    });
});

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], cartId: "", pending: false, error: "",refresh:true },
  reducers: {
    refetch:(state)=>{
      state.refresh = !state.refresh
    },
    addCart:(state,{payload})=>{
      state.cart = payload.data;
        state.cartId = payload.cartId;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(fetchCart.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.cart = payload.data; 
        state.cartId = payload.cartId; 
          })
      .addCase(fetchCart.rejected, (state, action) => {
        state.error = action.error.message;
        state.pending = false;
      });
  },
});

export default cartSlice.reducer;
export const {refetch,addCart} = cartSlice.actions;
