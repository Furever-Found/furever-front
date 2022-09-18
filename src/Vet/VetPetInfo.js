import './VetPetInfo.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faMapPin, faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


const VetPetInfo = () => {



    return (
        <body>
            <div class="pet-info">
                <div class="info-header header">
                    <div class="last-updated">
                        <span>Last Updated:</span> September 1, 2020
                    </div>

                    <div class="location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size='1.5x' class='location-icon'/> 
                         San Jose, California, USA
                        <img id="user-img" src={require('../Assets/user-img.png')} alt="user-img" class='user-profile-img' />
                    </div>
                </div>
                <div class="pet-info-name">
                    <h1>BLAZEY</h1>
                </div>
                <div class="pet-info-detail">
                    <div class="pet-info-head">
                        <div class="pet-info-img">
                            <img id="pet-img" src={require('../Assets/charlie.png')} alt="pet-img" class='pet-box-img' />
                        </div>
                        <div class="pet-info-list">
                            <div>
                                <span>Species:</span> Dog
                            </div>
                            <div>
                                <span>Breed:</span> Maltese mix 
                            </div>
                            <div>
                                <span>Weight:</span> 19.7 lbs 
                            </div>
                            <div>
                                <span>Sex:</span> Male 
                            </div>
                            <div>
                                <span>Age:</span> 10 years, 2 months 
                            </div>
                            <div>
                                <span>Color:</span> White 
                            </div>
                            <div>
                                <span>Microchipped On:</span> July 1st, 2013 
                            </div>
                            <div>
                                <span>RFID:</span> 12345abcde
                            </div>
                        </div>
                        <div class="pet-owner-info">
                            <h1 class="pet-info-h1">OWNER INFORMATION</h1>
                            <div class="pet-owner-detail">
                                <div class="owner-name">
                                    <span>Owner:</span> Ysabel Chen
                                </div>
                                <div class="owner-address">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size='1.5x' class='address-icon'/>
                                    <div class="address-detail">
                                        1234 Example St. <br/>
                                        San Jose, California, 98765 <br/>
                                        USA    
                                    </div> 

                                </div>
                            </div>
                        </div>
                        <div class="pet-vet-info">
                            <h1 class="pet-info-h1">VETERINARIAN INFORMATION</h1>
                            <div class="pet-vet-detail">
                                <div class='vet-clinic'>
                                    <span>Veterinary Clinic: </span> SJ Veterinary Clinic
                                </div>
                                <div class='vet-info'>
                                    <span>Veterinarian: </span> 
                                    <div class="vet-name">
                                        Dr.Log Doggs <br />
                                        FED ID: 12345678
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pet-vaccinations">
                        <h1 class="pet-info-h1">VACCINATIONS</h1>
                        <div class="vaccination-table">
                            <div class="vaccination-list">
                                <div class="vaccination-name">
                                    LYME
                                </div>
                                <div class="vaccination-check">
                                    <FontAwesomeIcon icon={faCheck} class='check-icon' />
                                    

                                </div>
                                <div class="vaccination-date">
                                    October 3rd, 2013
                                </div>
                            </div>
                            <div class="vaccination-list">
                                <div class="vaccination-name">
                                    influenza h2n8
                                </div>
                                <div class="vaccination-check">
                                    <FontAwesomeIcon icon={faCheck} class='check-icon' />
                                </div>
                                <div class="vaccination-date">
                                    October 3rd, 2013
                                </div>
                            </div>
                            <div class="vaccination-list">
                                <div class="vaccination-name">
                                    influenza h3n8
                                </div>
                                <div class="vaccination-check">
                                    <FontAwesomeIcon icon={faCheck} class='check-icon' />
                                </div>
                                <div class="vaccination-date">
                                    October 3rd, 2013
                                </div>
                            </div>
                            <div class="vaccination-list">
                                <div class="vaccination-name">
                                    bordetella
                                </div>
                                <div class="vaccination-check">
                                    <FontAwesomeIcon icon={faCheck} class='check-icon' />
                                    

                                </div>
                                <div class="vaccination-date">
                                    October 3rd, 2013
                                </div>
                            </div>
                            <div class="vaccination-list">
                                <div class="vaccination-name">
                                    leptospira
                                </div>
                                <div class="vaccination-check">
                                    <FontAwesomeIcon icon={faCheck} class='check-icon' />
                                    

                                </div>
                                <div class="vaccination-date">
                                    October 3rd, 2013
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pet-veterinarian">
                        <div class="pet-info-h1">VETERINARIAN NOTES</div>
                        <div class="vet-note">
                            <div class="note-date">
                                September 1, 2020
                            </div>
                            <div class="note-contents">
                                Routine, annual check-up. Blazey is doing well! Our veterinarians love him:)
                            </div>
                        </div>
                    </div>
                </div>
                <div class=""></div>
            </div>
        </body>
    )
};
export default VetPetInfo;