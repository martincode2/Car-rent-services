//import { e } from "fonts/defaultFont";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  
  const [id, idchange]=useState("");
  //const [custname, custnamechange]=useState("");
  const [email, emailchange]=useState("");
  const [phone, phonechange]=useState("");
  const [password, passwordchange]=useState("");

  const navigate = useNavigate();

  const isValidate=()=>{
    let isproceed=true;
    let errormessage = 'Please Enter the Value';
    if(id ===null || id ===''){
      isproceed=false;
      errormessage += ' username ';
    }
    if(email ===null || email ===''){
      isproceed=false;
      errormessage += ' Email ';
    }
    if(phone ===null || phone ===''){
      isproceed=false;
      errormessage += '  Phone Number ';
    }
    if(password===null || password ===''){
      isproceed=false;
      errormessage += ' Password ';
    }
    if(!isproceed){
      toast.warning(errormessage);
    }else{

      if(/^[a-zA-Z0-9]+@[0-zA-z0-9]+\.[A-Za-z]+$/.test(email)){

      }else{

        isproceed=false;
        toast.warning('Please Enter Valid email');
      }
    }
    return isproceed;

  }

  const handleSubmit = (e)=>{
    
    e.preventDefault();
    let regobj = {id, email, phone, password};
    //console.log(regobj);
    if(isValidate()){
    fetch("http://localhost:3000/Car-rent-customers", {
      method: 'POST',
      headers: {"content-type":"application/json"},
      body: JSON.stringify(regobj)
    }).then((res)=>{
toast.success('Register Successfuly');
       navigate('/login');
    }).catch((err)=>{
      toast.error('Failed :' +err.message);

    });
  }
}
            return (
           <diV>
           <div className="offset-lg-3 col-lg-6">
           <form className="container" onSubmit={handleSubmit}>


            <div className="card">

            <div className="card-header">
            <h1>Customer Registration</h1>
            </div>
            <div className="card-body">
            <div className="row">
                <div className="col-lg-6">
<div className="form-group">
<label>UserName<span className="errmsg">*</span></label>
<input value={id} onChange={e=>idchange(e.target.value)} className="form-control"></input>
</div>

                </div>
                {/*<div className="col-lg-6">
<div className="form-group">
<label>Full Name<span className="errmsg">*</span></label>
<input value={custname} onChange={e=>custnamechange(e.target.value)} className="form-control"></input>
</div>

                </div>*/}
                <div className="col-lg-6">
<div className="form-group">
<label>Email<span className="errmsg">*</span></label>
<input value={email} onChange={e=>emailchange(e.target.value)}  className="form-control"></input>
</div>
                </div>
                <div className="col-lg-6">
<div className="form-group">
<label>Phone<span className="errmsg">*</span></label>
<input value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
</div>
                </div>
                <div className="col-lg-6">
<div className="form-group">
<label>Password<span className="errmsg">*</span></label>
<input value={password} onChange={e=>passwordchange(e.target.value)} type="password" className="form-control"></input>
</div>
                </div>

            </div>
         </div>
           <div className="card-footer">
           <button type="submit" className="btn btn-primary">Register</button>


           </div>

            </div>
            
           </form>

           </div>
           
           </diV>
            );

}

export default Register;