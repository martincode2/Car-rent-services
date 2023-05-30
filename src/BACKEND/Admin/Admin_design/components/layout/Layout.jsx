//import Footer from "../Footer/Footer";
import Footer from '../footer/Footer';
import Header from "../header/Header";
import Routers from "../../router/Routers";
import React, { Fragment } from "react";
import Admin from '../../../BACKEND/Admin/Admin';

//import Layout2 from '../../pages/Layout/Layout2';


const Layout = () =>{

    return (

        <Fragment>

        <Header/>
        <div>
        <Routers />
        <div className='App'>
       <Admin/>
       <div className='App'>

    
       </div>
       
       </div>
        </div>
        <Footer />
      
        </Fragment>
     
    
    );

   

        
}

export default Layout;