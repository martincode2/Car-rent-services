import React from "react";
import { Link } from "react-router-dom";

import "./TopNav.css";

import Imgae1 from "../../../images/sport-car.png";



const TopNav = () => {
    return (
        <div className="top_nav">

            <di className="top_nav_wrapp">
                <div className="search_box">
                    <input type="text" placeholder="Search or type"/>
                    <span><i class="ri-search-line"></i></span>
                </div>

               <div className="top_nav-right">
                <span className="notification">
                <i class="ri-notification-3-line"></i>
                <spa className="badge">
                  1
                </spa>
                </span>
                <div className="profile">
       <Link to='/settings'>
       <img src={Imgae1} alt=""/>
       </Link>
       
                </div>
               </div> 
            </di>
        </div>

    );
};
export default TopNav;