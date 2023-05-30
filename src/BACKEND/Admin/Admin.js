
import '../src/App2.css';
import 'remixicon/fonts/remixicon.css'
import React from "react";
import {ToastContainer} from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Authantication/Login';
//import Home from '../../FRONTEND/pages/Home';
import Home from '../../FRONTEND/pages/Home';





function Admin(){

    return(
<div className='App'>
<ToastContainer theme='colored'>

</ToastContainer>


<Routes>
<Route path='/' element={<Home />}></Route>
<Route path='/login' element={<Login />}></Route>
</Routes>



</div>
       
    );

   


}

export default Admin;
