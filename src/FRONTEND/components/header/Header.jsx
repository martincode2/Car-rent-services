import React from "react";
import { Link} from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import '../../style/Header.css';

//import {Link} from "react-router-dom";

 
const Header = () =>{

    //const navavigate = useNavigate();
  
   
   

    return(

       <header className="header">
      {/*  <button onClick={() => navavigate('/ccount')}>Click Header</button>

{/*======================= header top =============*/}

<div className="header_top">

<Container>

<Row>
    <Col lg='6' md='6' sm='6'>

    <button className="header_btn btn" style={{float: 'top', height: '10px', width: '350px', marginRight: '30px', top: '60px'}}>
    <Link to='/adminlogin' style={{paddingRight: '300px', fontFamily: '-moz-initial', fontSize: '30px', color: 'white', marginTop: '40px'}}>
    <i class="ri-user-line"></i><div style={{color: 'white', marginRight: '90px', fontFamily: '-moz-initial'}}>Admin</div>
    </Link>
  </button>
<div className="header-left">


</div>

    </Col>
    {/*<Col lg='6' md='6' sm='6'>
   <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
<Link to={'/account'} className="d-flex align-items-center gap-1"> 
<i class="ri-login-circle-line"></i>Login</Link>
<Link className="d-flex align-items-center gap-1">
<i class="ri-user-line"></i><Link to="/admin"> Admin</Link>
</Link>
   </div>
  
    </Col>*/}
</Row>

</Container>

</div>
{/*========================= Header Middle =============*/}
<div className="header_middle" style={{height: '70px'}}>
<Container>
    <Row>
        <Col lang="4" md="3" sm="4">
        <div className="logo">
            <h1>
            <Link to='/home' className="d-flex align-items-center gap-3" style={{color: 'white'}}> <div style={{padding: '10px 6px 3px 0px', fontFamily: '-moz-initial', transition: '-moz-initial 2s'}}></div>
                <Link to='/home' className="d-flex align-items-center gap-3" style={{color: 'white'}}> <div style={{padding: '10px 4px 3px 0px', fontFamily: '-moz-initial', transition: '-moz-initial 2s'}}>Home</div></Link>
  <i class="ri-car-line"> </i>
  <span>Car Rent <br /> Services </span>
                </Link>
            </h1>
        </div>
        

        </Col>
        <Col lang="3" md='3' sm='4'>

        </Col>
        <Col lang="3" md='3' sm='4'>

        </Col>
        <Col lg='2' md='3' sm='0' className="text-end" style={{paddingLeft: '200px', bottom: '12px'}}>

  <button className="header_btn btn">
    <Link to='/contact' style={{paddingRight: '100px'}}>
<i class='ri-phone-line'></i> Request a Call
    </Link>
  </button>
  
        </Col>
    </Row>
</Container>
</div>

{/*============================= Main Navigation ============*/}

{/*<div className="main_navbar">

    <Container>

<div className="navgation_wrapper d-flex align-items-center justify-content-between">

    <span className="mobile_menu">
    <i class="ri-menu-line"></i>
    </span>
    <div className="navigation">
   

    </div>
    <div className="nav_right">
<div className="search_box">
<input type="text" name="" id="" placeholder="Search" />
<span>
    <i class="ri-search-line"></i>
</span>
</div>
    </div>

   </div>

    </Container>
</div>*/}

       </header>
    
    );
}

export default Header;