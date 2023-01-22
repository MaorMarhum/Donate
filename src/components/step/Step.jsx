import React from 'react';
import './Step.css'
import imgHolder from '../../assets/logo.png'

const Step = () => {
    return (
        <div className='donate__step'>
            <div className="donate__step-content">
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, modi!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptatum dolorum tempore nisi earum ad nam numquam enim alias quaerat!</p>
            </div>
            <div className="donate__step-img">
                <img src={imgHolder} alt="holder" />
            </div>
        </div>
    );
}

export default Step;
