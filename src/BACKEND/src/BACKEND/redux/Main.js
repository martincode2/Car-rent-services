import React from "react";
import { Provider } from "react-redux";
// App from "./App";
import App from "../../App";
import { ReactDOM } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
//import UserReducer from "./UserReducer";
import { useReducer } from "react";

const store = configureStore({
    


    reducer: {
        user: useReducer
    }
})


ReactDOM.createRoot(document.getElementById)(('root')).render(


    <React.StrictMode>
<Provider store={{}}>
<App />
</Provider>
        
    </React.StrictMode>
)
