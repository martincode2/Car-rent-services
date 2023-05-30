import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "remixicon/fonts/remixicon.css";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
//import Store from './BACKEND/Customers_Cars_Booking/ReduxBookingCar/Store';
import store from "./BACKEND/ReduxBookingCar/ReduxBookingCar/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <Router>
    <Provider store={store}>
    <App />
    </Provider>
    </Router>
   
  </React.StrictMode>
);
