import React from "react"
import { DatePicker } from 'antd';
import { Button} from 'antd';
import { useDispatch, useSelector } from "react-redux";
export default function DefaultReyout(props)
{
    return(
        

       
        <div className="header martin">
<div className="d-flex justify-content-between">
    <h1>Car Retting Services</h1>
    <DefaultReyout>
    <Button className="primary">Costomer </Button>
    <Button className="primary">Admin Page</Button>
   
</DefaultReyout>

        </div>
<div className="content">
{props.children}


</div>

        </div>

    )
};