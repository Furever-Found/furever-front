import './Edit.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faMapPin, faMapMarkerAlt, faCheck, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


const Edit = () => {
    const [petInfo, setPetInfo] = useState({
        breed : "",
        weight : "",
        sex: "",
        age : "",
        color : null
    })

    const onPetInfoChange = (e) => setPetInfo(prevInfo => ({ ...prevInfo, [e.target.name]: e.target.value }) )


    const [ownerInfo, setOwnerInfo] = useState({
        ownerName: "",
        ownerAddress: ""
    })
    const onOwnerInfoChange = (e) => setOwnerInfo(prevInfo => ({ ...prevInfo, [e.target.name]: e.target.value }) )


    const [vetInfo, setVetInfo] = useState({
        vetClinic: "",
        vetName: "",
        vetNumber: ""
    })
    const onVetInfoChange = (e) => setVetInfo(prevInfo => ({ ...prevInfo, [e.target.name]: e.target.value }) )

    const [vaccine, setVaccine] = useState([{
        vaccineName: "",
        vaccineDate: ""
    }])

    const onVaccineChange = (index, target) => e => {
        let newArr = [...vaccine];
        newArr[index][target] = e.target.value;
        setVaccine(newArr);
    }

    const [vetNote, setVetNote] = useState({
        note: "",
        noteDate: ""
    })

    const onVetNoteChange = (index, target) => e => {
        let newArr = [...vetNote];
        newArr[index][target] = e.target.value;
        setVetNote(newArr);
    }
    return (
        <body>
            
            <div class="pet-info-edit">
                <div class="edit-header header">
                    <div class="edit-save">
                        <button type="button" class="saveBtn">Save</button>
                    </div>

                    <div class="location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size='1.5x' class='location-icon'/> 
                            Santa Clara, California, USA
                        <img id="vet-img" src={require('../Assets/vet-img.png')} alt="vet-img" class='vet-profile-img' />
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
                                <span>Breed:</span> 
                                <input class="pet-info-input info-input" type="text" name="breed" placeholder="ex) Maltese Mix" onChange={onPetInfoChange} />
                            </div>
                            <div>
                                <span>Weight:</span>
                                <input class="pet-info-input info-input" type="text" name="weight" placeholder="ex) 19.7 lbs " onChange={onPetInfoChange} />

                            </div>
                            <div>
                                <span>Sex:</span>  
                                <input class="pet-info-input info-input" type="text" name="sex" placeholder="ex) Male" onChange={onPetInfoChange} />

                            </div>
                            <div>
                                <span>Age:</span> 
                                <input class="pet-info-input info-input" type="text" name="age" placeholder="ex) 10 years, 2 months  " onChange={onPetInfoChange} />

                            </div>
                            <div>
                                <span>Color:</span>  
                                <input class="pet-info-input info-input" type="text" name="color" placeholder="ex) White " onChange={onPetInfoChange} />

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
                                    <span>Owner:</span> 
                                    <input class="owner-info-input info-input" type="text" name="ownerName" placeholder="ex) Ysabel Chen " onChange={onOwnerInfoChange} />

                                </div>
                                <div class="owner-address">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size='1.5x' class='address-icon'/>
                                    
                                    <textarea class="owner-info-input info-input" type="text" name="ownerAddress" 
                                    placeholder="ex) 1234 Example St.
                                    San Jose, California, 98765 
                                    USA  " 
                                    onChange={onOwnerInfoChange} />


                                </div>
                            </div>
                        </div>
                        <div class="pet-vet-info">
                            <h1 class="pet-info-h1">VETERINARIAN INFORMATION</h1>
                            <div class="pet-vet-detail">
                                <div class='vet-clinic'>
                                    <span>Veterinary Clinic: </span> 
                                    <input class="vet-info-input info-input" type="text" name="vetClinic" placeholder="ex) SJ Veterinary Clinic " onChange={onVetInfoChange} />

                                </div>
                                <div class='vet-info'>
                                    <span>Veterinarian: </span> 
                                    <div class="vet-name">
                                        <input class="vet-info-input info-input" type="text" name="vetName" placeholder="ex) Dr.Log Doggs " onChange={onVetInfoChange} />
                                        <br/>
                                        <input class="vet-info-input info-input" type="text" name="vetNumber" placeholder="ex) FED ID: 12345678 " onChange={onVetInfoChange} />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pet-vaccinations">
                        <div class="pet-vaccine-header">
                            <h1 class="pet-info-h1">VACCINATIONS</h1>
                            <div class="add-vaccination">
                                <img id="add-vaccine" src={require('../Assets/add-vaccine.png')} alt="add-vaccine" class='add-vaccine-img' />
                            </div>
                        </div>
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
                        <div class="vet-note-header">
                            <div class="pet-info-h1">VETERINARIAN NOTES</div>
                            <img id="add-note" src={require('../Assets/add-note.png')} alt="add-note" class='add-note-img' />
                        </div>
                        <div class="add-vet-note">
                            <textarea class="vet-note-input info-input" type="text" name="note" 
                                    placeholder="Type note..." 
                                    onChange={onVetNoteChange} />
                            
                            <button type="button" class="addNoteBtn">Add note</button>

                        </div>
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
export default Edit;