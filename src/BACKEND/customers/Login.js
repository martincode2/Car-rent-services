import "../src/App2.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";  

const Login = () => {

const [id, idupdate] = useState('');
const [password, passwordupdate] = useState('');

const usenavigate=useNavigate();

useEffect(()=>{
    sessionStorage.clear();

},[]);

const proceedLogin = (e) => {

    e.preventDefault();  
    if(validate()){
        ///implementation
        ///console.log('proceed');

  fetch("http://localhost:3000/Car-rent-customers/"+id).then((res)=>{

  
  return res.json();
  }).then((resp)=>{
//console.log(resp);

if(Object.keys(resp).length===0){

    toast.error('Please Enter Collected Your Username');
}

if(Object.keys(resp).length===0){
    toast.error('please Enter Collected Your Password');
}else{
if(resp.password === password){
    toast.success('Successfuly Login welcome New Costomer',+id);
    sessionStorage.setItem('id', id);
    usenavigate('/carsrouter');

}else{

toast.error('please Enter valid your Credentails');

}   
}
  }).catch((err)=>{
toast.error('Login Failed Due to : ' +err.message);
  });

  }
    
}

const validate=()=>{
    let result=true;
    if(id ==='' || id ==null){
        result = false;
        toast.warning('Please Enter usename is Require');
    }
    if(password ==='' || password ==null){
        result = false;
        toast.warning('Please Enter Password is Require');
    }
    return result;
}
    return (
        <diV style={{margin: '60px'}}>
        <div className="offset-lg-3 col-lg-5">
        <form className="container" onSubmit={proceedLogin}>


         <div className="card">

         <div className="card-header">
         <h1>Customer Login</h1>
         </div>
         <div className="card-body">
         <div className="row">


         <div className="form-goup">
<label>UserName <span className="errmsg">*</span></label>
<input type="text" value={id} placeholder="Username" onChange={e=>idupdate(e.target.value)} className="form-control"></input>
</div>
      
             <div className="form-goup">
<label>Password <span className="errmsg">*</span></label>
<input type="password" placeholder="Password" value={password} onChange={e=>passwordupdate(e.target.value)} className="form-control"></input>
</div>

         </div>
      </div>
      <div className="card-footer">
<button type="submit" className="btn btn-primary">Login</button>
<Link  to={'/register'}></Link>
</div>

         </div>
         
        </form>

        </div>
        
        </diV>
    )
}

export default Login;
