
import { Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CarDetails from '../pages/CarDetails';
import Cartlisting from "../pages/Cartlisting";
import Login from '../../BACKEND/customers/Login';
import AdminLogin from "../../BACKEND/Admin/Authantication/AdminLogin";
import TopNav from "../../FRONTEND/Dashboard/components/Layout/TopNav/TopNav";
import SideBar from "../../FRONTEND/Dashboard/components/Layout/Sidebar/Sidebar";
import Dashboard from "../../FRONTEND/Dashboard/pages/Dashboard";
import Layout_Admin from '../Dashboard/components/Layout/Layout_Admin';
import Car_control from "../../BACKEND/src/BACKEND/Car_Control/Car_control";
import CarsCreate from '../../BACKEND/src/BACKEND/redux/CarsCreate';
import CarsEdit from '../../BACKEND/src/BACKEND/redux/CarsEdit';
import CarsDetails from '../../BACKEND/src/BACKEND/redux/CarsDetails';
import BookingCar from "../../BACKEND/ReduxBookingCar/ReduxBookingCar/BookingCar";
import BookingSystem from "../../BACKEND/ReduxBookingCar/ReduxBookingCar/BookingSystem";
import CarsRouter from "../../BACKEND/ReduxBookingCar/ReduxBookingCar/CarsRouter";
import BookingPage from '../../BACKEND/ReduxBookingCar/ReduxBookingCar/BookingPage';


function Router() {

    return (


        <Routes>
            <Route path='/' element={<Navigate to='home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cars' element={<Cartlisting />} />
            <Route path='/cars:slug' element={<CarDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/adminlogin' element={<AdminLogin />} />
            <Route path='/sidebar' element={<SideBar />} />
            <Route path='/topnav' element={<TopNav />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/layoutadmin' element={<Layout_Admin />} />
            <Route path='/carcontrol' element={<Car_control />} />
            <Route path='cars/create' element={<CarsCreate />} />
            <Route path="/cars/edit/:carid" element={<CarsEdit />} />
            <Route path='/cars/detail/:carid' element={<CarsDetails />} />
            <Route path='/bookingcar' element={<BookingCar />} />
            <Route path='/bookingsystem' element={<BookingSystem />} />
            <Route path='/carsrouter' element={<CarsRouter />} />
            <Route path='/bookingpage' element={<BookingPage />} />
        </Routes>
    );
}

export default Router;