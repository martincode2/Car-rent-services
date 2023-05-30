
import './App.css';
import 'remixicon/fonts/remixicon.css'
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import CarsList from './BACKEND/redux/CarsList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarsCreate from './BACKEND/redux/CarsCreate';
import CarsDetails from './BACKEND/redux/CarsDetails';
import CarsEdit from './BACKEND/redux/CarsEdit';





function App(){

    return(
<div className='App'>

<h1>Admin Control Car Details</h1>

<BrowserRouter>
    <Routes>


<Route path='/' element={<CarsList />}></Route> 
<Route path='/cars/create' element={<CarsCreate />} ></Route>
<Route path='/cars/detail/:carid' element={<CarsDetails/>} ></Route>
<Route path='/cars/edit/:carid' element={<CarsEdit />}></Route> 


    </Routes>
</BrowserRouter>


</div>
       
    );

   


}

export default App;
