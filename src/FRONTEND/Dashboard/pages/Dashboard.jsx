import React from "react";
import '../styles/dashboard.css'
import SingleCard from "../components/reuseanable/singleCard";
import MileChart from "../charts/MileChart";
import CarStatitsChart from "../charts/CarStatitsChart";
import Image1 from "../images/car.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


 
const Dashboard = () => {

    
const usenavigate=useNavigate();

useEffect(()=>{

    let id = sessionStorage.getItem('id');
    if(id==='' || id ===null){
        usenavigate('/adminlogin'); 
    }

},[]);
    return ( 
<div className="dashboard">
<div style={{justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
<div style={{width: '380px', height: '70px', textAlign: 'center', marginBottom: '30px', background: 'var(--card-01-bg)', borderRadius: '5px'}}><h1 style={{color: 'white'}}><Link to="/cars/create" style={{color: 'white', textDecoration: 'none', fontFamily: '-moz-initial', padding: '20px', fontSize: '40px', paddingTop: '30px'}}>Add New Car</Link></h1></div>
<div style={{width: '380px', height: '70px', textAlign: 'center', marginBottom: '30px', background: 'var(--card-02-bg)', borderRadius: '5px'}}><h1 style={{color: 'white'}}><Link to="/adminlogin"  style={{color: 'white', textDecoration: 'none', fontFamily: '-moz-initial', padding: '20px', fontSize: '40px'}}>Logout</Link></h1></div>
<div style={{width: '380px', height: '70px', textAlign: 'center', marginBottom: '30px', background: 'var(--card-03-bg)', borderRadius: '5px'}}><h1 style={{color: 'white'}}><Link to={'/bookingcar'}>Cars Booked</Link></h1></div>
<div style={{width: '380px', height: '70px', textAlign: 'center', marginBottom: '30px', background: 'var(--card-04-bg)', borderRadius: '5px'}}><h1 style={{color: 'white'}}><Link to={'/carcontrol'} style={{color: 'white', textDecoration: 'none', fontFamily: '-moz-initial', padding: '20px', fontSize: '40px'}}>Details</Link></h1></div>
</div>
<div className="dashboard_wrapp">

<div className="stastics">
<div className="tats">
 <h3 className="stats_title"> Mile Statics</h3>
 <MileChart />
</div>
<div className="tats">
 <h3 className="stats_title"> Car Statics</h3>
 <CarStatitsChart />

</div>


</div>

<div className="recommend_cars-wrapper">

</div>


<div className="remmand_car_card">
<div className="recommand_car_top">

<h5><span><i class="ri-refresh-line"></i></span>74% Recommanded</h5>

</div>


<div className="recommand_card_image">

    <img src={Image1} alt="100%" width="200" />
</div>

<div className="recommand_card_bottom">

<h4>Min Audi</h4>

<div>
<div className="recommand_car_other">
<div>

</div>

</div>
<span>$23/h</span>
   
</div>
</div>

</div>

    </div>



    
</div>

    );
        

    
};
export default Dashboard;