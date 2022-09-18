import './Main.css';
import React, {useState} from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


const Main = () => {
    return (
        <body>
            <div class="main-header"><h1>Main (SiteMap)</h1></div>
            <div class="page-map">
                <div class="pet-page">
                    <h2>Page for Pet Owner</h2>
                    
                    <Link to="/mypage"><h3>My Page</h3></Link>
                    
                    <Link to="/info"><h3>Pet Info</h3></Link>
                   
                    <Link to="/list"><h3>Pet List</h3></Link>
                    
                </div>
                <div class="vet-page">
                    <h2>Page for Vet</h2>
                    <Link to="/vetList"><h3>Pet List for Vet</h3></Link>
                    <Link to="/vetInfo"><h3>Pet Info for Vet</h3></Link>
                    <Link to="/edit"><h3>Pet Edit</h3></Link>

                </div>
            </div>
            
            <div>
            </div>
            
            <Link to="/*"></Link>
        </body>
    )
};
export default Main;