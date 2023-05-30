
//import './App.css';
import "../../App.css";
import 'remixicon/fonts/remixicon.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import CarsList from './BACKEND/redux/CarsList';
import {Link, Route, Routes } from 'react-router-dom';
//import CarsCreate from './BACKEND/redux/CarsCreate';
//import CarsDetails from './BACKEND/redux/CarsDetails';
//import CarsEdit from './BACKEND/redux/CarsEdit';
import CarsEdit from '../redux/CarsEdit';
import CarsCreate from '../redux/CarsCreate';
import CarsList from '../redux/CarsList';
import CarsDetails from "../redux/CarsDetails";




function Car_Control(){

    return(
<div className='App'>

<h1><Link to={'/dashboard'} style={{textDecoration: 'none', color: 'white'}}>Admin Dashboard</Link></h1>


    <Routes>


<Route path='/' element={<CarsList />}></Route> 
<Route path='/cars/create' element={<CarsCreate />} ></Route>
<Route path='/cars/detail/:carid' element={<CarsDetails/>} ></Route>
<Route path='/cars/edit/:carid' element={<CarsEdit />}></Route> 


    </Routes>



</div>
       
    );

   


}

export default Car_Control;
