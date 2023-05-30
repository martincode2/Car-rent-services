
import { Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CarDetails from '../pages/CarDetails';
import Cartlisting from "../pages/Cartlisting";
import Admin from '../../BACKEND/Admin/Admin';
import Layout2 from '../pages/Layout/Layout2';
import Dashboard from '../../BACKEND/Admin/Dashboard/Dashboard';




const Router = () =>{

    return(


       <Routes>
<Route path='/' element={<Navigate to='home'/>} />
<Route path='/home' element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/cars' element={<Cartlisting/>} />
<Route path='/cars:slug' element={<CarDetails/>} />
<Route path='/admin' element={<Admin/>} />
<Route path='/admin' element={<Admin/>} />
<Route path='/layout2' element={<Layout2/>} />
<Route path='/dashboard' element={<Dashboard/>} />


       
       </Routes>
    );
}

export default Router;