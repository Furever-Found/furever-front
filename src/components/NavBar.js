import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NavBar.css';

const NavBar = ({ }) => {

    return (
        <>
        <nav id="navbar">
            

            <div class='user-info'>
                <Link to="/">
                <i class="fa fa-map-marker" style="font-size:36px"></i>
                <div class='user-location'>
                    <h3>San Jose, California, USA</h3>
                </div>
                <div class='user-img'>
                    <img src={require("../Assets/user-img.png")} alt="User Image" />
                </div>
                </Link>
            </div>
        
        
        </nav>        
        
        </>
    )
};

export default NavBar;