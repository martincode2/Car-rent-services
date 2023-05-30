
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function CarsEdit (){

    
const {carid} = useParams();
    //const [carsdata, carschange]= useState({})

    useEffect(()=>{
        fetch("http://localhost:7000/cars-details/" +carid).then((res)=>{
            return res.json();
        }).then((resp)=>{
        idchange(resp.id);
        brandchange(resp.brand);
        carnamechange(resp.carName);
        modelchange(resp.model);
        pricechange(resp.price);
        speedchange(resp.speed);
        descriptionchange(resp.description);
        activechange(resp.isactive);
        
        }).catch((err)=>{
            console.log(err.message);
        })
            },[])


    const [id,idchange]=useState("");
    const [brand,brandchange]=useState("");
    const [carName,carnamechange]=useState("");
    const [model,modelchange]=useState("");
    const [price,pricechange]=useState("");
    const [speed,speedchange]=useState("");
    const [description,descriptionchange]=useState("");
    const [active,activechange]=useState(true);
    const [validation,validationchange]=useState(false);

    const navigate=useNavigate(); 

    const handleSubmit = (e) =>{
        e.preventDefault();
const carsData={id, brand, carName, model, price, speed, description, active};

fetch("http://localhost:7000/cars-details/"+carid, {
    method: 'PUT',
    headers: {"content-type":"application/json"},
    body: JSON.stringify(carsData)
}).then((res)=>{

alert('Update Succesfully.');
navigate('/carcontrol');
}).catch((err) => {

    console.log(err.message);
})

    }

 return (

    <div>

<div className="row" style={{margin: '60px'}}> 

    <div className="offset-lg-3 col-lg-5">
   <form className="container" onSubmit={handleSubmit}>
<div className="card" style={{"textAlign":"left"}}>
<div className="card-title">
<h2 style={{textAlign: 'center', padding: '5px'}}>Cars Edit & Uppdate</h2>
</div>

<div className="card-body">

    <div className="row">
    
<div className="col-lg-11">
<div className="form-group">
<label>Id</label>
<input value={id} disabled="disabled" className="form-control"></input>
</div>
</div>

<div className="col-lg-11">
<div className="form-group">
<label style={{color: '#000000',fontSize: '20px'}}>Brand</label>
<input  required value={brand} onMouseDown={e=>brandchange(true)} onChange={e=>brandchange(e.target.value)} className="form-control"></input>
{brand.length==0 && validation && <span className="text-denger">Enter Brand</span>}
</div>
</div>

<div className="col-lg-11">
<div className="form-group">
<label style={{color: '#000000',fontSize: '20px'}}>Car Name</label>
<input value={carName} onChange={e=>carnamechange(e.target.value)}  className="form-control"></input>
</div>
</div>

<div className="col-lg-11">
<div className="form-group">
<label style={{color: '#000000',fontSize: '20px'}}>Model</label>
<input value={model} onChange={e=>modelchange(e.target.value)}  className="form-control"></input>
</div>
</div>

<div className="col-lg-11">
<div className="form-group">
<label style={{color: '#000000',fontSize: '20px'}}>Price</label>
<input value={price} onChange={e=>pricechange(e.target.value)}  className="form-control"></input>
</div>
</div>

<div className="col-lg-11">
<div className="form-group">
<label style={{color: '#000000',fontSize: '20px'}}>Speed</label>
<input value={speed} onChange={e=>speedchange(e.target.value)}  className="form-control"></input>
</div>
</div>

<div className="col-lg-11">
<div className="form-group">
<label style={{color: '#000000',fontSize: '20px'}}>Description</label>
<input value={description} onChange={e=>descriptionchange(e.target.value)}  className="form-control"></input>
</div>
</div>

<div className="col-lg-11">
<div className="form-check">
<input value={active} onChange={e=>activechange(e.target.checked)}  type="checkbox" className="form-check-input"></input>
<labe className="form-check-label">Is Active</labe>

</div>
</div>


<div className="col-lg-11">

    <div className="col-lg-11">

<button className="btn btn-success" type="submit">Uppdate</button>
<Link to="/carcontrol" className="btn btn-danger">Back</Link>
    </div>
</div>

    </div>
</div>
</div>
</form>

   </div>
    </div>
</div>
 


    );

}


export default CarsEdit ;
