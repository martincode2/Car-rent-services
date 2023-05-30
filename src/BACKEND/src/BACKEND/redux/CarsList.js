
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import React, { useEffect, useState } from "react";

const CarsList = () =>{
    const [carsdata, carschange]=useState(null);
   const navigate=useNavigate();
  

    const LoadDetail =(id)=>{

        navigate('/cars/detail/' +id);

    }
    const LoadEdit =(id)=>{
        navigate('/cars/edit/' +id);

    }
    const RemoveFunction =(id)=>{

        if(window.confirm('Do you Want To Remove?'));


        
fetch( "http://localhost:7000/cars-details/"+id, {
    method: 'DELETE',
}).then((res)=>{

alert('Remove Succesfully.');
window.location.reload();
}).catch((err) => {

    console.log(err.message);
})

    }
    

    useEffect(() => {

fetch("http://localhost:7000/cars-details/").then((res)=>{
    return res.json();
}).then((resp)=>{
carschange(resp);

}).catch((err)=>{
    console.log(err.message);
})
    },[])


    return (
        <div className="container">
      <div className="card">
 
        <div className="card-title">
      <h2>Cars LIst</h2>
        </div>
        <div>
    
  </div>
        <div className="card-body"> 
        <div className='divbtn'>
        <Link to="/cars/create" className='btn btn-success'>Add New Car (+)</Link>
        </div>
<table className="table taable-bordered">
<thead className=" bg-dark text-white">

<tr>
<td>Id</td>
<td>Brand</td>
<td>Car Name</td>
<td>Model</td>
<td>Price</td>
<td>Speed</td>
<td>Description</td>
<td>Action</td>

</tr>
</thead>

<tbody>

{ 
    carsdata &&
    carsdata.map(item => (

        <tr key={item.id}>

            <td>{item.id}</td>
            <td>{item.brand}</td>
            <td>{item.carName}</td>
            <td>{item.model}</td>
            <td>{item.price}</td>
            <td>{item.speed}</td>
            <td>{item.description}</td>
           <td><a onClick={()=>{LoadEdit(item.id )}} className="btn btn-success">Edit</a>
            <a onClick={()=>{RemoveFunction(item.id )}} className="btn btn-danger">Remove</a>
            <a onClick={()=>{LoadDetail(item.id )}} className="btn btn-primary">Details</a>
            </td>
        </tr>
    
    ))
}

</tbody>
</table>

        </div>
      </div>

        </div>

        
    )
}


export default CarsList;