
import '../src/App2.css';
import 'remixicon/fonts/remixicon.css'
import React from "react";
import {ToastContainer} from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
//import Login from './Authantication/Login';
//import Register from './Authantication/Register';
//import Home from './Authantication/Home';
//import Home from '../customers/Home';
import Register from '../customers/Register';
//import Login from '../customers/Login';
import Home from '../../FRONTEND/pages/Home';
//import Login1 from '../../FRONTEND/pages/Login1';
//import customerLogin from './customerLogin';
//import CustomerLogin from '../customers/CustomerLogin';
import CustomerLogin from '../customers/CustomerLogin';
//import CustomerRegister from '../customers/CustomerLogin';




function CustomerRouter(){

    return(
<div className='App'>
<ToastContainer theme='colored'>

</ToastContainer>


<Routes>
<Route path='/' element={<Home />}></Route>
<Route path='/customerlogin' element={<CustomerLogin/>}></Route>
<Route path='/register' element={<Register/>}></Route>
</Routes>



</div>
       
    );

   


}

export default CustomerRouter;
