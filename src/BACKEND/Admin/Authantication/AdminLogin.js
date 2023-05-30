import '../../src/App2.css';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    toast.success('Successfuly Login Welcome Admin!');
    sessionStorage.setItem('id', id);
    usenavigate('/dashboard');

}else{

toast.error('Please Enter Your Creaditails');

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
        toast.error('please Enter Collected Your Username');
    }
    if(password ==='' || password ==null){
        result = false;
       toast.error('please Enter Your valid Credentails');
    }
    return result;
}
    return (
        <diV style={{margin: '60px'}}>
        <div className="offset-lg-3 col-lg-5">
        <form className="container" onSubmit={proceedLogin}>


         <div className="card">

         <div className="card-header">
         <h1>Admin Login</h1>
         </div>
         <div className="card-body">
         <div className="row">


         <div className="form-goup">
<label>UserName <span className="errmsg">*</span></label>
<input type="text" placeholder='UserName' value={id} onChange={e=>idupdate(e.target.value)} className="form-control"></input>
</div>
      
             <div className="form-goup">
<label>Password <span className="errmsg">*</span></label>
<input type="password"  placeholder='Password' value={password} onChange={e=>passwordupdate(e.target.value)} className="form-control"></input>
</div>

         </div>
      </div>
      <div className="card-footer" style={{margin: '20px'}}>
<button type="submit" style={{marginLeft: '90px'}} className="btn btn-primary">Login</button>
</div>

         </div>
         
        </form>

        </div>
        
        </diV>
    )
}

export default Login;