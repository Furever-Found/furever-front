import './VetList.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faMapPin, faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const VetList = () => {

    return (
        <body>
            <div class="vetlist-header header">
                <div class="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size='1.5x' class='location-icon'/> 
                        Santa Clara, California, USA
                    <img id="vet-img" src={require('../Assets/vet-img.png')} alt="vet-img" class='vet-profile-img' />
                </div>
            </div>
            <div class="vetlist-heading">
                <h1>San Jose Animal Shelter</h1>
            </div>
            <div class="vetlist-body">
                <div class="vetlist-first-row list-row">
                    <Link to="/vetInfo">
                        <div class="list-box box1 col-xs-6 col-sm-4">
                            <span>
                                <img id="list-box-pet" src={require('../Assets/charlie.png')} alt="pet-img" class='list-box-img' />
                            </span>
                            <div class="list-box-name">
                                Charlie
                            </div>
                        </div>
                    </Link>
                    <Link to="/vetInfo">
                        <div class="list-box box2 col-xs-6 col-sm-4">
                            <span>
                                <img id="list-box-pet" src={require('../Assets/charlie.png')} alt="pet-img" class='list-box-img' />
                            </span>
                            <div class="list-box-name">
                                Charlie
                            </div>
                        </div>
                    </Link>
                    <Link to="/vetInfo">
                        <div class="list-box box3 col-xs-6 col-sm-4">
                            <span>
                                <img id="list-box-pet" src={require('../Assets/max.png')} alt="pet-img" class='list-box-img' />
                            </span>
                            <div class="list-box-name">
                                Max
                            </div>
                        </div>
                    </Link>
                    <Link to="/vetInfo">
                        <div class="list-box box4 col-xs-6 col-sm-4">
                            <span>
                                <img id="list-box-pet" src={require('../Assets/buddy.png')} alt="pet-img" class='list-box-img' />
                            </span>
                            <div class="list-box-name">
                                Buddy
                            </div>
                        </div>
                    </Link>
                    <Link to="/vetInfo">
                        <div class="list-box box5 col-xs-6 col-sm-4">
                            <span>
                                <img id="list-box-pet" src={require('../Assets/archie.png')} alt="pet-img" class='list-box-img' />
                            </span>
                            <div class="list-box-name">
                                Archie
                            </div>
                        </div>
                    </Link>
                    <Link to="/vetInfo">
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
                <div class="vetlist-second-row list-row">
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
                    <Link to="/info">
                        <div class="list-box box2 col-xs-6 col-sm-4">
                            <span>
                                <img id="list-box-pet" src={require('../Assets/charlie.png')} alt="pet-img" class='list-box-img' />
                            </span>
                            <div class="list-box-name">
                                Charlie
                            </div>
                        </div>
                    </Link>
                    <Link to="/info">
                        <div class="list-box box3 col-xs-6 col-sm-4">
                            <span>
                                <img id="list-box-pet" src={require('../Assets/max.png')} alt="pet-img" class='list-box-img' />
                            </span>
                            <div class="list-box-name">
                                Max
                            </div>
                        </div>
                    </Link>
                    <Link to="/info">
                        <div class="list-box box4 col-xs-6 col-sm-4">
                            <span>
                                <img id="list-box-pet" src={require('../Assets/buddy.png')} alt="pet-img" class='list-box-img' />
                            </span>
                            <div class="list-box-name">
                                Buddy
                            </div>
                        </div>
                    </Link>
                    <Link to="/info">
                        <div class="list-box box5 col-xs-6 col-sm-4">
                            <span>
                                <img id="list-box-pet" src={require('../Assets/archie.png')} alt="pet-img" class='list-box-img' />
                            </span>
                            <div class="list-box-name">
                                Archie
                            </div>
                        </div>
                    </Link>
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
                <div class="vetlist-third-row list-row">
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
                    <Link to="/info">
                        <div class="list-box box2 col-xs-6 col-sm-4">
                            <span>
                                <img id="list-box-pet" src={require('../Assets/charlie.png')} alt="pet-img" class='list-box-img' />
                            </span>
                            <div class="list-box-name">
                                Charlie
                            </div>
                        </div>
                    </Link>
                    <Link to="/info">
                        <div class="list-box box3 col-xs-6 col-sm-4">
                            <span>
                                <img id="list-box-pet" src={require('../Assets/max.png')} alt="pet-img" class='list-box-img' />
                            </span>
                            <div class="list-box-name">
                                Max
                            </div>
                        </div>
                    </Link>
                    <Link to="/info">
                        <div class="list-box box4 col-xs-6 col-sm-4">
                            <span>
                                <img id="list-box-pet" src={require('../Assets/buddy.png')} alt="pet-img" class='list-box-img' />
                            </span>
                            <div class="list-box-name">
                                Buddy
                            </div>
                        </div>
                    </Link>
                    <Link to="/info">
                        <div class="list-box box5 col-xs-6 col-sm-4">
                            <span>
                                <img id="list-box-pet" src={require('../Assets/archie.png')} alt="pet-img" class='list-box-img' />
                            </span>
                            <div class="list-box-name">
                                Archie
                            </div>
                        </div>
                    </Link>
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
            </div>
        </body>
    )
};
export default VetList;