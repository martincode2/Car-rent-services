import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const  CarsDetails = () =>{
    const {carid} = useParams();
    const [carsdata, carschange]= useState({})

    useEffect(()=>{
        fetch(" http://localhost:7000/cars-details/" +carid).then((res)=>{
            return res.json();
        }).then((resp)=>{
        carschange(resp);
        
        }).catch((err)=>{
            console.log(err.message);
        })
            },[])
 return (
<div>

<div className="card" style={{"textAlign" : "left", padding: '20px'}}>
<div className="card-title">

    <h2>The Dails</h2>
</div>
<div className="card-body">


</div>


{ carsdata &&

<div>
    <h1>The Car Name is  : {carsdata.carName} ({carsdata.id})</h1>

    <h3>cars Deails: </h3>
    <h5>Car Brand: {carsdata.brand} </h5>
    <h5>Model: {carsdata.model} </h5>
    <h5>Speed: {carsdata.speed} </h5>
    <h5>Price: {carsdata.price} </h5>
    <h5>Description: {carsdata.description} </h5>
    <Link to='/carcontrol' className="btn btn-danger">Back to Listing </Link>
    </div>
}


</div>
</div>

    );

}


export default CarsDetails;
