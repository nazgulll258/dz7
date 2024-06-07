import React from 'react';
import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div style={{width:'100px', borderRadius:'50px', color:'blue'}}>
            <Navbar/>
            <Outlet/>
            
        </div>
    );
};

export default Layout;