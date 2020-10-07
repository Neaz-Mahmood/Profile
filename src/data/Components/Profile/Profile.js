import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import "./Profile.css";

const Profile = (props) => {
    const {id, name, email, phone, yearly_selary, picture} = props.profile;
    const addMeButton = props.addMeButton;
    return (
        <div className="profile-style">
            <div>
                <img src={picture} alt=""/>
            </div>
            <div className="info">
                <h3>Name: {name}</h3>
                <p>Email: {email}</p>
                <p>Phone no: {phone}</p>
                <p>Yearly selary: ${yearly_selary}</p>
                <button className="main-button"  onClick={()=> addMeButton(props.profile)}>
                    <FontAwesomeIcon icon={faPlusSquare} />add me
                </button>
            </div>
        </div>
    );
};

export default Profile;