import './Main.css';
import React, {useState} from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


const Main = () => {
    return (
        <body>
            <h1>Main</h1>
            <div>
                <Link to="/mypage"><h1>My Page</h1></Link>
            </div>
            <div>
                <Link to="/info"><h1>Pet Info</h1></Link>
            </div>
            <div>
                <Link to="/list"><h1>Pet List</h1></Link>
            </div>
            <div>
                <Link to="/edit"><h1>Pet Edit</h1></Link>
            </div>
            
            <Link to="/*"></Link>
        </body>
    )
};
export default Main;