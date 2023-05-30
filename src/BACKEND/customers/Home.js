import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const Home = () =>{
 const usenavigate = useNavigate();
    useEffect(()=>{

        let id = sessionStorage.getItem('id');
        if(id==='' || id ===null){
            usenavigate('/'); 
        }
    },[]);
    return(
 <>
    <div className="header">
<Link style={{textDecoration: 'none', width:'30%', color: 'white', paddingTop: '20px'}}  to={'/'}></Link>
<Link style={{float: 'left', textDecoration:  'none', paddingLeft: '20px', color: 'white', paddingTop: '20px'}} to={''}>Home</Link>
<Link style={{float: 'right', width: '20%', textDecoration: 'none', color: 'white', paddingTop: '20px'}} to={'/login'}>Logout</Link>
<h4 style={{paddingTop: '40px'}}>Welcome To Car Rent Services</h4>


        </div>
        <div className="text-center">

        
        
        </div>
        
       
       </>
    );
}

export default Home;