import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../style/Footer.css";


const QuickLinks = [

    {
        path: '#',
        display: 'About',
     },
    {
       path: '#',
       display: 'Privacy Policy',
    },
    {
        path: '#',
        display: 'Car List' 
     },
     {
        path: '#',
        display: 'Contact' 
     },
]

const Footer = () =>{
    const date = new Date()
    const year = date.getFullYear()

    return(

        <div className="footer" style={{background: '#181b3a', fontSize: '18px', fontFamily: '-moz-initial'}}>
   <Container>

<Row>
  <Col lg='4' md='4' sm='6'>


  <div className="logo footer_logo">
            <h1>
                <Link to='/home' className="d-flex align-items-center gap-3">
  <i class="ri-car-line"> </i>
  <span>Car Rent <br /> Services </span>
                </Link>
            </h1>
        </div>

        <p className="footer_logo_content">

       Way back when people were still into travelling,
	   they would often book car rentals than to bring their own vehicles with them. 
	   There is nothing wrong with doing that,
	   since it’s more convenient when you want to travel, 
	   as you don’t have to bother with a lot of things like papers and higher expenses.
	   There are good things to be expected when you plan on renting a car.
        </p>

  </Col>  
  <Col lg='2' md='4' sm='3'>
   <div className="mb-4">
    <h5 className="footer_link-title">Quick Links</h5>
    <ListGroup>
{

   QuickLinks.map((item, index) =>(<ListGroupItem key={index} className="p-0 mt-3 
   quick_link"> 
 <Link to={item.path}>{item.display}</Link>
   </ListGroupItem>)) 
}

    </ListGroup>
   </div>

  </Col>

  <Col lg="3" md="4" sm="6">
<div className="mb-4">
<h5 className="footer_link-title mb-4">Header Office</h5>
<p className="office_info">Kigali Gasabo</p>
<p className="office_info">Email: carservices@gmail.com</p>
<p className="office_info">Phone: +2507889046</p>
<p className="office_info">Office Time: 8am - 6pm </p>

</div>   

   </Col>
   <Col lg="3" md="4">
   <div className="mb-4">
   <h5 className="footer_link-title">Comments</h5>
   <p className="section_description"></p>
   <div className="newletter">
   <input type="email" placeholder="Email" />
<span><i class="ri-send-plane-line"></i></span>
   </div>

   </div>

   </Col>
   <Col lg='12'>

    <div className="footer_bootom">
        <p className="section_description d-flex align-items-cennter justify-content-center gap-1 pt-4">
<i class="ri-copyright-line"></i> Copyright  {year}, Developed by Martin. All Rigth Reseved.

        </p>
    </div>
   </Col>

</Row>

   </Container>
        </div>
    );
}

export default Footer;