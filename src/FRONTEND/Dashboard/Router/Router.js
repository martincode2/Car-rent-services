import React from "react";

import {Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "../pages/Dashboard";
import Booking from "../pages/Booking";
import SellCar from "../pages/SellCar";
import Settings from "../pages/Settings";






const Router = () => {
    return (
     
 <Routes>
<Route
 path="/" 
 element={<Navigate to="/dashboard" element={<Dashboard />} />} />
<Route path="/dashboard" element={<Dashboard/>} />
<Route path="/booking" element={<Booking/>} />
<Route path="/sellcar" element={<SellCar/>} />
<Route path="/settings" element={<Settings/>} />


        </Routes>

        
);
};

export default Router;