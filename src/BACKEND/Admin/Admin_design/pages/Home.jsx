import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from '../components/helmet/Helmet';


const Home = () =>{

    return(

      <Helmet title='Home'>
        <section className="p-0 hero_slide-section">
    <HeroSlider />
  
        </section>
      
      </Helmet>


    );
}

export default Home;