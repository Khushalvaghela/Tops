import { createSlice } from "@reduxjs/toolkit";

const amountSlice= createSlice({
    name:"amount",
    initialState:{amount:100 },
    reducers:{
        isone:(state, action)=>{
      state.amount++;
        }
    },
    extraReducers:(builder)=>{
      builder.addCase("point/ispoint", (state, action)=>{
        state.amount++;
      })
    }
})

export default amountSlice.reducer;
export const{isone}=amountSlice.actions
