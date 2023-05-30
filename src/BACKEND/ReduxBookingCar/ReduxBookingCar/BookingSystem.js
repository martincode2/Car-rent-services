import { createSlice } from "@reduxjs/toolkit";
const BookingSystem = ()=>{
    
}
const initialState = {
    carts:[],
    quantity:0
}



const BookinngSystem = createSlice({
    name: "user",
    initialState,
    
    reducers:{
        AddCart:(state,action)=>{
            state.carts.push(action.payload)
        }
    }
    
    })
    
    
    
    export const {AddCart} = BookinngSystem.actions;
    export default BookinngSystem.reducer;
    
    
    
