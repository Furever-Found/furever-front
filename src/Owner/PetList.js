import './PetList.css';
import React, {useState} from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const PetList = () => {
    return (
        <body>
            <div class="list-heading">
                <h1>San Jose Animal Shelter</h1>
                <h3>Description of the shelter</h3>
                <h2>Animals Available for Adoption</h2>
            </div>
            <div class="list-first-row">
                <Link to="/info">
                    <div class="list-box box1 col-xs-6 col-sm-4">
                        <span>
                            <img id="list-box-pet" src={require('../Assets/charlie.png')} alt="pet-img" class='list-box-img' />
                        </span>
                        <div class="list-box-name">
                            Charlie
                        </div>
                    </div>
                </Link>
                <div class="list-box box2 col-xs-6 col-sm-4">
                    <span>
                        <img id="list-box-pet" src={require('../Assets/charlie.png')} alt="pet-img" class='list-box-img' />
                    </span>
                    <div class="list-box-name">
                        Charlie
                    </div>
                </div>
                <div class="list-box box3 col-xs-6 col-sm-4">
                    <span>
                        <img id="list-box-pet" src={require('../Assets/max.png')} alt="pet-img" class='list-box-img' />
                    </span>
                    <div class="list-box-name">
                        Max
                    </div>
                </div>
                <div class="list-box box4 col-xs-6 col-sm-4">
                    <span>
                        <img id="list-box-pet" src={require('../Assets/buddy.png')} alt="pet-img" class='list-box-img' />
                    </span>
                    <div class="list-box-name">
                        Buddy
                    </div>
                </div>
                <div class="list-box box5 col-xs-6 col-sm-4">
                    <span>
                        <img id="list-box-pet" src={require('../Assets/archie.png')} alt="pet-img" class='list-box-img' />
                    </span>
                    <div class="list-box-name">
                        Archie
                    </div>
                </div>
                <Link to="/info">
                    <div class="list-box box6 col-xs-6 col-sm-4">
                        <span>
                            <img id="list-box-pet list-img-blazey" src={require('../Assets/blazey.png')} alt="pet-img" class='list-box-img' />
                        </span>
                        <div class="list-box-name">
                            Blazey
                        </div>
                    </div>
                </Link>
            </div>
        </body>
    )
};
export default PetList;