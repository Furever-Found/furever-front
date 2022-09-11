import './PetInfo.css';
import React, {useState} from 'react';

const PetInfo = () => {




    return (
        <body>
            <div class="pet-info">
                <div class="info-header">
                    <div class="last-updated">
                        <span>Last Updated:</span> September 1, 2020
                    </div>
                    <div class="location">
                        <i class="fa fa-map-marker fa-5x" title="map marker" aria-hidden="true"></i> 
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
                                <span>Microchipped On:</span>July 1st, 2013 
                            </div>
                            <div>
                                <span>RFID:</span> 12345abcde
                            </div>
                        </div>
                        <div class="pet-owner-info">
                            <h1 class="pet-info-h1">OWNER INFORMATION</h1>
                            <div class="pet-owner-detail">
                                <span>Owner:</span> Ysabel Chen
                                <div calss="owner-address">

                                </div>
                            </div>
                        </div>
                        <div class="pet-vet-info">
                            <h1 class="pet-info-h1">OWNER INFORMATION</h1>
                            <div class="pet-vet-detail">
                                <span>Veterinary Clinic:</span> SJ Veterinary Clinic <br />
                                
                                <span>Veterinarian:</span> 
                                <div class="vet-info">
                                    Dr.Log Doggs <br />
                                    FED ID: 12345678
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pet-vaccinations">

                    </div>
                    <div class="pet-veterinarian">

                    </div>
                </div>
                <div class=""></div>
            </div>
        </body>
    )
};
export default PetInfo;