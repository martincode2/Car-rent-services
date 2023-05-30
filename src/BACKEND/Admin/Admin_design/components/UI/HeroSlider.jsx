import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import '../../style/Hero_Slide.css';


const HeroSlider = () => {

    const settings = {
        fade:true,
        speed: 2000,
        authoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slideToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,


    }


return(

    

    <Slider {...settings} className="hero_slide">

        <div className="slider_item slider_item-01 mt-0">

            <Container>
                <div className="slider_content">

                    <h4 className="text-light mb-3">For Rent 300000Frw Per Day</h4>
                    <h1 className="text-light mb-4">Welcome To Car Rent Services </h1>
                    <button className="btn reserve-btn mt-4">
                        <Link to='/account'>Booking Now</Link>
                    </button>
                </div>
            </Container>
        </div>

        <div className="slider_item slider_item-02 mt-0">

<Container>
    <div className="slider_content">

        <h4 className="text-light mb-3">For Rent 300000Frw Per Day</h4>
        <h2 className="text-light mb-4">Booking  Now</h2>
        <button className="btn reserve-btn mt-4">
            <Link to='/account'>Booking Now</Link>
        </button>
    </div>
</Container>
</div>

<div className="slider_item slider_item-03 mt-0">

<Container>
    <div className="slider_content">

        <h4 className="text-light mb-3">For Rent 300000Frw Per Day</h4>
        <h2 className="text-light mb-4">Booking  Now</h2>
        <button className="btn reserve-btn mt-4">
            <Link to='/account'>Booking Now</Link>
        </button>
    </div>
</Container>
</div>

<div className="slider_item slider_item-04 mt-0">

<Container>
    <div className="slider_content">

        <h4 className="text-light mb-3">For Rent 300000Frw Per Day</h4>
        <h2 className="text-light mb-4">Booking  Now</h2>
        <button className="btn reserve-btn mt-4">
            <Link to='/account'>Booking Now</Link>
        </button>
    </div>
</Container>
</div>

    </Slider>
);

}


export default HeroSlider;