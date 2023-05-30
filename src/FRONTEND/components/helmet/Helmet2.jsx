import React from "react";


const Helmet2 = (props) => {
document.title = 'Abaut section' +props.title;

return(


    <div className="w-100">{props.children}</div>
);

}


export default Helmet2;