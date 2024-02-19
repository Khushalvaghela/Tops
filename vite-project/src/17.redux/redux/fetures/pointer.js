import { createSlice } from "@reduxjs/toolkit";

const pointSlice=createSlice({
    name:"point",
    initialState:{point: 0.99},
    reducers:{
        ispoint:(state, action)=>{
            state.point+= 0.01
        }
    }
})


export default pointSlice.reducer;
export const{ispoint}=pointSlice.actions