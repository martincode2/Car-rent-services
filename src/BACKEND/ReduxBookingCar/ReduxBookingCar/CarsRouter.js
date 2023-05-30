import React from "react";
import '../../src/App.css';
import BookingCar from "./BookingCar";
import { Routes, Route} from "react-router-dom";
import BookingPage from "./BookingPage";

const Carsrouter = ()=>{
return(
<div className="APP">
<Routes>
    <Route path="/bookingcar" element={<BookingCar/>}/>
    <Route path="/" element={<BookingPage />}/>
</Routes>
</div>

        
);

}

export default Carsrouter;