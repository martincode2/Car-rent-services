//import React, { useState, useEffect } from "react";
//import { useSelector, useDispatch } from "react-redux";
import DefaultReyout from "../components/DefaultReyout";
//import { useDispatch, useSelector } from "react-redux";
import { Button} from 'antd';
//import { DatePicker } from 'antd';

//import { useFetchers } from "react-router-dom";
//import { getAllCars } from "../components/redux/actions/carsAction"


export default function Home(){
//const {cars} = useSelector(state=>state.carsReducer)

return(
   <DefaultReyout>
<h1>Home page </h1>

<Button type="primary">Welcome</Button>
   </DefaultReyout>   
)

}

