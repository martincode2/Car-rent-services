//import { configureStore } from "@redux/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import BookingSystem from "./BookingSystem"


const store = configureStore({

    reducer:{

        user:BookingSystem
    }
       
    
   
    


    
})
export default store;