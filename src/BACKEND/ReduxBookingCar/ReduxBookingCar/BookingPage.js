import React  from "react";
//import '../src/App.css';
import "../../src/App.css";
import 'remixicon/fonts/remixicon.css'
//import React from "react";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";       
//core
import "primereact/resources/primereact.min.css";                                             
import 'bootstrap/dist/css/bootstrap.min.css';


import { Button } from 'primereact/button'; 
import image1 from "../../ReduxBookingCar/images/car.png";
import image2 from "../../ReduxBookingCar/images/car3.png";
import image3 from "../../ReduxBookingCar/images/car4.png";
import image4 from "../../ReduxBookingCar/images/cra1.png";
import image5 from "../../ReduxBookingCar/images/cr2.png";
import { useDispatch } from "react-redux";
import { AddCart } from "./BookingSystem";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";


const products = [
    {id: 1, thumbnail: image1, title: "Audi Germain", price: 5000,},
    {id: 2, thumbnail: image2, title: "Telsa Malib", price: 6000,},
    {id: 3, thumbnail: image3, title: "Audi Hennessey", price: 7000,},
    {id: 4, thumbnail: image4, title: "Audi Germain", price: 8000},
    {id: 5, thumbnail: image5, title: "Audi Germain", price: 9000},

];

const BookingPage = () =>{


    const usenavigate=useNavigate();

useEffect(()=>{

    let id = sessionStorage.getItem('id');
    if(id==='' || id ===null){
        usenavigate('/customerlogin'); 
    }

},[]);
       
const dispatch = useDispatch();
const navigate = useNavigate();

    return(




        <div style={{fontSize: '20px', marginTop: '30px'}}>

        <div align="center" className="main-div" >

            <h1 className='p button rounded p button secondary' style={{color: 'white'}}>All Cars Rent{" "}
            
            <Button 
            label="Car Rent Page"
            className="p button rounded p button secondary"
            onClick={() => navigate("/bookingcar")}
            />
            <Button 
            label="Logout"
            className="p button rounded p button secondary" style={{marginLeft: '150px', background: '#181b3a'}}
            onClick={() => navigate("/login")}
            />


            </h1>
        </div>

        <div className="grid p-6 justify-content-center" style={{display: 'inline-flex', paddingTop: '30px', justifyItems: 'center', alignItems: 'center'}}>
        {products.map((item) =>(
            <div className='card-cars'>
<div style={{marginLeft: '200px', display: 'inline-flex'}} className='card-cars'>
            <div 
            key={item.id}
  className="card flex-column w-3 justify-content-center align-items-center main p-3 m-1 mb-4 mr-4 " style={{width: '400px',  maxHeight: '1200px'}}

   >
   <img src={item.thumbnail} alt="" style={{width: '300px'}} className="w-10 imgBorder"/>

   <label htmlFor="" className="text-4xl font-semibold">

    <b style={{fontSize: '30px', color: '#000000'}}>{item.title}</b>

   </label>
   <label htmlFor="" className="text-4xl">
  <b style={{color: '#000000'}}>price: Frw</b> <small style={{color: '#000000'}}>{item.price}</small>

   </label>
  <Button
  label="Booking"
  className="p-button-rounded p-button-secondary"
  onClick={()=>dispatch(AddCart(item))}
  />

</div>
</div>
</div>

 ))}


        </div>

       </div>



    )
        



}


export default BookingPage;