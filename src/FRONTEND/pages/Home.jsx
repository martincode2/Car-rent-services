import { React, useEffect } from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from '../components/helmet/Helmet';
import { useNavigate } from "react-router-dom";


const Home = () =>{
  const usenavigate = useNavigate();
    useEffect(()=>{

        let id = sessionStorage.getItem('id');
        if(id==='' || id ===null){
            usenavigate('/'); 
        }
    },[]);
    return(

      <Helmet title='Home'>
        <section className="p-0 hero_slide-section" style={{height: '150px'}}>
    <HeroSlider />
  
        </section>
      
      </Helmet>


    );
}

export default Home;