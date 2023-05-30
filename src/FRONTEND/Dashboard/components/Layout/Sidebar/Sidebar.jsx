import React from "react";
import { NavLink } from "react-router-dom";
//import NavLinks from "../../../pages/NavLinks"
import "./Sidebar.css";
import NavLinks from "../../../assets/NavLinks";



const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="sidebar_top">

            <h2>
            <span><i class="ri-taxi-line"></i></span>Car Renting
            </h2>
        </div>
   <div className="sidebar_content">
<div className="menu">
<ul className="nav_list">
 

{NavLinks.map((item, index) => (
        <li className="nav_item" key={index}>
        <NavLink 
        to={item.path}
         className={(navClass) => 
         navClass.isActive ? 'nav_active nav_link'  : 
        'nav_link'}>
        
        <i className={item.icon}></i>

        {item.display}
    </NavLink>
    </li>
    
    
    ) )}


</ul>

   </div>
<div className="sidebar_bottom">
<span><i class="ri-logout-circle-line"></i>Logout

</span>

</div>

   </div>

        </div>


    );
       

    
};
export default Sidebar;