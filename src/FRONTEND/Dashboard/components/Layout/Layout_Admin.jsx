import React from "react";
//import { Layer } from "recharts";
import Router from "../../Router/Router";
import Sidebar from "./Sidebar/Sidebar";
import TopNav from "./TopNav/TopNav";






const Layout = () => {
    return <div className="layout">
<Sidebar />
<div className="main_layout">
<TopNav />
<div className="content">

<Router />



</div>

</div>

    </div>
};

export default Layout;