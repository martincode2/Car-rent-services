
import Footer from '../footer/Footer';
import Header from "../header/Header";
import Routers from "../../router/Routers";
import React, { Fragment } from "react";
import CustomerRouter from '../../../BACKEND/customers/customerRouter';

const Layout_Admin = () =>{

    return (

        <Fragment>
        <Header/>
        <div>
        <Routers />
        <div className='App'>

       <CustomerRouter/>
       
       </div>
       <div className='App'>
       </div>
        </div>

    
        <Footer />
        
        </Fragment>
     
    
    );
      
}

export default Layout_Admin;