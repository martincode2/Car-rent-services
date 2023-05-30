import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
        
import { useSelector } from "react-redux";



const BookingCar = () =>{

const {carts} = useSelector(item=>item.user)

const navigate = useNavigate();

return (
 
    <div>
    <div>

    <div align="center">
    <h1 className="text-text" ><div style={{float: 'right'}}></div>
    
    <Button 

    label="Go Back Booking Page"
    className="p button rounded p button secondary"
    onClick={()=>navigate ("/bookingpage")}
    />
    
    </h1>
<label htmlFor="" className="text-4xl"></label>
    </div>
    <div className='flex-container' style={{width: "500px", marginLeft: '300px'}}>
    <div>

        {carts?.map((item) =>(

            <div
            key={item.id}
  className="card flex flex-column w-3 justify-containt-center align-items-center main p-2 m-1 mb-4 mr-4" 

   >
   <img src={item.thumbnail} alt="" style={{width: '300px'}} className="w-10 imgBorder" />

   <label htmlFor="" className="text-4xl font-semibold">

    <b style={{fontSize: '30px', color: '#000000'}}>{item.title}</b>

   </label>
   <label htmlFor="" className="text-4xl">
  <b style={{color: '#000000'}}>price: Frw</b> <small style={{color: '#000000'}}>{item.price}</small>

   </label>

 

</div>

 ))}

        </div>
       </div>
    </div>
</div>


   
)
}

export default BookingCar;