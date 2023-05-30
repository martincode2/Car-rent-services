import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip} from "recharts";
import mileStatics from "../assets/DumpData/mileStatiscs";


const MileChart = () => {



    return (


        <ResponsiveContainer width='100%' aspect={2 /1}>

        <BarChart data={mileStatics}>
        <XAxis dataKey='name' stroke="#2884ff"/>
     <Bar
      dataKey='mileStats' 
      stroke="#2884ff" 
      fill="#2884ff" 
     barSize={30} />

     <Tooltip wrapperClassName="tooltip_style" cursor={false} />
        </BarChart>
    </ResponsiveContainer>

    );


}




export default MileChart;
