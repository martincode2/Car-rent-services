import React, {useContext, useRef,useState} from "react";

import { useEffect } from "react";
import { globaldata } from './App';


const About = () =>{

    const data = useEffect(1);
    const [value, setValue] = useState("")

    useEffect(() =>{

        data.current = data.current+1
    })

    const {colorChange, mydata,output} = useContext(globaldata);

    let person = "red"

    return(

        <div align="center">

        <h2 style={{color: colorChange}}>Successfuly Login{data.curent.name}</h2>
        <input type="text" value={value} onChange={(e) =>setValue(e.target.value)}/> 
        <h4>{value}</h4>

        <button onClick={()=> output}>done</button>


        </div>
    );

}

export default About;